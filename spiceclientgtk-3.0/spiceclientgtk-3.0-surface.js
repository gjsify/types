// The widget vocabulary of SpiceClientGtk-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: SpiceClientGtk-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'SpiceClientGtk-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    SpiceDisplay: ['channel-id', 'disable-inputs', 'grab-keyboard', 'grab-mouse', 'keypress-delay', 'monitor-id', 'only-downscale', 'resize-guest', 'scaling', 'session', 'zoom-level'],
    SpiceUsbDeviceWidget: ['device-format-string', 'session'],
};

export const OWN_SIGNALS = {
    SpiceDisplay: ['grab-keys-pressed', 'keyboard-grab', 'mouse-grab'],
    SpiceUsbDeviceWidget: ['connect-failed'],
};

export const DECLS = {
    SpiceDisplay: ['SpiceDisplay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    SpiceUsbDeviceWidget: ['SpiceUsbDeviceWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    SpiceDisplayKeyEvent: ['press', 'release', 'click'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'SpiceDisplay.disable-inputs': '0.8',
    'SpiceDisplay.keypress-delay': '0.13',
    'SpiceDisplay.monitor-id': '0.13',
    'SpiceDisplay.only-downscale': '0.14',
    'SpiceDisplay.zoom-level': '0.10',
};
