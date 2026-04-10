/**
 * SiteSense-AR — Main Entry Point
 * ==============================
 * Orchestrates the AR session, BIM viewer, and UI interactions.
 */

import { BIMViewer } from './renderer/bim_viewer.js';
import { XRManager } from './camera/xr_manager.js';
import { OverlayEngine } from './logic/overlay_engine.js';
import { AR_SETTINGS } from './config/settings.js';

class SiteSenseApp {
    constructor() {
        this.viewer = new BIMViewer(document.getElementById('canvas-container'));
        this.xrManager = new XRManager(this.viewer.renderer);
        this.engine = new OverlayEngine(this.viewer.scene);
        
        this.isXRayEnabled = false;
        this._initUI();
    }

    _initUI() {
        const startBtn = document.getElementById('start-ar');
        const xrayBtn = document.getElementById('toggle-xray');
        const resetBtn = document.getElementById('reset-origin');

        startBtn.addEventListener('click', () => {
            this.xrManager.startSession();
            document.body.classList.add('scanning-active');
        });

        xrayBtn.addEventListener('click', () => {
            this.isXRayEnabled = !this.isXRayEnabled;
            this.engine.toggleXRay(this.isXRayEnabled);
            xrayBtn.innerText = this.isXRayEnabled ? 'Disable X-Ray' : 'Enable X-Ray';
        });

        resetBtn.addEventListener('click', () => {
            if (this.engine.currentModel) {
                this.engine.currentModel.position.set(0, 0, -2);
                this.engine.currentModel.rotation.set(0, 0, 0);
            }
        });
    }

    run() {
        // Create placeholder BIM geometry (Global structural unit)
        const ghostBeam = this.viewer.createPlaceholder();
        ghostBeam.position.set(0, 1.5, -3); // Initial position 3m in front
        this.engine.currentModel = ghostBeam;

        // Animation Loop
        this.viewer.animate((timestamp, frame) => {
            if (frame) {
                const hitPose = this.xrManager.updateHitTest(frame);
                if (hitPose && this.xrManager.session) {
                    // Log for debugging alignment in global environment
                    // this.engine.alignModelToPose(ghostBeam, hitPose);
                }
            }
        });
    }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
    const app = new SiteSenseApp();
    app.run();
});
