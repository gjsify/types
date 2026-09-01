// The widget vocabulary of GtkFrdp-0.2 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkFrdp-0.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkFrdp',
    version: '0.2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    FrdpDisplay: ['allow-resize', 'domain', 'password', 'resize-supported', 'scaling', 'username'],
};

export const OWN_SIGNALS = {
    FrdpDisplay: ['rdp-auth-failure', 'rdp-connected', 'rdp-disconnected', 'rdp-error', 'rdp-needs-authentication', 'rdp-needs-certificate-change-verification', 'rdp-needs-certificate-verification'],
};

export const DECLS = {
    FrdpDisplay: ['FrdpDisplay', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
