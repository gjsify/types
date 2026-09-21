// The widget vocabulary of Ggit-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Ggit-1.0 — library 1.2.1 — prop(s) no TypeScript value satisfies: Ggit.Native.native
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ggit',
    version: '1.0',
    libraryVersion: '1.2.1',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Ggit.Native.native'],
    unresolvedProps: [],
    identifierPrefixes: ['Ggit'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GgitBlobOutputStream: ['repository'],
    GgitCheckoutOptions: ['ancestor-label', 'baseline', 'dir-mode', 'disable-filters', 'file-mode', 'file-open-flags', 'notify-flags', 'our-label', 'strategy', 'target-directory', 'their-label'],
    GgitCherryPickOptions: ['checkout-options', 'mainline', 'merge-options'],
    GgitCommitParents: ['commit'],
    GgitCredPlaintext: ['password', 'username'],
    GgitCredSshInteractive: ['username'],
    GgitCredSshKeyFromAgent: ['username'],
    GgitDiff: ['repository'],
    GgitDiffFindOptions: ['copy-threshold', 'flags', 'metric', 'rename-from-rewrite-threshold', 'rename-limit', 'rename-threshold'],
    GgitDiffFormatEmailOptions: ['author', 'body', 'flags', 'id', 'patch-number', 'summary', 'total-patches'],
    GgitDiffOptions: ['flags', 'n-context-lines', 'n-interhunk-lines', 'new-prefix', 'old-prefix', 'pathspec'],
    GgitIndex: ['file'],
    GgitNative: ['native'],
    GgitPushOptions: ['callbacks', 'parallelism'],
    GgitRepository: ['clone-options', 'init', 'is-bare', 'location', 'url', 'workdir'],
    GgitRevisionWalker: ['repository'],
    GgitSignature: ['encoding'],
    GgitSubmoduleUpdateOptions: ['checkout-options', 'fetch-options'],
};

export const OWN_SIGNALS = {
    GgitRemoteCallbacks: ['completion', 'progress', 'transfer-progress', 'update-tips'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GgitBlame: ['GgitBlame', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitBlob: ['GgitBlob', 'GgitObject', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitBlobOutputStream: ['GgitBlobOutputStream', 'GOutputStream', 'GObject'],
    GgitBranch: ['GgitBranch', 'GgitRef', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitCheckoutOptions: ['GgitCheckoutOptions', 'GObject'],
    GgitCherryPickOptions: ['GgitCherryPickOptions', 'GObject'],
    GgitCloneOptions: ['GgitCloneOptions', 'GObject'],
    GgitCommit: ['GgitCommit', 'GgitObject', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitCommitParents: ['GgitCommitParents', 'GObject'],
    GgitConfig: ['GgitConfig', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitCred: ['GgitCred', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitCredPlaintext: ['GgitCredPlaintext', 'GgitCred', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitCredSshInteractive: ['GgitCredSshInteractive', 'GgitCred', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitCredSshKeyFromAgent: ['GgitCredSshKeyFromAgent', 'GgitCred', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitDiff: ['GgitDiff', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitDiffFindOptions: ['GgitDiffFindOptions', 'GObject'],
    GgitDiffFormatEmailOptions: ['GgitDiffFormatEmailOptions', 'GObject'],
    GgitDiffOptions: ['GgitDiffOptions', 'GObject'],
    GgitIndex: ['GgitIndex', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitMailmap: ['GgitMailmap', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitObjectFactory: ['GgitObjectFactory', 'GObject'],
    GgitProxyOptions: ['GgitProxyOptions', 'GObject'],
    GgitPushOptions: ['GgitPushOptions', 'GObject'],
    GgitRebase: ['GgitRebase', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitRef: ['GgitRef', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitRemote: ['GgitRemote', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitRemoteCallbacks: ['GgitRemoteCallbacks', 'GObject'],
    GgitRepository: ['GgitRepository', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitRevisionWalker: ['GgitRevisionWalker', 'GgitNative', 'GgitObjectFactoryBase', 'GObject', 'GInitable'],
    GgitSignature: ['GgitSignature', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitSubmoduleUpdateOptions: ['GgitSubmoduleUpdateOptions', 'GObject'],
    GgitTag: ['GgitTag', 'GgitObject', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitTree: ['GgitTree', 'GgitObject', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
    GgitTreeBuilder: ['GgitTreeBuilder', 'GgitNative', 'GgitObjectFactoryBase', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GgitBranchType: ['local', 'remote'],
    GgitCloneLocal: ['auto', 'local', 'no-local', 'no-links'],
    GgitConfigLevel: ['programdata', 'system', 'xdg', 'global', 'local', 'worktree', 'app', 'highest'],
    GgitDeltaType: ['unmodified', 'added', 'deleted', 'modified', 'renamed', 'copied', 'ignored', 'untracked', 'typechange', 'unreadable', 'conflicted'],
    GgitDiffBinaryType: ['none', 'literal', 'delta'],
    GgitDiffFormatType: ['patch', 'patch-header', 'raw', 'name-only', 'name-status'],
    GgitDiffLineType: ['context', 'addition', 'deletion', 'context-eofnl', 'add-eofnl', 'del-eofnl', 'file-hdr', 'hunk-hdr', 'binary'],
    GgitDirection: ['fetch', 'push'],
    GgitFileMode: ['unreadable', 'tree', 'blob', 'blob-executable', 'link', 'commit'],
    GgitMergeFileFavor: ['normal', 'ours', 'theirs', 'union'],
    GgitPackbuilderStage: ['adding-objects', 'deltafication'],
    GgitProxyType: ['none', 'auto', 'specified'],
    GgitRebaseOperationType: ['pick', 'reword', 'edit', 'squash', 'fixup', 'exec'],
    GgitRefType: ['invalid', 'oid', 'symbolic', 'listall'],
    GgitRemoteCompletionType: ['download', 'indexing', 'error'],
    GgitRemoteDownloadTagsType: ['unspecified', 'auto', 'none', 'all'],
    GgitResetType: ['soft', 'mixed', 'hard'],
    GgitStatusShow: ['index-and-workdir', 'index-only', 'workdir-only'],
    GgitSubmoduleIgnore: ['unspecified', 'none', 'untracked', 'dirty', 'all'],
    GgitSubmoduleRecurse: ['no', 'yes', 'ondemand'],
    GgitSubmoduleUpdate: ['checkout', 'rebase', 'merge', 'none', 'default'],
    GgitTreeWalkMode: ['pre', 'post'],
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
    'GgitBranchType.local': 1,
    'GgitBranchType.remote': 2,
    'GgitCloneLocal.auto': 0,
    'GgitCloneLocal.local': 1,
    'GgitCloneLocal.no-links': 3,
    'GgitCloneLocal.no-local': 2,
    'GgitConfigLevel.app': 7,
    'GgitConfigLevel.global': 4,
    'GgitConfigLevel.highest': -1,
    'GgitConfigLevel.local': 5,
    'GgitConfigLevel.programdata': 1,
    'GgitConfigLevel.system': 2,
    'GgitConfigLevel.worktree': 6,
    'GgitConfigLevel.xdg': 3,
    'GgitDeltaType.added': 1,
    'GgitDeltaType.conflicted': 10,
    'GgitDeltaType.copied': 5,
    'GgitDeltaType.deleted': 2,
    'GgitDeltaType.ignored': 6,
    'GgitDeltaType.modified': 3,
    'GgitDeltaType.renamed': 4,
    'GgitDeltaType.typechange': 8,
    'GgitDeltaType.unmodified': 0,
    'GgitDeltaType.unreadable': 9,
    'GgitDeltaType.untracked': 7,
    'GgitDiffBinaryType.delta': 2,
    'GgitDiffBinaryType.literal': 1,
    'GgitDiffBinaryType.none': 0,
    'GgitDiffFormatType.name-only': 4,
    'GgitDiffFormatType.name-status': 5,
    'GgitDiffFormatType.patch': 1,
    'GgitDiffFormatType.patch-header': 2,
    'GgitDiffFormatType.raw': 3,
    'GgitDiffLineType.add-eofnl': 62,
    'GgitDiffLineType.addition': 43,
    'GgitDiffLineType.binary': 66,
    'GgitDiffLineType.context': 32,
    'GgitDiffLineType.context-eofnl': 61,
    'GgitDiffLineType.del-eofnl': 60,
    'GgitDiffLineType.deletion': 45,
    'GgitDiffLineType.file-hdr': 70,
    'GgitDiffLineType.hunk-hdr': 72,
    'GgitDirection.fetch': 0,
    'GgitDirection.push': 1,
    'GgitFileMode.blob': 33188,
    'GgitFileMode.blob-executable': 33261,
    'GgitFileMode.commit': 57344,
    'GgitFileMode.link': 40960,
    'GgitFileMode.tree': 16384,
    'GgitFileMode.unreadable': 0,
    'GgitMergeFileFavor.normal': 0,
    'GgitMergeFileFavor.ours': 1,
    'GgitMergeFileFavor.theirs': 2,
    'GgitMergeFileFavor.union': 3,
    'GgitPackbuilderStage.adding-objects': 0,
    'GgitPackbuilderStage.deltafication': 1,
    'GgitProxyType.auto': 1,
    'GgitProxyType.none': 0,
    'GgitProxyType.specified': 2,
    'GgitRebaseOperationType.edit': 2,
    'GgitRebaseOperationType.exec': 5,
    'GgitRebaseOperationType.fixup': 4,
    'GgitRebaseOperationType.pick': 0,
    'GgitRebaseOperationType.reword': 1,
    'GgitRebaseOperationType.squash': 3,
    'GgitRefType.invalid': 0,
    'GgitRefType.listall': 3,
    'GgitRefType.oid': 1,
    'GgitRefType.symbolic': 2,
    'GgitRemoteCompletionType.download': 0,
    'GgitRemoteCompletionType.error': 2,
    'GgitRemoteCompletionType.indexing': 1,
    'GgitRemoteDownloadTagsType.all': 3,
    'GgitRemoteDownloadTagsType.auto': 1,
    'GgitRemoteDownloadTagsType.none': 2,
    'GgitRemoteDownloadTagsType.unspecified': 0,
    'GgitResetType.hard': 3,
    'GgitResetType.mixed': 2,
    'GgitResetType.soft': 1,
    'GgitStatusShow.index-and-workdir': 0,
    'GgitStatusShow.index-only': 1,
    'GgitStatusShow.workdir-only': 2,
    'GgitSubmoduleIgnore.all': 4,
    'GgitSubmoduleIgnore.dirty': 3,
    'GgitSubmoduleIgnore.none': 1,
    'GgitSubmoduleIgnore.unspecified': -1,
    'GgitSubmoduleIgnore.untracked': 2,
    'GgitSubmoduleRecurse.no': 0,
    'GgitSubmoduleRecurse.ondemand': 2,
    'GgitSubmoduleRecurse.yes': 1,
    'GgitSubmoduleUpdate.checkout': 1,
    'GgitSubmoduleUpdate.default': 0,
    'GgitSubmoduleUpdate.merge': 3,
    'GgitSubmoduleUpdate.none': 4,
    'GgitSubmoduleUpdate.rebase': 2,
    'GgitTreeWalkMode.post': 1,
    'GgitTreeWalkMode.pre': 0,
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
export const ENUM_VALUES_UNREADABLE = {};

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
    'GgitAttributeCheckFlags.file-then-index': 0,
    'GgitAttributeCheckFlags.index-only': 2,
    'GgitAttributeCheckFlags.index-then-file': 1,
    'GgitAttributeCheckFlags.no-system': 4,
    'GgitBlameFlags.normal': 0,
    'GgitBlameFlags.track-copies-same-file': 1,
    'GgitCheckoutNotifyFlags.all': 65535,
    'GgitCheckoutNotifyFlags.conflict': 1,
    'GgitCheckoutNotifyFlags.dirty': 2,
    'GgitCheckoutNotifyFlags.ignored': 16,
    'GgitCheckoutNotifyFlags.none': 0,
    'GgitCheckoutNotifyFlags.untracked': 8,
    'GgitCheckoutNotifyFlags.updated': 4,
    'GgitCheckoutStrategy.allow-conflicts': 16,
    'GgitCheckoutStrategy.conflict-style-diff3': 2097152,
    'GgitCheckoutStrategy.conflict-style-merge': 1048576,
    'GgitCheckoutStrategy.conflict-style-zdiff3': 33554432,
    'GgitCheckoutStrategy.disable-pathspec-match': 8192,
    'GgitCheckoutStrategy.dont-overwrite-ignored': 524288,
    'GgitCheckoutStrategy.dont-remove-existing': 4194304,
    'GgitCheckoutStrategy.dont-update-index': 256,
    'GgitCheckoutStrategy.dont-write-index': 8388608,
    'GgitCheckoutStrategy.dry-run': 16777216,
    'GgitCheckoutStrategy.force': 2,
    'GgitCheckoutStrategy.no-refresh': 512,
    'GgitCheckoutStrategy.none': 1073741824,
    'GgitCheckoutStrategy.recreate-missing': 4,
    'GgitCheckoutStrategy.remove-ignored': 64,
    'GgitCheckoutStrategy.remove-untracked': 32,
    'GgitCheckoutStrategy.safe': 0,
    'GgitCheckoutStrategy.skip-locked-directories': 262144,
    'GgitCheckoutStrategy.skip-unmerged': 1024,
    'GgitCheckoutStrategy.update-only': 128,
    'GgitCheckoutStrategy.update-submodules': 65536,
    'GgitCheckoutStrategy.update-submodules-if-changed': 131072,
    'GgitCheckoutStrategy.use-ours': 2048,
    'GgitCheckoutStrategy.use-theirs': 4096,
    'GgitCreateFlags.force': 1,
    'GgitCreateFlags.none': 0,
    'GgitCredtype.default': 8,
    'GgitCredtype.ssh-custom': 4,
    'GgitCredtype.ssh-interactive': 16,
    'GgitCredtype.ssh-key': 2,
    'GgitCredtype.userpass-plaintext': 1,
    'GgitDiffFindFlags.break-rewrites': 32,
    'GgitDiffFindFlags.break-rewrites-for-renames-only': 32768,
    'GgitDiffFindFlags.find-all': 255,
    'GgitDiffFindFlags.find-and-break-rewrites': 48,
    'GgitDiffFindFlags.find-by-config': 0,
    'GgitDiffFindFlags.find-copies': 4,
    'GgitDiffFindFlags.find-copies-from-unmodified': 8,
    'GgitDiffFindFlags.find-dont-ignore-whitespace': 8192,
    'GgitDiffFindFlags.find-exact-match-only': 16384,
    'GgitDiffFindFlags.find-for-untracked': 64,
    'GgitDiffFindFlags.find-ignore-leading-whitespace': 0,
    'GgitDiffFindFlags.find-ignore-whitespace': 4096,
    'GgitDiffFindFlags.find-remove-unmodified': 65536,
    'GgitDiffFindFlags.find-renames': 1,
    'GgitDiffFindFlags.find-renames-from-rewrites': 2,
    'GgitDiffFindFlags.find-rewrites': 16,
    'GgitDiffFlag.binary': 1,
    'GgitDiffFlag.not-binary': 2,
    'GgitDiffFlag.valid-id': 4,
    'GgitDiffFormatEmailFlags.exclude-subject-patch-marker': 1,
    'GgitDiffFormatEmailFlags.none': 0,
    'GgitDiffOption.disable-pathspec-match': 4096,
    'GgitDiffOption.enable-fast-untracked-dirs': 16384,
    'GgitDiffOption.force-binary': 2097152,
    'GgitDiffOption.force-text': 1048576,
    'GgitDiffOption.ignore-case': 1024,
    'GgitDiffOption.ignore-file-mode': 256,
    'GgitDiffOption.ignore-submodules': 512,
    'GgitDiffOption.ignore-whitespace': 4194304,
    'GgitDiffOption.ignore-whitespace-change': 8388608,
    'GgitDiffOption.ignore-whitespace-eol': 16777216,
    'GgitDiffOption.include-ignored': 2,
    'GgitDiffOption.include-typechange': 64,
    'GgitDiffOption.include-typechange-trees': 128,
    'GgitDiffOption.include-unmodified': 32,
    'GgitDiffOption.include-untracked': 8,
    'GgitDiffOption.minimal': 536870912,
    'GgitDiffOption.normal': 0,
    'GgitDiffOption.patience': 268435456,
    'GgitDiffOption.recurse-ignored-dirs': 4,
    'GgitDiffOption.recurse-untracked-dirs': 16,
    'GgitDiffOption.reverse': 1,
    'GgitDiffOption.show-binary': 1073741824,
    'GgitDiffOption.show-unmodified': 67108864,
    'GgitDiffOption.show-untracked-content': 33554432,
    'GgitDiffOption.skip-binary-check': 8192,
    'GgitFeatureFlags.https': 2,
    'GgitFeatureFlags.ssh': 4,
    'GgitFeatureFlags.threads': 1,
    'GgitMergeFileFlags.default': 0,
    'GgitMergeFileFlags.diff-minimal': 128,
    'GgitMergeFileFlags.diff-patience': 64,
    'GgitMergeFileFlags.ignore-whitespace': 8,
    'GgitMergeFileFlags.ignore-whitespace-change': 16,
    'GgitMergeFileFlags.ignore-whitespace-eol': 32,
    'GgitMergeFileFlags.simplify-alnum': 4,
    'GgitMergeFileFlags.style-diff3': 2,
    'GgitMergeFileFlags.style-merge': 1,
    'GgitMergeFlags.fail-on-conflict': 2,
    'GgitMergeFlags.find-renames': 1,
    'GgitMergeFlags.no-recursive': 8,
    'GgitMergeFlags.skip-reuc': 4,
    'GgitSortMode.none': 0,
    'GgitSortMode.reverse': 4,
    'GgitSortMode.time': 2,
    'GgitSortMode.topological': 1,
    'GgitStashFlags.default': 0,
    'GgitStashFlags.include-ignored': 4,
    'GgitStashFlags.include-untracked': 2,
    'GgitStashFlags.keep-index': 1,
    'GgitStatusFlags.conflicted': 32768,
    'GgitStatusFlags.current': 0,
    'GgitStatusFlags.ignored': 16384,
    'GgitStatusFlags.index-deleted': 4,
    'GgitStatusFlags.index-modified': 2,
    'GgitStatusFlags.index-new': 1,
    'GgitStatusFlags.index-renamed': 8,
    'GgitStatusFlags.index-typechange': 16,
    'GgitStatusFlags.working-tree-deleted': 512,
    'GgitStatusFlags.working-tree-modified': 256,
    'GgitStatusFlags.working-tree-new': 128,
    'GgitStatusFlags.working-tree-renamed': 2048,
    'GgitStatusFlags.working-tree-typechange': 1024,
    'GgitStatusFlags.working-tree-unreadable': 4096,
    'GgitStatusOption.default': 19,
    'GgitStatusOption.disable-pathspec-match': 32,
    'GgitStatusOption.exclude-submodules': 8,
    'GgitStatusOption.include-ignored': 2,
    'GgitStatusOption.include-unmodified': 4,
    'GgitStatusOption.include-untracked': 1,
    'GgitStatusOption.recurse-ignored-dirs': 64,
    'GgitStatusOption.recurse-untracked-dirs': 16,
    'GgitStatusOption.renames-head-to-index': 128,
    'GgitStatusOption.renames-index-to-workdir': 256,
    'GgitStatusOption.sort-case-insensitively': 1024,
    'GgitStatusOption.sort-case-sensitively': 512,
    'GgitSubmoduleStatus.in-config': 4,
    'GgitSubmoduleStatus.in-head': 1,
    'GgitSubmoduleStatus.in-index': 2,
    'GgitSubmoduleStatus.in-wd': 8,
    'GgitSubmoduleStatus.index-added': 16,
    'GgitSubmoduleStatus.index-deleted': 32,
    'GgitSubmoduleStatus.index-modified': 64,
    'GgitSubmoduleStatus.wd-added': 256,
    'GgitSubmoduleStatus.wd-deleted': 512,
    'GgitSubmoduleStatus.wd-index-modified': 2048,
    'GgitSubmoduleStatus.wd-modified': 1024,
    'GgitSubmoduleStatus.wd-uninitialized': 128,
    'GgitSubmoduleStatus.wd-untracked': 8192,
    'GgitSubmoduleStatus.wd-wd-modified': 4096,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

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
    'GgitCheckoutOptions.notify-flags': 'GgitCheckoutNotifyFlags',
    'GgitCheckoutOptions.strategy': 'GgitCheckoutStrategy',
    'GgitDiffFindOptions.flags': 'GgitDiffFindFlags',
    'GgitDiffFormatEmailOptions.flags': 'GgitDiffFormatEmailFlags',
    'GgitDiffOptions.flags': 'GgitDiffOption',
};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'GgitBlobOutputStream.repository': 'GgitRepository',
    'GgitCheckoutOptions.ancestor-label': 'gchararray',
    'GgitCheckoutOptions.baseline': 'GgitTree',
    'GgitCheckoutOptions.dir-mode': 'guint',
    'GgitCheckoutOptions.disable-filters': 'gboolean',
    'GgitCheckoutOptions.file-mode': 'guint',
    'GgitCheckoutOptions.file-open-flags': 'gint',
    'GgitCheckoutOptions.notify-flags': 'GgitCheckoutNotifyFlags',
    'GgitCheckoutOptions.our-label': 'gchararray',
    'GgitCheckoutOptions.strategy': 'GgitCheckoutStrategy',
    'GgitCheckoutOptions.target-directory': 'gchararray',
    'GgitCheckoutOptions.their-label': 'gchararray',
    'GgitCherryPickOptions.checkout-options': 'GgitCheckoutOptions',
    'GgitCherryPickOptions.mainline': 'guint',
    'GgitCommitParents.commit': 'GgitCommit',
    'GgitCredPlaintext.password': 'gchararray',
    'GgitCredPlaintext.username': 'gchararray',
    'GgitCredSshInteractive.username': 'gchararray',
    'GgitCredSshKeyFromAgent.username': 'gchararray',
    'GgitDiff.repository': 'GgitRepository',
    'GgitDiffFindOptions.copy-threshold': 'guint',
    'GgitDiffFindOptions.flags': 'GgitDiffFindFlags',
    'GgitDiffFindOptions.rename-from-rewrite-threshold': 'guint',
    'GgitDiffFindOptions.rename-limit': 'guint',
    'GgitDiffFindOptions.rename-threshold': 'guint',
    'GgitDiffFormatEmailOptions.author': 'GgitSignature',
    'GgitDiffFormatEmailOptions.body': 'gchararray',
    'GgitDiffFormatEmailOptions.flags': 'GgitDiffFormatEmailFlags',
    'GgitDiffFormatEmailOptions.patch-number': 'guint64',
    'GgitDiffFormatEmailOptions.summary': 'gchararray',
    'GgitDiffFormatEmailOptions.total-patches': 'guint64',
    'GgitDiffOptions.flags': 'GgitDiffOption',
    'GgitDiffOptions.n-context-lines': 'gint',
    'GgitDiffOptions.n-interhunk-lines': 'gint',
    'GgitDiffOptions.new-prefix': 'gchararray',
    'GgitDiffOptions.old-prefix': 'gchararray',
    'GgitIndex.file': 'GFile',
    'GgitNative.native': 'gpointer',
    'GgitPushOptions.callbacks': 'GgitRemoteCallbacks',
    'GgitPushOptions.parallelism': 'gint',
    'GgitRepository.clone-options': 'GgitCloneOptions',
    'GgitRepository.init': 'gboolean',
    'GgitRepository.is-bare': 'gboolean',
    'GgitRepository.location': 'GFile',
    'GgitRepository.url': 'gchararray',
    'GgitRepository.workdir': 'GFile',
    'GgitRevisionWalker.repository': 'GgitRepository',
    'GgitSignature.encoding': 'gchararray',
    'GgitSubmoduleUpdateOptions.checkout-options': 'GgitCheckoutOptions',
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

export const SLOT_CANDIDATES = {};

export const SINCE = {};
