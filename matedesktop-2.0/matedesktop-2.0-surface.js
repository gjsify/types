// The widget vocabulary of MateDesktop-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: MateDesktop-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'MateDesktop-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    MateColorSelection: ['current-alpha', 'current-rgba', 'has-opacity-control', 'has-palette'],
    MateImageMenuItem: ['image'],
};

export const OWN_SIGNALS = {
    MateColorSelection: ['color-changed'],
    MateHSV: ['changed', 'move'],
};

export const DECLS = {
    MateColorSelection: ['MateColorSelection', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    MateColorSelectionDialog: ['MateColorSelectionDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MateHSV: ['MateHSV', 'GtkWidget', 'GtkBuildable'],
    MateImageMenuItem: ['MateImageMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    MateImageMenuItem: {
        'image': 'set_image',
    },
};

export const SINCE = {};
