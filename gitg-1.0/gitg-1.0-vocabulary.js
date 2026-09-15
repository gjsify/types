// The widget vocabulary of Gitg-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gitg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Ggit.Branch Ggit.Ref Ggit.ObjectFactoryBase Ggit.Commit Ggit.Object Gio.Initable Ggit.Remote — inlined base(s) their owner's vocabulary does not emit: Ggit.Native Ggit.Repository — prop(s) no TypeScript value satisfies: Ggit.Native.native
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gitg',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Ggit.Branch', 'Ggit.Ref', 'Ggit.ObjectFactoryBase', 'Ggit.Commit', 'Ggit.Object', 'Gio.Initable', 'Ggit.Remote'],
    inlinedBases: ['Ggit.Native', 'Ggit.Repository'],
    unsettableProps: ['Ggit.Native.native'],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    GgitNative: ['native'],
    GgitRepository: ['clone-options', 'init', 'is-bare', 'location', 'url', 'workdir'],
    GitgCellRendererLanes: ['commit', 'dot-width', 'labels', 'lane-width', 'next-commit'],
    GitgCommit: ['mylane', 'tag'],
    GitgCommitModel: ['limit', 'repository', 'sort-mode'],
    GitgDate: ['date-string'],
    GitgDiffStat: ['added', 'removed'],
    GitgDiffView: ['changes-inline', 'commit', 'context-lines', 'default-collapse-all', 'diff', 'handle-selection', 'has-selection', 'highlight', 'ignore-whitespace', 'new-is-workdir', 'repository', 'show-parents', 'staged', 'tab-width', 'unstaged', 'use-gravatar', 'wrap-lines'],
    GitgDiffViewOptions: ['context-lines', 'view'],
    GitgHook: ['environment', 'name', 'working-directory'],
    GitgLanes: ['inactive-collapse', 'inactive-enabled', 'inactive-gap', 'inactive-max', 'miss-commits'],
    GitgParsedRefName: ['rtype'],
    GitgProgressBin: ['fraction'],
    GitgRef: ['d-parsed-name', 'd-pushes', 'state', 'working'],
    GitgRemote: ['credentials-provider', 'fetch-specs', 'push-specs', 'state'],
    GitgRepositoryListBox: ['bookmarks-from-recent-files', 'location', 'mode'],
    GitgRepositoryListBoxRow: ['branch-name', 'can-remove', 'dirname', 'fraction', 'loading', 'mode', 'repository', 'repository-name', 'selected', 'time'],
    GitgSidebar: ['model'],
};

export const OWN_SIGNALS = {
    GitgCommitModel: ['begin-clear', 'end-clear', 'finished', 'started', 'update'],
    GitgDiffView: ['options-changed'],
    GitgEntryHistory: ['activated-with-text'],
    GitgRemote: ['tip-updated'],
    GitgRepositoryListBox: ['repository-activated', 'show-error'],
    GitgRepositoryListBoxRow: ['request-delete-source', 'request-remove', 'secondary-clicked'],
    GitgSidebar: ['deselected', 'populate-popup'],
    GitgSidebarItem: ['activated'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GitgAsync: ['GitgAsync'],
    GitgAuthenticationDialog: ['GitgAuthenticationDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgAvatarCache: ['GitgAvatarCache'],
    GitgBranchBase: ['GitgBranchBase', 'GgitNative', 'GitgRef', 'GitgBranch'],
    GitgCellRendererLanes: ['GitgCellRendererLanes', 'GtkCellRendererText', 'GtkCellRenderer'],
    GitgColor: ['GitgColor'],
    GitgCommit: ['GitgCommit', 'GgitNative'],
    GitgCommitListView: ['GitgCommitListView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GitgCommitModel: ['GitgCommitModel', 'GtkTreeModel'],
    GitgCredentialsManager: ['GitgCredentialsManager'],
    GitgDate: ['GitgDate'],
    GitgDiffStat: ['GitgDiffStat', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    GitgDiffView: ['GitgDiffView', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GitgDiffViewOptions: ['GitgDiffViewOptions', 'GtkToolbar', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'GtkToolShell'],
    GitgEntryHistory: ['GitgEntryHistory', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GitgFontManager: ['GitgFontManager'],
    GitgGPGUtils: ['GitgGPGUtils'],
    GitgHook: ['GitgHook'],
    GitgLabelRenderer: ['GitgLabelRenderer'],
    GitgLane: ['GitgLane'],
    GitgLanes: ['GitgLanes'],
    GitgParsedRefName: ['GitgParsedRefName'],
    GitgPatchSet: ['GitgPatchSet'],
    GitgProgressBin: ['GitgProgressBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgRefBase: ['GitgRefBase', 'GgitNative', 'GitgRef'],
    GitgRemote: ['GitgRemote', 'GgitNative'],
    GitgRepository: ['GitgRepository', 'GgitRepository', 'GgitNative'],
    GitgRepositoryListBox: ['GitgRepositoryListBox', 'GtkListBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GitgRepositoryListBoxRow: ['GitgRepositoryListBoxRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    GitgResource: ['GitgResource'],
    GitgSidebar: ['GitgSidebar', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GitgSidebarStore: ['GitgSidebarStore', 'GtkTreeStore', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    GitgSidebarStoreSidebarHeader: ['GitgSidebarStoreSidebarHeader', 'GitgSidebarStoreSidebarText', 'GitgSidebarItem'],
    GitgSidebarStoreSidebarText: ['GitgSidebarStoreSidebarText', 'GitgSidebarItem'],
    GitgStage: ['GitgStage'],
    GitgStageStatusEnumerator: ['GitgStageStatusEnumerator'],
    GitgStageStatusFile: ['GitgStageStatusFile', 'GitgStageStatusItem'],
    GitgStageStatusSubmodule: ['GitgStageStatusSubmodule', 'GitgStageStatusItem'],
    GitgTextConv: ['GitgTextConv'],
    GitgTheme: ['GitgTheme', 'GtkWidget', 'GtkBuildable'],
    GitgUtils: ['GitgUtils'],
    GitgWhenMapped: ['GitgWhenMapped'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
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

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GitgAuthenticationLifeTime.forever': 2,
    'GitgAuthenticationLifeTime.forget': 0,
    'GitgAuthenticationLifeTime.session': 1,
    'GitgCommitModelColumns.author': 3,
    'GitgCommitModelColumns.author-date': 6,
    'GitgCommitModelColumns.author-email': 5,
    'GitgCommitModelColumns.author-name': 4,
    'GitgCommitModelColumns.commit': 11,
    'GitgCommitModelColumns.committer': 7,
    'GitgCommitModelColumns.committer-date': 10,
    'GitgCommitModelColumns.committer-email': 9,
    'GitgCommitModelColumns.committer-name': 8,
    'GitgCommitModelColumns.message': 2,
    'GitgCommitModelColumns.num': 12,
    'GitgCommitModelColumns.sha1': 0,
    'GitgCommitModelColumns.subject': 1,
    'GitgDeleteSources.cancel': 0,
    'GitgDeleteSources.delete': 2,
    'GitgDeleteSources.trash': 1,
    'GitgRefState.none': 0,
    'GitgRefState.prelight': 2,
    'GitgRefState.selected': 1,
    'GitgRefType.branch': 1,
    'GitgRefType.none': 0,
    'GitgRefType.remote': 2,
    'GitgRefType.stash': 4,
    'GitgRefType.tag': 3,
    'GitgRemoteState.connected': 2,
    'GitgRemoteState.connecting': 1,
    'GitgRemoteState.disconnected': 0,
    'GitgRemoteState.transferring': 3,
    'GitgSelectionMode.normal': 0,
    'GitgSelectionMode.selection': 1,
    'GitgSidebarColumn.hint': 0,
    'GitgSidebarColumn.item': 2,
    'GitgSidebarColumn.section': 1,
    'GitgSidebarHint.dummy': 3,
    'GitgSidebarHint.header': 1,
    'GitgSidebarHint.none': 0,
    'GitgSidebarHint.separator': 2,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {
    'GitgPatchSetType.add': 'a',
    'GitgPatchSetType.remove': 'r',
};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GgitSortMode.none': 0,
    'GgitSortMode.reverse': 4,
    'GgitSortMode.time': 2,
    'GgitSortMode.topological': 1,
    'GitgLaneTag.none': 0,
    'GitgStageCommitOptions.none': 0,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {
    'GitgLaneTag.end': '(null)',
    'GitgLaneTag.hidden': '(null)',
    'GitgLaneTag.sign-staged': '(null)',
    'GitgLaneTag.sign-stash': '(null)',
    'GitgLaneTag.sign-unstaged': '(null)',
    'GitgLaneTag.start': '(null)',
    'GitgStageCommitOptions.amend': '(null)',
    'GitgStageCommitOptions.sign-commit': '(null)',
    'GitgStageCommitOptions.sign-off': '(null)',
    'GitgStageCommitOptions.skip-hooks': '(null)',
};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GitgCommit.tag': 'GitgLaneTag',
    'GitgCommitModel.sort-mode': 'GgitSortMode',
    'GitgParsedRefName.rtype': 'GitgRefType',
    'GitgRef.state': 'GitgRefState',
    'GitgRemote.state': 'GitgRemoteState',
    'GitgRepositoryListBox.mode': 'GitgSelectionMode',
    'GitgRepositoryListBoxRow.mode': 'GitgSelectionMode',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {
    GitgDiffViewOptions: {
        'view': 'set_view',
    },
};

export const SINCE = {};
