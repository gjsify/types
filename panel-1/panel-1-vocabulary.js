// The widget vocabulary of Panel-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Panel-1 — library 1.10.4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Panel',
    version: '1',
    libraryVersion: '1.10.4',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    PanelChangesDialog: ['close-after-save'],
    PanelDock: ['bottom-height', 'end-width', 'reveal-bottom', 'reveal-end', 'reveal-start', 'reveal-top', 'start-width', 'top-height'],
    PanelFrame: ['placeholder', 'visible-child'],
    PanelFrameHeader: ['frame'],
    PanelFrameHeaderBar: ['show-icon'],
    PanelFrameTabBar: ['autohide', 'expand-tabs', 'inverted'],
    PanelOmniBar: ['action-tooltip', 'icon-name', 'menu-model', 'popover', 'progress'],
    PanelSaveDialog: ['close-after-save'],
    PanelThemeSelector: ['action-name'],
    PanelToggleButton: ['area', 'dock'],
    PanelWidget: ['can-maximize', 'child', 'icon', 'icon-name', 'id', 'kind', 'menu-model', 'modified', 'needs-attention', 'reorderable', 'save-delegate', 'title', 'tooltip'],
    PanelWorkspace: ['id'],
};

export const OWN_SIGNALS = {
    PanelDock: ['adopt-widget', 'create-frame', 'panel-drag-begin', 'panel-drag-end'],
    PanelDocumentWorkspace: ['add-widget', 'create-frame'],
    PanelFrame: ['adopt-widget', 'page-closed'],
    PanelGrid: ['create-frame'],
    PanelWidget: ['get-default-focus', 'presented'],
};

export const DECLS = {
    PanelChangesDialog: ['PanelChangesDialog', 'AdwAlertDialog', 'AdwDialog', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkShortcutManager'],
    PanelDock: ['PanelDock', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelDocumentWorkspace: ['PanelDocumentWorkspace', 'PanelWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    PanelFrame: ['PanelFrame', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    PanelFrameHeaderBar: ['PanelFrameHeaderBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'PanelFrameHeader'],
    PanelFrameSwitcher: ['PanelFrameSwitcher', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable', 'PanelFrameHeader'],
    PanelFrameTabBar: ['PanelFrameTabBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'PanelFrameHeader'],
    PanelGrid: ['PanelGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelGridColumn: ['PanelGridColumn', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelOmniBar: ['PanelOmniBar', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelPaned: ['PanelPaned', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    PanelSaveDialog: ['PanelSaveDialog', 'AdwMessageDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    PanelStatusbar: ['PanelStatusbar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelThemeSelector: ['PanelThemeSelector', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelToggleButton: ['PanelToggleButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelWidget: ['PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelWorkspace: ['PanelWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PanelArea: ['start', 'end', 'top', 'bottom', 'center'],
};

export const SLOT_CANDIDATES = {
    PanelDocumentWorkspace: {
        'titlebar': 'set_titlebar',
    },
    PanelFrame: {
        'header': 'set_header',
        'placeholder': 'set_placeholder',
        'visible-child': 'set_visible_child',
    },
    PanelOmniBar: {
        'popover': 'set_popover',
    },
    PanelWidget: {
        'child': 'set_child',
    },
};

export const SINCE = {
    'PanelDock::adopt-widget': '1.2',
    'PanelDock::create-frame': '1.2',
    'PanelDocumentWorkspace::add-widget': '1.4',
    'PanelDocumentWorkspace::create-frame': '1.4',
    'PanelFrame::adopt-widget': '1.2',
    'PanelFrame::page-closed': '1.2',
    'PanelWidget.tooltip': '1.2',
    'PanelWorkspace.id': '1.4',
};
