// The widget vocabulary of Pnl-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Pnl-1.0 — library 3.25.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Pnl-1.0 — library 3.25.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    PnlDock: ['manager'],
    PnlDockBinEdge: ['edge'],
    PnlDockOverlayEdge: ['edge', 'position'],
    PnlDockRevealer: ['position', 'position-set', 'reveal-child', 'transition-duration', 'transition-type'],
    PnlDockStack: ['edge'],
    PnlDockWidget: ['manager', 'title'],
    PnlMultiPaned: ['orientation'],
    PnlTab: ['edge', 'title', 'widget'],
    PnlTabStrip: ['edge', 'stack'],
};

export const OWN_SIGNALS = {
    PnlDockBinEdge: ['move-to-bin-child'],
    PnlDockOverlay: ['hide-edges'],
    PnlMultiPaned: ['resize-drag-begin', 'resize-drag-end'],
};

export const DECLS = {
    PnlDockBin: ['PnlDockBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDock', 'PnlDockItem'],
    PnlDockBinEdge: ['PnlDockBinEdge', 'PnlDockRevealer', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDockItem'],
    PnlDockOverlay: ['PnlDockOverlay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDock', 'PnlDockItem'],
    PnlDockOverlayEdge: ['PnlDockOverlayEdge', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDockItem'],
    PnlDockPaned: ['PnlDockPaned', 'PnlMultiPaned', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'PnlDockItem'],
    PnlDockRevealer: ['PnlDockRevealer', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PnlDockStack: ['PnlDockStack', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'PnlDockItem'],
    PnlDockTabStrip: ['PnlDockTabStrip', 'PnlTabStrip', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PnlDockWidget: ['PnlDockWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDockItem'],
    PnlDockWindow: ['PnlDockWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'PnlDock', 'PnlDockItem'],
    PnlMultiPaned: ['PnlMultiPaned', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PnlTab: ['PnlTab', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    PnlTabStrip: ['PnlTabStrip', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PnlAnimationMode: ['linear', 'ease-in-quad', 'ease-in-out-quad', 'ease-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic'],
    PnlDockRevealerTransitionType: ['none', 'slide-right', 'slide-left', 'slide-up', 'slide-down'],
};

export const SLOT_CANDIDATES = {
    PnlTab: {
        'widget': 'set_widget',
    },
    PnlTabStrip: {
        'stack': 'set_stack',
    },
};

export const SINCE = {};
