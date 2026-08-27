// The widget vocabulary of Entangle-0.1 as runtime data.
//
// GENERATED — do not edit. Provenance: Entangle-0.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Entangle-0.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

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

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
