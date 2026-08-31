// The widget vocabulary of OsmGpsMap-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: OsmGpsMap-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'OsmGpsMap-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    OsmGpsMap: ['auto-center', 'auto-center-threshold', 'auto-download', 'drag-limit', 'gps-track-highlight-radius', 'gps-track-point-radius', 'gps-track-width', 'image-format', 'map-source', 'map-x', 'map-y', 'max-zoom', 'min-zoom', 'proxy-uri', 'record-trip-history', 'repo-uri', 'show-gps-point', 'show-trip-history', 'tile-cache', 'tile-cache-base', 'tile-zoom-offset', 'user-agent', 'zoom'],
};

export const OWN_SIGNALS = {
    OsmGpsMap: ['changed'],
};

export const DECLS = {
    OsmGpsMap: ['OsmGpsMap', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'OsmGpsMap.user-agent': '1.2.0',
};
