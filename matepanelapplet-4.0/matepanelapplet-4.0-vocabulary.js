// The widget vocabulary of MatePanelApplet-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: MatePanelApplet-4.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: MatePanelApplet.Applet.closure MatePanelApplet.Applet.size-hints
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'MatePanelApplet',
    version: '4.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['MatePanelApplet.Applet.closure', 'MatePanelApplet.Applet.size-hints'],
};

export const OWN_PROPS = {
    MatePanelApplet: ['background', 'closure', 'connection', 'flags', 'id', 'locked', 'locked-down', 'orient', 'out-of-process', 'prefs-path', 'size', 'size-hints'],
};

export const OWN_SIGNALS = {
    MatePanelApplet: ['change-background', 'change-orient', 'change-size', 'move-focus-out-of-applet'],
};

export const DECLS = {
    MatePanelApplet: ['MatePanelApplet', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    MatePanelAppletBackgroundType: ['no-background', 'color-background', 'pixmap-background'],
    MatePanelAppletOrient: ['up', 'down', 'left', 'right'],
};

export const SLOT_CANDIDATES = {
    MatePanelApplet: {
        'background': 'set_background_widget',
    },
};

export const SINCE = {};
