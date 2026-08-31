// The widget vocabulary of PanelApplet-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: PanelApplet-4.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: PanelApplet.Applet.size-hints
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'PanelApplet-4.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: PanelApplet.Applet.size-hints';

export const OWN_PROPS = {
    PanelApplet: ['flags', 'locked-down', 'orient', 'prefs-key', 'settings-path', 'size', 'size-hints'],
};

export const OWN_SIGNALS = {
    PanelApplet: ['change-background', 'change-orient', 'change-size', 'move-focus-out-of-applet'],
};

export const DECLS = {
    PanelApplet: ['PanelApplet', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PanelAppletOrient: ['up', 'down', 'left', 'right'],
};

export const SLOT_CANDIDATES = {
    PanelApplet: {
        'background': 'set_background_widget',
    },
};

export const SINCE = {};
