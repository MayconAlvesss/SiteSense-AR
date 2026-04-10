# SiteSense-AR: A Field Guide for Site Verification

This document provides a procedural overview of using the SiteSense-AR WebXR utility for real-time BIM verification on the construction site.

---

### Step 1: Preparation & Environment
SiteSense-AR runs directly in the mobile browser. To ensure high-fidelity tracking, the field engineer should:
1. Ensure the site has adequate ambient lighting for SLAM (Simultaneous Localization and Mapping).
2. Download the latest `.glb` or `.gltf` structural export from the project coordinator.
3. Access the utility via HTTPS (required for WebXR security).

### Step 2: Spatial Calibration (The 3-Point Sync)
Mapping virtual BIM coordinates to the physical site is done through a 3-point alignment protocol:
- **Marker A**: Select a known primary grid intersection (e.g., A1/1).
- **Marker B**: Select a secondary intersection (e.g., A1/5) at least 5 meters away to lock the scale and rotation.
- **Marker C**: Select a tertiary point for vertical (Z-axis) verification.

The `OverlayEngine` will calculate the RST matrix and lock the BIM model to the digital twin anchors.

### Step 3: Verify and Inspect (X-Ray Mode)
Once calibrated, use the on-screen UI to:
- **Toggle Layers**: Filter between Structural, MEP, and Architectural sub-models.
- **X-Ray Depth**: Adjust transparency to view hidden services behind concrete slabs.
- **Drift Monitoring**: If the model begins to slide, the system will trigger a SLAM drift warning, requiring a quick 1-point re-sync.

---

## 🏗️ Technical Foundation
- **`xr_manager.js`**: Core WebXR session lifecycle.
- **`overlay_engine.js`**: 3-point spatial transformation logic.
- **Three.js**: Optimized rendering for mobile mobile GPUs.

## ⚡ Deployment
```bash
npm install
npm run dev -- --host
```
*Tested on Chrome (Android) and WebXR Viewer (iOS).*

---
*SiteSense-AR | Augmented Engineering by Maycon Alves.*
