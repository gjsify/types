// The widget vocabulary of Gtd-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gtd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gtd',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GtdMenuButton: ['align-widget', 'direction', 'gicon', 'has-frame', 'label', 'menu-model', 'popover', 'use-underline'],
    GtdStarWidget: ['active'],
    GtdTaskListView: ['show-due-date', 'show-list-name'],
    GtdWidget: ['pivot-point', 'rotation-x', 'rotation-y', 'rotation-z', 'scale-x', 'scale-y', 'scale-z', 'translation-x', 'translation-y', 'translation-z'],
};

export const OWN_SIGNALS = {
    GtdWidget: ['transition-stopped', 'transitions-completed'],
};

export const DECLS = {
    GtdMenuButton: ['GtdMenuButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtdOmniArea: ['GtdOmniArea', 'GtdWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtdProviderPopover: ['GtdProviderPopover', 'GtkPopover', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkShortcutManager'],
    GtdStarWidget: ['GtdStarWidget', 'GtdWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtdTaskListView: ['GtdTaskListView', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GtdWidget: ['GtdWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtdWindow: ['GtdWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    GtdMenuButton: {
        'align': 'set_align_widget',
        'popover': 'set_popover',
    },
};

export const SINCE = {
    'GtdWidget::transition-stopped': '1.12',
    'GtdWidget::transitions-completed': '1.10',
};
