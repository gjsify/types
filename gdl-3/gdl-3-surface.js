// The widget vocabulary of Gdl-3 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdl-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdl.DockObject.pixbuf-icon
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gdl-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdl.DockObject.pixbuf-icon';

export const OWN_PROPS = {
    GdlDock: ['default-title', 'floating', 'floatx', 'floaty', 'height', 'skip-taskbar', 'width'],
    GdlDockBar: ['dockbar-style', 'master'],
    GdlDockItem: ['behavior', 'closed', 'iconified', 'locked', 'orientation', 'preferred-height', 'preferred-width', 'resize'],
    GdlDockItemGrip: ['item'],
    GdlDockNotebook: ['page'],
    GdlDockObject: ['long-name', 'master', 'name', 'pixbuf-icon', 'stock-id'],
    GdlDockPaned: ['position'],
    GdlDockPlaceholder: ['floating', 'floatx', 'floaty', 'height', 'host', 'next-placement', 'sticky', 'width'],
    GdlDockTablabel: ['item'],
    GdlSwitcher: ['switcher-style', 'tab-pos', 'tab-reorderable'],
};

export const OWN_SIGNALS = {
    GdlDock: ['layout-changed'],
    GdlDockItem: ['deselected', 'dock-drag-begin', 'dock-drag-end', 'dock-drag-motion', 'move-focus-child', 'selected'],
    GdlDockObject: ['detach', 'dock'],
    GdlDockTablabel: ['button-pressed-handle'],
};

export const DECLS = {
    GdlDock: ['GdlDock', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockBar: ['GdlDockBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdlDockItem: ['GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockItemButtonImage: ['GdlDockItemButtonImage', 'GtkWidget', 'GtkBuildable'],
    GdlDockItemGrip: ['GdlDockItemGrip', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockNotebook: ['GdlDockNotebook', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockObject: ['GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockPaned: ['GdlDockPaned', 'GdlDockItem', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockPlaceholder: ['GdlDockPlaceholder', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlDockTablabel: ['GdlDockTablabel', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlPreviewWindow: ['GdlPreviewWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdlSwitcher: ['GdlSwitcher', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdlDockBarStyle: ['icons', 'text', 'both', 'auto'],
    GdlDockPlacement: ['none', 'top', 'bottom', 'right', 'left', 'center', 'floating'],
    GdlSwitcherStyle: ['text', 'icon', 'both', 'toolbar', 'tabs', 'none'],
};

export const SLOT_CANDIDATES = {
    GdlDockItem: {
        'child': 'set_child',
        'default-position': 'set_default_position',
        'tablabel': 'set_tablabel',
    },
    GdlDockItemGrip: {
        'label': 'set_label',
    },
};

export const SINCE = {
    'GdlDock.skip-taskbar': '3.6',
    'GdlDockItem.closed': '3.6',
    'GdlDockItem.iconified': '3.6',
    'GdlDockObject.pixbuf-icon': '3.3.2',
};
