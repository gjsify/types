
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './ggit-1.0-ambient.d.ts';
import './ggit-1.0-import.d.ts';
/**
 * Ggit-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Ggit {

/**
 * The type of a branch.
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
enum CloneLocal {
    AUTO,
    LOCAL,
    NO_LOCAL,
    NO_LINKS,
}
/**
 * Priority level of a config file.
 * These priority levels correspond to the natural escalation logic
 * (from higher to lower) when searching for config entries in git.git.
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
 * Describes the type of change the delta is.
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
 * When producing a binary diff, the binary data returned will be
 * either the deflated full ("literal") contents of the file, or
 * the deflated binary delta between the two sides (whichever is
 * smaller).
 */
enum DiffBinaryType {
    NONE,
    LITERAL,
    DELTA,
}
/**
 * Possible output formats for diff data.
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
 * These values describe where a line came from and will be passed to
 * the #GgitDiffLineCallback when iterating over a diff.
 * 
 * The #GGIT_DIFF_LINE_FILE_HDR, #GGIT_DIFF_LINE_HUNK_HDR and
 * #GGIT_DIFF_LINE_BINARY values are only sent when the diff is being printed.
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
enum Direction {
    FETCH,
    PUSH,
}
/**
 * Error codes for the %GGIT_ERROR error domain.
 */
enum Error {
    /**
     * A generic error for when an operation fails.
     */
    GIT_ERROR,
    /**
     * Input does not exist in the scope searched.
     */
    NOTFOUND,
    /**
     * A reference with this name already exists.
     */
    EXISTS,
    /**
     * The given error is ambiguous.
     */
    AMBIGUOUS,
    /**
     * The buffer is too short.
     */
    BUFS,
    /**
     * Skip and passthrough the given ODB backend.
     */
    PASSTHROUGH,
    /**
     * The iteration has finished.
     */
    ITEROVER,
}
enum FileMode {
    UNREADABLE,
    TREE,
    BLOB,
    BLOB_EXECUTABLE,
    LINK,
    COMMIT,
}
enum MergeFileFavor {
    NORMAL,
    OURS,
    THEIRS,
    UNION,
}
/**
 * Valid stages for pack building.
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
 * The type of proxy to use.
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
 * Type of rebase operation in-progress.
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
 * Describes the type a reference is.
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
 * Argument to the completion callback which tells it which operation finished.
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
 * Automatic tag following option
 * 
 * Lets us select the --tags option to use.
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
 * Describes the type of reset to perform.
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
 * Show options for #ggit_repository_file_status_foreach. Determines which
 * files are included in the status.
 */
enum StatusShow {
    /**
     * receive one callback for each file,
     * even if the file is in both the index and the workdir (combining #GgitStatusFlags).
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
 * Describes which submodules should be ignored.
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
 * Options for submodule recurse.
 * Represents the value of `submodule.$name.fetchRecurseSubmodules`
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
 * Describes how a submodule should be updated.
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
 * Describes in which order a tree walk should be performed.
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
 * Attribute check flags indicate the order in which to check for gitattributes.
 * git core uses `GGIT_ATTRIBUTE_CHECK_FILE_THEN_INDEX` for all operations,
 * except on checkout, where it uses `GGIT_ATTRIBUTE_CHECK_INDEX_THEN_FILE`.
 * @bitfield 
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
enum CheckoutNotifyFlags {
    NONE,
    CONFLICT,
    DIRTY,
    UPDATED,
    UNTRACKED,
    IGNORED,
    ALL,
}
enum CheckoutStrategy {
    NONE,
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
    UPDATE_SUBMODULES,
    UPDATE_SUBMODULES_IF_CHANGED,
}
/**
 * Describes how something should be created.
 * @bitfield 
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
enum Credtype {
    USERPASS_PLAINTEXT,
    SSH_KEY,
    SSH_CUSTOM,
    DEFAULT,
    SSH_INTERACTIVE,
}
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
 * Describes the diff file and/or delta flags
 * @bitfield 
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
enum DiffFormatEmailFlags {
    NONE,
    EXCLUDE_SUBJECT_PATCH_MARKER,
}
/**
 * How the diff should be generated.
 * @bitfield 
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
enum FeatureFlags {
    THREADS,
    HTTPS,
    SSH,
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
 * @bitfield 
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
 * The type of sorting mode for the revision walker.
 * @bitfield 
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
 * Describes how a stash should be applied.
 * @bitfield 
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
 * Describes a file's status.
 * @bitfield 
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
 * Status options specified when using #ggit_repository_file_status_foreach.
 * @bitfield 
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
 * FIXME
 * @bitfield 
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
/**
 * The build type of the installed build.
 */
const BUILD_TYPE: string
/**
 * libgit2-glib major version component (e.g. 1 if %GGIT_VERSION is 1.2.3)
 */
const MAJOR_VERSION: number
/**
 * libgit2-glib minor version component (e.g. 2 if %GGIT_VERSION is 1.2.3)
 */
const MINOR_VERSION: number
/**
 * libgit2-glib version, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
/**
 * Error domain for Ggit functions.
 * Errors in this domain will be from the GgitError enumeration.
 * See #GError for information on error domains.
 */
function error_quark(): GLib.Quark
/**
 * Gets the features of the library.
 * @returns a #GgitFeatureFlags.
 */
function get_features(): FeatureFlags
/**
 * Call this function before using any other libgit2-glib function.
 */
function init(): void
/**
 * Prettify a commit message by removing excess whitespace and making sure the
 * last line ends with a newline. If `strip_comments` is %TRUE, then lines
 * starting with a `comment_char` will be removed.
 * @param message the message.
 * @param strip_comments whether to strip comments.
 * @param comment_char comment character.
 * @returns the prettified message.
 */
function message_prettify(message: string, strip_comments: boolean, comment_char: number): string | null
/**
 * The type of the callback functions for retrieving values from a #GgitConfig.
 * See ggit_config_foreach().
 * @callback 
 * @param entry a #GgitConfigEntry.
 * @returns 0 to go for the next config value or a #GgitError in case there was          an error.
 */
interface ConfigCallback {
    (entry: ConfigEntry): number
}
/**
 * The type of the callback functions for retrieving values from a #GgitConfig
 * using a regular expression. See ggit_config_match_foreach().
 * @callback 
 * @param match_info the match
 * @param value the value
 * @returns 0 to go for the next config value or a #GgitError in case there was          an error.
 */
interface ConfigMatchCallback {
    (match_info: GLib.MatchInfo, value: string): number
}
/**
 * Signature of a function which acquires a credential object.
 * @callback 
 * @param url the resource for which we are demanding a credential.
 * @param username_from_url The username that was embedded in a "user`host"`                                   remote url, or NULL if not included.
 * @param allowed_types a bitmask stating which cred types are OK to return.
 * @param cred newly created credential object.
 */
interface CredAcquireCallback {
    (url: string, username_from_url: string | null, allowed_types: number, cred: Cred): number
}
/**
 * Called for each file.
 * @callback 
 * @param delta a #GgitDiffDelta.
 * @param binary a #GgitDiffBinary.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface DiffBinaryCallback {
    (delta: DiffDelta, binary: DiffBinary): number
}
/**
 * Called for each file.
 * @callback 
 * @param delta a #GgitDiffDelta.
 * @param progress the progress.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface DiffFileCallback {
    (delta: DiffDelta, progress: number): number
}
/**
 * Called for each hunk.
 * @callback 
 * @param delta a #GgitDiffDelta.
 * @param hunk a #GgitDiffHunk.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface DiffHunkCallback {
    (delta: DiffDelta, hunk: DiffHunk): number
}
/**
 * Called for each line.
 * @callback 
 * @param delta a #GgitDiffDelta.
 * @param hunk a #GgitDiffHunk.
 * @param line a #GgitDiffLine.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface DiffLineCallback {
    (delta: DiffDelta, hunk: DiffHunk | null, line: DiffLine): number
}
interface DiffSimilarityMetricBufferSignatureCallback {
    (file: DiffFile, buf: string, buflen: number, out: any | null): number
}
interface DiffSimilarityMetricFileSignatureCallback {
    (file: DiffFile, fullpath: string, out: any | null): number
}
interface DiffSimilarityMetricFreeSignatureCallback {
    (signature: any | null): void
}
interface DiffSimilarityMetricSimilarityCallback {
    (score: number, signature_a: any | null, signature_b: any | null): number
}
/**
 * When iterating over all the notes, callback that will be
 * issued per note. See ggit_repository_note_foreach().
 * @callback 
 * @param blob_id id of the blob containing the message.
 * @param annotated_object_id id of the git object being annotated.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface NoteCallback {
    (blob_id: OId, annotated_object_id: OId): number
}
/**
 * The type of the callback functions for retrieving the references
 * in a #GgitRepository. See ggit_repository_references_foreach().
 * @callback 
 * @param reference the reference.
 * @returns 0 to go for the next references or a #GgitError in case there was an error.
 */
interface ReferencesCallback {
    (reference: Ref): number
}
/**
 * The type of the callback functions for retrieving the references
 * in a #GgitRepository. See ggit_repository_references_foreach_name().
 * @callback 
 * @param name the name of the reference
 * @returns 0 to go for the next references or a #GgitError in case there was an error.
 */
interface ReferencesNameCallback {
    (name: string): number
}
/**
 * The type of the callback functions for listing the references of a
 * #GgitRemote. See ggit_remote_list().
 * @callback 
 * @param name the name of the reference.
 * @param oid the reference's oid.
 * @param loid the reference's loid.
 * @param local if available locally.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface RemoteListCallback {
    (name: string, oid: OId, loid: OId, local: boolean): number
}
/**
 * When iterating over all the stashed states, callback that will be
 * issued per entry. See ggit_repository_stash_foreach().
 * @callback 
 * @param index the position within the stash list. 0 points to the most recent stashed state.
 * @param message the stash message.
 * @param stash_oid the commit oid of the stashed state.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface StashCallback {
    (index: number, message: string, stash_oid: OId): number
}
/**
 * The type of the callback functions for retrieving the status of the files
 * in a #GgitRepository. See ggit_repository_file_status_foreach().
 * @callback 
 * @param path the file to retrieve status for, rooted at the repository working dir.
 * @param status_flags the status value.
 * @returns 0 to go for the next file or a #GgitError in case there was an error.
 */
interface StatusCallback {
    (path: string, status_flags: StatusFlags): number
}
/**
 * The type of the callback functions for retrieving the submodules
 * in a #GgitRepository. See ggit_repository_submodule_foreach().
 * @callback 
 * @param submodule a #GgitSubmodule.
 * @param name the name of the submodule.
 * @returns 0 to go for the next submodule or a #GgitError in case there was an error.
 */
interface SubmoduleCallback {
    (submodule: Submodule, name: string): number
}
/**
 * When iterating over all the tags, callback that will be
 * issued per entry. See ggit_repository_tag_foreach().
 * @callback 
 * @param name the tag name.
 * @param tag_oid the tag oid.
 * @returns 0 to go continue or a #GgitError in case there was an error.
 */
interface TagCallback {
    (name: string, tag_oid: OId): number
}
/**
 * Progress callbacks during indexing.
 * @callback 
 * @param stats a #GgitTransferProgress.
 * @returns a value less than zero to cancel the transfer.
 */
interface TransferProgressCallback {
    (stats: TransferProgress): number
}
/**
 * The type of the callback functions for walking a tree.
 * See ggit_tree_walk().
 * @callback 
 * @param root the current (relative) root of the entry
 * @param entry the tree entry
 * @returns 0 to go for the next entry or a #GgitError in case there was an error.
 */
interface TreeWalkCallback {
    (root: string, entry: TreeEntry): number
}
module Blame {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Blame {

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Blame

    /**
     * Get blame data for a file that has been modified in memory. `blame` is a
     * pre-calculated blame for the in-odb history of the file. This means that once
     * a file blame is completed (which can be expensitve), updating the buffer
     * blame is very fast.
     * 
     * Lines that differ between the buffer and the committed version are marked as
     * having a zero id for their #ggit_blame_hunk_get_final_commit_id.
     * @param buffer the contents of the file.
     * @returns a #GgitBlame or %NULL.
     */
    from_buffer(buffer: Uint8Array): Blame | null
    get_hunk_by_index(idx: number): BlameHunk
    get_hunk_by_line(line: number): BlameHunk
    get_hunk_count(): number

    // Class property signals of Ggit-1.0.Ggit.Blame

    connect(sigName: "notify::native", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Blame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a blame.
 * @class 
 */
class Blame extends Native {

    // Own properties of Ggit-1.0.Ggit.Blame

    static name: string
    static $gtype: GObject.GType<Blame>

    // Constructors of Ggit-1.0.Ggit.Blame

    constructor(config?: Blame.ConstructorProperties) 
    _init(config?: Blame.ConstructorProperties): void
    /**
     * Get the blame options flags.
     * @param blame_options a #GgitBlameOptions.
     * @returns a #GgitBlameFlags.
     */
    static get_flags(blame_options: BlameOptions): BlameFlags
    /**
     * Set the blame options flags.
     * @param blame_options a #GgitBlameOptions.
     * @param flags a #GgitBlameFlags.
     */
    static set_flags(blame_options: BlameOptions, flags: BlameFlags): void
}

module Blob {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Blob {

    // Conflicting properties

    parent_instance: Native & ObjectFactoryBase & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Blob

    /**
     * Gets a read-only buffer with the raw contents of `blob`.
     * 
     * A pointer to the raw contents of `blob` is returned.
     * This pointer is owned internally by `object` and must
     * not be free'd. The pointer may be invalidated at a later
     * time.
     * @returns the blob content or          %NULL if the blob does not have any content.
     */
    get_raw_content(): Uint8Array | null
    /**
     * Check whether the blob is binary.
     * @returns %TRUE if the blob is binary, %FALSE otherwise.
     */
    is_binary(): boolean

    // Class property signals of Ggit-1.0.Ggit.Blob

    connect(sigName: "notify::native", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a blob object.
 * @class 
 */
class Blob extends Object {

    // Own properties of Ggit-1.0.Ggit.Blob

    static name: string
    static $gtype: GObject.GType<Blob>

    // Constructors of Ggit-1.0.Ggit.Blob

    constructor(config?: Blob.ConstructorProperties) 
    _init(config?: Blob.ConstructorProperties): void
}

module BlobOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.OutputStream.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.BlobOutputStream

        repository?: Repository | null
    }

}

interface BlobOutputStream {

    // Own properties of Ggit-1.0.Ggit.BlobOutputStream

    readonly repository: Repository

    // Own fields of Ggit-1.0.Ggit.BlobOutputStream

    parent_instance: Gio.OutputStream & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.BlobOutputStream

    /**
     * Get the id of the written blob. The blob id is only available after the
     * stream has been properly closed. If an error occurred while writing the blob,
     * the %NULL is returned and `error` is set accordingly.
     * @returns a #GgitOId or %NULL.
     */
    get_id(): OId | null

    // Class property signals of Ggit-1.0.Ggit.BlobOutputStream

    connect(sigName: "notify::repository", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: BlobOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a blob stream object.
 * @class 
 */
class BlobOutputStream extends Gio.OutputStream {

    // Own properties of Ggit-1.0.Ggit.BlobOutputStream

    static name: string
    static $gtype: GObject.GType<BlobOutputStream>

    // Constructors of Ggit-1.0.Ggit.BlobOutputStream

    constructor(config?: BlobOutputStream.ConstructorProperties) 
    _init(config?: BlobOutputStream.ConstructorProperties): void
}

module Branch {

    // Constructor properties interface

    interface ConstructorProperties extends Ref.ConstructorProperties {
    }

}

interface Branch {

    // Own fields of Ggit-1.0.Ggit.Branch

    parent_instance: Ref & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Branch

    /**
     * Deletes an existing branch reference.
     * 
     * If the branch is successfully deleted, this object is
     * not useful anymore and if should be freed with g_object_unref().
     */
    delete(): void
    /**
     * Gets the name of the given local or remote branch.
     * @returns the name of the given local or remote branch or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     * @returns the reference supporting the remote tracking branch or %NULL.
     */
    get_upstream(): Ref | null
    /**
     * Determines if the current local branch is pointed at by HEAD.
     * @returns %TRUE if the current local branch is pointed at by HEAD.
     */
    is_head(): boolean
    /**
     * Moves/renames an existing branch reference.
     * @param new_branch_name target name of the branch once the move is performed; this name is validated for consistency.
     * @param flags a #GgitCreateFlags.
     * @returns the new branch or %NULL.
     */
    move(new_branch_name: string, flags: CreateFlags): Branch | null
    /**
     * Sets the upstream branch, for a given local branch reference
     * @param upstream_branch_name name of the upstream branch; if %NULL unsets it.
     */
    set_upstream(upstream_branch_name: string): void

    // Class property signals of Ggit-1.0.Ggit.Branch

    connect(sigName: "notify::native", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a branch object.
 * @class 
 */
class Branch extends Ref {

    // Own properties of Ggit-1.0.Ggit.Branch

    static name: string
    static $gtype: GObject.GType<Branch>

    // Constructors of Ggit-1.0.Ggit.Branch

    constructor(config?: Branch.ConstructorProperties) 
    _init(config?: Branch.ConstructorProperties): void
}

module CheckoutOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CheckoutOptions

        ancestorLabel?: string | null
        baseline?: Tree | null
        dirMode?: number | null
        disableFilters?: boolean | null
        fileMode?: number | null
        fileOpenFlags?: number | null
        /**
         * The checkout notify flags.
         */
        notifyFlags?: CheckoutNotifyFlags | null
        ourLabel?: string | null
        strategy?: CheckoutStrategy | null
        targetDirectory?: string | null
        theirLabel?: string | null
    }

}

interface CheckoutOptions {

    // Own properties of Ggit-1.0.Ggit.CheckoutOptions

    ancestorLabel: string | null
    baseline: Tree
    dirMode: number
    disableFilters: boolean
    fileMode: number
    fileOpenFlags: number
    /**
     * The checkout notify flags.
     */
    notifyFlags: CheckoutNotifyFlags
    ourLabel: string | null
    strategy: CheckoutStrategy
    targetDirectory: string | null
    theirLabel: string | null

    // Own fields of Ggit-1.0.Ggit.CheckoutOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CheckoutOptions

    /**
     * Get the checkout ancestor label.
     * @returns the checkout ancestor label or %NULL.
     */
    get_ancestor_label(): string | null
    /**
     * Get the baseline, i.e. the expected content of workdir. Defaults to HEAD.
     * @returns a #GgitTree or %NULL.
     */
    get_baseline(): Tree | null
    /**
     * Get the default checkout directory mode.
     * @returns the default directory mode.
     */
    get_dir_mode(): number
    /**
     * Get whether filters are disabled.
     * @returns %TRUE if filters are disabled, %FALSE otherwise.
     */
    get_disable_filters(): boolean
    /**
     * Get the default checkout file mode.
     * @returns the default checkout file mode.
     */
    get_file_mode(): number
    /**
     * Get the checkout file open flags. These flags are platform specific,
     * e.g. on Unix these would include O_CREAT, O_TRUNC, etc.
     * @returns the checkout file open flags.
     */
    get_file_open_flags(): number
    /**
     * Get the checkout notify flags.
     * @returns a #GgitCheckoutNotifyFlags.
     */
    get_notify_flags(): CheckoutNotifyFlags
    /**
     * Get the checkout our label.
     * @returns the checkout our label or %NULL.
     */
    get_our_label(): string | null
    /**
     * Get the list of file paths to checkout.
     * @returns a %NULL terminated list of file paths, or %NULL.
     */
    get_paths(): string[] | null
    /**
     * Get the checkout strategy.
     * @returns a #GgitCheckoutStrategy.
     */
    get_strategy(): CheckoutStrategy
    /**
     * Get the checkout target directory.
     * @returns the checkout target directory or %NULL.
     */
    get_target_directory(): string | null
    /**
     * Get the checkout their label.
     * @returns the checkout their label or %NULL.
     */
    get_their_label(): string | null
    /**
     * Set the checkout ancestor label.
     * @param label the ancestor label.
     */
    set_ancestor_label(label: string | null): void
    /**
     * Set the baseline, i.e. the expected content of workdir. If `tree` is set
     * to %NULL, the default (HEAD) will be used as the baseline.
     * @param tree a #GgitTree.
     */
    set_baseline(tree: Tree | null): void
    /**
     * Set the default checkout directory mode.
     * @param dir_mode the dir mode.
     */
    set_dir_mode(dir_mode: number): void
    /**
     * Set whether to disable filters.
     * @param disable disable filters.
     */
    set_disable_filters(disable: boolean): void
    /**
     * Set the default checkout file mode.
     * @param file_mode the file mode.
     */
    set_file_mode(file_mode: number): void
    /**
     * Set the checkout file open flags. These flags are platform dependent,
     * e.g. on Unix use O_CREAT, O_TRUNC, etc.
     * @param flags the file open flags.
     */
    set_file_open_flags(flags: number): void
    /**
     * Set the checkout notify flags.
     * @param flags a #GgitCheckoutNotifyFlags.
     */
    set_notify_flags(flags: CheckoutNotifyFlags): void
    /**
     * Set the checkout our label.
     * @param label the our label.
     */
    set_our_label(label: string | null): void
    /**
     * Set the list of file paths to checkout. If `paths` is %NULL, then all files
     * will be checked out.
     * @param paths a %NULL terminated list of paths.
     */
    set_paths(paths: string[] | null): void
    /**
     * Set the checkout strategy.
     * @param strategy a #GgitCheckoutStrategy.
     */
    set_strategy(strategy: CheckoutStrategy): void
    /**
     * Set the checkout target directory.
     * @param directory the target directory.
     */
    set_target_directory(directory: string | null): void
    /**
     * Set the checkout their label.
     * @param label the their label.
     */
    set_their_label(label: string | null): void

    // Own virtual methods of Ggit-1.0.Ggit.CheckoutOptions

    vfunc_notify(why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile): number

    // Overloads of vfunc_notify

    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_progress(path: string, completed_steps: number, total_steps: number): void

    // Class property signals of Ggit-1.0.Ggit.CheckoutOptions

    connect(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ancestor-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ancestor-label", ...args: any[]): void
    connect(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline", ...args: any[]): void
    connect(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dir-mode", ...args: any[]): void
    connect(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-filters", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-filters", ...args: any[]): void
    connect(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-mode", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-mode", ...args: any[]): void
    connect(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-open-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-open-flags", ...args: any[]): void
    connect(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-flags", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notify-flags", ...args: any[]): void
    connect(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::our-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::our-label", ...args: any[]): void
    connect(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strategy", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strategy", ...args: any[]): void
    connect(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-directory", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-directory", ...args: any[]): void
    connect(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::their-label", callback: (($obj: CheckoutOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::their-label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the options used when doign a checkout.
 * @class 
 */
class CheckoutOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.CheckoutOptions

    static name: string
    static $gtype: GObject.GType<CheckoutOptions>

    // Constructors of Ggit-1.0.Ggit.CheckoutOptions

    constructor(config?: CheckoutOptions.ConstructorProperties) 
    /**
     * Create a new checkout options object.
     * @constructor 
     * @returns a #GgitCheckoutOptions or %NULL.
     */
    constructor() 
    /**
     * Create a new checkout options object.
     * @constructor 
     * @returns a #GgitCheckoutOptions or %NULL.
     */
    static new(): CheckoutOptions
    _init(config?: CheckoutOptions.ConstructorProperties): void
}

module CherryPickOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CherryPickOptions

        checkoutOptions?: CheckoutOptions | null
        mainline?: number | null
        mergeOptions?: MergeOptions | null
    }

}

interface CherryPickOptions {

    // Own properties of Ggit-1.0.Ggit.CherryPickOptions

    checkoutOptions: CheckoutOptions
    mainline: number
    mergeOptions: MergeOptions

    // Own fields of Ggit-1.0.Ggit.CherryPickOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CherryPickOptions

    /**
     * Get the checkout options.
     * @returns a #GgitCheckoutOptions.
     */
    get_checkout_options(): CheckoutOptions
    /**
     * Get the mainline parent to use when cherry-picking a merge commit.
     * @returns the mainline parent.
     */
    get_mainline(): number
    /**
     * Get the merge options.
     * @returns a #GgitMergeOptions.
     */
    get_merge_options(): MergeOptions
    /**
     * Set the checkout options.
     * @param checkout_options a #GgitCheckoutOptions.
     */
    set_checkout_options(checkout_options: CheckoutOptions | null): void
    /**
     * Set the mainline parent to use when cherry-picking a merge commit.
     * @param mainline the mainline parent.
     */
    set_mainline(mainline: number): void
    /**
     * Set the merge options.
     * @param merge_options a #GgitMergeOptions.
     */
    set_merge_options(merge_options: MergeOptions | null): void

    // Class property signals of Ggit-1.0.Ggit.CherryPickOptions

    connect(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checkout-options", ...args: any[]): void
    connect(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mainline", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mainline", ...args: any[]): void
    connect(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-options", callback: (($obj: CherryPickOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::merge-options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the options used when doign a cherry-pick.
 * @class 
 */
class CherryPickOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.CherryPickOptions

    static name: string
    static $gtype: GObject.GType<CherryPickOptions>

    // Constructors of Ggit-1.0.Ggit.CherryPickOptions

    constructor(config?: CherryPickOptions.ConstructorProperties) 
    /**
     * Create a new cherry-pick options object.
     * @constructor 
     * @returns a #GgitCherryPickOptions.
     */
    constructor() 
    /**
     * Create a new cherry-pick options object.
     * @constructor 
     * @returns a #GgitCherryPickOptions.
     */
    static new(): CherryPickOptions
    _init(config?: CherryPickOptions.ConstructorProperties): void
}

module CloneOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CloneOptions {

    // Own fields of Ggit-1.0.Ggit.CloneOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CloneOptions

    /**
     * Gets the name of the branch to checkout or %NULL.
     * @returns the name of the branch to checkout or %NULL.
     */
    get_checkout_branch(): string
    /**
     * Get the fetch options object or %NULL if not set.
     * @returns the fetch options or %NULL.
     */
    get_fetch_options(): FetchOptions
    /**
     * Gets if the repository will be bare.
     * @returns %TRUE to clone a bare repository.
     */
    get_is_bare(): boolean
    /**
     * Get setting for bypassing the git-aware transport when cloning. The
     * default auto setting bypasses the git-aware transport for local paths,
     * but use a normal fetch for file:// URIs.
     * @returns the local clone setting.
     */
    get_local(): CloneLocal
    /**
     * Gives the name of the branch to checkout. %NULL means
     * use the remote's HEAD.
     * @param checkout_branch the name of the branch to checkout or %NULL.
     */
    set_checkout_branch(checkout_branch: string | null): void
    /**
     * Set the fetch options object.
     * @param fetch_options a #GgitFetchOptions or %NULL.
     */
    set_fetch_options(fetch_options: FetchOptions | null): void
    /**
     * Sets whether to clone a bare repository.
     * @param bare %TRUE to clone a bare repository.
     */
    set_is_bare(bare: boolean): void
    /**
     * Set setting for bypassing the git-aware transport when cloning. The
     * default auto setting bypasses the git-aware transport for local paths,
     * but use a normal fetch for file:// URIs.
     * @param local the local clone setting.
     */
    set_local(local: CloneLocal): void

    // Own virtual methods of Ggit-1.0.Ggit.CloneOptions

    vfunc_create_remote(repository: Repository, name: string, url: string): Remote | null
    vfunc_create_repository(path: string, is_bare: boolean): Repository | null

    // Class property signals of Ggit-1.0.Ggit.CloneOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the options used when cloning.
 * @class 
 */
class CloneOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.CloneOptions

    static name: string
    static $gtype: GObject.GType<CloneOptions>

    // Constructors of Ggit-1.0.Ggit.CloneOptions

    constructor(config?: CloneOptions.ConstructorProperties) 
    /**
     * Creates a new #GgitCloneOptions.
     * @constructor 
     * @returns a newly allocated #GgitCloneOptions.
     */
    constructor() 
    /**
     * Creates a new #GgitCloneOptions.
     * @constructor 
     * @returns a newly allocated #GgitCloneOptions.
     */
    static new(): CloneOptions
    _init(config?: CloneOptions.ConstructorProperties): void
}

module Commit {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Commit {

    // Own fields of Ggit-1.0.Ggit.Commit

    parent_instance: Object & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Commit

    /**
     * Amend an existing commit. If `update_ref` is not %NULL, the given reference will
     * be updated to point to the newly created commit. Use "HEAD" to update the
     * HEAD of the current branch and make it point to this commit.
     * 
     * If `message_encoding` is set to %NULL, "UTF-8" encoding is assumed for the
     * provided `message`. Note that `message` will not be cleaned up automatically.
     * You can use #ggit_message_prettify to do this yourself if needed.
     * @param update_ref name of the reference to update.
     * @param author author signature.
     * @param committer committer signature (and time of commit).
     * @param message_encoding message encoding.
     * @param message commit message.
     * @param tree the tree of objects to commit.
     * @returns the #GgitOId of the created commit object, or %NULL in case of an error.
     */
    amend(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree): OId | null
    /**
     * Gets the author of `commit`. The returned value must be free'd with
     * g_object_unref().
     * @returns the author of the commit.
     */
    get_author(): Signature | null
    /**
     * Gets the committer of `commit`. The returned value must be free'd with
     * g_object_unref().
     * @returns the committer of the commit.
     */
    get_committer(): Signature | null
    /**
     * Gets the full message of `commit`. The resulting message is always encoded
     * in UTF-8.
     * @returns the message of the commit.
     */
    get_message(): string | null
    /**
     * Get the encoding for the message of a commit,
     * as a string representing a standard encoding name.
     * 
     * The encoding may be %NULL if the 'encoding' header
     * in the commit is missing; in that case UTF-8 is assumed.
     * @returns the encoding of the commit message or %NULL.
     */
    get_message_encoding(): string | null
    /**
     * Gets the commit object that is the n-th generation ancestor
     * of the named commit object, following only the first parents.
     * Passing %0 to the `n` parameter returns another instance of `commit`.
     * @param n the requested ancestor.
     * @returns the @n ancestor commit.
     */
    get_nth_ancestor(n: number): Commit | null
    /**
     * Gets the parents collection for `commit`.
     * @returns the parents collection of the commit.
     */
    get_parents(): CommitParents | null
    /**
     * Gets the subject of `commit`. The subject of a commit is the first line of
     * the commit message (as per convention). The resulting subject is always
     * encoded in UTF-8.
     * @returns the subject of the commit.
     */
    get_subject(): string | null
    /**
     * Get the tree object for `commit`.
     * @returns a #GgitTree.
     */
    get_tree(): Tree | null
    /**
     * Get the #GgitOId of the tree of `commit`. Note that this is more efficient
     * than getting the tree object with ggit_commit_get_tree() because no additional
     * files need to be read from disk.
     * @returns a #GgitOId.
     */
    get_tree_id(): OId | null

    // Class property signals of Ggit-1.0.Ggit.Commit

    connect(sigName: "notify::native", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a commit object.
 * @class 
 */
class Commit extends Object {

    // Own properties of Ggit-1.0.Ggit.Commit

    static name: string
    static $gtype: GObject.GType<Commit>

    // Constructors of Ggit-1.0.Ggit.Commit

    constructor(config?: Commit.ConstructorProperties) 
    _init(config?: Commit.ConstructorProperties): void
}

module CommitParents {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CommitParents

        commit?: Commit | null
    }

}

interface CommitParents {

    // Own properties of Ggit-1.0.Ggit.CommitParents

    readonly commit: Commit
    readonly size: number

    // Owm methods of Ggit-1.0.Ggit.CommitParents

    /**
     * Get the #GgitCommit of a parent.
     * @param idx the parent index.
     * @returns a #GgitCommit.
     */
    get(idx: number): Commit | null
    /**
     * Get the #GgitOId of a parent.
     * @param idx the parent index.
     * @returns a #GgitOId.
     */
    get_id(idx: number): OId | null
    /**
     * Get the number of parents in the parents collection.
     * @returns the number of parents.
     */
    get_size(): number

    // Class property signals of Ggit-1.0.Ggit.CommitParents

    connect(sigName: "notify::commit", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CommitParents, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the parents of a commit object.
 * @class 
 */
class CommitParents extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.CommitParents

    static name: string
    static $gtype: GObject.GType<CommitParents>

    // Constructors of Ggit-1.0.Ggit.CommitParents

    constructor(config?: CommitParents.ConstructorProperties) 
    constructor(commit: Commit) 
    static new(commit: Commit): CommitParents
    _init(config?: CommitParents.ConstructorProperties): void
}

module Config {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Config {

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Config

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
     * @param file a #GFile.
     * @param level a #GgitConfigLevel.
     * @param force if a config file already exists for the given priority level, replace it.
     */
    add_file(file: Gio.File, level: ConfigLevel, force: boolean): void
    /**
     * Delete a config variable from the config file.
     * @param name the configuration value.
     * @returns %TRUE if the configuration value was deleted, %FALSE otherwise.
     */
    delete_entry(name: string): boolean
    /**
     * Call `callback` for each configuration value.
     * @param callback a #GgitConfigCallback.
     * @returns %TRUE if successfull, %FALSE otherwise
     */
    foreach(callback: ConfigCallback): boolean
    /**
     * Get a boolean configuration value.
     * @param name the name of the configuration value.
     * @returns the value.
     */
    get_bool(name: string): boolean
    /**
     * Get #GgitConfigEntry of a config variable.
     * @param name the configuration name.
     * @returns the entry of @name, or %NULL if such a value                           does not exist.
     */
    get_entry(name: string): ConfigEntry
    /**
     * Get a int32 configuration value.
     * @param name the name of the configuration value.
     * @returns the value.
     */
    get_int32(name: string): number
    /**
     * Get a int64 configuration value.
     * @param name the name of the configuration value.
     * @returns the value.
     */
    get_int64(name: string): number
    /**
     * Get the configuration value of `name` as string.
     * @param name the name of the configuration value.
     * @returns the string value of @name, or %NULL if such a value                        does not exist
     */
    get_string(name: string): string | null
    /**
     * Matches a configuration against a regular expression. `match_info` will
     * contain the match information if the return value is not %NULL, otherwise
     * `error` will be set.
     * @param regex a #GRegex.
     * @returns the value of that matched configuration
     */
    match(regex: GLib.Regex): [ /* returnType */ string | null, /* match_info */ GLib.MatchInfo ]
    /**
     * Call `callback` for all configurations matching `regex`.
     * @param regex a #GRegex.
     * @param callback a #GgitConfigMatchCallback.
     * @returns %TRUE if matches were successfull, %FALSE otherwise
     */
    match_foreach(regex: GLib.Regex, callback: ConfigMatchCallback): boolean
    /**
     * Open a specific level config derived from a multi-level one.
     * @param level the level to open.
     * @returns the configuration at @level, or %NULL.
     */
    open_level(level: ConfigLevel): Config
    /**
     * Set a boolean value.
     * @param name the name of the configuration value.
     * @param value the new value.
     * @returns %TRUE if the value was successfully set, %FALSE otherwise.
     */
    set_bool(name: string, value: boolean): boolean
    /**
     * Set a int32 value.
     * @param name the name of the configuration value.
     * @param value the new value.
     * @returns %TRUE if the value was successfully set, %FALSE otherwise.
     */
    set_int32(name: string, value: number): boolean
    /**
     * Set a int64 value.
     * @param name the name of the configuration value.
     * @param value the new value.
     * @returns %TRUE if the value was successfully set, %FALSE otherwise.
     */
    set_int64(name: string, value: number): boolean
    /**
     * Set a new string value of a configuration.
     * @param name the name of the configuration value.
     * @param value the new value.
     * @returns %TRUE if the value was successfully set, %FALSE otherwise.
     */
    set_string(name: string, value: string): boolean
    /**
     * Create a snapshot of the current state of the configuration,
     * which allows you to look into a consistent view of the configuration
     * for looking up complex values (e.g. a remote, submodule).
     * @returns a new #GgitConfig, or %NULL if an error occurred.
     */
    snapshot(): Config

    // Class property signals of Ggit-1.0.Ggit.Config

    connect(sigName: "notify::native", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git configuration.
 * @class 
 */
class Config extends Native {

    // Own properties of Ggit-1.0.Ggit.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Ggit-1.0.Ggit.Config

    constructor(config?: Config.ConstructorProperties) 
    /**
     * Create a new config. See also ggit_config_get_default() to get
     * a #GgitConfig representing the global, XDG and system configuration files.
     * To get a #GgitConfig for a repository use #ggit_repository_get_config
     * instead.
     * @constructor 
     * @returns a #GgitConfig.
     */
    constructor() 
    /**
     * Create a new config. See also ggit_config_get_default() to get
     * a #GgitConfig representing the global, XDG and system configuration files.
     * To get a #GgitConfig for a repository use #ggit_repository_get_config
     * instead.
     * @constructor 
     * @returns a #GgitConfig.
     */
    static new(): Config
    /**
     * Get the global, XDG and system configuration files merged into one
     * #GgitConfig with their appropriate priority levels. If an error occured
     * trying to load the various configuration files, this function will return
     * %NULL and `error` will be set accordingly.
     * @constructor 
     * @returns A #GgitConfig
     */
    static new_default(): Config
    /**
     * Create a new config from a single on disk file. This is a convenience
     * API and is exactly the same as creating an empty #GgitConfig using
     * #ggit_config_new and adding the file with #ggit_config_add_file. The
     * level will be set to #GGIT_CONFIG_LEVEL_LOCAL. If the config could not be
     * loaded this function returns %NULL and `error` will be set accordingly.
     * @constructor 
     * @param file the file to load.
     * @returns a #GgitConfig.
     */
    static new_from_file(file: Gio.File): Config
    _init(config?: Config.ConstructorProperties): void
    /**
     * Find the file representing the users global git configuration. This file
     * is usually located at $HOME/.gitconfig. This function will try to guess
     * the full path to that file, if the file exists. The returned file may then
     * be used with #ggit_config_new_from_file or #ggit_config_add_file. This
     * function returns %NULL if the global config could not be found.
     * @returns a #GFile or %NULL if the global config could not be found.
     */
    static find_global(): Gio.File
    /**
     * Find the file representing the systems global git configuration. This file
     * is usually located at /etc/gitconfig on UNIX type systems or
     * %PROGRAMFILES%\Git\etc\gitconfig on windows. This function will try to guess
     * the full path to that file, if the file exists. The returned file may then
     * be used with #ggit_config_new_from_file or #ggit_config_add_file. This
     * function returns %NULL if the system config could not be found.
     * @returns a #GFile or %NULL if the system config could not                           be found.
     */
    static find_system(): Gio.File
}

module Cred {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Cred {

    // Own fields of Ggit-1.0.Ggit.Cred

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Class property signals of Ggit-1.0.Ggit.Cred

    connect(sigName: "notify::native", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Cred, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git credential.
 * @class 
 */
class Cred extends Native {

    // Own properties of Ggit-1.0.Ggit.Cred

    static name: string
    static $gtype: GObject.GType<Cred>

    // Constructors of Ggit-1.0.Ggit.Cred

    constructor(config?: Cred.ConstructorProperties) 
    _init(config?: Cred.ConstructorProperties): void
}

module CredPlaintext {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Cred.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CredPlaintext

        password?: string | null
        username?: string | null
    }

}

interface CredPlaintext extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.CredPlaintext

    readonly password: string | null
    readonly username: string | null

    // Own fields of Ggit-1.0.Ggit.CredPlaintext

    parent_instance: Cred & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CredPlaintext

    get_password(): string
    get_username(): string

    // Class property signals of Ggit-1.0.Ggit.CredPlaintext

    connect(sigName: "notify::password", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: CredPlaintext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a plain text credential.
 * @class 
 */
class CredPlaintext extends Cred {

    // Own properties of Ggit-1.0.Ggit.CredPlaintext

    static name: string
    static $gtype: GObject.GType<CredPlaintext>

    // Constructors of Ggit-1.0.Ggit.CredPlaintext

    constructor(config?: CredPlaintext.ConstructorProperties) 
    constructor(username: string, password: string) 
    static new(username: string, password: string): CredPlaintext
    _init(config?: CredPlaintext.ConstructorProperties): void
}

module CredSshInteractive {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Cred.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CredSshInteractive

        username?: string | null
    }

}

interface CredSshInteractive extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.CredSshInteractive

    readonly username: string | null

    // Own fields of Ggit-1.0.Ggit.CredSshInteractive

    parent_instance: Cred & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CredSshInteractive

    get_username(): string

    // Own virtual methods of Ggit-1.0.Ggit.CredSshInteractive

    vfunc_prompt(prompts: CredSshInteractivePrompt[]): void

    // Class property signals of Ggit-1.0.Ggit.CredSshInteractive

    connect(sigName: "notify::username", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: CredSshInteractive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a ssh interactive credential.
 * @class 
 */
class CredSshInteractive extends Cred {

    // Own properties of Ggit-1.0.Ggit.CredSshInteractive

    static name: string
    static $gtype: GObject.GType<CredSshInteractive>

    // Constructors of Ggit-1.0.Ggit.CredSshInteractive

    constructor(config?: CredSshInteractive.ConstructorProperties) 
    constructor(username: string) 
    static new(username: string): CredSshInteractive
    _init(config?: CredSshInteractive.ConstructorProperties): void
}

module CredSshKeyFromAgent {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Cred.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.CredSshKeyFromAgent

        username?: string | null
    }

}

interface CredSshKeyFromAgent extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.CredSshKeyFromAgent

    readonly username: string | null

    // Conflicting properties

    parent_instance: Native & ObjectFactoryBase & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.CredSshKeyFromAgent

    /**
     * Gets the username for the credential.
     * @returns the username or %NULL.
     */
    get_username(): string | null

    // Class property signals of Ggit-1.0.Ggit.CredSshKeyFromAgent

    connect(sigName: "notify::username", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: CredSshKeyFromAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a ssh key agent credential.
 * @class 
 */
class CredSshKeyFromAgent extends Cred {

    // Own properties of Ggit-1.0.Ggit.CredSshKeyFromAgent

    static name: string
    static $gtype: GObject.GType<CredSshKeyFromAgent>

    // Constructors of Ggit-1.0.Ggit.CredSshKeyFromAgent

    constructor(config?: CredSshKeyFromAgent.ConstructorProperties) 
    /**
     * Creates a new #GgitCredSshKeyFromAgent.
     * @constructor 
     * @param username the username.
     * @returns a new #GgitCredSshKeyFromAgent or %NULL if there was an error.
     */
    constructor(username: string) 
    /**
     * Creates a new #GgitCredSshKeyFromAgent.
     * @constructor 
     * @param username the username.
     * @returns a new #GgitCredSshKeyFromAgent or %NULL if there was an error.
     */
    static new(username: string): CredSshKeyFromAgent
    _init(config?: CredSshKeyFromAgent.ConstructorProperties): void
}

module Diff {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.Diff

        repository?: Repository | null
    }

}

interface Diff {

    // Own properties of Ggit-1.0.Ggit.Diff

    readonly repository: Repository

    // Own fields of Ggit-1.0.Ggit.Diff

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Diff

    /**
     * Transform `diff` marking file renames, copies, etc.. If `options` is set to
     * %NULL, then the default options will be used.
     * @param options a #GgitDiffFindOptions or %NULL.
     * @returns %TRUE if there were no errors, %FALSE otherwise.
     */
    find_similar(options: DiffFindOptions | null): boolean
    /**
     * Iterates over the diff calling `file_cb,` `binary_cb,` `hunk_cb` and `line_cb`.
     * @param file_cb   a #GgitDiffFileCallback.
     * @param binary_cb   a #GgitDiffBinaryCallback.
     * @param hunk_cb   a #GgitDiffHunkCallback.
     * @param line_cb   a #GgitDiffLineCallback.
     */
    foreach(file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null): void
    /**
     * Create an e-mail ready patch from a diff.
     * @param options a #GgitDiffFormatEmailOptions.
     * @returns the patch or %NULL if an error occurred.
     */
    format_email(options: DiffFormatEmailOptions): string | null
    /**
     * Get the delta at the specified index.
     * @param index the index.
     * @returns a #GgitDiffDelta or %NULL.
     */
    get_delta(index: number): DiffDelta | null
    /**
     * Get the number of deltas in the diff.
     * @returns the number of deltas.
     */
    get_num_deltas(): number
    /**
     * Merges `from` into `onto` unless `error` is set.
     * @param from the #GgitDiff to merge.
     */
    merge(from: Diff): void
    /**
     * Iterates over `diff` generating text output like "git diff".
     * @param type a #GgitDiffFormatType.
     * @param print_cb a #GgitDiffLineCallback.
     */
    print(type: DiffFormatType, print_cb: DiffLineCallback): void

    // Class property signals of Ggit-1.0.Ggit.Diff

    connect(sigName: "notify::repository", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Diff, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a diff list.
 * @class 
 */
class Diff extends Native {

    // Own properties of Ggit-1.0.Ggit.Diff

    static name: string
    static $gtype: GObject.GType<Diff>

    // Constructors of Ggit-1.0.Ggit.Diff

    constructor(config?: Diff.ConstructorProperties) 
    /**
     * Same as ggit_diff_blobs() but using a buffers.
     * Creates a #GgitDiff which compares `buffer1` and `buffer2`.
     * 
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @constructor 
     * @param buffer1 a buffer to diff from.
     * @param buffer1_as_path treat `buffer1` as if it had this filename, or %NULL,
     * @param buffer2 a buffer to diff to.
     * @param buffer2_as_path treat `buffer2` as if it had this filename, or %NULL,
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly allocated #GgitDiff if there was no error, %NULL otherwise.
     */
    static new_buffers(buffer1: Uint8Array | null, buffer1_as_path: string | null, buffer2: Uint8Array | null, buffer2_as_path: string | null, diff_options: DiffOptions | null): Diff
    /**
     * Creates a #GgitDiff which compares the working directory and the index.
     * 
     * If `index` is %NULL then `repository` index is used.
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param index a #GgitIndex, or %NULL.
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly allocated #GgitDiff if there was no error, %NULL otherwise.
     */
    static new_index_to_workdir(repository: Repository, index: Index | null, diff_options: DiffOptions | null): Diff
    /**
     * Creates a #GgitDiff which compares `old_tree` and the index.
     * 
     * If `index` is %NULL then `repository` index is used.
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param old_tree a #GgitTree to diff from.
     * @param index a #GgitIndex, or %NULL.
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly allocated #GgitDiff if there was no error, %NULL otherwise.
     */
    static new_tree_to_index(repository: Repository, old_tree: Tree | null, index: Index | null, diff_options: DiffOptions | null): Diff
    /**
     * Creates a #GgitDiff which compares `old_tree` and `new_tree`.
     * 
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param old_tree a #GgitTree to diff from.
     * @param new_tree a #GgitTree to diff to.
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly allocated #GgitDiff if there was no error, %NULL otherwise.
     */
    static new_tree_to_tree(repository: Repository, old_tree: Tree | null, new_tree: Tree | null, diff_options: DiffOptions | null): Diff
    /**
     * Creates a #GgitDiff which compares the working directory and `old_tree`.
     * 
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param old_tree a #GgitTree to diff from.
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly allocated #GgitDiff if there was no error, %NULL otherwise.
     */
    static new_tree_to_workdir(repository: Repository, old_tree: Tree | null, diff_options: DiffOptions | null): Diff
    _init(config?: Diff.ConstructorProperties): void
    /**
     * Same as ggit_diff_blobs() but using a buffer.
     * @param old_blob a #GgitBlob to diff from.
     * @param old_as_path treat `old_blob` as if it had this filename, or %NULL,
     * @param buffer a buffer to diff to.
     * @param buffer_as_path treat `buffer` as if it had this filename, or %NULL,
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @param file_cb   a #GgitDiffFileCallback.
     * @param binary_cb   a #GgitDiffBinaryCallback.
     * @param hunk_cb   a #GgitDiffHunkCallback.
     * @param line_cb   a #GgitDiffLineCallback.
     */
    static blob_to_buffer(old_blob: Blob | null, old_as_path: string | null, buffer: Uint8Array | null, buffer_as_path: string | null, diff_options: DiffOptions | null, file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null): void
    /**
     * Iterates over the diff calling `file_cb,` `binary_cb,` `hunk_cb` and `line_cb`.
     * 
     * The #GgitDiffFile mode always be 0, path will be %NULL and when a blob is
     * %NULL the oid will be 0.
     * 
     * If `diff_options` is %NULL then the defaults specified in
     * ggit_diff_options_new() are used.
     * @param old_blob a #GgitBlob to diff from.
     * @param old_as_path treat `old_blob` as if it had this filename, or %NULL,
     * @param new_blob a #GgitBlob to diff to.
     * @param new_as_path treat `new_blob` as if it had this filename, or %NULL,
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @param file_cb   a #GgitDiffFileCallback.
     * @param binary_cb   a #GgitDiffBinaryCallback.
     * @param hunk_cb   a #GgitDiffHunkCallback.
     * @param line_cb   a #GgitDiffLineCallback.
     */
    static blobs(old_blob: Blob | null, old_as_path: string | null, new_blob: Blob | null, new_as_path: string | null, diff_options: DiffOptions | null, file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null): void
}

module DiffFindOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.DiffFindOptions

        copyThreshold?: number | null
        /**
         * The diff option flags.
         */
        flags?: DiffFindFlags | null
        metric?: DiffSimilarityMetric | null
        renameFromRewriteThreshold?: number | null
        renameLimit?: number | null
        renameThreshold?: number | null
    }

}

interface DiffFindOptions {

    // Own properties of Ggit-1.0.Ggit.DiffFindOptions

    copyThreshold: number
    /**
     * The diff option flags.
     */
    flags: DiffFindFlags
    metric: DiffSimilarityMetric
    renameFromRewriteThreshold: number
    renameLimit: number
    renameThreshold: number

    // Own fields of Ggit-1.0.Ggit.DiffFindOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.DiffFindOptions

    /**
     * Get the find options copy threshold.
     * @returns the copy threshold.
     */
    get_copy_threshold(): number
    /**
     * Get the find options flags.
     * @returns the find options flags.
     */
    get_flags(): DiffFindFlags
    /**
     * Get the find options metric.
     * @returns a #GgitDiffSimilarityMetric or %NULL.
     */
    get_metric(): DiffSimilarityMetric | null
    /**
     * Get the find options rename from rewrite threshold.
     * @returns the rename from rewrite threshold.
     */
    get_rename_from_rewrite_threshold(): number
    /**
     * Get the find options rename limit.
     * @returns the rename limit.
     */
    get_rename_limit(): number
    /**
     * Get the find options rename threshold.
     * @returns the rename threshold.
     */
    get_rename_threshold(): number
    /**
     * Set the find options copy threshold.
     * @param threshold the threshold.
     */
    set_copy_threshold(threshold: number): void
    /**
     * Set the find options flags.
     * @param flags a #GgitDiffFindFlags.
     */
    set_flags(flags: DiffFindFlags): void
    /**
     * Set the find options metric.
     * @param metric a #GgitDiffSimilarityMetric.
     */
    set_metric(metric: DiffSimilarityMetric): void
    /**
     * Set the find options rename from rewrite threshold.
     * @param threshold the threshold.
     */
    set_rename_from_rewrite_threshold(threshold: number): void
    /**
     * Set the find options rename limit.
     * @param limit the limit.
     */
    set_rename_limit(limit: number): void
    /**
     * Set the find options rename threshold.
     * @param threshold the threshold.
     */
    set_rename_threshold(threshold: number): void

    // Class property signals of Ggit-1.0.Ggit.DiffFindOptions

    connect(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copy-threshold", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metric", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metric", ...args: any[]): void
    connect(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-from-rewrite-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rename-from-rewrite-threshold", ...args: any[]): void
    connect(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-limit", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rename-limit", ...args: any[]): void
    connect(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rename-threshold", callback: (($obj: DiffFindOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rename-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents options for finding diff similarity.
 * @class 
 */
class DiffFindOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.DiffFindOptions

    static name: string
    static $gtype: GObject.GType<DiffFindOptions>

    // Constructors of Ggit-1.0.Ggit.DiffFindOptions

    constructor(config?: DiffFindOptions.ConstructorProperties) 
    /**
     * Creates a new #GgitDiffFindOptions.
     * @constructor 
     * @returns a newly allocated #GgitDiffFindOptions or %NULL.
     */
    constructor() 
    /**
     * Creates a new #GgitDiffFindOptions.
     * @constructor 
     * @returns a newly allocated #GgitDiffFindOptions or %NULL.
     */
    static new(): DiffFindOptions
    _init(config?: DiffFindOptions.ConstructorProperties): void
}

module DiffFormatEmailOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.DiffFormatEmailOptions

        author?: Signature | null
        body?: string | null
        flags?: DiffFormatEmailFlags | null
        id?: OId | null
        patchNumber?: number | null
        summary?: string | null
        totalPatches?: number | null
    }

}

interface DiffFormatEmailOptions {

    // Own properties of Ggit-1.0.Ggit.DiffFormatEmailOptions

    author: Signature
    body: string | null
    flags: DiffFormatEmailFlags
    id: OId
    patchNumber: number
    summary: string | null
    totalPatches: number

    // Own fields of Ggit-1.0.Ggit.DiffFormatEmailOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.DiffFormatEmailOptions

    /**
     * Get the author.
     * @returns a #GgitSignature or %NULL.
     */
    get_author(): Signature | null
    /**
     * Get the body.
     * @returns the body.
     */
    get_body(): string | null
    /**
     * Get the flags.
     * @returns a #GgitDiffFormatEmailFlags.
     */
    get_flags(): DiffFormatEmailFlags
    /**
     * Get the object id.
     * @returns a #GgitOId or %NULL.
     */
    get_id(): OId | null
    /**
     * Get the patch number.
     * @returns the patch number.
     */
    get_patch_number(): number
    /**
     * Get the summary.
     * @returns the summary.
     */
    get_summary(): string | null
    /**
     * Get the total number of patches.
     * @returns the total number of patches.
     */
    get_total_patches(): number
    /**
     * Set the author.
     * @param author a #GgitSignature.
     */
    set_author(author: Signature | null): void
    /**
     * Set the body.
     * @param body the body.
     */
    set_body(body: string | null): void
    /**
     * Set the flags.
     * @param flags a #GgitDiffFormatEmailFlags.
     */
    set_flags(flags: DiffFormatEmailFlags): void
    /**
     * Set the object id.
     * @param id a #GgitOId.
     */
    set_id(id: OId | null): void
    /**
     * Set the patch number.
     * @param number the patch number.
     */
    set_patch_number(number: number): void
    /**
     * Set the summary.
     * @param summary the summary.
     */
    set_summary(summary: string | null): void
    /**
     * Set the total number of patches.
     * @param patches the total number of patches.
     */
    set_total_patches(patches: number): void

    // Class property signals of Ggit-1.0.Ggit.DiffFormatEmailOptions

    connect(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::patch-number", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::patch-number", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-patches", callback: (($obj: DiffFormatEmailOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-patches", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DiffFormatEmailOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.DiffFormatEmailOptions

    static name: string
    static $gtype: GObject.GType<DiffFormatEmailOptions>

    // Constructors of Ggit-1.0.Ggit.DiffFormatEmailOptions

    constructor(config?: DiffFormatEmailOptions.ConstructorProperties) 
    /**
     * Create a new checkout options object.
     * @constructor 
     * @returns a #GgitDiffFormatEmailOptions or %NULL.
     */
    constructor() 
    /**
     * Create a new checkout options object.
     * @constructor 
     * @returns a #GgitDiffFormatEmailOptions or %NULL.
     */
    static new(): DiffFormatEmailOptions
    _init(config?: DiffFormatEmailOptions.ConstructorProperties): void
}

module DiffOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.DiffOptions

        /**
         * The diff option flags.
         */
        flags?: DiffOption | null
        nContextLines?: number | null
        nInterhunkLines?: number | null
        newPrefix?: string | null
        oldPrefix?: string | null
        pathspec?: string[] | null
    }

}

interface DiffOptions {

    // Own properties of Ggit-1.0.Ggit.DiffOptions

    /**
     * The diff option flags.
     */
    flags: DiffOption
    nContextLines: number
    nInterhunkLines: number
    newPrefix: string | null
    oldPrefix: string | null
    pathspec: string[]

    // Own fields of Ggit-1.0.Ggit.DiffOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.DiffOptions

    /**
     * Get the diff flags.
     * @returns a #GgitDiffOption.
     */
    get_flags(): DiffOption
    /**
     * Get the number of context lines to include in the diff.
     * @returns the number of context lines.
     */
    get_n_context_lines(): number
    /**
     * Get the number of interhunk lines to include in the diff.
     * @returns the number of lines.
     */
    get_n_interhunk_lines(): number
    /**
     * Get the diff new-prefix string.
     * @returns the new-prefix string or %NULL.
     */
    get_new_prefix(): string | null
    /**
     * Get the diff old-prefix string.
     * @returns the old-prefix string or %NULL.
     */
    get_old_prefix(): string | null
    /**
     * Get the pathspec.
     * @returns the pathspec or %NULL.
     */
    get_pathspec(): string[] | null
    /**
     * Set the diff flags.
     * @param flags a #GgitDiffOption.
     */
    set_flags(flags: DiffOption): void
    /**
     * Set the number of context lines to include in the diff.
     * @param n the number of lines.
     */
    set_n_context_lines(n: number): void
    /**
     * Set the number of interhunk lines to include in the diff.
     * @param n the number of lines.
     */
    set_n_interhunk_lines(n: number): void
    /**
     * Set the diff new-prefix string.
     * @param prefix the prefix.
     */
    set_new_prefix(prefix: string): void
    /**
     * Get the diff old-prefix string.
     * @param prefix the prefix.
     */
    set_old_prefix(prefix: string): void
    /**
     * Set the pathspec.
     * @param pathspec the pathspec.
     */
    set_pathspec(pathspec: string[] | null): void

    // Class property signals of Ggit-1.0.Ggit.DiffOptions

    connect(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-context-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-context-lines", ...args: any[]): void
    connect(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-interhunk-lines", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-interhunk-lines", ...args: any[]): void
    connect(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::new-prefix", ...args: any[]): void
    connect(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-prefix", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::old-prefix", ...args: any[]): void
    connect(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pathspec", callback: (($obj: DiffOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pathspec", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the options used when creating a #GgitDiff.
 * @class 
 */
class DiffOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.DiffOptions

    static name: string
    static $gtype: GObject.GType<DiffOptions>

    // Constructors of Ggit-1.0.Ggit.DiffOptions

    constructor(config?: DiffOptions.ConstructorProperties) 
    /**
     * Create a new diff options object.
     * @constructor 
     * @returns a #GgitDiffOptions or %NULL.
     */
    constructor() 
    /**
     * Create a new diff options object.
     * @constructor 
     * @returns a #GgitDiffOptions or %NULL.
     */
    static new(): DiffOptions
    _init(config?: DiffOptions.ConstructorProperties): void
}

module Index {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Native.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.Index

        file?: Gio.File | null
    }

}

interface Index extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.Index

    readonly file: Gio.File

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Index

    /**
     * Add a file to the index.
     * @param entry a #GgitIndexEntry.
     * @returns %TRUE if the file was successfully added, %FALSE otherwise.
     */
    add(entry: IndexEntry): boolean
    /**
     * Add a file to the index. The specified file must be in the working directory
     * and must exist and be readable.
     * @param file file to add.
     * @returns %TRUE if the file was added to the index or %FALSE if there was an error.
     */
    add_file(file: Gio.File): boolean
    /**
     * Add a file to the index by path. You can specify both relative paths
     * (to the working directory) and absolute paths. Absolute paths however must
     * reside in the working directory. The specified path must exist and must be
     * readable.
     * @param path path to the file to add.
     * @returns %TRUE if the file was added to the index or %FALSE if there was an error.
     */
    add_path(path: string): boolean
    /**
     * Get the index entries enumerator.
     * @returns a #GgitIndexEntries or %NULL.
     */
    get_entries(): IndexEntries | null
    /**
     * Get the resolve undo entries enumerator.
     * @returns a #GgitIndexEntriesResolveUndo or %NULL.
     */
    get_entries_resolve_undo(): IndexEntriesResolveUndo | null
    /**
     * Get the #GgitRepository that owns the index.
     * @returns the #GgitRepository that owns this index or %NULL.
     */
    get_owner(): Repository | null
    /**
     * Get whether the index has any conflicts.
     * @returns %TRUE if the index has any conflicts, %FALSE otherwise.
     */
    has_conflicts(): boolean
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
     * @returns %TRUE if the index could be read from the file associated with the          index, %FALSE otherwise.
     */
    read(force: boolean): boolean
    /**
     * Remove a file from the index (specified by position).
     * @param file the file to search.
     * @param stage the stage to search.
     * @returns %TRUE if the file was successfully removed, %FALSE otherwise.
     */
    remove(file: Gio.File, stage: number): boolean
    /**
     * Write an existing index object from memory back to disk using an atomic file
     * lock.
     * @returns %TRUE if the index was successfully written to disk, %FALSE otherwise.
     */
    write(): boolean
    /**
     * Write a new tree object to disk containing a representation of the current
     * state of the index. The index must be associated to an existing repository
     * and must not contain any files in conflict. You can use the resulting tree
     * to for instance create a commit.
     * @returns a #GgitOId or %NULL in case of an error.
     */
    write_tree(): OId | null
    /**
     * Write a new tree object to `repository` containing a representation of the current
     * state of the index. The index must not contain any files in conflict. You can use
     * the resulting tree to for instance create a commit.
     * @param repository a #GgitRepository.
     * @returns a #GgitOId or %NULL in case of an error.
     */
    write_tree_to(repository: Repository): OId | null

    // Class property signals of Ggit-1.0.Ggit.Index

    connect(sigName: "notify::file", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an index object.
 * @class 
 */
class Index extends Native {

    // Own properties of Ggit-1.0.Ggit.Index

    static name: string
    static $gtype: GObject.GType<Index>

    // Constructors of Ggit-1.0.Ggit.Index

    constructor(config?: Index.ConstructorProperties) 
    _init(config?: Index.ConstructorProperties): void
    /**
     * Create a new bare Git index object as a memory representation of the Git
     * index file in `file,` without a repository to back it.
     * @param file a #GFile.
     * @returns a #GgitIndex or %NULL if an error occurred.
     */
    static open(file: Gio.File): Index | null
}

module Mailmap {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Mailmap {

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Mailmap

    /**
     * Adds a new entry to `mailmap,` replacing `replace_name` and `replace_email`
     * with `real_name` and `real_email` respectively.  If `replace_name` is %NULL,
     * it is ignored during matching.  If either `real_name` or `real_email` is %NULL,
     * the respective field is not replaced.
     * @param real_name the real name of the person.
     * @param real_email the real email of the person.
     * @param replace_name the name to replace.
     * @param replace_email the email to replace.
     */
    add_entry(real_name: string | null, real_email: string | null, replace_name: string | null, replace_email: string): void
    /**
     * Resolves `replace_name` and `replace_email` to `real_name` and `real_email`.
     * If `mailmap` is #NULL, no substitution is performed.
     * @param replace_name the name to replace.
     * @param replace_email the email to replace.
     */
    resolve(replace_name: string, replace_email: string): [ /* real_name */ string, /* real_email */ string ]
    /**
     * Resolves `signature` to use the real name and email according to `mailmap`.
     * If `mailmap` is #NULL, no substitution is performed, but a new signature is
     * still allocated and returned.
     * @param signature the commit signature as recorded.
     * @returns The corrected signature or %NULL.
     */
    resolve_signature(signature: Signature): Signature | null

    // Class property signals of Ggit-1.0.Ggit.Mailmap

    connect(sigName: "notify::native", callback: (($obj: Mailmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Mailmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a mailmap.
 * @class 
 */
class Mailmap extends Native {

    // Own properties of Ggit-1.0.Ggit.Mailmap

    static name: string
    static $gtype: GObject.GType<Mailmap>

    // Constructors of Ggit-1.0.Ggit.Mailmap

    constructor(config?: Mailmap.ConstructorProperties) 
    /**
     * Creates a new #GgitMailmap.
     * @constructor 
     * @returns a newly allocated #GgitMailmap or %NULL.
     */
    constructor() 
    /**
     * Creates a new #GgitMailmap.
     * @constructor 
     * @returns a newly allocated #GgitMailmap or %NULL.
     */
    static new(): Mailmap
    /**
     * Creates a new #GgitMailmap and loads mailmap files according to the
     * configuration of `repository`.
     * @constructor 
     * @param repository a #GgitRepository.
     * @returns a newly allocated #GgitMailmap or %NULL.
     */
    static new_from_repository(repository: Repository): Mailmap
    _init(config?: Mailmap.ConstructorProperties): void
}

module Native {

    // Constructor properties interface

    interface ConstructorProperties extends ObjectFactoryBase.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.Native

        native?: any | null
    }

}

interface Native {

    // Own properties of Ggit-1.0.Ggit.Native

    readonly native: any

    // Own fields of Ggit-1.0.Ggit.Native

    parent_instance: ObjectFactoryBase & GObject.Object

    // Class property signals of Ggit-1.0.Ggit.Native

    connect(sigName: "notify::native", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Native, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a generic native object.
 * @class 
 */
class Native extends ObjectFactoryBase {

    // Own properties of Ggit-1.0.Ggit.Native

    static name: string
    static $gtype: GObject.GType<Native>

    // Constructors of Ggit-1.0.Ggit.Native

    constructor(config?: Native.ConstructorProperties) 
    _init(config?: Native.ConstructorProperties): void
}

module Object {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Object {

    // Own fields of Ggit-1.0.Ggit.Object

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Object

    /**
     * Gets the #GgitOId of `object`.
     * @returns the #GgitOId of the object or %NULL.
     */
    get_id(): OId | null
    /**
     * Gets the #GgitRepository that owns `object`.
     * @returns the #GgitRepository that owns this object or %NULL. The returned value must be free'd calling g_object_unref().
     */
    get_owner(): Repository | null

    // Class property signals of Ggit-1.0.Ggit.Object

    connect(sigName: "notify::native", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a generic object in a repository.
 * @class 
 */
class Object extends Native {

    // Own properties of Ggit-1.0.Ggit.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Ggit-1.0.Ggit.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

module ObjectFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ObjectFactory {

    // Owm methods of Ggit-1.0.Ggit.ObjectFactory

    /**
     * Construct a new object.
     * @param parent_class a #GObjectClass.
     * @param basetype a #GType.
     * @param construct_properties a list of #GObjectConstructParam.
     * @returns a #GObject or %NULL.
     */
    construct(parent_class: GObject.ObjectClass, basetype: GObject.GType, construct_properties: GObject.ObjectConstructParam[]): GObject.Object | null
    /**
     * Register `subtype` as the instantiation class for `basetype`. Each time an
     * object of type `basetype` is going to be created, an instance of `subtype`
     * is created instead. `basetype` must be subclassed from #GgitObjectFactoryBase.
     * @param basetype a #GType.
     * @param subtype a #GType.
     */
    register(basetype: GObject.GType, subtype: GObject.GType): void
    /**
     * Unregister a subtype from the factory.
     * @param basetype a #GType.
     * @param subtype a #GType.
     */
    unregister(basetype: GObject.GType, subtype: GObject.GType): void

    // Class property signals of Ggit-1.0.Ggit.ObjectFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an object factory.
 * @class 
 */
class ObjectFactory extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.ObjectFactory

    static name: string
    static $gtype: GObject.GType<ObjectFactory>

    // Constructors of Ggit-1.0.Ggit.ObjectFactory

    constructor(config?: ObjectFactory.ConstructorProperties) 
    _init(config?: ObjectFactory.ConstructorProperties): void
    /**
     * Get the default type factory instance.
     * @returns a #GgitObjectFactory.
     */
    static get_default(): ObjectFactory
}

module ObjectFactoryBase {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ObjectFactoryBase {

    // Own fields of Ggit-1.0.Ggit.ObjectFactoryBase

    parent_instance: GObject.Object

    // Class property signals of Ggit-1.0.Ggit.ObjectFactoryBase

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the base type for objects created by an object factory.
 * @class 
 */
class ObjectFactoryBase extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.ObjectFactoryBase

    static name: string
    static $gtype: GObject.GType<ObjectFactoryBase>

    // Constructors of Ggit-1.0.Ggit.ObjectFactoryBase

    constructor(config?: ObjectFactoryBase.ConstructorProperties) 
    _init(config?: ObjectFactoryBase.ConstructorProperties): void
}

module ProxyOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ProxyOptions {

    // Own fields of Ggit-1.0.Ggit.ProxyOptions

    parent_instance: GObject.Object

    // Class property signals of Ggit-1.0.Ggit.ProxyOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git proxy options.
 * @class 
 */
class ProxyOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.ProxyOptions

    static name: string
    static $gtype: GObject.GType<ProxyOptions>

    // Constructors of Ggit-1.0.Ggit.ProxyOptions

    constructor(config?: ProxyOptions.ConstructorProperties) 
    /**
     * Create a new proxy options object.
     * @constructor 
     * @returns a #GgitProxyOptions.
     */
    constructor() 
    /**
     * Create a new proxy options object.
     * @constructor 
     * @returns a #GgitProxyOptions.
     */
    static new(): ProxyOptions
    _init(config?: ProxyOptions.ConstructorProperties): void
}

module PushOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.PushOptions

        callbacks?: RemoteCallbacks | null
        parallelism?: number | null
    }

}

interface PushOptions {

    // Own properties of Ggit-1.0.Ggit.PushOptions

    callbacks: RemoteCallbacks
    parallelism: number

    // Own fields of Ggit-1.0.Ggit.PushOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.PushOptions

    /**
     * Get the number of parallel threads to use when creating the pack file
     * to push. The special value 0 indicates that the number of threads will
     * be automatically detected.
     * @returns the number of parallel threads, or 0 for auto-detect.
     */
    get_parallelism(): number
    /**
     * gets the remote callbacks object
     * @returns the object's id or %NULL.
     */
    get_remote_callbacks(): RemoteCallbacks | null
    /**
     * Set the number of parallel threads to use when creating the pack file
     * to push. The special value 0 can be specified for `parallelism` indicating that
     * the number of threads will be automatically detected.
     * @param parallelism the number of threads, or 0 for auto-detect.
     */
    set_parallelism(parallelism: number): void
    /**
     * Set the remote callbacks for the push options
     * @param callbacks the #GgitRemoteCallbacks
     */
    set_remote_callbacks(callbacks: RemoteCallbacks): void

    // Class property signals of Ggit-1.0.Ggit.PushOptions

    connect(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::callbacks", ...args: any[]): void
    connect(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallelism", callback: (($obj: PushOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parallelism", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git push options.
 * @class 
 */
class PushOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.PushOptions

    static name: string
    static $gtype: GObject.GType<PushOptions>

    // Constructors of Ggit-1.0.Ggit.PushOptions

    constructor(config?: PushOptions.ConstructorProperties) 
    /**
     * Create a new push options object.
     * @constructor 
     * @returns a #GgitPushOptions or %NULL.
     */
    constructor() 
    /**
     * Create a new push options object.
     * @constructor 
     * @returns a #GgitPushOptions or %NULL.
     */
    static new(): PushOptions
    _init(config?: PushOptions.ConstructorProperties): void
}

module Rebase {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Rebase {

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Rebase

    /**
     * Aborts a rebase that is currently in progress, resetting the repository
     * and working directory to their state before rebase began.
     */
    abort(): void
    /**
     * Commits the current patch.  You must have resolved any conflicts that
     * were introduced during the patch application from the ggit_rebase_next()
     * invocation.
     * @param author a #GgitSignature or %NULL to keep the author from the original commit.
     * @param committer a #GgitSignature.
     * @param message the message for this commit, or %NULL to use the message from the original commit.
     * @returns a #GgitOId of the newly created commit or %NULL.
     */
    commit(author: Signature | null, committer: Signature, message: string | null): OId | null
    /**
     * Finishes a rebase that is currently in progress once all patches have
     * been applied.
     * @param signature the identity that is finishing the rebase or %NULL.
     */
    finish(signature: Signature | null): void
    /**
     * Gets the rebase operation specified by `idx`.
     * @param idx The index of the rebase operation to retrieve.
     * @returns The rebase operation or %NULL if @idx was out of bounds.
     */
    get_operation_by_index(idx: number): RebaseOperation | null
    /**
     * Gets the count of rebase operations that are to be applied.
     * @returns the count of rebase operations that are to be applied.
     */
    get_operation_entry_count(): number
    /**
     * Gets the index of the rebase operation that is currently being applied.
     * If the first operation has not yet been applied (because you have
     * called ggit_repository_rebase_init() but not yet ggit_rebase_next())
     * then this returns `GGIT_REBASE_NO_OPERATION`.
     * @returns The index of the rebase operation currently being applied.
     */
    get_operation_index(): number
    /**
     * Performs the next rebase operation and returns the information about it.
     * If the operation is one that applies a patch (which is any operation except
     * `GGIT_REBASE_OPERATION_EXEC)` then the patch will be applied and the index and
     * working directory will be updated with the changes. If there are conflicts,
     * you will need to address those before committing the changes.
     * @returns the rebase operation that is to be performed next or %NULL.
     */
    next(): RebaseOperation | null

    // Class property signals of Ggit-1.0.Ggit.Rebase

    connect(sigName: "notify::native", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Rebase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a rebase object.
 * @class 
 */
class Rebase extends Native {

    // Own properties of Ggit-1.0.Ggit.Rebase

    static name: string
    static $gtype: GObject.GType<Rebase>

    // Constructors of Ggit-1.0.Ggit.Rebase

    constructor(config?: Rebase.ConstructorProperties) 
    _init(config?: Rebase.ConstructorProperties): void
}

module Ref {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Ref {

    // Own fields of Ggit-1.0.Ggit.Ref

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Ref

    /**
     * Deletes `ref`.
     * 
     * This method works for both direct and symbolic references.
     * 
     * The reference will be immediately removed on disk and from
     * memory. The given reference pointer will no longer be valid.
     */
    delete(): void
    /**
     * Deletes the log for `ref,` on error `error` is set.
     */
    delete_log(): void
    /**
     * Gets the #GgitReflog for `ref`. The reflog will be created if it doesn't exist
     * yet.
     * @returns the reflog or %NULL.
     */
    get_log(): Reflog | null
    /**
     * Gets the full name of `ref`.
     * @returns the full name of a reference or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the repository where `ref` resides.
     * @returns the repository where a reference resides or %NULL.
     */
    get_owner(): Repository | null
    /**
     * Gets the type of `ref`. Either direct (#GGIT_REF_OID) or
     * symbolic (#GGIT_REF_SYMBOLIC).
     * @returns the type of a reference.
     */
    get_reference_type(): RefType
    /**
     * Gets the shorthand name of `ref`.
     * @returns the shorthand name of a reference or %NULL.
     */
    get_shorthand(): string | null
    /**
     * Get full name to the reference pointed to by a symbolic reference.
     * Only available if the reference is symbolic.
     * @returns the name if available, %NULL otherwise.
     */
    get_symbolic_target(): string | null
    /**
     * Get the OID pointed to by a direct reference.
     * Only available if the reference is direct (i.e. an object id reference,
     * not a symbolic one).
     * @returns a new oid if available, %NULL otherwise.
     */
    get_target(): OId | null
    /**
     * Get whether `ref` has an existing log.
     * @returns %TRUE if @ref has a log, %FALSE otherwise.
     */
    has_log(): boolean
    /**
     * Check whether the reference is a branch.
     * @returns %TRUE if the reference is a branch, %FALSE otherwise.
     */
    is_branch(): boolean
    /**
     * Check whether the reference is a note.
     * @returns %TRUE if the reference is a note, %FALSE otherwise.
     */
    is_note(): boolean
    /**
     * Check whether the reference is a remote.
     * @returns %TRUE if the reference is a remote, %FALSE otherwise.
     */
    is_remote(): boolean
    /**
     * Check whether the reference is a tag.
     * @returns %TRUE if the reference is a tag, %FALSE otherwise.
     */
    is_tag(): boolean
    /**
     * Convenient method to resolve a reference to an object.
     * @returns a #GgitObject or %NULL.
     */
    lookup(): Object | null
    /**
     * Rename an existing reference.
     * 
     * This method works for both direct and symbolic references.
     * 
     * The new name will be checked for validity.
     * See `ggit_ref_create_symbolic()` for rules about valid names.
     * 
     * If not error, `ref` will be deleted from disk and a
     * new #GgitRef will be returned.
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
     * @param force %TRUE to force the renaming.
     * @param log_message The one line long message to be appended to the reflog.
     * @returns a newly created #GgitRef or %NULL.
     */
    rename(new_name: string, force: boolean, log_message: string): Ref | null
    /**
     * Resolves a symbolic reference.
     * 
     * This method iteratively peels a symbolic reference
     * until it resolves to a direct reference to an OID.
     * 
     * If a direct reference is passed as an argument,
     * that reference is returned immediately.
     * @returns the resolved reference to the peeled one or %NULL.
     */
    resolve(): Ref | null
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
     * @returns the newly created #GgitRef or %NULL.
     */
    set_symbolic_target(target: string, log_message: string | null): Ref | null
    /**
     * Create a new reference with the same name as the given reference but a
     * different OID target. The reference must be a direct reference, otherwise
     * this will fail.
     * 
     * The new reference will be written to disk, overwriting the given reference.
     * @param oid a #GgitOId.
     * @param log_message The one line long message to be appended to the reflog.
     * @returns the newly created #GgitRef or %NULL.
     */
    set_target(oid: OId, log_message: string | null): Ref | null
    /**
     * Get a string representation of the ref.
     * @returns a string representation of the ref or %NULL.
     */
    to_string(): string | null

    // Class property signals of Ggit-1.0.Ggit.Ref

    connect(sigName: "notify::native", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Reprensents a git reference.
 * @class 
 */
class Ref extends Native {

    // Own properties of Ggit-1.0.Ggit.Ref

    static name: string
    static $gtype: GObject.GType<Ref>

    // Constructors of Ggit-1.0.Ggit.Ref

    constructor(config?: Ref.ConstructorProperties) 
    _init(config?: Ref.ConstructorProperties): void
    /**
     * Check if the given `name` is a valid name for a reference. Note that `name`
     * should be the full ref name (including prefixes).
     * 
     * Valid toplevel names can contain only capital letters and underscores
     * and must start and end with a letter (e.g. HEAD, ORIG_HEAD).
     * 
     * Valid refs/ names may contain any characters, except '~', '^', ':', '\', '?',
     * '[', '*', ".." and "`{`", because they are interpreted by revparse.
     * @param name the name to validate.
     * @returns %TRUE if @name is valid, %FALSE otherwise.
     */
    static is_valid_name(name: string): boolean
}

module Remote {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface Remote {

    // Own fields of Ggit-1.0.Ggit.Remote

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Remote

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
    connect(direction: Direction, callbacks: RemoteCallbacks, proxy_options: ProxyOptions | null, custom_headers: string | null): void
    /**
     * Closes the connection to the remote and frees the underlying
     * transport.
     */
    disconnect(): void
    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing and download the resulting packfile and
     * its index.
     * @param specs the ref specs.
     * @param fetch_options a #GgitFetchOptions.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    download(specs: string[] | null, fetch_options: FetchOptions): boolean
    /**
     * Check whether `remote` is connected.
     * @returns %TRUE if it is connected.
     */
    get_connected(): boolean
    /**
     * Get the list of fetch refspecs for the given remote.
     * @returns a list of fetch refspecs or %NULL.
     */
    get_fetch_specs(): string[] | null
    /**
     * Gets the remote's name.
     * @returns the name of @remote or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the repository where `remote` resides.
     * @returns the repository where the remote resides or %NULL.
     */
    get_owner(): Repository | null
    /**
     * Get the list of push refspecs for the given remote.
     * @returns a list of push refspecs or %NULL.
     */
    get_push_specs(): string[] | null
    /**
     * Gets the remote's url.
     * @returns the url of @remote or %NULL.
     */
    get_url(): string | null
    /**
     * Get a list of refs at the remote.
     * @returns the remote heads or %NULL.
     */
    list(): RemoteHead[] | null
    /**
     * Prune tracking refs that are no longer present on remote.
     * @param callbacks the callbacks to use for this connection.
     */
    prune(callbacks: RemoteCallbacks): void
    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing, create a packfile with the missing
     * objects and send it.
     * @param specs the ref specs.
     * @param push_options a #GgitPushOptions.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    push(specs: string[] | null, push_options: PushOptions): boolean
    /**
     * Update tips to the new state.
     * @param callbacks a #GgitRemoteCallbacks.
     * @param update_fetch_head whether to write to FETCH_HEAD. %TRUE to behave like git.
     * @param tags_type what the behaviour for downloading tags is for this fetch. This is             ignored for push. This must be the same value passed to             ggit_remote_download().
     * @param message reflog_message The message to insert into the reflogs. If                         %NULL and fetching, the default is "fetch <name>",                         where <name> is the name of the remote (or its url,                         for in-memory remotes). This parameter is ignored when pushing.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    update_tips(callbacks: RemoteCallbacks, update_fetch_head: boolean, tags_type: RemoteDownloadTagsType, message: string | null): boolean
    /**
     * Create a packfile and send it to the server
     * @param specs the ref specs.
     * @param push_options a #GgitPushOptions
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    upload(specs: string[] | null, push_options: PushOptions): boolean

    // Class property signals of Ggit-1.0.Ggit.Remote

    connect(sigName: "notify::native", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git remote.
 * @class 
 */
class Remote extends Native {

    // Own properties of Ggit-1.0.Ggit.Remote

    static name: string
    static $gtype: GObject.GType<Remote>

    // Constructors of Ggit-1.0.Ggit.Remote

    constructor(config?: Remote.ConstructorProperties) 
    /**
     * Creates a remote with the default refspecs in memory. You can use
     * this when you have a URL instead of a remote's name.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param name the remote's name.
     * @param url the remote repository's URL.
     * @returns a newly allocated #GgitRemote or %NULL.
     */
    constructor(repository: Repository, name: string, url: string) 
    /**
     * Creates a remote with the default refspecs in memory. You can use
     * this when you have a URL instead of a remote's name.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param name the remote's name.
     * @param url the remote repository's URL.
     * @returns a newly allocated #GgitRemote or %NULL.
     */
    static new(repository: Repository, name: string, url: string): Remote
    /**
     * Creates a remote with the specified refspec in memory. You can use
     * this when you have a URL instead of a remote's name.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param url the remote repository's URL.
     * @returns a newly allocated #GgitRemote or %NULL.
     */
    static new_anonymous(repository: Repository, url: string): Remote
    _init(config?: Remote.ConstructorProperties): void
}

module RemoteCallbacks {

    // Signal callback interfaces

    /**
     * Signal callback interface for `completion`
     */
    interface CompletionSignalCallback {
        ($obj: RemoteCallbacks, object: RemoteCompletionType): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        ($obj: RemoteCallbacks, object: string | null): void
    }

    /**
     * Signal callback interface for `transfer-progress`
     */
    interface TransferProgressSignalCallback {
        ($obj: RemoteCallbacks, object: TransferProgress): void
    }

    /**
     * Signal callback interface for `update-tips`
     */
    interface UpdateTipsSignalCallback {
        ($obj: RemoteCallbacks, object: string | null, p0: OId, p1: OId): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteCallbacks {

    // Own fields of Ggit-1.0.Ggit.RemoteCallbacks

    parent_instance: GObject.Object

    // Own virtual methods of Ggit-1.0.Ggit.RemoteCallbacks

    vfunc_completion(type: RemoteCompletionType): void
    vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Credtype): Cred | null
    vfunc_progress(message: string): void
    vfunc_transfer_progress(stats: TransferProgress): void
    vfunc_update_tips(refname: string, a: OId, b: OId): void

    // Own signals of Ggit-1.0.Ggit.RemoteCallbacks

    connect(sigName: "completion", callback: RemoteCallbacks.CompletionSignalCallback): number
    connect_after(sigName: "completion", callback: RemoteCallbacks.CompletionSignalCallback): number
    emit(sigName: "completion", object: RemoteCompletionType, ...args: any[]): void
    connect(sigName: "progress", callback: RemoteCallbacks.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: RemoteCallbacks.ProgressSignalCallback): number
    emit(sigName: "progress", object: string | null, ...args: any[]): void
    connect(sigName: "transfer-progress", callback: RemoteCallbacks.TransferProgressSignalCallback): number
    connect_after(sigName: "transfer-progress", callback: RemoteCallbacks.TransferProgressSignalCallback): number
    emit(sigName: "transfer-progress", object: TransferProgress, ...args: any[]): void
    connect(sigName: "update-tips", callback: RemoteCallbacks.UpdateTipsSignalCallback): number
    connect_after(sigName: "update-tips", callback: RemoteCallbacks.UpdateTipsSignalCallback): number
    emit(sigName: "update-tips", object: string | null, p0: OId, p1: OId, ...args: any[]): void

    // Class property signals of Ggit-1.0.Ggit.RemoteCallbacks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a git remote callbacks.
 * @class 
 */
class RemoteCallbacks extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.RemoteCallbacks

    static name: string
    static $gtype: GObject.GType<RemoteCallbacks>

    // Constructors of Ggit-1.0.Ggit.RemoteCallbacks

    constructor(config?: RemoteCallbacks.ConstructorProperties) 
    _init(config?: RemoteCallbacks.ConstructorProperties): void
}

module Repository {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Native.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.Repository

        cloneOptions?: CloneOptions | null
        init?: boolean | null
        isBare?: boolean | null
        location?: Gio.File | null
        url?: string | null
        workdir?: Gio.File | null
    }

}

interface Repository extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.Repository

    readonly cloneOptions: CloneOptions
    readonly head: Ref
    // Has conflict: readonly init: boolean
    readonly isBare: boolean
    readonly location: Gio.File
    readonly url: string | null
    workdir: Gio.File

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Repository

    /**
     * Adds a fetch refspec to the `remote'`s configuration.
     * Adds `refspec` to the fetch list in the configuration. No
     * loaded remote instances will be affected.
     * @param remote a #GgitRemote.
     * @param refspec the fetch refspec.
     */
    add_remote_fetch(remote: Remote, refspec: string): void
    /**
     * Adds a push refspec to `remote'`s configuration.
     * Adds the given refspec to the push list in the configuration. No
     * loaded remote instances will be affected.
     * @param remote a #GgitRemote.
     * @param refspec the push refspec.
     */
    add_remote_push(remote: Remote, refspec: string): void
    /**
     * Get a blame for a single file.
     * @param file the file to blame.
     * @param blame_options blame options.
     * @returns a #GgitBlame.
     */
    blame_file(file: Gio.File, blame_options: BlameOptions | null): Blame | null
    /**
     * Update files in the working tree to reflect the contents of current HEAD. If
     * `options` is %NULL, then the default checkout options will be used.
     * 
     * If the checkout was not successfull, then `error` will be set.
     * @param options a #GgitCheckoutOptions or %NULL.
     * @returns %TRUE if the checkout was successfull, %FALSE otherwise.
     */
    checkout_head(options: CheckoutOptions | null): boolean
    /**
     * Update files in the working tree to reflect the contents of the index. If
     * `index` is %NULL, then the current index of the repository will be used. If
     * `options` is %NULL, then the default checkout options will be used.
     * 
     * If the checkout was not successfull, then `error` will be set.
     * @param index a #GgitIndex or %NULL.
     * @param options a #GgitCheckoutOptions or %NULL.
     * @returns %TRUE if the checkout was successfull, %FALSE otherwise.
     */
    checkout_index(index: Index | null, options: CheckoutOptions | null): boolean
    /**
     * Update files in the working tree to reflect the contents of the specified
     * commit, tag or tree object. If `tree` is %NULL, then the current HEAD of the
     * repository will be used. If `options` is %NULL, then the default checkout
     * options will be used.
     * 
     * If the checkout was not successfull, then `error` will be set.
     * @param tree a #GgitObject or %NULL.
     * @param options a #GgitCheckoutOptions or %NULL.
     * @returns %TRUE if the checkout was successfull, %FALSE otherwise.
     */
    checkout_tree(tree: Object | null, options: CheckoutOptions | null): boolean
    /**
     * Cherry pick the specified commit, making changes in the index and the working
     * directory.
     * @param commit a #GgitCommit.
     * @param options a #GgitCherryPickOptions.
     * @returns %TRUE if the commit was cherry-picked successfully, %FALSE otherwise.
     */
    cherry_pick(commit: Commit, options: CherryPickOptions): boolean
    /**
     * Cherry-picks the given `commit` against the provided `our_commit,` producing
     * and index that reflects the result of the cherry-pick.
     * @param commit a #GgitCommit to cherry-pick.
     * @param our_commit a #GgitCommit to cherry-pick on.
     * @param mainline the parent of the commit, in case of a merge commit.
     * @param merge_options a #GgitMergeOptions.
     * @returns a #GgitIndex.
     */
    cherry_pick_commit(commit: Commit, our_commit: Commit, mainline: number, merge_options: MergeOptions | null): Index | null
    /**
     * Create a new blob and return a #GOutputStream to write contents to the blob.
     * This is an efficient way to create new blobs without copying data. The
     * blob id can be obtained from the blob output stream using
     * #ggit_blob_output_stream_get_id, after you close the stream.
     * @returns a #GgitBlobOutputStream.
     */
    create_blob(): BlobOutputStream | null
    /**
     * Write an in-memory buffer to the object database as a blob.
     * @param buffer the data.
     * @returns the new #GgitOid of the written blob, or %NULL if writing the blob failed.
     */
    create_blob_from_buffer(buffer: Uint8Array): OId | null
    /**
     * Write a file to the object database as a blob.
     * 
     * Returns (transfer full) (nullable): the new #GgitOid of the written blob,
     * or %NULL if writing the blob failed.
     * @param file a #GFile.
     */
    create_blob_from_file(file: Gio.File): OId
    /**
     * Write a path relative to the repository working directory to the object
     * database as a blob.
     * @param path the file path.
     * @returns the new #GgitOid of the written blob, or %NULL if writing the blob failed.
     */
    create_blob_from_path(path: string): OId | null
    /**
     * Creates a new branch pointing at a target commit.
     * @param branch_name the name of the branch.
     * @param target a #GgitObject.
     * @param flags a #GgitCreateFlags.
     * @returns the reference to which the branch                                        points, or %NULL in case of an error.
     */
    create_branch(branch_name: string, target: Object, flags: CreateFlags): Branch | null
    /**
     * Create a new commit. If `update_ref` is not %NULL, the given reference will
     * be updated to point to the newly created commit. Use "HEAD" to update the
     * HEAD of the current branch and make it point to this commit.
     * 
     * If `message_encoding` is set to %NULL, "UTF-8" encoding is assumed for the
     * provided `message`. Note that `message` will not be cleaned up automatically.
     * You can use #ggit_message_prettify to do this yourself if needed.
     * @param update_ref name of the reference to update.
     * @param author author signature.
     * @param committer committer signature (and time of commit).
     * @param message_encoding message encoding.
     * @param message commit message.
     * @param tree the tree of objects to commit.
     * @param parents parent commits.
     * @returns the #GgitOId of the created commit object, or %NULL in case of an error.
     */
    create_commit(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree, parents: Commit[]): OId | null
    /**
     * Create a commit as with git_commit_create() but instead of writing it to the objectdb,
     * write the contents of the object into a buffer.
     * @param author author signature.
     * @param committer committer signature (and time of commit).
     * @param message_encoding message encoding.
     * @param message commit message.
     * @param tree the tree of objects to commit.
     * @param parents parent commits.
     * @returns the commit object content or %NULL in case of an error.
     */
    create_commit_buffer(author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree, parents: Commit[]): string | null
    /**
     * Create a new commit. If `update_ref` is not %NULL, the given reference will
     * be updated to point to the newly created commit. Use "HEAD" to update the
     * HEAD of the current branch and make it point to this commit.
     * 
     * If `message_encoding` is set to %NULL, "UTF-8" encoding is assumed for the
     * provided `message`. Note that `message` will not be cleaned up automatically.
     * You can use #ggit_message_prettify to do this yourself if needed.
     * @param update_ref name of the reference to update.
     * @param author author signature.
     * @param committer committer signature (and time of commit).
     * @param message_encoding message encoding.
     * @param message commit message.
     * @param tree the tree of objects to commit.
     * @param parents parent commits.
     * @returns the #GgitOId of the created commit object, or %NULL in case of an error.
     */
    create_commit_from_ids(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: OId, parents: OId[]): OId | null
    /**
     * Given the unsigned commit object's contents, its signature and the header field
     * in which to store the signature, attach the signature to the commit and write it
     * into the given repositoryCreate a new commit using the (if not NULL) signature
     * key and type of key provided.
     * @param commit_content the content of the unsigned commit.
     * @param signature the signature to add to the commit.
     * @param signature_field which header field should contain this signature. Leave `NULL` for the default of "gpgsig".
     * @returns the #GgitOId of the created commit object, or %NULL in case of an error.
     */
    create_commit_with_signature(commit_content: string, signature: string | null, signature_field: string | null): OId | null
    /**
     * Create a new index entry. When `file` is not %NULL, the path of the returned
     * entry (#ggit_index_entry_get_path) is set to the path of `file` relative to
     * the working directory of `repository`. The file must reside in the working
     * directory of `repository`. The file related
     * fields of the returned entry are also queried from this file (if the file exists).
     * 
     * If `id` is not %NULL, then the id of the returned entry is set to `id`
     * (see #ggit_index_entry_get_id) which could point to a blob (for a file)
     * or a tree (for a directory).
     * @param file a #GFile.
     * @param id a #GgitOId.
     * @returns a #GgitIndexEntry or %NULL when an error occurred.
     */
    create_index_entry_for_file(file: Gio.File | null, id: OId | null): IndexEntry | null
    /**
     * Create a new index entry. When `path` is not %NULL, the path of the returned
     * entry (#ggit_index_entry_get_path) is set to `path`. The specified path can be
     * either absolute or relative. In the case of
     * an absolute path, the path must reside within the working directory of
     * `repository`. The file related fields of the returned entry are also queried
     * from this path (if the file exists).
     * 
     * If `id` is not %NULL, then the id of the returned entry is set to `id`
     * (see #ggit_index_entry_get_id) which could point to a blob (for a file)
     * or a tree (for a directory).
     * @param path a path.
     * @param id a #GgitOId.
     * @returns a #GgitIndexEntry or %NULL when an error occurred.
     */
    create_index_entry_for_path(path: string | null, id: OId | null): IndexEntry | null
    /**
     * Adds a note for an object.
     * @param notes_ref canonical name of the reference to use, or %NULL to use the default ref.
     * @param author author signature.
     * @param committer committer signature.
     * @param id OID of the git object to decorate.
     * @param note content of the note to add for object oid.
     * @param force whether to overwrite existing note.
     * @returns the OID for the note or %NULL in case of error.
     */
    create_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId, note: string, force: boolean): OId | null
    /**
     * Creates a new object id reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param oid the #GgitOId pointed to by the reference.
     * @param log_message The one line long message to be appended to the reflog.
     * @returns the newly created reference.
     */
    create_reference(name: string, oid: OId, log_message: string): Ref | null
    /**
     * Adds a remote with the default fetch refspec to the repository's configuration.
     * @param name the name of the new remote.
     * @param url the url of the remote.
     * @returns a new #GgitRemote or %NULL if there is an error.
     */
    create_remote(name: string, url: string): Remote | null
    /**
     * Creates a new symbolic reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param target the full name to the reference.
     * @param log_message The one line long message to be appended to the reflog.
     * @returns the newly created reference.
     */
    create_symbolic_reference(name: string, target: string, log_message: string): Ref | null
    /**
     * Create a new tag object.
     * @param tag_name the tag name.
     * @param target a #GgitObject.
     * @param tagger a #GgitSignature.
     * @param message the tag message.
     * @param flags a #GgitCreateFlags.
     * @returns the id to which the tag points, or                                        %NULL in case of an error.
     */
    create_tag(tag_name: string, target: Object, tagger: Signature, message: string, flags: CreateFlags): OId | null
    /**
     * Creates a new annotated tag.
     * @param tag_name the name of the tag.
     * @param target a #GgitObject.
     * @param signature a #GgitObject.
     * @param message the tag message.
     * @returns the id to which the tag points, or                                        %NULL in case of an error.
     */
    create_tag_annotation(tag_name: string, target: Object, signature: Signature, message: string): OId | null
    /**
     * Create a new tag from a buffer describing the tag object. The buffer must
     * be correctly formatted.
     * @param tag the tag buffer.
     * @param flags a #GgitCreateFlags.
     * @returns the id to which the tag points, or                                        %NULL in case of an error.
     */
    create_tag_from_buffer(tag: string, flags: CreateFlags): OId | null
    /**
     * Creates a new lightweight tag.
     * @param tag_name the name of the tag.
     * @param target a #GgitObject.
     * @param flags a #GgitCreateFlags.
     * @returns the id to which the tag points, or                                        %NULL in case of an error.
     */
    create_tag_lightweight(tag_name: string, target: Object, flags: CreateFlags): OId | null
    /**
     * Create a new tree builder.
     * @returns a new #GgitTreeBuilder, or %NULL if there was an error.
     */
    create_tree_builder(): TreeBuilder | null
    /**
     * Create a tree builder for initialized with `tree`. To create an empty
     * tree builder, use #ggit_repository_create_tree_builder instead.
     * @param tree a #GgitTree.
     * @returns a new #GgitTreeBuilder object, or %NULL if there was an error.
     */
    create_tree_builder_from_tree(tree: Tree): TreeBuilder | null
    /**
     * Delete an existing tag reference by name.
     * @param name the name of the tag.
     * @returns %TRUE if the tag was deleted successfully, %FALSE otherwise.
     */
    delete_tag(name: string): boolean
    /**
     * Removes a single stashed state from the stash list.
     * @param index the position within the stash list. 0 points to the. most recent stashed state.
     */
    drop_stash(index: number): void
    /**
     * Get a branch enumerator to enumerate over all branches of the specified
     * `list_type` in `repository`.
     * @param list_type a #GgitBranchType.
     * @returns a branch enumerator.
     */
    enumerate_branches(list_type: BranchType): BranchEnumerator | null
    /**
     * Gets the file status for a single file.
     * @param location the file to retrieve status for, rooted at the repository working dir.
     * @returns the status for a single file.
     */
    file_status(location: Gio.File): StatusFlags
    /**
     * Gathers file statuses and run a callback for each one.
     * 
     * To the callback is passed the path of the file, the status and the data pointer
     * passed to this function. If the callback returns something other than
     * 0, the iteration will stop and `error` will be set.
     * 
     * Set `options` to %NULL to get the default status options.
     * @param options status options, or %NULL.
     * @param callback a #GgitStatusCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    file_status_foreach(options: StatusOptions | null, callback: StatusCallback): boolean
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
    get_ahead_behind(local: OId, upstream: OId): [ /* ahead */ number, /* behind */ number ]
    /**
     * Get the attribute value of the specified attribute for the given file.
     * @param path the relative path to the file.
     * @param name the name of the attribute.
     * @param flags a #GgitAttributeCheckFlags.
     * @returns the attribute value, or %NULL.
     */
    get_attribute(path: string, name: string, flags: AttributeCheckFlags): string | null
    /**
     * Get the config for a specific repository.
     * @returns a #GgitConfig.
     */
    get_config(): Config | null
    /**
     * Gets the default notes reference for `repository`. It defaults to
     * "refs/notes/commits".
     * @returns the default notes reference for @repository.
     */
    get_default_notes_ref(): string | null
    /**
     * Check whether `com` mit is a descendant of `ancestor`. Note that if this
     * function returns %FALSE, an error might have occurred. If so, `error` will
     * be set appropriately.
     * @param commit the commit.
     * @param ancestor the ancestor.
     * @returns %TRUE if @commit is a descendant of @ancestor, or %FALSE otherwise.
     */
    get_descendant_of(commit: OId, ancestor: OId): boolean
    /**
     * Get and resolves the current HEAD reference of the repository. Note that the
     * returned ref is already resolved (if HEAD is symbolic). If you want to
     * retrieve the symbolic ref called HEAD, then use #ggit_repository_lookup_reference
     * instead.
     * @returns a #GgitRef
     */
    get_head(): Ref | null
    /**
     * Get the index for a specific repository.
     * @returns a #GgitIndex.
     */
    get_index(): Index | null
    /**
     * Get the gitdir location of the repository.
     * @returns the location of the gitdir of the repository.
     */
    get_location(): Gio.File | null
    /**
     * Gets the status for a submodule.
     * This looks at a submodule and tries to determine the status.  It
     * will return a combination of the %GGIT_SUBMODULE_STATUS values.
     * How deeply it examines the working directory to do this will depend
     * on `ignore`.
     * @param name the name of the submodule.
     * @param ignore the ignore rules to follow.
     * @returns the #GgitSubmoduleStatus for @submodule.
     */
    get_submodule_status(name: string, ignore: SubmoduleIgnore): SubmoduleStatus
    /**
     * Gets the working directory of the repository.
     * @returns the location of the working directory of the repository.
     */
    get_workdir(): Gio.File | null
    /**
     * Checks if `repository` is bare.
     * @returns %TRUE if the repository is empty.
     */
    is_bare(): boolean
    /**
     * Checks if `repository` is empty.
     * 
     * An empty repository has just been initialized and contains
     * no commits.
     * @returns %TRUE if the repository is empty.
     */
    is_empty(): boolean
    /**
     * Checks if `repository'`s HEAD is detached.
     * 
     * A repository's HEAD is detached when it points directly to a commit
     * instead of a branch.
     * @returns %TRUE if HEAD is detached.
     */
    is_head_detached(): boolean
    /**
     * Checks if `repository'`s HEAD is an orphan.
     * 
     * An orphan branch is one named from HEAD but doesn't exist in
     * the refs namespace, because it doesn't have any commit to point to.
     * @returns %TRUE if the current branch is an orphan.
     */
    is_head_unborn(): boolean
    /**
     * Fill a list with all the remotes in `repository`.
     * @returns a list with the remotes.
     */
    list_remotes(): string[] | null
    /**
     * Fill a list with all the tags in the `repository`.
     * @returns a list with the tags in @repository.
     */
    list_tags(): string[] | null
    /**
     * Fill a list with all the tags in the `repository` matching the provided
     * pattern. The pattern can use standard fnmatch syntax.
     * @param pattern a pattern to match.
     * @returns a list with matching tags in @repository.
     */
    list_tags_match(pattern: string | null): string[] | null
    /**
     * Lookups a reference to one of the objects in the `repository`.
     * 
     * The generated reference must be freed with g_object_unref().
     * 
     * The `gtype` must match the type of the object
     * in the odb; the method will fail otherwise.
     * The special value %G_TYPE_NONE may be passed to let
     * the method guess the object's type.
     * @param oid a #GgitOId.
     * @param gtype a #GType.
     * @returns the found #GgitObject, or %NULL on error.
     */
    lookup(oid: OId, gtype: GObject.GType): Object | null
    /**
     * Lookups a branch by its name in a repository.
     * @param oid a #GgitOId.
     * @returns a #GgitBlog pointer.
     */
    lookup_blob(oid: OId): Blob | null
    /**
     * Lookups a branch by its name in a repository.
     * @param branch_name the name of the branch.
     * @param branch_type a #GgitBranchType.
     * @returns a branch by its name in a repository.
     */
    lookup_branch(branch_name: string, branch_type: BranchType): Branch | null
    /**
     * Lookups a branch by its name in a repository.
     * @param oid a #GgitOId.
     * @returns a #GgitCommit pointer.
     */
    lookup_commit(oid: OId): Commit | null
    /**
     * Lookups a reference by its name in `repository`. The returned #GgitRef must
     * be freed with g_object_unref().
     * @param name the long name for the reference (e.g. HEAD, ref/heads/master, refs/tags/v0.1.0, ...).
     * @returns the searched reference.
     */
    lookup_reference(name: string): Ref | null
    /**
     * Lookups a reference by its short name in `repository` applying the git precendence
     * rules to the given shorthand to determine which reference the user is referring to.
     * The returned #GgitRef must be freed with g_object_unref().
     * @param short_name the short name for the reference (e.g. master, v0.1.0, ...).
     * @returns the searched reference.
     */
    lookup_reference_dwim(short_name: string): Ref | null
    /**
     * Gets the remote called `name`.
     * @param name the remote's name.
     * @returns a new #GgitRemote or %NULL if there is an error.
     */
    lookup_remote(name: string): Remote | null
    /**
     * Lookups a submodule information by name or path. If the submodule
     * does not exist, %NULL is returned and a GGIT_ERROR_NOTFOUND error set.
     * @param name the name of the submodule.
     * @returns a newly-allocated #GgitSubmodule.
     */
    lookup_submodule(name: string): Submodule | null
    /**
     * Lookups a branch by its name in a repository.
     * @param oid a #GgitOId.
     * @returns a #GgitTag pointer.
     */
    lookup_tag(oid: OId): Tag | null
    /**
     * Lookups a branch by its name in a repository.
     * @param oid a #GgitOId.
     * @returns a #GgitTree pointer.
     */
    lookup_tree(oid: OId): Tree | null
    /**
     * Merges the given commit(s) into HEAD, writing the results into the working directory.
     * Any changes are staged for commit and any conflicts are written to the index.
     * 
     * Callers should inspect the repository's index after this completes, resolve any conflicts and prepare a commit.
     * @param their_heads the heads to merge into
     * @param merge_opts merge options
     * @param checkout_opts checkout options
     */
    merge(their_heads: AnnotatedCommit[], merge_opts: MergeOptions, checkout_opts: CheckoutOptions): void
    /**
     * Find the merge base between two commits
     * @param oid_one the oid of one of the commits.
     * @param oid_two the oid of the second of the commits
     * @returns a new #GgitOId or %NULL if an error occurred.
     */
    merge_base(oid_one: OId, oid_two: OId): OId | null
    /**
     * Merge two commits creating a #GgitIndex reflecting the result of the merge.
     * @param our_commit the commit that reflects the destination tree.
     * @param their_commit the commit that reflects the source tree.
     * @param merge_options the merge options.
     * @returns a new #GgitIndex or %NULL if an error occurred.
     */
    merge_commits(our_commit: Commit, their_commit: Commit, merge_options: MergeOptions): Index | null
    /**
     * Merge two trees creating a #GgitIndex reflecting the result of the merge.
     * @param ancestor_tree the common ancestor between the trees, or %NULL.
     * @param our_tree the tree that reflects the destination tree.
     * @param their_tree the tree that reflects the source tree.
     * @param merge_options the merge options.
     * @returns a new #GgitIndex or %NULL if an error occurred.
     */
    merge_trees(ancestor_tree: Tree, our_tree: Tree, their_tree: Tree, merge_options: MergeOptions): Index | null
    /**
     * Loop over all the notes within a specified namespace
     * and issue a callback for each one.
     * If `callback` returns a non-zero value, this will stop looping.
     * @param notes_ref canonical name of the reference to use, or %NULL to use the default ref.
     * @param callback a #GgitNoteCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise.
     */
    note_foreach(notes_ref: string | null, callback: NoteCallback): boolean
    /**
     * Tests if the ignore rules apply to the path provided.
     * 
     * This acts similar to filtering performed when calling "git add ."
     * on the command line.
     * @param path A path within the repository.
     * @returns %TRUE if @path should be ignored.
     */
    path_is_ignored(path: string): boolean
    /**
     * Reads the note for an object.
     * @param notes_ref canonical name of the reference to use, or %NULL to use the default ref.
     * @param id OID of the git object to decorate.
     * @returns the read note or %NULL in case of an error.
     */
    read_note(notes_ref: string | null, id: OId): Note | null
    /**
     * Initializes a rebase operation to rebase the changes in `branch`
     * relative to `upstream` onto another branch. To begin the rebase
     * process, call git_rebase_next(). When you have finished with this
     * object, call g_object_unref().
     * @param branch the terminal commit to rebase, or %NULL to rebase the current branch.
     * @param upstream the commit to begin rebasing from, or %NULL to rebase all reachable commits.
     * @param onto the branch to rebase onto, or %NULL to rebase onto the given upstream.
     * @param options a #GgitRebaseOptions to specify how rebase is performed, or %NULL.
     * @returns a newly allocated #GgitRebase.
     */
    rebase_init(branch: AnnotatedCommit | null, upstream: AnnotatedCommit | null, onto: AnnotatedCommit | null, options: RebaseOptions): Rebase | null
    /**
     * Opens an existing rebase that was previously started by either an
     * invocation of ggit_rebase_init() or by another client.
     * @param options a #GgitRebaseOptions to specify how rebase is performed, or %NULL.
     * @returns a newly allocated #GgitRebase.
     */
    rebase_open(options: RebaseOptions): Rebase | null
    /**
     * Gathers references and run a callback for each one.
     * 
     * To the callback is passed the reference and the data pointer
     * passed to this function. If the callback returns something other than
     * 0, the iteration will stop and `error` will be set.
     * @param callback a #GgitReferencesCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    references_foreach(callback: ReferencesCallback): boolean
    /**
     * Gathers reference names and run a callback for each one.
     * 
     * To the callback is passed the name of the reference and the data pointer
     * passed to this function. If the callback returns something other than
     * 0, the iteration will stop and `error` will be set.
     * @param callback a #GgitReferencesNameCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    references_foreach_name(callback: ReferencesNameCallback): boolean
    /**
     * Removes the note for an object.
     * @param notes_ref canonical name of the reference to use, or %NULL to use the default ref.
     * @param author author signature.
     * @param committer committer signature.
     * @param id OID of the git object to decorate.
     * @returns %TRUE if the note was removed from @id.
     */
    remove_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId): boolean
    /**
     * Removes `remote` from the `repository`.
     * @param name the remote's name.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    remove_remote(name: string): boolean
    /**
     * Rename the remote of `repository` from `name` to `new_name`.
     * @param name the remote name to be renamed.
     * @param new_name new name of the remote.
     * @returns non-default refspecs that cannot be renamed.
     */
    rename_remote(name: string, new_name: string): string[] | null
    /**
     * Performs a reset of type `reset_type` on `repository` to `target,`
     * or `error` will be set.
     * @param target the target #GgitObject which is a commit or a tag.
     * @param reset_type the #GgitResetType to perform.
     * @param checkout_options the #GgitCheckoutOptions to be used for a HARD reset.
     */
    reset(target: Object, reset_type: ResetType, checkout_options: CheckoutOptions): void
    /**
     * Update some entries in the index from the target commit tree. The scope of
     * the updated entries is determined by the paths specified in `pathspecs`.
     * Passing %NULL in `target` will result in removing entries in the index
     * matching the provided pathspecs.
     * @param target the target #GgitObject which is a commit or a tag.
     * @param pathspecs a list of file paths to reset.
     */
    reset_default(target: Object | null, pathspecs: string[]): void
    /**
     * Revert the given `commit` on top of the current working directory.
     * @param commit a #GgitCommit.
     * @param options a #GgitRevertOptions.
     * @returns %TRUE if the revert was successfull, %FALSE otherwise.
     */
    revert(commit: Commit, options: RevertOptions): boolean
    /**
     * Find an object, as specified by a revision string. See `man gitrevisions`,
     * or the documentation for `git rev-parse` for information on the syntax
     * accepted.
     * @param spec the revision specification.
     * @returns a #GgitObject or %NULL if the revision could not be found.
     */
    revparse(spec: string): Object | null
    /**
     * Saves the local modifications to a new stash.
     * It returns the commit containing the stashed state.
     * This commit is also the target of the direct reference refs/stash.
     * @param stasher a #GgitSignature.
     * @param message description along with the stashed state or %NULL to be autogenerated.
     * @param flags a #GgitStashFlags to control the stashing process.
     * @returns a new object id of the commit containing the stashed state.
     */
    save_stash(stasher: Signature, message: string, flags: StashFlags): OId | null
    set_head(ref_name: string): boolean
    set_head_detached(oid: OId): boolean
    /**
     * Sets url for the `remote` from the `repository`.
     * @param remote the remote name who's url is to be set.
     * @param url url of the remote.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    set_remote_url(remote: string, url: string): boolean
    /**
     * Sets the submodule.'name'.fetchRecurseSubmodules value for
     * the submodule. This setting won't affect any existing instances..
     * @param name the name of the submodule.
     * @param fetch_recurse_submodules a #GgitSubmoduleRecurse.
     */
    set_submodule_fetch_recurse(name: string, fetch_recurse_submodules: SubmoduleRecurse): void
    /**
     * Sets the ignore rule for the submodule in the configuration.
     * This does not affect any currently-loaded instances..
     * @param name the name of the submodule.
     * @param ignore a #GgitSubmoduleIgnore.
     */
    set_submodule_ignore(name: string, ignore: SubmoduleIgnore): void
    /**
     * Sets the update rule for the submodule in the configuration.
     * This setting won't affect any existing instances.
     * @param name the name of the submodule.
     * @param update a #GgitSubmoduleUpdate.
     */
    set_submodule_update(name: string, update: SubmoduleUpdate): void
    /**
     * Sets the URL for the submodule in the configuration.
     * 
     * After calling this, you may wish to call ggit_submodule_sync() to
     * write the changes to the checked out submodule repository.
     * @param name the name of the submodule to configure.
     * @param url URL that should be used for the submodule.
     */
    set_submodule_url(name: string, url: string): void
    /**
     * Sets the working directory of the repository. If `update_gitlink` is set to
     * %TRUE "core.worktree" will be set in the config if workdir is not the parent
     * of the .git directory).
     * @param workdir the working directory.
     * @param update_gitlink create/update gitlink in workdir.
     */
    set_workdir(workdir: Gio.File, update_gitlink: boolean): void
    /**
     * Loops over all the stashed states and issue a callback for each one.
     * If `callback` returns a non-zero value, this will stop looping.
     * @param callback a #GgitStashCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise.
     */
    stash_foreach(callback: StashCallback): boolean
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
     * @param callback a #GgitStatusCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    submodule_foreach(callback: SubmoduleCallback): boolean
    /**
     * Get all the tags in the repository and run the provided callback on each. If
     * the callback returns something other than 0, the iteration will stop and
     * `error` will be set.
     * @param callback a #GgitTagCallback.
     * @returns %TRUE if there was no error, %FALSE otherwise
     */
    tag_foreach(callback: TagCallback): boolean

    // Class property signals of Ggit-1.0.Ggit.Repository

    connect(sigName: "notify::clone-options", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clone-options", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clone-options", ...args: any[]): void
    connect(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::head", ...args: any[]): void
    connect(sigName: "notify::init", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::init", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::init", ...args: any[]): void
    connect(sigName: "notify::is-bare", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-bare", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-bare", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::workdir", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an existing git repository including all of it's
 * object contents.
 * @class 
 */
class Repository extends Native {

    // Own properties of Ggit-1.0.Ggit.Repository

    static name: string
    static $gtype: GObject.GType<Repository>

    // Constructors of Ggit-1.0.Ggit.Repository

    constructor(config?: Repository.ConstructorProperties) 
    _init(config?: Repository.ConstructorProperties): void
    /**
     * Clones a new git repository in the given folder.
     * @param url url to fetch the repository from.
     * @param location the location of the repository.
     * @param options a #GgitCloneOptions.
     * @returns a newly created #GgitRepository.
     */
    static clone(url: string, location: Gio.File, options: CloneOptions | null): Repository | null
    /**
     * Looks for a git repository.
     * 
     * The lookup starts from `path` and walks up the parent directories
     * and stops when a repository is found.
     * @param location the base location where the lookup starts.
     * @returns the repository location.
     */
    static discover(location: Gio.File): Gio.File | null
    /**
     * Looks for a git repository.
     * 
     * The lookup starts from `path` and walks up the parent directories
     * and stops when a repository is found.
     * @param location the base location where the lookup starts.
     * @param across_fs indictaes whether lookup will work across filesystem devices.
     * @param ceiling_dirs a list of absolute paths   at which lookup will stop when reached, or %NULL.
     * @returns the repository location.
     */
    static discover_full(location: Gio.File, across_fs: boolean, ceiling_dirs: string[] | null): Gio.File | null
    /**
     * Creates a new git repository in the given folder.
     * @param location the location of the repository.
     * @param is_bare if %TRUE, a git repository without a working directory is created           at the pointed path. If %FALSE, provided path will be considered as the working           directory into which the .git directory will be created.
     * @returns a newly created #GgitRepository.
     */
    static init_repository(location: Gio.File, is_bare: boolean): Repository | null
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
     * @returns a newly created #GgitRepository.
     */
    static open(location: Gio.File): Repository | null
}

module RevisionWalker {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Native.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.RevisionWalker

        repository?: Repository | null
    }

}

interface RevisionWalker extends Gio.Initable {

    // Own properties of Ggit-1.0.Ggit.RevisionWalker

    repository: Repository

    // Own fields of Ggit-1.0.Ggit.RevisionWalker

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.RevisionWalker

    /**
     * Gets the repository on which this walker is operating.
     * @returns the repository on which this walker is operating or %NULL.
     */
    get_repository(): Repository | null
    /**
     * Marks a commit (and its ancestors) uninteresting for the output.
     * 
     * The given OID must belong to a commit on the walked
     * repository.
     * 
     * The resolved commit and all its parents will be hidden from the
     * output on the revision walk.
     * @param oid a #GgitOId.
     */
    hide(oid: OId): void
    /**
     * Hide all OIDs pointed to by references that match the given glob pattern
     * to the revsision walker. A leading 'refs/' is implied if not present, as well
     * as a trailing '/ \ *' if the glob lacks '?', '\ *' or '['.
     * @param item the glob to hide.
     */
    hide_glob(item: string): void
    /**
     * Hide the OID of the current HEAD to the revision walker.
     */
    hide_head(): void
    /**
     * Hide the OID pointed to by the named reference to the revision walker.
     * @param item the reference to hide.
     */
    hide_ref(item: string): void
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
     * @returns the next commit from the revision walk or %NULL.
     */
    next(): OId | null
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
     * @param oid a #GgitOId.
     */
    push(oid: OId): void
    /**
     * Push all OIDs pointed to by references that match the given glob pattern
     * to the revsision walker. A leading 'refs/' is implied if not present, as well
     * as a trailing '/ \ *' if the glob lacks '?', '\ *' or '['.
     * @param item the glob to push.
     */
    push_glob(item: string): void
    /**
     * Push the OID of the current HEAD to the revision walker.
     */
    push_head(): void
    /**
     * Push and hide the respective endpoints of the given range. The range
     * should be of the form: &ltcommit&gt..&lt;commit&gt;, where each &lt;commit&gt; is in the
     * form accepted by revparse. The left-hand commit will be hidden and the
     * right-hand commit pushed.
     * @param range the range to push.
     */
    push_range(range: string): void
    /**
     * Push the OID pointed to by the named reference to the revision walker.
     * @param item the reference to push.
     */
    push_ref(item: string): void
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
    reset(): void
    /**
     * Change the sorting mode when iterating through the
     * repository's contents.
     * 
     * Changing the sorting mode resets the walker.
     * @param sort_mode a #GgitSortMode value.
     */
    set_sort_mode(sort_mode: SortMode): void

    // Class property signals of Ggit-1.0.Ggit.RevisionWalker

    connect(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: RevisionWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a revision walker.
 * @class 
 */
class RevisionWalker extends Native {

    // Own properties of Ggit-1.0.Ggit.RevisionWalker

    static name: string
    static $gtype: GObject.GType<RevisionWalker>

    // Constructors of Ggit-1.0.Ggit.RevisionWalker

    constructor(config?: RevisionWalker.ConstructorProperties) 
    /**
     * Creates a new revision walker to iterate through `repository`.
     * 
     * This revision walker uses a custom memory pool and an internal
     * commit cache, so it is relatively expensive to allocate.
     * 
     * For maximum performance, this revision walker should be
     * reused for different walks.
     * 
     * This revision walker is *not* thread safe: it may only be
     * used to walk a repository on a single thread; however,
     * it is possible to have several revision walkers in
     * several different threads walking the same repository.
     * @constructor 
     * @param repository a #GgitRepository.
     * @returns a new #GgitRevisionWalker or %NULL.
     */
    constructor(repository: Repository) 
    /**
     * Creates a new revision walker to iterate through `repository`.
     * 
     * This revision walker uses a custom memory pool and an internal
     * commit cache, so it is relatively expensive to allocate.
     * 
     * For maximum performance, this revision walker should be
     * reused for different walks.
     * 
     * This revision walker is *not* thread safe: it may only be
     * used to walk a repository on a single thread; however,
     * it is possible to have several revision walkers in
     * several different threads walking the same repository.
     * @constructor 
     * @param repository a #GgitRepository.
     * @returns a new #GgitRevisionWalker or %NULL.
     */
    static new(repository: Repository): RevisionWalker
    _init(config?: RevisionWalker.ConstructorProperties): void
}

module Signature {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.Signature

        encoding?: string | null
    }

}

interface Signature {

    // Own properties of Ggit-1.0.Ggit.Signature

    readonly encoding: string | null

    // Conflicting properties

    parent_instance: ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Signature

    /**
     * Create a copy of the signature.
     * @returns a #GgitSignature or %NULL.
     */
    copy(): Signature | null
    /**
     * Gets the email of the person.
     * @returns the email of the person or %NULL.
     */
    get_email(): string | null
    /**
     * Gets the name of the person.
     * @returns the name of the person or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the time when the action happened. Note that the time is returned in
     * the timezone of the commit (see #ggit_signature_get_time_zone).
     * @returns the time when the action happened or %NULL.
     */
    get_time(): GLib.DateTime | null
    /**
     * Gets the timezone in which the action happened.
     * @returns the timezone in which the action happened or %NULL.
     */
    get_time_zone(): GLib.TimeZone | null

    // Class property signals of Ggit-1.0.Ggit.Signature

    connect(sigName: "notify::encoding", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an action signature.
 * @class 
 */
class Signature extends Native {

    // Own properties of Ggit-1.0.Ggit.Signature

    static name: string
    static $gtype: GObject.GType<Signature>

    // Constructors of Ggit-1.0.Ggit.Signature

    constructor(config?: Signature.ConstructorProperties) 
    /**
     * Creates a new #GgitSignature. Name and e-mail are assumed to be in UTF-8.
     * @constructor 
     * @param name the name of the person.
     * @param email the email of the person.
     * @param signature_time the time when the action happened.
     * @returns a newly allocated #GgitSignature or %NULL.
     */
    constructor(name: string, email: string, signature_time: GLib.DateTime) 
    /**
     * Creates a new #GgitSignature. Name and e-mail are assumed to be in UTF-8.
     * @constructor 
     * @param name the name of the person.
     * @param email the email of the person.
     * @param signature_time the time when the action happened.
     * @returns a newly allocated #GgitSignature or %NULL.
     */
    static new(name: string, email: string, signature_time: GLib.DateTime): Signature
    /**
     * Creates a new #GgitSignature with a timestamp of 'now'. Name and e-mail are
     * assumed to be in UTF-8.
     * @constructor 
     * @param name the name of the person.
     * @param email the email of the person.
     * @returns a newly allocated #GgitSignature or %NULL.
     */
    static new_now(name: string, email: string): Signature
    _init(config?: Signature.ConstructorProperties): void
}

module SubmoduleUpdateOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Ggit-1.0.Ggit.SubmoduleUpdateOptions

        checkoutOptions?: CheckoutOptions | null
        fetchOptions?: FetchOptions | null
    }

}

interface SubmoduleUpdateOptions {

    // Own properties of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    checkoutOptions: CheckoutOptions
    fetchOptions: FetchOptions

    // Own fields of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    parent_instance: GObject.Object

    // Owm methods of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    /**
     * Get the checkout options.
     * @returns a #GgitCheckoutOptions or %NULL.
     */
    get_checkout_options(): CheckoutOptions | null
    get_fetch_options(): FetchOptions
    /**
     * Set the checkout options.
     * @param checkout_options a #GgitCheckoutOptions.
     */
    set_checkout_options(checkout_options: CheckoutOptions | null): void
    /**
     * Sets the fetch options.
     * @param fetch_options a #GgitFetchOptions.
     */
    set_fetch_options(fetch_options: FetchOptions | null): void

    // Class property signals of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    connect(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checkout-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checkout-options", ...args: any[]): void
    connect(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fetch-options", callback: (($obj: SubmoduleUpdateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fetch-options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents options for a submodule update.
 * @class 
 */
class SubmoduleUpdateOptions extends GObject.Object {

    // Own properties of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    static name: string
    static $gtype: GObject.GType<SubmoduleUpdateOptions>

    // Constructors of Ggit-1.0.Ggit.SubmoduleUpdateOptions

    constructor(config?: SubmoduleUpdateOptions.ConstructorProperties) 
    /**
     * Creates a new submodule options object.
     * @constructor 
     * @returns a #GgitSubmoduleUpdateOptions or %NULL.
     */
    constructor() 
    /**
     * Creates a new submodule options object.
     * @constructor 
     * @returns a #GgitSubmoduleUpdateOptions or %NULL.
     */
    static new(): SubmoduleUpdateOptions
    _init(config?: SubmoduleUpdateOptions.ConstructorProperties): void
}

module Tag {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Tag {

    // Own fields of Ggit-1.0.Ggit.Tag

    parent_instance: Object & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Tag

    /**
     * Gets the message of `tag`.
     * @returns the message of the tag or %NULL.
     */
    get_message(): string | null
    /**
     * Gets the name of `tag`.
     * @returns the name of the tag or %NULL.
     */
    get_name(): string | null
    /**
     * Get the tagger (author) of `tag`. The returned value must be free with
     * g_object_unref().
     * @returns the tagger (author) of the tag or %NULL.
     */
    get_tagger(): Signature | null
    /**
     * Gets the target #GgitObject of `tag`.
     * 
     * This method performs a repository lookup for the
     * given object and returns it.
     * @returns the target #GgitObject of the tag or %NULL.
     */
    get_target(): Object | null
    /**
     * Gets the target #GgitOId of `tag`.
     * @returns the target #GgitOId of the tag or %NULL.
     */
    get_target_id(): OId | null
    /**
     * Get the target object type.
     * @returns a #GType.
     */
    get_target_type(): GObject.GType
    /**
     * Recursively peel a tag until a non tag object is found.
     * @returns a #GgitObject or %NULL.
     */
    peel(): Object | null

    // Class property signals of Ggit-1.0.Ggit.Tag

    connect(sigName: "notify::native", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Tag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a tag object.
 * @class 
 */
class Tag extends Object {

    // Own properties of Ggit-1.0.Ggit.Tag

    static name: string
    static $gtype: GObject.GType<Tag>

    // Constructors of Ggit-1.0.Ggit.Tag

    constructor(config?: Tag.ConstructorProperties) 
    _init(config?: Tag.ConstructorProperties): void
}

module Tree {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Tree {

    // Own fields of Ggit-1.0.Ggit.Tree

    parent_instance: Object & Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.Tree

    /**
     * Get a tree entry by index.
     * @param i the index of the entry.
     * @returns a #GgitTreeEntry or %NULL.
     */
    get(i: number): TreeEntry | null
    /**
     * Get a tree entry by name.
     * @param name a filename.
     * @returns a #GgitTreeEntry or %NULL.
     */
    get_by_name(name: string): TreeEntry | null
    /**
     * Retrieves a tree entry contained in a tree or in any of its subtrees,
     * given its relative path.
     * @param path a path.
     * @returns a #GgitTreeEntry or %NULL.
     */
    get_by_path(path: string): TreeEntry | null
    /**
     * Get the #GgitOId of the tree.
     * @returns a #GgitOId or %NULL.
     */
    get_id(): OId | null
    /**
     * Get the number of entries in the tree.
     * @returns the number of entries in the tree.
     */
    size(): number
    /**
     * Walk all the entries of a tree object recursively (resolving and walking
     * subtrees of the tree as needed). The `error` will be set to the error returned
     * by `callback` (if any).
     * @param mode the walking order.
     * @param callback the callback to call for each entry.
     */
    walk(mode: TreeWalkMode, callback: TreeWalkCallback): void

    // Class property signals of Ggit-1.0.Ggit.Tree

    connect(sigName: "notify::native", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a tree object.
 * @class 
 */
class Tree extends Object {

    // Own properties of Ggit-1.0.Ggit.Tree

    static name: string
    static $gtype: GObject.GType<Tree>

    // Constructors of Ggit-1.0.Ggit.Tree

    constructor(config?: Tree.ConstructorProperties) 
    _init(config?: Tree.ConstructorProperties): void
}

module TreeBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends Native.ConstructorProperties {
    }

}

interface TreeBuilder {

    // Own fields of Ggit-1.0.Ggit.TreeBuilder

    parent_instance: Native & ObjectFactoryBase & GObject.Object & GObject.Object

    // Owm methods of Ggit-1.0.Ggit.TreeBuilder

    /**
     * Clear all entries in the tree builder.
     */
    clear(): void
    /**
     * Get an entry by path.
     * @param path the path to remove.
     * @returns the #GGitTreeEntry or %NULL if no such entry exists.
     */
    get_entry(path: string): TreeEntry | null
    /**
     * Insert a file with a given blob in the tree builder. If the tree builder
     * already contains an entry for the given file, then this entry will be
     * overwritten.
     * 
     * Note that the returned #GgitTreeEntry is bound to the lifetime of the tree
     * builder and cannot be used after the tree builder has been freed.
     * @param filename the file name.
     * @param oid the #GgitOId of the file blob to insert.
     * @param file_mode a #GgitFileMode.
     * @returns a #GgitTreeEntry or %NULL.
     */
    insert(filename: string, oid: OId, file_mode: FileMode): TreeEntry | null
    /**
     * Remove an entry from the builder by path.
     * @param path the path to remove.
     */
    remove(path: string): void
    /**
     * Write the contents of the tree builder as a tree object.
     * @returns the #GgitOId of the created tree object or %NULL.
     */
    write(): OId | null

    // Class property signals of Ggit-1.0.Ggit.TreeBuilder

    connect(sigName: "notify::native", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: TreeBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a tree object.
 * @class 
 */
class TreeBuilder extends Native {

    // Own properties of Ggit-1.0.Ggit.TreeBuilder

    static name: string
    static $gtype: GObject.GType<TreeBuilder>

    // Constructors of Ggit-1.0.Ggit.TreeBuilder

    constructor(config?: TreeBuilder.ConstructorProperties) 
    _init(config?: TreeBuilder.ConstructorProperties): void
}

interface AnnotatedCommit {

    // Owm methods of Ggit-1.0.Ggit.AnnotatedCommit

    /**
     * Gets the commit ID that the given `annotated_commit` refs to.
     * @returns the commit ID that the given @annotated_commit refs to or %NULL.
     */
    get_id(): OId | null
    /**
     * Atomically increments the reference count of `annotated_commit` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a newly allocated #GgitAnnotatedCommit or %NULL.
     */
    ref(): AnnotatedCommit | null
    /**
     * Atomically decrements the reference count of `annotated_commit` by one.
     * If the reference count drops to 0, `annotated_commit` is freed.
     */
    unref(): void
}

/**
 * Represents an annotated commit object.
 * @record 
 */
class AnnotatedCommit {

    // Own properties of Ggit-1.0.Ggit.AnnotatedCommit

    static name: string

    // Constructors of Ggit-1.0.Ggit.AnnotatedCommit

    /**
     * Create a GgitAnnotatedCommit from the given reference
     * @constructor 
     * @param repository the repository
     * @param ref the reference to use to lookup the git_annotated_commit
     * @returns a #GgitAnnotatedCommit.
     */
    static new_from_ref(repository: Repository, ref: Ref): AnnotatedCommit
}

interface BlameClass {

    // Own fields of Ggit-1.0.Ggit.BlameClass

    parent_class: NativeClass
}

abstract class BlameClass {

    // Own properties of Ggit-1.0.Ggit.BlameClass

    static name: string
}

interface BlameHunk {

    // Owm methods of Ggit-1.0.Ggit.BlameHunk

    /**
     * Get the id of the commit where this hunk was last changed.
     * @returns a #GgitOId or %NULL.
     */
    get_final_commit_id(): OId | null
    /**
     * Get the signature of the final version of the hunk.
     * @returns a #GgitSignature or %NULL.
     */
    get_final_signature(): Signature | null
    /**
     * Get the line number where the hunk begins in the final version of the file.
     * Line numbers start at 1.
     * @returns the final hunk line number.
     */
    get_final_start_line_number(): number
    /**
     * Get the number of lines in the hunk.
     * @returns the number of lines in the hunk.
     */
    get_lines_in_hunk(): number
    /**
     * Get the id of the commit where the hunk was found. This is usually the same
     * the final commit id, except when #GGIT_BLAME_TRACK_COPIES_ANY_COMMIT was used.
     * @returns a #GgitOId or %NULL.
     */
    get_orig_commit_id(): OId | null
    /**
     * Get the path of the file where this hunk originated, as of the commit
     * specified by #ggit_blame_hunk_get_orig_commit_id.
     * @returns the path or %NULL.
     */
    get_orig_path(): string | null
    /**
     * Get the signature of the commit specified by #ggit_blame_hunk_get_orig_commit_id.
     * @returns a #GgitSignature or %NULL.
     */
    get_orig_signature(): Signature | null
    /**
     * Get the line number where the hunk begins in the file specified by
     * #ggit_blame_hunk_get_orig_path at the commit specified by
     * #ggit_blame_hunk_get_orig_commit_id. Line numbers start at 1.
     * @returns the orig hunk line number.
     */
    get_orig_start_line_number(): number
    /**
     * Get whether the hunk has been tracked to a boundary commit (the root,
     * or the commit specified in #ggit_blame_options_set_oldest_commit).
     * @returns whether the hunk is at a boundary commit.
     */
    is_boundary(): boolean
    /**
     * Atomically increments the reference count of `blame_hunk` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitBlameHunk or %NULL.
     */
    ref(): BlameHunk | null
    /**
     * Atomically decrements the reference count of `blame_hunk` by one.
     * If the reference count drops to 0, `blame_hunk` is freed.
     */
    unref(): void
}

/**
 * Represents a blame hunk.
 * @record 
 */
class BlameHunk {

    // Own properties of Ggit-1.0.Ggit.BlameHunk

    static name: string
}

interface BlameOptions {

    // Owm methods of Ggit-1.0.Ggit.BlameOptions

    /**
     * Copies `blame_options` into a newly allocated #GgitBlameOptions.
     * @returns a newly allocated #GgitBlameOptions or %NULL.
     */
    copy(): BlameOptions | null
    /**
     * Frees `blame_options`.
     */
    free(): void
    /**
     * Get the last line in the file to consider. The default is 1.
     * @returns the last line to consider.
     */
    get_maximum_line(): number
    /**
     * Get the first line in the file to consider. The default is 1.
     * @returns the first line to consider.
     */
    get_minimum_line(): number
    /**
     * Get the minimum number of characters that must be detected as moving/copying
     * within a file for it to associate those lines with a parent commit. This is
     * only used when any of the #GGIT_BLAME_TRACK_COPIES_SAME_FILE flag is
     * specified. The default value is 20.
     * @returns the minimum number of characters.
     */
    get_minimum_match_characters(): number
    /**
     * Get the id of the newest commit to consider in the blame. The default
     * value of %NULL indicates to use HEAD.
     * @returns a #GgitOId or %NULL.
     */
    get_newest_commit(): OId | null
    /**
     * Get the id of the oldest commit to consider in the blame. Teh default value
     * of %NULL indicates to used HEAD.
     * @returns a #GgitOId or %NULL.
     */
    get_oldest_commit(): OId | null
    /**
     * Set the last line in the file to consider. Lines start at 1.
     * @param line the last line to consider.
     */
    set_maximum_line(line: number): void
    /**
     * Set the first line in the file to consider. Lines start at 1.
     * @param line the first line to consider.
     */
    set_minimum_line(line: number): void
    /**
     * Set the minimum number of characters that must be detected as moving/copying
     * within a file for it to associate those lines with a parent commit. This is
     * only used when any of the #GGIT_BLAME_TRACK_COPIES_ flags are specified. The
     * default value is 20.
     * @param characters the minimum number of characters.
     */
    set_minimum_match_characters(characters: number): void
    /**
     * Set the id of the newest commit to consider in the blame. Specify %NULL to
     * set the default value which indicates to use HEAD.
     * @param oid a #GgitOId or %NULL.
     */
    set_newest_commit(oid: OId | null): void
    /**
     * Set the id of the oldest commit to consider in the blame. Specify %NULL to
     * set the default value which indicates to consider the first commit without
     * a parent.
     * @param oid a #GgitOId.
     */
    set_oldest_commit(oid: OId | null): void
}

/**
 * Represents blame options.
 * @record 
 */
class BlameOptions {

    // Own properties of Ggit-1.0.Ggit.BlameOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.BlameOptions

    /**
     * Create a new, empty #GgitBlameOptions.
     * @constructor 
     * @returns a newly allocated #GgitBlameOptions.
     */
    constructor() 
    /**
     * Create a new, empty #GgitBlameOptions.
     * @constructor 
     * @returns a newly allocated #GgitBlameOptions.
     */
    static new(): BlameOptions
}

interface BlobClass {

    // Own fields of Ggit-1.0.Ggit.BlobClass

    parent_class: ObjectClass
}

abstract class BlobClass {

    // Own properties of Ggit-1.0.Ggit.BlobClass

    static name: string
}

interface BlobOutputStreamClass {
}

/**
 * The class structure for #GgitBlobOutputStreamClass.
 * @record 
 */
abstract class BlobOutputStreamClass {

    // Own properties of Ggit-1.0.Ggit.BlobOutputStreamClass

    static name: string
}

interface BranchClass {
}

abstract class BranchClass {

    // Own properties of Ggit-1.0.Ggit.BranchClass

    static name: string
}

interface BranchEnumerator {

    // Owm methods of Ggit-1.0.Ggit.BranchEnumerator

    /**
     * Returns the currently being enumerated branch, or %NULL. Note that the
     * returned GgitRef will be of type GgitBranch if the ref represents a local
     * branch.
     * @returns the branch ref or %NULL.
     */
    get(): Ref | null
    /**
     * Get an iterator for the enumerator.
     * @returns a #GgitBranchEnumerator or %NULL.
     */
    iterator(): BranchEnumerator | null
    /**
     * Move the enumerator to the next branch.
     * @returns %TRUE if there is a next branch, %FALSE otherwise.
     */
    next(): boolean
    ref(): BranchEnumerator | null
    unref(): void
}

/**
 * Represents a branch enumerator.
 * @record 
 */
class BranchEnumerator {

    // Own properties of Ggit-1.0.Ggit.BranchEnumerator

    static name: string
}

interface CheckoutOptionsClass {

    // Own fields of Ggit-1.0.Ggit.CheckoutOptionsClass

    parent_class: GObject.ObjectClass
    notify: (options: CheckoutOptions, why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile) => number
    progress: (options: CheckoutOptions, path: string, completed_steps: number, total_steps: number) => void
}

abstract class CheckoutOptionsClass {

    // Own properties of Ggit-1.0.Ggit.CheckoutOptionsClass

    static name: string
}

interface CherryPickOptionsClass {

    // Own fields of Ggit-1.0.Ggit.CherryPickOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class CherryPickOptionsClass {

    // Own properties of Ggit-1.0.Ggit.CherryPickOptionsClass

    static name: string
}

interface CloneOptionsClass {

    // Own fields of Ggit-1.0.Ggit.CloneOptionsClass

    parent_class: GObject.ObjectClass
    create_repository: (options: CloneOptions, path: string, is_bare: boolean) => Repository | null
    create_remote: (options: CloneOptions, repository: Repository, name: string, url: string) => Remote | null
}

abstract class CloneOptionsClass {

    // Own properties of Ggit-1.0.Ggit.CloneOptionsClass

    static name: string
}

interface CommitClass {
}

/**
 * The class structure for #GgitCommitClass.
 * @record 
 */
abstract class CommitClass {

    // Own properties of Ggit-1.0.Ggit.CommitClass

    static name: string
}

interface CommitParentsClass {

    // Own fields of Ggit-1.0.Ggit.CommitParentsClass

    parent_class: GObject.ObjectClass
}

abstract class CommitParentsClass {

    // Own properties of Ggit-1.0.Ggit.CommitParentsClass

    static name: string
}

interface ConfigClass {

    // Own fields of Ggit-1.0.Ggit.ConfigClass

    parent_class: NativeClass
}

abstract class ConfigClass {

    // Own properties of Ggit-1.0.Ggit.ConfigClass

    static name: string
}

interface ConfigEntry {

    // Owm methods of Ggit-1.0.Ggit.ConfigEntry

    /**
     * Gets the #GgitConfigLevel of `entry`.
     * @returns the #GgitConfigLevel of @entry.
     */
    get_level(): ConfigLevel
    /**
     * Gets the name of `entry`.
     * @returns the name of @entry or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the value of `entry`.
     * @returns the value of @entry or %NULL.
     */
    get_value(): string | null
    /**
     * Atomically increments the reference count of `entry` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitConfigEntry or %NULL.
     */
    ref(): ConfigEntry | null
    /**
     * Atomically decrements the reference count of `entry` by one.
     * If the reference count drops to 0, `entry` is freed.
     */
    unref(): void
}

/**
 * Represents a git configuration entry.
 * @record 
 */
class ConfigEntry {

    // Own properties of Ggit-1.0.Ggit.ConfigEntry

    static name: string
}

interface CredClass {
}

abstract class CredClass {

    // Own properties of Ggit-1.0.Ggit.CredClass

    static name: string
}

interface CredPlaintextClass {
}

abstract class CredPlaintextClass {

    // Own properties of Ggit-1.0.Ggit.CredPlaintextClass

    static name: string
}

interface CredSshInteractiveClass {

    // Own fields of Ggit-1.0.Ggit.CredSshInteractiveClass

    prompt: (cred: CredSshInteractive, prompts: CredSshInteractivePrompt[]) => void
}

abstract class CredSshInteractiveClass {

    // Own properties of Ggit-1.0.Ggit.CredSshInteractiveClass

    static name: string
}

interface CredSshInteractivePrompt {

    // Owm methods of Ggit-1.0.Ggit.CredSshInteractivePrompt

    get_instruction(): string
    get_name(): string
    get_response(): string
    get_text(): string
    is_masked(): boolean
    ref(): CredSshInteractivePrompt
    set_response(response: string): void
    unref(): void
}

/**
 * Represents a ssh interactive prompt.
 * @record 
 */
class CredSshInteractivePrompt {

    // Own properties of Ggit-1.0.Ggit.CredSshInteractivePrompt

    static name: string

    // Constructors of Ggit-1.0.Ggit.CredSshInteractivePrompt

    constructor(name: string, instruction: string, text: string, is_masked: boolean) 
    static new(name: string, instruction: string, text: string, is_masked: boolean): CredSshInteractivePrompt
}

interface CredSshKeyFromAgentClass {

    // Own fields of Ggit-1.0.Ggit.CredSshKeyFromAgentClass

    parent_class: CredClass
}

abstract class CredSshKeyFromAgentClass {

    // Own properties of Ggit-1.0.Ggit.CredSshKeyFromAgentClass

    static name: string
}

interface DiffBinary {

    // Owm methods of Ggit-1.0.Ggit.DiffBinary

    /**
     * Gets the #GgitDiffBinaryFile new file for `binary`.
     * @returns the contents of the new file or %NULL.
     */
    get_new_file(): DiffBinaryFile | null
    /**
     * Gets the #GgitDiffBinaryFile old file for `binary`.
     * @returns the contents of the old file or %NULL.
     */
    get_old_file(): DiffBinaryFile | null
    /**
     * Atomically increments the reference count of `binary` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffBinary or %NULL.
     */
    ref(): DiffBinary | null
    /**
     * Atomically decrements the reference count of `binary` by one.
     * If the reference count drops to 0, `binary` is freed.
     */
    unref(): void
}

/**
 * Represents a diff binary.
 * @record 
 */
class DiffBinary {

    // Own properties of Ggit-1.0.Ggit.DiffBinary

    static name: string
}

interface DiffBinaryFile {

    // Owm methods of Ggit-1.0.Ggit.DiffBinaryFile

    /**
     * Gets the #GgitDiffBinaryType for `file`.
     * @returns the file's binary type.
     */
    get_binary_type(): DiffBinaryType
    /**
     * Get the binary data. This data should not be modified.
     * @param size location to return size of byte data.
     * @returns a pointer to the binary data, or %NULL.
     */
    get_data(size: number | null): number
    /**
     * Gets the length of the binary data after inflation.
     * @returns the length of the binary data after inflation.
     */
    get_inflated_size(): number
    /**
     * Atomically increments the reference count of `file` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffBinaryFile.
     */
    ref(): DiffBinaryFile
    /**
     * Atomically decrements the reference count of `file` by one.
     * If the reference count drops to 0, `file` is freed.
     */
    unref(): void
}

/**
 * Represents a diff binary file.
 * @record 
 */
class DiffBinaryFile {

    // Own properties of Ggit-1.0.Ggit.DiffBinaryFile

    static name: string
}

interface DiffClass {
}

/**
 * The class structure for #GgitDiffClass.
 * @record 
 */
abstract class DiffClass {

    // Own properties of Ggit-1.0.Ggit.DiffClass

    static name: string
}

interface DiffDelta {

    // Owm methods of Ggit-1.0.Ggit.DiffDelta

    /**
     * Gets flags for `delta`.
     * @returns the delta flags
     */
    get_flags(): DiffFlag
    /**
     * Gets the new file for `delta`.
     * @returns the delta's new file or %NULL.
     */
    get_new_file(): DiffFile | null
    /**
     * Gets the old file for `delta`.
     * @returns the delta's old file or %NULL.
     */
    get_old_file(): DiffFile | null
    /**
     * Gets the similarity between `delta` files.
     * @returns the delta's similarity.
     */
    get_similarity(): number
    /**
     * Gets the #GgitDeltaType for `delta`.
     * @returns the delta's status.
     */
    get_status(): DeltaType
    /**
     * Atomically increments the reference count of `delta` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffDelta or %NULL.
     */
    ref(): DiffDelta | null
    /**
     * Atomically decrements the reference count of `delta` by one.
     * If the reference count drops to 0, `delta` is freed.
     */
    unref(): void
}

/**
 * Represents the changes done to one file.
 * @record 
 */
class DiffDelta {

    // Own properties of Ggit-1.0.Ggit.DiffDelta

    static name: string
}

interface DiffFile {

    // Owm methods of Ggit-1.0.Ggit.DiffFile

    /**
     * Gets the #GgitDifflags for `file`.
     * @returns the file's flags.
     */
    get_flags(): DiffFlag
    /**
     * Gets the mode for `file`.
     * @returns the file's mode.
     */
    get_mode(): number
    /**
     * Gets the #GgitOId for `file`.
     * @returns the file's #GgitOId or %NULL.
     */
    get_oid(): OId | null
    /**
     * Gets the path of `file` or %NULL if it is unknown.
     * @returns the file's path, or %NULL.
     */
    get_path(): string | null
    /**
     * Gets the size for `file`.
     * @returns the file's size.
     */
    get_size(): number
    /**
     * Atomically increments the reference count of `file` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffFile or %NULL.
     */
    ref(): DiffFile | null
    /**
     * Atomically decrements the reference count of `file` by one.
     * If the reference count drops to 0, `file` is freed.
     */
    unref(): void
}

/**
 * Represents a file in a #GgitDiff.
 * @record 
 */
class DiffFile {

    // Own properties of Ggit-1.0.Ggit.DiffFile

    static name: string
}

interface DiffFindOptionsClass {

    // Own fields of Ggit-1.0.Ggit.DiffFindOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class DiffFindOptionsClass {

    // Own properties of Ggit-1.0.Ggit.DiffFindOptionsClass

    static name: string
}

interface DiffFormatEmailOptionsClass {

    // Own fields of Ggit-1.0.Ggit.DiffFormatEmailOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class DiffFormatEmailOptionsClass {

    // Own properties of Ggit-1.0.Ggit.DiffFormatEmailOptionsClass

    static name: string
}

interface DiffHunk {

    // Owm methods of Ggit-1.0.Ggit.DiffHunk

    get_header(): string
    /**
     * Gets the number of lines in the new file.
     * @returns the number of lines in the new file.
     */
    get_new_lines(): number
    /**
     * Gets the starting line number in the new file.
     * @returns the starting line number in the new file.
     */
    get_new_start(): number
    /**
     * Gets the number of lines in the old file.
     * @returns the number of lines in the old file.
     */
    get_old_lines(): number
    /**
     * Gets the starting line number in the old file.
     * @returns the starting line number in the old file.
     */
    get_old_start(): number
    /**
     * Atomically increments the reference count of `hunk` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffHunk or %NULL.
     */
    ref(): DiffHunk | null
    /**
     * Atomically decrements the reference count of `hunk` by one.
     * If the reference count drops to 0, `hunk` is freed.
     */
    unref(): void
}

/**
 * Represents the hunk of a diff.
 * @record 
 */
class DiffHunk {

    // Own properties of Ggit-1.0.Ggit.DiffHunk

    static name: string
}

interface DiffLine {

    // Owm methods of Ggit-1.0.Ggit.DiffLine

    /**
     * Gets the content in bytes.
     * @returns the content in bytes.
     */
    get_content(): Uint8Array
    /**
     * Gets the content offset.
     * @returns the content offset.
     */
    get_content_offset(): number
    /**
     * Gets the Line number in new file or -1 for deleted line.
     * @returns the line's old number of lines.
     */
    get_new_lineno(): number
    /**
     * Gets the line number in old file or -1 for added line.
     * @returns the line's old line number.
     */
    get_old_lineno(): number
    /**
     * Gets the #GgitDiffLineType value.
     * @returns the #GgitDiffLineType value.
     */
    get_origin(): DiffLineType
    /**
     * Get the content of the diff line as UTF-8 encoded text.
     * @returns the content in utf-8 encoding or %NULL.
     */
    get_text(): string | null
    /**
     * Atomically increments the reference count of `line` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitDiffLine or %NULL.
     */
    ref(): DiffLine | null
    /**
     * Atomically decrements the reference count of `line` by one.
     * If the reference count drops to 0, `line` is freed.
     */
    unref(): void
}

/**
 * Represents the line of a diff.
 * @record 
 */
class DiffLine {

    // Own properties of Ggit-1.0.Ggit.DiffLine

    static name: string
}

interface DiffOptionsClass {

    // Own fields of Ggit-1.0.Ggit.DiffOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class DiffOptionsClass {

    // Own properties of Ggit-1.0.Ggit.DiffOptionsClass

    static name: string
}

interface DiffSimilarityMetric {

    // Owm methods of Ggit-1.0.Ggit.DiffSimilarityMetric

    /**
     * Copies `metric` into a newly allocated #GgitDiffSimilarityMetric.
     * @returns a newly allocated #GgitDiffSimilarityMetric or %NULL.
     */
    copy(): DiffSimilarityMetric | null
    /**
     * Frees `metric`.
     */
    free(): void
}

/**
 * Represents a similarity metric.
 * @record 
 */
class DiffSimilarityMetric {

    // Own properties of Ggit-1.0.Ggit.DiffSimilarityMetric

    static name: string

    // Constructors of Ggit-1.0.Ggit.DiffSimilarityMetric

    /**
     * Creates a new #GgitDiffSimilarityMetric.
     * @constructor 
     * @param file_signature a #GgitDiffSimilarityMetricFileSignature.
     * @param buffer_signature a #GgitDiffSimilarityMetricBufferSignature.
     * @param free_signature a #GgitDiffSimilarityMetricFreeSignature.
     * @param similarity a #GgitDiffSimilarityMetricSimilarity.
     * @returns a newly allocated #GgitDiffSimilarityMetric.
     */
    constructor(file_signature: DiffSimilarityMetricFileSignatureCallback, buffer_signature: DiffSimilarityMetricBufferSignatureCallback, free_signature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback) 
    /**
     * Creates a new #GgitDiffSimilarityMetric.
     * @constructor 
     * @param file_signature a #GgitDiffSimilarityMetricFileSignature.
     * @param buffer_signature a #GgitDiffSimilarityMetricBufferSignature.
     * @param free_signature a #GgitDiffSimilarityMetricFreeSignature.
     * @param similarity a #GgitDiffSimilarityMetricSimilarity.
     * @returns a newly allocated #GgitDiffSimilarityMetric.
     */
    static new(file_signature: DiffSimilarityMetricFileSignatureCallback, buffer_signature: DiffSimilarityMetricBufferSignatureCallback, free_signature: DiffSimilarityMetricFreeSignatureCallback, similarity: DiffSimilarityMetricSimilarityCallback): DiffSimilarityMetric
}

interface FetchOptions {

    // Owm methods of Ggit-1.0.Ggit.FetchOptions

    /**
     * Copies `fetch_options` into a newly allocated #GgitFetchOptions.
     * @returns a newly allocated #GgitFetchOptions or %NULL.
     */
    copy(): FetchOptions | null
    /**
     * Frees `fetch_options`.
     */
    free(): void
    /**
     * Get how tags are being handled when fetching/downloading.
     * @returns a #GgitRemoteDownloadTagsType.
     */
    get_download_tags(): RemoteDownloadTagsType
    /**
     * Get the remote callbacks object or %NULL if not set.
     * @returns the remote callbacks or %NULL.
     */
    get_remote_callbacks(): RemoteCallbacks | null
    /**
     * Set how tags are being handled when fetching/downloading.
     * @param download_tags a #GgitRemoteDownloadTagsType.
     */
    set_download_tags(download_tags: RemoteDownloadTagsType): void
    /**
     * Set the fetch options object.
     * @param callbacks a #GgitRemoteCallbacks or %NULL.
     */
    set_remote_callbacks(callbacks: RemoteCallbacks | null): void
}

/**
 * Represents a git fetch options.
 * @record 
 */
class FetchOptions {

    // Own properties of Ggit-1.0.Ggit.FetchOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.FetchOptions

    /**
     * Creates a new #GgitFetchOptions.
     * @constructor 
     * @returns a newly allocated #GgitFetchOptions.
     */
    constructor() 
    /**
     * Creates a new #GgitFetchOptions.
     * @constructor 
     * @returns a newly allocated #GgitFetchOptions.
     */
    static new(): FetchOptions
}

interface IndexClass {

    // Own fields of Ggit-1.0.Ggit.IndexClass

    parent_class: NativeClass
}

abstract class IndexClass {

    // Own properties of Ggit-1.0.Ggit.IndexClass

    static name: string
}

interface IndexEntries {

    // Owm methods of Ggit-1.0.Ggit.IndexEntries

    /**
     * Get a #GgitIndexEntry by index. Note that the returned #GgitIndexEntry is
     * _only_ valid as long as:
     * 
     * 1) The associated index has been closed
     * 2) The entry has not been removed (see ggit_index_remove())
     * 3) The index has not been refreshed (see ggit_index_read())
     * 
     * Changes to the #GgitIndexEntry will be reflected in the index once written
     * back to disk using ggit_index_write().
     * @param idx the index of the entry.
     * @returns a #GgitIndexEntry or %NULL if out of bounds.
     */
    get_by_index(idx: number): IndexEntry | null
    /**
     * Get a #GgitIndexEntry by index. Note that the returned #GgitIndexEntry is
     * _only_ valid as long as:
     * 
     * 1) The associated index has not been closed
     * 2) The entry has not been removed (see ggit_index_remove())
     * 3) The index has not been refreshed (see ggit_index_read())
     * 
     * Changes to the #GgitIndexEntry will be reflected in the index once written
     * back to disk using ggit_index_write().
     * 
     * `stage` indicates the stage to search the file for. Stages are used in the
     * index when merge conflicts occur, such that multiple versions of the same
     * file can be represented in the index. Stage 0 is associated with the working
     * tree, while stages 1 to 3 are associated with the various versions of the
     * file in a merge conflict. The special value -1 can be used to match the first
     * file encountered in any stage.
     * @param file the path to search.
     * @param stage stage to search.
     * @returns a #GgitIndexEntry or %NULL if it was not found.
     */
    get_by_path(file: Gio.File, stage: number): IndexEntry | null
    /**
     * Atomically increments the reference count of `entries` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitIndexEntries or %NULL.
     */
    ref(): IndexEntries | null
    /**
     * Get the number of #GgitIndexEntry entries.
     * @returns the number of entries.
     */
    size(): number
    /**
     * Atomically decrements the reference count of `entries` by one.
     * If the reference count drops to 0, `entries` is freed.
     */
    unref(): void
}

/**
 * Represents the entries in an index object.
 * @record 
 */
class IndexEntries {

    // Own properties of Ggit-1.0.Ggit.IndexEntries

    static name: string
}

interface IndexEntriesResolveUndo {

    // Owm methods of Ggit-1.0.Ggit.IndexEntriesResolveUndo

    /**
     * Get a #GgitIndexEntryResolveUndo by index. Note that the returned
     * #GgitIndexEntryResolveUndo is _only_ valid as long as:
     * 
     * 1) The associated index has been closed
     * 2) The entry has not been removed (see ggit_index_remove())
     * 3) The index has not been refreshed (see ggit_index_read())
     * @param idx the index of the entry.
     * @returns a #GgitIndexEntryResolveUndo or %NULL.
     */
    get(idx: number): IndexEntryResolveUndo | null
    /**
     * Get an resolve_undo entry specified by path. The returned entry is read
     * only and should not be modified by the caller. If the entry could not be
     * found, %NULL is returned.
     * @param file a #GFile.
     * @returns a #GgitIndexEntryResolveUndo or %NULL.
     */
    get_by_file(file: Gio.File): IndexEntryResolveUndo | null
    /**
     * Atomically increments the reference count of `entries` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitIndexEntriesResolveUndo or %NULL.
     */
    ref(): IndexEntriesResolveUndo | null
    /**
     * Get the number of #GgitIndexEntryResolveUndo entries.
     * @returns the number of entries.
     */
    size(): number
    /**
     * Atomically decrements the reference count of `entries` by one.
     * If the reference count drops to 0, `entries` is freed.
     */
    unref(): void
}

/**
 * Represents the resolve undo entries in an index object.
 * @record 
 */
class IndexEntriesResolveUndo {

    // Own properties of Ggit-1.0.Ggit.IndexEntriesResolveUndo

    static name: string
}

interface IndexEntry {

    // Owm methods of Ggit-1.0.Ggit.IndexEntry

    /**
     * Get the dev of the index entry.
     * @returns the dev.
     */
    get_dev(): number
    /**
     * Get the file size of the index entry.
     * @returns the file size.
     */
    get_file_size(): number
    /**
     * Get the flags of the index entry.
     * @returns the flags.
     */
    get_flags(): number
    /**
     * Get the extended flags of the index entry.
     * @returns the extended flags.
     */
    get_flags_extended(): number
    /**
     * Get the gid of the index entry.
     * @returns the gid.
     */
    get_gid(): number
    /**
     * Get the oid of the index entry.
     * @returns the oid or %NULL.
     */
    get_id(): OId | null
    /**
     * Get the ino of the index entry.
     * @returns the ino.
     */
    get_ino(): number
    /**
     * Get the mode of the index entry.
     * @returns the mode.
     */
    get_mode(): number
    get_path(): string
    /**
     * Get the uid of the index entry.
     * @returns the uid.
     */
    get_uid(): number
    /**
     * Get whether the entry represents a conflict.
     * @returns %TRUE if the entry is a conflict, or %FALSE otherwise.
     */
    is_conflict(): boolean
    /**
     * Atomically increments the reference count of `entry` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitIndexEntry or %NULL.
     */
    ref(): IndexEntry | null
    /**
     * Set the index entry to point to a given commit. This sets the index entry
     * id to the commit id, changes the mode to #GGIT_FILE_MODE_COMMIT and updates
     * the timestamps to when the commit was made.
     * @param commit a #GgitCommit.
     */
    set_commit(commit: Commit): void
    /**
     * Set the dev of the index entry.
     * @param dev the dev.
     */
    set_dev(dev: number): void
    /**
     * Set the file size of the index entry.
     * @param file_size the file size.
     */
    set_file_size(file_size: number): void
    /**
     * Set the flags of the index entry.
     * @param flags the flags.
     */
    set_flags(flags: number): void
    /**
     * Set the extended flags of the index entry.
     * @param flags_extended the extended flags.
     */
    set_flags_extended(flags_extended: number): void
    /**
     * Set the gid of the index entry.
     * @param gid the gid.
     */
    set_gid(gid: number): void
    /**
     * Set the oid of the index entry.
     * @param id the oid.
     */
    set_id(id: OId | null): void
    /**
     * Set the ino of the index entry.
     * @param ino the ino.
     */
    set_ino(ino: number): void
    /**
     * Set the mode of the index entry.
     * @param mode the mode.
     */
    set_mode(mode: number): void
    /**
     * Set the path of the index entry. The path should be relative to the working
     * directory.
     * @param path the path.
     */
    set_path(path: string | null): void
    /**
     * Set the uid of the index entry.
     * @param uid the uid.
     */
    set_uid(uid: number): void
    /**
     * Fill the entry fields from statting `file`.
     * @param file the file to stat.
     * @returns %TRUE if the entry was filled from statting @file successfully, %FALSE otherwise.
     */
    stat(file: Gio.File): boolean
    /**
     * Atomically decrements the reference count of `entry` by one.
     * If the reference count drops to 0, `entry` is freed.
     */
    unref(): void
}

/**
 * Represents an index entry object.
 * @record 
 */
class IndexEntry {

    // Own properties of Ggit-1.0.Ggit.IndexEntry

    static name: string
}

interface IndexEntryResolveUndo {

    // Owm methods of Ggit-1.0.Ggit.IndexEntryResolveUndo

    /**
     * Get the file of the index entry.
     * @returns a #GFile or %NULL.
     */
    get_file(): Gio.File | null
    /**
     * Get the oid of the index entry.
     * @param stage the stage (0, 1 or 2).
     * @returns the oid or %NULL.
     */
    get_id(stage: number): OId | null
    /**
     * Get the mode of the index entry. The returned mode contains the modes from
     * stage 1, 2 and 3.
     * @param stage the stage (0, 1 or 2).
     * @returns the mode.
     */
    get_mode(stage: number): number
    /**
     * Atomically increments the reference count of `entry` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitIndexEntryResolveUndo or %NULL.
     */
    ref(): IndexEntryResolveUndo | null
    /**
     * Atomically decrements the reference count of `entry` by one.
     * If the reference count drops to 0, `entry` is freed.
     */
    unref(): void
}

/**
 * Represents an resolve undo index entry object.
 * @record 
 */
class IndexEntryResolveUndo {

    // Own properties of Ggit-1.0.Ggit.IndexEntryResolveUndo

    static name: string
}

interface MailmapClass {

    // Own fields of Ggit-1.0.Ggit.MailmapClass

    parent_class: NativeClass
}

abstract class MailmapClass {

    // Own properties of Ggit-1.0.Ggit.MailmapClass

    static name: string
}

interface MergeOptions {

    // Owm methods of Ggit-1.0.Ggit.MergeOptions

    /**
     * Copies `merge_options` into a newly allocated #GgitMergeOptions.
     * @returns a newly allocated #GgitMergeOptions or %NULL.
     */
    copy(): MergeOptions | null
    /**
     * Frees `merge_options`.
     */
    free(): void
    /**
     * Get flags for handling conflicting content.
     * @returns the file favor.
     */
    get_file_favor(): MergeFileFavor
    /**
     * Get file merging flags.
     * @returns the file merging flags.
     */
    get_file_flags(): MergeFileFlags
    /**
     * Get the tree flags to use for merging.
     * @returns the flags.
     */
    get_flags(): MergeFlags
    /**
     * Get the rename threshold (defaults to 50). If %GGIT_MERGE_TREE_FIND_RENAMES
     * is enabled, added files will be compared with deleted files to
     * determine their similarity. Files that are more similar than the rename
     * threshold (percentage-wise) will be treated as a rename.
     * @returns the rename threshold.
     */
    get_rename_threshold(): number
    /**
     * Get the similarity metric.
     * @returns the similarity metric, or %NULL.
     */
    get_similarity_metric(): DiffSimilarityMetric | null
    /**
     * Get the maximum number of similarity sources to examine for renames (defaults to 200).
     * If the number of rename candidates (add / delete pairs) is greater than
     * this value, inexact rename detection is aborted.
     * @returns the target limit.
     */
    get_target_limit(): number
    /**
     * Set flags for handling conflicting content.
     * @param file_favor the file favor.
     */
    set_file_favor(file_favor: MergeFileFavor): void
    /**
     * Set file merging flags.
     * @param file_flags the file flags.
     */
    set_file_flags(file_flags: MergeFileFlags): void
    set_flags(flags: MergeFlags): void
    /**
     * Set the rename threshold (defaults to 50). If %GGIT_MERGE_TREE_FIND_RENAMES
     * is enabled, added files will be compared with deleted files to
     * determine their similarity. Files that are more similar than the rename
     * threshold (percentage-wise) will be treated as a rename.
     * @param rename_threshold similarity to consider a file renamed.
     */
    set_rename_threshold(rename_threshold: number): void
    /**
     * Set the similarity metric, or %NULL for the default similarity metric.
     * @param metric a #GgitSimilarityMetric.
     */
    set_similarity_metric(metric: DiffSimilarityMetric): void
    /**
     * Set the maximum number of similarity sources to examine for renames (defaults to 200).
     * If the number of rename candidates (add / delete pairs) is greater than
     * this value, inexact rename detection is aborted.
     * @param target_limit maximum similarity source to examine for renames.
     */
    set_target_limit(target_limit: number): void
}

/**
 * Represents the options used when merging.
 * @record 
 */
class MergeOptions {

    // Own properties of Ggit-1.0.Ggit.MergeOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.MergeOptions

    /**
     * Creates a new #GgitMergeOptions.
     * @constructor 
     * @returns a newly allocated #GgitMergeOptions.
     */
    constructor() 
    /**
     * Creates a new #GgitMergeOptions.
     * @constructor 
     * @returns a newly allocated #GgitMergeOptions.
     */
    static new(): MergeOptions
}

interface NativeClass {
}

/**
 * The class structure for #GgitNativeClass.
 * @record 
 */
abstract class NativeClass {

    // Own properties of Ggit-1.0.Ggit.NativeClass

    static name: string
}

interface Note {

    // Owm methods of Ggit-1.0.Ggit.Note

    /**
     * Gets the note object's id.
     * @returns the object's id or %NULL.
     */
    get_id(): OId | null
    /**
     * Gets the note message.
     * @returns the note message or %NULL.
     */
    get_message(): string | null
    /**
     * Atomically increments the reference count of `note` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitNote or %NULL.
     */
    ref(): Note | null
    /**
     * Atomically decrements the reference count of `note` by one.
     * If the reference count drops to 0, `note` is freed.
     */
    unref(): void
}

/**
 * Represents a note object.
 * @record 
 */
class Note {

    // Own properties of Ggit-1.0.Ggit.Note

    static name: string
}

interface OId {

    // Owm methods of Ggit-1.0.Ggit.OId

    /**
     * Compare two #GgitOId structures.
     * @param b second #GgitOId.
     * @returns <0, 0, >0 if a < b, a == b, a > b.
     */
    compare(b: OId): number
    /**
     * Copies `oid` into a newly allocated #GgitOId.
     * @returns a newly allocated #GgitOId.
     */
    copy(): OId | null
    /**
     * Compares two #GgitOId for equality.
     * @param b a #GgitOId.
     * @returns %TRUE if @a and @b are equal, %FALSE otherwise
     */
    equal(b: OId): boolean
    /**
     * Frees `oid`.
     */
    free(): void
    /**
     * Check whether the object id has a given prefix. Note that the prefix is
     * specified in hexadecimal ASCII.
     * @param prefix a prefix.
     * @returns %TRUE if the id has the given prefix, %FALSE otherwise.
     */
    has_prefix(prefix: string): boolean
    /**
     * Computes a hash value for a git object identifier.
     * @returns the hash value
     */
    hash(): number
    /**
     * Get whether the oid contains only zeros.
     * @returns %TRUE if the oid contains only zeros, %FALSE otherwise.
     */
    is_zero(): boolean
    /**
     * Converts `oid` into a readable string.
     * @returns a newly allocated string representing @oid or %NULL.
     */
    to_string(): string | null
}

/**
 * Represents a unique ID of any object.
 * @record 
 */
class OId {

    // Own properties of Ggit-1.0.Ggit.OId

    static name: string

    // Constructors of Ggit-1.0.Ggit.OId

    /**
     * Creates a new #GgitOId from a raw oid.
     * @constructor 
     * @param raw the raw input bytes to be copied.
     * @returns a newly allocated #GgitOId or %NULL on error.
     */
    static new_from_raw(raw: Uint8Array): OId
    /**
     * Parses a hex formatted object id into a #GgitOId.
     * @constructor 
     * @param str input hex string; must be pointing at the start of       the hex sequence and have at least the number of bytes       needed for an oid encoded in hex (40 bytes).
     * @returns a newly allocated #GgitOId or %NULL on error.
     */
    static new_from_string(str: string): OId
}

interface ObjectClass {
}

/**
 * The class structure for #GgitObjectClass.
 * @record 
 */
abstract class ObjectClass {

    // Own properties of Ggit-1.0.Ggit.ObjectClass

    static name: string
}

interface ObjectFactoryBaseClass {
}

/**
 * The class structure for #GgitObjectFactoryBaseClass.
 * @record 
 */
abstract class ObjectFactoryBaseClass {

    // Own properties of Ggit-1.0.Ggit.ObjectFactoryBaseClass

    static name: string
}

interface ObjectFactoryClass {

    // Own fields of Ggit-1.0.Ggit.ObjectFactoryClass

    parent_class: GObject.ObjectClass
}

abstract class ObjectFactoryClass {

    // Own properties of Ggit-1.0.Ggit.ObjectFactoryClass

    static name: string
}

interface Patch {

    // Owm methods of Ggit-1.0.Ggit.Patch

    /**
     * Get the diff delta corresponding to the patch.
     * @returns the #GgitDiffDelta of the patch or %NULL.
     */
    get_delta(): DiffDelta | null
    /**
     * Get the `idx'`th hunk in the patch.
     * @param idx the hunk index.
     * @returns a new #GgitDiffHunk or %NULL on error.
     */
    get_hunk(idx: number): DiffHunk | null
    /**
     * Get the line statistics of the patch.
     * @returns %TRUE if successfull, %FALSE otherwise.
     */
    get_line_stats(): [ /* returnType */ boolean, /* total_context */ number, /* total_additions */ number, /* total_deletions */ number ]
    /**
     * Get the number of hunks in the patch.
     * @returns the number of hunks.
     */
    get_num_hunks(): number
    /**
     * Get the number of lines in `hunk`.
     * @param hunk the hunk index.
     * @returns the number of lines.
     */
    get_num_lines_in_hunk(hunk: number): number
    /**
     * Atomically increments the reference count of `patch` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitPatch or %NULL.
     */
    ref(): Patch | null
    /**
     * Write the contents of a patch to the provided stream.
     * @param stream a #GOutputStream.
     * @returns %TRUE if the patch was written successfully, %FALSE otherwise.
     */
    to_stream(stream: Gio.OutputStream): boolean
    /**
     * Gets the content of a patch as a single diff text.
     * @returns the content of a patch as a single diff text or %NULL.
     */
    to_string(): string | null
    /**
     * Atomically decrements the reference count of `patch` by one.
     * If the reference count drops to 0, `patch` is freed.
     */
    unref(): void
}

/**
 * Represents a patch object.
 * @record 
 */
class Patch {

    // Own properties of Ggit-1.0.Ggit.Patch

    static name: string

    // Constructors of Ggit-1.0.Ggit.Patch

    /**
     * Directly generate a patch from the difference between two blobs.
     * 
     * This is just like ggit_diff_blobs() except it generates a patch object
     * for the difference instead of directly making callbacks.  You can use the
     * standard ggit_patch accessor functions to read the patch data, and
     * you must call ggit_patch_unref on the patch when done.
     * @constructor 
     * @param old_blob a #GgitBlob to diff from.
     * @param old_as_path treat `old_blob` as if it had this filename, or %NULL,
     * @param new_blob a #GgitBlob to diff to.
     * @param new_as_path treat `new_blob` as if it had this filename, or %NULL,
     * @param diff_options a #GgitDiffOptions, or %NULL.
     * @returns a newly created #GgitPatch or %NULL.
     */
    static new_from_blobs(old_blob: Blob | null, old_as_path: string | null, new_blob: Blob | null, new_as_path: string | null, diff_options: DiffOptions | null): Patch
    /**
     * The #GgitPatch is a newly created object contains the text diffs
     * for the delta.  You have to call ggit_patch_unref() when you are
     * done with it.  You can use the patch object to loop over all the hunks
     * and lines in the diff of the one delta.
     * @constructor 
     * @param diff a #GgitDiff.
     * @param idx index into diff list.
     * @returns a newly created #GgitPatch or %NULL.
     */
    static new_from_diff(diff: Diff, idx: number): Patch
}

interface ProxyOptionsClass {

    // Own fields of Ggit-1.0.Ggit.ProxyOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ProxyOptionsClass {

    // Own properties of Ggit-1.0.Ggit.ProxyOptionsClass

    static name: string
}

interface PushOptionsClass {

    // Own fields of Ggit-1.0.Ggit.PushOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class PushOptionsClass {

    // Own properties of Ggit-1.0.Ggit.PushOptionsClass

    static name: string
}

interface RebaseClass {

    // Own fields of Ggit-1.0.Ggit.RebaseClass

    parent_class: NativeClass
}

abstract class RebaseClass {

    // Own properties of Ggit-1.0.Ggit.RebaseClass

    static name: string
}

interface RebaseOperation {

    // Owm methods of Ggit-1.0.Ggit.RebaseOperation

    /**
     * Gets the executable the user has requested be run.  This will only
     * be populated for operations of type `GGIT_REBASE_OPERATION_EXEC`.
     * @returns the executable the user has requested be run or %NULL.
     */
    get_exec(): string | null
    /**
     * Gets the commit ID being cherry-picked. This will be populated for
     * all operations except those of type `GGIT_REBASE_OPERATION_EXEC`.
     * @returns the commit ID being cherry-picked or %NULL.
     */
    get_id(): OId | null
    /**
     * Gets the type of rebase operation.
     * @returns a #GgitRebaseOperationType.
     */
    get_operation_type(): RebaseOperationType
    /**
     * Atomically increments the reference count of `rebase_operation` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a newly allocated #GgitRebaseOperation or %NULL.
     */
    ref(): RebaseOperation | null
    /**
     * Atomically decrements the reference count of `rebase_operation` by one.
     * If the reference count drops to 0, `rebase_operation` is freed.
     */
    unref(): void
}

/**
 * Represents a rebase operation.
 * @record 
 */
class RebaseOperation {

    // Own properties of Ggit-1.0.Ggit.RebaseOperation

    static name: string
}

interface RebaseOptions {

    // Owm methods of Ggit-1.0.Ggit.RebaseOptions

    /**
     * Copies `rebase_options` into a newly allocated #GgitRebaseOptions.
     * @returns a newly allocated #GgitRebaseOptions or %NULL.
     */
    copy(): RebaseOptions | null
    /**
     * Frees `rebase_options`.
     */
    free(): void
    /**
     * Get the checkout options object or %NULL if not set.
     * @returns the checkout options or %NULL.
     */
    get_checkout_options(): CheckoutOptions | null
    /**
     * Gets whether you want a quiet rebase experience.
     * @returns returns whether you want a quiet rebase experience.
     */
    get_quiet(): boolean
    /**
     * Gets the the name of the notes reference used to rewrite notes for rebased
     * commits when finishing the rebase or %NULL if not set.
     * @returns the name of the notes reference or %NULL.
     */
    get_rewrite_notes_ref(): string | null
    set_checkout_options(checkout_options: CheckoutOptions): void
    /**
     * Used by ggit_rebase_init(), this will instruct other clients working
     * on this rebase that you want a quiet rebase experience, which they
     * may choose to provide in an application-specific manner.  This has no
     * effect upon libgit2-glib directly, but is provided for interoperability
     * between Git tools.
     * @param quiet whether you want a quiet rebase experience.
     */
    set_quiet(quiet: boolean): void
    /**
     * Used by ggit_rebase_finish(), this is the name of the notes reference
     * used to rewrite notes for rebased commits when finishing the rebase;
     * if %NULL, the contents of the configuration option `notes.rewriteRef`
     * is examined, unless the configuration option `notes.rewrite.rebase`
     * is set to false.  If `notes.rewriteRef` is also %NULL, notes will
     * not be rewritten.
     * @param rewrite_notes_ref the name of the notes reference.
     */
    set_rewrite_notes_ref(rewrite_notes_ref: string): void
}

/**
 * Represents the options used when rebasing.
 * @record 
 */
class RebaseOptions {

    // Own properties of Ggit-1.0.Ggit.RebaseOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.RebaseOptions

    /**
     * Creates a new #GgitRebaseOptions.
     * @constructor 
     * @returns a newly allocated #GgitRebaseOptions.
     */
    constructor() 
    /**
     * Creates a new #GgitRebaseOptions.
     * @constructor 
     * @returns a newly allocated #GgitRebaseOptions.
     */
    static new(): RebaseOptions
}

interface RefClass {
}

/**
 * The class structure for #GgitRefClass.
 * @record 
 */
abstract class RefClass {

    // Own properties of Ggit-1.0.Ggit.RefClass

    static name: string
}

interface RefSpec {

    // Owm methods of Ggit-1.0.Ggit.RefSpec

    /**
     * Gets the `refspec'`s destination.
     * @returns the refspec's destination or %NULL.
     */
    get_destination(): string | null
    /**
     * Gets the `refspec'`s source.
     * @returns the refspec's source or %NULL.
     */
    get_source(): string | null
    /**
     * Whether updating is done forcefully.
     * @returns if updating is done forcefully.
     */
    is_forced(): boolean
    /**
     * Atomically increments the reference count of `refspec` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitRefSpec or %NULL.
     */
    ref(): RefSpec | null
    /**
     * Atomically decrements the reference count of `refspec` by one.
     * If the reference count drops to 0, `refspec` is freed.
     */
    unref(): void
}

/**
 * Reprensents a git reference specification.
 * @record 
 */
class RefSpec {

    // Own properties of Ggit-1.0.Ggit.RefSpec

    static name: string
}

interface Reflog {

    // Owm methods of Ggit-1.0.Ggit.Reflog

    /**
     * Creates a reflog entry.
     * @param oid a #GgitOId.
     * @param committer a #GgitSignature.
     * @param message the message.
     * @returns %TRUE if the reflog was successfully created, or %FALSE if error is set.
     */
    append(oid: OId, committer: Signature, message: string): boolean
    /**
     * Gets the number of log entries in `reflog`.
     * @returns the number of log entries.
     */
    get_entry_count(): number
    /**
     * Gets the #GgitReflogEntry at `idx` in `reflog,` or %NULL if not found.
     * @param idx the position to lookup.
     * @returns the reflog entry at the index, or %NULL if not found.
     */
    get_entry_from_index(idx: number): ReflogEntry | null
    /**
     * Atomically increments the reference count of `reflog` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns the passed in #GgitReflog or %NULL.
     */
    ref(): Reflog | null
    /**
     * Renames the reflog for to `new_name,` on error `error` is set.
     * @param new_name the new name of the reference.
     */
    rename(new_name: string): boolean
    /**
     * Atomically decrements the reference count of `reflog` by one.
     * If the reference count drops to 0, `reflog` is freed.
     */
    unref(): void
    /**
     * Write the reflog to disk.
     * @returns %TRUE if the reflog was successfully written, or %FALSE on error.
     */
    write(): boolean
}

/**
 * Represents a reflog.
 * @record 
 */
class Reflog {

    // Own properties of Ggit-1.0.Ggit.Reflog

    static name: string
}

interface ReflogEntry {

    // Owm methods of Ggit-1.0.Ggit.ReflogEntry

    /**
     * Gets the committer as a #GgitSignature.
     * @returns the committer or %NULL.
     */
    get_committer(): Signature | null
    /**
     * Gets the message.
     * @returns the message or %NULL.
     */
    get_message(): string | null
    /**
     * Gets the new #GgitOId.
     * @returns the new oid or %NULL.
     */
    get_new_id(): OId | null
    /**
     * Gets the old #GgitOId.
     * @returns the old oid or %NULL.
     */
    get_old_id(): OId | null
    /**
     * Atomically increments the reference count of `reflog_entry` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns the passed in #GgitReflogEntry or %NULL.
     */
    ref(): ReflogEntry | null
    /**
     * Atomically decrements the reference count of `reflog_entry` by one.
     * If the reference count drops to 0, `reflog_entry` is freed.
     */
    unref(): void
}

/**
 * Represents a reflog entry.
 * @record 
 */
class ReflogEntry {

    // Own properties of Ggit-1.0.Ggit.ReflogEntry

    static name: string
}

interface RemoteCallbacksClass {

    // Own fields of Ggit-1.0.Ggit.RemoteCallbacksClass

    parent_class: GObject.ObjectClass
    progress: (callbacks: RemoteCallbacks, message: string) => void
    transfer_progress: (callbacks: RemoteCallbacks, stats: TransferProgress) => void
    update_tips: (callbacks: RemoteCallbacks, refname: string, a: OId, b: OId) => void
    completion: (callbacks: RemoteCallbacks, type: RemoteCompletionType) => void
    credentials: (callbacks: RemoteCallbacks, url: string, username_from_url: string | null, allowed_types: Credtype) => Cred | null
}

abstract class RemoteCallbacksClass {

    // Own properties of Ggit-1.0.Ggit.RemoteCallbacksClass

    static name: string
}

interface RemoteClass {
}

abstract class RemoteClass {

    // Own properties of Ggit-1.0.Ggit.RemoteClass

    static name: string
}

interface RemoteHead {

    // Owm methods of Ggit-1.0.Ggit.RemoteHead

    /**
     * Get the local oid of the remote head.
     * @returns the local oid or %NULL.
     */
    get_local_oid(): OId | null
    /**
     * Get the remote head name.
     * @returns the remote head name or %NULL.
     */
    get_name(): string | null
    /**
     * Get the remote oid of the remote head.
     * @returns the remote oid or %NULL.
     */
    get_oid(): OId | null
    /**
     * Get whether the remote head is local.
     * @returns whether the remote head is local.
     */
    is_local(): boolean
    ref(): RemoteHead
    unref(): void
}

/**
 * Represents a git remote head.
 * @record 
 */
class RemoteHead {

    // Own properties of Ggit-1.0.Ggit.RemoteHead

    static name: string
}

interface RepositoryClass {
}

/**
 * The class structure for #GgitRepositoryClass.
 * @record 
 */
abstract class RepositoryClass {

    // Own properties of Ggit-1.0.Ggit.RepositoryClass

    static name: string
}

interface RevertOptions {

    // Owm methods of Ggit-1.0.Ggit.RevertOptions

    /**
     * Copies `revert_options` into a newly allocated #GgitRevertOptions.
     * @returns a newly allocated #GgitRevertOptions or %NULL.
     */
    copy(): RevertOptions | null
    /**
     * Frees `revert_options`.
     */
    free(): void
}

/**
 * Represents the options used when reverting.
 * @record 
 */
class RevertOptions {

    // Own properties of Ggit-1.0.Ggit.RevertOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.RevertOptions

    /**
     * Create a new #GgitRevertOptions. Note that the passed in `merge_options` and
     * `checkout_options` are copied by this function, and alterations in either
     * after this call are therefore not reflected in the revert options.
     * 
     * The `mainline` indicates which parent to use for the revert when reverting
     * a merge commit.
     * @constructor 
     * @param mainline the mainline.
     * @param merge_options a #GgitMergeOptions.
     * @param checkout_options a #GgitCheckoutOptions.
     * @returns a #GgitRevertOptions or %NULL.
     */
    constructor(mainline: number, merge_options: MergeOptions | null, checkout_options: CheckoutOptions | null) 
    /**
     * Create a new #GgitRevertOptions. Note that the passed in `merge_options` and
     * `checkout_options` are copied by this function, and alterations in either
     * after this call are therefore not reflected in the revert options.
     * 
     * The `mainline` indicates which parent to use for the revert when reverting
     * a merge commit.
     * @constructor 
     * @param mainline the mainline.
     * @param merge_options a #GgitMergeOptions.
     * @param checkout_options a #GgitCheckoutOptions.
     * @returns a #GgitRevertOptions or %NULL.
     */
    static new(mainline: number, merge_options: MergeOptions | null, checkout_options: CheckoutOptions | null): RevertOptions
}

interface RevisionWalkerClass {
}

/**
 * The class structure for #GgitRevisionWalkerClass.
 * @record 
 */
abstract class RevisionWalkerClass {

    // Own properties of Ggit-1.0.Ggit.RevisionWalkerClass

    static name: string
}

interface SignatureClass {

    // Own fields of Ggit-1.0.Ggit.SignatureClass

    parent_class: NativeClass
}

abstract class SignatureClass {

    // Own properties of Ggit-1.0.Ggit.SignatureClass

    static name: string
}

interface StatusOptions {

    // Owm methods of Ggit-1.0.Ggit.StatusOptions

    /**
     * Copies `status_options` into a newly allocated #GgitStatusOptions.
     * @returns a newly allocated #GgitStatusOptions or %NULL.
     */
    copy(): StatusOptions | null
    /**
     * Frees `status_options`.
     */
    free(): void
}

/**
 * Represents the options used when creating getting file status.
 * @record 
 */
class StatusOptions {

    // Own properties of Ggit-1.0.Ggit.StatusOptions

    static name: string

    // Constructors of Ggit-1.0.Ggit.StatusOptions

    /**
     * Creates a new #GgitStatusOptions for use in #ggit_repository_stash_foreach.
     * @constructor 
     * @param options status options.
     * @param show status show options.
     * @param pathspec which paths to show, defaults to showing all paths.
     * @returns a newly allocated #GgitStatusOptions.
     */
    constructor(options: StatusOption, show: StatusShow, pathspec: string[] | null) 
    /**
     * Creates a new #GgitStatusOptions for use in #ggit_repository_stash_foreach.
     * @constructor 
     * @param options status options.
     * @param show status show options.
     * @param pathspec which paths to show, defaults to showing all paths.
     * @returns a newly allocated #GgitStatusOptions.
     */
    static new(options: StatusOption, show: StatusShow, pathspec: string[] | null): StatusOptions
}

interface Submodule {

    // Owm methods of Ggit-1.0.Ggit.Submodule

    /**
     * Gets whether to fetch recursively. See see gitmodules(5) fetchRecurseSubmodules.
     * @returns whether or not fetch recursively.
     */
    get_fetch_recurse(): boolean
    get_head_id(): OId
    /**
     * Gets a #GgitSubmoduleIgnore. See see gitmodules(5) ignore.
     * @returns the #GgitSubmoduleIgnore.
     */
    get_ignore(): SubmoduleIgnore
    /**
     * Gets the OID for the submodule in the index or %NULL if there is no index.
     * @returns the OID for the submodule in the index or %NULL.
     */
    get_index_id(): OId | null
    /**
     * Gets the name of the submodule from .gitmodules.
     * @returns the name of the submodule from .gitmodules or %NULL.
     */
    get_name(): string | null
    /**
     * Gets the containing repository for a submodule.
     * @returns the containing repository for a submodule or %NULL.
     */
    get_owner(): Repository | null
    /**
     * Gets the path to the submodule from the repo working directory.
     * It is almost always the same as the name.
     * See ggit_submodule_get_name().
     * @returns the path to the submodule from the repo working directory or %NULL.
     */
    get_path(): string | null
    /**
     * Gets a #GgitSubmoduleUpdate. See see gitmodules(5) update.
     * @returns the #GgitSubmoduleUpdate.
     */
    get_update(): SubmoduleUpdate
    /**
     * Gets the url for the submodule or %NULL if the submodule has been deleted
     * but not yet committed.
     * @returns the url for the submodule or %NULL.
     */
    get_url(): string | null
    /**
     * Gets the OID for the submodule in the current working directory.
     * Corresponds to looking up 'HEAD' in the checked out submodule.
     * If there are pending changes in the index or anything
     * else, this won't notice that.  You should call ggit_submodule_status()
     * for a more complete picture about the state of the working directory.
     * @returns the OID for the submodule in the current working directory or %NULL.
     */
    get_workdir_id(): OId | null
    /**
     * Just like "git submodule init", this copies information about the
     * submodule into ".git/config".  You can use the accessor functions
     * above to alter the in-memory git_submodule object and control what
     * is written to the config, overriding what is in .gitmodules.
     * @param overwrite forces existing entries to be updated.
     */
    init(overwrite: boolean): void
    /**
     * Open the repository for a submodule. Multiple calls to this function
     * will return distinct #GgitRepository objects. Only submodules which are
     * checked out in the working directory can be opened.
     * @returns the opened #GgitRepository or %NULL in case of an                           error.
     */
    open(): Repository | null
    /**
     * Atomically increments the reference count of `submodule` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns the passed in #GgitSubmodule or %NULL.
     */
    ref(): Submodule | null
    /**
     * Rereads submodule info from config, index, and HEAD.
     * Call this if you have reason to believe that it has changed.
     * @param force reload even if the data doesn't seem out of date.
     */
    reload(force: boolean): void
    /**
     * Copies the information about the submodules URL into the checked out
     * submodule config, acting like "git submodule sync".  This is useful if
     * you have altered the URL for the submodule (or it has been altered by a
     * fetch of upstream changes) and you need to update your local repo.
     */
    sync(): void
    /**
     * Atomically decrements the reference count of `submodule` by one.
     * If the reference count drops to 0, `remote` is freed.
     */
    unref(): void
    /**
     * Update a submodule. This will clone a missing submodule and checkout
     * the subrepository to the commit specified in the index of the containing
     * repository. If the submodule repository doesn't contain the target commit
     * (e.g. because fetchRecurseSubmodules isn't set), then the submodule is
     * fetched using the fetch options supplied in options.
     * @param init If the submodule is not initialized, setting this flag to true        will initialize the submodule before updating. Otherwise, this        will return an error if attempting to update an uninitialzed        repository. but setting this to true forces them to be updated.
     * @param options a #GgitSubmoduleUpdateOptions object.
     */
    update(init: boolean, options: SubmoduleUpdateOptions): void
}

/**
 * Represents a git submodule.
 * @record 
 */
class Submodule {

    // Own properties of Ggit-1.0.Ggit.Submodule

    static name: string
}

interface SubmoduleUpdateOptionsClass {

    // Own fields of Ggit-1.0.Ggit.SubmoduleUpdateOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class SubmoduleUpdateOptionsClass {

    // Own properties of Ggit-1.0.Ggit.SubmoduleUpdateOptionsClass

    static name: string
}

interface TagClass {
}

/**
 * The class structure for #GgitTagClass.
 * @record 
 */
abstract class TagClass {

    // Own properties of Ggit-1.0.Ggit.TagClass

    static name: string
}

interface TransferProgress {

    // Owm methods of Ggit-1.0.Ggit.TransferProgress

    /**
     * Copies `progress` into a newly allocated #GgitTransferProgress.
     * @returns a newly allocated #GgitTransferProgress or %NULL.
     */
    copy(): TransferProgress | null
    /**
     * Frees `progress`.
     */
    free(): void
    /**
     * Gets the indexed objects of the transfer.
     * @returns the indexed objects of the transfer.
     */
    get_indexed_objects(): number
    /**
     * Gets the received bytes of the transfer.
     * @returns the received bytes of the transfer.
     */
    get_received_bytes(): number
    /**
     * Gets the received objects of the transfer.
     * @returns the received objects of the transfer.
     */
    get_received_objects(): number
    /**
     * Gets the total objects of the transfer.
     * @returns the total objects of the transfer.
     */
    get_total_objects(): number
}

/**
 * Represents transfering progress.
 * @record 
 */
class TransferProgress {

    // Own properties of Ggit-1.0.Ggit.TransferProgress

    static name: string
}

interface TreeBuilderClass {
}

/**
 * The class structure for #GgitTreeBuilderClass.
 * @record 
 */
abstract class TreeBuilderClass {

    // Own properties of Ggit-1.0.Ggit.TreeBuilderClass

    static name: string
}

interface TreeClass {
}

/**
 * The class structure for #GgitTreeClass.
 * @record 
 */
abstract class TreeClass {

    // Own properties of Ggit-1.0.Ggit.TreeClass

    static name: string
}

interface TreeEntry {

    // Owm methods of Ggit-1.0.Ggit.TreeEntry

    /**
     * Gets the #GgitFileMode of a tree entry.
     * @returns the #GgitFileMode of a tree entry.
     */
    get_file_mode(): FileMode
    /**
     * Get the #GgitOId of the entry.
     * @returns a #GgitOId or %NULL.
     */
    get_id(): OId | null
    /**
     * Get the name of the tree entry.
     * @returns the name of the tree entry or %NULL.
     */
    get_name(): string | null
    /**
     * Get the type of the tree entry object.
     * @returns a #GType.
     */
    get_object_type(): GObject.GType
    /**
     * Atomically increments the reference count of `entry` by one.
     * This function is MT-safe and may be called from any thread.
     * @returns a #GgitTreeEntry or %NULL.
     */
    ref(): TreeEntry | null
    /**
     * Atomically decrements the reference count of `entry` by one.
     * If the reference count drops to 0, `entry` is freed.
     */
    unref(): void
}

/**
 * Represents an entry in a tree.
 * @record 
 */
class TreeEntry {

    // Own properties of Ggit-1.0.Ggit.TreeEntry

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Ggit;
// END