// The widget vocabulary of Builder-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Builder-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Builder-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    GbTree: ['root', 'selection', 'show-icons'],
    GbViewStack: ['active-view'],
    GbWorkbench: ['context'],
};

export const OWN_SIGNALS = {
    GbEditorView: ['request-documentation'],
    GbTree: ['action', 'populate-popup'],
    GbViewStack: ['empty', 'split'],
    GbWorkbench: ['unload'],
};

export const DECLS = {
    GbEditorView: ['GbEditorView', 'GbView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GbTree: ['GbTree', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GbView: ['GbView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GbViewGrid: ['GbViewGrid', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GbViewStack: ['GbViewStack', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GbWorkbench: ['GbWorkbench', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GbViewGridSplit: ['left', 'right', 'move-left', 'move-right'],
};

export const SLOT_CANDIDATES = {
    GbViewGrid: {
        'stack-after': 'add_stack_after',
        'stack-before': 'add_stack_before',
    },
    GbViewStack: {
        'active-view': 'set_active_view',
    },
};

export const SINCE = {};
