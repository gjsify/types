// The widget vocabulary of XApp-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: XApp-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'XApp-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    XAppIconChooserButton: ['category', 'icon', 'icon-size'],
    XAppIconChooserDialog: ['allow-paths', 'default-icon', 'icon-size'],
    XAppStackSidebar: ['stack'],
};

export const OWN_SIGNALS = {
    XAppIconChooserDialog: ['close', 'select'],
    XAppPreferencesWindow: ['close'],
};

export const DECLS = {
    XAppGtkWindow: ['XAppGtkWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    XAppIconChooserButton: ['XAppIconChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    XAppIconChooserDialog: ['XAppIconChooserDialog', 'XAppGtkWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    XAppPreferencesWindow: ['XAppPreferencesWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    XAppStackSidebar: ['XAppStackSidebar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    XAppIconSize: ['16', '22', '24', '32', '48', '96'],
    XAppScrollDirection: ['up', 'down', 'left', 'right'],
    XAppStatusIconState: ['native', 'fallback', 'no-support'],
};

export const SLOT_CANDIDATES = {
    XAppStackSidebar: {
        'stack': 'set_stack',
    },
};

export const SINCE = {};
