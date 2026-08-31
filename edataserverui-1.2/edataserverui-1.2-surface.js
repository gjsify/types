// The widget vocabulary of EDataServerUI-1.2 as runtime data.
//
// GENERATED — do not edit. Provenance: EDataServerUI-1.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface EDataServer.Extensible
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'EDataServerUI-1.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface EDataServer.Extensible';

export const OWN_PROPS = {
    ERemindersWidget: ['watcher'],
};

export const OWN_SIGNALS = {
    ERemindersWidget: ['activated', 'changed'],
};

export const DECLS = {
    ECertificateWidget: ['ECertificateWidget', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    ERemindersWidget: ['ERemindersWidget', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EWebDAVDiscoverContent: ['EWebDAVDiscoverContent', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EWebDAVDiscoverDialog: ['EWebDAVDiscoverDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
