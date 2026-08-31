// The widget vocabulary of Gtef-2 as runtime data.
//
// GENERATED — do not edit. Provenance: Gtef-2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gtef-2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {};

export const OWN_SIGNALS = {};

export const DECLS = {
    GtefInfoBar: ['GtefInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GtefTab: ['GtefTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GtefView: ['GtefView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtefCompressionType: ['none', 'gzip'],
    GtefNewlineType: ['lf', 'cr', 'cr-lf'],
    GtefSelectionType: ['no-selection', 'on-same-line', 'multiple-lines'],
};

export const SLOT_CANDIDATES = {
    GtefInfoBar: {
        'content-widget': 'add_content_widget',
    },
    GtefTab: {
        'info': 'add_info_bar',
    },
};

export const SINCE = {};
