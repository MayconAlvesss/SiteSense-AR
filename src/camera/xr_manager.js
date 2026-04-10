/**
 * SiteSense-AR — XR Manager
 * =======================
 * Handles the WebXR session lifecycle, AR camera synchronization,
 * and hit-test initialization for BIM alignment.
 */

export class XRManager {
    constructor(renderer) {
        this.renderer = renderer;
        this.session = null;
        this.hitTestSource = null;
        this.hitTestSourceRequested = false;
    }

    /**
     * Attempts to start an AR immersive session.
     */
    async startSession() {
        if (this.session) return;

        try {
            const sessionInit = { requiredFeatures: ['hit-test'] };
            this.session = await navigator.xr.requestSession('immersive-ar', sessionInit);
            
            this.renderer.xr.setReferenceSpaceType('local');
            await this.renderer.xr.setSession(this.session);
            
            console.log("AR Session started successfully.");
        } catch (error) {
            console.error("Failed to start AR Session:", error);
            alert("This device does not support WebXR AR or is missing permissions.");
        }
    }

    /**
     * Updates the hit-test source during the animation loop.
     */
    updateHitTest(frame) {
        if (!this.session) return;

        if (this.hitTestSourceRequested === false) {
            const referenceSpace = this.renderer.xr.getReferenceSpace();
            this.session.requestReferenceSpace('viewer').then((viewerSpace) => {
                this.session.requestHitTestSource({ space: viewerSpace }).then((source) => {
                    this.hitTestSource = source;
                });
            });
            this.hitTestSourceRequested = true;
        }

        if (this.hitTestSource) {
            const hitTestResults = frame.getHitTestResults(this.hitTestSource);
            if (hitTestResults.length) {
                const hit = hitTestResults[0];
                return hit.getPose(this.renderer.xr.getReferenceSpace());
            }
        }
        return null;
    }

    endSession() {
        if (this.session) {
            this.session.end();
            this.session = null;
            this.hitTestSourceRequested = false;
            this.hitTestSource = null;
        }
    }
}
