/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Ggit {
    /**
     * Ggit-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace BranchType {
        export const $gtype: GObject.GType<BranchType>;
    }

    /**
     * The type of a branch.
     * @gir-type Enum
     */
    enum BranchType {
        /**
         * specifies a local branch.
         */
        LOCAL,
        /**
         * specifies a remote branch.
         */
        REMOTE,
    }

    /**
     * @gir-type Enum
     */
    export namespace CloneLocal {
        export const $gtype: GObject.GType<CloneLocal>;
    }

    /**
     * @gir-type Enum
     */
    enum CloneLocal {
        AUTO,
        LOCAL,
        NO_LOCAL,
        NO_LINKS,
    }

    /**
     * @gir-type Enum
     */
    export namespace ConfigLevel {
        export const $gtype: GObject.GType<ConfigLevel>;
    }

    /**
     * Priority level of a config file.
     * These priority levels correspond to the natural escalation logic
     * (from higher to lower) when searching for config entries in git.git.
     * @gir-type Enum
     */
    enum ConfigLevel {
        /**
         * System-wide on Windows, for compatibility with portable git.
         */
        PROGRAMDATA,
        /**
         * System-wide configuration file.
         */
        SYSTEM,
        /**
         * XDG compatible configuration file (.config/git/config).
         */
        XDG,
        /**
         * User-specific configuration file, also called Global configuration file.
         */
        GLOBAL,
        /**
         * Repository specific configuration file.
         */
        LOCAL,
        WORKTREE,
        /**
         * Application specific configuration file; freely defined by applications.
         */
        APP,
        /**
         * Represents the highest level of a config file.
         */
        HIGHEST,
    }

    /**
     * @gir-type Enum
     */
    export namespace DeltaType {
        export const $gtype: GObject.GType<DeltaType>;
    }

    /**
     * Describes the type of change the delta is.
     * @gir-type Enum
     */
    enum DeltaType {
        /**
         * unmodified.
         */
        UNMODIFIED,
        /**
         * added.
         */
        ADDED,
        /**
         * deleted.
         */
        DELETED,
        /**
         * modified.
         */
        MODIFIED,
        /**
         * renamed.
         */
        RENAMED,
        /**
         * copied.
         */
        COPIED,
        /**
         * ignored.
         */
        IGNORED,
        /**
         * untracked.
         */
        UNTRACKED,
        TYPECHANGE,
        UNREADABLE,
        CONFLICTED,
    }

    /**
     * @gir-type Enum
     */
    export namespace DiffBinaryType {
        export const $gtype: GObject.GType<DiffBinaryType>;
    }

    /**
     * When producing a binary diff, the binary data returned will be
     * either the deflated full ("literal") contents of the file, or
     * the deflated binary delta between the two sides (whichever is
     * smaller).
     * @gir-type Enum
     */
    enum DiffBinaryType {
        NONE,
        LITERAL,
        DELTA,
    }

    /**
     * @gir-type Enum
     */
    export namespace DiffFormatType {
        export const $gtype: GObject.GType<DiffFormatType>;
    }

    /**
     * Possible output formats for diff data.
     * @gir-type Enum
     */
    enum DiffFormatType {
        /**
         * full git diff.
         */
        PATCH,
        /**
         * just the file headers of patch.
         */
        PATCH_HEADER,
        /**
         * like git diff --raw.
         */
        RAW,
        /**
         * like git diff --name-only.
         */
        NAME_ONLY,
        /**
         * like git diff --name-status.
         */
        NAME_STATUS,
    }

    /**
     * @gir-type Enum
     */
    export namespace DiffLineType {
        export const $gtype: GObject.GType<DiffLineType>;
    }

    /**
     * These values describe where a line came from and will be passed to
     * the {@link Ggit.DiffLineCallback} when iterating over a diff.
     *
     * The #GGIT_DIFF_LINE_FILE_HDR, #GGIT_DIFF_LINE_HUNK_HDR and
     * #GGIT_DIFF_LINE_BINARY values are only sent when the diff is being printed.
     * @gir-type Enum
     */
    enum DiffLineType {
        /**
         * line is part of the context.
         */
        CONTEXT,
        /**
         * line that was added.
         */
        ADDITION,
        /**
         * line that was removed.
         */
        DELETION,
        /**
         * Both files have no LF at end.
         */
        CONTEXT_EOFNL,
        /**
         * LF was added at end of file.
         */
        ADD_EOFNL,
        /**
         * LF was removed at end of file.
         */
        DEL_EOFNL,
        /**
         * the file header.
         */
        FILE_HDR,
        /**
         * the hunk header.
         */
        HUNK_HDR,
        /**
         * is binary.
         */
        BINARY,
    }

    /**
     * @gir-type Enum
     */
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

    /**
     * @gir-type Enum
     */
    enum Direction {
        FETCH,
        PUSH,
    }

    /**
     * Error codes for the `GGIT_ERROR` error domain.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * A generic error for when an operation fails.
         */
        static GIT_ERROR: number;
        /**
         * Input does not exist in the scope searched.
         */
        static NOTFOUND: number;
        /**
         * A reference with this name already exists.
         */
        static EXISTS: number;
        /**
         * The given error is ambiguous.
         */
        static AMBIGUOUS: number;
        /**
         * The buffer is too short.
         */
        static BUFS: number;
        /**
         * Skip and passthrough the given ODB backend.
         */
        static PASSTHROUGH: number;
        /**
         * The iteration has finished.
         */
        static ITEROVER: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Error domain for Ggit functions.
         * Errors in this domain will be from the GgitError enumeration.
         * See {@link GLib.Error} for information on error domains.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace FileMode {
        export const $gtype: GObject.GType<FileMode>;
    }

    /**
     * @gir-type Enum
     */
    enum FileMode {
        UNREADABLE,
        TREE,
        BLOB,
        BLOB_EXECUTABLE,
        LINK,
        COMMIT,
    }

    /**
     * @gir-type Enum
     */
    export namespace MergeFileFavor {
        export const $gtype: GObject.GType<MergeFileFavor>;
    }

    /**
     * @gir-type Enum
     */
    enum MergeFileFavor {
        NORMAL,
        OURS,
        THEIRS,
        UNION,
    }

    /**
     * @gir-type Enum
     */
    export namespace PackbuilderStage {
        export const $gtype: GObject.GType<PackbuilderStage>;
    }

    /**
     * Valid stages for pack building.
     * @gir-type Enum
     */
    enum PackbuilderStage {
        /**
         * adding objects.
         */
        ADDING_OBJECTS,
        /**
         * deltafication.
         */
        DELTAFICATION,
    }

    /**
     * @gir-type Enum
     */
    export namespace ProxyType {
        export const $gtype: GObject.GType<ProxyType>;
    }

    /**
     * The type of proxy to use.
     * @gir-type Enum
     */
    enum ProxyType {
        /**
         * Do not attempt to connect through a proxy.
         */
        NONE,
        /**
         * Try to auto-detect the proxy from the git configuration.
         */
        AUTO,
        /**
         * Connect via the URL given in the options.
         */
        SPECIFIED,
    }

    /**
     * @gir-type Enum
     */
    export namespace RebaseOperationType {
        export const $gtype: GObject.GType<RebaseOperationType>;
    }

    /**
     * Type of rebase operation in-progress.
     * @gir-type Enum
     */
    enum RebaseOperationType {
        /**
         * The given commit is to be cherry-picked.
         * The client should commit the changes and continue if there are no conflicts.
         */
        PICK,
        /**
         * The given commit is to be cherry-picked,
         * but the client should prompt the user to provide an updated commit message.
         */
        REWORD,
        /**
         * The given commit is to be cherry-picked,
         * but the client should stop to allow the user to edit the changes before
         * committing them.
         */
        EDIT,
        /**
         * The given commit is to be squashed into
         * the previous commit. The commit message will be merged with the previous message.
         */
        SQUASH,
        /**
         * The given commit is to be squashed into the
         * previous commit. The commit message from this commit will be discarded.
         */
        FIXUP,
        /**
         * No commit will be cherry-picked.
         * The client should run the given command and (if successful) continue.
         */
        EXEC,
    }

    /**
     * @gir-type Enum
     */
    export namespace RefType {
        export const $gtype: GObject.GType<RefType>;
    }

    /**
     * Describes the type a reference is.
     * @gir-type Enum
     */
    enum RefType {
        /**
         * An invalid reference.
         */
        INVALID,
        /**
         * A reference which points at an object id.
         */
        OID,
        /**
         * A reference which points at another reference.
         */
        SYMBOLIC,
        /**
         * All reference types.
         */
        LISTALL,
    }

    /**
     * @gir-type Enum
     */
    export namespace RemoteCompletionType {
        export const $gtype: GObject.GType<RemoteCompletionType>;
    }

    /**
     * Argument to the completion callback which tells it which operation finished.
     * @gir-type Enum
     */
    enum RemoteCompletionType {
        /**
         * download.
         */
        DOWNLOAD,
        /**
         * indexing.
         */
        INDEXING,
        /**
         * error.
         */
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    export namespace RemoteDownloadTagsType {
        export const $gtype: GObject.GType<RemoteDownloadTagsType>;
    }

    /**
     * Automatic tag following option
     *
     * Lets us select the --tags option to use.
     * @gir-type Enum
     */
    enum RemoteDownloadTagsType {
        /**
         * Use the setting from the configuration.
         */
        UNSPECIFIED,
        /**
         * Ask the server for tags pointing to objects we're already
         * downloading.
         */
        AUTO,
        /**
         * Don't ask for any tags beyond the refspecs.
         */
        NONE,
        /**
         * Ask for the all the tags.
         */
        ALL,
    }

    /**
     * @gir-type Enum
     */
    export namespace ResetType {
        export const $gtype: GObject.GType<ResetType>;
    }

    /**
     * Describes the type of reset to perform.
     * @gir-type Enum
     */
    enum ResetType {
        /**
         * The head will be moved to the commit.
         */
        SOFT,
        /**
         * the head will be moved to the commit and the index
         *                    will be replaced with the content of the commit tree.
         */
        MIXED,
        /**
         * MIXED plus changes in working tree discarded.
         */
        HARD,
    }

    /**
     * @gir-type Enum
     */
    export namespace StatusShow {
        export const $gtype: GObject.GType<StatusShow>;
    }

    /**
     * Show options for `ggit_repository_file_status_foreach`. Determines which
     * files are included in the status.
     * @gir-type Enum
     */
    enum StatusShow {
        /**
         * receive one callback for each file,
         * even if the file is in both the index and the workdir (combining {@link Ggit.StatusFlags}).
         */
        INDEX_AND_WORKDIR,
        /**
         * only receive callbacks for files in the index.
         */
        INDEX_ONLY,
        /**
         * only receive callbacks for files in the workdir.
         */
        WORKDIR_ONLY,
    }

    /**
     * @gir-type Enum
     */
    export namespace SubmoduleIgnore {
        export const $gtype: GObject.GType<SubmoduleIgnore>;
    }

    /**
     * Describes which submodules should be ignored.
     * @gir-type Enum
     */
    enum SubmoduleIgnore {
        /**
         * reset to on-disk value.
         */
        UNSPECIFIED,
        /**
         * don't ignore any change.
         */
        NONE,
        /**
         * ignore untracked files.
         */
        UNTRACKED,
        /**
         * ignore changes in the working directory.
         */
        DIRTY,
        /**
         * never check if the submodule is dirty.
         */
        ALL,
    }

    /**
     * @gir-type Enum
     */
    export namespace SubmoduleRecurse {
        export const $gtype: GObject.GType<SubmoduleRecurse>;
    }

    /**
     * Options for submodule recurse.
     * Represents the value of `submodule.$name.fetchRecurseSubmodules`
     * @gir-type Enum
     */
    enum SubmoduleRecurse {
        /**
         * do no recurse into submodules.
         */
        NO,
        /**
         * recurse into submodules.
         */
        YES,
        /**
         * recurse into submodules only when
         * commit not already in local clone.
         */
        ONDEMAND,
    }

    /**
     * @gir-type Enum
     */
    export namespace SubmoduleUpdate {
        export const $gtype: GObject.GType<SubmoduleUpdate>;
    }

    /**
     * Describes how a submodule should be updated.
     * @gir-type Enum
     */
    enum SubmoduleUpdate {
        /**
         * checkout the submodule.
         */
        CHECKOUT,
        /**
         * rebase the current branch onto the
         *                                commit recorded in the superproject.
         */
        REBASE,
        /**
         * merge the commit recorded in the
         *                               superproject into the current branch.
         */
        MERGE,
        /**
         * do not update this submodule.
         */
        NONE,
        /**
         * not used except as static initializer
         * when we don't want any particular update rule to be specified.
         */
        DEFAULT,
    }

    /**
     * @gir-type Enum
     */
    export namespace TreeWalkMode {
        export const $gtype: GObject.GType<TreeWalkMode>;
    }

    /**
     * Describes in which order a tree walk should be performed.
     * @gir-type Enum
     */
    enum TreeWalkMode {
        /**
         * walk tree in pre-order
         */
        PRE,
        /**
         * walk tree in post-order
         */
        POST,
    }

    /**
     * The build type of the installed build.
     */
    const BUILD_TYPE: string;
    /**
     * libgit2-glib major version component (e.g. 1 if `GGIT_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * libgit2-glib micro version component (e.g. 3 if `GGIT_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * libgit2-glib minor version component (e.g. 2 if `GGIT_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * libgit2-glib version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * Error domain for Ggit functions.
     * Errors in this domain will be from the GgitError enumeration.
     * See {@link GLib.Error} for information on error domains.
     */
    function error_quark(): GLib.Quark;
    /**
     * Gets the features of the library.
     * @returns a {@link Ggit.FeatureFlags}.
     */
    function get_features(): FeatureFlags;
    /**
     * Call this function before using any other libgit2-glib function.
     */
    function init(): void;
    /**
     * Prettify a commit message by removing excess whitespace and making sure the
     * last line ends with a newline. If `strip_comments` is `true`, then lines
     * starting with a `comment_char` will be removed.
     * @param message the message.
     * @param strip_comments whether to strip comments.
     * @param comment_char comment character.
     * @returns the prettified message.
     */
    function message_prettify(message: string, strip_comments: boolean, comment_char: number): string;
    /**
     * @gir-type Callback
     */
    interface ConfigCallback {
        (entry: ConfigEntry): number;
    }
    /**
     * @gir-type Callback
     */
    interface ConfigMatchCallback {
        (match_info: GLib.MatchInfo, value: string): number;
    }
    /**
     * @gir-type Callback
     */
    interface CredAcquireCallback {
        (url: string, username_from_url: string | null, allowed_types: number, cred: Cred): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffBinaryCallback {
        (delta: DiffDelta, binary: DiffBinary): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffFileCallback {
        (delta: DiffDelta, progress: number): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffHunkCallback {
        (delta: DiffDelta, hunk: DiffHunk): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffLineCallback {
        (delta: DiffDelta, hunk: DiffHunk | null, line: DiffLine): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffSimilarityMetricBufferSignatureCallback {
        (file: DiffFile, buf: string, buflen: number, out?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffSimilarityMetricFileSignatureCallback {
        (file: DiffFile, fullpath: string, out?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface DiffSimilarityMetricFreeSignatureCallback {
        (signature?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface DiffSimilarityMetricSimilarityCallback {
        (score: number, signature_a?: any | null, signature_b?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface NoteCallback {
        (blob_id: OId, annotated_object_id: OId): number;
    }
    /**
     * @gir-type Callback
     */
    interface ReferencesCallback {
        (reference: Ref): number;
    }
    /**
     * @gir-type Callback
     */
    interface ReferencesNameCallback {
        (name: string): number;
    }
    /**
     * @gir-type Callback
     */
    interface RemoteListCallback {
        (name: string, oid: OId, loid: OId, local: boolean): number;
    }
    /**
     * @gir-type Callback
     */
    interface StashCallback {
        (index: number, message: string, stash_oid: OId): number;
    }
    /**
     * @gir-type Callback
     */
    interface StatusCallback {
        (path: string, status_flags: StatusFlags): number;
    }
    /**
     * @gir-type Callback
     */
    interface SubmoduleCallback {
        (submodule: Submodule, name: string): number;
    }
    /**
     * @gir-type Callback
     */
    interface TagCallback {
        (name: string, tag_oid: OId): number;
    }
    /**
     * @gir-type Callback
     */
    interface TransferProgressCallback {
        (stats: TransferProgress): number;
    }
    /**
     * @gir-type Callback
     */
    interface TreeWalkCallback {
        (root: string, entry: TreeEntry): number;
    }
    /**
     * @gir-type Flags
     */
    export namespace AttributeCheckFlags {
        export const $gtype: GObject.GType<AttributeCheckFlags>;
    }

    /**
     * Attribute check flags indicate the order in which to check for gitattributes.
     * git core uses `GGIT_ATTRIBUTE_CHECK_FILE_THEN_INDEX` for all operations,
     * except on checkout, where it uses `GGIT_ATTRIBUTE_CHECK_INDEX_THEN_FILE`.
     * @gir-type Flags
     */
    enum AttributeCheckFlags {
        /**
         * check working directory, then index.
         */
        FILE_THEN_INDEX,
        /**
         * check index, then working directory.
         */
        INDEX_THEN_FILE,
        /**
         * check only index.
         */
        INDEX_ONLY,
        /**
         * ignore system wide attributes.
         */
        NO_SYSTEM,
    }

    /**
     * @gir-type Flags
     */
    export namespace BlameFlags {
        export const $gtype: GObject.GType<BlameFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum BlameFlags {
        /**
         * Normal blame, the default.
         */
        NORMAL,
        /**
         * Track lines that have moved within a file
         *                                     (like git blame -M)
         */
        TRACK_COPIES_SAME_FILE,
    }

    /**
     * @gir-type Flags
     */
    export namespace CheckoutNotifyFlags {
        export const $gtype: GObject.GType<CheckoutNotifyFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum CheckoutNotifyFlags {
        NONE,
        CONFLICT,
        DIRTY,
        UPDATED,
        UNTRACKED,
        IGNORED,
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace CheckoutStrategy {
        export const $gtype: GObject.GType<CheckoutStrategy>;
    }

    /**
     * @gir-type Flags
     */
    enum CheckoutStrategy {
        SAFE,
        FORCE,
        RECREATE_MISSING,
        ALLOW_CONFLICTS,
        REMOVE_UNTRACKED,
        REMOVE_IGNORED,
        UPDATE_ONLY,
        DONT_UPDATE_INDEX,
        NO_REFRESH,
        SKIP_UNMERGED,
        USE_OURS,
        USE_THEIRS,
        DISABLE_PATHSPEC_MATCH,
        SKIP_LOCKED_DIRECTORIES,
        DONT_OVERWRITE_IGNORED,
        CONFLICT_STYLE_MERGE,
        CONFLICT_STYLE_DIFF3,
        DONT_REMOVE_EXISTING,
        DONT_WRITE_INDEX,
        DRY_RUN,
        CONFLICT_STYLE_ZDIFF3,
        NONE,
        UPDATE_SUBMODULES,
        UPDATE_SUBMODULES_IF_CHANGED,
    }

    /**
     * @gir-type Flags
     */
    export namespace CreateFlags {
        export const $gtype: GObject.GType<CreateFlags>;
    }

    /**
     * Describes how something should be created.
     * @gir-type Flags
     */
    enum CreateFlags {
        /**
         * attempt to create.
         */
        NONE,
        /**
         * force creation.
         */
        FORCE,
    }

    /**
     * @gir-type Flags
     */
    export namespace Credtype {
        export const $gtype: GObject.GType<Credtype>;
    }

    /**
     * @gir-type Flags
     */
    enum Credtype {
        USERPASS_PLAINTEXT,
        SSH_KEY,
        SSH_CUSTOM,
        DEFAULT,
        SSH_INTERACTIVE,
    }

    /**
     * @gir-type Flags
     */
    export namespace DiffFindFlags {
        export const $gtype: GObject.GType<DiffFindFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DiffFindFlags {
        FIND_BY_CONFIG,
        FIND_RENAMES,
        FIND_RENAMES_FROM_REWRITES,
        FIND_COPIES,
        FIND_COPIES_FROM_UNMODIFIED,
        FIND_REWRITES,
        BREAK_REWRITES,
        FIND_AND_BREAK_REWRITES,
        FIND_FOR_UNTRACKED,
        FIND_ALL,
        FIND_IGNORE_LEADING_WHITESPACE,
        FIND_IGNORE_WHITESPACE,
        FIND_DONT_IGNORE_WHITESPACE,
        FIND_EXACT_MATCH_ONLY,
        BREAK_REWRITES_FOR_RENAMES_ONLY,
        FIND_REMOVE_UNMODIFIED,
    }

    /**
     * @gir-type Flags
     */
    export namespace DiffFlag {
        export const $gtype: GObject.GType<DiffFlag>;
    }

    /**
     * Describes the diff file and/or delta flags
     * @gir-type Flags
     */
    enum DiffFlag {
        /**
         * if the file is binary.
         */
        BINARY,
        /**
         * if the file is not binary.
         */
        NOT_BINARY,
        /**
         * if the ID is valid.
         */
        VALID_ID,
    }

    /**
     * @gir-type Flags
     */
    export namespace DiffFormatEmailFlags {
        export const $gtype: GObject.GType<DiffFormatEmailFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DiffFormatEmailFlags {
        NONE,
        EXCLUDE_SUBJECT_PATCH_MARKER,
    }

    /**
     * @gir-type Flags
     */
    export namespace DiffOption {
        export const $gtype: GObject.GType<DiffOption>;
    }

    /**
     * How the diff should be generated.
     * @gir-type Flags
     */
    enum DiffOption {
        /**
         * normal.
         */
        NORMAL,
        /**
         * reverse the sides of the diff.
         */
        REVERSE,
        /**
         * include ignored files.
         */
        INCLUDE_IGNORED,
        /**
         * also add all files under ignored dirs.
         */
        RECURSE_IGNORED_DIRS,
        /**
         * include untracked files.
         */
        INCLUDE_UNTRACKED,
        /**
         * recurse to untracked directories.
         */
        RECURSE_UNTRACKED_DIRS,
        /**
         * include unmodified files.
         */
        INCLUDE_UNMODIFIED,
        /**
         * enable generation of typechange detal records.
         */
        INCLUDE_TYPECHANGE,
        /**
         * try to label tree transitions as type changes.
         */
        INCLUDE_TYPECHANGE_TREES,
        /**
         * ignore file mode changes.
         */
        IGNORE_FILE_MODE,
        /**
         * ignore submodules.
         */
        IGNORE_SUBMODULES,
        /**
         * use case insensitive filename comparison.
         */
        IGNORE_CASE,
        /**
         * use exact path matching.
         */
        DISABLE_PATHSPEC_MATCH,
        /**
         * disable updating the binary flag in delta records.
         */
        SKIP_BINARY_CHECK,
        /**
         * immediately label untracked directories as
         * untracked, without checking inside.
         */
        ENABLE_FAST_UNTRACKED_DIRS,
        /**
         * force text.
         */
        FORCE_TEXT,
        /**
         * treat all files as binary, disabling text diffs.
         */
        FORCE_BINARY,
        /**
         * ignore whitespace.
         */
        IGNORE_WHITESPACE,
        /**
         * ignore whitespace change.
         */
        IGNORE_WHITESPACE_CHANGE,
        /**
         * ignore whitespace at end-of-line.
         */
        IGNORE_WHITESPACE_EOL,
        /**
         * include content of untracked files.
         * this implies GGIT_DIFF_INCLUDE_UNTRACKED but not GGIT_DIFF_RECURSE_UNTRACKED_DIRS.
         */
        SHOW_UNTRACKED_CONTENT,
        /**
         * show unmodified files.
         */
        SHOW_UNMODIFIED,
        /**
         * generate using the "patience diff" algorithm.
         */
        PATIENCE,
        /**
         * take extra time to find minimal diff.
         */
        MINIMAL,
        /**
         * include deflate/delta information for binary files.
         */
        SHOW_BINARY,
    }

    /**
     * @gir-type Flags
     */
    export namespace FeatureFlags {
        export const $gtype: GObject.GType<FeatureFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum FeatureFlags {
        THREADS,
        HTTPS,
        SSH,
    }

    /**
     * @gir-type Flags
     */
    export namespace MergeFileFlags {
        export const $gtype: GObject.GType<MergeFileFlags>;
    }

    /**
     * GGIT_MERGE_FILE_DEFAULT: Defaults.
     * GGIT_MERGE_FILE_STYLE_MERGE: Create standard conflicted merge files.
     * GGIT_MERGE_FILE_STYLE_DIFF3: Create diff3-style files.
     * GGIT_MERGE_FILE_SIMPLIFY_ALNUM: Condense non-alphanumeric regions for simplified diff file.
     * GGIT_MERGE_FILE_IGNORE_WHITESPACE: Ignore all whitespace.
     * GGIT_MERGE_FILE_IGNORE_WHITESPACE_CHANGE: Ignore changes in amount of whitespace.
     * GGIT_MERGE_FILE_IGNORE_WHITESPACE_EOL: Ignore whitespace at end of line.
     * GGIT_MERGE_FILE_DIFF_PATIENCE: Use the "patience diff" algorithm.
     * GGIT_MERGE_FILE_DIFF_MINIMAL: Take extra time to find minimal diff.
     * @gir-type Flags
     */
    enum MergeFileFlags {
        DEFAULT,
        STYLE_MERGE,
        STYLE_DIFF3,
        SIMPLIFY_ALNUM,
        IGNORE_WHITESPACE,
        IGNORE_WHITESPACE_CHANGE,
        IGNORE_WHITESPACE_EOL,
        DIFF_PATIENCE,
        DIFF_MINIMAL,
    }

    /**
     * @gir-type Flags
     */
    export namespace MergeFlags {
        export const $gtype: GObject.GType<MergeFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum MergeFlags {
        /**
         * detect renames that occur between the common
         * ancestor and the "ours" side or the common ancestor and the "theirs" side.
         * This will enable the ability to merge between a modified and renamed file.
         */
        FIND_RENAMES,
        /**
         * If a conflict occurs, exit immediately instead
         * of attempting to continue resolving conflicts.  The merge operation will
         * fail with `GGIT_EMERGECONFLICT` and no index will be returned.
         */
        FAIL_ON_CONFLICT,
        /**
         * do not write the REUC extension on the generated index.
         */
        SKIP_REUC,
        /**
         * If the commits being merged have multiple merge bases,
         * do not build a recursive merge base (by merging the multiple merge bases),
         * instead simply use the first base.  This flag provides a similar
         * merge base to `git-merge-resolve`.
         */
        NO_RECURSIVE,
    }

    /**
     * @gir-type Flags
     */
    export namespace SortMode {
        export const $gtype: GObject.GType<SortMode>;
    }

    /**
     * The type of sorting mode for the revision walker.
     * @gir-type Flags
     */
    enum SortMode {
        /**
         * Sorts the repository contents in no particular ordering;
         *                  this sorting is arbitrary, implementation-specific
         *                  and subject to change at any time.
         */
        NONE,
        /**
         * Sorts the repository contents in topological order
         *                         (parents before children); this sorting mode
         *                         can be combined with time sorting.
         */
        TOPOLOGICAL,
        /**
         * Sort the repository contents by commit time;
         *                  this sorting mode can be combined with
         *                  topological sorting.
         */
        TIME,
        /**
         * Iterate through the repository contents in reverse
         *                     order; this sorting mode can be combined with
         *                     any of the above.
         */
        REVERSE,
    }

    /**
     * @gir-type Flags
     */
    export namespace StashFlags {
        export const $gtype: GObject.GType<StashFlags>;
    }

    /**
     * Describes how a stash should be applied.
     * @gir-type Flags
     */
    enum StashFlags {
        /**
         * default stash.
         */
        DEFAULT,
        /**
         * All changes already added to the index
         * are left intact in the working directory.
         */
        KEEP_INDEX,
        /**
         * All untracked files are also stashed and then
         * cleaned up from the working directory.
         */
        INCLUDE_UNTRACKED,
        /**
         * All ignored files are also stashed and then
         * cleaned up from the working directory.
         */
        INCLUDE_IGNORED,
    }

    /**
     * @gir-type Flags
     */
    export namespace StatusFlags {
        export const $gtype: GObject.GType<StatusFlags>;
    }

    /**
     * Describes a file's status.
     * @gir-type Flags
     */
    enum StatusFlags {
        /**
         * file is current.
         */
        CURRENT,
        /**
         * file in index is new.
         */
        INDEX_NEW,
        /**
         * file in index is modified.
         */
        INDEX_MODIFIED,
        /**
         * file in index is deleted.
         */
        INDEX_DELETED,
        INDEX_RENAMED,
        INDEX_TYPECHANGE,
        /**
         * file in working tree is new.
         */
        WORKING_TREE_NEW,
        /**
         * file in working tree is modified.
         */
        WORKING_TREE_MODIFIED,
        /**
         * file in working tree is deleted.
         */
        WORKING_TREE_DELETED,
        WORKING_TREE_TYPECHANGE,
        WORKING_TREE_RENAMED,
        WORKING_TREE_UNREADABLE,
        /**
         * file is ignored.
         */
        IGNORED,
        CONFLICTED,
    }

    /**
     * @gir-type Flags
     */
    export namespace StatusOption {
        export const $gtype: GObject.GType<StatusOption>;
    }

    /**
     * GGIT_STATUS_OPTION_INCLUDE_UNTRACKED: include untracked files (default).
     * GGIT_STATUS_OPTION_INCLUDE_IGNORED: include ignored files (default).
     * GGIT_STATUS_OPTION_INCLUDE_UNMODIFIED: include unmodified files.
     * GGIT_STATUS_OPTION_EXCLUDE_SUBMODULES: exclude submodules.
     * GGIT_STATUS_OPTION_RECURSE_UNTRACKED_DIRS: search untracked directories recursively (default).
     * GGIT_STATUS_OPTION_DISABLE_PATHSPEC_MATCH: do not match path specifications.
     * GGIT_STATUS_OPTION_RECURSE_IGNORED_DIRS: search ignored directories recursively.
     * GGIT_STATUS_OPTION_RENAMES_HEAD_TO_INDEX: indicates that rename detection
     * should be processed between the head and the index and enables
     * the GIT_STATUS_INDEX_RENAMED as a possible status flag.
     * GGIT_STATUS_OPTION_RENAMES_INDEX_TO_WORKDIR: indicates tha rename
     * detection should be run between the index and the working directory
     * and enabled GIT_STATUS_WT_RENAMED as a possible status flag.
     * GGIT_STATUS_OPTION_SORT_CASE_SENSITIVELY: sort case sensitive.
     * GGIT_STATUS_OPTION_SORT_CASE_INSENSITIVELY: sort case insensitive.
     * GGIT_STATUS_OPTION_DEFAULT: default flags.
     * Status options specified when using `ggit_repository_file_status_foreach`.
     * @gir-type Flags
     */
    enum StatusOption {
        INCLUDE_UNTRACKED,
        INCLUDE_IGNORED,
        INCLUDE_UNMODIFIED,
        EXCLUDE_SUBMODULES,
        RECURSE_UNTRACKED_DIRS,
        DISABLE_PATHSPEC_MATCH,
        RECURSE_IGNORED_DIRS,
        RENAMES_HEAD_TO_INDEX,
        RENAMES_INDEX_TO_WORKDIR,
        SORT_CASE_SENSITIVELY,
        SORT_CASE_INSENSITIVELY,
        DEFAULT,
    }

    /**
     * @gir-type Flags
     */
    export namespace SubmoduleStatus {
        export const $gtype: GObject.GType<SubmoduleStatus>;
    }

    /**
     * FIXME
     * @gir-type Flags
     */
    enum SubmoduleStatus {
        IN_HEAD,
        IN_INDEX,
        IN_CONFIG,
        IN_WD,
        INDEX_ADDED,
        INDEX_DELETED,
        INDEX_MODIFIED,
        WD_UNINITIALIZED,
        WD_ADDED,
        WD_DELETED,
        WD_MODIFIED,
        WD_INDEX_MODIFIED,
        WD_WD_MODIFIED,
        WD_UNTRACKED,
    }

    namespace Blame {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a blame.
     * @gir-type Class
     */
    class Blame extends Native {
        static $gtype: GObject.GType<Blame>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Blame.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Blame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Blame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blame.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Blame.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blame.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Blame.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Blame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the blame options flags.
         * @param blame_options a {@link Ggit.BlameOptions}.
         */
        static get_flags(blame_options: BlameOptions): BlameFlags;
        /**
         * Set the blame options flags.
         * @param blame_options a {@link Ggit.BlameOptions}.
         * @param flags a {@link Ggit.BlameFlags}.
         */
        static set_flags(blame_options: BlameOptions, flags: BlameFlags): void;

        // Methods

        /**
         * Get blame data for a file that has been modified in memory. `blame` is a
         * pre-calculated blame for the in-odb history of the file. This means that once
         * a file blame is completed (which can be expensitve), updating the buffer
         * blame is very fast.
         *
         * Lines that differ between the buffer and the committed version are marked as
         * having a zero id for their `ggit_blame_hunk_get_final_commit_id`.
         * @param buffer the contents of the file.
         * @returns a {@link Ggit.Blame} or `null`.
         */
        from_buffer(buffer: Uint8Array | string): Blame | null;
        /**
         * @param idx
         */
        get_hunk_by_index(idx: number): BlameHunk;
        /**
         * @param line
         */
        get_hunk_by_line(line: number): BlameHunk;
        get_hunk_count(): number;
    }

    namespace Blob {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Represents a blob object.
     * @gir-type Class
     */
    class Blob extends Object {
        static $gtype: GObject.GType<Blob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Blob.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Blob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Blob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Blob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a read-only buffer with the raw contents of `blob`.
         *
         * A pointer to the raw contents of `blob` is returned.
         * This pointer is owned internally by `object` and must
         * not be free'd. The pointer may be invalidated at a later
         * time.
         * @returns the blob content or          `null` if the blob does not have any content.
         */
        get_raw_content(): Uint8Array | null;
        /**
         * Check whether the blob is binary.
         * @returns `true` if the blob is binary, `false` otherwise.
         */
        is_binary(): boolean;
    }

    namespace BlobOutputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.OutputStream.SignalSignatures {
            'notify::repository': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.OutputStream.ConstructorProps {
            repository: Repository;
        }
    }

    /**
     * Represents a blob stream object.
     * @gir-type Class
     */
    class BlobOutputStream extends Gio.OutputStream {
        static $gtype: GObject.GType<BlobOutputStream>;

        // Properties

        /**
         * @construct-only
         */
        set repository(val: Repository);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BlobOutputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BlobOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BlobOutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BlobOutputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BlobOutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BlobOutputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BlobOutputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BlobOutputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the id of the written blob. The blob id is only available after the
         * stream has been properly closed. If an error occurred while writing the blob,
         * the `null` is returned and `error` is set accordingly.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_id(): OId | null;
    }

    namespace Branch {
        // Signal signatures
        interface SignalSignatures extends Ref.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Ref.ConstructorProps {}
    }

    /**
     * Represents a branch object.
     * @gir-type Class
     */
    class Branch extends Ref {
        static $gtype: GObject.GType<Branch>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Branch.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Branch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Branch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Branch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Branch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Branch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Branch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Branch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Deletes an existing branch reference.
         *
         * If the branch is successfully deleted, this object is
         * not useful anymore and if should be freed with `g_object_unref()`.
         */
        ['delete'](): void;
        /**
         * Gets the name of the given local or remote branch.
         * @returns the name of the given local or remote branch or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the reference supporting the remote tracking branch,
         * given a local branch reference.
         * @returns the reference supporting the remote tracking branch or `null`.
         */
        get_upstream(): Ref | null;
        /**
         * Determines if the current local branch is pointed at by HEAD.
         * @returns `true` if the current local branch is pointed at by HEAD.
         */
        is_head(): boolean;
        /**
         * Moves/renames an existing branch reference.
         * @param new_branch_name target name of the branch once the move is performed; this name is validated for consistency.
         * @param flags a {@link Ggit.CreateFlags}.
         * @returns the new branch or `null`.
         */
        move(new_branch_name: string, flags: CreateFlags | null): Branch | null;
        /**
         * Sets the upstream branch, for a given local branch reference
         * @param upstream_branch_name name of the upstream branch; if `null` unsets it.
         */
        set_upstream(upstream_branch_name: string): void;
    }

    namespace CheckoutOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::ancestor-label': (pspec: GObject.ParamSpec) => void;
            'notify::baseline': (pspec: GObject.ParamSpec) => void;
            'notify::dir-mode': (pspec: GObject.ParamSpec) => void;
            'notify::disable-filters': (pspec: GObject.ParamSpec) => void;
            'notify::file-mode': (pspec: GObject.ParamSpec) => void;
            'notify::file-open-flags': (pspec: GObject.ParamSpec) => void;
            'notify::notify-flags': (pspec: GObject.ParamSpec) => void;
            'notify::our-label': (pspec: GObject.ParamSpec) => void;
            'notify::strategy': (pspec: GObject.ParamSpec) => void;
            'notify::target-directory': (pspec: GObject.ParamSpec) => void;
            'notify::their-label': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ancestor_label: string;
            ancestorLabel: string;
            baseline: Tree;
            dir_mode: number;
            dirMode: number;
            disable_filters: boolean;
            disableFilters: boolean;
            file_mode: number;
            fileMode: number;
            file_open_flags: number;
            fileOpenFlags: number;
            notify_flags: CheckoutNotifyFlags;
            notifyFlags: CheckoutNotifyFlags;
            our_label: string;
            ourLabel: string;
            strategy: CheckoutStrategy;
            target_directory: string;
            targetDirectory: string;
            their_label: string;
            theirLabel: string;
        }
    }

    /**
     * Represents the options used when doign a checkout.
     * @gir-type Class
     */
    class CheckoutOptions extends GObject.Object {
        static $gtype: GObject.GType<CheckoutOptions>;

        // Properties

        get ancestor_label(): string;
        set ancestor_label(val: string);
        get ancestorLabel(): string;
        set ancestorLabel(val: string);
        get baseline(): Tree;
        set baseline(val: Tree);
        get dir_mode(): number;
        set dir_mode(val: number);
        get dirMode(): number;
        set dirMode(val: number);
        get disable_filters(): boolean;
        set disable_filters(val: boolean);
        get disableFilters(): boolean;
        set disableFilters(val: boolean);
        get file_mode(): number;
        set file_mode(val: number);
        get fileMode(): number;
        set fileMode(val: number);
        get file_open_flags(): number;
        set file_open_flags(val: number);
        get fileOpenFlags(): number;
        set fileOpenFlags(val: number);
        /**
         * The checkout notify flags.
         */
        get notify_flags(): CheckoutNotifyFlags;
        set notify_flags(val: CheckoutNotifyFlags);
        /**
         * The checkout notify flags.
         */
        get notifyFlags(): CheckoutNotifyFlags;
        set notifyFlags(val: CheckoutNotifyFlags);
        get our_label(): string;
        set our_label(val: string);
        get ourLabel(): string;
        set ourLabel(val: string);
        get strategy(): CheckoutStrategy;
        set strategy(val: CheckoutStrategy);
        get target_directory(): string;
        set target_directory(val: string);
        get targetDirectory(): string;
        set targetDirectory(val: string);
        get their_label(): string;
        set their_label(val: string);
        get theirLabel(): string;
        set theirLabel(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CheckoutOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CheckoutOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CheckoutOptions;

        // Signals

        /** @signal */
        connect<K extends keyof CheckoutOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckoutOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CheckoutOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckoutOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CheckoutOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CheckoutOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param why
         * @param path
         * @param baseline
         * @param target
         * @param workdir
         * @virtual
         */
        vfunc_notify(
            why: CheckoutNotifyFlags,
            path: string,
            baseline: DiffFile,
            target: DiffFile,
            workdir: DiffFile,
        ): number;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with GObject.Object.vfunc_notify
        vfunc_notify(...args: never[]): any;
        /**
         * @param path
         * @param completed_steps
         * @param total_steps
         * @virtual
         */
        vfunc_progress(path: string, completed_steps: number, total_steps: number): void;

        // Methods

        /**
         * Get the checkout ancestor label.
         * @returns the checkout ancestor label or `null`.
         */
        get_ancestor_label(): string | null;
        /**
         * Get the baseline, i.e. the expected content of workdir. Defaults to HEAD.
         * @returns a {@link Ggit.Tree} or `null`.
         */
        get_baseline(): Tree | null;
        /**
         * Get the default checkout directory mode.
         * @returns the default directory mode.
         */
        get_dir_mode(): number;
        /**
         * Get whether filters are disabled.
         * @returns `true` if filters are disabled, `false` otherwise.
         */
        get_disable_filters(): boolean;
        /**
         * Get the default checkout file mode.
         * @returns the default checkout file mode.
         */
        get_file_mode(): number;
        /**
         * Get the checkout file open flags. These flags are platform specific,
         * e.g. on Unix these would include O_CREAT, O_TRUNC, etc.
         * @returns the checkout file open flags.
         */
        get_file_open_flags(): number;
        /**
         * Get the checkout notify flags.
         * @returns a {@link Ggit.CheckoutNotifyFlags}.
         */
        get_notify_flags(): CheckoutNotifyFlags;
        /**
         * Get the checkout our label.
         * @returns the checkout our label or `null`.
         */
        get_our_label(): string | null;
        /**
         * Get the list of file paths to checkout.
         * @returns a `null` terminated list of file paths, or `null`.
         */
        get_paths(): string[] | null;
        /**
         * Get the checkout strategy.
         * @returns a {@link Ggit.CheckoutStrategy}.
         */
        get_strategy(): CheckoutStrategy;
        /**
         * Get the checkout target directory.
         * @returns the checkout target directory or `null`.
         */
        get_target_directory(): string | null;
        /**
         * Get the checkout their label.
         * @returns the checkout their label or `null`.
         */
        get_their_label(): string | null;
        /**
         * Set the checkout ancestor label.
         * @param label the ancestor label.
         */
        set_ancestor_label(label?: string | null): void;
        /**
         * Set the baseline, i.e. the expected content of workdir. If `tree` is set
         * to `null`, the default (HEAD) will be used as the baseline.
         * @param tree a {@link Ggit.Tree}.
         */
        set_baseline(tree?: Tree | null): void;
        /**
         * Set the default checkout directory mode.
         * @param dir_mode the dir mode.
         */
        set_dir_mode(dir_mode: number): void;
        /**
         * Set whether to disable filters.
         * @param disable disable filters.
         */
        set_disable_filters(disable: boolean): void;
        /**
         * Set the default checkout file mode.
         * @param file_mode the file mode.
         */
        set_file_mode(file_mode: number): void;
        /**
         * Set the checkout file open flags. These flags are platform dependent,
         * e.g. on Unix use O_CREAT, O_TRUNC, etc.
         * @param flags the file open flags.
         */
        set_file_open_flags(flags: number): void;
        /**
         * Set the checkout notify flags.
         * @param flags a {@link Ggit.CheckoutNotifyFlags}.
         */
        set_notify_flags(flags: CheckoutNotifyFlags | null): void;
        /**
         * Set the checkout our label.
         * @param label the our label.
         */
        set_our_label(label?: string | null): void;
        /**
         * Set the list of file paths to checkout. If `paths` is `null`, then all files
         * will be checked out.
         * @param paths a `null` terminated list of paths.
         */
        set_paths(paths?: string[] | null): void;
        /**
         * Set the checkout strategy.
         * @param strategy a {@link Ggit.CheckoutStrategy}.
         */
        set_strategy(strategy: CheckoutStrategy | null): void;
        /**
         * Set the checkout target directory.
         * @param directory the target directory.
         */
        set_target_directory(directory?: string | null): void;
        /**
         * Set the checkout their label.
         * @param label the their label.
         */
        set_their_label(label?: string | null): void;
    }

    namespace CherryPickOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::checkout-options': (pspec: GObject.ParamSpec) => void;
            'notify::mainline': (pspec: GObject.ParamSpec) => void;
            'notify::merge-options': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            checkout_options: CheckoutOptions;
            checkoutOptions: CheckoutOptions;
            mainline: number;
            merge_options: MergeOptions;
            mergeOptions: MergeOptions;
        }
    }

    /**
     * Represents the options used when doign a cherry-pick.
     * @gir-type Class
     */
    class CherryPickOptions extends GObject.Object {
        static $gtype: GObject.GType<CherryPickOptions>;

        // Properties

        get checkout_options(): CheckoutOptions;
        set checkout_options(val: CheckoutOptions);
        get checkoutOptions(): CheckoutOptions;
        set checkoutOptions(val: CheckoutOptions);
        get mainline(): number;
        set mainline(val: number);
        get merge_options(): MergeOptions;
        set merge_options(val: MergeOptions);
        get mergeOptions(): MergeOptions;
        set mergeOptions(val: MergeOptions);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CherryPickOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CherryPickOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CherryPickOptions;

        // Signals

        /** @signal */
        connect<K extends keyof CherryPickOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CherryPickOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CherryPickOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CherryPickOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CherryPickOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CherryPickOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the checkout options.
         * @returns a {@link Ggit.CheckoutOptions}.
         */
        get_checkout_options(): CheckoutOptions;
        /**
         * Get the mainline parent to use when cherry-picking a merge commit.
         * @returns the mainline parent.
         */
        get_mainline(): number;
        /**
         * Get the merge options.
         * @returns a {@link Ggit.MergeOptions}.
         */
        get_merge_options(): MergeOptions;
        /**
         * Set the checkout options.
         * @param checkout_options a {@link Ggit.CheckoutOptions}.
         */
        set_checkout_options(checkout_options?: CheckoutOptions | null): void;
        /**
         * Set the mainline parent to use when cherry-picking a merge commit.
         * @param mainline the mainline parent.
         */
        set_mainline(mainline: number): void;
        /**
         * Set the merge options.
         * @param merge_options a {@link Ggit.MergeOptions}.
         */
        set_merge_options(merge_options?: MergeOptions | null): void;
    }

    namespace CloneOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the options used when cloning.
     * @gir-type Class
     */
    class CloneOptions extends GObject.Object {
        static $gtype: GObject.GType<CloneOptions>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CloneOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CloneOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CloneOptions;

        // Signals

        /** @signal */
        connect<K extends keyof CloneOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CloneOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CloneOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CloneOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CloneOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CloneOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param repository the repository.
         * @param name the remote name.
         * @param url the remote url.
         * @virtual
         */
        vfunc_create_remote(repository: Repository, name: string, url: string): Remote | null;
        /**
         * @param path the repository path.
         * @param is_bare whether a bare repository should be created.
         * @virtual
         */
        vfunc_create_repository(path: string, is_bare: boolean): Repository | null;

        // Methods

        /**
         * Gets the name of the branch to checkout or `null`.
         * @returns the name of the branch to checkout or `null`.
         */
        get_checkout_branch(): string;
        /**
         * Get the fetch options object or `null` if not set.
         * @returns the fetch options or `null`.
         */
        get_fetch_options(): FetchOptions;
        /**
         * Gets if the repository will be bare.
         * @returns `true` to clone a bare repository.
         */
        get_is_bare(): boolean;
        /**
         * Get setting for bypassing the git-aware transport when cloning. The
         * default auto setting bypasses the git-aware transport for local paths,
         * but use a normal fetch for file:// URIs.
         * @returns the local clone setting.
         */
        get_local(): CloneLocal;
        /**
         * Gives the name of the branch to checkout. `null` means
         * use the remote's HEAD.
         * @param checkout_branch the name of the branch to checkout or `null`.
         */
        set_checkout_branch(checkout_branch?: string | null): void;
        /**
         * Set the fetch options object.
         * @param fetch_options a {@link Ggit.FetchOptions} or `null`.
         */
        set_fetch_options(fetch_options?: FetchOptions | null): void;
        /**
         * Sets whether to clone a bare repository.
         * @param bare `true` to clone a bare repository.
         */
        set_is_bare(bare: boolean): void;
        /**
         * Set setting for bypassing the git-aware transport when cloning. The
         * default auto setting bypasses the git-aware transport for local paths,
         * but use a normal fetch for file:// URIs.
         * @param local the local clone setting.
         */
        set_local(local: CloneLocal | null): void;
    }

    namespace Commit {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Represents a commit object.
     * @gir-type Class
     */
    class Commit extends Object {
        static $gtype: GObject.GType<Commit>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Commit.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Commit.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Commit.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Commit.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Commit.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Commit.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Commit.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Commit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Amend an existing commit. If `update_ref` is not `null`, the given reference will
         * be updated to point to the newly created commit. Use "HEAD" to update the
         * HEAD of the current branch and make it point to this commit.
         *
         * If `message_encoding` is set to `null`, "UTF-8" encoding is assumed for the
         * provided `message`. Note that `message` will not be cleaned up automatically.
         * You can use `ggit_message_prettify` to do this yourself if needed.
         * @param update_ref name of the reference to update.
         * @param author author signature.
         * @param committer committer signature (and time of commit).
         * @param message_encoding message encoding.
         * @param message commit message.
         * @param tree the tree of objects to commit.
         * @returns the {@link Ggit.OId} of the created commit object, or `null` in case of an error.
         */
        amend(
            update_ref: string | null,
            author: Signature,
            committer: Signature,
            message_encoding: string | null,
            message: string,
            tree: Tree,
        ): OId | null;
        /**
         * Gets the author of `commit`. The returned value must be free'd with
         * `g_object_unref()`.
         * @returns the author of the commit.
         */
        get_author(): Signature | null;
        /**
         * Gets the committer of `commit`. The returned value must be free'd with
         * `g_object_unref()`.
         * @returns the committer of the commit.
         */
        get_committer(): Signature | null;
        /**
         * Gets the full message of `commit`. The resulting message is always encoded
         * in UTF-8.
         * @returns the message of the commit.
         */
        get_message(): string | null;
        /**
         * Get the encoding for the message of a commit,
         * as a string representing a standard encoding name.
         *
         * The encoding may be `null` if the 'encoding' header
         * in the commit is missing; in that case UTF-8 is assumed.
         * @returns the encoding of the commit message or `null`.
         */
        get_message_encoding(): string | null;
        /**
         * Gets the commit object that is the n-th generation ancestor
         * of the named commit object, following only the first parents.
         * Passing %0 to the `n` parameter returns another instance of `commit`.
         * @param n the requested ancestor.
         * @returns the `n` ancestor commit.
         */
        get_nth_ancestor(n: number): Commit | null;
        /**
         * Gets the parents collection for `commit`.
         * @returns the parents collection of the commit.
         */
        get_parents(): CommitParents | null;
        /**
         * Gets the subject of `commit`. The subject of a commit is the first line of
         * the commit message (as per convention). The resulting subject is always
         * encoded in UTF-8.
         * @returns the subject of the commit.
         */
        get_subject(): string | null;
        /**
         * Get the tree object for `commit`.
         * @returns a {@link Ggit.Tree}.
         */
        get_tree(): Tree | null;
        /**
         * Get the {@link Ggit.OId} of the tree of `commit`. Note that this is more efficient
         * than getting the tree object with `ggit_commit_get_tree()` because no additional
         * files need to be read from disk.
         * @returns a {@link Ggit.OId}.
         */
        get_tree_id(): OId | null;
    }

    namespace CommitParents {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::commit': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            commit: Commit;
            size: number;
        }
    }

    /**
     * Represents the parents of a commit object.
     * @gir-type Class
     */
    class CommitParents extends GObject.Object {
        static $gtype: GObject.GType<CommitParents>;

        // Properties

        /**
         * @construct-only
         */
        get commit(): Commit;
        /**
         * @read-only
         */
        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommitParents.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CommitParents.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](commit: Commit): CommitParents;

        // Signals

        /** @signal */
        connect<K extends keyof CommitParents.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommitParents.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CommitParents.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommitParents.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CommitParents.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CommitParents.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Ggit.Commit} of a parent.
         * @param idx the parent index.
         * @returns a {@link Ggit.Commit}.
         */
        get(idx: number): Commit | null;
        /**
         * Get the {@link Ggit.OId} of a parent.
         * @param idx the parent index.
         * @returns a {@link Ggit.OId}.
         */
        get_id(idx: number): OId | null;
        /**
         * Get the number of parents in the parents collection.
         * @returns the number of parents.
         */
        get_size(): number;
    }

    namespace Config {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a git configuration.
     * @gir-type Class
     */
    class Config extends Native {
        static $gtype: GObject.GType<Config>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Config;

        static new_default(): Config;

        static new_from_file(file: Gio.File): Config;

        // Signals

        /** @signal */
        connect<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Config.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Find the file representing the users global git configuration. This file
         * is usually located at $HOME/.gitconfig. This function will try to guess
         * the full path to that file, if the file exists. The returned file may then
         * be used with `ggit_config_new_from_file` or `ggit_config_add_file`. This
         * function returns `null` if the global config could not be found.
         */
        static find_global(): Gio.File;
        /**
         * Find the file representing the systems global git configuration. This file
         * is usually located at /etc/gitconfig on UNIX type systems or
         * `PROGRAMFILES`%\Git\etc\gitconfig on windows. This function will try to guess
         * the full path to that file, if the file exists. The returned file may then
         * be used with `ggit_config_new_from_file` or `ggit_config_add_file`. This
         * function returns `null` if the system config could not be found.
         */
        static find_system(): Gio.File;

        // Methods

        /**
         * Add an on-disk config file instance to an existing config
         *
         * The on-disk file pointed at by `file` will be opened and
         * parsed; it's expected to be a native Git config file following
         * the default Git config syntax (see man git-config).
         *
         * Further queries on this config object will access each
         * of the config file instances in order (instances with
         * a higher priority level will be accessed first).
         * @param file a {@link Gio.File}.
         * @param level a {@link Ggit.ConfigLevel}.
         * @param force if a config file already exists for the given priority level, replace it.
         */
        add_file(file: Gio.File, level: ConfigLevel | null, force: boolean): void;
        /**
         * Delete a config variable from the config file.
         * @param name the configuration value.
         * @returns `true` if the configuration value was deleted, `false` otherwise.
         */
        delete_entry(name: string): boolean;
        /**
         * Call `callback` for each configuration value.
         * @param callback a {@link Ggit.ConfigCallback}.
         * @returns `true` if successfull, `false` otherwise
         */
        foreach(callback: ConfigCallback): boolean;
        /**
         * Get a boolean configuration value.
         * @param name the name of the configuration value.
         * @returns the value.
         */
        get_bool(name: string): boolean;
        /**
         * Get {@link Ggit.ConfigEntry} of a config variable.
         * @param name the configuration name.
         * @returns the entry of `name`, or `null` if such a value                           does not exist.
         */
        get_entry(name: string): ConfigEntry;
        /**
         * Get a int32 configuration value.
         * @param name the name of the configuration value.
         * @returns the value.
         */
        get_int32(name: string): number;
        /**
         * Get a int64 configuration value.
         * @param name the name of the configuration value.
         * @returns the value.
         */
        get_int64(name: string): number;
        /**
         * Get the configuration value of `name` as string.
         * @param name the name of the configuration value.
         * @returns the string value of `name`, or `null` if such a value                        does not exist
         */
        get_string(name: string): string | null;
        /**
         * Matches a configuration against a regular expression. `match_info` will
         * contain the match information if the return value is not `null`, otherwise
         * `error` will be set.
         * @param regex a {@link GLib.Regex}.
         * @returns the value of that matched configuration
         */
        match(regex: GLib.Regex): [string | null, GLib.MatchInfo | null];
        /**
         * Call `callback` for all configurations matching `regex`.
         * @param regex a {@link GLib.Regex}.
         * @param callback a {@link Ggit.ConfigMatchCallback}.
         * @returns `true` if matches were successfull, `false` otherwise
         */
        match_foreach(regex: GLib.Regex, callback: ConfigMatchCallback): boolean;
        /**
         * Open a specific level config derived from a multi-level one.
         * @param level the level to open.
         * @returns the configuration at `level`, or `null`.
         */
        open_level(level: ConfigLevel | null): Config;
        /**
         * Set a boolean value.
         * @param name the name of the configuration value.
         * @param value the new value.
         * @returns `true` if the value was successfully set, `false` otherwise.
         */
        set_bool(name: string, value: boolean): boolean;
        /**
         * Set a int32 value.
         * @param name the name of the configuration value.
         * @param value the new value.
         * @returns `true` if the value was successfully set, `false` otherwise.
         */
        set_int32(name: string, value: number): boolean;
        /**
         * Set a int64 value.
         * @param name the name of the configuration value.
         * @param value the new value.
         * @returns `true` if the value was successfully set, `false` otherwise.
         */
        set_int64(name: string, value: number): boolean;
        /**
         * Set a new string value of a configuration.
         * @param name the name of the configuration value.
         * @param value the new value.
         * @returns `true` if the value was successfully set, `false` otherwise.
         */
        set_string(name: string, value: string): boolean;
        /**
         * Create a snapshot of the current state of the configuration,
         * which allows you to look into a consistent view of the configuration
         * for looking up complex values (e.g. a remote, submodule).
         * @returns a new {@link Ggit.Config}, or `null` if an error occurred.
         */
        snapshot(): Config;
    }

    namespace Cred {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a git credential.
     * @gir-type Class
     */
    class Cred extends Native {
        static $gtype: GObject.GType<Cred>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cred.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cred.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Cred.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cred.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Cred.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cred.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Cred.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cred.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CredPlaintext {
        // Signal signatures
        interface SignalSignatures extends Cred.SignalSignatures {
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Cred.ConstructorProps, Gio.Initable.ConstructorProps {
            password: string;
            username: string;
        }
    }

    /**
     * Represents a plain text credential.
     * @gir-type Class
     */
    class CredPlaintext extends Cred implements Gio.Initable {
        static $gtype: GObject.GType<CredPlaintext>;

        // Properties

        /**
         * @construct-only
         */
        get password(): string;
        /**
         * @construct-only
         */
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CredPlaintext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CredPlaintext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](username: string, password: string): CredPlaintext;

        // Signals

        /** @signal */
        connect<K extends keyof CredPlaintext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredPlaintext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CredPlaintext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredPlaintext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CredPlaintext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CredPlaintext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_password(): string;
        get_username(): string;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CredSshInteractive {
        // Signal signatures
        interface SignalSignatures extends Cred.SignalSignatures {
            'notify::username': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Cred.ConstructorProps, Gio.Initable.ConstructorProps {
            username: string;
        }
    }

    /**
     * Represents a ssh interactive credential.
     * @gir-type Class
     */
    class CredSshInteractive extends Cred implements Gio.Initable {
        static $gtype: GObject.GType<CredSshInteractive>;

        // Properties

        /**
         * @construct-only
         */
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CredSshInteractive.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CredSshInteractive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](username: string): CredSshInteractive;

        // Signals

        /** @signal */
        connect<K extends keyof CredSshInteractive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredSshInteractive.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CredSshInteractive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredSshInteractive.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CredSshInteractive.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CredSshInteractive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param prompts a list of prompts.
         * @virtual
         */
        vfunc_prompt(prompts: CredSshInteractivePrompt[]): void;

        // Methods

        get_username(): string;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CredSshKeyFromAgent {
        // Signal signatures
        interface SignalSignatures extends Cred.SignalSignatures {
            'notify::username': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Cred.ConstructorProps, Gio.Initable.ConstructorProps {
            username: string;
        }
    }

    /**
     * Represents a ssh key agent credential.
     * @gir-type Class
     */
    class CredSshKeyFromAgent extends Cred implements Gio.Initable {
        static $gtype: GObject.GType<CredSshKeyFromAgent>;

        // Properties

        /**
         * @construct-only
         */
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CredSshKeyFromAgent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CredSshKeyFromAgent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](username: string): CredSshKeyFromAgent;

        // Signals

        /** @signal */
        connect<K extends keyof CredSshKeyFromAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredSshKeyFromAgent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CredSshKeyFromAgent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CredSshKeyFromAgent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CredSshKeyFromAgent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CredSshKeyFromAgent.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the username for the credential.
         * @returns the username or `null`.
         */
        get_username(): string | null;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Diff {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::repository': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {
            repository: Repository;
        }
    }

    /**
     * Represents a diff list.
     * @gir-type Class
     */
    class Diff extends Native {
        static $gtype: GObject.GType<Diff>;

        // Properties

        /**
         * @construct-only
         */
        get repository(): Repository;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Diff.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Diff.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_buffers(
            buffer1?: Uint8Array | null,
            buffer1_as_path?: string | null,
            buffer2?: Uint8Array | null,
            buffer2_as_path?: string | null,
            diff_options?: DiffOptions | null,
        ): Diff;

        static new_index_to_workdir(
            repository: Repository,
            index?: Index | null,
            diff_options?: DiffOptions | null,
        ): Diff;

        static new_tree_to_index(
            repository: Repository,
            old_tree?: Tree | null,
            index?: Index | null,
            diff_options?: DiffOptions | null,
        ): Diff;

        static new_tree_to_tree(
            repository: Repository,
            old_tree?: Tree | null,
            new_tree?: Tree | null,
            diff_options?: DiffOptions | null,
        ): Diff;

        static new_tree_to_workdir(
            repository: Repository,
            old_tree?: Tree | null,
            diff_options?: DiffOptions | null,
        ): Diff;

        // Signals

        /** @signal */
        connect<K extends keyof Diff.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Diff.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Diff.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Diff.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Diff.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Diff.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Same as `ggit_diff_blobs()` but using a buffer.
         * @param old_blob a {@link Ggit.Blob} to diff from.
         * @param old_as_path treat `old_blob` as if it had this filename, or `null`,
         * @param buffer a buffer to diff to.
         * @param buffer_as_path treat `buffer` as if it had this filename, or `null`,
         * @param diff_options a {@link Ggit.DiffOptions}, or `null`.
         * @param file_cb a {@link Ggit.DiffFileCallback}.
         * @param binary_cb a {@link Ggit.DiffBinaryCallback}.
         * @param hunk_cb a {@link Ggit.DiffHunkCallback}.
         * @param line_cb a {@link Ggit.DiffLineCallback}.
         */
        static blob_to_buffer(
            old_blob?: Blob | null,
            old_as_path?: string | null,
            buffer?: Uint8Array | null,
            buffer_as_path?: string | null,
            diff_options?: DiffOptions | null,
            file_cb?: DiffFileCallback | null,
            binary_cb?: DiffBinaryCallback | null,
            hunk_cb?: DiffHunkCallback | null,
            line_cb?: DiffLineCallback | null,
        ): void;
        /**
         * Iterates over the diff calling `file_cb`, `binary_cb`, `hunk_cb` and `line_cb`.
         *
         * The {@link Ggit.DiffFile} mode always be 0, path will be `null` and when a blob is
         * `null` the oid will be 0.
         *
         * If `diff_options` is `null` then the defaults specified in
         * `ggit_diff_options_new()` are used.
         * @param old_blob a {@link Ggit.Blob} to diff from.
         * @param old_as_path treat `old_blob` as if it had this filename, or `null`,
         * @param new_blob a {@link Ggit.Blob} to diff to.
         * @param new_as_path treat `new_blob` as if it had this filename, or `null`,
         * @param diff_options a {@link Ggit.DiffOptions}, or `null`.
         * @param file_cb a {@link Ggit.DiffFileCallback}.
         * @param binary_cb a {@link Ggit.DiffBinaryCallback}.
         * @param hunk_cb a {@link Ggit.DiffHunkCallback}.
         * @param line_cb a {@link Ggit.DiffLineCallback}.
         */
        static blobs(
            old_blob?: Blob | null,
            old_as_path?: string | null,
            new_blob?: Blob | null,
            new_as_path?: string | null,
            diff_options?: DiffOptions | null,
            file_cb?: DiffFileCallback | null,
            binary_cb?: DiffBinaryCallback | null,
            hunk_cb?: DiffHunkCallback | null,
            line_cb?: DiffLineCallback | null,
        ): void;

        // Methods

        /**
         * Transform `diff` marking file renames, copies, etc.. If `options` is set to
         * `null`, then the default options will be used.
         * @param options a {@link Ggit.DiffFindOptions} or `null`.
         * @returns `true` if there were no errors, `false` otherwise.
         */
        find_similar(options?: DiffFindOptions | null): boolean;
        /**
         * Iterates over the diff calling `file_cb`, `binary_cb`, `hunk_cb` and `line_cb`.
         * @param file_cb a {@link Ggit.DiffFileCallback}.
         * @param binary_cb a {@link Ggit.DiffBinaryCallback}.
         * @param hunk_cb a {@link Ggit.DiffHunkCallback}.
         * @param line_cb a {@link Ggit.DiffLineCallback}.
         */
        foreach(
            file_cb?: DiffFileCallback | null,
            binary_cb?: DiffBinaryCallback | null,
            hunk_cb?: DiffHunkCallback | null,
            line_cb?: DiffLineCallback | null,
        ): void;
        /**
         * Create an e-mail ready patch from a diff.
         * @param options a {@link Ggit.DiffFormatEmailOptions}.
         * @returns the patch or `null` if an error occurred.
         */
        format_email(options: DiffFormatEmailOptions): string | null;
        /**
         * Get the delta at the specified index.
         * @param index the index.
         * @returns a {@link Ggit.DiffDelta} or `null`.
         */
        get_delta(index: number): DiffDelta | null;
        /**
         * Get the number of deltas in the diff.
         * @returns the number of deltas.
         */
        get_num_deltas(): number;
        /**
         * Merges `from` into `onto` unless `error` is set.
         * @param from the {@link Ggit.Diff} to merge.
         */
        merge(from: Diff): void;
        /**
         * Iterates over `diff` generating text output like "git diff".
         * @param type a {@link Ggit.DiffFormatType}.
         * @param print_cb a {@link Ggit.DiffLineCallback}.
         */
        print(type: DiffFormatType | null, print_cb: DiffLineCallback): void;
    }

    namespace DiffFindOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::copy-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::metric': (pspec: GObject.ParamSpec) => void;
            'notify::rename-from-rewrite-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::rename-limit': (pspec: GObject.ParamSpec) => void;
            'notify::rename-threshold': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            copy_threshold: number;
            copyThreshold: number;
            flags: DiffFindFlags;
            metric: DiffSimilarityMetric;
            rename_from_rewrite_threshold: number;
            renameFromRewriteThreshold: number;
            rename_limit: number;
            renameLimit: number;
            rename_threshold: number;
            renameThreshold: number;
        }
    }

    /**
     * Represents options for finding diff similarity.
     * @gir-type Class
     */
    class DiffFindOptions extends GObject.Object {
        static $gtype: GObject.GType<DiffFindOptions>;

        // Properties

        get copy_threshold(): number;
        set copy_threshold(val: number);
        get copyThreshold(): number;
        set copyThreshold(val: number);
        /**
         * The diff option flags.
         */
        get flags(): DiffFindFlags;
        set flags(val: DiffFindFlags);
        get metric(): DiffSimilarityMetric;
        set metric(val: DiffSimilarityMetric);
        get rename_from_rewrite_threshold(): number;
        set rename_from_rewrite_threshold(val: number);
        get renameFromRewriteThreshold(): number;
        set renameFromRewriteThreshold(val: number);
        get rename_limit(): number;
        set rename_limit(val: number);
        get renameLimit(): number;
        set renameLimit(val: number);
        get rename_threshold(): number;
        set rename_threshold(val: number);
        get renameThreshold(): number;
        set renameThreshold(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiffFindOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiffFindOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiffFindOptions;

        // Signals

        /** @signal */
        connect<K extends keyof DiffFindOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffFindOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiffFindOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffFindOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiffFindOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiffFindOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the find options copy threshold.
         * @returns the copy threshold.
         */
        get_copy_threshold(): number;
        /**
         * Get the find options flags.
         * @returns the find options flags.
         */
        get_flags(): DiffFindFlags;
        /**
         * Get the find options metric.
         * @returns a {@link Ggit.DiffSimilarityMetric} or `null`.
         */
        get_metric(): DiffSimilarityMetric | null;
        /**
         * Get the find options rename from rewrite threshold.
         * @returns the rename from rewrite threshold.
         */
        get_rename_from_rewrite_threshold(): number;
        /**
         * Get the find options rename limit.
         * @returns the rename limit.
         */
        get_rename_limit(): number;
        /**
         * Get the find options rename threshold.
         * @returns the rename threshold.
         */
        get_rename_threshold(): number;
        /**
         * Set the find options copy threshold.
         * @param threshold the threshold.
         */
        set_copy_threshold(threshold: number): void;
        /**
         * Set the find options flags.
         * @param flags a {@link Ggit.DiffFindFlags}.
         */
        set_flags(flags: DiffFindFlags | null): void;
        /**
         * Set the find options metric.
         * @param metric a {@link Ggit.DiffSimilarityMetric}.
         */
        set_metric(metric: DiffSimilarityMetric): void;
        /**
         * Set the find options rename from rewrite threshold.
         * @param threshold the threshold.
         */
        set_rename_from_rewrite_threshold(threshold: number): void;
        /**
         * Set the find options rename limit.
         * @param limit the limit.
         */
        set_rename_limit(limit: number): void;
        /**
         * Set the find options rename threshold.
         * @param threshold the threshold.
         */
        set_rename_threshold(threshold: number): void;
    }

    namespace DiffFormatEmailOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::body': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::patch-number': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::total-patches': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            author: Signature;
            body: string;
            flags: DiffFormatEmailFlags;
            id: OId;
            patch_number: number;
            patchNumber: number;
            summary: string;
            total_patches: number;
            totalPatches: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DiffFormatEmailOptions extends GObject.Object {
        static $gtype: GObject.GType<DiffFormatEmailOptions>;

        // Properties

        get author(): Signature;
        set author(val: Signature);
        get body(): string;
        set body(val: string);
        get flags(): DiffFormatEmailFlags;
        set flags(val: DiffFormatEmailFlags);
        get id(): OId;
        set id(val: OId);
        get patch_number(): number;
        set patch_number(val: number);
        get patchNumber(): number;
        set patchNumber(val: number);
        get summary(): string;
        set summary(val: string);
        get total_patches(): number;
        set total_patches(val: number);
        get totalPatches(): number;
        set totalPatches(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiffFormatEmailOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiffFormatEmailOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiffFormatEmailOptions;

        // Signals

        /** @signal */
        connect<K extends keyof DiffFormatEmailOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffFormatEmailOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiffFormatEmailOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffFormatEmailOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiffFormatEmailOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiffFormatEmailOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the author.
         * @returns a {@link Ggit.Signature} or `null`.
         */
        get_author(): Signature | null;
        /**
         * Get the body.
         * @returns the body.
         */
        get_body(): string | null;
        /**
         * Get the flags.
         * @returns a {@link Ggit.DiffFormatEmailFlags}.
         */
        get_flags(): DiffFormatEmailFlags;
        /**
         * Get the object id.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_id(): OId | null;
        /**
         * Get the patch number.
         * @returns the patch number.
         */
        get_patch_number(): number;
        /**
         * Get the summary.
         * @returns the summary.
         */
        get_summary(): string | null;
        /**
         * Get the total number of patches.
         * @returns the total number of patches.
         */
        get_total_patches(): number;
        /**
         * Set the author.
         * @param author a {@link Ggit.Signature}.
         */
        set_author(author?: Signature | null): void;
        /**
         * Set the body.
         * @param body the body.
         */
        set_body(body?: string | null): void;
        /**
         * Set the flags.
         * @param flags a {@link Ggit.DiffFormatEmailFlags}.
         */
        set_flags(flags: DiffFormatEmailFlags | null): void;
        /**
         * Set the object id.
         * @param id a {@link Ggit.OId}.
         */
        set_id(id?: OId | null): void;
        /**
         * Set the patch number.
         * @param number the patch number.
         */
        set_patch_number(number: number): void;
        /**
         * Set the summary.
         * @param summary the summary.
         */
        set_summary(summary?: string | null): void;
        /**
         * Set the total number of patches.
         * @param patches the total number of patches.
         */
        set_total_patches(patches: number): void;
    }

    namespace DiffOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::n-context-lines': (pspec: GObject.ParamSpec) => void;
            'notify::n-interhunk-lines': (pspec: GObject.ParamSpec) => void;
            'notify::new-prefix': (pspec: GObject.ParamSpec) => void;
            'notify::old-prefix': (pspec: GObject.ParamSpec) => void;
            'notify::pathspec': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: DiffOption;
            n_context_lines: number;
            nContextLines: number;
            n_interhunk_lines: number;
            nInterhunkLines: number;
            new_prefix: string;
            newPrefix: string;
            old_prefix: string;
            oldPrefix: string;
            pathspec: string[];
        }
    }

    /**
     * Represents the options used when creating a {@link Ggit.Diff}.
     * @gir-type Class
     */
    class DiffOptions extends GObject.Object {
        static $gtype: GObject.GType<DiffOptions>;

        // Properties

        /**
         * The diff option flags.
         */
        get flags(): DiffOption;
        set flags(val: DiffOption);
        get n_context_lines(): number;
        set n_context_lines(val: number);
        get nContextLines(): number;
        set nContextLines(val: number);
        get n_interhunk_lines(): number;
        set n_interhunk_lines(val: number);
        get nInterhunkLines(): number;
        set nInterhunkLines(val: number);
        get new_prefix(): string;
        set new_prefix(val: string);
        get newPrefix(): string;
        set newPrefix(val: string);
        get old_prefix(): string;
        set old_prefix(val: string);
        get oldPrefix(): string;
        set oldPrefix(val: string);
        get pathspec(): string[];
        set pathspec(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiffOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiffOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiffOptions;

        // Signals

        /** @signal */
        connect<K extends keyof DiffOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DiffOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiffOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DiffOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiffOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the diff flags.
         * @returns a {@link Ggit.DiffOption}.
         */
        get_flags(): DiffOption;
        /**
         * Get the number of context lines to include in the diff.
         * @returns the number of context lines.
         */
        get_n_context_lines(): number;
        /**
         * Get the number of interhunk lines to include in the diff.
         * @returns the number of lines.
         */
        get_n_interhunk_lines(): number;
        /**
         * Get the diff new-prefix string.
         * @returns the new-prefix string or `null`.
         */
        get_new_prefix(): string | null;
        /**
         * Get the diff old-prefix string.
         * @returns the old-prefix string or `null`.
         */
        get_old_prefix(): string | null;
        /**
         * Get the pathspec.
         * @returns the pathspec or `null`.
         */
        get_pathspec(): string[] | null;
        /**
         * Set the diff flags.
         * @param flags a {@link Ggit.DiffOption}.
         */
        set_flags(flags: DiffOption | null): void;
        /**
         * Set the number of context lines to include in the diff.
         * @param n the number of lines.
         */
        set_n_context_lines(n: number): void;
        /**
         * Set the number of interhunk lines to include in the diff.
         * @param n the number of lines.
         */
        set_n_interhunk_lines(n: number): void;
        /**
         * Set the diff new-prefix string.
         * @param prefix the prefix.
         */
        set_new_prefix(prefix: string): void;
        /**
         * Get the diff old-prefix string.
         * @param prefix the prefix.
         */
        set_old_prefix(prefix: string): void;
        /**
         * Set the pathspec.
         * @param pathspec the pathspec.
         */
        set_pathspec(pathspec?: string[] | null): void;
    }

    namespace Index {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps, Gio.Initable.ConstructorProps {
            file: Gio.File;
        }
    }

    /**
     * Represents an index object.
     * @gir-type Class
     */
    class Index extends Native implements Gio.Initable {
        static $gtype: GObject.GType<Index>;

        // Properties

        /**
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Index.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Index.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Create a new bare Git index object as a memory representation of the Git
         * index file in `file`, without a repository to back it.
         * @param file a {@link Gio.File}.
         */
        static open(file: Gio.File): Index | null;

        // Methods

        /**
         * Add a file to the index.
         * @param entry a {@link Ggit.IndexEntry}.
         * @returns `true` if the file was successfully added, `false` otherwise.
         */
        add(entry: IndexEntry): boolean;
        /**
         * Add a file to the index. The specified file must be in the working directory
         * and must exist and be readable.
         * @param file file to add.
         * @returns `true` if the file was added to the index or `false` if there was an error.
         */
        add_file(file: Gio.File): boolean;
        /**
         * Add a file to the index by path. You can specify both relative paths
         * (to the working directory) and absolute paths. Absolute paths however must
         * reside in the working directory. The specified path must exist and must be
         * readable.
         * @param path path to the file to add.
         * @returns `true` if the file was added to the index or `false` if there was an error.
         */
        add_path(path: string): boolean;
        /**
         * Get the index entries enumerator.
         * @returns a {@link Ggit.IndexEntries} or `null`.
         */
        get_entries(): IndexEntries | null;
        /**
         * Get the resolve undo entries enumerator.
         * @returns a {@link Ggit.IndexEntriesResolveUndo} or `null`.
         */
        get_entries_resolve_undo(): IndexEntriesResolveUndo | null;
        /**
         * Get the {@link Ggit.Repository} that owns the index.
         * @returns the {@link Ggit.Repository} that owns this index or `null`.
         */
        get_owner(): Repository | null;
        /**
         * Get whether the index has any conflicts.
         * @returns `true` if the index has any conflicts, `false` otherwise.
         */
        has_conflicts(): boolean;
        /**
         * Update the contents of an existing index object in memory by reading from
         * the hard disk.
         *
         * If `force` is true, this performs a "hard" read that discards in-memory
         * changes and always reloads the on-disk index data. If there is no on-disk
         * version, the index will be cleared.
         *
         * If `force` is false, this does a "soft" read that reloads the index data from
         * disk only if it has changed since the last time it was loaded. Purely
         * in-memory index data will be untouched. Be aware: if there are changes on
         * disk, unwritten in-memory changes are discarded.
         * @param force force read even if there are in-memory changes.
         * @returns `true` if the index could be read from the file associated with the          index, `false` otherwise.
         */
        read(force: boolean): boolean;
        /**
         * Remove a file from the index (specified by position).
         * @param file the file to search.
         * @param stage the stage to search.
         * @returns `true` if the file was successfully removed, `false` otherwise.
         */
        remove(file: Gio.File, stage: number): boolean;
        /**
         * Write an existing index object from memory back to disk using an atomic file
         * lock.
         * @returns `true` if the index was successfully written to disk, `false` otherwise.
         */
        write(): boolean;
        /**
         * Write a new tree object to disk containing a representation of the current
         * state of the index. The index must be associated to an existing repository
         * and must not contain any files in conflict. You can use the resulting tree
         * to for instance create a commit.
         * @returns a {@link Ggit.OId} or `null` in case of an error.
         */
        write_tree(): OId | null;
        /**
         * Write a new tree object to `repository` containing a representation of the current
         * state of the index. The index must not contain any files in conflict. You can use
         * the resulting tree to for instance create a commit.
         * @param repository a {@link Ggit.Repository}.
         * @returns a {@link Ggit.OId} or `null` in case of an error.
         */
        write_tree_to(repository: Repository): OId | null;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Mailmap {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a mailmap.
     * @gir-type Class
     */
    class Mailmap extends Native {
        static $gtype: GObject.GType<Mailmap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mailmap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Mailmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mailmap;

        static new_from_repository(repository: Repository): Mailmap;

        // Signals

        /** @signal */
        connect<K extends keyof Mailmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mailmap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Mailmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mailmap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Mailmap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mailmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a new entry to `mailmap`, replacing `replace_name` and `replace_email`
         * with `real_name` and `real_email` respectively.  If `replace_name` is `null`,
         * it is ignored during matching.  If either `real_name` or `real_email` is `null`,
         * the respective field is not replaced.
         * @param real_name the real name of the person.
         * @param real_email the real email of the person.
         * @param replace_name the name to replace.
         * @param replace_email the email to replace.
         */
        add_entry(
            real_name: string | null,
            real_email: string | null,
            replace_name: string | null,
            replace_email: string,
        ): void;
        /**
         * Resolves `replace_name` and `replace_email` to `real_name` and `real_email`.
         * If `mailmap` is `NULL`, no substitution is performed.
         * @param replace_name the name to replace.
         * @param replace_email the email to replace.
         */
        resolve(replace_name: string, replace_email: string): [string, string];
        /**
         * Resolves `signature` to use the real name and email according to `mailmap`.
         * If `mailmap` is `NULL`, no substitution is performed, but a new signature is
         * still allocated and returned.
         * @param signature the commit signature as recorded.
         * @returns The corrected signature or `null`.
         */
        resolve_signature(signature: Signature): Signature | null;
    }

    namespace Native {
        // Signal signatures
        interface SignalSignatures extends ObjectFactoryBase.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ObjectFactoryBase.ConstructorProps {
            native: any;
        }
    }

    /**
     * Represents a generic native object.
     * @gir-type Class
     */
    abstract class Native extends ObjectFactoryBase {
        static $gtype: GObject.GType<Native>;

        // Properties

        /**
         * @construct-only
         */
        set native(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Native.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Native.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Native.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Native.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Native.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Native.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Native.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Native.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a generic object in a repository.
     * @gir-type Class
     */
    abstract class Object extends Native {
        static $gtype: GObject.GType<Object>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link Ggit.OId} of `object`.
         * @returns the {@link Ggit.OId} of the object or `null`.
         */
        get_id(): OId | null;
        /**
         * Gets the {@link Ggit.Repository} that owns `object`.
         * @returns the {@link Ggit.Repository} that owns this object or `null`. The returned value must be free'd calling `g_object_unref()`.
         */
        get_owner(): Repository | null;
    }

    namespace ObjectFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents an object factory.
     * @gir-type Class
     */
    class ObjectFactory extends GObject.Object {
        static $gtype: GObject.GType<ObjectFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ObjectFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the default type factory instance.
         */
        static get_default(): ObjectFactory;

        // Methods

        /**
         * Construct a new object.
         * @param parent_class a {@link GObject.ObjectClass}.
         * @param basetype a {@link GObject.GType}.
         * @param construct_properties a list of {@link GObject.ObjectConstructParam}.
         * @returns a {@link GObject.Object} or `null`.
         */
        construct<T = GObject.Object>(
            parent_class: typeof GObject.Object,
            basetype: GObject.GType,
            construct_properties: GObject.ObjectConstructParam[],
        ): T;
        /**
         * Register `subtype` as the instantiation class for `basetype`. Each time an
         * object of type `basetype` is going to be created, an instance of `subtype`
         * is created instead. `basetype` must be subclassed from {@link Ggit.ObjectFactoryBase}.
         * @param basetype a {@link GObject.GType}.
         * @param subtype a {@link GObject.GType}.
         */
        register(basetype: GObject.GType, subtype: GObject.GType): void;
        /**
         * Unregister a subtype from the factory.
         * @param basetype a {@link GObject.GType}.
         * @param subtype a {@link GObject.GType}.
         */
        unregister(basetype: GObject.GType, subtype: GObject.GType): void;
    }

    namespace ObjectFactoryBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the base type for objects created by an object factory.
     * @gir-type Class
     */
    abstract class ObjectFactoryBase extends GObject.Object {
        static $gtype: GObject.GType<ObjectFactoryBase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectFactoryBase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectFactoryBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ObjectFactoryBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactoryBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ObjectFactoryBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectFactoryBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ObjectFactoryBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectFactoryBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ProxyOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a git proxy options.
     * @gir-type Class
     */
    class ProxyOptions extends GObject.Object {
        static $gtype: GObject.GType<ProxyOptions>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProxyOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProxyOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ProxyOptions;

        // Signals

        /** @signal */
        connect<K extends keyof ProxyOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProxyOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProxyOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProxyOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PushOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::callbacks': (pspec: GObject.ParamSpec) => void;
            'notify::parallelism': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            callbacks: RemoteCallbacks;
            parallelism: number;
        }
    }

    /**
     * Represents a git push options.
     * @gir-type Class
     */
    class PushOptions extends GObject.Object {
        static $gtype: GObject.GType<PushOptions>;

        // Properties

        get callbacks(): RemoteCallbacks;
        set callbacks(val: RemoteCallbacks);
        get parallelism(): number;
        set parallelism(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PushOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PushOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PushOptions;

        // Signals

        /** @signal */
        connect<K extends keyof PushOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PushOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PushOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PushOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the number of parallel threads to use when creating the pack file
         * to push. The special value 0 indicates that the number of threads will
         * be automatically detected.
         * @returns the number of parallel threads, or 0 for auto-detect.
         */
        get_parallelism(): number;
        /**
         * gets the remote callbacks object
         * @returns the object's id or `null`.
         */
        get_remote_callbacks(): RemoteCallbacks | null;
        /**
         * Set the number of parallel threads to use when creating the pack file
         * to push. The special value 0 can be specified for `parallelism` indicating that
         * the number of threads will be automatically detected.
         * @param parallelism the number of threads, or 0 for auto-detect.
         */
        set_parallelism(parallelism: number): void;
        /**
         * Set the remote callbacks for the push options
         * @param callbacks the {@link Ggit.RemoteCallbacks}
         */
        set_remote_callbacks(callbacks: RemoteCallbacks): void;
    }

    namespace Rebase {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a rebase object.
     * @gir-type Class
     */
    class Rebase extends Native {
        static $gtype: GObject.GType<Rebase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Rebase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Rebase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Rebase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Rebase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Rebase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Rebase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Rebase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Rebase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Aborts a rebase that is currently in progress, resetting the repository
         * and working directory to their state before rebase began.
         */
        abort(): void;
        /**
         * Commits the current patch.  You must have resolved any conflicts that
         * were introduced during the patch application from the `ggit_rebase_next()`
         * invocation.
         * @param author a {@link Ggit.Signature} or `null` to keep the author from the original commit.
         * @param committer a {@link Ggit.Signature}.
         * @param message the message for this commit, or `null` to use the message from the original commit.
         * @returns a {@link Ggit.OId} of the newly created commit or `null`.
         */
        commit(author: Signature | null, committer: Signature, message?: string | null): OId | null;
        /**
         * Finishes a rebase that is currently in progress once all patches have
         * been applied.
         * @param signature the identity that is finishing the rebase or `null`.
         */
        finish(signature?: Signature | null): void;
        /**
         * Gets the rebase operation specified by `idx`.
         * @param idx The index of the rebase operation to retrieve.
         * @returns The rebase operation or `null` if `idx` was out of bounds.
         */
        get_operation_by_index(idx: number): RebaseOperation | null;
        /**
         * Gets the count of rebase operations that are to be applied.
         * @returns the count of rebase operations that are to be applied.
         */
        get_operation_entry_count(): number;
        /**
         * Gets the index of the rebase operation that is currently being applied.
         * If the first operation has not yet been applied (because you have
         * called `ggit_repository_rebase_init()` but not yet `ggit_rebase_next()`)
         * then this returns `GGIT_REBASE_NO_OPERATION`.
         * @returns The index of the rebase operation currently being applied.
         */
        get_operation_index(): number;
        /**
         * Performs the next rebase operation and returns the information about it.
         * If the operation is one that applies a patch (which is any operation except
         * `GGIT_REBASE_OPERATION_EXEC`) then the patch will be applied and the index and
         * working directory will be updated with the changes. If there are conflicts,
         * you will need to address those before committing the changes.
         * @returns the rebase operation that is to be performed next or `null`.
         */
        next(): RebaseOperation | null;
    }

    namespace Ref {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Reprensents a git reference.
     * @gir-type Class
     */
    class Ref extends Native {
        static $gtype: GObject.GType<Ref>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Ref.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Ref.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Ref.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Ref.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Ref.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Ref.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Ref.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Ref.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Check if the given `name` is a valid name for a reference. Note that `name`
         * should be the full ref name (including prefixes).
         *
         * Valid toplevel names can contain only capital letters and underscores
         * and must start and end with a letter (e.g. HEAD, ORIG_HEAD).
         *
         * Valid refs/ names may contain any characters, except '~', '^', ':', '\', '?',
         * '[', '*', ".." and "@{", because they are interpreted by revparse.
         * @param name the name to validate.
         */
        static is_valid_name(name: string): boolean;

        // Methods

        /**
         * Deletes `ref`.
         *
         * This method works for both direct and symbolic references.
         *
         * The reference will be immediately removed on disk and from
         * memory. The given reference pointer will no longer be valid.
         */
        ['delete'](): void;
        /**
         * Deletes the log for `ref`, on error `error` is set.
         */
        delete_log(): void;
        /**
         * Gets the {@link Ggit.Reflog} for `ref`. The reflog will be created if it doesn't exist
         * yet.
         * @returns the reflog or `null`.
         */
        get_log(): Reflog | null;
        /**
         * Gets the full name of `ref`.
         * @returns the full name of a reference or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the repository where `ref` resides.
         * @returns the repository where a reference resides or `null`.
         */
        get_owner(): Repository | null;
        /**
         * Gets the type of `ref`. Either direct (#GGIT_REF_OID) or
         * symbolic (#GGIT_REF_SYMBOLIC).
         * @returns the type of a reference.
         */
        get_reference_type(): RefType;
        /**
         * Gets the shorthand name of `ref`.
         * @returns the shorthand name of a reference or `null`.
         */
        get_shorthand(): string | null;
        /**
         * Get full name to the reference pointed to by a symbolic reference.
         * Only available if the reference is symbolic.
         * @returns the name if available, `null` otherwise.
         */
        get_symbolic_target(): string | null;
        /**
         * Get the OID pointed to by a direct reference.
         * Only available if the reference is direct (i.e. an object id reference,
         * not a symbolic one).
         * @returns a new oid if available, `null` otherwise.
         */
        get_target(): OId | null;
        /**
         * Get whether `ref` has an existing log.
         * @returns `true` if `ref` has a log, `false` otherwise.
         */
        has_log(): boolean;
        /**
         * Check whether the reference is a branch.
         * @returns `true` if the reference is a branch, `false` otherwise.
         */
        is_branch(): boolean;
        /**
         * Check whether the reference is a note.
         * @returns `true` if the reference is a note, `false` otherwise.
         */
        is_note(): boolean;
        /**
         * Check whether the reference is a remote.
         * @returns `true` if the reference is a remote, `false` otherwise.
         */
        is_remote(): boolean;
        /**
         * Check whether the reference is a tag.
         * @returns `true` if the reference is a tag, `false` otherwise.
         */
        is_tag(): boolean;
        /**
         * Convenient method to resolve a reference to an object.
         * @returns a {@link Ggit.Object} or `null`.
         */
        lookup(): Object | null;
        /**
         * Rename an existing reference.
         *
         * This method works for both direct and symbolic references.
         *
         * The new name will be checked for validity.
         * See `ggit_ref_create_symbolic()` for rules about valid names.
         *
         * If not error, `ref` will be deleted from disk and a
         * new {@link Ggit.Ref} will be returned.
         *
         * The reference will be immediately renamed in-memory and on disk.
         *
         * If the `force` flag is not enabled, and there's already
         * a reference with the given name, the renaming will fail.
         *
         * IMPORTANT:
         * The user needs to write a proper reflog entry if the
         * reflog is enabled for the repository. We only rename
         * the reflog if it exists.
         * @param new_name the new name.
         * @param force `true` to force the renaming.
         * @param log_message The one line long message to be appended to the reflog.
         * @returns a newly created {@link Ggit.Ref} or `null`.
         */
        rename(new_name: string, force: boolean, log_message: string): Ref | null;
        /**
         * Resolves a symbolic reference.
         *
         * This method iteratively peels a symbolic reference
         * until it resolves to a direct reference to an OID.
         *
         * If a direct reference is passed as an argument,
         * that reference is returned immediately.
         * @returns the resolved reference to the peeled one or `null`.
         */
        resolve(): Ref | null;
        /**
         * Create a new reference with the same name as the given reference but a
         * different symbolic target. The reference must be a symbolic reference,
         * otherwise this will fail.
         *
         * The new reference will be written to disk, overwriting the given reference.
         *
         * The target name will be checked for validity.
         * See `ggit_ref_create_symbolic()` for rules about valid names.
         * @param target The new target for the reference.
         * @param log_message The one line long message to be appended to the reflog.
         * @returns the newly created {@link Ggit.Ref} or `null`.
         */
        set_symbolic_target(target: string, log_message?: string | null): Ref | null;
        /**
         * Create a new reference with the same name as the given reference but a
         * different OID target. The reference must be a direct reference, otherwise
         * this will fail.
         *
         * The new reference will be written to disk, overwriting the given reference.
         * @param oid a {@link Ggit.OId}.
         * @param log_message The one line long message to be appended to the reflog.
         * @returns the newly created {@link Ggit.Ref} or `null`.
         */
        set_target(oid: OId, log_message?: string | null): Ref | null;
        /**
         * Get a string representation of the ref.
         * @returns a string representation of the ref or `null`.
         */
        to_string(): string | null;
    }

    namespace Remote {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a git remote.
     * @gir-type Class
     */
    class Remote extends Native {
        static $gtype: GObject.GType<Remote>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Remote.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](repository: Repository, name: string, url: string): Remote;

        static new_anonymous(repository: Repository, url: string): Remote;

        // Signals

        /** @signal */
        connect<K extends keyof Remote.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Remote.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Remote.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Remote.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Opens a connection to a remote.
         * The transport is selected based on the URL. The direction argument
         * is due to a limitation of the git protocol (over TCP or SSH) which
         * starts up a specific binary which can only do the one or the other.
         * @param direction whether you want to receive or send data.
         * @param callbacks the callbacks to use for this connection.
         * @param proxy_options the proxy options.
         * @param custom_headers extra HTTP headers to use in this connection.
         */
        connect(
            direction: Direction | null,
            callbacks: RemoteCallbacks,
            proxy_options?: ProxyOptions | null,
            custom_headers?: string | null,
        ): void;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Closes the connection to the remote and frees the underlying
         * transport.
         */
        disconnect(): void;
        /**
         * Connect to the remote if not yet connected, negotiate with the remote
         * about which objects are missing and download the resulting packfile and
         * its index.
         * @param specs the ref specs.
         * @param fetch_options a {@link Ggit.FetchOptions}.
         * @returns `true` if successful, `false` otherwise.
         */
        download(specs: string[] | null, fetch_options: FetchOptions): boolean;
        /**
         * Check whether `remote` is connected.
         * @returns `true` if it is connected.
         */
        get_connected(): boolean;
        /**
         * Get the list of fetch refspecs for the given remote.
         * @returns a list of fetch refspecs or `null`.
         */
        get_fetch_specs(): string[] | null;
        /**
         * Gets the remote's name.
         * @returns the name of `remote` or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the repository where `remote` resides.
         * @returns the repository where the remote resides or `null`.
         */
        get_owner(): Repository | null;
        /**
         * Get the list of push refspecs for the given remote.
         * @returns a list of push refspecs or `null`.
         */
        get_push_specs(): string[] | null;
        /**
         * Gets the remote's url.
         * @returns the url of `remote` or `null`.
         */
        get_url(): string | null;
        /**
         * Get a list of refs at the remote.
         * @returns the remote heads or `null`.
         */
        list(): RemoteHead[] | null;
        /**
         * Prune tracking refs that are no longer present on remote.
         * @param callbacks the callbacks to use for this connection.
         */
        prune(callbacks: RemoteCallbacks): void;
        /**
         * Connect to the remote if not yet connected, negotiate with the remote
         * about which objects are missing, create a packfile with the missing
         * objects and send it.
         * @param specs the ref specs.
         * @param push_options a {@link Ggit.PushOptions}.
         * @returns `true` if successful, `false` otherwise.
         */
        push(specs: string[] | null, push_options: PushOptions): boolean;
        /**
         * Update tips to the new state.
         * @param callbacks a {@link Ggit.RemoteCallbacks}.
         * @param update_fetch_head whether to write to FETCH_HEAD. `true` to behave like git.
         * @param tags_type what the behaviour for downloading tags is for this fetch. This is             ignored for push. This must be the same value passed to             `ggit_remote_download()`.
         * @param message reflog_message The message to insert into the reflogs. If                         `null` and fetching, the default is "fetch <name>",                         where <name> is the name of the remote (or its url,                         for in-memory remotes). This parameter is ignored when pushing.
         * @returns `true` if successful, `false` otherwise.
         */
        update_tips(
            callbacks: RemoteCallbacks,
            update_fetch_head: boolean,
            tags_type: RemoteDownloadTagsType | null,
            message?: string | null,
        ): boolean;
        /**
         * Create a packfile and send it to the server
         * @param specs the ref specs.
         * @param push_options a {@link Ggit.PushOptions}
         * @returns `true` if successful, `false` otherwise.
         */
        upload(specs: string[] | null, push_options: PushOptions): boolean;
    }

    namespace RemoteCallbacks {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            completion: (arg0: RemoteCompletionType) => void;
            /**
             * @signal
             * @run-last
             */
            progress: (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            'transfer-progress': (arg0: TransferProgress) => void;
            /**
             * @signal
             * @run-last
             */
            'update-tips': (arg0: string, arg1: OId, arg2: OId) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a git remote callbacks.
     * @gir-type Class
     */
    class RemoteCallbacks extends GObject.Object {
        static $gtype: GObject.GType<RemoteCallbacks>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RemoteCallbacks.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RemoteCallbacks.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RemoteCallbacks.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteCallbacks.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RemoteCallbacks.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteCallbacks.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RemoteCallbacks.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RemoteCallbacks.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param type
         * @virtual
         */
        vfunc_completion(type: RemoteCompletionType): void;
        /**
         * @param url the url.
         * @param username_from_url the username extracted from the url.
         * @param allowed_types the allowed credential types.
         * @virtual
         */
        vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Credtype): Cred | null;
        /**
         * @param message
         * @virtual
         */
        vfunc_progress(message: string): void;
        /**
         * @param stats
         * @virtual
         */
        vfunc_transfer_progress(stats: TransferProgress): void;
        /**
         * @param refname
         * @param a
         * @param b
         * @virtual
         */
        vfunc_update_tips(refname: string, a: OId, b: OId): void;
    }

    namespace Repository {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::clone-options': (pspec: GObject.ParamSpec) => void;
            'notify::head': (pspec: GObject.ParamSpec) => void;
            'notify::init': (pspec: GObject.ParamSpec) => void;
            'notify::is-bare': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::workdir': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps, Gio.Initable.ConstructorProps {
            clone_options: CloneOptions;
            cloneOptions: CloneOptions;
            head: Ref;
            init: boolean | any;
            is_bare: boolean;
            isBare: boolean;
            location: Gio.File;
            url: string;
            workdir: Gio.File;
        }
    }

    /**
     * Represents an existing git repository including all of it's
     * object contents.
     * @gir-type Class
     */
    class Repository extends Native implements Gio.Initable {
        static $gtype: GObject.GType<Repository>;

        // Properties

        /**
         * @construct-only
         */
        get clone_options(): CloneOptions;
        /**
         * @construct-only
         */
        get cloneOptions(): CloneOptions;
        /**
         * @read-only
         */
        get head(): Ref;
        /**
         * @construct-only
         */
        // This accessor conflicts with a field or function name in a parent class or interface.
        init: boolean | any;
        /**
         * @construct-only
         */
        get is_bare(): boolean;
        /**
         * @construct-only
         */
        get isBare(): boolean;
        /**
         * @construct-only
         */
        get location(): Gio.File;
        /**
         * @construct-only
         */
        get url(): string;
        get workdir(): Gio.File;
        set workdir(val: Gio.File);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Repository.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Repository.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Repository.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Clones a new git repository in the given folder.
         * @param url url to fetch the repository from.
         * @param location the location of the repository.
         * @param options a {@link Ggit.CloneOptions}.
         */
        static clone(url: string, location: Gio.File, options?: CloneOptions | null): Repository | null;
        /**
         * Looks for a git repository.
         *
         * The lookup starts from `path` and walks up the parent directories
         * and stops when a repository is found.
         * @param location the base location where the lookup starts.
         */
        static discover(location: Gio.File): Gio.File | null;
        /**
         * Looks for a git repository.
         *
         * The lookup starts from `path` and walks up the parent directories
         * and stops when a repository is found.
         * @param location the base location where the lookup starts.
         * @param across_fs indictaes whether lookup will work across filesystem devices.
         * @param ceiling_dirs a list of absolute paths   at which lookup will stop when reached, or `null`.
         */
        static discover_full(location: Gio.File, across_fs: boolean, ceiling_dirs?: string[] | null): Gio.File | null;
        /**
         * Creates a new git repository in the given folder.
         * @param location the location of the repository.
         * @param is_bare if `true`, a git repository without a working directory is created           at the pointed path. If `false`, provided path will be considered as the working           directory into which the .git directory will be created.
         */
        static init_repository(location: Gio.File, is_bare: boolean): Repository | null;
        /**
         * Open a git repository.
         *
         * The `path` must point to an existing git repository folder, e.g.
         *
         * 	/path/to/my_repo/.git/	(normal repository)
         * 						objects/
         * 						index
         * 						HEAD
         *
         * 	/path/to/bare_repo/		(bare repository)
         * 					objects/
         * 					index
         * 					HEAD
         *
         * The method will automatically detect if `path` is a normal
         * or bare repository or fail if it is neither.
         * @param location the location of the repository.
         */
        static open(location: Gio.File): Repository | null;

        // Methods

        /**
         * Adds a fetch refspec to the `remote`'s configuration.
         * Adds `refspec` to the fetch list in the configuration. No
         * loaded remote instances will be affected.
         * @param remote a {@link Ggit.Remote}.
         * @param refspec the fetch refspec.
         */
        add_remote_fetch(remote: Remote, refspec: string): void;
        /**
         * Adds a push refspec to `remote`'s configuration.
         * Adds the given refspec to the push list in the configuration. No
         * loaded remote instances will be affected.
         * @param remote a {@link Ggit.Remote}.
         * @param refspec the push refspec.
         */
        add_remote_push(remote: Remote, refspec: string): void;
        /**
         * Get a blame for a single file.
         * @param file the file to blame.
         * @param blame_options blame options.
         * @returns a {@link Ggit.Blame}.
         */
        blame_file(file: Gio.File, blame_options?: BlameOptions | null): Blame | null;
        /**
         * Update files in the working tree to reflect the contents of current HEAD. If
         * `options` is `null`, then the default checkout options will be used.
         *
         * If the checkout was not successfull, then `error` will be set.
         * @param options a {@link Ggit.CheckoutOptions} or `null`.
         * @returns `true` if the checkout was successfull, `false` otherwise.
         */
        checkout_head(options?: CheckoutOptions | null): boolean;
        /**
         * Update files in the working tree to reflect the contents of the index. If
         * `index` is `null`, then the current index of the repository will be used. If
         * `options` is `null`, then the default checkout options will be used.
         *
         * If the checkout was not successfull, then `error` will be set.
         * @param index a {@link Ggit.Index} or `null`.
         * @param options a {@link Ggit.CheckoutOptions} or `null`.
         * @returns `true` if the checkout was successfull, `false` otherwise.
         */
        checkout_index(index?: Index | null, options?: CheckoutOptions | null): boolean;
        /**
         * Update files in the working tree to reflect the contents of the specified
         * commit, tag or tree object. If `tree` is `null`, then the current HEAD of the
         * repository will be used. If `options` is `null`, then the default checkout
         * options will be used.
         *
         * If the checkout was not successfull, then `error` will be set.
         * @param tree a {@link Ggit.Object} or `null`.
         * @param options a {@link Ggit.CheckoutOptions} or `null`.
         * @returns `true` if the checkout was successfull, `false` otherwise.
         */
        checkout_tree(tree?: Object | null, options?: CheckoutOptions | null): boolean;
        /**
         * Cherry pick the specified commit, making changes in the index and the working
         * directory.
         * @param commit a {@link Ggit.Commit}.
         * @param options a {@link Ggit.CherryPickOptions}.
         * @returns `true` if the commit was cherry-picked successfully, `false` otherwise.
         */
        cherry_pick(commit: Commit, options: CherryPickOptions): boolean;
        /**
         * Cherry-picks the given `commit` against the provided `our_commit`, producing
         * and index that reflects the result of the cherry-pick.
         * @param commit a {@link Ggit.Commit} to cherry-pick.
         * @param our_commit a {@link Ggit.Commit} to cherry-pick on.
         * @param mainline the parent of the commit, in case of a merge commit.
         * @param merge_options a {@link Ggit.MergeOptions}.
         * @returns a {@link Ggit.Index}.
         */
        cherry_pick_commit(
            commit: Commit,
            our_commit: Commit,
            mainline: number,
            merge_options?: MergeOptions | null,
        ): Index | null;
        /**
         * Create a new blob and return a {@link Gio.OutputStream} to write contents to the blob.
         * This is an efficient way to create new blobs without copying data. The
         * blob id can be obtained from the blob output stream using
         * `ggit_blob_output_stream_get_id`, after you close the stream.
         * @returns a {@link Ggit.BlobOutputStream}.
         */
        create_blob(): BlobOutputStream | null;
        /**
         * Write an in-memory buffer to the object database as a blob.
         * @param buffer the data.
         * @returns the new `GgitOid` of the written blob, or `null` if writing the blob failed.
         */
        create_blob_from_buffer(buffer: Uint8Array | string): OId | null;
        /**
         * Write a file to the object database as a blob.
         *
         * Returns (transfer full) (nullable): the new `GgitOid` of the written blob,
         * or `null` if writing the blob failed.
         * @param file a {@link Gio.File}.
         */
        create_blob_from_file(file: Gio.File): OId;
        /**
         * Write a path relative to the repository working directory to the object
         * database as a blob.
         * @param path the file path.
         * @returns the new `GgitOid` of the written blob, or `null` if writing the blob failed.
         */
        create_blob_from_path(path: string): OId | null;
        /**
         * Creates a new branch pointing at a target commit.
         * @param branch_name the name of the branch.
         * @param target a {@link Ggit.Object}.
         * @param flags a {@link Ggit.CreateFlags}.
         * @returns the reference to which the branch                                        points, or `null` in case of an error.
         */
        create_branch(branch_name: string, target: Object, flags: CreateFlags | null): Branch | null;
        /**
         * Create a new commit. If `update_ref` is not `null`, the given reference will
         * be updated to point to the newly created commit. Use "HEAD" to update the
         * HEAD of the current branch and make it point to this commit.
         *
         * If `message_encoding` is set to `null`, "UTF-8" encoding is assumed for the
         * provided `message`. Note that `message` will not be cleaned up automatically.
         * You can use `ggit_message_prettify` to do this yourself if needed.
         * @param update_ref name of the reference to update.
         * @param author author signature.
         * @param committer committer signature (and time of commit).
         * @param message_encoding message encoding.
         * @param message commit message.
         * @param tree the tree of objects to commit.
         * @param parents parent commits.
         * @returns the {@link Ggit.OId} of the created commit object, or `null` in case of an error.
         */
        create_commit(
            update_ref: string | null,
            author: Signature,
            committer: Signature,
            message_encoding: string | null,
            message: string,
            tree: Tree,
            parents: Commit[],
        ): OId | null;
        /**
         * Create a commit as with `git_commit_create()` but instead of writing it to the objectdb,
         * write the contents of the object into a buffer.
         * @param author author signature.
         * @param committer committer signature (and time of commit).
         * @param message_encoding message encoding.
         * @param message commit message.
         * @param tree the tree of objects to commit.
         * @param parents parent commits.
         * @returns the commit object content or `null` in case of an error.
         */
        create_commit_buffer(
            author: Signature,
            committer: Signature,
            message_encoding: string | null,
            message: string,
            tree: Tree,
            parents: Commit[],
        ): string | null;
        /**
         * Create a new commit. If `update_ref` is not `null`, the given reference will
         * be updated to point to the newly created commit. Use "HEAD" to update the
         * HEAD of the current branch and make it point to this commit.
         *
         * If `message_encoding` is set to `null`, "UTF-8" encoding is assumed for the
         * provided `message`. Note that `message` will not be cleaned up automatically.
         * You can use `ggit_message_prettify` to do this yourself if needed.
         * @param update_ref name of the reference to update.
         * @param author author signature.
         * @param committer committer signature (and time of commit).
         * @param message_encoding message encoding.
         * @param message commit message.
         * @param tree the tree of objects to commit.
         * @param parents parent commits.
         * @returns the {@link Ggit.OId} of the created commit object, or `null` in case of an error.
         */
        create_commit_from_ids(
            update_ref: string | null,
            author: Signature,
            committer: Signature,
            message_encoding: string | null,
            message: string,
            tree: OId,
            parents: OId[],
        ): OId | null;
        /**
         * Given the unsigned commit object's contents, its signature and the header field
         * in which to store the signature, attach the signature to the commit and write it
         * into the given repositoryCreate a new commit using the (if not NULL) signature
         * key and type of key provided.
         * @param commit_content the content of the unsigned commit.
         * @param signature the signature to add to the commit.
         * @param signature_field which header field should contain this signature. Leave `NULL` for the default of "gpgsig".
         * @returns the {@link Ggit.OId} of the created commit object, or `null` in case of an error.
         */
        create_commit_with_signature(
            commit_content: string,
            signature?: string | null,
            signature_field?: string | null,
        ): OId | null;
        /**
         * Create a new index entry. When `file` is not `null`, the path of the returned
         * entry (`ggit_index_entry_get_path`) is set to the path of `file` relative to
         * the working directory of `repository`. The file must reside in the working
         * directory of `repository`. The file related
         * fields of the returned entry are also queried from this file (if the file exists).
         *
         * If `id` is not `null`, then the id of the returned entry is set to `id`
         * (see `ggit_index_entry_get_id`) which could point to a blob (for a file)
         * or a tree (for a directory).
         * @param file a {@link Gio.File}.
         * @param id a {@link Ggit.OId}.
         * @returns a {@link Ggit.IndexEntry} or `null` when an error occurred.
         */
        create_index_entry_for_file(file?: Gio.File | null, id?: OId | null): IndexEntry | null;
        /**
         * Create a new index entry. When `path` is not `null`, the path of the returned
         * entry (`ggit_index_entry_get_path`) is set to `path`. The specified path can be
         * either absolute or relative. In the case of
         * an absolute path, the path must reside within the working directory of
         * `repository`. The file related fields of the returned entry are also queried
         * from this path (if the file exists).
         *
         * If `id` is not `null`, then the id of the returned entry is set to `id`
         * (see `ggit_index_entry_get_id`) which could point to a blob (for a file)
         * or a tree (for a directory).
         * @param path a path.
         * @param id a {@link Ggit.OId}.
         * @returns a {@link Ggit.IndexEntry} or `null` when an error occurred.
         */
        create_index_entry_for_path(path?: string | null, id?: OId | null): IndexEntry | null;
        /**
         * Adds a note for an object.
         * @param notes_ref canonical name of the reference to use, or `null` to use the default ref.
         * @param author author signature.
         * @param committer committer signature.
         * @param id OID of the git object to decorate.
         * @param note content of the note to add for object oid.
         * @param force whether to overwrite existing note.
         * @returns the OID for the note or `null` in case of error.
         */
        create_note(
            notes_ref: string | null,
            author: Signature,
            committer: Signature,
            id: OId,
            note: string,
            force: boolean,
        ): OId | null;
        /**
         * Creates a new object id reference.
         *
         * The reference will be created in the repository and written
         * to the disk. The returned value must be freed with `g_object_unref()`.
         * @param name the name for the new {@link Ggit.Ref}.
         * @param oid the {@link Ggit.OId} pointed to by the reference.
         * @param log_message The one line long message to be appended to the reflog.
         * @returns the newly created reference.
         */
        create_reference(name: string, oid: OId, log_message: string): Ref | null;
        /**
         * Adds a remote with the default fetch refspec to the repository's configuration.
         * @param name the name of the new remote.
         * @param url the url of the remote.
         * @returns a new {@link Ggit.Remote} or `null` if there is an error.
         */
        create_remote(name: string, url: string): Remote | null;
        /**
         * Creates a new symbolic reference.
         *
         * The reference will be created in the repository and written
         * to the disk. The returned value must be freed with `g_object_unref()`.
         * @param name the name for the new {@link Ggit.Ref}.
         * @param target the full name to the reference.
         * @param log_message The one line long message to be appended to the reflog.
         * @returns the newly created reference.
         */
        create_symbolic_reference(name: string, target: string, log_message: string): Ref | null;
        /**
         * Create a new tag object.
         * @param tag_name the tag name.
         * @param target a {@link Ggit.Object}.
         * @param tagger a {@link Ggit.Signature}.
         * @param message the tag message.
         * @param flags a {@link Ggit.CreateFlags}.
         * @returns the id to which the tag points, or                                        `null` in case of an error.
         */
        create_tag(
            tag_name: string,
            target: Object,
            tagger: Signature,
            message: string,
            flags: CreateFlags | null,
        ): OId | null;
        /**
         * Creates a new annotated tag.
         * @param tag_name the name of the tag.
         * @param target a {@link Ggit.Object}.
         * @param signature a {@link Ggit.Object}.
         * @param message the tag message.
         * @returns the id to which the tag points, or                                        `null` in case of an error.
         */
        create_tag_annotation(tag_name: string, target: Object, signature: Signature, message: string): OId | null;
        /**
         * Create a new tag from a buffer describing the tag object. The buffer must
         * be correctly formatted.
         * @param tag the tag buffer.
         * @param flags a {@link Ggit.CreateFlags}.
         * @returns the id to which the tag points, or                                        `null` in case of an error.
         */
        create_tag_from_buffer(tag: string, flags: CreateFlags | null): OId | null;
        /**
         * Creates a new lightweight tag.
         * @param tag_name the name of the tag.
         * @param target a {@link Ggit.Object}.
         * @param flags a {@link Ggit.CreateFlags}.
         * @returns the id to which the tag points, or                                        `null` in case of an error.
         */
        create_tag_lightweight(tag_name: string, target: Object, flags: CreateFlags | null): OId | null;
        /**
         * Create a new tree builder.
         * @returns a new {@link Ggit.TreeBuilder}, or `null` if there was an error.
         */
        create_tree_builder(): TreeBuilder | null;
        /**
         * Create a tree builder for initialized with `tree`. To create an empty
         * tree builder, use `ggit_repository_create_tree_builder` instead.
         * @param tree a {@link Ggit.Tree}.
         * @returns a new {@link Ggit.TreeBuilder} object, or `null` if there was an error.
         */
        create_tree_builder_from_tree(tree: Tree): TreeBuilder | null;
        /**
         * Delete an existing tag reference by name.
         * @param name the name of the tag.
         * @returns `true` if the tag was deleted successfully, `false` otherwise.
         */
        delete_tag(name: string): boolean;
        /**
         * Removes a single stashed state from the stash list.
         * @param index the position within the stash list. 0 points to the. most recent stashed state.
         */
        drop_stash(index: number): void;
        /**
         * Get a branch enumerator to enumerate over all branches of the specified
         * `list_type` in `repository`.
         * @param list_type a {@link Ggit.BranchType}.
         * @returns a branch enumerator.
         */
        enumerate_branches(list_type: BranchType | null): BranchEnumerator | null;
        /**
         * Gets the file status for a single file.
         * @param location the file to retrieve status for, rooted at the repository working dir.
         * @returns the status for a single file.
         */
        file_status(location: Gio.File): StatusFlags;
        /**
         * Gathers file statuses and run a callback for each one.
         *
         * To the callback is passed the path of the file, the status and the data pointer
         * passed to this function. If the callback returns something other than
         * 0, the iteration will stop and `error` will be set.
         *
         * Set `options` to `null` to get the default status options.
         * @param options status options, or `null`.
         * @param callback a {@link Ggit.StatusCallback}.
         * @returns `true` if there was no error, `false` otherwise
         */
        file_status_foreach(options: StatusOptions | null, callback: StatusCallback): boolean;
        /**
         * Count the number of unique commits between two commit objects.
         *
         * There is no need for branches containing the commits to have any
         * upstream relationship, but it helps to think of one as a branch and
         * the other as its upstream, the `ahead` and `behind` values will be
         * what git would report for the branches.
         * @param local the commit for local.
         * @param upstream the commit for upstream.
         */
        get_ahead_behind(local: OId, upstream: OId): [number, number];
        /**
         * Get the attribute value of the specified attribute for the given file.
         * @param path the relative path to the file.
         * @param name the name of the attribute.
         * @param flags a {@link Ggit.AttributeCheckFlags}.
         * @returns the attribute value, or `null`.
         */
        get_attribute(path: string, name: string, flags: AttributeCheckFlags | null): string | null;
        /**
         * Get the config for a specific repository.
         * @returns a {@link Ggit.Config}.
         */
        get_config(): Config | null;
        /**
         * Gets the default notes reference for `repository`. It defaults to
         * "refs/notes/commits".
         * @returns the default notes reference for `repository`.
         */
        get_default_notes_ref(): string | null;
        /**
         * Check whether `com` mit is a descendant of `ancestor`. Note that if this
         * function returns `false`, an error might have occurred. If so, `error` will
         * be set appropriately.
         * @param commit the commit.
         * @param ancestor the ancestor.
         * @returns `true` if `commit` is a descendant of `ancestor`, or `false` otherwise.
         */
        get_descendant_of(commit: OId, ancestor: OId): boolean;
        /**
         * Get and resolves the current HEAD reference of the repository. Note that the
         * returned ref is already resolved (if HEAD is symbolic). If you want to
         * retrieve the symbolic ref called HEAD, then use `ggit_repository_lookup_reference`
         * instead.
         * @returns a {@link Ggit.Ref}
         */
        get_head(): Ref | null;
        /**
         * Get the index for a specific repository.
         * @returns a {@link Ggit.Index}.
         */
        get_index(): Index | null;
        /**
         * Get the gitdir location of the repository.
         * @returns the location of the gitdir of the repository.
         */
        get_location(): Gio.File | null;
        /**
         * Gets the status for a submodule.
         * This looks at a submodule and tries to determine the status.  It
         * will return a combination of the `GGIT_SUBMODULE_STATUS` values.
         * How deeply it examines the working directory to do this will depend
         * on `ignore`.
         * @param name the name of the submodule.
         * @param ignore the ignore rules to follow.
         * @returns the {@link Ggit.SubmoduleStatus} for `submodule`.
         */
        get_submodule_status(name: string, ignore: SubmoduleIgnore | null): SubmoduleStatus;
        /**
         * Gets the working directory of the repository.
         * @returns the location of the working directory of the repository.
         */
        get_workdir(): Gio.File | null;
        /**
         * Checks if `repository` is empty.
         *
         * An empty repository has just been initialized and contains
         * no commits.
         * @returns `true` if the repository is empty.
         */
        is_empty(): boolean;
        /**
         * Checks if `repository`'s HEAD is detached.
         *
         * A repository's HEAD is detached when it points directly to a commit
         * instead of a branch.
         * @returns `true` if HEAD is detached.
         */
        is_head_detached(): boolean;
        /**
         * Checks if `repository`'s HEAD is an orphan.
         *
         * An orphan branch is one named from HEAD but doesn't exist in
         * the refs namespace, because it doesn't have any commit to point to.
         * @returns `true` if the current branch is an orphan.
         */
        is_head_unborn(): boolean;
        /**
         * Fill a list with all the remotes in `repository`.
         * @returns a list with the remotes.
         */
        list_remotes(): string[] | null;
        /**
         * Fill a list with all the tags in the `repository`.
         * @returns a list with the tags in `repository`.
         */
        list_tags(): string[] | null;
        /**
         * Fill a list with all the tags in the `repository` matching the provided
         * pattern. The pattern can use standard fnmatch syntax.
         * @param pattern a pattern to match.
         * @returns a list with matching tags in `repository`.
         */
        list_tags_match(pattern?: string | null): string[] | null;
        /**
         * Lookups a reference to one of the objects in the `repository`.
         *
         * The generated reference must be freed with `g_object_unref()`.
         *
         * The `gtype` must match the type of the object
         * in the odb; the method will fail otherwise.
         * The special value `G_TYPE_NONE` may be passed to let
         * the method guess the object's type.
         * @param oid a {@link Ggit.OId}.
         * @param gtype a {@link GObject.GType}.
         * @returns the found {@link Ggit.Object}, or `null` on error.
         */
        lookup(oid: OId, gtype: GObject.GType): Object | null;
        /**
         * Lookups a branch by its name in a repository.
         * @param oid a {@link Ggit.OId}.
         * @returns a `GgitBlog` pointer.
         */
        lookup_blob(oid: OId): Blob | null;
        /**
         * Lookups a branch by its name in a repository.
         * @param branch_name the name of the branch.
         * @param branch_type a {@link Ggit.BranchType}.
         * @returns a branch by its name in a repository.
         */
        lookup_branch(branch_name: string, branch_type: BranchType | null): Branch | null;
        /**
         * Lookups a branch by its name in a repository.
         * @param oid a {@link Ggit.OId}.
         * @returns a {@link Ggit.Commit} pointer.
         */
        lookup_commit(oid: OId): Commit | null;
        /**
         * Lookups a reference by its name in `repository`. The returned {@link Ggit.Ref} must
         * be freed with `g_object_unref()`.
         * @param name the long name for the reference (e.g. HEAD, ref/heads/master, refs/tags/v0.1.0, ...).
         * @returns the searched reference.
         */
        lookup_reference(name: string): Ref | null;
        /**
         * Lookups a reference by its short name in `repository` applying the git precendence
         * rules to the given shorthand to determine which reference the user is referring to.
         * The returned {@link Ggit.Ref} must be freed with `g_object_unref()`.
         * @param short_name the short name for the reference (e.g. master, v0.1.0, ...).
         * @returns the searched reference.
         */
        lookup_reference_dwim(short_name: string): Ref | null;
        /**
         * Gets the remote called `name`.
         * @param name the remote's name.
         * @returns a new {@link Ggit.Remote} or `null` if there is an error.
         */
        lookup_remote(name: string): Remote | null;
        /**
         * Lookups a submodule information by name or path. If the submodule
         * does not exist, `null` is returned and a GGIT_ERROR_NOTFOUND error set.
         * @param name the name of the submodule.
         * @returns a newly-allocated {@link Ggit.Submodule}.
         */
        lookup_submodule(name: string): Submodule | null;
        /**
         * Lookups a branch by its name in a repository.
         * @param oid a {@link Ggit.OId}.
         * @returns a {@link Ggit.Tag} pointer.
         */
        lookup_tag(oid: OId): Tag | null;
        /**
         * Lookups a branch by its name in a repository.
         * @param oid a {@link Ggit.OId}.
         * @returns a {@link Ggit.Tree} pointer.
         */
        lookup_tree(oid: OId): Tree | null;
        /**
         * Merges the given commit(s) into HEAD, writing the results into the working directory.
         * Any changes are staged for commit and any conflicts are written to the index.
         *
         * Callers should inspect the repository's index after this completes, resolve any conflicts and prepare a commit.
         * @param their_heads the heads to merge into
         * @param merge_opts merge options
         * @param checkout_opts checkout options
         */
        merge(their_heads: AnnotatedCommit[], merge_opts: MergeOptions, checkout_opts: CheckoutOptions): void;
        /**
         * Find the merge base between two commits
         * @param oid_one the oid of one of the commits.
         * @param oid_two the oid of the second of the commits
         * @returns a new {@link Ggit.OId} or `null` if an error occurred.
         */
        merge_base(oid_one: OId, oid_two: OId): OId | null;
        /**
         * Merge two commits creating a {@link Ggit.Index} reflecting the result of the merge.
         * @param our_commit the commit that reflects the destination tree.
         * @param their_commit the commit that reflects the source tree.
         * @param merge_options the merge options.
         * @returns a new {@link Ggit.Index} or `null` if an error occurred.
         */
        merge_commits(our_commit: Commit, their_commit: Commit, merge_options: MergeOptions): Index | null;
        /**
         * Merge two trees creating a {@link Ggit.Index} reflecting the result of the merge.
         * @param ancestor_tree the common ancestor between the trees, or `null`.
         * @param our_tree the tree that reflects the destination tree.
         * @param their_tree the tree that reflects the source tree.
         * @param merge_options the merge options.
         * @returns a new {@link Ggit.Index} or `null` if an error occurred.
         */
        merge_trees(ancestor_tree: Tree, our_tree: Tree, their_tree: Tree, merge_options: MergeOptions): Index | null;
        /**
         * Loop over all the notes within a specified namespace
         * and issue a callback for each one.
         * If `callback` returns a non-zero value, this will stop looping.
         * @param notes_ref canonical name of the reference to use, or `null` to use the default ref.
         * @param callback a {@link Ggit.NoteCallback}.
         * @returns `true` if there was no error, `false` otherwise.
         */
        note_foreach(notes_ref: string | null, callback: NoteCallback): boolean;
        /**
         * Tests if the ignore rules apply to the path provided.
         *
         * This acts similar to filtering performed when calling "git add ."
         * on the command line.
         * @param path A path within the repository.
         * @returns `true` if `path` should be ignored.
         */
        path_is_ignored(path: string): boolean;
        /**
         * Reads the note for an object.
         * @param notes_ref canonical name of the reference to use, or `null` to use the default ref.
         * @param id OID of the git object to decorate.
         * @returns the read note or `null` in case of an error.
         */
        read_note(notes_ref: string | null, id: OId): Note | null;
        /**
         * Initializes a rebase operation to rebase the changes in `branch`
         * relative to `upstream` onto another branch. To begin the rebase
         * process, call `git_rebase_next()`. When you have finished with this
         * object, call `g_object_unref()`.
         * @param branch the terminal commit to rebase, or `null` to rebase the current branch.
         * @param upstream the commit to begin rebasing from, or `null` to rebase all reachable commits.
         * @param onto the branch to rebase onto, or `null` to rebase onto the given upstream.
         * @param options a {@link Ggit.RebaseOptions} to specify how rebase is performed, or `null`.
         * @returns a newly allocated {@link Ggit.Rebase}.
         */
        rebase_init(
            branch: AnnotatedCommit | null,
            upstream: AnnotatedCommit | null,
            onto: AnnotatedCommit | null,
            options: RebaseOptions,
        ): Rebase | null;
        /**
         * Opens an existing rebase that was previously started by either an
         * invocation of `ggit_rebase_init()` or by another client.
         * @param options a {@link Ggit.RebaseOptions} to specify how rebase is performed, or `null`.
         * @returns a newly allocated {@link Ggit.Rebase}.
         */
        rebase_open(options: RebaseOptions): Rebase | null;
        /**
         * Gathers references and run a callback for each one.
         *
         * To the callback is passed the reference and the data pointer
         * passed to this function. If the callback returns something other than
         * 0, the iteration will stop and `error` will be set.
         * @param callback a {@link Ggit.ReferencesCallback}.
         * @returns `true` if there was no error, `false` otherwise
         */
        references_foreach(callback: ReferencesCallback): boolean;
        /**
         * Gathers reference names and run a callback for each one.
         *
         * To the callback is passed the name of the reference and the data pointer
         * passed to this function. If the callback returns something other than
         * 0, the iteration will stop and `error` will be set.
         * @param callback a {@link Ggit.ReferencesNameCallback}.
         * @returns `true` if there was no error, `false` otherwise
         */
        references_foreach_name(callback: ReferencesNameCallback): boolean;
        /**
         * Removes the note for an object.
         * @param notes_ref canonical name of the reference to use, or `null` to use the default ref.
         * @param author author signature.
         * @param committer committer signature.
         * @param id OID of the git object to decorate.
         * @returns `true` if the note was removed from `id`.
         */
        remove_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId): boolean;
        /**
         * Removes `remote` from the `repository`.
         * @param name the remote's name.
         * @returns `true` if there was no error, `false` otherwise
         */
        remove_remote(name: string): boolean;
        /**
         * Rename the remote of `repository` from `name` to `new_name`.
         * @param name the remote name to be renamed.
         * @param new_name new name of the remote.
         * @returns non-default refspecs that cannot be renamed.
         */
        rename_remote(name: string, new_name: string): string[] | null;
        /**
         * Performs a reset of type `reset_type` on `repository` to `target`,
         * or `error` will be set.
         * @param target the target {@link Ggit.Object} which is a commit or a tag.
         * @param reset_type the {@link Ggit.ResetType} to perform.
         * @param checkout_options the {@link Ggit.CheckoutOptions} to be used for a HARD reset.
         */
        reset(target: Object, reset_type: ResetType | null, checkout_options: CheckoutOptions): void;
        /**
         * Update some entries in the index from the target commit tree. The scope of
         * the updated entries is determined by the paths specified in `pathspecs`.
         * Passing `null` in `target` will result in removing entries in the index
         * matching the provided pathspecs.
         * @param target the target {@link Ggit.Object} which is a commit or a tag.
         * @param pathspecs a list of file paths to reset.
         */
        reset_default(target: Object | null, pathspecs: string[]): void;
        /**
         * Revert the given `commit` on top of the current working directory.
         * @param commit a {@link Ggit.Commit}.
         * @param options a {@link Ggit.RevertOptions}.
         * @returns `true` if the revert was successfull, `false` otherwise.
         */
        revert(commit: Commit, options: RevertOptions): boolean;
        /**
         * Find an object, as specified by a revision string. See `man gitrevisions`,
         * or the documentation for `git rev-parse` for information on the syntax
         * accepted.
         * @param spec the revision specification.
         * @returns a {@link Ggit.Object} or `null` if the revision could not be found.
         */
        revparse(spec: string): Object | null;
        /**
         * Saves the local modifications to a new stash.
         * It returns the commit containing the stashed state.
         * This commit is also the target of the direct reference refs/stash.
         * @param stasher a {@link Ggit.Signature}.
         * @param message description along with the stashed state or `null` to be autogenerated.
         * @param flags a {@link Ggit.StashFlags} to control the stashing process.
         * @returns a new object id of the commit containing the stashed state.
         */
        save_stash(stasher: Signature, message: string, flags: StashFlags | null): OId | null;
        /**
         * @param ref_name canonical name of the reference HEAD should point to.
         * @returns `true` if head was successfully set, `false` otherwise.
         */
        set_head(ref_name: string): boolean;
        /**
         * @param oid canonical Object id of the Commit the HEAD should point to.
         * @returns `true` if head was successfully set, `false` otherwise.
         */
        set_head_detached(oid: OId): boolean;
        /**
         * Sets url for the `remote` from the `repository`.
         * @param remote the remote name who's url is to be set.
         * @param url url of the remote.
         * @returns `true` if there was no error, `false` otherwise
         */
        set_remote_url(remote: string, url: string): boolean;
        /**
         * Sets the submodule.'name'.fetchRecurseSubmodules value for
         * the submodule. This setting won't affect any existing instances..
         * @param name the name of the submodule.
         * @param fetch_recurse_submodules a {@link Ggit.SubmoduleRecurse}.
         */
        set_submodule_fetch_recurse(name: string, fetch_recurse_submodules: SubmoduleRecurse | null): void;
        /**
         * Sets the ignore rule for the submodule in the configuration.
         * This does not affect any currently-loaded instances..
         * @param name the name of the submodule.
         * @param ignore a {@link Ggit.SubmoduleIgnore}.
         */
        set_submodule_ignore(name: string, ignore: SubmoduleIgnore | null): void;
        /**
         * Sets the update rule for the submodule in the configuration.
         * This setting won't affect any existing instances.
         * @param name the name of the submodule.
         * @param update a {@link Ggit.SubmoduleUpdate}.
         */
        set_submodule_update(name: string, update: SubmoduleUpdate | null): void;
        /**
         * Sets the URL for the submodule in the configuration.
         *
         * After calling this, you may wish to call `ggit_submodule_sync()` to
         * write the changes to the checked out submodule repository.
         * @param name the name of the submodule to configure.
         * @param url URL that should be used for the submodule.
         */
        set_submodule_url(name: string, url: string): void;
        /**
         * Sets the working directory of the repository. If `update_gitlink` is set to
         * `true` "core.worktree" will be set in the config if workdir is not the parent
         * of the .git directory).
         * @param workdir the working directory.
         * @param update_gitlink create/update gitlink in workdir.
         */
        set_workdir(workdir: Gio.File, update_gitlink: boolean): void;
        /**
         * Loops over all the stashed states and issue a callback for each one.
         * If `callback` returns a non-zero value, this will stop looping.
         * @param callback a {@link Ggit.StashCallback}.
         * @returns `true` if there was no error, `false` otherwise.
         */
        stash_foreach(callback: StashCallback): boolean;
        /**
         * Gathers submodules and run a callback for each one.
         *
         * To the callback is passed the submodule instance and name. If the callback
         * returns something other than 0, the iteration will stop and `error`
         * will be set.
         *
         * NOTE: the submodule instance passed to the callback is only valid during
         * the call to ggit_repository_submodule_foreach and may not be used after the
         * call has finished.
         * @param callback a {@link Ggit.StatusCallback}.
         * @returns `true` if there was no error, `false` otherwise
         */
        submodule_foreach(callback: SubmoduleCallback): boolean;
        /**
         * Get all the tags in the repository and run the provided callback on each. If
         * the callback returns something other than 0, the iteration will stop and
         * `error` will be set.
         * @param callback a {@link Ggit.TagCallback}.
         * @returns `true` if there was no error, `false` otherwise
         */
        tag_foreach(callback: TagCallback): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace RevisionWalker {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::repository': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps, Gio.Initable.ConstructorProps {
            repository: Repository;
        }
    }

    /**
     * Represents a revision walker.
     * @gir-type Class
     */
    class RevisionWalker extends Native implements Gio.Initable {
        static $gtype: GObject.GType<RevisionWalker>;

        // Properties

        get repository(): Repository;
        set repository(val: Repository);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RevisionWalker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RevisionWalker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](repository: Repository): RevisionWalker;

        // Signals

        /** @signal */
        connect<K extends keyof RevisionWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RevisionWalker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RevisionWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RevisionWalker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RevisionWalker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RevisionWalker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the repository on which this walker is operating.
         * @returns the repository on which this walker is operating or `null`.
         */
        get_repository(): Repository | null;
        /**
         * Marks a commit (and its ancestors) uninteresting for the output.
         *
         * The given OID must belong to a commit on the walked
         * repository.
         *
         * The resolved commit and all its parents will be hidden from the
         * output on the revision walk.
         * @param oid a {@link Ggit.OId}.
         */
        hide(oid: OId): void;
        /**
         * Hide all OIDs pointed to by references that match the given glob pattern
         * to the revsision walker. A leading 'refs/' is implied if not present, as well
         * as a trailing '/ \ *' if the glob lacks '?', '\ *' or '['.
         * @param item the glob to hide.
         */
        hide_glob(item: string): void;
        /**
         * Hide the OID of the current HEAD to the revision walker.
         */
        hide_head(): void;
        /**
         * Hide the OID pointed to by the named reference to the revision walker.
         * @param item the reference to hide.
         */
        hide_ref(item: string): void;
        /**
         * Gets the next commit from the revision walk.
         *
         * The initial call to this method is *not* blocking when
         * iterating through a repository with a time-sorting mode.
         *
         * Iterating with Topological or inverted modes makes the initial
         * call blocking to preprocess the commit list, but this block should be
         * mostly unnoticeable on most repositories (topological preprocessing
         * times at 0.3s on the git.git repo).
         *
         * The revision walker is reset when the walk is over.
         * @returns the next commit from the revision walk or `null`.
         */
        next(): OId | null;
        /**
         * Marks a commit to start traversal from.
         *
         * The given OID must belong to a commit on the walked
         * repository.
         *
         * The given commit will be used as one of the roots
         * when starting the revision walk. At least one commit
         * must be pushed the repository before a walk can
         * be started.
         * @param oid a {@link Ggit.OId}.
         */
        push(oid: OId): void;
        /**
         * Push all OIDs pointed to by references that match the given glob pattern
         * to the revsision walker. A leading 'refs/' is implied if not present, as well
         * as a trailing '/ \ *' if the glob lacks '?', '\ *' or '['.
         * @param item the glob to push.
         */
        push_glob(item: string): void;
        /**
         * Push the OID of the current HEAD to the revision walker.
         */
        push_head(): void;
        /**
         * Push and hide the respective endpoints of the given range. The range
         * should be of the form: &ltcommit&gt..&lt;commit&gt;, where each &lt;commit&gt; is in the
         * form accepted by revparse. The left-hand commit will be hidden and the
         * right-hand commit pushed.
         * @param range the range to push.
         */
        push_range(range: string): void;
        /**
         * Push the OID pointed to by the named reference to the revision walker.
         * @param item the reference to push.
         */
        push_ref(item: string): void;
        /**
         * Resets the revision walker for reuse.
         *
         * This will clear all the pushed and hidden commits, and
         * leave the walker in a blank state (just like at
         * creation) ready to receive new commit pushes and
         * start a new walk.
         *
         * The revision walk is automatically reset when a walk
         * is over.
         */
        reset(): void;
        /**
         * Change the sorting mode when iterating through the
         * repository's contents.
         *
         * Changing the sorting mode resets the walker.
         * @param sort_mode a {@link Ggit.SortMode} value.
         */
        set_sort_mode(sort_mode: SortMode | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Signature {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {
            encoding: string;
        }
    }

    /**
     * Represents an action signature.
     * @gir-type Class
     */
    class Signature extends Native {
        static $gtype: GObject.GType<Signature>;

        // Properties

        /**
         * @construct-only
         */
        get encoding(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Signature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, email: string, signature_time: GLib.DateTime): Signature;

        static new_now(name: string, email: string): Signature;

        // Signals

        /** @signal */
        connect<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Signature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Signature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create a copy of the signature.
         * @returns a {@link Ggit.Signature} or `null`.
         */
        copy(): Signature | null;
        /**
         * Gets the email of the person.
         * @returns the email of the person or `null`.
         */
        get_email(): string | null;
        /**
         * Gets the name of the person.
         * @returns the name of the person or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the time when the action happened. Note that the time is returned in
         * the timezone of the commit (see `ggit_signature_get_time_zone`).
         * @returns the time when the action happened or `null`.
         */
        get_time(): GLib.DateTime | null;
        /**
         * Gets the timezone in which the action happened.
         * @returns the timezone in which the action happened or `null`.
         */
        get_time_zone(): GLib.TimeZone | null;
    }

    namespace SubmoduleUpdateOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::checkout-options': (pspec: GObject.ParamSpec) => void;
            'notify::fetch-options': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            checkout_options: CheckoutOptions;
            checkoutOptions: CheckoutOptions;
            fetch_options: FetchOptions;
            fetchOptions: FetchOptions;
        }
    }

    /**
     * Represents options for a submodule update.
     * @gir-type Class
     */
    class SubmoduleUpdateOptions extends GObject.Object {
        static $gtype: GObject.GType<SubmoduleUpdateOptions>;

        // Properties

        get checkout_options(): CheckoutOptions;
        set checkout_options(val: CheckoutOptions);
        get checkoutOptions(): CheckoutOptions;
        set checkoutOptions(val: CheckoutOptions);
        get fetch_options(): FetchOptions;
        set fetch_options(val: FetchOptions);
        get fetchOptions(): FetchOptions;
        set fetchOptions(val: FetchOptions);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubmoduleUpdateOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubmoduleUpdateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SubmoduleUpdateOptions;

        // Signals

        /** @signal */
        connect<K extends keyof SubmoduleUpdateOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubmoduleUpdateOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SubmoduleUpdateOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubmoduleUpdateOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SubmoduleUpdateOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubmoduleUpdateOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the checkout options.
         * @returns a {@link Ggit.CheckoutOptions} or `null`.
         */
        get_checkout_options(): CheckoutOptions | null;
        get_fetch_options(): FetchOptions;
        /**
         * Set the checkout options.
         * @param checkout_options a {@link Ggit.CheckoutOptions}.
         */
        set_checkout_options(checkout_options?: CheckoutOptions | null): void;
        /**
         * Sets the fetch options.
         * @param fetch_options a {@link Ggit.FetchOptions}.
         */
        set_fetch_options(fetch_options?: FetchOptions | null): void;
    }

    namespace Tag {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Represents a tag object.
     * @gir-type Class
     */
    class Tag extends Object {
        static $gtype: GObject.GType<Tag>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tag.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tag.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the message of `tag`.
         * @returns the message of the tag or `null`.
         */
        get_message(): string | null;
        /**
         * Gets the name of `tag`.
         * @returns the name of the tag or `null`.
         */
        get_name(): string | null;
        /**
         * Get the tagger (author) of `tag`. The returned value must be free with
         * `g_object_unref()`.
         * @returns the tagger (author) of the tag or `null`.
         */
        get_tagger(): Signature | null;
        /**
         * Gets the target {@link Ggit.Object} of `tag`.
         *
         * This method performs a repository lookup for the
         * given object and returns it.
         * @returns the target {@link Ggit.Object} of the tag or `null`.
         */
        get_target(): Object | null;
        /**
         * Gets the target {@link Ggit.OId} of `tag`.
         * @returns the target {@link Ggit.OId} of the tag or `null`.
         */
        get_target_id(): OId | null;
        /**
         * Get the target object type.
         * @returns a {@link GObject.GType}.
         */
        get_target_type(): GObject.GType;
        /**
         * Recursively peel a tag until a non tag object is found.
         * @returns a {@link Ggit.Object} or `null`.
         */
        peel(): Object | null;
    }

    namespace Tree {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Represents a tree object.
     * @gir-type Class
     */
    class Tree extends Object {
        static $gtype: GObject.GType<Tree>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tree.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Tree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tree.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get a tree entry by index.
         * @param i the index of the entry.
         * @returns a {@link Ggit.TreeEntry} or `null`.
         */
        get(i: number): TreeEntry | null;
        /**
         * Get a tree entry by name.
         * @param name a filename.
         * @returns a {@link Ggit.TreeEntry} or `null`.
         */
        get_by_name(name: string): TreeEntry | null;
        /**
         * Retrieves a tree entry contained in a tree or in any of its subtrees,
         * given its relative path.
         * @param path a path.
         * @returns a {@link Ggit.TreeEntry} or `null`.
         */
        get_by_path(path: string): TreeEntry | null;
        /**
         * Get the {@link Ggit.OId} of the tree.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_id(): OId | null;
        /**
         * Get the number of entries in the tree.
         * @returns the number of entries in the tree.
         */
        size(): number;
        /**
         * Walk all the entries of a tree object recursively (resolving and walking
         * subtrees of the tree as needed). The `error` will be set to the error returned
         * by `callback` (if any).
         * @param mode the walking order.
         * @param callback the callback to call for each entry.
         */
        walk(mode: TreeWalkMode | null, callback: TreeWalkCallback): void;
    }

    namespace TreeBuilder {
        // Signal signatures
        interface SignalSignatures extends Native.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Native.ConstructorProps {}
    }

    /**
     * Represents a tree object.
     * @gir-type Class
     */
    class TreeBuilder extends Native {
        static $gtype: GObject.GType<TreeBuilder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeBuilder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TreeBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Clear all entries in the tree builder.
         */
        clear(): void;
        /**
         * Get an entry by path.
         * @param path the path to remove.
         * @returns the `GGitTreeEntry` or `null` if no such entry exists.
         */
        get_entry(path: string): TreeEntry | null;
        /**
         * Insert a file with a given blob in the tree builder. If the tree builder
         * already contains an entry for the given file, then this entry will be
         * overwritten.
         *
         * Note that the returned {@link Ggit.TreeEntry} is bound to the lifetime of the tree
         * builder and cannot be used after the tree builder has been freed.
         * @param filename the file name.
         * @param oid the {@link Ggit.OId} of the file blob to insert.
         * @param file_mode a {@link Ggit.FileMode}.
         * @returns a {@link Ggit.TreeEntry} or `null`.
         */
        insert(filename: string, oid: OId, file_mode: FileMode | null): TreeEntry | null;
        /**
         * Remove an entry from the builder by path.
         * @param path the path to remove.
         */
        remove(path: string): void;
        /**
         * Write the contents of the tree builder as a tree object.
         * @returns the {@link Ggit.OId} of the created tree object or `null`.
         */
        write(): OId | null;
    }

    /**
     * Represents an annotated commit object.
     * @gir-type Struct
     */
    class AnnotatedCommit {
        static $gtype: GObject.GType<AnnotatedCommit>;

        // Constructors

        constructor(repository: Repository, ref: Ref);

        static new_from_ref(repository: Repository, ref: Ref): AnnotatedCommit;

        // Methods

        /**
         * Gets the commit ID that the given `annotated_commit` refs to.
         * @returns the commit ID that the given `annotated_commit` refs to or `null`.
         */
        get_id(): OId | null;
        /**
         * Atomically increments the reference count of `annotated_commit` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a newly allocated {@link Ggit.AnnotatedCommit} or `null`.
         */
        ref(): AnnotatedCommit | null;
        /**
         * Atomically decrements the reference count of `annotated_commit` by one.
         * If the reference count drops to 0, `annotated_commit` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type BlameClass = typeof Blame;
    /**
     * Represents a blame hunk.
     * @gir-type Struct
     */
    abstract class BlameHunk {
        static $gtype: GObject.GType<BlameHunk>;

        // Methods

        /**
         * Get the id of the commit where this hunk was last changed.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_final_commit_id(): OId | null;
        /**
         * Get the signature of the final version of the hunk.
         * @returns a {@link Ggit.Signature} or `null`.
         */
        get_final_signature(): Signature | null;
        /**
         * Get the line number where the hunk begins in the final version of the file.
         * Line numbers start at 1.
         * @returns the final hunk line number.
         */
        get_final_start_line_number(): number;
        /**
         * Get the number of lines in the hunk.
         * @returns the number of lines in the hunk.
         */
        get_lines_in_hunk(): number;
        /**
         * Get the id of the commit where the hunk was found. This is usually the same
         * the final commit id, except when #GGIT_BLAME_TRACK_COPIES_ANY_COMMIT was used.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_orig_commit_id(): OId | null;
        /**
         * Get the path of the file where this hunk originated, as of the commit
         * specified by `ggit_blame_hunk_get_orig_commit_id`.
         * @returns the path or `null`.
         */
        get_orig_path(): string | null;
        /**
         * Get the signature of the commit specified by `ggit_blame_hunk_get_orig_commit_id`.
         * @returns a {@link Ggit.Signature} or `null`.
         */
        get_orig_signature(): Signature | null;
        /**
         * Get the line number where the hunk begins in the file specified by
         * `ggit_blame_hunk_get_orig_path` at the commit specified by
         * `ggit_blame_hunk_get_orig_commit_id`. Line numbers start at 1.
         * @returns the orig hunk line number.
         */
        get_orig_start_line_number(): number;
        /**
         * Get whether the hunk has been tracked to a boundary commit (the root,
         * or the commit specified in `ggit_blame_options_set_oldest_commit`).
         * @returns whether the hunk is at a boundary commit.
         */
        is_boundary(): boolean;
        /**
         * Atomically increments the reference count of `blame_hunk` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.BlameHunk} or `null`.
         */
        ref(): BlameHunk | null;
        /**
         * Atomically decrements the reference count of `blame_hunk` by one.
         * If the reference count drops to 0, `blame_hunk` is freed.
         */
        unref(): void;
    }

    /**
     * Represents blame options.
     * @gir-type Struct
     */
    class BlameOptions {
        static $gtype: GObject.GType<BlameOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): BlameOptions;

        // Methods

        /**
         * Copies `blame_options` into a newly allocated {@link Ggit.BlameOptions}.
         * @returns a newly allocated {@link Ggit.BlameOptions} or `null`.
         */
        copy(): BlameOptions | null;
        /**
         * Frees `blame_options`.
         */
        free(): void;
        /**
         * Get the last line in the file to consider. The default is 1.
         * @returns the last line to consider.
         */
        get_maximum_line(): number;
        /**
         * Get the first line in the file to consider. The default is 1.
         * @returns the first line to consider.
         */
        get_minimum_line(): number;
        /**
         * Get the minimum number of characters that must be detected as moving/copying
         * within a file for it to associate those lines with a parent commit. This is
         * only used when any of the #GGIT_BLAME_TRACK_COPIES_SAME_FILE flag is
         * specified. The default value is 20.
         * @returns the minimum number of characters.
         */
        get_minimum_match_characters(): number;
        /**
         * Get the id of the newest commit to consider in the blame. The default
         * value of `null` indicates to use HEAD.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_newest_commit(): OId | null;
        /**
         * Get the id of the oldest commit to consider in the blame. Teh default value
         * of `null` indicates to used HEAD.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_oldest_commit(): OId | null;
        /**
         * Set the last line in the file to consider. Lines start at 1.
         * @param line the last line to consider.
         */
        set_maximum_line(line: number): void;
        /**
         * Set the first line in the file to consider. Lines start at 1.
         * @param line the first line to consider.
         */
        set_minimum_line(line: number): void;
        /**
         * Set the minimum number of characters that must be detected as moving/copying
         * within a file for it to associate those lines with a parent commit. This is
         * only used when any of the #GGIT_BLAME_TRACK_COPIES_ flags are specified. The
         * default value is 20.
         * @param characters the minimum number of characters.
         */
        set_minimum_match_characters(characters: number): void;
        /**
         * Set the id of the newest commit to consider in the blame. Specify `null` to
         * set the default value which indicates to use HEAD.
         * @param oid a {@link Ggit.OId} or `null`.
         */
        set_newest_commit(oid?: OId | null): void;
        /**
         * Set the id of the oldest commit to consider in the blame. Specify `null` to
         * set the default value which indicates to consider the first commit without
         * a parent.
         * @param oid a {@link Ggit.OId}.
         */
        set_oldest_commit(oid?: OId | null): void;
    }

    /**
     * @gir-type Alias
     */
    type BlobClass = typeof Blob;
    /**
     * @gir-type Alias
     */
    type BlobOutputStreamClass = typeof BlobOutputStream;
    /**
     * @gir-type Alias
     */
    type BranchClass = typeof Branch;
    /**
     * Represents a branch enumerator.
     * @gir-type Struct
     */
    abstract class BranchEnumerator {
        static $gtype: GObject.GType<BranchEnumerator>;

        // Methods

        /**
         * Returns the currently being enumerated branch, or `null`. Note that the
         * returned GgitRef will be of type GgitBranch if the ref represents a local
         * branch.
         * @returns the branch ref or `null`.
         */
        get(): Ref | null;
        /**
         * Get an iterator for the enumerator.
         * @returns a {@link Ggit.BranchEnumerator} or `null`.
         */
        iterator(): BranchEnumerator | null;
        /**
         * Move the enumerator to the next branch.
         * @returns `true` if there is a next branch, `false` otherwise.
         */
        next(): boolean;
        /**
         * @returns `enumerator` or `null`
         */
        ref(): BranchEnumerator | null;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type CheckoutOptionsClass = typeof CheckoutOptions;
    /**
     * @gir-type Alias
     */
    type CherryPickOptionsClass = typeof CherryPickOptions;
    /**
     * @gir-type Alias
     */
    type CloneOptionsClass = typeof CloneOptions;
    /**
     * @gir-type Alias
     */
    type CommitClass = typeof Commit;
    /**
     * @gir-type Alias
     */
    type CommitParentsClass = typeof CommitParents;
    /**
     * @gir-type Alias
     */
    type ConfigClass = typeof Config;
    /**
     * Represents a git configuration entry.
     * @gir-type Struct
     */
    abstract class ConfigEntry {
        static $gtype: GObject.GType<ConfigEntry>;

        // Methods

        /**
         * Gets the {@link Ggit.ConfigLevel} of `entry`.
         * @returns the {@link Ggit.ConfigLevel} of `entry`.
         */
        get_level(): ConfigLevel;
        /**
         * Gets the name of `entry`.
         * @returns the name of `entry` or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the value of `entry`.
         * @returns the value of `entry` or `null`.
         */
        get_value(): string | null;
        /**
         * Atomically increments the reference count of `entry` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.ConfigEntry} or `null`.
         */
        ref(): ConfigEntry | null;
        /**
         * Atomically decrements the reference count of `entry` by one.
         * If the reference count drops to 0, `entry` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type CredClass = typeof Cred;
    /**
     * @gir-type Alias
     */
    type CredPlaintextClass = typeof CredPlaintext;
    /**
     * @gir-type Alias
     */
    type CredSshInteractiveClass = typeof CredSshInteractive;
    /**
     * Represents a ssh interactive prompt.
     * @gir-type Struct
     */
    class CredSshInteractivePrompt {
        static $gtype: GObject.GType<CredSshInteractivePrompt>;

        // Constructors

        constructor(name: string, instruction: string, text: string, is_masked: boolean);

        static ['new'](name: string, instruction: string, text: string, is_masked: boolean): CredSshInteractivePrompt;

        // Methods

        get_instruction(): string;
        get_name(): string;
        get_response(): string;
        get_text(): string;
        is_masked(): boolean;
        ref(): CredSshInteractivePrompt;
        /**
         * @param response
         */
        set_response(response: string): void;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type CredSshKeyFromAgentClass = typeof CredSshKeyFromAgent;
    /**
     * Represents a diff binary.
     * @gir-type Struct
     */
    abstract class DiffBinary {
        static $gtype: GObject.GType<DiffBinary>;

        // Methods

        /**
         * Gets the {@link Ggit.DiffBinaryFile} new file for `binary`.
         * @returns the contents of the new file or `null`.
         */
        get_new_file(): DiffBinaryFile | null;
        /**
         * Gets the {@link Ggit.DiffBinaryFile} old file for `binary`.
         * @returns the contents of the old file or `null`.
         */
        get_old_file(): DiffBinaryFile | null;
        /**
         * Atomically increments the reference count of `binary` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffBinary} or `null`.
         */
        ref(): DiffBinary | null;
        /**
         * Atomically decrements the reference count of `binary` by one.
         * If the reference count drops to 0, `binary` is freed.
         */
        unref(): void;
    }

    /**
     * Represents a diff binary file.
     * @gir-type Struct
     */
    abstract class DiffBinaryFile {
        static $gtype: GObject.GType<DiffBinaryFile>;

        // Methods

        /**
         * Gets the {@link Ggit.DiffBinaryType} for `file`.
         * @returns the file's binary type.
         */
        get_binary_type(): DiffBinaryType;
        /**
         * Get the binary data. This data should not be modified.
         * @param size location to return size of byte data.
         * @returns a pointer to the binary data, or `null`.
         */
        get_data(size?: number | null): number;
        /**
         * Gets the length of the binary data after inflation.
         * @returns the length of the binary data after inflation.
         */
        get_inflated_size(): number;
        /**
         * Atomically increments the reference count of `file` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffBinaryFile}.
         */
        ref(): DiffBinaryFile;
        /**
         * Atomically decrements the reference count of `file` by one.
         * If the reference count drops to 0, `file` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type DiffClass = typeof Diff;
    /**
     * Represents the changes done to one file.
     * @gir-type Struct
     */
    abstract class DiffDelta {
        static $gtype: GObject.GType<DiffDelta>;

        // Methods

        /**
         * Gets flags for `delta`.
         * @returns the delta flags
         */
        get_flags(): DiffFlag;
        /**
         * Gets the new file for `delta`.
         * @returns the delta's new file or `null`.
         */
        get_new_file(): DiffFile | null;
        /**
         * Gets the old file for `delta`.
         * @returns the delta's old file or `null`.
         */
        get_old_file(): DiffFile | null;
        /**
         * Gets the similarity between `delta` files.
         * @returns the delta's similarity.
         */
        get_similarity(): number;
        /**
         * Gets the {@link Ggit.DeltaType} for `delta`.
         * @returns the delta's status.
         */
        get_status(): DeltaType;
        /**
         * Atomically increments the reference count of `delta` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffDelta} or `null`.
         */
        ref(): DiffDelta | null;
        /**
         * Atomically decrements the reference count of `delta` by one.
         * If the reference count drops to 0, `delta` is freed.
         */
        unref(): void;
    }

    /**
     * Represents a file in a {@link Ggit.Diff}.
     * @gir-type Struct
     */
    abstract class DiffFile {
        static $gtype: GObject.GType<DiffFile>;

        // Methods

        /**
         * Gets the `GgitDifflags` for `file`.
         * @returns the file's flags.
         */
        get_flags(): DiffFlag;
        /**
         * Gets the mode for `file`.
         * @returns the file's mode.
         */
        get_mode(): number;
        /**
         * Gets the {@link Ggit.OId} for `file`.
         * @returns the file's {@link Ggit.OId} or `null`.
         */
        get_oid(): OId | null;
        /**
         * Gets the path of `file` or `null` if it is unknown.
         * @returns the file's path, or `null`.
         */
        get_path(): string | null;
        /**
         * Gets the size for `file`.
         * @returns the file's size.
         */
        get_size(): number;
        /**
         * Atomically increments the reference count of `file` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffFile} or `null`.
         */
        ref(): DiffFile | null;
        /**
         * Atomically decrements the reference count of `file` by one.
         * If the reference count drops to 0, `file` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type DiffFindOptionsClass = typeof DiffFindOptions;
    /**
     * @gir-type Alias
     */
    type DiffFormatEmailOptionsClass = typeof DiffFormatEmailOptions;
    /**
     * Represents the hunk of a diff.
     * @gir-type Struct
     */
    abstract class DiffHunk {
        static $gtype: GObject.GType<DiffHunk>;

        // Methods

        get_header(): string;
        /**
         * Gets the number of lines in the new file.
         * @returns the number of lines in the new file.
         */
        get_new_lines(): number;
        /**
         * Gets the starting line number in the new file.
         * @returns the starting line number in the new file.
         */
        get_new_start(): number;
        /**
         * Gets the number of lines in the old file.
         * @returns the number of lines in the old file.
         */
        get_old_lines(): number;
        /**
         * Gets the starting line number in the old file.
         * @returns the starting line number in the old file.
         */
        get_old_start(): number;
        /**
         * Atomically increments the reference count of `hunk` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffHunk} or `null`.
         */
        ref(): DiffHunk | null;
        /**
         * Atomically decrements the reference count of `hunk` by one.
         * If the reference count drops to 0, `hunk` is freed.
         */
        unref(): void;
    }

    /**
     * Represents the line of a diff.
     * @gir-type Struct
     */
    abstract class DiffLine {
        static $gtype: GObject.GType<DiffLine>;

        // Methods

        /**
         * Gets the content in bytes.
         * @returns the content in bytes.
         */
        get_content(): Uint8Array;
        /**
         * Gets the content offset.
         * @returns the content offset.
         */
        get_content_offset(): number;
        /**
         * Gets the Line number in new file or -1 for deleted line.
         * @returns the line's old number of lines.
         */
        get_new_lineno(): number;
        /**
         * Gets the line number in old file or -1 for added line.
         * @returns the line's old line number.
         */
        get_old_lineno(): number;
        /**
         * Gets the {@link Ggit.DiffLineType} value.
         * @returns the {@link Ggit.DiffLineType} value.
         */
        get_origin(): DiffLineType;
        /**
         * Get the content of the diff line as UTF-8 encoded text.
         * @returns the content in utf-8 encoding or `null`.
         */
        get_text(): string | null;
        /**
         * Atomically increments the reference count of `line` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.DiffLine} or `null`.
         */
        ref(): DiffLine | null;
        /**
         * Atomically decrements the reference count of `line` by one.
         * If the reference count drops to 0, `line` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type DiffOptionsClass = typeof DiffOptions;
    /**
     * Represents a similarity metric.
     * @gir-type Struct
     */
    class DiffSimilarityMetric {
        static $gtype: GObject.GType<DiffSimilarityMetric>;

        // Constructors

        constructor(
            file_signature: DiffSimilarityMetricFileSignatureCallback,
            buffer_signature: DiffSimilarityMetricBufferSignatureCallback,
            free_signature: DiffSimilarityMetricFreeSignatureCallback,
            similarity: DiffSimilarityMetricSimilarityCallback,
        );

        static ['new'](
            file_signature: DiffSimilarityMetricFileSignatureCallback,
            buffer_signature: DiffSimilarityMetricBufferSignatureCallback,
            free_signature: DiffSimilarityMetricFreeSignatureCallback,
            similarity: DiffSimilarityMetricSimilarityCallback,
        ): DiffSimilarityMetric;

        // Methods

        /**
         * Copies `metric` into a newly allocated {@link Ggit.DiffSimilarityMetric}.
         * @returns a newly allocated {@link Ggit.DiffSimilarityMetric} or `null`.
         */
        copy(): DiffSimilarityMetric | null;
        /**
         * Frees `metric`.
         */
        free(): void;
    }

    /**
     * Represents a git fetch options.
     * @gir-type Struct
     */
    class FetchOptions {
        static $gtype: GObject.GType<FetchOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): FetchOptions;

        // Methods

        /**
         * Copies `fetch_options` into a newly allocated {@link Ggit.FetchOptions}.
         * @returns a newly allocated {@link Ggit.FetchOptions} or `null`.
         */
        copy(): FetchOptions | null;
        /**
         * Frees `fetch_options`.
         */
        free(): void;
        /**
         * Get how tags are being handled when fetching/downloading.
         * @returns a {@link Ggit.RemoteDownloadTagsType}.
         */
        get_download_tags(): RemoteDownloadTagsType;
        /**
         * Get the remote callbacks object or `null` if not set.
         * @returns the remote callbacks or `null`.
         */
        get_remote_callbacks(): RemoteCallbacks | null;
        /**
         * Set how tags are being handled when fetching/downloading.
         * @param download_tags a {@link Ggit.RemoteDownloadTagsType}.
         */
        set_download_tags(download_tags: RemoteDownloadTagsType | null): void;
        /**
         * Set the fetch options object.
         * @param callbacks a {@link Ggit.RemoteCallbacks} or `null`.
         */
        set_remote_callbacks(callbacks?: RemoteCallbacks | null): void;
    }

    /**
     * @gir-type Alias
     */
    type IndexClass = typeof Index;
    /**
     * Represents the entries in an index object.
     * @gir-type Struct
     */
    abstract class IndexEntries {
        static $gtype: GObject.GType<IndexEntries>;

        // Methods

        /**
         * Get a {@link Ggit.IndexEntry} by index. Note that the returned {@link Ggit.IndexEntry} is
         * _only_ valid as long as:
         *
         * 1) The associated index has been closed
         * 2) The entry has not been removed (see `ggit_index_remove()`)
         * 3) The index has not been refreshed (see `ggit_index_read()`)
         *
         * Changes to the {@link Ggit.IndexEntry} will be reflected in the index once written
         * back to disk using `ggit_index_write()`.
         * @param idx the index of the entry.
         * @returns a {@link Ggit.IndexEntry} or `null` if out of bounds.
         */
        get_by_index(idx: number): IndexEntry | null;
        /**
         * Get a {@link Ggit.IndexEntry} by index. Note that the returned {@link Ggit.IndexEntry} is
         * _only_ valid as long as:
         *
         * 1) The associated index has not been closed
         * 2) The entry has not been removed (see `ggit_index_remove()`)
         * 3) The index has not been refreshed (see `ggit_index_read()`)
         *
         * Changes to the {@link Ggit.IndexEntry} will be reflected in the index once written
         * back to disk using `ggit_index_write()`.
         *
         * `stage` indicates the stage to search the file for. Stages are used in the
         * index when merge conflicts occur, such that multiple versions of the same
         * file can be represented in the index. Stage 0 is associated with the working
         * tree, while stages 1 to 3 are associated with the various versions of the
         * file in a merge conflict. The special value -1 can be used to match the first
         * file encountered in any stage.
         * @param file the path to search.
         * @param stage stage to search.
         * @returns a {@link Ggit.IndexEntry} or `null` if it was not found.
         */
        get_by_path(file: Gio.File, stage: number): IndexEntry | null;
        /**
         * Atomically increments the reference count of `entries` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.IndexEntries} or `null`.
         */
        ref(): IndexEntries | null;
        /**
         * Get the number of {@link Ggit.IndexEntry} entries.
         * @returns the number of entries.
         */
        size(): number;
        /**
         * Atomically decrements the reference count of `entries` by one.
         * If the reference count drops to 0, `entries` is freed.
         */
        unref(): void;
    }

    /**
     * Represents the resolve undo entries in an index object.
     * @gir-type Struct
     */
    abstract class IndexEntriesResolveUndo {
        static $gtype: GObject.GType<IndexEntriesResolveUndo>;

        // Methods

        /**
         * Get a {@link Ggit.IndexEntryResolveUndo} by index. Note that the returned
         * {@link Ggit.IndexEntryResolveUndo} is _only_ valid as long as:
         *
         * 1) The associated index has been closed
         * 2) The entry has not been removed (see `ggit_index_remove()`)
         * 3) The index has not been refreshed (see `ggit_index_read()`)
         * @param idx the index of the entry.
         * @returns a {@link Ggit.IndexEntryResolveUndo} or `null`.
         */
        get(idx: number): IndexEntryResolveUndo | null;
        /**
         * Get an resolve_undo entry specified by path. The returned entry is read
         * only and should not be modified by the caller. If the entry could not be
         * found, `null` is returned.
         * @param file a {@link Gio.File}.
         * @returns a {@link Ggit.IndexEntryResolveUndo} or `null`.
         */
        get_by_file(file: Gio.File): IndexEntryResolveUndo | null;
        /**
         * Atomically increments the reference count of `entries` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.IndexEntriesResolveUndo} or `null`.
         */
        ref(): IndexEntriesResolveUndo | null;
        /**
         * Get the number of {@link Ggit.IndexEntryResolveUndo} entries.
         * @returns the number of entries.
         */
        size(): number;
        /**
         * Atomically decrements the reference count of `entries` by one.
         * If the reference count drops to 0, `entries` is freed.
         */
        unref(): void;
    }

    /**
     * Represents an index entry object.
     * @gir-type Struct
     */
    abstract class IndexEntry {
        static $gtype: GObject.GType<IndexEntry>;

        // Methods

        /**
         * Get the dev of the index entry.
         * @returns the dev.
         */
        get_dev(): number;
        /**
         * Get the file size of the index entry.
         * @returns the file size.
         */
        get_file_size(): number;
        /**
         * Get the flags of the index entry.
         * @returns the flags.
         */
        get_flags(): number;
        /**
         * Get the extended flags of the index entry.
         * @returns the extended flags.
         */
        get_flags_extended(): number;
        /**
         * Get the gid of the index entry.
         * @returns the gid.
         */
        get_gid(): number;
        /**
         * Get the oid of the index entry.
         * @returns the oid or `null`.
         */
        get_id(): OId | null;
        /**
         * Get the ino of the index entry.
         * @returns the ino.
         */
        get_ino(): number;
        /**
         * Get the mode of the index entry.
         * @returns the mode.
         */
        get_mode(): number;
        get_path(): string;
        /**
         * Get the uid of the index entry.
         * @returns the uid.
         */
        get_uid(): number;
        /**
         * Get whether the entry represents a conflict.
         * @returns `true` if the entry is a conflict, or `false` otherwise.
         */
        is_conflict(): boolean;
        /**
         * Atomically increments the reference count of `entry` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.IndexEntry} or `null`.
         */
        ref(): IndexEntry | null;
        /**
         * Set the index entry to point to a given commit. This sets the index entry
         * id to the commit id, changes the mode to #GGIT_FILE_MODE_COMMIT and updates
         * the timestamps to when the commit was made.
         * @param commit a {@link Ggit.Commit}.
         */
        set_commit(commit: Commit): void;
        /**
         * Set the dev of the index entry.
         * @param dev the dev.
         */
        set_dev(dev: number): void;
        /**
         * Set the file size of the index entry.
         * @param file_size the file size.
         */
        set_file_size(file_size: number): void;
        /**
         * Set the flags of the index entry.
         * @param flags the flags.
         */
        set_flags(flags: number): void;
        /**
         * Set the extended flags of the index entry.
         * @param flags_extended the extended flags.
         */
        set_flags_extended(flags_extended: number): void;
        /**
         * Set the gid of the index entry.
         * @param gid the gid.
         */
        set_gid(gid: number): void;
        /**
         * Set the oid of the index entry.
         * @param id the oid.
         */
        set_id(id?: OId | null): void;
        /**
         * Set the ino of the index entry.
         * @param ino the ino.
         */
        set_ino(ino: number): void;
        /**
         * Set the mode of the index entry.
         * @param mode the mode.
         */
        set_mode(mode: number): void;
        /**
         * Set the path of the index entry. The path should be relative to the working
         * directory.
         * @param path the path.
         */
        set_path(path?: string | null): void;
        /**
         * Set the uid of the index entry.
         * @param uid the uid.
         */
        set_uid(uid: number): void;
        /**
         * Fill the entry fields from statting `file`.
         * @param file the file to stat.
         * @returns `true` if the entry was filled from statting `file` successfully, `false` otherwise.
         */
        stat(file: Gio.File): boolean;
        /**
         * Atomically decrements the reference count of `entry` by one.
         * If the reference count drops to 0, `entry` is freed.
         */
        unref(): void;
    }

    /**
     * Represents an resolve undo index entry object.
     * @gir-type Struct
     */
    abstract class IndexEntryResolveUndo {
        static $gtype: GObject.GType<IndexEntryResolveUndo>;

        // Methods

        /**
         * Get the file of the index entry.
         * @returns a {@link Gio.File} or `null`.
         */
        get_file(): Gio.File | null;
        /**
         * Get the oid of the index entry.
         * @param stage the stage (0, 1 or 2).
         * @returns the oid or `null`.
         */
        get_id(stage: number): OId | null;
        /**
         * Get the mode of the index entry. The returned mode contains the modes from
         * stage 1, 2 and 3.
         * @param stage the stage (0, 1 or 2).
         * @returns the mode.
         */
        get_mode(stage: number): number;
        /**
         * Atomically increments the reference count of `entry` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.IndexEntryResolveUndo} or `null`.
         */
        ref(): IndexEntryResolveUndo | null;
        /**
         * Atomically decrements the reference count of `entry` by one.
         * If the reference count drops to 0, `entry` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type MailmapClass = typeof Mailmap;
    /**
     * Represents the options used when merging.
     * @gir-type Struct
     */
    class MergeOptions {
        static $gtype: GObject.GType<MergeOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): MergeOptions;

        // Methods

        /**
         * Copies `merge_options` into a newly allocated {@link Ggit.MergeOptions}.
         * @returns a newly allocated {@link Ggit.MergeOptions} or `null`.
         */
        copy(): MergeOptions | null;
        /**
         * Frees `merge_options`.
         */
        free(): void;
        /**
         * Get flags for handling conflicting content.
         * @returns the file favor.
         */
        get_file_favor(): MergeFileFavor;
        /**
         * Get file merging flags.
         * @returns the file merging flags.
         */
        get_file_flags(): MergeFileFlags;
        /**
         * Get the tree flags to use for merging.
         * @returns the flags.
         */
        get_flags(): MergeFlags;
        /**
         * Get the rename threshold (defaults to 50). If `GGIT_MERGE_TREE_FIND_RENAMES`
         * is enabled, added files will be compared with deleted files to
         * determine their similarity. Files that are more similar than the rename
         * threshold (percentage-wise) will be treated as a rename.
         * @returns the rename threshold.
         */
        get_rename_threshold(): number;
        /**
         * Get the similarity metric.
         * @returns the similarity metric, or `null`.
         */
        get_similarity_metric(): DiffSimilarityMetric | null;
        /**
         * Get the maximum number of similarity sources to examine for renames (defaults to 200).
         * If the number of rename candidates (add / delete pairs) is greater than
         * this value, inexact rename detection is aborted.
         * @returns the target limit.
         */
        get_target_limit(): number;
        /**
         * Set flags for handling conflicting content.
         * @param file_favor the file favor.
         */
        set_file_favor(file_favor: MergeFileFavor | null): void;
        /**
         * Set file merging flags.
         * @param file_flags the file flags.
         */
        set_file_flags(file_flags: MergeFileFlags | null): void;
        /**
         * @param flags
         */
        set_flags(flags: MergeFlags | null): void;
        /**
         * Set the rename threshold (defaults to 50). If `GGIT_MERGE_TREE_FIND_RENAMES`
         * is enabled, added files will be compared with deleted files to
         * determine their similarity. Files that are more similar than the rename
         * threshold (percentage-wise) will be treated as a rename.
         * @param rename_threshold similarity to consider a file renamed.
         */
        set_rename_threshold(rename_threshold: number): void;
        /**
         * Set the similarity metric, or `null` for the default similarity metric.
         * @param metric a `GgitSimilarityMetric`.
         */
        set_similarity_metric(metric: DiffSimilarityMetric): void;
        /**
         * Set the maximum number of similarity sources to examine for renames (defaults to 200).
         * If the number of rename candidates (add / delete pairs) is greater than
         * this value, inexact rename detection is aborted.
         * @param target_limit maximum similarity source to examine for renames.
         */
        set_target_limit(target_limit: number): void;
    }

    /**
     * @gir-type Alias
     */
    type NativeClass = typeof Native;
    /**
     * Represents a note object.
     * @gir-type Struct
     */
    abstract class Note {
        static $gtype: GObject.GType<Note>;

        // Methods

        /**
         * Gets the note object's id.
         * @returns the object's id or `null`.
         */
        get_id(): OId | null;
        /**
         * Gets the note message.
         * @returns the note message or `null`.
         */
        get_message(): string | null;
        /**
         * Atomically increments the reference count of `note` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.Note} or `null`.
         */
        ref(): Note | null;
        /**
         * Atomically decrements the reference count of `note` by one.
         * If the reference count drops to 0, `note` is freed.
         */
        unref(): void;
    }

    /**
     * Represents a unique ID of any object.
     * @gir-type Struct
     */
    class OId {
        static $gtype: GObject.GType<OId>;

        // Constructors

        constructor(raw: Uint8Array | string);

        static new_from_raw(raw: Uint8Array | string): OId;

        static new_from_string(str: string): OId;

        // Methods

        /**
         * Compare two {@link Ggit.OId} structures.
         * @param b second {@link Ggit.OId}.
         * @returns <0, 0, >0 if a < b, a == b, a > b.
         */
        compare(b: OId): number;
        /**
         * Copies `oid` into a newly allocated {@link Ggit.OId}.
         * @returns a newly allocated {@link Ggit.OId}.
         */
        copy(): OId | null;
        /**
         * Compares two {@link Ggit.OId} for equality.
         * @param b a {@link Ggit.OId}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise
         */
        equal(b: OId): boolean;
        /**
         * Frees `oid`.
         */
        free(): void;
        /**
         * Check whether the object id has a given prefix. Note that the prefix is
         * specified in hexadecimal ASCII.
         * @param prefix a prefix.
         * @returns `true` if the id has the given prefix, `false` otherwise.
         */
        has_prefix(prefix: string): boolean;
        /**
         * Computes a hash value for a git object identifier.
         * @returns the hash value
         */
        hash(): number;
        /**
         * Get whether the oid contains only zeros.
         * @returns `true` if the oid contains only zeros, `false` otherwise.
         */
        is_zero(): boolean;
        /**
         * Converts `oid` into a readable string.
         * @returns a newly allocated string representing `oid` or `null`.
         */
        to_string(): string | null;
    }

    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Alias
     */
    type ObjectFactoryBaseClass = typeof ObjectFactoryBase;
    /**
     * @gir-type Alias
     */
    type ObjectFactoryClass = typeof ObjectFactory;
    /**
     * Represents a patch object.
     * @gir-type Struct
     */
    class Patch {
        static $gtype: GObject.GType<Patch>;

        // Constructors

        constructor(
            old_blob?: Blob | null,
            old_as_path?: string | null,
            new_blob?: Blob | null,
            new_as_path?: string | null,
            diff_options?: DiffOptions | null,
        );

        static new_from_blobs(
            old_blob?: Blob | null,
            old_as_path?: string | null,
            new_blob?: Blob | null,
            new_as_path?: string | null,
            diff_options?: DiffOptions | null,
        ): Patch;

        static new_from_diff(diff: Diff, idx: number): Patch;

        // Methods

        /**
         * Get the diff delta corresponding to the patch.
         * @returns the {@link Ggit.DiffDelta} of the patch or `null`.
         */
        get_delta(): DiffDelta | null;
        /**
         * Get the `idx`'th hunk in the patch.
         * @param idx the hunk index.
         * @returns a new {@link Ggit.DiffHunk} or `null` on error.
         */
        get_hunk(idx: number): DiffHunk | null;
        /**
         * Get the line statistics of the patch.
         * @returns `true` if successfull, `false` otherwise.
         */
        get_line_stats(): [boolean, number, number, number];
        /**
         * Get the number of hunks in the patch.
         * @returns the number of hunks.
         */
        get_num_hunks(): number;
        /**
         * Get the number of lines in `hunk`.
         * @param hunk the hunk index.
         * @returns the number of lines.
         */
        get_num_lines_in_hunk(hunk: number): number;
        /**
         * Atomically increments the reference count of `patch` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.Patch} or `null`.
         */
        ref(): Patch | null;
        /**
         * Write the contents of a patch to the provided stream.
         * @param stream a {@link Gio.OutputStream}.
         * @returns `true` if the patch was written successfully, `false` otherwise.
         */
        to_stream(stream: Gio.OutputStream): boolean;
        /**
         * Gets the content of a patch as a single diff text.
         * @returns the content of a patch as a single diff text or `null`.
         */
        to_string(): string | null;
        /**
         * Atomically decrements the reference count of `patch` by one.
         * If the reference count drops to 0, `patch` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type ProxyOptionsClass = typeof ProxyOptions;
    /**
     * @gir-type Alias
     */
    type PushOptionsClass = typeof PushOptions;
    /**
     * @gir-type Alias
     */
    type RebaseClass = typeof Rebase;
    /**
     * Represents a rebase operation.
     * @gir-type Struct
     */
    abstract class RebaseOperation {
        static $gtype: GObject.GType<RebaseOperation>;

        // Methods

        /**
         * Gets the executable the user has requested be run.  This will only
         * be populated for operations of type `GGIT_REBASE_OPERATION_EXEC`.
         * @returns the executable the user has requested be run or `null`.
         */
        get_exec(): string | null;
        /**
         * Gets the commit ID being cherry-picked. This will be populated for
         * all operations except those of type `GGIT_REBASE_OPERATION_EXEC`.
         * @returns the commit ID being cherry-picked or `null`.
         */
        get_id(): OId | null;
        /**
         * Gets the type of rebase operation.
         * @returns a {@link Ggit.RebaseOperationType}.
         */
        get_operation_type(): RebaseOperationType;
        /**
         * Atomically increments the reference count of `rebase_operation` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a newly allocated {@link Ggit.RebaseOperation} or `null`.
         */
        ref(): RebaseOperation | null;
        /**
         * Atomically decrements the reference count of `rebase_operation` by one.
         * If the reference count drops to 0, `rebase_operation` is freed.
         */
        unref(): void;
    }

    /**
     * Represents the options used when rebasing.
     * @gir-type Struct
     */
    class RebaseOptions {
        static $gtype: GObject.GType<RebaseOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): RebaseOptions;

        // Methods

        /**
         * Copies `rebase_options` into a newly allocated {@link Ggit.RebaseOptions}.
         * @returns a newly allocated {@link Ggit.RebaseOptions} or `null`.
         */
        copy(): RebaseOptions | null;
        /**
         * Frees `rebase_options`.
         */
        free(): void;
        /**
         * Get the checkout options object or `null` if not set.
         * @returns the checkout options or `null`.
         */
        get_checkout_options(): CheckoutOptions | null;
        /**
         * Gets whether you want a quiet rebase experience.
         * @returns returns whether you want a quiet rebase experience.
         */
        get_quiet(): boolean;
        /**
         * Gets the the name of the notes reference used to rewrite notes for rebased
         * commits when finishing the rebase or `null` if not set.
         * @returns the name of the notes reference or `null`.
         */
        get_rewrite_notes_ref(): string | null;
        /**
         * @param checkout_options
         */
        set_checkout_options(checkout_options: CheckoutOptions): void;
        /**
         * Used by `ggit_rebase_init()`, this will instruct other clients working
         * on this rebase that you want a quiet rebase experience, which they
         * may choose to provide in an application-specific manner.  This has no
         * effect upon libgit2-glib directly, but is provided for interoperability
         * between Git tools.
         * @param quiet whether you want a quiet rebase experience.
         */
        set_quiet(quiet: boolean): void;
        /**
         * Used by `ggit_rebase_finish()`, this is the name of the notes reference
         * used to rewrite notes for rebased commits when finishing the rebase;
         * if `null`, the contents of the configuration option `notes.rewriteRef`
         * is examined, unless the configuration option `notes.rewrite.rebase`
         * is set to false.  If `notes.rewriteRef` is also `null`, notes will
         * not be rewritten.
         * @param rewrite_notes_ref the name of the notes reference.
         */
        set_rewrite_notes_ref(rewrite_notes_ref: string): void;
    }

    /**
     * @gir-type Alias
     */
    type RefClass = typeof Ref;
    /**
     * Reprensents a git reference specification.
     * @gir-type Struct
     */
    abstract class RefSpec {
        static $gtype: GObject.GType<RefSpec>;

        // Methods

        /**
         * Gets the `refspec`'s destination.
         * @returns the refspec's destination or `null`.
         */
        get_destination(): string | null;
        /**
         * Gets the `refspec`'s source.
         * @returns the refspec's source or `null`.
         */
        get_source(): string | null;
        /**
         * Whether updating is done forcefully.
         * @returns if updating is done forcefully.
         */
        is_forced(): boolean;
        /**
         * Atomically increments the reference count of `refspec` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.RefSpec} or `null`.
         */
        ref(): RefSpec | null;
        /**
         * Atomically decrements the reference count of `refspec` by one.
         * If the reference count drops to 0, `refspec` is freed.
         */
        unref(): void;
    }

    /**
     * Represents a reflog.
     * @gir-type Struct
     */
    abstract class Reflog {
        static $gtype: GObject.GType<Reflog>;

        // Methods

        /**
         * Creates a reflog entry.
         * @param oid a {@link Ggit.OId}.
         * @param committer a {@link Ggit.Signature}.
         * @param message the message.
         * @returns `true` if the reflog was successfully created, or `false` if error is set.
         */
        append(oid: OId, committer: Signature, message: string): boolean;
        /**
         * Gets the number of log entries in `reflog`.
         * @returns the number of log entries.
         */
        get_entry_count(): number;
        /**
         * Gets the {@link Ggit.ReflogEntry} at `idx` in `reflog`, or `null` if not found.
         * @param idx the position to lookup.
         * @returns the reflog entry at the index, or `null` if not found.
         */
        get_entry_from_index(idx: number): ReflogEntry | null;
        /**
         * Atomically increments the reference count of `reflog` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns the passed in {@link Ggit.Reflog} or `null`.
         */
        ref(): Reflog | null;
        /**
         * Renames the reflog for to `new_name`, on error `error` is set.
         * @param new_name the new name of the reference.
         */
        rename(new_name: string): boolean;
        /**
         * Atomically decrements the reference count of `reflog` by one.
         * If the reference count drops to 0, `reflog` is freed.
         */
        unref(): void;
        /**
         * Write the reflog to disk.
         * @returns `true` if the reflog was successfully written, or `false` on error.
         */
        write(): boolean;
    }

    /**
     * Represents a reflog entry.
     * @gir-type Struct
     */
    abstract class ReflogEntry {
        static $gtype: GObject.GType<ReflogEntry>;

        // Methods

        /**
         * Gets the committer as a {@link Ggit.Signature}.
         * @returns the committer or `null`.
         */
        get_committer(): Signature | null;
        /**
         * Gets the message.
         * @returns the message or `null`.
         */
        get_message(): string | null;
        /**
         * Gets the new {@link Ggit.OId}.
         * @returns the new oid or `null`.
         */
        get_new_id(): OId | null;
        /**
         * Gets the old {@link Ggit.OId}.
         * @returns the old oid or `null`.
         */
        get_old_id(): OId | null;
        /**
         * Atomically increments the reference count of `reflog_entry` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns the passed in {@link Ggit.ReflogEntry} or `null`.
         */
        ref(): ReflogEntry | null;
        /**
         * Atomically decrements the reference count of `reflog_entry` by one.
         * If the reference count drops to 0, `reflog_entry` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type RemoteCallbacksClass = typeof RemoteCallbacks;
    /**
     * @gir-type Alias
     */
    type RemoteClass = typeof Remote;
    /**
     * Represents a git remote head.
     * @gir-type Struct
     */
    abstract class RemoteHead {
        static $gtype: GObject.GType<RemoteHead>;

        // Methods

        /**
         * Get the local oid of the remote head.
         * @returns the local oid or `null`.
         */
        get_local_oid(): OId | null;
        /**
         * Get the remote head name.
         * @returns the remote head name or `null`.
         */
        get_name(): string | null;
        /**
         * Get the remote oid of the remote head.
         * @returns the remote oid or `null`.
         */
        get_oid(): OId | null;
        /**
         * Get whether the remote head is local.
         * @returns whether the remote head is local.
         */
        is_local(): boolean;
        ref(): RemoteHead;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type RepositoryClass = typeof Repository;
    /**
     * Represents the options used when reverting.
     * @gir-type Struct
     */
    class RevertOptions {
        static $gtype: GObject.GType<RevertOptions>;

        // Constructors

        constructor(mainline: number, merge_options?: MergeOptions | null, checkout_options?: CheckoutOptions | null);

        static ['new'](
            mainline: number,
            merge_options?: MergeOptions | null,
            checkout_options?: CheckoutOptions | null,
        ): RevertOptions;

        // Methods

        /**
         * Copies `revert_options` into a newly allocated {@link Ggit.RevertOptions}.
         * @returns a newly allocated {@link Ggit.RevertOptions} or `null`.
         */
        copy(): RevertOptions | null;
        /**
         * Frees `revert_options`.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type RevisionWalkerClass = typeof RevisionWalker;
    /**
     * @gir-type Alias
     */
    type SignatureClass = typeof Signature;
    /**
     * Represents the options used when creating getting file status.
     * @gir-type Struct
     */
    class StatusOptions {
        static $gtype: GObject.GType<StatusOptions>;

        // Constructors

        constructor(options: StatusOption, show: StatusShow, pathspec?: string[] | null);

        static ['new'](options: StatusOption, show: StatusShow, pathspec?: string[] | null): StatusOptions;

        // Methods

        /**
         * Copies `status_options` into a newly allocated {@link Ggit.StatusOptions}.
         * @returns a newly allocated {@link Ggit.StatusOptions} or `null`.
         */
        copy(): StatusOptions | null;
        /**
         * Frees `status_options`.
         */
        free(): void;
    }

    /**
     * Represents a git submodule.
     * @gir-type Struct
     */
    abstract class Submodule {
        static $gtype: GObject.GType<Submodule>;

        // Methods

        /**
         * Gets whether to fetch recursively. See see gitmodules(5) fetchRecurseSubmodules.
         * @returns whether or not fetch recursively.
         */
        get_fetch_recurse(): boolean;
        get_head_id(): OId;
        /**
         * Gets a {@link Ggit.SubmoduleIgnore}. See see gitmodules(5) ignore.
         * @returns the {@link Ggit.SubmoduleIgnore}.
         */
        get_ignore(): SubmoduleIgnore;
        /**
         * Gets the OID for the submodule in the index or `null` if there is no index.
         * @returns the OID for the submodule in the index or `null`.
         */
        get_index_id(): OId | null;
        /**
         * Gets the name of the submodule from .gitmodules.
         * @returns the name of the submodule from .gitmodules or `null`.
         */
        get_name(): string | null;
        /**
         * Gets the containing repository for a submodule.
         * @returns the containing repository for a submodule or `null`.
         */
        get_owner(): Repository | null;
        /**
         * Gets the path to the submodule from the repo working directory.
         * It is almost always the same as the name.
         * See `ggit_submodule_get_name()`.
         * @returns the path to the submodule from the repo working directory or `null`.
         */
        get_path(): string | null;
        /**
         * Gets a {@link Ggit.SubmoduleUpdate}. See see gitmodules(5) update.
         * @returns the {@link Ggit.SubmoduleUpdate}.
         */
        get_update(): SubmoduleUpdate;
        /**
         * Gets the url for the submodule or `null` if the submodule has been deleted
         * but not yet committed.
         * @returns the url for the submodule or `null`.
         */
        get_url(): string | null;
        /**
         * Gets the OID for the submodule in the current working directory.
         * Corresponds to looking up 'HEAD' in the checked out submodule.
         * If there are pending changes in the index or anything
         * else, this won't notice that.  You should call `ggit_submodule_status()`
         * for a more complete picture about the state of the working directory.
         * @returns the OID for the submodule in the current working directory or `null`.
         */
        get_workdir_id(): OId | null;
        /**
         * Just like "git submodule init", this copies information about the
         * submodule into ".git/config".  You can use the accessor functions
         * above to alter the in-memory git_submodule object and control what
         * is written to the config, overriding what is in .gitmodules.
         * @param overwrite forces existing entries to be updated.
         */
        init(overwrite: boolean): void;
        /**
         * Open the repository for a submodule. Multiple calls to this function
         * will return distinct {@link Ggit.Repository} objects. Only submodules which are
         * checked out in the working directory can be opened.
         * @returns the opened {@link Ggit.Repository} or `null` in case of an                           error.
         */
        open(): Repository | null;
        /**
         * Atomically increments the reference count of `submodule` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns the passed in {@link Ggit.Submodule} or `null`.
         */
        ref(): Submodule | null;
        /**
         * Rereads submodule info from config, index, and HEAD.
         * Call this if you have reason to believe that it has changed.
         * @param force reload even if the data doesn't seem out of date.
         */
        reload(force: boolean): void;
        /**
         * Copies the information about the submodules URL into the checked out
         * submodule config, acting like "git submodule sync".  This is useful if
         * you have altered the URL for the submodule (or it has been altered by a
         * fetch of upstream changes) and you need to update your local repo.
         */
        sync(): void;
        /**
         * Atomically decrements the reference count of `submodule` by one.
         * If the reference count drops to 0, `remote` is freed.
         */
        unref(): void;
        /**
         * Update a submodule. This will clone a missing submodule and checkout
         * the subrepository to the commit specified in the index of the containing
         * repository. If the submodule repository doesn't contain the target commit
         * (e.g. because fetchRecurseSubmodules isn't set), then the submodule is
         * fetched using the fetch options supplied in options.
         * @param init If the submodule is not initialized, setting this flag to true        will initialize the submodule before updating. Otherwise, this        will return an error if attempting to update an uninitialzed        repository. but setting this to true forces them to be updated.
         * @param options a {@link Ggit.SubmoduleUpdateOptions} object.
         */
        update(init: boolean, options: SubmoduleUpdateOptions): void;
    }

    /**
     * @gir-type Alias
     */
    type SubmoduleUpdateOptionsClass = typeof SubmoduleUpdateOptions;
    /**
     * @gir-type Alias
     */
    type TagClass = typeof Tag;
    /**
     * Represents transfering progress.
     * @gir-type Struct
     */
    abstract class TransferProgress {
        static $gtype: GObject.GType<TransferProgress>;

        // Methods

        /**
         * Copies `progress` into a newly allocated {@link Ggit.TransferProgress}.
         * @returns a newly allocated {@link Ggit.TransferProgress} or `null`.
         */
        copy(): TransferProgress | null;
        /**
         * Frees `progress`.
         */
        free(): void;
        /**
         * Gets the indexed objects of the transfer.
         * @returns the indexed objects of the transfer.
         */
        get_indexed_objects(): number;
        /**
         * Gets the received bytes of the transfer.
         * @returns the received bytes of the transfer.
         */
        get_received_bytes(): number;
        /**
         * Gets the received objects of the transfer.
         * @returns the received objects of the transfer.
         */
        get_received_objects(): number;
        /**
         * Gets the total objects of the transfer.
         * @returns the total objects of the transfer.
         */
        get_total_objects(): number;
    }

    /**
     * @gir-type Alias
     */
    type TreeBuilderClass = typeof TreeBuilder;
    /**
     * @gir-type Alias
     */
    type TreeClass = typeof Tree;
    /**
     * Represents an entry in a tree.
     * @gir-type Struct
     */
    abstract class TreeEntry {
        static $gtype: GObject.GType<TreeEntry>;

        // Methods

        /**
         * Gets the {@link Ggit.FileMode} of a tree entry.
         * @returns the {@link Ggit.FileMode} of a tree entry.
         */
        get_file_mode(): FileMode;
        /**
         * Get the {@link Ggit.OId} of the entry.
         * @returns a {@link Ggit.OId} or `null`.
         */
        get_id(): OId | null;
        /**
         * Get the name of the tree entry.
         * @returns the name of the tree entry or `null`.
         */
        get_name(): string | null;
        /**
         * Get the type of the tree entry object.
         * @returns a {@link GObject.GType}.
         */
        get_object_type(): GObject.GType;
        /**
         * Atomically increments the reference count of `entry` by one.
         * This function is MT-safe and may be called from any thread.
         * @returns a {@link Ggit.TreeEntry} or `null`.
         */
        ref(): TreeEntry | null;
        /**
         * Atomically decrements the reference count of `entry` by one.
         * If the reference count drops to 0, `entry` is freed.
         */
        unref(): void;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Ggit;

// END
