// The widget vocabulary of NMA4-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: NMA4-1.0 — library 1.10.6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'NMA4',
    version: '1.0',
    libraryVersion: '1.10.6',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    NMABarCodeWidget: ['connection'],
    NMACertChooser: ['flags', 'title'],
};

export const OWN_SIGNALS = {
    NMACertChooser: ['cert-password-validate', 'cert-validate', 'changed', 'key-password-validate', 'key-validate'],
};

export const DECLS = {
    NMABarCodeWidget: ['NMABarCodeWidget', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    NMACertChooser: ['NMACertChooser', 'GtkGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    NMAVpnPasswordDialog: ['NMAVpnPasswordDialog', 'GtkDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    NMAWifiDialog: ['NMAWifiDialog', 'GtkDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'NMACertChooser::cert-password-validate': '1.8.0',
    'NMACertChooser::cert-validate': '1.8.0',
    'NMACertChooser::changed': '1.8.0',
    'NMACertChooser::key-password-validate': '1.8.0',
    'NMACertChooser::key-validate': '1.8.0',
};
