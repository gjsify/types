// The widget vocabulary of Granite-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Granite-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Granite',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GraniteAccelLabel: ['accel-string', 'action-name', 'label'],
    GraniteAsyncImage: ['auto-size-request', 'gicon-async', 'load-on-realize', 'size-async'],
    GraniteMessageDialog: ['badge-icon', 'buttons', 'custom-bin', 'image-icon', 'primary-label', 'primary-text', 'secondary-label', 'secondary-text'],
    GraniteModeSwitch: ['active', 'primary-icon-gicon', 'primary-icon-name', 'primary-icon-tooltip-text', 'secondary-icon-gicon', 'secondary-icon-name', 'secondary-icon-tooltip-text'],
    GraniteSeekBar: ['duration-label', 'is-grabbing', 'is-hovering', 'playback-duration', 'playback-progress', 'progression-label', 'scale'],
    GraniteSettingsSidebar: ['stack', 'visible-child-name'],
    GraniteSwitchModelButton: ['description', 'text'],
    GraniteValidatedEntry: ['is-valid', 'min-length', 'regex'],
    GraniteWidgetsAlertView: ['description', 'icon-name', 'title'],
    GraniteWidgetsAvatar: ['pixbuf'],
    GraniteWidgetsCollapsiblePaned: ['collapse-mode'],
    GraniteWidgetsDatePicker: ['date', 'format'],
    GraniteWidgetsDynamicNotebook: ['add-button-tooltip', 'add-button-visible', 'allow-drag', 'allow-duplication', 'allow-new-window', 'allow-pinning', 'allow-restoring', 'current', 'force-left', 'group-name', 'max-restorable-tabs', 'menu', 'new-tab-label', 'restore-tab-label', 'show-tabs', 'tab-bar-behavior', 'tabs-closable'],
    GraniteWidgetsModeButton: ['selected'],
    GraniteWidgetsOverlayBar: ['active', 'label', 'overlay', 'status'],
    GraniteWidgetsSourceList: ['ellipsize-mode', 'root', 'selected'],
    GraniteWidgetsStorageBar: ['inner-margin-sides', 'storage', 'total-usage'],
    GraniteWidgetsTab: ['close-tab-label', 'duplicate-tab-label', 'ellipsize-mode', 'icon', 'label', 'menu', 'new-window-label', 'page', 'pinnable', 'pinned', 'restore-data', 'tooltip', 'working'],
    GraniteWidgetsTimePicker: ['format-12', 'format-24', 'time'],
    GraniteWidgetsToast: ['title'],
    GraniteWidgetsWelcome: ['subtitle', 'title'],
    GraniteWidgetsWelcomeButton: ['description', 'icon', 'title'],
};

export const OWN_SIGNALS = {
    GraniteWidgetsAlertView: ['action-activated'],
    GraniteWidgetsDatePicker: ['date-changed'],
    GraniteWidgetsDynamicNotebook: ['close-tab-requested', 'new-tab-requested', 'tab-added', 'tab-duplicated', 'tab-moved', 'tab-removed', 'tab-reordered', 'tab-restored', 'tab-switched'],
    GraniteWidgetsModeButton: ['mode-added', 'mode-changed', 'mode-removed'],
    GraniteWidgetsSourceList: ['item-selected'],
    GraniteWidgetsTimePicker: ['time-changed'],
    GraniteWidgetsToast: ['closed', 'default-action'],
    GraniteWidgetsWelcome: ['activated'],
};

export const DECLS = {
    GraniteAccelLabel: ['GraniteAccelLabel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteAsyncImage: ['GraniteAsyncImage', 'GtkImage', 'GtkMisc', 'GtkWidget', 'GtkBuildable'],
    GraniteDialog: ['GraniteDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteHeaderLabel: ['GraniteHeaderLabel', 'GtkLabel', 'GtkMisc', 'GtkWidget', 'GtkBuildable'],
    GraniteHyperTextView: ['GraniteHyperTextView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GraniteMessageDialog: ['GraniteMessageDialog', 'GraniteDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteModeSwitch: ['GraniteModeSwitch', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteSeekBar: ['GraniteSeekBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteSettingsSidebar: ['GraniteSettingsSidebar', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteSwitchModelButton: ['GraniteSwitchModelButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GraniteValidatedEntry: ['GraniteValidatedEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GraniteWidgetsAlertView: ['GraniteWidgetsAlertView', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteWidgetsAvatar: ['GraniteWidgetsAvatar', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsCollapsiblePaned: ['GraniteWidgetsCollapsiblePaned', 'GtkPaned', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteWidgetsCompositedWindow: ['GraniteWidgetsCompositedWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsDatePicker: ['GraniteWidgetsDatePicker', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GraniteWidgetsDynamicNotebook: ['GraniteWidgetsDynamicNotebook', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsModeButton: ['GraniteWidgetsModeButton', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteWidgetsOverlayBar: ['GraniteWidgetsOverlayBar', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsSourceList: ['GraniteWidgetsSourceList', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsStorageBar: ['GraniteWidgetsStorageBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GraniteWidgetsTab: ['GraniteWidgetsTab', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsTimePicker: ['GraniteWidgetsTimePicker', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GraniteWidgetsToast: ['GraniteWidgetsToast', 'GtkRevealer', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsWelcome: ['GraniteWidgetsWelcome', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GraniteWidgetsWelcomeButton: ['GraniteWidgetsWelcomeButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GraniteCloseButtonPosition: ['left', 'right'],
    GraniteCollapseMode: ['none', 'left', 'top', 'first', 'right', 'bottom', 'last'],
    GraniteServicesLogLevel: ['debug', 'info', 'notify', 'warn', 'error', 'fatal'],
    GraniteSettingsColorScheme: ['no-preference', 'dark', 'light'],
    GraniteSettingsPageStatusType: ['error', 'offline', 'success', 'warning', 'none'],
    GraniteTextStyle: ['title', 'h1', 'h2', 'h3'],
    GraniteWidgetsDynamicNotebookTabBarBehavior: ['always', 'single', 'never'],
    GraniteWidgetsStorageBarItemDescription: ['other', 'audio', 'video', 'photo', 'app', 'files'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

export const SLOT_CANDIDATES = {
    GraniteSeekBar: {
        'duration-label': 'set_duration_label',
        'progression-label': 'set_progression_label',
        'scale': 'set_scale',
    },
    GraniteWidgetsDynamicNotebook: {
        'current': 'set_current',
    },
    GraniteWidgetsTab: {
        'menu': 'set_menu',
        'page': 'set_page',
    },
    GraniteWidgetsWelcomeButton: {
        'icon': 'set_icon',
    },
};

export const SINCE = {};
