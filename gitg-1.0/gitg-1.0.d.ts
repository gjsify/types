/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gitg-1.0-ambient.d.ts';
import './gitg-1.0-import.d.ts';
/**
 * Gitg-1.0
 */

import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gee from '@girs/gee-0.8';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Ggit from '@girs/ggit-1.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gitg {
    enum AuthenticationLifeTime {
        FORGET,
        SESSION,
        FOREVER,
    }
    enum CommitModelColumns {
        SHA1,
        SUBJECT,
        MESSAGE,
        AUTHOR,
        AUTHOR_NAME,
        AUTHOR_EMAIL,
        AUTHOR_DATE,
        COMMITTER,
        COMMITTER_NAME,
        COMMITTER_EMAIL,
        COMMITTER_DATE,
        COMMIT,
        NUM,
    }
    enum RefType {
        NONE,
        BRANCH,
        REMOTE,
        TAG,
        STASH,
    }
    enum RefState {
        NONE,
        SELECTED,
        PRELIGHT,
    }
    enum RemoteState {
        DISCONNECTED,
        CONNECTING,
        CONNECTED,
        TRANSFERRING,
    }
    enum SelectionMode {
        NORMAL,
        SELECTION,
    }
    enum DeleteSources {
        CANCEL,
        TRASH,
        DELETE,
    }
    enum SidebarHint {
        NONE,
        HEADER,
        SEPARATOR,
        DUMMY,
    }
    enum SidebarColumn {
        HINT,
        SECTION,
        ITEM,
    }
    class CredentialsError extends GLib.Error {
        // Own fields of Gitg-1.0.CredentialsError

        CANCELLED: number;

        // Constructors of Gitg-1.0.CredentialsError

        constructor(options: { message: string; code: number });
    }

    class DateError extends GLib.Error {
        // Own fields of Gitg-1.0.DateError

        INVALID_FORMAT: number;

        // Constructors of Gitg-1.0.DateError

        constructor(options: { message: string; code: number });
    }

    class InitError extends GLib.Error {
        // Own fields of Gitg-1.0.InitError

        THREADS_UNSAFE: number;

        // Constructors of Gitg-1.0.InitError

        constructor(options: { message: string; code: number });
    }

    class RemoteError extends GLib.Error {
        // Own fields of Gitg-1.0.RemoteError

        ALREADY_CONNECTED: number;
        ALREADY_CONNECTING: number;
        ALREADY_DISCONNECTED: number;
        STILL_CONNECTING: number;

        // Constructors of Gitg-1.0.RemoteError

        constructor(options: { message: string; code: number });
    }

    class StageError extends GLib.Error {
        // Own fields of Gitg-1.0.StageError

        PRE_COMMIT_HOOK_FAILED: number;
        COMMIT_MSG_HOOK_FAILED: number;
        NOTHING_TO_COMMIT: number;
        INDEX_ENTRY_NOT_FOUND: number;
        SIGN_CONFIG_NOT_FOUND: number;
        SIGN_CONFIG_ERROR: number;
        UPDATE_REF_ERROR: number;

        // Constructors of Gitg-1.0.StageError

        constructor(options: { message: string; code: number });
    }

    enum PatchSetType {
        ADD,
        REMOVE,
    }
    function commit_model_columns_type(): GObject.GType;
    function init(): void;
    enum LaneTag {
        NONE,
        START,
        END,
        SIGN_STASH,
        SIGN_STAGED,
        SIGN_UNSTAGED,
        HIDDEN,
    }
    enum StageCommitOptions {
        NONE,
        SIGN_OFF,
        AMEND,
        SKIP_HOOKS,
        SIGN_COMMIT,
    }
    class Async {
        // Own fields of Gitg-1.0.Async

        ref_count: number;

        // Constructors of Gitg-1.0.Async

        static ['new'](): Async;

        // Owm methods of Gitg-1.0.Async

        static thread(func: AsyncThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;
        static thread_finish(_res_: Gio.AsyncResult): void;
        static thread_try(func: AsyncThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;
        static thread_try_finish(_res_: Gio.AsyncResult): void;
    }

    module AuthenticationDialog {
        // Constructor properties interface
    }

    class AuthenticationDialog extends Gtk.Dialog {
        // Own properties of Gitg-1.0.AuthenticationDialog

        readonly username: string;
        readonly password: string;
        readonly life_time: AuthenticationLifeTime;
        readonly lifeTime: AuthenticationLifeTime;

        // Constructors of Gitg-1.0.AuthenticationDialog

        static ['new'](url: string, username: string | null, failed: boolean): AuthenticationDialog;

        // Owm methods of Gitg-1.0.AuthenticationDialog

        get_username(): string;
        get_password(): string;
        get_life_time(): AuthenticationLifeTime;
    }

    module AvatarCache {
        // Constructor properties interface
    }

    class AvatarCache extends GObject.Object {
        // Owm methods of Gitg-1.0.AvatarCache

        static ['default'](): AvatarCache;

        // Owm methods of Gitg-1.0.AvatarCache

        load(
            email: string,
            size: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null;
    }

    module BranchBase {
        // Constructor properties interface
    }

    class BranchBase extends Ggit.Branch {
        // Constructors of Gitg-1.0.BranchBase

        static ['new'](): BranchBase;
    }

    module CellRendererLanes {
        // Constructor properties interface
    }

    class CellRendererLanes extends Gtk.CellRendererText {
        // Own properties of Gitg-1.0.CellRendererLanes

        commit: Commit;
        next_commit: Commit;
        nextCommit: Commit;
        lane_width: number;
        laneWidth: number;
        dot_width: number;
        dotWidth: number;
        labels: Ref[];

        // Constructors of Gitg-1.0.CellRendererLanes

        static ['new'](): CellRendererLanes;

        // Owm methods of Gitg-1.0.CellRendererLanes

        get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): Ref | null;
        get_commit(): Commit | null;
        set_commit(value?: Commit | null): void;
        get_next_commit(): Commit | null;
        set_next_commit(value?: Commit | null): void;
        get_lane_width(): number;
        set_lane_width(value: number): void;
        get_dot_width(): number;
        set_dot_width(value: number): void;
        get_labels(): Ref[];
        set_labels(value: Ref[]): void;
    }

    module Color {
        // Constructor properties interface
    }

    class Color extends GObject.Object {
        // Own properties of Gitg-1.0.Color

        readonly r: number;
        readonly g: number;
        readonly b: number;

        // Own fields of Gitg-1.0.Color

        idx: number;

        // Constructors of Gitg-1.0.Color

        static ['new'](): Color;

        // Owm methods of Gitg-1.0.Color

        static reset(): void;
        static next(): Color;

        // Owm methods of Gitg-1.0.Color

        components(): void;
        next_index(): Color;
        copy(): Color;
        get_r(): number;
        get_g(): number;
        get_b(): number;
    }

    module CommitListView {
        // Constructor properties interface
    }

    class CommitListView extends Gtk.TreeView {
        // Constructors of Gitg-1.0.CommitListView

        static ['new'](model: CommitModel): CommitListView;

        static for_repository(repository: Repository): CommitListView;

        // Owm methods of Gitg-1.0.CommitListView

        find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): Gtk.CellRenderer | null;
    }

    module CommitModel {
        // Signal callback interfaces

        interface Started {
            (): void;
        }

        interface Update {
            (added: number): void;
        }

        interface Finished {
            (): void;
        }

        interface BeginClear {
            (): void;
        }

        interface EndClear {
            (): void;
        }

        // Constructor properties interface
    }

    class CommitModel extends GObject.Object {
        // Own properties of Gitg-1.0.CommitModel

        limit: number;
        sort_mode: Ggit.SortMode;
        sortMode: Ggit.SortMode;
        repository: Repository;

        // Constructors of Gitg-1.0.CommitModel

        static ['new'](repository?: Repository | null): CommitModel;

        // Owm methods of Gitg-1.0.CommitModel

        get_permanent_lanes(): Ggit.OId[];
        set_permanent_lanes(value: Ggit.OId[]): void;
        reload(): void;
        size(): number;
        get(idx: number): Commit | null;
        set_include(ids: Ggit.OId[]): void;
        get_include(): Ggit.OId[];
        set_exclude(ids: Ggit.OId[]): void;
        commit_from_iter(iter: Gtk.TreeIter): Commit | null;
        path_from_commit(commit: Commit): Gtk.TreePath | null;
        commit_from_path(path: Gtk.TreePath): Commit | null;
        get_limit(): number;
        set_limit(value: number): void;
        get_sort_mode(): Ggit.SortMode;
        set_sort_mode(value: Ggit.SortMode): void;
        get_repository(): Repository;
        set_repository(value: Repository): void;
    }

    module Commit {
        // Constructor properties interface
    }

    class Commit extends Ggit.Commit {
        // Own properties of Gitg-1.0.Commit

        tag: LaneTag;
        mylane: number;
        readonly lane: Lane;
        readonly format_patch_name: string;
        readonly formatPatchName: string;
        readonly committer_date_for_display: string;
        readonly committerDateForDisplay: string;
        readonly author_date_for_display: string;
        readonly authorDateForDisplay: string;

        // Constructors of Gitg-1.0.Commit

        static ['new'](): Commit;

        // Owm methods of Gitg-1.0.Commit

        get_lanes(): Lane[];
        insert_lane(lane: Lane, idx: number): Lane[];
        remove_lane(lane: Lane): Lane[];
        update_lanes(lanes: Lane[], mylane: number): void;
        get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff;
        get_note(): Ggit.Note;
        get_tag(): LaneTag;
        set_tag(value: LaneTag): void;
        get_mylane(): number;
        set_mylane(value: number): void;
        get_lane(): Lane;
        get_format_patch_name(): string;
        get_committer_date_for_display(): string;
        get_author_date_for_display(): string;
    }

    class CredentialsManager {
        // Own fields of Gitg-1.0.CredentialsManager

        ref_count: number;

        // Constructors of Gitg-1.0.CredentialsManager

        static ['new'](
            config: Ggit.Config | null,
            window: Gtk.Window,
            save_user_in_config: boolean,
        ): CredentialsManager;

        // Owm methods of Gitg-1.0.CredentialsManager

        credentials(url: string, username: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;
    }

    module Date {
        // Constructor properties interface
    }

    class Date extends GObject.Object {
        // Own properties of Gitg-1.0.Date

        date_string: string;
        dateString: string;
        readonly date: GLib.DateTime;

        // Constructors of Gitg-1.0.Date

        static ['new'](date: string): Date;

        static for_date_time(dt: GLib.DateTime): Date;

        // Owm methods of Gitg-1.0.Date

        static parse(date: string): GLib.DateTime;

        // Owm methods of Gitg-1.0.Date

        for_display(): string;
        get_date_string(): string;
        set_date_string(value: string): void;
        get_date(): GLib.DateTime;
    }

    module DiffStat {
        // Constructor properties interface
    }

    class DiffStat extends Gtk.DrawingArea {
        // Own properties of Gitg-1.0.DiffStat

        added: number;
        removed: number;

        // Constructors of Gitg-1.0.DiffStat

        static ['new'](): DiffStat;

        // Owm methods of Gitg-1.0.DiffStat

        get_added(): number;
        set_added(value: number): void;
        get_removed(): number;
        set_removed(value: number): void;
    }

    module DiffViewOptions {
        // Constructor properties interface
    }

    class DiffViewOptions extends Gtk.Toolbar {
        // Own properties of Gitg-1.0.DiffViewOptions

        context_lines: number;
        contextLines: number;
        view: DiffView;

        // Constructors of Gitg-1.0.DiffViewOptions

        static ['new'](view?: DiffView | null): DiffViewOptions;

        // Owm methods of Gitg-1.0.DiffViewOptions

        get_context_lines(): number;
        set_context_lines(value: number): void;
        get_view(): DiffView | null;
        set_view(value?: DiffView | null): void;
    }

    module DiffView {
        // Signal callback interfaces

        interface OptionsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class DiffView extends Gtk.Grid {
        // Own properties of Gitg-1.0.DiffView

        readonly options: Ggit.DiffOptions;
        has_selection: boolean;
        hasSelection: boolean;
        diff: Ggit.Diff;
        commit: Commit;
        wrap_lines: boolean;
        wrapLines: boolean;
        staged: boolean;
        unstaged: boolean;
        show_parents: boolean;
        showParents: boolean;
        default_collapse_all: boolean;
        defaultCollapseAll: boolean;
        use_gravatar: boolean;
        useGravatar: boolean;
        tab_width: number;
        tabWidth: number;
        handle_selection: boolean;
        handleSelection: boolean;
        highlight: boolean;
        repository: Repository;
        new_is_workdir: boolean;
        newIsWorkdir: boolean;
        ignore_whitespace: boolean;
        ignoreWhitespace: boolean;
        changes_inline: boolean;
        changesInline: boolean;
        context_lines: number;
        contextLines: number;

        // Constructors of Gitg-1.0.DiffView

        static ['new'](): DiffView;

        // Owm methods of Gitg-1.0.DiffView

        apply_link_tags(
            buffer: Gtk.TextBuffer,
            regex: GLib.Regex,
            replacement: string | null,
            custom_color_link: Gdk.RGBA,
            is_custom_color: boolean,
            is_custom_link: boolean,
        ): void;
        follow_if_link(texview: Gtk.Widget, iter: Gtk.TextIter): void;
        get_selection(): PatchSet[];
        clear_selection(): void;
        get_options(): Ggit.DiffOptions;
        get_has_selection(): boolean;
        get_diff(): Ggit.Diff | null;
        set_diff(value?: Ggit.Diff | null): void;
        get_commit(): Commit | null;
        set_commit(value?: Commit | null): void;
        get_wrap_lines(): boolean;
        set_wrap_lines(value: boolean): void;
        get_staged(): boolean;
        set_staged(value: boolean): void;
        get_unstaged(): boolean;
        set_unstaged(value: boolean): void;
        get_show_parents(): boolean;
        set_show_parents(value: boolean): void;
        get_default_collapse_all(): boolean;
        set_default_collapse_all(value: boolean): void;
        get_use_gravatar(): boolean;
        set_use_gravatar(value: boolean): void;
        get_tab_width(): number;
        set_tab_width(value: number): void;
        get_handle_selection(): boolean;
        set_handle_selection(value: boolean): void;
        get_highlight(): boolean;
        set_highlight(value: boolean): void;
        get_repository(): Repository | null;
        set_repository(value?: Repository | null): void;
        get_new_is_workdir(): boolean;
        set_new_is_workdir(value: boolean): void;
        get_ignore_whitespace(): boolean;
        set_ignore_whitespace(value: boolean): void;
        get_changes_inline(): boolean;
        set_changes_inline(value: boolean): void;
        get_context_lines(): number;
        set_context_lines(value: number): void;
    }

    module FontManager {
        // Constructor properties interface
    }

    class FontManager extends GObject.Object {
        // Constructors of Gitg-1.0.FontManager

        static ['new'](text_view: Gtk.TextView, plugin: boolean): FontManager;
    }

    class GPGUtils {
        // Own fields of Gitg-1.0.GPGUtils

        ref_count: number;

        // Constructors of Gitg-1.0.GPGUtils

        static ['new'](): GPGUtils;

        // Owm methods of Gitg-1.0.GPGUtils

        static sign_commit_object(commit_content: string, signing_key: string): string;
    }

    module Hook {
        // Constructor properties interface
    }

    class Hook extends GObject.Object {
        // Own properties of Gitg-1.0.Hook

        environment: Gee.HashMap;
        name: string;
        working_directory: Gio.File;
        workingDirectory: Gio.File;
        readonly output: string[];

        // Constructors of Gitg-1.0.Hook

        static ['new'](name: string): Hook;

        // Owm methods of Gitg-1.0.Hook

        add_argument(arg: string): void;
        exists_in(repository: Ggit.Repository): boolean;
        run_sync(repository: Ggit.Repository): number;
        run(repository: Ggit.Repository, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(_res_: Gio.AsyncResult): number;
        get_environment(): Gee.HashMap;
        set_environment(value: Gee.HashMap): void;
        get_name(): string;
        set_name(value: string): void;
        get_working_directory(): Gio.File | null;
        set_working_directory(value?: Gio.File | null): void;
        get_output(): string[];
    }

    class LabelRenderer {
        // Own fields of Gitg-1.0.LabelRenderer

        ref_count: number;

        // Constructors of Gitg-1.0.LabelRenderer

        static ['new'](): LabelRenderer;

        // Owm methods of Gitg-1.0.LabelRenderer

        static width(widget: Gtk.Widget, font: any | null, labels: Ref[]): number;
        static draw(
            widget: Gtk.Widget,
            font: Pango.FontDescription,
            context: cairo.Context,
            labels: Ref[],
            area: Gdk.Rectangle,
        ): void;
        static get_ref_at_pos(widget: Gtk.Widget, font: Pango.FontDescription, labels: Ref[], x: number): Ref | null;
        static render_ref(
            widget: Gtk.Widget,
            font: Pango.FontDescription,
            r: Ref,
            height: number,
            minwidth: number,
        ): GdkPixbuf.Pixbuf;
    }

    module Lanes {
        // Constructor properties interface
    }

    class Lanes extends GObject.Object {
        // Own properties of Gitg-1.0.Lanes

        inactive_max: number;
        inactiveMax: number;
        inactive_collapse: number;
        inactiveCollapse: number;
        inactive_gap: number;
        inactiveGap: number;
        inactive_enabled: boolean;
        inactiveEnabled: boolean;
        miss_commits: Gee.LinkedList;
        missCommits: Gee.LinkedList;

        // Constructors of Gitg-1.0.Lanes

        static ['new'](): Lanes;

        // Owm methods of Gitg-1.0.Lanes

        reset(reserved?: Ggit.OId[] | null, roots?: Gee.HashSet | null): void;
        next(next: Commit, save_miss: boolean): boolean;
        get_inactive_max(): number;
        set_inactive_max(value: number): void;
        get_inactive_collapse(): number;
        set_inactive_collapse(value: number): void;
        get_inactive_gap(): number;
        set_inactive_gap(value: number): void;
        get_inactive_enabled(): boolean;
        set_inactive_enabled(value: boolean): void;
        get_miss_commits(): Gee.LinkedList;
        set_miss_commits(value: Gee.LinkedList): void;
    }

    module Lane {
        // Constructor properties interface
    }

    class Lane extends GObject.Object {
        // Own fields of Gitg-1.0.Lane

        color: Color;
        from: number[];
        tag: LaneTag;

        // Constructors of Gitg-1.0.Lane

        static ['new'](): Lane;

        static with_color(color?: Color | null): Lane;

        // Owm methods of Gitg-1.0.Lane

        copy(): Lane;
        dup(): Lane;
    }

    module ProgressBin {
        // Constructor properties interface
    }

    class ProgressBin extends Gtk.Bin {
        // Own properties of Gitg-1.0.ProgressBin

        fraction: number;

        // Constructors of Gitg-1.0.ProgressBin

        static ['new'](): ProgressBin;

        // Owm methods of Gitg-1.0.ProgressBin

        get_fraction(): number;
        set_fraction(value: number): void;
    }

    module RefBase {
        // Constructor properties interface
    }

    class RefBase extends Ggit.Ref {
        // Constructors of Gitg-1.0.RefBase

        static ['new'](): RefBase;
    }

    module ParsedRefName {
        // Constructor properties interface
    }

    class ParsedRefName extends GObject.Object {
        // Own properties of Gitg-1.0.ParsedRefName

        rtype: RefType;
        readonly name: string;
        readonly shortname: string;
        readonly remote_name: string;
        readonly remoteName: string;
        readonly remote_branch: string;
        readonly remoteBranch: string;
        readonly prefix: string;

        // Constructors of Gitg-1.0.ParsedRefName

        static ['new'](name: string): ParsedRefName;

        // Owm methods of Gitg-1.0.ParsedRefName

        get_rtype(): RefType;
        get_name(): string;
        get_shortname(): string;
        get_remote_name(): string | null;
        get_remote_branch(): string | null;
        get_prefix(): string | null;
    }

    module Remote {
        // Signal callback interfaces

        interface TipUpdated {
            (refname: string, a: Ggit.OId, b: Ggit.OId): void;
        }

        // Constructor properties interface
    }

    class Remote extends Ggit.Remote {
        // Own properties of Gitg-1.0.Remote

        readonly transfer_progress: number;
        readonly transferProgress: number;
        state: RemoteState;
        fetch_specs: string[];
        fetchSpecs: string[];
        push_specs: string[];
        pushSpecs: string[];
        credentials_provider: CredentialsProvider;
        credentialsProvider: CredentialsProvider;

        // Constructors of Gitg-1.0.Remote

        static ['new'](): Remote;

        // Owm methods of Gitg-1.0.Remote

        connect(
            direction: Ggit.Direction,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        connect_finish(_res_: Gio.AsyncResult): void;
        disconnect(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        disconnect_finish(_res_: Gio.AsyncResult): void;
        download(callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        download_finish(_res_: Gio.AsyncResult): void;
        push(
            branch: string,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        push_finish(_res_: Gio.AsyncResult): void;
        fetch(
            message?: string | null,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch_finish(_res_: Gio.AsyncResult): void;
        get_transfer_progress(): number;
        get_state(): RemoteState;
        get_fetch_specs(): string[] | null;
        set_fetch_specs(value?: string[] | null): void;
        get_push_specs(): string[] | null;
        set_push_specs(value?: string[] | null): void;
        get_credentials_provider(): CredentialsProvider | null;
        set_credentials_provider(value?: CredentialsProvider | null): void;
    }

    module RepositoryListBox {
        // Signal callback interfaces

        interface RepositoryActivated {
            (repository: Repository): void;
        }

        interface ShowError {
            (primary_message: string, secondary_message: string): void;
        }

        // Constructor properties interface
    }

    class RepositoryListBox extends Gtk.ListBox {
        // Own properties of Gitg-1.0.RepositoryListBox

        mode: SelectionMode;
        bookmarks_from_recent_files: boolean;
        bookmarksFromRecentFiles: boolean;
        location: Gio.File;
        readonly has_selection: boolean;
        readonly hasSelection: boolean;

        // Constructors of Gitg-1.0.RepositoryListBox

        static ['new'](): RepositoryListBox;

        // Owm methods of Gitg-1.0.RepositoryListBox

        populate_bookmarks(): void;
        end_cloning(row: RepositoryListBoxRow, repository?: Repository | null): void;
        begin_cloning(location: Gio.File): RepositoryListBoxRow | null;
        add_repository(repository: Repository, visited?: GLib.DateTime | null): RepositoryListBoxRow | null;
        get_selection(): RepositoryListBoxRow[];
        filter_text(text?: string | null): void;
        get_mode(): SelectionMode;
        set_mode(value: SelectionMode): void;
        get_bookmarks_from_recent_files(): boolean;
        set_bookmarks_from_recent_files(value: boolean): void;
        get_location(): Gio.File | null;
        set_location(value?: Gio.File | null): void;
        get_has_selection(): boolean;
    }

    module RepositoryListBoxRow {
        // Signal callback interfaces

        interface RequestRemove {
            (): void;
        }

        interface RequestDeleteSource {
            (): void;
        }

        // Constructor properties interface
    }

    class RepositoryListBoxRow extends Gtk.ListBoxRow {
        // Own properties of Gitg-1.0.RepositoryListBoxRow

        mode: SelectionMode;
        selected: boolean;
        repository: Repository;
        can_remove: boolean;
        canRemove: boolean;
        time: GLib.DateTime;
        fraction: number;
        repository_name: string;
        repositoryName: string;
        dirname: string;
        branch_name: string;
        branchName: string;
        loading: boolean;

        // Constructors of Gitg-1.0.RepositoryListBoxRow

        static ['new'](repository: Repository | null, dirname: string): RepositoryListBoxRow;

        // Owm methods of Gitg-1.0.RepositoryListBoxRow

        get_mode(): SelectionMode;
        set_mode(value: SelectionMode): void;
        get_selected(): boolean;
        set_selected(value: boolean): void;
        get_repository(): Repository | null;
        set_repository(value?: Repository | null): void;
        get_can_remove(): boolean;
        set_can_remove(value: boolean): void;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
        set_fraction(value: number): void;
        get_repository_name(): string | null;
        set_repository_name(value?: string | null): void;
        get_dirname(): string | null;
        set_dirname(value?: string | null): void;
        get_branch_name(): string | null;
        set_branch_name(value?: string | null): void;
        get_loading(): boolean;
        set_loading(value: boolean): void;
    }

    module Repository {
        // Constructor properties interface
    }

    class Repository extends Ggit.Repository {
        // Own properties of Gitg-1.0.Repository

        readonly name: string;
        readonly stage: Stage;

        // Constructors of Gitg-1.0.Repository

        static ['new'](location: Gio.File, workdir?: Gio.File | null): Repository;

        // Owm methods of Gitg-1.0.Repository

        static init_repository(location: Gio.File, is_bare: boolean): Repository;

        // Owm methods of Gitg-1.0.Repository

        clear_refs_cache(): void;
        refs_for_id(id: Ggit.OId): Ref[];
        lookup(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, id: Ggit.OId): any | null;
        lookup_reference(name: string): Ref;
        lookup_reference_dwim(short_name: string): Ref;
        create_branch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags): Branch;
        create_reference(name: string, oid: Ggit.OId, message: string): Ref;
        create_symbolic_reference(name: string, target: string, message: string): Ref;
        get_head(): Ref;
        get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature;
        get_name(): string | null;
        get_stage(): Stage;
    }

    class Resource {
        // Own fields of Gitg-1.0.Resource

        ref_count: number;

        // Constructors of Gitg-1.0.Resource

        static ['new'](): Resource;

        // Owm methods of Gitg-1.0.Resource

        static load_css(id: string): Gtk.CssProvider | null;
    }

    module SidebarStore {
        // Constructor properties interface
    }

    class SidebarStore extends Gtk.TreeStore {
        // Own properties of Gitg-1.0.SidebarStore

        readonly clearing: boolean;

        // Constructors of Gitg-1.0.SidebarStore

        static ['new'](): SidebarStore;

        // Owm methods of Gitg-1.0.SidebarStore

        append_dummy(text: string): SidebarStore;
        append(item: SidebarItem): SidebarStore;
        begin_header(text: string, id: number): SidebarStoreSidebarHeader;
        end_header(): SidebarStore;
        begin_section(): number;
        end_section(): void;
        clear(): void;
        item_for_iter(iter: Gtk.TreeIter): SidebarItem;
        activate(iter: Gtk.TreeIter, numclick: number): void;
        get_clearing(): boolean;
    }

    module SidebarStoreSidebarText {
        // Constructor properties interface
    }

    class SidebarStoreSidebarText extends GObject.Object {
        // Constructors of Gitg-1.0.SidebarStoreSidebarText

        static ['new'](text: string): SidebarStoreSidebarText;
    }

    module SidebarStoreSidebarHeader {
        // Constructor properties interface
    }

    class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {
        // Own properties of Gitg-1.0.SidebarStoreSidebarHeader

        readonly id: number;

        // Constructors of Gitg-1.0.SidebarStoreSidebarHeader

        static ['new'](text: string, id: number): SidebarStoreSidebarHeader;

        // Owm methods of Gitg-1.0.SidebarStoreSidebarHeader

        get_id(): number;
    }

    module Sidebar {
        // Signal callback interfaces

        interface Deselected {
            (): void;
        }

        interface PopulatePopup {
            (menu: Gtk.Menu): void;
        }

        // Constructor properties interface
    }

    class Sidebar extends Gtk.TreeView {
        // Own properties of Gitg-1.0.Sidebar

        model: SidebarStore;

        // Constructors of Gitg-1.0.Sidebar

        static ['new'](): Sidebar;

        // Owm methods of Gitg-1.0.Sidebar

        select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;
        selection_changed(sel: Gtk.TreeSelection): void;
        get_selected_iter(): boolean;
        get_selected_item(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;
        get_selected_items(t_dup_func: GObject.BoxedCopyFunc): any[];
        select(item: SidebarItem): void;
        is_selected(item: SidebarItem): boolean;
        get_model(): SidebarStore;
        set_model(value: SidebarStore): void;
    }

    module StageStatusFile {
        // Constructor properties interface
    }

    class StageStatusFile extends GObject.Object {
        // Own properties of Gitg-1.0.StageStatusFile

        readonly flags: Ggit.StatusFlags;

        // Constructors of Gitg-1.0.StageStatusFile

        static ['new'](path: string, flags: Ggit.StatusFlags): StageStatusFile;

        // Owm methods of Gitg-1.0.StageStatusFile

        get_flags(): Ggit.StatusFlags;
    }

    module StageStatusSubmodule {
        // Constructor properties interface
    }

    class StageStatusSubmodule extends GObject.Object {
        // Own properties of Gitg-1.0.StageStatusSubmodule

        readonly submodule: Ggit.Submodule;
        readonly is_dirty: boolean;
        readonly isDirty: boolean;
        readonly flags: Ggit.SubmoduleStatus;

        // Constructors of Gitg-1.0.StageStatusSubmodule

        static ['new'](submodule: Ggit.Submodule): StageStatusSubmodule;

        // Owm methods of Gitg-1.0.StageStatusSubmodule

        get_submodule(): Ggit.Submodule;
        get_is_dirty(): boolean;
        get_flags(): Ggit.SubmoduleStatus;
    }

    module StageStatusEnumerator {
        // Constructor properties interface
    }

    class StageStatusEnumerator extends GObject.Object {
        // Owm methods of Gitg-1.0.StageStatusEnumerator

        cancel(): void;
        next_items(num: number, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        next_items_finish(_res_: Gio.AsyncResult): StageStatusItem[];
    }

    class PatchSet {
        // Own fields of Gitg-1.0.PatchSet

        ref_count: number;
        filename: string;
        patches_length1: number;

        // Constructors of Gitg-1.0.PatchSet

        static ['new'](): PatchSet;

        // Owm methods of Gitg-1.0.PatchSet

        reversed(): PatchSet;
    }

    module Stage {
        // Constructor properties interface
    }

    class Stage extends GObject.Object {
        // Owm methods of Gitg-1.0.Stage

        refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        refresh_finish(_res_: Gio.AsyncResult): void;
        get_head_tree(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null;
        file_status(options?: Ggit.StatusOptions | null): StageStatusEnumerator;
        pre_commit_hook(author: Ggit.Signature, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        pre_commit_hook_finish(_res_: Gio.AsyncResult): void;
        commit_index(
            index: Ggit.Index,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        commit_tree(
            treeoid: Ggit.OId,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        commit(
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            options: StageCommitOptions,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        revert(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        revert_finish(_res_: Gio.AsyncResult): void;
        revert_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        revert_path_finish(_res_: Gio.AsyncResult): void;
        revert_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        revert_patch_finish(_res_: Gio.AsyncResult): void;
        ['delete'](file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        delete_finish(_res_: Gio.AsyncResult): void;
        delete_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        delete_path_finish(_res_: Gio.AsyncResult): void;
        stage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        stage_finish(_res_: Gio.AsyncResult): void;
        stage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        stage_path_finish(_res_: Gio.AsyncResult): void;
        stage_commit(path: string, commit: Ggit.Commit, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        stage_commit_finish(_res_: Gio.AsyncResult): void;
        stage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        stage_patch_finish(_res_: Gio.AsyncResult): void;
        unstage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unstage_finish(_res_: Gio.AsyncResult): void;
        unstage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unstage_path_finish(_res_: Gio.AsyncResult): void;
        unstage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unstage_patch_finish(_res_: Gio.AsyncResult): void;
        diff_index_all(
            files?: StageStatusItem[] | null,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_index(
            f: StageStatusItem,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_workdir_all(
            files: StageStatusItem[],
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_workdir(
            f: StageStatusItem,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
    }

    class TextConv {
        // Own fields of Gitg-1.0.TextConv

        ref_count: number;

        // Constructors of Gitg-1.0.TextConv

        static ['new'](): TextConv;

        // Owm methods of Gitg-1.0.TextConv

        static has_textconv_command(repository: Repository, file: Ggit.DiffFile): boolean;
        static get_textconv_content(repository: Repository, file: Ggit.DiffFile): Uint8Array;
        static get_textconv_content_from_raw(
            repository: Repository,
            file: Ggit.DiffFile,
            raw_content?: Uint8Array | null,
        ): Uint8Array;
    }

    module Theme {
        // Constructor properties interface
    }

    class Theme extends Gtk.Widget {
        // Constructors of Gitg-1.0.Theme

        static ['new'](): Theme;

        // Owm methods of Gitg-1.0.Theme

        static instance(): Theme;

        // Owm methods of Gitg-1.0.Theme

        is_theme_dark(): boolean;
    }

    class Utils {
        // Own fields of Gitg-1.0.Utils

        ref_count: number;

        // Constructors of Gitg-1.0.Utils

        static ['new'](): Utils;

        // Owm methods of Gitg-1.0.Utils

        static replace_home_dir_with_tilde(file: Gio.File): string;
        static expand_home_dir(path: string): string;
    }

    class WhenMapped {
        // Own fields of Gitg-1.0.WhenMapped

        ref_count: number;

        // Constructors of Gitg-1.0.WhenMapped

        static ['new'](widget: Gtk.Widget): WhenMapped;

        // Owm methods of Gitg-1.0.WhenMapped

        update(mapped: WhenMappedOnMapped, lifetime?: GObject.Object | null): void;
    }

    class AsyncClass {}

    class AsyncPrivate {}

    class AuthenticationDialogClass {}

    class AuthenticationDialogPrivate {}

    class AvatarCacheClass {}

    class AvatarCachePrivate {}

    class BranchBaseClass {}

    class BranchBasePrivate {}

    class CellRendererLanesClass {}

    class CellRendererLanesPrivate {}

    class ColorClass {}

    class ColorPrivate {}

    class CommitListViewClass {}

    class CommitListViewPrivate {}

    class CommitModelClass {}

    class CommitModelPrivate {}

    class CommitClass {}

    class CommitPrivate {}

    class CredentialsManagerClass {}

    class CredentialsManagerPrivate {}

    class DateClass {}

    class DatePrivate {}

    class DiffStatClass {}

    class DiffStatPrivate {}

    class DiffViewOptionsClass {}

    class DiffViewOptionsPrivate {}

    class DiffViewClass {}

    class DiffViewPrivate {}

    class FontManagerClass {}

    class FontManagerPrivate {}

    class GPGUtilsClass {}

    class GPGUtilsPrivate {}

    class HookClass {}

    class HookPrivate {}

    class LabelRendererClass {}

    class LabelRendererPrivate {}

    class LanesClass {}

    class LanesPrivate {}

    class LaneClass {}

    class LanePrivate {}

    class ProgressBinClass {}

    class ProgressBinPrivate {}

    class RefBaseClass {}

    class RefBasePrivate {}

    class ParsedRefNameClass {}

    class ParsedRefNamePrivate {}

    class RemoteClass {}

    class RemotePrivate {}

    class RepositoryListBoxClass {}

    class RepositoryListBoxPrivate {}

    class RepositoryListBoxRowClass {}

    class RepositoryListBoxRowPrivate {}

    class RepositoryClass {}

    class RepositoryPrivate {}

    class ResourceClass {}

    class ResourcePrivate {}

    class SidebarStoreClass {}

    class SidebarStorePrivate {}

    class SidebarStoreSidebarTextClass {}

    class SidebarStoreSidebarTextPrivate {}

    class SidebarStoreSidebarHeaderClass {}

    class SidebarStoreSidebarHeaderPrivate {}

    class SidebarClass {}

    class SidebarPrivate {}

    class StageStatusFileClass {}

    class StageStatusFilePrivate {}

    class StageStatusSubmoduleClass {}

    class StageStatusSubmodulePrivate {}

    class StageStatusEnumeratorClass {}

    class StageStatusEnumeratorPrivate {}

    class PatchSetClass {}

    class PatchSetPrivate {}

    class PatchSetPatch {
        // Own fields of Gitg-1.0.PatchSetPatch

        type: PatchSetType;
        old_offset: number;
        new_offset: number;
        length: number;
    }

    class StageClass {}

    class StagePrivate {}

    class TextConvClass {}

    class TextConvPrivate {}

    class ThemeClass {}

    class ThemePrivate {}

    class UtilsClass {}

    class UtilsPrivate {}

    class WhenMappedClass {}

    class WhenMappedPrivate {}

    class BranchIface {}

    class RefIface {}

    class CredentialsProviderIface {}

    class SidebarItemIface {}

    class StageStatusItemIface {}

    interface Branch {
        // Owm methods of Gitg-1.0.Branch

        get_upstream(): Ref;

        // Own virtual methods of Gitg-1.0.Branch

        vfunc_get_upstream(): Ref;
    }

    interface Ref {
        // Own properties of Gitg-1.0.Ref

        d_parsed_name: ParsedRefName;
        dParsedName: ParsedRefName;
        d_pushes: Ref[];
        dPushes: Ref[];
        state: RefState;
        working: boolean;

        // Owm methods of Gitg-1.0.Ref

        get_owner(): Repository;
        get_d_parsed_name(): ParsedRefName;
        set_d_parsed_name(value: ParsedRefName): void;
        get_d_pushes(): Ref[] | null;
        set_d_pushes(value?: Ref[] | null): void;
        get_state(): RefState;
        set_state(value: RefState): void;
        get_working(): boolean;
        set_working(value: boolean): void;
        get_parsed_name(): ParsedRefName;
        get_pushes(): Ref[];

        // Own virtual methods of Gitg-1.0.Ref

        vfunc_get_owner(): Repository;
        vfunc_get_d_parsed_name(): ParsedRefName;
        vfunc_set_d_parsed_name(value: ParsedRefName): void;
        vfunc_get_d_pushes(): Ref[] | null;
        vfunc_set_d_pushes(value?: Ref[] | null): void;
        vfunc_get_state(): RefState;
        vfunc_set_state(value: RefState): void;
        vfunc_get_working(): boolean;
        vfunc_set_working(value: boolean): void;
    }

    interface CredentialsProvider {
        // Owm methods of Gitg-1.0.CredentialsProvider

        credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;

        // Own virtual methods of Gitg-1.0.CredentialsProvider

        vfunc_credentials(
            url: string,
            username_from_url: string | null,
            allowed_types: Ggit.Credtype,
        ): Ggit.Cred | null;
    }

    interface SidebarItem {
        // Own properties of Gitg-1.0.SidebarItem

        readonly text: string;
        readonly icon_name: string;
        readonly iconName: string;

        // Owm methods of Gitg-1.0.SidebarItem

        activate(numclick: number): void;
        get_text(): string;
        get_icon_name(): string | null;

        // Own virtual methods of Gitg-1.0.SidebarItem

        vfunc_activate(numclick: number): void;
        vfunc_get_text(): string;
        vfunc_get_icon_name(): string | null;
    }

    interface StageStatusItem {
        // Own properties of Gitg-1.0.StageStatusItem

        readonly path: string;
        readonly is_staged: boolean;
        readonly isStaged: boolean;
        readonly is_unstaged: boolean;
        readonly isUnstaged: boolean;
        readonly is_untracked: boolean;
        readonly isUntracked: boolean;
        readonly icon_name: string;
        readonly iconName: string;

        // Owm methods of Gitg-1.0.StageStatusItem

        get_path(): string;
        get_is_staged(): boolean;
        get_is_unstaged(): boolean;
        get_is_untracked(): boolean;
        get_icon_name(): string | null;

        // Own virtual methods of Gitg-1.0.StageStatusItem

        vfunc_get_path(): string;
        vfunc_get_is_staged(): boolean;
        vfunc_get_is_unstaged(): boolean;
        vfunc_get_is_untracked(): boolean;
        vfunc_get_icon_name(): string | null;
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

export default Gitg;
// END
