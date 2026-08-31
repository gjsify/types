// The widget vocabulary of GooCanvas-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GooCanvas-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GooCanvas-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    GooCanvas: ['anchor', 'automatic-bounds', 'background-color', 'background-color-gdk-rgba', 'background-color-rgb', 'bounds-from-origin', 'bounds-padding', 'clear-background', 'integer-layout', 'redraw-when-scrolled', 'resolution-x', 'resolution-y', 'scale', 'scale-x', 'scale-y', 'units', 'x1', 'x2', 'y1', 'y2'],
};

export const OWN_SIGNALS = {
    GooCanvas: ['item-created'],
};

export const DECLS = {
    GooCanvas: ['GooCanvas', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GooCairoAntialias: ['default', 'none', 'gray', 'subpixel'],
    GooCairoFillRule: ['winding', 'even-odd'],
    GooCairoHintMetrics: ['default', 'off', 'on'],
    GooCairoLineCap: ['butt', 'round', 'square'],
    GooCairoLineJoin: ['miter', 'round', 'bevel'],
    GooCairoOperator: ['clear', 'source', 'over', 'in', 'out', 'atop', 'dest', 'dest-over', 'dest-in', 'dest-out', 'dest-atop', 'xor', 'add', 'saturate'],
    GooCanvasAnchorType: ['center', 'north', 'north-west', 'north-east', 'south', 'south-west', 'south-east', 'west', 'east', 'n', 'nw', 'ne', 's', 'sw', 'se', 'w', 'e'],
    GooCanvasAnimateType: ['freeze', 'reset', 'restart', 'bounce'],
    GooCanvasItemVisibility: ['hidden', 'invisible', 'visible', 'visible-above-threshold'],
    GooCanvasPathCommandType: ['move-to', 'close-path', 'line-to', 'horizontal-line-to', 'vertical-line-to', 'curve-to', 'smooth-curve-to', 'quadratic-curve-to', 'smooth-quadratic-curve-to', 'elliptical-arc'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GooCanvas.background-color-gdk-rgba': '2.0.1',
};
