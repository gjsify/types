// The widget vocabulary of Gitg-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gitg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gitg',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GitgDiffStat: ['added', 'removed'],
    GitgDiffView: ['changes-inline', 'commit', 'context-lines', 'default-collapse-all', 'diff', 'handle-selection', 'has-selection', 'highlight', 'ignore-whitespace', 'new-is-workdir', 'repository', 'show-parents', 'staged', 'tab-width', 'unstaged', 'use-gravatar', 'wrap-lines'],
    GitgDiffViewOptions: ['context-lines', 'view'],
    GitgProgressBin: ['fraction'],
    GitgRepositoryListBox: ['bookmarks-from-recent-files', 'location', 'mode'],
    GitgRepositoryListBoxRow: ['branch-name', 'can-remove', 'dirname', 'fraction', 'loading', 'mode', 'repository', 'repository-name', 'selected', 'time'],
    GitgSidebar: ['model'],
};

export const OWN_SIGNALS = {
    GitgDiffView: ['options-changed'],
    GitgEntryHistory: ['activated-with-text'],
    GitgRepositoryListBox: ['repository-activated', 'show-error'],
    GitgRepositoryListBoxRow: ['request-delete-source', 'request-remove', 'secondary-clicked'],
    GitgSidebar: ['deselected', 'populate-popup'],
};

export const DECLS = {
    GitgAuthenticationDialog: ['GitgAuthenticationDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgCommitListView: ['GitgCommitListView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GitgDiffStat: ['GitgDiffStat', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    GitgDiffView: ['GitgDiffView', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GitgDiffViewOptions: ['GitgDiffViewOptions', 'GtkToolbar', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'GtkToolShell'],
    GitgEntryHistory: ['GitgEntryHistory', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GitgProgressBin: ['GitgProgressBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgRepositoryListBox: ['GitgRepositoryListBox', 'GtkListBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgRepositoryListBoxRow: ['GitgRepositoryListBoxRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    GitgSidebar: ['GitgSidebar', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GitgTheme: ['GitgTheme', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GitgAuthenticationLifeTime: ['forget', 'session', 'forever'],
    GitgCommitModelColumns: ['sha1', 'subject', 'message', 'author', 'author-name', 'author-email', 'author-date', 'committer', 'committer-name', 'committer-email', 'committer-date', 'commit', 'num'],
    GitgDeleteSources: ['cancel', 'trash', 'delete'],
    GitgPatchSetType: ['add', 'remove'],
    GitgRefState: ['none', 'selected', 'prelight'],
    GitgRefType: ['none', 'branch', 'remote', 'tag', 'stash'],
    GitgRemoteState: ['disconnected', 'connecting', 'connected', 'transferring'],
    GitgSelectionMode: ['normal', 'selection'],
    GitgSidebarColumn: ['hint', 'section', 'item'],
    GitgSidebarHint: ['none', 'header', 'separator', 'dummy'],
};

export const SLOT_CANDIDATES = {
    GitgDiffViewOptions: {
        'view': 'set_view',
    },
};

export const SINCE = {};
