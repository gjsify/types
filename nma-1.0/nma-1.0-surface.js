// The widget vocabulary of NMA-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: NMA-1.0 — library 1.10.7 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'NMA-1.0 — library 1.10.7 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    NMABarCodeWidget: ['connection'],
    NMACertChooser: ['flags', 'title'],
};

export const OWN_SIGNALS = {
    NMACertChooser: ['cert-password-validate', 'cert-validate', 'changed', 'key-password-validate', 'key-validate'],
};

export const DECLS = {
    NMABarCodeWidget: ['NMABarCodeWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    NMACertChooser: ['NMACertChooser', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    NMAVpnPasswordDialog: ['NMAVpnPasswordDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    NMAWifiDialog: ['NMAWifiDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
