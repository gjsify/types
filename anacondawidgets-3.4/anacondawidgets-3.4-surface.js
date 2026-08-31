// The widget vocabulary of AnacondaWidgets-3.4 as runtime data.
//
// GENERATED — do not edit. Provenance: AnacondaWidgets-3.4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'AnacondaWidgets-3.4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    AnacondaBaseStandalone: ['continue-button', 'quit-button'],
    AnacondaBaseWindow: ['distribution', 'window-name'],
    AnacondaDiskOverview: ['capacity', 'description', 'free', 'kind', 'name', 'popup-info'],
    AnacondaLayoutIndicator: ['label-width'],
    AnacondaMountpointSelector: ['mountpoint', 'name', 'show-arrow', 'size'],
    AnacondaSpokeSelector: ['icon', 'status', 'title'],
};

export const OWN_SIGNALS = {
    AnacondaBaseWindow: ['help-button-clicked', 'info-bar-clicked'],
    AnacondaMountpointSelector: ['chosen-changed'],
    AnacondaSpokeWindow: ['button-clicked'],
};

export const DECLS = {
    AnacondaBaseWindow: ['AnacondaBaseWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaDiskOverview: ['AnacondaDiskOverview', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaHubWindow: ['AnacondaHubWindow', 'AnacondaBaseStandalone', 'AnacondaBaseWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaLayoutIndicator: ['AnacondaLayoutIndicator', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaMountpointSelector: ['AnacondaMountpointSelector', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaSpokeSelector: ['AnacondaSpokeSelector', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaSpokeWindow: ['AnacondaSpokeWindow', 'AnacondaBaseWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnacondaStandaloneWindow: ['AnacondaStandaloneWindow', 'AnacondaBaseStandalone', 'AnacondaBaseWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    AnacondaMountpointSelector: {
        'page': 'set_page',
    },
};

export const SINCE = {};
