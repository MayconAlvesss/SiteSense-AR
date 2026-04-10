/**
 * SiteSense-AR — Overlay Engine
 * ============================
 * Manages the logic for aligning digital BIM coordinates with
 * physical AR space using hit-test results and anchor points.
 */

import * as THREE from 'three';

export class OverlayEngine {
    constructor(scene) {
        this.scene = scene;
        this.anchors = [];
        this.currentModel = null;
    }

    /**
     * Positions a model based on a hit-test pose result.
     * @param {THREE.Object3D} model 
     * @param {XRPose} pose 
     */
    alignModelToPose(model, pose) {
        if (!model || !pose) return;

        model.position.set(
            pose.transform.position.x,
            pose.transform.position.y,
            pose.transform.position.z
        );
        model.quaternion.set(
            pose.transform.orientation.x,
            pose.transform.orientation.y,
            pose.transform.orientation.z,
            pose.transform.orientation.w
        );
        
        console.log("Model aligned to physical surface.");
    }

    /**
     * Toggles X-Ray mode by adjusting material opacities
     * for all meshes child to the scene.
     */
    toggleXRay(enabled) {
        this.scene.traverse((object) => {
            if (object.isMesh && object.material) {
                object.material.transparent = true;
                object.material.opacity = enabled ? 0.3 : 0.8;
                object.material.needsUpdate = true;
            }
        });
    }

    /**
     * Calculates the deviation between two alignment points
     * to determine scaling factors between CAD coords and AR coords.
     */
    calculateScale(p1_cad, p2_cad, p1_ar, p2_ar) {
        const cadDist = p1_cad.distanceTo(p2_cad);
        const arDist = p1_ar.distanceTo(p2_ar);
        
        if (cadDist === 0) return 1.0;
        return arDist / cadDist;
    }
}
