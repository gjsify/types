// The widget vocabulary of Granite-7.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Granite-7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Granite-7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    GraniteAccelLabel: ['accel-string', 'action-name', 'label'],
    GraniteBackButton: ['label'],
    GraniteBin: ['child'],
    GraniteBox: ['child-spacing'],
    GraniteDatePicker: ['date', 'format'],
    GraniteHeaderLabel: ['ellipsize', 'label', 'mnemonic-widget', 'secondary-text', 'size'],
    GraniteListItem: ['child', 'description', 'menu-model', 'text'],
    GraniteMessageDialog: ['badge-icon', 'buttons', 'custom-bin', 'image-icon', 'primary-label', 'primary-text', 'secondary-label', 'secondary-text'],
    GraniteModeSwitch: ['active', 'primary-icon-gicon', 'primary-icon-name', 'primary-icon-tooltip-text', 'secondary-icon-gicon', 'secondary-icon-name', 'secondary-icon-tooltip-text'],
    GraniteOverlayBar: ['active', 'label', 'overlay'],
    GranitePlaceholder: ['description', 'icon', 'title'],
    GraniteSettingsSidebar: ['stack', 'visible-child-name'],
    GraniteSwitchModelButton: ['description', 'text'],
    GraniteTimePicker: ['format-12', 'format-24', 'time'],
    GraniteToast: ['title'],
    GraniteToolBox: ['content'],
    GraniteValidatedEntry: ['is-valid', 'min-length', 'regex'],
};

export const OWN_SIGNALS = {
    GraniteTimePicker: ['time-changed'],
    GraniteToast: ['closed', 'default-action', 'dismissed'],
};

export const DECLS = {
    GraniteAccelLabel: ['GraniteAccelLabel', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GraniteBackButton: ['GraniteBackButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteBin: ['GraniteBin', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteBox: ['GraniteBox', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GraniteDatePicker: ['GraniteDatePicker', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkAccessible', 'GtkCellEditable', 'GtkConstraintTarget', 'GtkEditable'],
    GraniteDialog: ['GraniteDialog', 'GtkDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    GraniteHeaderLabel: ['GraniteHeaderLabel', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteHyperTextView: ['GraniteHyperTextView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    GraniteListItem: ['GraniteListItem', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteMessageDialog: ['GraniteMessageDialog', 'GraniteDialog', 'GtkDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    GraniteModeSwitch: ['GraniteModeSwitch', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GraniteOverlayBar: ['GraniteOverlayBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GranitePlaceholder: ['GranitePlaceholder', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteSettingsSidebar: ['GraniteSettingsSidebar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteSwitchModelButton: ['GraniteSwitchModelButton', 'GtkToggleButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteTimePicker: ['GraniteTimePicker', 'GtkEntry', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkCellEditable', 'GtkConstraintTarget', 'GtkEditable'],
    GraniteToast: ['GraniteToast', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteToolBox: ['GraniteToolBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GraniteValidatedEntry: ['GraniteValidatedEntry', 'GtkEntry', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkCellEditable', 'GtkConstraintTarget', 'GtkEditable'],
};

export const ENUM_NICKS = {
    GraniteBoxSpacing: ['none', 'half', 'single', 'double', 'linked'],
    GraniteHeaderLabelSize: ['h1', 'h2', 'h3', 'h4'],
    GraniteSettingsColorScheme: ['no-preference', 'dark', 'light'],
    GraniteSettingsPageStatusType: ['error', 'offline', 'success', 'warning', 'none'],
    GraniteToastDismissReason: ['expired', 'closed', 'withdrawn'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

export const SLOT_CANDIDATES = {
    GraniteBin: {
        'child': 'set_child',
    },
    GraniteHeaderLabel: {
        'mnemonic': 'set_mnemonic_widget',
    },
    GraniteListItem: {
        'child': 'set_child',
    },
    GraniteToolBox: {
        'bottom': 'add_bottom_bar',
        'content': 'set_content',
        'top': 'add_top_bar',
    },
};

export const SINCE = {
    'GraniteHeaderLabel.ellipsize': '7.8.0',
    'GraniteHeaderLabel.mnemonic-widget': '7.4.0',
    'GraniteHeaderLabel.secondary-text': '7.1.0',
    'GraniteHeaderLabel.size': '7.7.0',
    'GraniteListItem.menu-model': '7.8.0',
};
