/**
 * SiteSense-AR — BIM Viewer
 * ========================
 * Setups the Three.js scene, camera, lighting, and rendering loop
 * specifically for AR overlay tasks.
 */

import * as THREE from 'three';

export class BIMViewer {
    constructor(canvasContainer) {
        this.container = canvasContainer;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.xr.enabled = true;
        
        this.container.appendChild(this.renderer.domElement);
        
        this._initLights();
        this._initResizeHandler();
    }

    _initLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 10, 7);
        this.scene.add(dirLight);
    }

    _initResizeHandler() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    /**
     * Creates a placeholder BIM element (a ghosted cube) to represent
     * a structural column or beam during alignment.
     */
    createPlaceholder(geometry = new THREE.BoxGeometry(0.5, 3, 0.5), color = 0x00ff00) {
        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.5,
            wireframe: false
        });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
        return mesh;
    }

    animate(callback) {
        this.renderer.setAnimationLoop((timestamp, frame) => {
            callback(timestamp, frame);
            this.renderer.render(this.scene, this.camera);
        });
    }
}
