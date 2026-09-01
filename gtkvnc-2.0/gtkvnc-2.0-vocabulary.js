// The widget vocabulary of GtkVnc-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkVnc-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkVnc',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    VncDisplay: ['allow-resize', 'depth', 'force-size', 'grab-keyboard', 'grab-keys', 'grab-pointer', 'keep-aspect-ratio', 'local-pointer', 'lossy-encoding', 'read-only', 'rotation', 'scaling', 'shared-flag', 'smoothing', 'zoom-level'],
};

export const OWN_SIGNALS = {
    VncDisplay: ['vnc-auth-credential', 'vnc-auth-failure', 'vnc-auth-unsupported', 'vnc-bell', 'vnc-connected', 'vnc-desktop-rename', 'vnc-desktop-resize', 'vnc-disconnected', 'vnc-error', 'vnc-initialized', 'vnc-keyboard-grab', 'vnc-keyboard-ungrab', 'vnc-pointer-grab', 'vnc-pointer-ungrab', 'vnc-power-control-failed', 'vnc-power-control-initialized', 'vnc-server-cut-text'],
};

export const DECLS = {
    VncDisplay: ['VncDisplay', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VncDisplayCredential: ['password', 'username', 'clientname', 'ca-cert-data'],
    VncDisplayDepthColor: ['default', 'full', 'medium', 'low', 'ultra-low'],
    VncDisplayKeyEvent: ['press', 'release', 'click'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
