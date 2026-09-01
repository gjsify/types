// The widget vocabulary of Devhelp-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Devhelp-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Devhelp',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    DhBookTree: ['profile'],
    DhNotebook: ['profile'],
    DhSearchBar: ['notebook'],
    DhSidebar: ['profile'],
    DhTab: ['web-view'],
    DhTabLabel: ['tab'],
    DhWebView: ['profile'],
};

export const OWN_SIGNALS = {
    DhAssistantView: ['open-uri'],
    DhBookTree: ['link-selected'],
    DhSidebar: ['link-selected'],
    DhWebView: ['open-new-tab'],
};

export const DECLS = {
    DhAssistantView: ['DhAssistantView', 'WebKitWebView', 'WebKitWebViewBase', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DhBookTree: ['DhBookTree', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    DhNotebook: ['DhNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DhSearchBar: ['DhSearchBar', 'GtkSearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DhSidebar: ['DhSidebar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DhTab: ['DhTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DhTabLabel: ['DhTabLabel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DhWebView: ['DhWebView', 'WebKitWebView', 'WebKitWebViewBase', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    DhLinkType: ['book', 'page', 'keyword', 'function', 'struct', 'macro', 'enum', 'typedef', 'property', 'signal'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'DhBookTree.profile': '3.30',
    'DhNotebook.profile': '3.30',
    'DhSearchBar.notebook': '3.30',
    'DhSidebar.profile': '3.30',
    'DhTab.web-view': '3.30',
    'DhTabLabel.tab': '3.30',
    'DhWebView.profile': '3.30',
    'DhWebView::open-new-tab': '3.30',
};
