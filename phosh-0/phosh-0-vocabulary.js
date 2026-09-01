// The widget vocabulary of Phosh-0 as runtime data.
//
// GENERATED — do not edit. Provenance: Phosh-0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Phosh.LayerSurface.layer-shell Phosh.LayerSurface.wl-output
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Phosh',
    version: '0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Phosh.LayerSurface.layer-shell', 'Phosh.LayerSurface.wl-output'],
};

export const OWN_PROPS = {
    PhoshLayerSurface: ['anchor', 'exclusive-zone', 'height', 'kbd-interactivity', 'layer', 'layer-shell', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'namespace', 'width', 'wl-output'],
    PhoshLockscreen: ['require-unlock'],
    PhoshQuickSetting: ['active', 'can-show-status', 'long-press-action-name', 'long-press-action-target', 'showing-status', 'status-icon', 'status-page'],
    PhoshStatusIcon: ['extra-widget', 'icon-name', 'icon-size', 'info', 'pixel-size', 'priority'],
    PhoshStatusPage: ['content', 'footer', 'header', 'title'],
};

export const OWN_SIGNALS = {
    PhoshLayerSurface: ['configured'],
    PhoshLockscreen: ['lockscreen-unlock', 'wakeup-output'],
    PhoshQuickSetting: ['clicked', 'hide-status', 'long-pressed', 'show-status'],
    PhoshStatusPage: ['done'],
};

export const DECLS = {
    PhoshLayerSurface: ['PhoshLayerSurface', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PhoshLockscreen: ['PhoshLockscreen', 'PhoshLayerSurface', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PhoshQuickSetting: ['PhoshQuickSetting', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PhoshStatusIcon: ['PhoshStatusIcon', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PhoshStatusPage: ['PhoshStatusPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PhoshLockscreenPage: ['info', 'extra', 'unlock'],
};

export const SLOT_CANDIDATES = {
    PhoshLockscreen: {
        'extra-page': 'add_extra_page',
    },
    PhoshQuickSetting: {
        'status-icon': 'set_status_icon',
        'status-page': 'set_status_page',
    },
    PhoshStatusIcon: {
        'extra': 'set_extra_widget',
    },
    PhoshStatusPage: {
        'content': 'set_content',
        'footer': 'set_footer',
        'header': 'set_header',
    },
};

export const SINCE = {};
