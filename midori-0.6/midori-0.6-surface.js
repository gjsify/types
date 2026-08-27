// The widget vocabulary of Midori-0.6 as runtime data.
//
// GENERATED — do not edit. Provenance: Midori-0.6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Midori-0.6 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    MidoriBrowser: ['is-fullscreen', 'is-loading', 'is-locked', 'tab', 'trash', 'uri', 'web-context'],
    MidoriDownloadRow: ['item'],
    MidoriFavicon: ['surface', 'uri'],
    MidoriLabelWidget: ['label', 'title', 'widget'],
    MidoriStatusbar: ['label'],
    MidoriSuggestionRow: ['item', 'key', 'location', 'regex'],
    MidoriSwitcher: ['show-close-buttons', 'stack'],
    MidoriTab: ['can-go-back', 'can-go-forward', 'color', 'display-title', 'display-uri', 'item', 'link-uri', 'pinned', 'progress', 'secure'],
    MidoriTally: ['active', 'show-close', 'tab', 'title', 'uri'],
    MidoriUrlbar: ['key', 'location', 'regex', 'secure', 'uri'],
};

export const OWN_SIGNALS = {
    MidoriBrowser: ['default-tab'],
    MidoriDownloadButton: ['show-downloads'],
    MidoriTally: ['clicked'],
};

export const DECLS = {
    MidoriBrowser: ['MidoriBrowser', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriClearPrivateData: ['MidoriClearPrivateData', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriDownloadButton: ['MidoriDownloadButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    MidoriDownloadRow: ['MidoriDownloadRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    MidoriFavicon: ['MidoriFavicon', 'GtkImage', 'GtkMisc', 'GtkWidget', 'GtkBuildable'],
    MidoriLabelWidget: ['MidoriLabelWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    MidoriNavigationbar: ['MidoriNavigationbar', 'GtkActionBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriNetworkCheck: ['MidoriNetworkCheck', 'GtkActionBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriPreferences: ['MidoriPreferences', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriStatusbar: ['MidoriStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    MidoriSuggestionRow: ['MidoriSuggestionRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    MidoriSwitcher: ['MidoriSwitcher', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    MidoriTab: ['MidoriTab', 'WebKitWebView', 'WebKitWebViewBase', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriTally: ['MidoriTally', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    MidoriUrlbar: ['MidoriUrlbar', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
};

export const ENUM_NICKS = {
    MidoriDebugFlags: ['none', 'history'],
    MidoriProxyType: ['automatic', 'http', 'none'],
    MidoriStartupType: ['speed-dial', 'homepage', 'last-open-pages', 'delayed-pages'],
};

export const SLOT_CANDIDATES = {
    MidoriBrowser: {
        'button': 'add_button',
        'panel': 'add_panel',
        'tab': 'set_tab',
    },
    MidoriLabelWidget: {
        'label': 'set_label',
        'widget': 'set_widget',
    },
    MidoriSwitcher: {
        'stack': 'set_stack',
    },
    MidoriTally: {
        'tab': 'set_tab',
    },
};

export const SINCE = {};
