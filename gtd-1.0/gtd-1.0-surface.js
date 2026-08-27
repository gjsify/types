// The widget vocabulary of Gtd-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gtd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gtd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap';

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

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    GtdMenuButton: {
        'align': 'set_align_widget',
        'popover': 'set_popover',
    },
};

export const SINCE = {};
