// The widget vocabulary of Libxfce4ui-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Libxfce4ui-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Libxfce4ui-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    XfceFilenameInput: ['max-text-length', 'original-filename'],
    XfceTitledDialog: ['subtitle'],
};

export const OWN_SIGNALS = {
    XfceFilenameInput: ['text-invalid', 'text-valid'],
};

export const DECLS = {
    XfceFilenameInput: ['XfceFilenameInput', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    XfceTitledDialog: ['XfceTitledDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'XfceFilenameInput.max-text-length': '4.16',
    'XfceFilenameInput.original-filename': '4.16',
};
