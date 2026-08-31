// The widget vocabulary of InputPad-1.1 as runtime data.
//
// GENERATED — do not edit. Provenance: InputPad-1.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'InputPad-1.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {};

export const OWN_SIGNALS = {
    InputPadGtkButton: ['pressed-repeat'],
    InputPadGtkWindow: ['button-pressed', 'char-button-sensitive', 'group-appended', 'group-changed', 'keyboard-changed', 'reorder-button-pressed'],
};

export const DECLS = {
    InputPadGtkButton: ['InputPadGtkButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    InputPadGtkComboBox: ['InputPadGtkComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    InputPadGtkViewport: ['InputPadGtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    InputPadGtkWindow: ['InputPadGtkWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
