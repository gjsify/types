// The widget vocabulary of Entangle-0.1 as runtime data.
//
// GENERATED — do not edit. Provenance: Entangle-0.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Entangle',
    version: '0.1',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    EntangleCameraManager: ['camera'],
    EntangleCameraPicker: ['cameras'],
    EntangleCameraSupport: ['camera-list'],
    EntangleControlPanel: ['camera-prefs'],
    EntangleImageDisplay: ['aspect-ratio', 'autoscale', 'flip-horizontally', 'flip-vertically', 'focus-point', 'image', 'mask-enabled', 'mask-opacity', 'overexposure-highlighting', 'scale'],
    EntangleImageHistogram: ['image'],
    EntangleMediaPopup: ['media'],
    EntangleMediaStatusbar: ['media'],
    EntangleSessionBrowser: ['session', 'thumbnail-loader'],
};

export const OWN_SIGNALS = {
    EntangleCameraManager: ['closed'],
    EntangleCameraPicker: ['picker-connect', 'picker-refresh'],
    EntangleMediaPopup: ['popup-close'],
    EntangleSessionBrowser: ['selection-changed'],
};

export const DECLS = {
    EntangleCameraManager: ['EntangleCameraManager', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'EntangleProgress', 'GtkBuildable'],
    EntangleCameraPicker: ['EntangleCameraPicker', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleCameraSupport: ['EntangleCameraSupport', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleControlPanel: ['EntangleControlPanel', 'GtkExpander', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleHelpAbout: ['EntangleHelpAbout', 'GtkAboutDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleImageDisplay: ['EntangleImageDisplay', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    EntangleImageHistogram: ['EntangleImageHistogram', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    EntangleMediaPopup: ['EntangleMediaPopup', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleMediaStatusbar: ['EntangleMediaStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EntanglePreferencesDisplay: ['EntanglePreferencesDisplay', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EntangleScriptConfig: ['EntangleScriptConfig', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EntangleSessionBrowser: ['EntangleSessionBrowser', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
