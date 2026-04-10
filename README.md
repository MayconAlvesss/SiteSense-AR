# SiteSense-AR 📱 — Web-based Mobile BIM Overlay

> **On-site Augmented Reality (AR) for BIM model verification. Visualize rebar, formwork, and MEP services directly on the physical construction environment using WebXR and Three.js.**

---

## ✅ Status

> **Mobile-First Prototype.** Core WebXR session management and Three.js rendering pipeline established. Features an initial alignment logic for overlaying digital models onto physical markers or spatial anchors. Designed for rapid on-site verification without heavy hardware.

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| **WebXR AR Session** | High-performance AR tracking via browser-native WebXR API |
| **BIM/IFC Mesh Overlay** | Optimized Three.js rendering of BIM geometry (converted to GLB/Three) |
| **Occlusion Handling** | Basic depth-testing for more realistic overlays in complex environments |
| **Modular Alignment** | Multi-point alignment system for syncing local coordinate systems to the project grid |
| **X-Ray Mode** | Toggle-able transparency for seeing MEP services hidden behind slabs or walls |

---

## 🛠️ Technical Stack

| Layer | Technology |
|---|---|
| **Engine** | Three.js (R160+) |
| **AR Interface** | WebXR Device API |
| **Framework** | Vanilla ES6+ / Vite |
| **Spatial Ops** | WebXR Hit-Testing |
| **Bundler** | Vite (Production-grade HMR) |

---

## 📂 Project Structure

```text
SiteSense-AR/
├── public/                      # Static assets (3D models, icons)
│   └── models/                  # Placeholder GLB/GLTF BIM models
│
├── src/                         # Application source
│   ├── camera/
│   │   └── xr_manager.js        # AR Session life-cycle and XRCamera sync
│   │
│   ├── renderer/
│   │   └── bim_viewer.js        # Three.js Scene, Lights, and Renderer setup
│   │
│   ├── logic/
│   │   └── overlay_engine.js    # Alignment, Scaling, and Occlusion logic
│   │
│   ├── config/
│   │   └── settings.js          # Material properties and AR thresholds
│   │
│   ├── main.js                  # Entry point
│   └── style.css                # Glassmorphic UI overlays
│
├── index.html                   # Main entry page
├── package.json                 # Node dependencies
├── vite.config.js               # Optimized build config
└── README.md                    # Professional documentation
```

---

## ⚡ Quick Start

### Step 1 — Install Dependencies

```powershell
npm install
```

### Step 2 — Start Development Server

```powershell
npm run dev -- --host
```

*Note: AR features require HTTPS or localhost access. Host flag is needed for mobile testing.*

---

## 🗺️ Roadmap

- [x] **WebXR Core** — Stable AR session initialization and camera sync
- [x] **Overlay Scene** — Three.js environment with responsive lighting
- [x] **Marker Alignment** — Manual 2-point alignment for model positioning
- [ ] **LiDAR Support** — Real-time mesh occlusion for supported iOS/Android devices
- [ ] **IFC.js Integration** — Direct .ifc loading and parsing on the client side
- [ ] **Cloud Model Sync** — Auto-fetching latest models from BIM360/Autodesk Construct

---

## 📄 License

Developed for professional recruitment and AEC research purposes.  
See internal documentation for specific licensing terms.

---

<div align="center">
  <b>Bridging the gap between the design office and the construction site through WebAR.</b>
  <br><br>
  <i>💡 Architecture & Engineering by <b>Maycon Alves</b></i>
  <br>
  <a href="https://github.com/MayconAlvesss" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/maycon-alves-a5b9402bb/" target="_blank">LinkedIn</a>
</div>
