// The widget vocabulary of Tepl-6 as runtime data.
//
// GENERATED — do not edit. Provenance: Tepl-6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Tepl-6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    TeplInfoBar: ['handle-close-response', 'icon-from-message-type', 'icon-name'],
    TeplOverwriteIndicator: ['overwrite'],
    TeplProgressInfoBar: ['has-cancel-button'],
    TeplStyleSchemeChooserSimple: ['style-scheme-id'],
    TeplTab: ['view'],
    TeplTabGroup: ['active-tab'],
    TeplTabLabel: ['tab'],
};

export const OWN_SIGNALS = {
    TeplPrefsDialog: ['reset-all'],
    TeplTab: ['close-request'],
};

export const DECLS = {
    TeplGotoLineBar: ['TeplGotoLineBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplInfoBar: ['TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplLanguageChooserDialog: ['TeplLanguageChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplLanguageChooser'],
    TeplLanguageChooserWidget: ['TeplLanguageChooserWidget', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplLanguageChooser'],
    TeplLineColumnIndicator: ['TeplLineColumnIndicator', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplNotebook: ['TeplNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplTabGroup'],
    TeplOverwriteIndicator: ['TeplOverwriteIndicator', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplPanel1: ['TeplPanel1', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplPanelSwitcherMenu: ['TeplPanelSwitcherMenu', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplPrefsDialog: ['TeplPrefsDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplProgressInfoBar: ['TeplProgressInfoBar', 'TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplSpaceDrawerPrefs: ['TeplSpaceDrawerPrefs', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStatusMenuButton: ['TeplStatusMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    TeplStatusbar: ['TeplStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStyleSchemeChooserFull: ['TeplStyleSchemeChooserFull', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplStyleSchemeChooserSimple: ['TeplStyleSchemeChooserSimple', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    TeplTab: ['TeplTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplTabGroup'],
    TeplTabLabel: ['TeplTabLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplView: ['TeplView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    TeplInfoBarLocation: ['alongside-icon', 'below-icon'],
    TeplNewlineType: ['lf', 'cr', 'cr-lf'],
    TeplSelectionType: ['no-selection', 'on-same-line', 'multiple-lines'],
    TeplSettingsThemeVariant: ['system', 'light', 'dark'],
};

export const SLOT_CANDIDATES = {
    TeplGotoLineBar: {
        'view': 'set_view',
    },
    TeplLineColumnIndicator: {
        'view': 'set_view',
    },
    TeplOverwriteIndicator: {
        'view': 'set_view',
    },
    TeplTab: {
        'info': 'add_info_bar',
    },
};

export const SINCE = {
    'TeplInfoBar.handle-close-response': '6.0',
    'TeplInfoBar.icon-from-message-type': '6.0',
    'TeplInfoBar.icon-name': '6.0',
    'TeplOverwriteIndicator.overwrite': '6.4',
    'TeplProgressInfoBar.has-cancel-button': '6.0',
    'TeplStyleSchemeChooserSimple.style-scheme-id': '6.11',
    'TeplTab.view': '3.0',
    'TeplTabGroup.active-tab': '3.0',
    'TeplTabLabel.tab': '3.0',
};
