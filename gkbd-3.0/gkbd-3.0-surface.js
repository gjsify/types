// The widget vocabulary of Gkbd-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gkbd-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gkbd-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {};

export const OWN_SIGNALS = {
    GkbdIndicator: ['reinit-ui'],
    GkbdKeyboardDrawing: ['bad-keycode'],
};

export const DECLS = {
    GkbdIndicator: ['GkbdIndicator', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GkbdKeyboardDrawing: ['GkbdKeyboardDrawing', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
