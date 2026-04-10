<p align="center">
  <img src="https://img.icons8.com/wired/128/007ACC/marker.png" width="80" />
</p>

# <p align="center">SiteSense-AR</p>

<p align="center">
  <strong>Universal Web-based Augmented Reality for BIM Site Verification.</strong><br>
  Visualizing structural, MEP, and architectural services directly on the physical construction environment.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Interface-WebXR-007ACC?style=flat-square" />
  <img src="https://img.shields.io/badge/Engine-Three.js-007ACC?style=flat-square" />
  <img src="https://img.shields.io/badge/Dev-Vite-007ACC?style=flat-square" />
  <img src="https://img.shields.io/badge/Status-Beta_Candidate-444444?style=flat-square" />
</p>

---

## 🛰️ Reality-BIM Synchronization
SiteSense-AR bridges the gap between the design office and the canteiro de obras. Utilizing a specialized **3-Point Spatial Alignment** strategy, it maps virtual BIM coordinates to local site physical grids with sub-centimeter theoretical precision.

### Field Operational Flow
1. **Preparation**: Load optimized `.glb` structural meshes from the project CDE.
2. **Calibration**: Perform 3-point alignment against known site control points (Grid intersections).
3. **Verification**: Toggle "X-Ray" transparency modes to inspect services hidden behind slabs or formwork.
4. **Drift Compensation**: On-the-fly SLAM monitoring to detect and correct tracking deviance.

## 🏗️ Technical Architecture

### 1. The Session (`/camera`)
- **`xr_manager.js`**: Core life-cycle management for the WebXR session and SLAM sync.

### 2. The Overlay Engine (`/logic`)
- **`overlay_engine.js`**: Calculations for the Rotation-Scale-Translation (RST) matrix needed for BIM-to-Site locking.

### 3. The Visualization (`/renderer`)
- **`bim_viewer.js`**: Three.js scene management optimized for high-performance mobile GPUs.

---

## ⚡ Quick Start

```bash
# 1. Setup
npm install

# 2. Launch for Mobile testing (HTTPS required for AR)
npm run dev -- --host
```

---
<p align="center">
  <i>Part of the <b>Nexus-Twin</b> Ecosystem | Engineering Strategy by <b>Maycon Alves</b></i>
</p>
