// The widget vocabulary of Dazzle-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Dazzle-1.0 — library 3.44.0 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Dazzle.BoxTheatric.surface Dazzle.TaskCache.key-copy-func Dazzle.TaskCache.key-destroy-func Dazzle.TaskCache.key-equal-func Dazzle.TaskCache.key-hash-func Dazzle.TaskCache.populate-callback Dazzle.TaskCache.populate-callback-data Dazzle.TaskCache.populate-callback-data-destroy Dazzle.TaskCache.value-copy-func Dazzle.TaskCache.value-destroy-func
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Dazzle',
    version: '1.0',
    libraryVersion: '3.44.0',
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Dazzle.BoxTheatric.surface', 'Dazzle.TaskCache.key-copy-func', 'Dazzle.TaskCache.key-destroy-func', 'Dazzle.TaskCache.key-equal-func', 'Dazzle.TaskCache.key-hash-func', 'Dazzle.TaskCache.populate-callback', 'Dazzle.TaskCache.populate-callback-data', 'Dazzle.TaskCache.populate-callback-data-destroy', 'Dazzle.TaskCache.value-copy-func', 'Dazzle.TaskCache.value-destroy-func'],
    unresolvedProps: [],
    identifierPrefixes: ['Dzl'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary', '@girs/pango-1.0/vocabulary'],
};

export const OWN_PROPS = {
    DzlAnimation: ['duration', 'frame-clock', 'mode', 'target'],
    DzlApplicationWindow: ['fullscreen'],
    DzlBindingGroup: ['source'],
    DzlBoldingLabel: ['bold'],
    DzlBox: ['max-width-request'],
    DzlBoxTheatric: ['alpha', 'background', 'height', 'icon', 'surface', 'target', 'width', 'x', 'y'],
    DzlCenteringBin: ['max-width-request'],
    DzlColumnLayout: ['column-spacing', 'column-width', 'max-columns', 'row-spacing'],
    DzlCpuGraph: ['max-samples', 'timespan'],
    DzlCssProvider: ['base-path'],
    DzlDirectoryModel: ['directory'],
    DzlDock: ['manager'],
    DzlDockBin: ['bottom-visible', 'left-visible', 'right-visible', 'top-visible'],
    DzlDockBinEdge: ['edge'],
    DzlDockOverlayEdge: ['edge', 'position'],
    DzlDockRevealer: ['position', 'position-set', 'reveal-child', 'transition-duration', 'transition-type'],
    DzlDockStack: ['edge', 'show-pinned-button', 'style'],
    DzlDockTransientGrab: ['timeout'],
    DzlDockWidget: ['can-close', 'gicon', 'icon-name', 'manager', 'title'],
    DzlEmptyState: ['icon-name', 'pixel-size', 'resource', 'subtitle', 'title'],
    DzlEntryBox: ['max-width-chars'],
    DzlFileChooserEntry: ['action', 'create-folders', 'do-overwrite-confirmation', 'file', 'filter', 'local-only', 'max-width-chars', 'show-hidden', 'title'],
    DzlFileTransfer: ['flags'],
    DzlFuzzyIndexBuilder: ['case-sensitive'],
    DzlFuzzyIndexCursor: ['case-sensitive', 'index', 'max-matches', 'query', 'tables'],
    DzlFuzzyIndexMatch: ['document', 'key', 'priority', 'score'],
    DzlGraphColumn: ['name', 'value-type'],
    DzlGraphLineRenderer: ['column', 'line-width', 'stroke-color', 'stroke-color-rgba'],
    DzlGraphModel: ['max-samples', 'timespan', 'value-max', 'value-min'],
    DzlGraphView: ['model'],
    DzlListBox: ['property-name', 'row-type', 'row-type-name'],
    DzlListStoreAdapter: ['model'],
    DzlMenuButton: ['icon-name', 'menu-id', 'model', 'show-accels', 'show-arrow', 'show-icons', 'transitions-enabled'],
    DzlMultiPaned: ['orientation'],
    DzlPathBar: ['path'],
    DzlPathElement: ['icon-name', 'id', 'title'],
    DzlPillBox: ['label'],
    DzlPreferencesBin: ['keywords', 'path', 'priority', 'schema-id'],
    DzlPreferencesEntry: ['text', 'title'],
    DzlPreferencesFileChooserButton: ['action', 'key', 'subtitle', 'title'],
    DzlPreferencesFontButton: ['key', 'title'],
    DzlPreferencesGroup: ['is-list', 'mode', 'priority', 'title'],
    DzlPreferencesPage: ['priority'],
    DzlPreferencesSpinButton: ['key', 'subtitle', 'title'],
    DzlPreferencesSwitch: ['is-radio', 'key', 'subtitle', 'target', 'title'],
    DzlPreferencesView: ['show-search-entry', 'use-sidebar'],
    DzlProgressButton: ['progress', 'show-progress'],
    DzlProgressIcon: ['progress'],
    DzlProgressMenuButton: ['progress', 'show-progress', 'show-theatric', 'theatric-icon-name', 'transition-duration'],
    DzlPropertiesGroup: ['object', 'object-type'],
    DzlRadioBox: ['active-id', 'show-more'],
    DzlReadOnlyListModel: ['base-model'],
    DzlRecursiveFileMonitor: ['root'],
    DzlSearchBar: ['search-mode-enabled', 'show-close-button'],
    DzlSettingsFlagAction: ['flag-nick', 'schema-id', 'schema-key'],
    DzlSettingsSandwich: ['path', 'schema-id'],
    DzlShortcutAccelDialog: ['accelerator', 'shortcut-title'],
    DzlShortcutContext: ['name', 'use-binding-sets'],
    DzlShortcutController: ['manager', 'widget'],
    DzlShortcutLabel: ['accelerator', 'chord'],
    DzlShortcutManager: ['theme', 'theme-name', 'user-dir'],
    DzlShortcutModel: ['manager', 'theme'],
    DzlShortcutSimpleLabel: ['accel', 'action', 'command', 'show-accel', 'title'],
    DzlShortcutTheme: ['name', 'parent-name', 'subtitle', 'title'],
    DzlShortcutThemeEditor: ['theme'],
    DzlShortcutTooltip: ['accel', 'command-id', 'title', 'widget'],
    DzlShortcutsGroup: ['accel-size-group', 'title', 'title-size-group', 'view'],
    DzlShortcutsSection: ['max-height', 'section-name', 'title', 'view-name'],
    DzlShortcutsShortcut: ['accel-size-group', 'accelerator', 'action-name', 'direction', 'icon', 'icon-set', 'shortcut-type', 'subtitle', 'subtitle-set', 'title', 'title-size-group'],
    DzlShortcutsWindow: ['section-name', 'view-name'],
    DzlSignalGroup: ['target', 'target-type'],
    DzlSimpleLabel: ['label', 'width-chars', 'xalign'],
    DzlSimplePopover: ['button-text', 'message', 'ready', 'text', 'title'],
    DzlSlider: ['position'],
    DzlStateMachine: ['state'],
    DzlSuggestion: ['icon-name', 'id', 'secondary-icon-name', 'subtitle', 'title'],
    DzlSuggestionEntry: ['activate-on-single-click', 'compact', 'model', 'suggestion'],
    DzlSuggestionEntryBuffer: ['suggestion'],
    DzlSuggestionPopover: ['model', 'relative-to', 'selected', 'subtitle-ellipsize', 'title-ellipsize'],
    DzlSuggestionRow: ['orientation', 'suggestion'],
    DzlTab: ['active', 'can-close', 'edge', 'style', 'title', 'widget'],
    DzlTabStrip: ['edge', 'stack', 'style'],
    DzlTaskCache: ['key-copy-func', 'key-destroy-func', 'key-equal-func', 'key-hash-func', 'populate-callback', 'populate-callback-data', 'populate-callback-data-destroy', 'time-to-live', 'value-copy-func', 'value-destroy-func'],
    DzlThreeGrid: ['column-spacing', 'row-spacing'],
    DzlTree: ['always-expand', 'context-menu', 'root', 'selection', 'show-icons'],
    DzlTreeNode: ['children-possible', 'expanded-icon-name', 'gicon', 'icon-name', 'item', 'reset-on-collapse', 'text', 'tree', 'use-dim-label', 'use-markup'],
    DzlWidgetActionGroup: ['widget'],
};

export const OWN_SIGNALS = {
    DzlAnimation: ['tick'],
    DzlDirectoryReaper: ['remove-file'],
    DzlDockBinEdge: ['move-to-bin-child'],
    DzlDockItem: ['manager-set', 'needs-attention', 'presented'],
    DzlDockManager: ['register-dock', 'unregister-dock'],
    DzlDockOverlay: ['hide-edges'],
    DzlGraphModel: ['changed'],
    DzlMultiPaned: ['resize-drag-begin', 'resize-drag-end'],
    DzlPathBar: ['element-selected', 'populate-menu'],
    DzlPreferencesBin: ['preference-activated'],
    DzlPreferencesEntry: ['activate', 'changed'],
    DzlPreferencesFontButton: ['activate'],
    DzlPreferencesSpinButton: ['activate'],
    DzlPreferencesSwitch: ['activated'],
    DzlRadioBox: ['changed'],
    DzlRecursiveFileMonitor: ['changed'],
    DzlSearchBar: ['activate', 'reveal'],
    DzlShortcutController: ['reset', 'set-context-named'],
    DzlShortcutManager: ['changed'],
    DzlShortcutThemeEditor: ['changed'],
    DzlShortcutsSection: ['change-current-page'],
    DzlShortcutsWindow: ['close', 'search'],
    DzlSignalGroup: ['bind', 'unbind'],
    DzlSimplePopover: ['activate', 'changed', 'insert-text'],
    DzlStackList: ['header-activated', 'row-activated'],
    DzlSuggestion: ['replace-typed-text', 'suggest-suffix'],
    DzlSuggestionEntry: ['action', 'activate-suggestion', 'hide-suggestions', 'move-suggestion', 'show-suggestions', 'suggestion-activated', 'suggestion-selected'],
    DzlSuggestionPopover: ['suggestion-activated'],
    DzlTab: ['clicked'],
    DzlTree: ['action', 'populate-popup'],
    DzlTreeBuilder: ['added', 'build-children', 'build-node', 'drag-data-get', 'drag-data-received', 'drag-node-delete', 'drag-node-received', 'node-activated', 'node-collapsed', 'node-draggable', 'node-droppable', 'node-expanded', 'node-popup', 'node-selected', 'node-unselected', 'removed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    DzlAnimation: ['DzlAnimation', 'GInitiallyUnowned', 'GObject'],
    DzlApplication: ['DzlApplication', 'GtkApplication', 'GApplication', 'GObject', 'GActionGroup', 'GActionMap'],
    DzlApplicationWindow: ['DzlApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GActionGroup', 'GActionMap', 'GtkBuildable'],
    DzlBin: ['DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlBindingGroup: ['DzlBindingGroup', 'GObject'],
    DzlBoldingLabel: ['DzlBoldingLabel', 'GtkLabel', 'GtkMisc', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlBox: ['DzlBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlBoxTheatric: ['DzlBoxTheatric', 'GObject'],
    DzlCenteringBin: ['DzlCenteringBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlChildPropertyAction: ['DzlChildPropertyAction', 'GObject', 'GAction'],
    DzlColumnLayout: ['DzlColumnLayout', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlCountersWindow: ['DzlCountersWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlCpuGraph: ['DzlCpuGraph', 'DzlGraphView', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlCpuModel: ['DzlCpuModel', 'DzlGraphModel', 'GObject'],
    DzlCssProvider: ['DzlCssProvider', 'GtkCssProvider', 'GObject', 'GtkStyleProvider'],
    DzlDirectoryModel: ['DzlDirectoryModel', 'GObject', 'GListModel'],
    DzlDirectoryReaper: ['DzlDirectoryReaper', 'GObject'],
    DzlDockBin: ['DzlDockBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlDockBinEdge: ['DzlDockBinEdge', 'DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDockItem', 'GtkBuildable'],
    DzlDockManager: ['DzlDockManager', 'GObject'],
    DzlDockOverlay: ['DzlDockOverlay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlDockOverlayEdge: ['DzlDockOverlayEdge', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDockItem', 'GtkBuildable'],
    DzlDockPaned: ['DzlDockPaned', 'DzlMultiPaned', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDockItem', 'GtkBuildable', 'GtkOrientable'],
    DzlDockRevealer: ['DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlDockStack: ['DzlDockStack', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDockItem', 'GtkBuildable', 'GtkOrientable'],
    DzlDockTransientGrab: ['DzlDockTransientGrab', 'GObject'],
    DzlDockWidget: ['DzlDockWidget', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDockItem', 'GtkBuildable'],
    DzlDockWindow: ['DzlDockWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlElasticBin: ['DzlElasticBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlEmptyState: ['DzlEmptyState', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlEntryBox: ['DzlEntryBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlFileChooserEntry: ['DzlFileChooserEntry', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlFileTransfer: ['DzlFileTransfer', 'GObject'],
    DzlFuzzyIndex: ['DzlFuzzyIndex', 'GObject'],
    DzlFuzzyIndexBuilder: ['DzlFuzzyIndexBuilder', 'GObject'],
    DzlFuzzyIndexCursor: ['DzlFuzzyIndexCursor', 'GObject', 'GAsyncInitable', 'GListModel'],
    DzlFuzzyIndexMatch: ['DzlFuzzyIndexMatch', 'GObject'],
    DzlGraphColumn: ['DzlGraphColumn', 'GObject'],
    DzlGraphLineRenderer: ['DzlGraphLineRenderer', 'GObject', 'DzlGraphRenderer'],
    DzlGraphModel: ['DzlGraphModel', 'GObject'],
    DzlGraphView: ['DzlGraphView', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlJoinedMenu: ['DzlJoinedMenu', 'GMenuModel', 'GObject'],
    DzlListBox: ['DzlListBox', 'GtkListBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlListModelFilter: ['DzlListModelFilter', 'GObject', 'GListModel'],
    DzlListStoreAdapter: ['DzlListStoreAdapter', 'GObject', 'GtkTreeModel'],
    DzlMenuButton: ['DzlMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlMenuManager: ['DzlMenuManager', 'GObject'],
    DzlMultiPaned: ['DzlMultiPaned', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlPath: ['DzlPath', 'GObject'],
    DzlPathBar: ['DzlPathBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlPathElement: ['DzlPathElement', 'GObject'],
    DzlPillBox: ['DzlPillBox', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesBin: ['DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesEntry: ['DzlPreferencesEntry', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesFileChooserButton: ['DzlPreferencesFileChooserButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesFlowBox: ['DzlPreferencesFlowBox', 'DzlColumnLayout', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesFontButton: ['DzlPreferencesFontButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesGroup: ['DzlPreferencesGroup', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesPage: ['DzlPreferencesPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesSpinButton: ['DzlPreferencesSpinButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesSwitch: ['DzlPreferencesSwitch', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlPreferencesView: ['DzlPreferencesView', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'DzlPreferences', 'GtkBuildable'],
    DzlPriorityBox: ['DzlPriorityBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlProgressButton: ['DzlProgressButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlProgressIcon: ['DzlProgressIcon', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlProgressMenuButton: ['DzlProgressMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlPropertiesGroup: ['DzlPropertiesGroup', 'GObject', 'GActionGroup'],
    DzlRadioBox: ['DzlRadioBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlReadOnlyListModel: ['DzlReadOnlyListModel', 'GObject', 'GListModel'],
    DzlRecursiveFileMonitor: ['DzlRecursiveFileMonitor', 'GObject'],
    DzlScrolledWindow: ['DzlScrolledWindow', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSearchBar: ['DzlSearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSettingsFlagAction: ['DzlSettingsFlagAction', 'GObject', 'GAction'],
    DzlSettingsSandwich: ['DzlSettingsSandwich', 'GObject'],
    DzlShortcutAccelDialog: ['DzlShortcutAccelDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlShortcutContext: ['DzlShortcutContext', 'GObject'],
    DzlShortcutController: ['DzlShortcutController', 'GObject'],
    DzlShortcutLabel: ['DzlShortcutLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutManager: ['DzlShortcutManager', 'GObject', 'GInitable', 'GListModel'],
    DzlShortcutModel: ['DzlShortcutModel', 'GtkTreeStore', 'GObject', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    DzlShortcutSimpleLabel: ['DzlShortcutSimpleLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutTheme: ['DzlShortcutTheme', 'GObject'],
    DzlShortcutThemeEditor: ['DzlShortcutThemeEditor', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlShortcutTooltip: ['DzlShortcutTooltip', 'GObject'],
    DzlShortcutsGroup: ['DzlShortcutsGroup', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsSection: ['DzlShortcutsSection', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsShortcut: ['DzlShortcutsShortcut', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsWindow: ['DzlShortcutsWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSignalGroup: ['DzlSignalGroup', 'GObject'],
    DzlSimpleLabel: ['DzlSimpleLabel', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSimplePopover: ['DzlSimplePopover', 'GtkPopover', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSlider: ['DzlSlider', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlStackList: ['DzlStackList', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlStateMachine: ['DzlStateMachine', 'GObject', 'GtkBuildable'],
    DzlSuggestion: ['DzlSuggestion', 'GObject'],
    DzlSuggestionButton: ['DzlSuggestionButton', 'GtkStack', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSuggestionEntry: ['DzlSuggestionEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    DzlSuggestionEntryBuffer: ['DzlSuggestionEntryBuffer', 'GtkEntryBuffer', 'GObject'],
    DzlSuggestionPopover: ['DzlSuggestionPopover', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlSuggestionRow: ['DzlSuggestionRow', 'DzlListBoxRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkBuildable', 'GtkOrientable'],
    DzlTab: ['DzlTab', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkBuildable'],
    DzlTabStrip: ['DzlTabStrip', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    DzlTaskCache: ['DzlTaskCache', 'GObject'],
    DzlThemeManager: ['DzlThemeManager', 'GObject'],
    DzlThreeGrid: ['DzlThreeGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    DzlTree: ['DzlTree', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    DzlTreeBuilder: ['DzlTreeBuilder', 'GInitiallyUnowned', 'GObject'],
    DzlTreeNode: ['DzlTreeNode', 'GInitiallyUnowned', 'GObject'],
    DzlWidgetActionGroup: ['DzlWidgetActionGroup', 'GObject', 'GActionGroup'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    DzlAnimationMode: ['linear', 'ease-in-quad', 'ease-in-out-quad', 'ease-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic'],
    DzlDockRevealerTransitionType: ['none', 'slide-right', 'slide-left', 'slide-up', 'slide-down'],
    DzlShortcutMatch: ['none', 'equal', 'partial'],
    DzlSliderPosition: ['none', 'top', 'right', 'bottom', 'left'],
    DzlThreeGridColumn: ['left', 'center', 'right'],
    DzlTitlebarAnimation: ['hidden', 'showing', 'shown', 'hiding'],
    DzlTreeDropPosition: ['into', 'before', 'after'],
    GtkFileChooserAction: ['open', 'save', 'select-folder', 'create-folder'],
    GtkOrientation: ['horizontal', 'vertical'],
    GtkPositionType: ['left', 'right', 'top', 'bottom'],
    GtkSelectionMode: ['none', 'single', 'browse', 'multiple'],
    GtkShortcutType: ['accelerator', 'gesture-pinch', 'gesture-stretch', 'gesture-rotate-clockwise', 'gesture-rotate-counterclockwise', 'gesture-two-finger-swipe-left', 'gesture-two-finger-swipe-right', 'gesture'],
    GtkTextDirection: ['none', 'ltr', 'rtl'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'DzlAnimationMode.ease-in-cubic': 4,
    'DzlAnimationMode.ease-in-out-cubic': 6,
    'DzlAnimationMode.ease-in-out-quad': 3,
    'DzlAnimationMode.ease-in-quad': 1,
    'DzlAnimationMode.ease-out-cubic': 5,
    'DzlAnimationMode.ease-out-quad': 2,
    'DzlAnimationMode.linear': 0,
    'DzlDockRevealerTransitionType.none': 0,
    'DzlDockRevealerTransitionType.slide-down': 4,
    'DzlDockRevealerTransitionType.slide-left': 2,
    'DzlDockRevealerTransitionType.slide-right': 1,
    'DzlDockRevealerTransitionType.slide-up': 3,
    'DzlShortcutMatch.equal': 1,
    'DzlShortcutMatch.none': 0,
    'DzlShortcutMatch.partial': 2,
    'DzlSliderPosition.bottom': 3,
    'DzlSliderPosition.left': 4,
    'DzlSliderPosition.none': 0,
    'DzlSliderPosition.right': 2,
    'DzlSliderPosition.top': 1,
    'DzlThreeGridColumn.center': 1,
    'DzlThreeGridColumn.left': 0,
    'DzlThreeGridColumn.right': 2,
    'DzlTitlebarAnimation.hidden': 0,
    'DzlTitlebarAnimation.hiding': 3,
    'DzlTitlebarAnimation.showing': 1,
    'DzlTitlebarAnimation.shown': 2,
    'DzlTreeDropPosition.after': 2,
    'DzlTreeDropPosition.before': 1,
    'DzlTreeDropPosition.into': 0,
    'GtkFileChooserAction.create-folder': 3,
    'GtkFileChooserAction.open': 0,
    'GtkFileChooserAction.save': 1,
    'GtkFileChooserAction.select-folder': 2,
    'GtkOrientation.horizontal': 0,
    'GtkOrientation.vertical': 1,
    'GtkPositionType.bottom': 3,
    'GtkPositionType.left': 0,
    'GtkPositionType.right': 1,
    'GtkPositionType.top': 2,
    'GtkSelectionMode.browse': 2,
    'GtkSelectionMode.multiple': 3,
    'GtkSelectionMode.none': 0,
    'GtkSelectionMode.single': 1,
    'GtkShortcutType.accelerator': 0,
    'GtkShortcutType.gesture': 7,
    'GtkShortcutType.gesture-pinch': 1,
    'GtkShortcutType.gesture-rotate-clockwise': 3,
    'GtkShortcutType.gesture-rotate-counterclockwise': 4,
    'GtkShortcutType.gesture-stretch': 2,
    'GtkShortcutType.gesture-two-finger-swipe-left': 5,
    'GtkShortcutType.gesture-two-finger-swipe-right': 6,
    'GtkTextDirection.ltr': 1,
    'GtkTextDirection.none': 0,
    'GtkTextDirection.rtl': 2,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'DzlFileTransferFlags.move': 1,
    'DzlFileTransferFlags.none': 0,
    'DzlShortcutPhase.bubble': 2,
    'DzlShortcutPhase.capture': 1,
    'DzlShortcutPhase.dispatch': 0,
    'DzlShortcutPhase.global': 4,
    'DzlTabStyle.both': 3,
    'DzlTabStyle.icons': 2,
    'DzlTabStyle.text': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'DzlAnimation.mode': 'DzlAnimationMode',
    'DzlDockBinEdge.edge': 'GtkPositionType',
    'DzlDockOverlayEdge.edge': 'GtkPositionType',
    'DzlDockRevealer.transition-type': 'DzlDockRevealerTransitionType',
    'DzlDockStack.edge': 'GtkPositionType',
    'DzlDockStack.style': 'DzlTabStyle',
    'DzlFileChooserEntry.action': 'GtkFileChooserAction',
    'DzlFileTransfer.flags': 'DzlFileTransferFlags',
    'DzlMultiPaned.orientation': 'GtkOrientation',
    'DzlPreferencesFileChooserButton.action': 'GtkFileChooserAction',
    'DzlPreferencesGroup.mode': 'GtkSelectionMode',
    'DzlShortcutsShortcut.direction': 'GtkTextDirection',
    'DzlShortcutsShortcut.shortcut-type': 'GtkShortcutType',
    'DzlSlider.position': 'DzlSliderPosition',
    'DzlSuggestionPopover.subtitle-ellipsize': 'PangoEllipsizeMode',
    'DzlSuggestionPopover.title-ellipsize': 'PangoEllipsizeMode',
    'DzlSuggestionRow.orientation': 'GtkOrientation',
    'DzlTab.edge': 'GtkPositionType',
    'DzlTab.style': 'DzlTabStyle',
    'DzlTabStrip.edge': 'GtkPositionType',
    'DzlTabStrip.style': 'DzlTabStyle',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {
    DzlApplicationWindow: {
        'titlebar': 'set_titlebar',
    },
    DzlPreferencesPage: {
        'group': 'add_group',
    },
    DzlSuggestionPopover: {
        'relative-to': 'set_relative_to',
    },
    DzlTab: {
        'widget': 'set_widget',
    },
    DzlTabStrip: {
        'control': 'add_control',
        'stack': 'set_stack',
    },
};

export const SINCE = {
    'DzlDirectoryReaper::remove-file': '3.32',
    'DzlMenuButton.menu-id': '3.26',
    'DzlMenuManager': '3.26',
    'DzlPathElement.icon-name': '3.26',
    'DzlPathElement.id': '3.26',
    'DzlPathElement.title': '3.26',
    'DzlReadOnlyListModel.base-model': '3.30',
    'DzlRecursiveFileMonitor::changed': '3.28',
    'DzlShortcutTooltip.title': '3.32',
    'DzlShortcutsShortcut.action-name': '3.22',
    'DzlSuggestionEntry.activate-on-single-click': '3.30',
    'DzlSuggestionEntry.compact': '3.34',
    'DzlSuggestionEntry.suggestion': '3.30',
    'DzlSuggestionEntry::suggestion-selected': '3.30',
    'DzlTreeNode.reset-on-collapse': '3.28',
};
