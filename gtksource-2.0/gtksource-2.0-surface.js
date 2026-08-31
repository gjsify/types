// The widget vocabulary of GtkSource-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GtkSource-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    GtkSourceCompletionInfo: ['max-height', 'max-width', 'shrink-height', 'shrink-width'],
    GtkSourceView: ['auto-indent', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceCompletionInfo: ['before-show'],
    GtkSourceView: ['line-mark-activated', 'move-lines', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
};

export const DECLS = {
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    GtkSourceCompletionInfo: {
        'widget': 'set_widget',
    },
};

export const SINCE = {};
