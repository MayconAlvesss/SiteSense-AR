# 📱 SiteSense-AR: On-site BIM Overlay

**High-Performance Augmented Reality for Civil Engineering Verification.**

SiteSense-AR is a Web-based AR utility that projects BIM models (Structural, MEP, Architectural) directly onto the physical environment using the **WebXR Device API**. It enables site engineers to verify rebar, formwork, and service placements against the design model in real-time without proprietary hardware.

---

## 🛰️ Reality-BIM Synchronization

Achieving a precise overlay requires mapping the virtual BIM coordinate system to the local site physical grid. SiteSense-AR uses a specialized **3-Point Spatial Alignment** strategy:

1.  **Selection**: The user identifies three known Control Points (e.g., column intersections) on the physical site.
2.  **Mapping**: These points are correlated with their virtual counterparts in the 3D model.
3.  **Transformation**: The engine calculates the required Rotation, Scaling, and Translation (RST) matrix to lock the BIM model in place.

---

## 📂 Implementation Architecture

### 🛡️ XR Manager (`/camera`)
- Handles the WebXR session lifecycle.
- Synchronizes theThree.js camera with the physical device pose (SLAM).

### 🔍 Overlay Engine (`/logic`)
- **`overlay_engine.js`**: Core spatial logic. *[WIP: Implementing Drift Compensation for long-duration sessions]*.
- **`bim_viewer.js`**: Three.js scene management and material optimizations for outdoor visibility.

### 🧪 Experimental Lab (`/lab`)
- **`alignment_simulation.js`**: Testing RST matrix precision under variable drift conditions.

---

## ⚡ Tech & Performance
- **WebXR**: Native AR tracking on iOS (via WebXR Viewer) and Android (Chrome).
- **Three.js**: Optimized mesh rendering with custom shaders for "X-ray" occlusion.

---

## ⚡ Field Usage
```javascript
import { OverlayEngine } from './logic/overlay_engine';

const engine = new OverlayEngine();

// Synchronize BIM coordinates to Physical World (Control Points)
engine.alignModel([
    { world: [0, 0, 0], model: [100.2, 50.1, 0] }, // Point A (Grid A1)
    { world: [5, 0, 0], model: [105.2, 50.1, 0] }  // Point B (Grid A2)
]);

engine.setTransparency(0.4); // Activate X-Ray Mode
```

---

## 🛣️ 2028 Vision
- [ ] **LiDAR Occlusion**: Automated masking of BIM models by physical site elements (walls/shuttering).
- [ ] **Semantic Highlighting**: "Show me only the Hot Water service pipes."
- [ ] **Survey Station Integration**: Direct sync with total station coordinates via Bluetooth.

---

<div align="center">
  <i>Part of the <b>Nexus-Twin</b> Ecosystem</i><br>
  Engineering Strategy & Implementation by **Maycon Alves**
</div>
