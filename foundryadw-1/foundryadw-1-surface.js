// The widget vocabulary of FoundryAdw-1 as runtime data.
//
// GENERATED — do not edit. Provenance: FoundryAdw-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'FoundryAdw-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    FoundryFileRow: ['file', 'file-type'],
    FoundryPage: ['auxiliary', 'content', 'needs-attention'],
    FoundryPanelBar: ['show-bottom', 'show-start', 'workspace'],
    FoundryPathBar: ['root', 'selected-item'],
    FoundrySearchDialog: ['context', 'search-text'],
    FoundryTreeExpander: ['activate-on-click', 'expanded-icon', 'expanded-icon-name', 'expanded-paintable', 'icon', 'icon-name', 'ignored', 'list-row', 'menu-model', 'paintable', 'suffix', 'title', 'use-markup'],
    FoundryWorkspace: ['auxiliary-placeholder', 'collapsed-titlebar', 'context', 'primary-menu', 'show-auxiliary', 'show-sidebar', 'show-utilities', 'sidebar-titlebar', 'status-widget', 'titlebar'],
};

export const OWN_SIGNALS = {
    FoundryPage: ['presented', 'raise'],
    FoundryTreeExpander: ['context-menu'],
};

export const DECLS = {
    FoundryFileRow: ['FoundryFileRow', 'AdwEntryRow', 'AdwPreferencesRow', 'GtkListBoxRow', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget', 'GtkEditable'],
    FoundryPage: ['FoundryPage', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryPanelBar: ['FoundryPanelBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryPathBar: ['FoundryPathBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundrySearchDialog: ['FoundrySearchDialog', 'AdwDialog', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkShortcutManager'],
    FoundryTreeExpander: ['FoundryTreeExpander', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryWorkspace: ['FoundryWorkspace', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GFileType: ['unknown', 'regular', 'directory', 'symbolic-link', 'special', 'shortcut', 'mountable'],
};

export const SLOT_CANDIDATES = {
    FoundryPage: {
        'auxiliary': 'set_auxiliary',
        'content': 'set_content',
    },
    FoundryPanelBar: {
        'workspace': 'set_workspace',
    },
    FoundryTreeExpander: {
        'suffix': 'set_suffix',
    },
    FoundryWorkspace: {
        'auxiliary-placeholder': 'set_auxiliary_placeholder',
        'bottom-panel': 'add_bottom_panel',
        'collapsed-titlebar': 'set_collapsed_titlebar',
        'page': 'add_page',
        'sidebar-panel': 'add_sidebar_panel',
        'sidebar-titlebar': 'set_sidebar_titlebar',
        'status': 'set_status_widget',
        'titlebar': 'set_titlebar',
    },
};

export const SINCE = {
    'FoundryTreeExpander.activate-on-click': '1.1',
    'FoundryTreeExpander.paintable': '1.1',
};
