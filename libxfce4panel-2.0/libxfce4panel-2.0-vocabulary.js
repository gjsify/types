// The widget vocabulary of Libxfce4panel-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Libxfce4panel-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Libxfce4panel',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    XfceArrowButton: ['arrow-type'],
    XfcePanelImage: ['pixbuf', 'size', 'source'],
    XfcePanelPlugin: ['arguments', 'comment', 'dark-mode', 'display-name', 'expand', 'name', 'shrink', 'small', 'unique-id'],
};

export const OWN_SIGNALS = {
    XfceArrowButton: ['arrow-type-changed'],
    XfcePanelPlugin: ['about', 'configure-plugin', 'free-data', 'hidden-event', 'mode-changed', 'nrows-changed', 'orientation-changed', 'remote-event', 'removed', 'save', 'screen-position-changed', 'size-changed'],
};

export const DECLS = {
    XfceArrowButton: ['XfceArrowButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    XfcePanelImage: ['XfcePanelImage', 'GtkWidget', 'GtkBuildable'],
    XfcePanelPlugin: ['XfcePanelPlugin', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    XfcePanelPluginMode: ['horizontal', 'vertical', 'deskbar'],
    XfceScreenPosition: ['none', 'nw-h', 'n', 'ne-h', 'nw-v', 'w', 'sw-v', 'ne-v', 'e', 'se-v', 'sw-h', 's', 'se-h', 'floating-h', 'floating-v'],
};

export const SLOT_CANDIDATES = {
    XfcePanelPlugin: {
        'action-widget': 'add_action_widget',
    },
};

export const SINCE = {
    'XfcePanelPlugin.comment': '4.8',
    'XfcePanelPlugin.dark-mode': '4.14',
    'XfcePanelPlugin.shrink': '4.10',
    'XfcePanelPlugin.small': '4.10',
    'XfcePanelPlugin::hidden-event': '4.21.0',
    'XfcePanelPlugin::mode-changed': '4.10',
    'XfcePanelPlugin::nrows-changed': '4.10',
    'XfcePanelPlugin::removed': '4.8',
};
