// The widget vocabulary of Tepl-5 as runtime data.
//
// GENERATED — do not edit. Provenance: Tepl-5 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Tepl',
    version: '5',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    TeplStyleSchemeChooserWidget: ['tepl-style-scheme-id'],
    TeplTab: ['view'],
    TeplTabGroup: ['active-tab'],
    TeplTabLabel: ['tab'],
};

export const OWN_SIGNALS = {
    TeplTab: ['close-request'],
};

export const DECLS = {
    TeplGotoLineBar: ['TeplGotoLineBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplInfoBar: ['TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplLanguageChooserDialog: ['TeplLanguageChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplLanguageChooser'],
    TeplLanguageChooserWidget: ['TeplLanguageChooserWidget', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplLanguageChooser'],
    TeplNotebook: ['TeplNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplTabGroup'],
    TeplPanel: ['TeplPanel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplSpaceDrawerPrefs: ['TeplSpaceDrawerPrefs', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStatusbar: ['TeplStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStyleSchemeChooserWidget: ['TeplStyleSchemeChooserWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    TeplTab: ['TeplTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplTabGroup'],
    TeplTabLabel: ['TeplTabLabel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplView: ['TeplView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    TeplNewlineType: ['lf', 'cr', 'cr-lf'],
    TeplSelectionType: ['no-selection', 'on-same-line', 'multiple-lines'],
};

export const SLOT_CANDIDATES = {
    TeplGotoLineBar: {
        'view': 'set_view',
    },
    TeplInfoBar: {
        'content-widget': 'add_content_widget',
    },
    TeplTab: {
        'info': 'add_info_bar',
    },
};

export const SINCE = {
    'TeplStyleSchemeChooserWidget.tepl-style-scheme-id': '5.0',
    'TeplTab.view': '3.0',
    'TeplTab::close-request': '3.0',
    'TeplTabGroup.active-tab': '3.0',
    'TeplTabLabel.tab': '3.0',
};
