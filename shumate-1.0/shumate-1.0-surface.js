// The widget vocabulary of Shumate-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Shumate-1.0 — library 1.7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Shumate-1.0 — library 1.7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    ShumateCompass: ['viewport'],
    ShumateLayer: ['viewport'],
    ShumateLicense: ['extra-text', 'xalign'],
    ShumateLocation: ['latitude', 'longitude'],
    ShumateMap: ['animate-zoom', 'go-to-duration', 'zoom-on-double-click'],
    ShumateMapLayer: ['map-source'],
    ShumateMarker: ['child', 'selectable', 'x-hotspot', 'y-hotspot'],
    ShumateMarkerLayer: ['selection-mode'],
    ShumatePathLayer: ['closed', 'fill', 'fill-color', 'outline-color', 'outline-width', 'stroke', 'stroke-color', 'stroke-width'],
    ShumateScale: ['max-width', 'unit', 'viewport'],
    ShumateSimpleMap: ['map-source', 'show-zoom-buttons'],
};

export const OWN_SIGNALS = {
    ShumateMap: ['animation-completed'],
    ShumateMapLayer: ['map-loaded', 'symbol-clicked', 'tile-error'],
    ShumateMarkerLayer: ['marker-selected', 'marker-unselected'],
    ShumateSimpleMap: ['symbol-clicked'],
};

export const DECLS = {
    ShumateCompass: ['ShumateCompass', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumateLicense: ['ShumateLicense', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumateMap: ['ShumateMap', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumateMapLayer: ['ShumateMapLayer', 'ShumateLayer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumateMarker: ['ShumateMarker', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'ShumateLocation'],
    ShumateMarkerLayer: ['ShumateMarkerLayer', 'ShumateLayer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumatePathLayer: ['ShumatePathLayer', 'ShumateLayer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumatePoint: ['ShumatePoint', 'ShumateMarker', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'ShumateLocation'],
    ShumateScale: ['ShumateScale', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    ShumateSimpleMap: ['ShumateSimpleMap', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

export const ENUM_NICKS = {
    ShumateGeometryType: ['unknown', 'point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon'],
    ShumateMapProjection: ['mercator'],
    ShumateState: ['none', 'loading', 'loaded', 'done'],
    ShumateUnit: ['both', 'metric', 'imperial'],
    ShumateVectorValueType: ['null', 'number', 'boolean', 'string', 'color', 'array', 'resolved-image', 'formatted-string', 'collator'],
};

export const SLOT_CANDIDATES = {
    ShumateMap: {
        'layer': 'add_layer',
    },
    ShumateMarker: {
        'child': 'set_child',
    },
    ShumateMarkerLayer: {
        'marker': 'add_marker',
    },
    ShumateSimpleMap: {
        'overlay-layer': 'add_overlay_layer',
    },
};

export const SINCE = {
    'ShumateMarker.x-hotspot': '1.5',
    'ShumateMarker.y-hotspot': '1.5',
};
