/**
 * SiteSense-AR Settings
 * ====================
 * Global configuration for materials, AR thresholds, and alignment defaults.
 */

export const AR_SETTINGS = {
    // Default material properties for 'Ghost' mode
    DEFAULT_OPACITY: 0.6,
    ALIGNED_COLOR: 0x27ae60, // Green
    MISALIGNED_COLOR: 0xe74c3c, // Red
    
    // AR session flags
    REQUIRED_FEATURES: ['hit-test', 'dom-overlay'],
    OPTIONAL_FEATURES: ['light-estimation', 'depth-sensing'],
    
    // UI Overlay container ID
    UI_CONTAINER_ID: 'ar-instructions-overlay',
    
    // Scale normalization (CAD mm to Three.js m)
    CAD_TO_METER_SCALE: 0.001,
    
    // Maximum distance for hit-test anchors (meters)
    MAX_ANCHOR_DISTANCE: 5.0
};
