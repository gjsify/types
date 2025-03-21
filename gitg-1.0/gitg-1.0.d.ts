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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Ggit from '@girs/ggit-1.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gitg {
    /**
     * Gitg-1.0
     */

    export namespace AuthenticationLifeTime {
        export const $gtype: GObject.GType<AuthenticationLifeTime>;
    }

    enum AuthenticationLifeTime {
        FORGET,
        SESSION,
        FOREVER,
    }

    export namespace CommitModelColumns {
        export const $gtype: GObject.GType<CommitModelColumns>;
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

    export namespace RefType {
        export const $gtype: GObject.GType<RefType>;
    }

    enum RefType {
        NONE,
        BRANCH,
        REMOTE,
        TAG,
        STASH,
    }

    export namespace RefState {
        export const $gtype: GObject.GType<RefState>;
    }

    enum RefState {
        NONE,
        SELECTED,
        PRELIGHT,
    }

    export namespace RemoteState {
        export const $gtype: GObject.GType<RemoteState>;
    }

    enum RemoteState {
        DISCONNECTED,
        CONNECTING,
        CONNECTED,
        TRANSFERRING,
    }

    export namespace SelectionMode {
        export const $gtype: GObject.GType<SelectionMode>;
    }

    enum SelectionMode {
        NORMAL,
        SELECTION,
    }

    export namespace DeleteSources {
        export const $gtype: GObject.GType<DeleteSources>;
    }

    enum DeleteSources {
        CANCEL,
        TRASH,
        DELETE,
    }

    export namespace SidebarHint {
        export const $gtype: GObject.GType<SidebarHint>;
    }

    enum SidebarHint {
        NONE,
        HEADER,
        SEPARATOR,
        DUMMY,
    }

    export namespace SidebarColumn {
        export const $gtype: GObject.GType<SidebarColumn>;
    }

    enum SidebarColumn {
        HINT,
        SECTION,
        ITEM,
    }
    class CredentialsError extends GLib.Error {
        static $gtype: GObject.GType<CredentialsError>;

        // Static fields

        static CANCELLED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class DateError extends GLib.Error {
        static $gtype: GObject.GType<DateError>;

        // Static fields

        static INVALID_FORMAT: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class InitError extends GLib.Error {
        static $gtype: GObject.GType<InitError>;

        // Static fields

        static THREADS_UNSAFE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class RemoteError extends GLib.Error {
        static $gtype: GObject.GType<RemoteError>;

        // Static fields

        static ALREADY_CONNECTED: number;
        static ALREADY_CONNECTING: number;
        static ALREADY_DISCONNECTED: number;
        static STILL_CONNECTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class StageError extends GLib.Error {
        static $gtype: GObject.GType<StageError>;

        // Static fields

        static PRE_COMMIT_HOOK_FAILED: number;
        static COMMIT_MSG_HOOK_FAILED: number;
        static NOTHING_TO_COMMIT: number;
        static INDEX_ENTRY_NOT_FOUND: number;
        static SIGN_CONFIG_NOT_FOUND: number;
        static SIGN_CONFIG_ERROR: number;
        static UPDATE_REF_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace PatchSetType {
        export const $gtype: GObject.GType<PatchSetType>;
    }

    enum PatchSetType {
        ADD,
        REMOVE,
    }
    function commit_model_columns_type(): GObject.GType;
    function init(): void;

    export namespace LaneTag {
        export const $gtype: GObject.GType<LaneTag>;
    }

    enum LaneTag {
        NONE,
        START,
        END,
        SIGN_STASH,
        SIGN_STAGED,
        SIGN_UNSTAGED,
        HIDDEN,
    }

    export namespace StageCommitOptions {
        export const $gtype: GObject.GType<StageCommitOptions>;
    }

    enum StageCommitOptions {
        NONE,
        SIGN_OFF,
        AMEND,
        SKIP_HOOKS,
        SIGN_COMMIT,
    }
    namespace Async {
        interface ThreadFunc {
            (): void;
        }
    }

    class Async {
        static $gtype: GObject.GType<Async>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Async;

        // Static methods

        static thread(func: Async.ThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;
        static thread_finish(_res_: Gio.AsyncResult): void;
        static thread_try(func: Async.ThreadFunc, _callback_?: Gio.AsyncReadyCallback<Async> | null): void;
        static thread_try_finish(_res_: Gio.AsyncResult): void;
    }

    namespace AuthenticationDialog {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {
            username: string;
            password: string;
            life_time: AuthenticationLifeTime;
            lifeTime: AuthenticationLifeTime;
        }
    }

    class AuthenticationDialog extends Gtk.Dialog {
        static $gtype: GObject.GType<AuthenticationDialog>;

        // Properties

        get username(): string;
        get password(): string;
        get life_time(): AuthenticationLifeTime;
        get lifeTime(): AuthenticationLifeTime;

        // Constructors

        constructor(properties?: Partial<AuthenticationDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](url: string, username: string | null, failed: boolean): AuthenticationDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Methods

        get_username(): string;
        get_password(): string;
        get_life_time(): AuthenticationLifeTime;
    }

    namespace AvatarCache {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AvatarCache extends GObject.Object {
        static $gtype: GObject.GType<AvatarCache>;

        // Constructors

        constructor(properties?: Partial<AvatarCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static ['default'](): AvatarCache;

        // Methods

        load(email: string, size: number, cancellable?: Gio.Cancellable | null): Promise<GdkPixbuf.Pixbuf | null>;
        load(
            email: string,
            size: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        load(
            email: string,
            size: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<GdkPixbuf.Pixbuf | null> | void;
        load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null;
    }

    namespace BranchBase {
        // Constructor properties interface

        interface ConstructorProps
            extends Ggit.Branch.ConstructorProps,
                Ref.ConstructorProps,
                Branch.ConstructorProps {}
    }

    class BranchBase extends Ggit.Branch implements Ref, Branch {
        static $gtype: GObject.GType<BranchBase>;

        // Constructors

        constructor(properties?: Partial<BranchBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BranchBase;

        // Inherited properties
        get d_parsed_name(): ParsedRefName;
        set d_parsed_name(val: ParsedRefName);
        get dParsedName(): ParsedRefName;
        set dParsedName(val: ParsedRefName);
        get d_pushes(): Ref[];
        set d_pushes(val: Ref[]);
        get dPushes(): Ref[];
        set dPushes(val: Ref[]);
        get state(): RefState;
        set state(val: RefState);
        get working(): boolean;
        set working(val: boolean);

        // Inherited methods
        get_owner(): Repository;
        // Conflicted with Ggit.Ref.get_owner
        get_owner(...args: never[]): any;
        get_d_parsed_name(): ParsedRefName;
        set_d_parsed_name(value: ParsedRefName): void;
        get_d_pushes(): Ref[] | null;
        set_d_pushes(value?: Ref[] | null): void;
        get_state(): RefState;
        set_state(value: RefState | null): void;
        get_working(): boolean;
        set_working(value: boolean): void;
        get_parsed_name(): ParsedRefName;
        get_pushes(): Ref[];
        vfunc_get_owner(): Repository;
        vfunc_get_d_parsed_name(): ParsedRefName;
        vfunc_set_d_parsed_name(value: ParsedRefName): void;
        vfunc_get_d_pushes(): Ref[] | null;
        vfunc_set_d_pushes(value?: Ref[] | null): void;
        vfunc_get_state(): RefState;
        vfunc_set_state(value: RefState): void;
        vfunc_get_working(): boolean;
        vfunc_set_working(value: boolean): void;
        get_upstream(): Ref;
        // Conflicted with Ggit.Branch.get_upstream
        get_upstream(...args: never[]): any;
        vfunc_get_upstream(): Ref;
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
         * Deletes the log for `ref,` on error `error` is set.
         */
        delete_log(): void;
        /**
         * Gets the #GgitReflog for `ref`. The reflog will be created if it doesn't exist
         * yet.
         * @returns the reflog or %NULL.
         */
        get_log(): Ggit.Reflog | null;
        /**
         * Gets the full name of `ref`.
         * @returns the full name of a reference or %NULL.
         */
        get_name(): string | null;
        /**
         * Gets the type of `ref`. Either direct (#GGIT_REF_OID) or
         * symbolic (#GGIT_REF_SYMBOLIC).
         * @returns the type of a reference.
         */
        get_reference_type(): Ggit.RefType;
        /**
         * Gets the shorthand name of `ref`.
         * @returns the shorthand name of a reference or %NULL.
         */
        get_shorthand(): string | null;
        /**
         * Get full name to the reference pointed to by a symbolic reference.
         * Only available if the reference is symbolic.
         * @returns the name if available, %NULL otherwise.
         */
        get_symbolic_target(): string | null;
        /**
         * Get the OID pointed to by a direct reference.
         * Only available if the reference is direct (i.e. an object id reference,
         * not a symbolic one).
         * @returns a new oid if available, %NULL otherwise.
         */
        get_target(): Ggit.OId | null;
        /**
         * Get whether `ref` has an existing log.
         * @returns %TRUE if @ref has a log, %FALSE otherwise.
         */
        has_log(): boolean;
        /**
         * Check whether the reference is a branch.
         * @returns %TRUE if the reference is a branch, %FALSE otherwise.
         */
        is_branch(): boolean;
        /**
         * Check whether the reference is a note.
         * @returns %TRUE if the reference is a note, %FALSE otherwise.
         */
        is_note(): boolean;
        /**
         * Check whether the reference is a remote.
         * @returns %TRUE if the reference is a remote, %FALSE otherwise.
         */
        is_remote(): boolean;
        /**
         * Check whether the reference is a tag.
         * @returns %TRUE if the reference is a tag, %FALSE otherwise.
         */
        is_tag(): boolean;
        /**
         * Convenient method to resolve a reference to an object.
         * @returns a #GgitObject or %NULL.
         */
        lookup(): Ggit.Object | null;
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
        rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null;
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
        resolve(): Ggit.Ref | null;
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
        set_symbolic_target(target: string, log_message?: string | null): Ggit.Ref | null;
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
        set_target(oid: Ggit.OId, log_message?: string | null): Ggit.Ref | null;
        /**
         * Get a string representation of the ref.
         * @returns a string representation of the ref or %NULL.
         */
        to_string(): string | null;
        /**
         * Determines if the current local branch is pointed at by HEAD.
         * @returns %TRUE if the current local branch is pointed at by HEAD.
         */
        is_head(): boolean;
        /**
         * Moves/renames an existing branch reference.
         * @param new_branch_name target name of the branch once the move is performed; this name is validated for consistency.
         * @param flags a #GgitCreateFlags.
         * @returns the new branch or %NULL.
         */
        move(new_branch_name: string, flags: Ggit.CreateFlags | null): Ggit.Branch | null;
        /**
         * Sets the upstream branch, for a given local branch reference
         * @param upstream_branch_name name of the upstream branch; if %NULL unsets it.
         */
        set_upstream(upstream_branch_name: string): void;
    }

    namespace CellRendererLanes {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.CellRendererText.ConstructorProps {
            commit: Commit;
            next_commit: Commit;
            nextCommit: Commit;
            lane_width: number;
            laneWidth: number;
            dot_width: number;
            dotWidth: number;
            labels: Ref[];
        }
    }

    class CellRendererLanes extends Gtk.CellRendererText {
        static $gtype: GObject.GType<CellRendererLanes>;

        // Properties

        get commit(): Commit;
        set commit(val: Commit);
        get next_commit(): Commit;
        set next_commit(val: Commit);
        get nextCommit(): Commit;
        set nextCommit(val: Commit);
        get lane_width(): number;
        set lane_width(val: number);
        get laneWidth(): number;
        set laneWidth(val: number);
        get dot_width(): number;
        set dot_width(val: number);
        get dotWidth(): number;
        set dotWidth(val: number);
        get labels(): Ref[];
        set labels(val: Ref[]);

        // Constructors

        constructor(properties?: Partial<CellRendererLanes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CellRendererLanes;

        // Methods

        get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): [Ref | null, number];
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

    namespace Color {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            r: number;
            g: number;
            b: number;
        }
    }

    class Color extends GObject.Object {
        static $gtype: GObject.GType<Color>;

        // Properties

        get r(): number;
        get g(): number;
        get b(): number;

        // Fields

        idx: number;

        // Constructors

        constructor(properties?: Partial<Color.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Color;

        // Static methods

        static reset(): void;
        static next(): Color;

        // Methods

        components(): [number, number, number];
        next_index(): Color;
        copy(): Color;
        get_r(): number;
        get_g(): number;
        get_b(): number;
    }

    namespace CommitListView {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    class CommitListView extends Gtk.TreeView implements Gtk.Buildable {
        static $gtype: GObject.GType<CommitListView>;

        // Constructors

        constructor(properties?: Partial<CommitListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: CommitModel): CommitListView;
        // Conflicted with Gtk.TreeView.new

        static ['new'](...args: never[]): any;

        static for_repository(repository: Repository): CommitListView;

        // Methods

        find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [Gtk.CellRenderer | null, number];

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace CommitModel {
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

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            limit: number;
            sort_mode: Ggit.SortMode;
            sortMode: Ggit.SortMode;
            repository: Repository;
        }
    }

    class CommitModel extends GObject.Object implements Gtk.TreeModel {
        static $gtype: GObject.GType<CommitModel>;

        // Properties

        get limit(): number;
        set limit(val: number);
        get sort_mode(): Ggit.SortMode;
        set sort_mode(val: Ggit.SortMode);
        get sortMode(): Ggit.SortMode;
        set sortMode(val: Ggit.SortMode);
        get repository(): Repository;
        set repository(val: Repository);

        // Constructors

        constructor(properties?: Partial<CommitModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](repository?: Repository | null): CommitModel;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'started', callback: (_source: this) => void): number;
        connect_after(signal: 'started', callback: (_source: this) => void): number;
        emit(signal: 'started'): void;
        connect(signal: 'update', callback: (_source: this, added: number) => void): number;
        connect_after(signal: 'update', callback: (_source: this, added: number) => void): number;
        emit(signal: 'update', added: number): void;
        connect(signal: 'finished', callback: (_source: this) => void): number;
        connect_after(signal: 'finished', callback: (_source: this) => void): number;
        emit(signal: 'finished'): void;
        connect(signal: 'begin-clear', callback: (_source: this) => void): number;
        connect_after(signal: 'begin-clear', callback: (_source: this) => void): number;
        emit(signal: 'begin-clear'): void;
        connect(signal: 'end-clear', callback: (_source: this) => void): number;
        connect_after(signal: 'end-clear', callback: (_source: this) => void): number;
        emit(signal: 'end-clear'): void;

        // Methods

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
        set_sort_mode(value: Ggit.SortMode | null): void;
        get_repository(): Repository;
        set_repository(value: Repository): void;

        // Inherited methods
        /**
         * Creates a new #GtkTreeModel, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A #GtkTreePath or %NULL.
         * @returns A new #GtkTreeModel.
         */
        filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;
        /**
         * Calls func on each node in model in a depth-first fashion.
         *
         * If `func` returns %TRUE, then the tree ceases to be walked,
         * and gtk_tree_model_foreach() returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;
        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;
        /**
         * Returns a set of flags supported by this interface.
         *
         * The flags are a bitwise combination of #GtkTreeModelFlags.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
         * @param path the #GtkTreePath-struct
         * @returns %TRUE, if @iter was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns %TRUE. Returns
         * %FALSE if the tree is empty.
         * @returns %TRUE, if @iter was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to a valid iterator pointing to `path_string,` if it
         * exists. Otherwise, `iter` is left invalid and %FALSE is returned.
         * @param path_string a string representation of a #GtkTreePath-struct
         * @returns %TRUE, if @iter was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;
        /**
         * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
         *
         * This path should be freed with gtk_tree_path_free().
         * @param iter the #GtkTreeIter-struct
         * @returns a newly-created #GtkTreePath-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Generates a string representation of the iter.
         *
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a #GtkTreeIter-struct
         * @returns a newly-allocated string.     Must be freed with g_free().
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value,` g_value_unset() needs to be called
         * to free any allocated memory.
         * @param iter the #GtkTreeIter-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, %FALSE is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is %NULL returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the #GtkTreeIter-struct, or %NULL
         * @returns %TRUE, if @iter has been set to the first child
         */
        iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns %TRUE if `iter` has children, %FALSE otherwise.
         * @param iter the #GtkTreeIter-struct to test for children
         * @returns %TRUE if @iter has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is %NULL, then the number
         * of toplevel nodes is returned.
         * @param iter the #GtkTreeIter-struct, or %NULL
         * @returns the number of children of @iter
         */
        iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter,` %FALSE is returned and `iter` is set
         * to be invalid.
         * @param iter the #GtkTreeIter-struct
         * @returns %TRUE if @iter has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent,` using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is %NULL, then the `n-th` root node
         * is set.
         * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
         * @param n the index of the desired child
         * @returns %TRUE, if @parent has an @n-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and %FALSE is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the #GtkTreeIter-struct
         * @returns %TRUE, if @iter is set to the parent of @child
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter,` %FALSE is returned and `iter` is
         * set to be invalid.
         * @param iter the #GtkTreeIter-struct
         * @returns %TRUE if @iter has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;
        /**
         * Lets the tree ref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         *
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         *
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the #GtkTreeIter-struct
         */
        ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the #GtkTreeModel::row-has-child-toggled signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the inserted row
         * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::rows-reordered signal on `tree_model`.
         *
         * This should be called by models when their rows have been
         * reordered.
         * @param path a #GtkTreePath-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid #GtkTreeIter-struct pointing to the node     whose children have been reordered, or %NULL if the depth     of @path is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. @new_order`[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see gtk_tree_model_ref_node().
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the #GtkTreeIter-struct
         */
        unref_node(iter: Gtk.TreeIter): void;
        /**
         * Returns the type of the column.
         * @param index_ the column index
         */
        vfunc_get_column_type(index_: number): GObject.GType;
        /**
         * Returns a set of flags supported by this interface.
         *
         * The flags are a bitwise combination of #GtkTreeModelFlags.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;
        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
         * @param path the #GtkTreePath-struct
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
        /**
         * Returns the number of columns supported by `tree_model`.
         */
        vfunc_get_n_columns(): number;
        /**
         * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
         *
         * This path should be freed with gtk_tree_path_free().
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;
        /**
         * Initializes and sets `value` to that at `column`.
         *
         * When done with `value,` g_value_unset() needs to be called
         * to free any allocated memory.
         * @param iter the #GtkTreeIter-struct
         * @param column the column to lookup the value at
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;
        /**
         * Sets `iter` to point to the first child of `parent`.
         *
         * If `parent` has no children, %FALSE is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         *
         * If `parent` is %NULL returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the #GtkTreeIter-struct, or %NULL
         */
        vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
        /**
         * Returns %TRUE if `iter` has children, %FALSE otherwise.
         * @param iter the #GtkTreeIter-struct to test for children
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;
        /**
         * Returns the number of children that `iter` has.
         *
         * As a special case, if `iter` is %NULL, then the number
         * of toplevel nodes is returned.
         * @param iter the #GtkTreeIter-struct, or %NULL
         */
        vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;
        /**
         * Sets `iter` to point to the node following it at the current level.
         *
         * If there is no next `iter,` %FALSE is returned and `iter` is set
         * to be invalid.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;
        /**
         * Sets `iter` to be the child of `parent,` using the given index.
         *
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is %NULL, then the `n-th` root node
         * is set.
         * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
         * @param n the index of the desired child
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to be the parent of `child`.
         *
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and %FALSE is returned.
         * `child` will remain a valid node after this function has been
         * called.
         *
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the #GtkTreeIter-struct
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
        /**
         * Sets `iter` to point to the previous node at the current level.
         *
         * If there is no previous `iter,` %FALSE is returned and `iter` is
         * set to be invalid.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;
        /**
         * Lets the tree ref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         *
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         *
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
         *
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         *
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;
        /**
         * Emits the #GtkTreeModel::row-has-child-toggled signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a #GtkTreePath-struct pointing to the changed row
         * @param iter a valid #GtkTreeIter-struct pointing to the changed row
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
         * @param path a #GtkTreePath-struct pointing to the inserted row
         * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
        /**
         * Lets the tree unref the node.
         *
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see gtk_tree_model_ref_node().
         *
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the #GtkTreeIter-struct
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace Commit {
        // Constructor properties interface

        interface ConstructorProps extends Ggit.Commit.ConstructorProps {
            tag: LaneTag;
            mylane: number;
            lane: Lane;
            format_patch_name: string;
            formatPatchName: string;
            committer_date_for_display: string;
            committerDateForDisplay: string;
            author_date_for_display: string;
            authorDateForDisplay: string;
        }
    }

    class Commit extends Ggit.Commit {
        static $gtype: GObject.GType<Commit>;

        // Properties

        get tag(): LaneTag;
        set tag(val: LaneTag);
        get mylane(): number;
        set mylane(val: number);
        get lane(): Lane;
        get format_patch_name(): string;
        get formatPatchName(): string;
        get committer_date_for_display(): string;
        get committerDateForDisplay(): string;
        get author_date_for_display(): string;
        get authorDateForDisplay(): string;

        // Constructors

        constructor(properties?: Partial<Commit.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Commit;

        // Methods

        get_lanes(): Lane[];
        insert_lane(lane: Lane, idx: number): Lane[];
        remove_lane(lane: Lane): Lane[];
        update_lanes(lanes: Lane[], mylane: number): void;
        get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff;
        get_note(): Ggit.Note;
        get_tag(): LaneTag;
        set_tag(value: LaneTag | null): void;
        get_mylane(): number;
        set_mylane(value: number): void;
        get_lane(): Lane;
        get_format_patch_name(): string;
        get_committer_date_for_display(): string;
        get_author_date_for_display(): string;
    }

    class CredentialsManager {
        static $gtype: GObject.GType<CredentialsManager>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](
            config: Ggit.Config | null,
            window: Gtk.Window,
            save_user_in_config: boolean,
        ): CredentialsManager;

        // Methods

        credentials(url: string, username: string | null, allowed_types: Ggit.Credtype | null): Ggit.Cred | null;
    }

    namespace Date {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            date_string: string;
            dateString: string;
            date: GLib.DateTime;
        }
    }

    class Date extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Date>;

        // Properties

        get date_string(): string;
        set date_string(val: string);
        get dateString(): string;
        set dateString(val: string);
        get date(): GLib.DateTime;

        // Constructors

        constructor(properties?: Partial<Date.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](date: string): Date;

        static for_date_time(dt: GLib.DateTime): Date;

        // Static methods

        static parse(date: string): GLib.DateTime;

        // Methods

        for_display(): string;
        get_date_string(): string;
        set_date_string(value: string): void;
        get_date(): GLib.DateTime;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace DiffStat {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps {
            added: number;
            removed: number;
        }
    }

    class DiffStat extends Gtk.DrawingArea {
        static $gtype: GObject.GType<DiffStat>;

        // Properties

        get added(): number;
        set added(val: number);
        get removed(): number;
        set removed(val: number);

        // Constructors

        constructor(properties?: Partial<DiffStat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiffStat;

        // Methods

        get_added(): number;
        set_added(value: number): void;
        get_removed(): number;
        set_removed(value: number): void;
    }

    namespace DiffViewOptions {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.Toolbar.ConstructorProps {
            context_lines: number;
            contextLines: number;
            view: DiffView;
        }
    }

    class DiffViewOptions extends Gtk.Toolbar {
        static $gtype: GObject.GType<DiffViewOptions>;

        // Properties

        get context_lines(): number;
        set context_lines(val: number);
        get contextLines(): number;
        set contextLines(val: number);
        get view(): DiffView;
        set view(val: DiffView);

        // Constructors

        constructor(properties?: Partial<DiffViewOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](view?: DiffView | null): DiffViewOptions;
        // Conflicted with Gtk.Toolbar.new

        static ['new'](...args: never[]): any;

        // Methods

        get_context_lines(): number;
        set_context_lines(value: number): void;
        get_view(): DiffView | null;
        set_view(value?: DiffView | null): void;
    }

    namespace DiffView {
        // Signal callback interfaces

        interface OptionsChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Grid.ConstructorProps {
            options: Ggit.DiffOptions;
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
        }
    }

    class DiffView extends Gtk.Grid {
        static $gtype: GObject.GType<DiffView>;

        // Properties

        get options(): Ggit.DiffOptions;
        get has_selection(): boolean;
        set has_selection(val: boolean);
        get hasSelection(): boolean;
        set hasSelection(val: boolean);
        get diff(): Ggit.Diff;
        set diff(val: Ggit.Diff);
        get commit(): Commit;
        set commit(val: Commit);
        get wrap_lines(): boolean;
        set wrap_lines(val: boolean);
        get wrapLines(): boolean;
        set wrapLines(val: boolean);
        get staged(): boolean;
        set staged(val: boolean);
        get unstaged(): boolean;
        set unstaged(val: boolean);
        get show_parents(): boolean;
        set show_parents(val: boolean);
        get showParents(): boolean;
        set showParents(val: boolean);
        get default_collapse_all(): boolean;
        set default_collapse_all(val: boolean);
        get defaultCollapseAll(): boolean;
        set defaultCollapseAll(val: boolean);
        get use_gravatar(): boolean;
        set use_gravatar(val: boolean);
        get useGravatar(): boolean;
        set useGravatar(val: boolean);
        get tab_width(): number;
        set tab_width(val: number);
        get tabWidth(): number;
        set tabWidth(val: number);
        get handle_selection(): boolean;
        set handle_selection(val: boolean);
        get handleSelection(): boolean;
        set handleSelection(val: boolean);
        get highlight(): boolean;
        set highlight(val: boolean);
        get repository(): Repository;
        set repository(val: Repository);
        get new_is_workdir(): boolean;
        set new_is_workdir(val: boolean);
        get newIsWorkdir(): boolean;
        set newIsWorkdir(val: boolean);
        get ignore_whitespace(): boolean;
        set ignore_whitespace(val: boolean);
        get ignoreWhitespace(): boolean;
        set ignoreWhitespace(val: boolean);
        get changes_inline(): boolean;
        set changes_inline(val: boolean);
        get changesInline(): boolean;
        set changesInline(val: boolean);
        get context_lines(): number;
        set context_lines(val: number);
        get contextLines(): number;
        set contextLines(val: number);

        // Constructors

        constructor(properties?: Partial<DiffView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiffView;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'options-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'options-changed', callback: (_source: this) => void): number;
        emit(signal: 'options-changed'): void;

        // Virtual methods

        vfunc_options_changed(): void;

        // Methods

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

    namespace FontManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FontManager extends GObject.Object {
        static $gtype: GObject.GType<FontManager>;

        // Constructors

        constructor(properties?: Partial<FontManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text_view: Gtk.TextView, plugin: boolean): FontManager;
    }

    class GPGUtils {
        static $gtype: GObject.GType<GPGUtils>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): GPGUtils;

        // Static methods

        static sign_commit_object(commit_content: string, signing_key: string): string;
    }

    namespace Hook {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            environment: Gee.HashMap;
            name: string;
            working_directory: Gio.File;
            workingDirectory: Gio.File;
            output: string[];
        }
    }

    class Hook extends GObject.Object {
        static $gtype: GObject.GType<Hook>;

        // Properties

        get environment(): Gee.HashMap;
        set environment(val: Gee.HashMap);
        get name(): string;
        set name(val: string);
        get working_directory(): Gio.File;
        set working_directory(val: Gio.File);
        get workingDirectory(): Gio.File;
        set workingDirectory(val: Gio.File);
        get output(): string[];

        // Constructors

        constructor(properties?: Partial<Hook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Hook;

        // Methods

        add_argument(arg: string): void;
        exists_in(repository: Ggit.Repository): boolean;
        run_sync(repository: Ggit.Repository): number;
        run(repository: Ggit.Repository): Promise<number>;
        run(repository: Ggit.Repository, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        run(repository: Ggit.Repository, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<number> | void;
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
        static $gtype: GObject.GType<LabelRenderer>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): LabelRenderer;

        // Static methods

        static width(widget: Gtk.Widget, font: any | null, labels: Ref[]): number;
        static draw(
            widget: Gtk.Widget,
            font: Pango.FontDescription,
            context: cairo.Context,
            labels: Ref[],
            area: Gdk.Rectangle,
        ): void;
        static get_ref_at_pos(
            widget: Gtk.Widget,
            font: Pango.FontDescription,
            labels: Ref[],
            x: number,
        ): [Ref | null, number];
        static render_ref(
            widget: Gtk.Widget,
            font: Pango.FontDescription,
            r: Ref,
            height: number,
            minwidth: number,
        ): GdkPixbuf.Pixbuf;
    }

    namespace Lanes {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class Lanes extends GObject.Object {
        static $gtype: GObject.GType<Lanes>;

        // Properties

        get inactive_max(): number;
        set inactive_max(val: number);
        get inactiveMax(): number;
        set inactiveMax(val: number);
        get inactive_collapse(): number;
        set inactive_collapse(val: number);
        get inactiveCollapse(): number;
        set inactiveCollapse(val: number);
        get inactive_gap(): number;
        set inactive_gap(val: number);
        get inactiveGap(): number;
        set inactiveGap(val: number);
        get inactive_enabled(): boolean;
        set inactive_enabled(val: boolean);
        get inactiveEnabled(): boolean;
        set inactiveEnabled(val: boolean);
        get miss_commits(): Gee.LinkedList;
        set miss_commits(val: Gee.LinkedList);
        get missCommits(): Gee.LinkedList;
        set missCommits(val: Gee.LinkedList);

        // Constructors

        constructor(properties?: Partial<Lanes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Lanes;

        // Methods

        reset(reserved?: Ggit.OId[] | null, roots?: Gee.HashSet | null): void;
        next(next: Commit, save_miss: boolean): [boolean, Lane[], number];
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

    namespace Lane {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Lane extends GObject.Object {
        static $gtype: GObject.GType<Lane>;

        // Fields

        color: Color;
        from: number[];
        tag: LaneTag;

        // Constructors

        constructor(properties?: Partial<Lane.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Lane;

        static with_color(color?: Color | null): Lane;

        // Methods

        copy(): Lane;
        dup(): Lane;
    }

    namespace ProgressBin {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.Bin.ConstructorProps {
            fraction: number;
        }
    }

    class ProgressBin extends Gtk.Bin {
        static $gtype: GObject.GType<ProgressBin>;

        // Properties

        get fraction(): number;
        set fraction(val: number);

        // Constructors

        constructor(properties?: Partial<ProgressBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ProgressBin;

        // Methods

        get_fraction(): number;
        set_fraction(value: number): void;
    }

    namespace RefBase {
        // Constructor properties interface

        interface ConstructorProps extends Ggit.Ref.ConstructorProps, Ref.ConstructorProps {}
    }

    class RefBase extends Ggit.Ref implements Ref {
        static $gtype: GObject.GType<RefBase>;

        // Constructors

        constructor(properties?: Partial<RefBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RefBase;

        // Inherited properties
        get d_parsed_name(): ParsedRefName;
        set d_parsed_name(val: ParsedRefName);
        get dParsedName(): ParsedRefName;
        set dParsedName(val: ParsedRefName);
        get d_pushes(): Ref[];
        set d_pushes(val: Ref[]);
        get dPushes(): Ref[];
        set dPushes(val: Ref[]);
        get state(): RefState;
        set state(val: RefState);
        get working(): boolean;
        set working(val: boolean);

        // Inherited methods
        get_owner(): Repository;
        // Conflicted with Ggit.Ref.get_owner
        get_owner(...args: never[]): any;
        get_d_parsed_name(): ParsedRefName;
        set_d_parsed_name(value: ParsedRefName): void;
        get_d_pushes(): Ref[] | null;
        set_d_pushes(value?: Ref[] | null): void;
        get_state(): RefState;
        set_state(value: RefState | null): void;
        get_working(): boolean;
        set_working(value: boolean): void;
        get_parsed_name(): ParsedRefName;
        get_pushes(): Ref[];
        vfunc_get_owner(): Repository;
        vfunc_get_d_parsed_name(): ParsedRefName;
        vfunc_set_d_parsed_name(value: ParsedRefName): void;
        vfunc_get_d_pushes(): Ref[] | null;
        vfunc_set_d_pushes(value?: Ref[] | null): void;
        vfunc_get_state(): RefState;
        vfunc_set_state(value: RefState): void;
        vfunc_get_working(): boolean;
        vfunc_set_working(value: boolean): void;
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
         * Deletes the log for `ref,` on error `error` is set.
         */
        delete_log(): void;
        /**
         * Gets the #GgitReflog for `ref`. The reflog will be created if it doesn't exist
         * yet.
         * @returns the reflog or %NULL.
         */
        get_log(): Ggit.Reflog | null;
        /**
         * Gets the full name of `ref`.
         * @returns the full name of a reference or %NULL.
         */
        get_name(): string | null;
        /**
         * Gets the type of `ref`. Either direct (#GGIT_REF_OID) or
         * symbolic (#GGIT_REF_SYMBOLIC).
         * @returns the type of a reference.
         */
        get_reference_type(): Ggit.RefType;
        /**
         * Gets the shorthand name of `ref`.
         * @returns the shorthand name of a reference or %NULL.
         */
        get_shorthand(): string | null;
        /**
         * Get full name to the reference pointed to by a symbolic reference.
         * Only available if the reference is symbolic.
         * @returns the name if available, %NULL otherwise.
         */
        get_symbolic_target(): string | null;
        /**
         * Get the OID pointed to by a direct reference.
         * Only available if the reference is direct (i.e. an object id reference,
         * not a symbolic one).
         * @returns a new oid if available, %NULL otherwise.
         */
        get_target(): Ggit.OId | null;
        /**
         * Get whether `ref` has an existing log.
         * @returns %TRUE if @ref has a log, %FALSE otherwise.
         */
        has_log(): boolean;
        /**
         * Check whether the reference is a branch.
         * @returns %TRUE if the reference is a branch, %FALSE otherwise.
         */
        is_branch(): boolean;
        /**
         * Check whether the reference is a note.
         * @returns %TRUE if the reference is a note, %FALSE otherwise.
         */
        is_note(): boolean;
        /**
         * Check whether the reference is a remote.
         * @returns %TRUE if the reference is a remote, %FALSE otherwise.
         */
        is_remote(): boolean;
        /**
         * Check whether the reference is a tag.
         * @returns %TRUE if the reference is a tag, %FALSE otherwise.
         */
        is_tag(): boolean;
        /**
         * Convenient method to resolve a reference to an object.
         * @returns a #GgitObject or %NULL.
         */
        lookup(): Ggit.Object | null;
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
        rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null;
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
        resolve(): Ggit.Ref | null;
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
        set_symbolic_target(target: string, log_message?: string | null): Ggit.Ref | null;
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
        set_target(oid: Ggit.OId, log_message?: string | null): Ggit.Ref | null;
        /**
         * Get a string representation of the ref.
         * @returns a string representation of the ref or %NULL.
         */
        to_string(): string | null;
    }

    namespace ParsedRefName {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rtype: RefType;
            name: string;
            shortname: string;
            remote_name: string;
            remoteName: string;
            remote_branch: string;
            remoteBranch: string;
            prefix: string;
        }
    }

    class ParsedRefName extends GObject.Object {
        static $gtype: GObject.GType<ParsedRefName>;

        // Properties

        get rtype(): RefType;
        set rtype(val: RefType);
        get name(): string;
        get shortname(): string;
        get remote_name(): string;
        get remoteName(): string;
        get remote_branch(): string;
        get remoteBranch(): string;
        get prefix(): string;

        // Constructors

        constructor(properties?: Partial<ParsedRefName.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ParsedRefName;

        // Methods

        get_rtype(): RefType;
        get_name(): string;
        get_shortname(): string;
        get_remote_name(): string | null;
        get_remote_branch(): string | null;
        get_prefix(): string | null;
    }

    namespace Remote {
        // Signal callback interfaces

        interface TipUpdated {
            (refname: string, a: Ggit.OId, b: Ggit.OId): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Ggit.Remote.ConstructorProps {
            transfer_progress: number;
            transferProgress: number;
            state: RemoteState;
            fetch_specs: string[];
            fetchSpecs: string[];
            push_specs: string[];
            pushSpecs: string[];
            credentials_provider: CredentialsProvider;
            credentialsProvider: CredentialsProvider;
        }
    }

    class Remote extends Ggit.Remote {
        static $gtype: GObject.GType<Remote>;

        // Properties

        get transfer_progress(): number;
        get transferProgress(): number;
        get state(): RemoteState;
        set state(val: RemoteState);
        get fetch_specs(): string[];
        set fetch_specs(val: string[]);
        get fetchSpecs(): string[];
        set fetchSpecs(val: string[]);
        get push_specs(): string[];
        set push_specs(val: string[]);
        get pushSpecs(): string[];
        set pushSpecs(val: string[]);
        get credentials_provider(): CredentialsProvider;
        set credentials_provider(val: CredentialsProvider);
        get credentialsProvider(): CredentialsProvider;
        set credentialsProvider(val: CredentialsProvider);

        // Constructors

        constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Remote;

        // Signals

        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect_after(
            signal: 'tip-updated',
            callback: (_source: this, refname: string, a: Ggit.OId, b: Ggit.OId) => void,
        ): number;
        emit(signal: 'tip-updated', refname: string, a: Ggit.OId, b: Ggit.OId): void;

        // Methods

        connect(direction: Ggit.Direction | null, callbacks?: Ggit.RemoteCallbacks | null): Promise<void>;
        connect(
            direction: Ggit.Direction | null,
            callbacks: Ggit.RemoteCallbacks | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        connect(
            direction: Ggit.Direction | null,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<void> | void;
        // Conflicted with Ggit.Remote.connect
        connect(...args: never[]): any;
        connect_finish(_res_: Gio.AsyncResult): void;
        disconnect(): Promise<void>;
        disconnect(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        disconnect(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        // Conflicted with Ggit.Remote.disconnect
        disconnect(...args: never[]): any;
        disconnect_finish(_res_: Gio.AsyncResult): void;
        download(callbacks?: Ggit.RemoteCallbacks | null): Promise<void>;
        download(callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        download(
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<void> | void;
        // Conflicted with Ggit.Remote.download
        download(...args: never[]): any;
        download_finish(_res_: Gio.AsyncResult): void;
        push(branch: string, callbacks?: Ggit.RemoteCallbacks | null): Promise<void>;
        push(
            branch: string,
            callbacks: Ggit.RemoteCallbacks | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        push(
            branch: string,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<void> | void;
        // Conflicted with Ggit.Remote.push
        push(...args: never[]): any;
        push_finish(_res_: Gio.AsyncResult): void;
        fetch(message?: string | null, callbacks?: Ggit.RemoteCallbacks | null): Promise<void>;
        fetch(
            message: string | null,
            callbacks: Ggit.RemoteCallbacks | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch(
            message?: string | null,
            callbacks?: Ggit.RemoteCallbacks | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<void> | void;
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

    namespace RepositoryListBox {
        // Signal callback interfaces

        interface RepositoryActivated {
            (repository: Repository): void;
        }

        interface ShowError {
            (primary_message: string, secondary_message: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ListBox.ConstructorProps {
            mode: SelectionMode;
            bookmarks_from_recent_files: boolean;
            bookmarksFromRecentFiles: boolean;
            location: Gio.File;
            has_selection: boolean;
            hasSelection: boolean;
        }
    }

    class RepositoryListBox extends Gtk.ListBox {
        static $gtype: GObject.GType<RepositoryListBox>;

        // Properties

        get mode(): SelectionMode;
        set mode(val: SelectionMode);
        get bookmarks_from_recent_files(): boolean;
        set bookmarks_from_recent_files(val: boolean);
        get bookmarksFromRecentFiles(): boolean;
        set bookmarksFromRecentFiles(val: boolean);
        get location(): Gio.File;
        set location(val: Gio.File);
        get has_selection(): boolean;
        get hasSelection(): boolean;

        // Constructors

        constructor(properties?: Partial<RepositoryListBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RepositoryListBox;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'repository-activated', callback: (_source: this, repository: Repository) => void): number;
        connect_after(
            signal: 'repository-activated',
            callback: (_source: this, repository: Repository) => void,
        ): number;
        emit(signal: 'repository-activated', repository: Repository): void;
        connect(
            signal: 'show-error',
            callback: (_source: this, primary_message: string, secondary_message: string) => void,
        ): number;
        connect_after(
            signal: 'show-error',
            callback: (_source: this, primary_message: string, secondary_message: string) => void,
        ): number;
        emit(signal: 'show-error', primary_message: string, secondary_message: string): void;

        // Methods

        populate_bookmarks(): void;
        end_cloning(row: RepositoryListBoxRow, repository?: Repository | null): void;
        begin_cloning(location: Gio.File): RepositoryListBoxRow | null;
        add_repository(repository: Repository, visited?: GLib.DateTime | null): RepositoryListBoxRow | null;
        get_selection(): RepositoryListBoxRow[];
        filter_text(text?: string | null): void;
        get_mode(): SelectionMode;
        set_mode(value: SelectionMode | null): void;
        get_bookmarks_from_recent_files(): boolean;
        set_bookmarks_from_recent_files(value: boolean): void;
        get_location(): Gio.File | null;
        set_location(value?: Gio.File | null): void;
        get_has_selection(): boolean;
    }

    namespace RepositoryListBoxRow {
        // Signal callback interfaces

        interface RequestRemove {
            (): void;
        }

        interface RequestDeleteSource {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ListBoxRow.ConstructorProps {
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
        }
    }

    class RepositoryListBoxRow extends Gtk.ListBoxRow {
        static $gtype: GObject.GType<RepositoryListBoxRow>;

        // Properties

        get mode(): SelectionMode;
        set mode(val: SelectionMode);
        get selected(): boolean;
        set selected(val: boolean);
        get repository(): Repository;
        set repository(val: Repository);
        get can_remove(): boolean;
        set can_remove(val: boolean);
        get canRemove(): boolean;
        set canRemove(val: boolean);
        get time(): GLib.DateTime;
        set time(val: GLib.DateTime);
        set fraction(val: number);
        get repository_name(): string;
        set repository_name(val: string);
        get repositoryName(): string;
        set repositoryName(val: string);
        get dirname(): string;
        set dirname(val: string);
        get branch_name(): string;
        set branch_name(val: string);
        get branchName(): string;
        set branchName(val: string);
        get loading(): boolean;
        set loading(val: boolean);

        // Constructors

        constructor(properties?: Partial<RepositoryListBoxRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](repository: Repository | null, dirname: string): RepositoryListBoxRow;
        // Conflicted with Gtk.ListBoxRow.new

        static ['new'](...args: never[]): any;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'request-remove', callback: (_source: this) => void): number;
        connect_after(signal: 'request-remove', callback: (_source: this) => void): number;
        emit(signal: 'request-remove'): void;
        connect(signal: 'request-delete-source', callback: (_source: this) => void): number;
        connect_after(signal: 'request-delete-source', callback: (_source: this) => void): number;
        emit(signal: 'request-delete-source'): void;

        // Methods

        get_mode(): SelectionMode;
        set_mode(value: SelectionMode | null): void;
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

    namespace Repository {
        // Constructor properties interface

        interface ConstructorProps extends Ggit.Repository.ConstructorProps {
            name: string;
            stage: Stage;
        }
    }

    class Repository extends Ggit.Repository {
        static $gtype: GObject.GType<Repository>;

        // Properties

        get name(): string;
        get stage(): Stage;

        // Constructors

        constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Gio.File, workdir?: Gio.File | null): Repository;

        // Static methods

        static init_repository(location: Gio.File, is_bare: boolean): Repository;
        // Conflicted with Ggit.Repository.init_repository
        static init_repository(...args: never[]): any;

        // Methods

        clear_refs_cache(): void;
        refs_for_id(id: Ggit.OId): Ref[];
        lookup(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, id: Ggit.OId): any | null;
        // Conflicted with Ggit.Repository.lookup
        lookup(...args: never[]): any;
        lookup_reference(name: string): Ref;
        // Conflicted with Ggit.Repository.lookup_reference
        lookup_reference(...args: never[]): any;
        lookup_reference_dwim(short_name: string): Ref;
        // Conflicted with Ggit.Repository.lookup_reference_dwim
        lookup_reference_dwim(...args: never[]): any;
        create_branch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags | null): Branch;
        // Conflicted with Ggit.Repository.create_branch
        create_branch(...args: never[]): any;
        create_reference(name: string, oid: Ggit.OId, message: string): Ref;
        // Conflicted with Ggit.Repository.create_reference
        create_reference(...args: never[]): any;
        create_symbolic_reference(name: string, target: string, message: string): Ref;
        // Conflicted with Ggit.Repository.create_symbolic_reference
        create_symbolic_reference(...args: never[]): any;
        get_head(): Ref;
        // Conflicted with Ggit.Repository.get_head
        get_head(...args: never[]): any;
        get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature;
        get_name(): string | null;
        get_stage(): Stage;
    }

    class Resource {
        static $gtype: GObject.GType<Resource>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Resource;

        // Static methods

        static load_css(id: string): Gtk.CssProvider | null;
    }

    namespace SidebarStore {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.TreeStore.ConstructorProps {
            clearing: boolean;
        }
    }

    class SidebarStore extends Gtk.TreeStore {
        static $gtype: GObject.GType<SidebarStore>;

        // Properties

        get clearing(): boolean;

        // Constructors

        constructor(properties?: Partial<SidebarStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SidebarStore;

        // Methods

        append_dummy(text: string): SidebarStore;
        append(item: SidebarItem): SidebarStore;
        // Conflicted with Gtk.TreeStore.append
        append(...args: never[]): any;
        begin_header(text: string, id: number): SidebarStoreSidebarHeader;
        end_header(): SidebarStore;
        begin_section(): number;
        end_section(): void;
        clear(): void;
        item_for_iter(iter: Gtk.TreeIter): SidebarItem;
        activate(iter: Gtk.TreeIter, numclick: number): void;
        get_clearing(): boolean;
    }

    namespace SidebarStoreSidebarText {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, SidebarItem.ConstructorProps {}
    }

    class SidebarStoreSidebarText extends GObject.Object implements SidebarItem {
        static $gtype: GObject.GType<SidebarStoreSidebarText>;

        // Constructors

        constructor(properties?: Partial<SidebarStoreSidebarText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string): SidebarStoreSidebarText;

        // Inherited properties
        get text(): string;
        get icon_name(): string;
        get iconName(): string;

        // Inherited methods
        activate(numclick: number): void;
        get_text(): string;
        get_icon_name(): string | null;
        vfunc_activate(numclick: number): void;
        vfunc_get_text(): string;
        vfunc_get_icon_name(): string | null;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace SidebarStoreSidebarHeader {
        // Constructor properties interface

        interface ConstructorProps extends SidebarStoreSidebarText.ConstructorProps {
            id: number;
        }
    }

    class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {
        static $gtype: GObject.GType<SidebarStoreSidebarHeader>;

        // Properties

        get id(): number;

        // Constructors

        constructor(properties?: Partial<SidebarStoreSidebarHeader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string, id: number): SidebarStoreSidebarHeader;
        // Conflicted with Gitg.SidebarStoreSidebarText.new

        static ['new'](...args: never[]): any;

        // Methods

        get_id(): number;
    }

    namespace Sidebar {
        // Signal callback interfaces

        interface Deselected {
            (): void;
        }

        interface PopulatePopup {
            (menu: Gtk.Menu): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.TreeView.ConstructorProps {
            model: SidebarStore;
        }
    }

    class Sidebar extends Gtk.TreeView {
        static $gtype: GObject.GType<Sidebar>;

        // Properties

        get model(): SidebarStore;
        set model(val: SidebarStore);

        // Constructors

        constructor(properties?: Partial<Sidebar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Sidebar;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'deselected', callback: (_source: this) => void): number;
        connect_after(signal: 'deselected', callback: (_source: this) => void): number;
        emit(signal: 'deselected'): void;
        connect(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;
        connect_after(signal: 'populate-popup', callback: (_source: this, menu: Gtk.Menu) => void): number;
        emit(signal: 'populate-popup', menu: Gtk.Menu): void;

        // Virtual methods

        vfunc_select_function(
            sel: Gtk.TreeSelection,
            model: Gtk.TreeModel,
            path: Gtk.TreePath,
            cursel: boolean,
        ): boolean;
        vfunc_selection_changed(sel: Gtk.TreeSelection): void;

        // Methods

        select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;
        selection_changed(sel: Gtk.TreeSelection): void;
        get_selected_iter(): [boolean, Gtk.TreeIter];
        get_selected_item(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;
        get_selected_items(t_dup_func: GObject.BoxedCopyFunc): [any[], number];
        select(item: SidebarItem): void;
        is_selected(item: SidebarItem): boolean;
        get_model(): SidebarStore;
        set_model(value: SidebarStore): void;
    }

    namespace StageStatusFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, StageStatusItem.ConstructorProps {
            flags: Ggit.StatusFlags;
        }
    }

    class StageStatusFile extends GObject.Object implements StageStatusItem {
        static $gtype: GObject.GType<StageStatusFile>;

        // Properties

        get flags(): Ggit.StatusFlags;

        // Constructors

        constructor(properties?: Partial<StageStatusFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, flags: Ggit.StatusFlags): StageStatusFile;

        // Methods

        get_flags(): Ggit.StatusFlags;

        // Inherited properties
        get path(): string;
        get is_staged(): boolean;
        get isStaged(): boolean;
        get is_unstaged(): boolean;
        get isUnstaged(): boolean;
        get is_untracked(): boolean;
        get isUntracked(): boolean;
        get icon_name(): string;
        get iconName(): string;

        // Inherited methods
        get_path(): string;
        get_is_staged(): boolean;
        get_is_unstaged(): boolean;
        get_is_untracked(): boolean;
        get_icon_name(): string | null;
        vfunc_get_path(): string;
        vfunc_get_is_staged(): boolean;
        vfunc_get_is_unstaged(): boolean;
        vfunc_get_is_untracked(): boolean;
        vfunc_get_icon_name(): string | null;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace StageStatusSubmodule {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, StageStatusItem.ConstructorProps {
            submodule: Ggit.Submodule;
            is_dirty: boolean;
            isDirty: boolean;
            flags: Ggit.SubmoduleStatus;
        }
    }

    class StageStatusSubmodule extends GObject.Object implements StageStatusItem {
        static $gtype: GObject.GType<StageStatusSubmodule>;

        // Properties

        get submodule(): Ggit.Submodule;
        get is_dirty(): boolean;
        get isDirty(): boolean;
        get flags(): Ggit.SubmoduleStatus;

        // Constructors

        constructor(properties?: Partial<StageStatusSubmodule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](submodule: Ggit.Submodule): StageStatusSubmodule;

        // Methods

        get_submodule(): Ggit.Submodule;
        get_is_dirty(): boolean;
        get_flags(): Ggit.SubmoduleStatus;

        // Inherited properties
        get path(): string;
        get is_staged(): boolean;
        get isStaged(): boolean;
        get is_unstaged(): boolean;
        get isUnstaged(): boolean;
        get is_untracked(): boolean;
        get isUntracked(): boolean;
        get icon_name(): string;
        get iconName(): string;

        // Inherited methods
        get_path(): string;
        get_is_staged(): boolean;
        get_is_unstaged(): boolean;
        get_is_untracked(): boolean;
        get_icon_name(): string | null;
        vfunc_get_path(): string;
        vfunc_get_is_staged(): boolean;
        vfunc_get_is_unstaged(): boolean;
        vfunc_get_is_untracked(): boolean;
        vfunc_get_icon_name(): string | null;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace StageStatusEnumerator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class StageStatusEnumerator extends GObject.Object {
        static $gtype: GObject.GType<StageStatusEnumerator>;

        // Constructors

        constructor(properties?: Partial<StageStatusEnumerator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        cancel(): void;
        next_items(num: number): Promise<StageStatusItem[]>;
        next_items(num: number, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        next_items(num: number, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<StageStatusItem[]> | void;
        next_items_finish(_res_: Gio.AsyncResult): StageStatusItem[];
    }

    class PatchSet {
        static $gtype: GObject.GType<PatchSet>;

        // Fields

        ref_count: number;
        filename: string;
        patches_length1: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): PatchSet;

        // Methods

        reversed(): PatchSet;
    }

    namespace Stage {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Stage extends GObject.Object {
        static $gtype: GObject.GType<Stage>;

        // Constructors

        constructor(properties?: Partial<Stage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        refresh(): Promise<void>;
        refresh(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        refresh_finish(_res_: Gio.AsyncResult): void;
        get_head_tree(): Promise<Ggit.Tree | null>;
        get_head_tree(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        get_head_tree(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<Ggit.Tree | null> | void;
        get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null;
        file_status(options?: Ggit.StatusOptions | null): StageStatusEnumerator;
        pre_commit_hook(author: Ggit.Signature): Promise<void>;
        pre_commit_hook(author: Ggit.Signature, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        pre_commit_hook(author: Ggit.Signature, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        pre_commit_hook_finish(_res_: Gio.AsyncResult): void;
        commit_index(
            index: Ggit.Index,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
        ): Promise<Ggit.OId | null>;
        commit_index(
            index: Ggit.Index,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit_index(
            index: Ggit.Index,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.OId | null> | void;
        commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        commit_tree(
            treeoid: Ggit.OId,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
        ): Promise<Ggit.OId | null>;
        commit_tree(
            treeoid: Ggit.OId,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit_tree(
            treeoid: Ggit.OId,
            reference: Ggit.Ref,
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            parents: Ggit.OId[] | null,
            options: StageCommitOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.OId | null> | void;
        commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        commit(
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            options: StageCommitOptions | null,
        ): Promise<Ggit.OId | null>;
        commit(
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            options: StageCommitOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        commit(
            message: string,
            author: Ggit.Signature,
            committer: Ggit.Signature,
            options: StageCommitOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.OId | null> | void;
        commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
        revert(file: Gio.File): Promise<void>;
        revert(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        revert(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        revert_finish(_res_: Gio.AsyncResult): void;
        revert_path(path: string): Promise<void>;
        revert_path(path: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        revert_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        revert_path_finish(_res_: Gio.AsyncResult): void;
        revert_patch(patch: PatchSet): Promise<void>;
        revert_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        revert_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        revert_patch_finish(_res_: Gio.AsyncResult): void;
        ['delete'](file: Gio.File): Promise<void>;
        ['delete'](file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        ['delete'](file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        delete_finish(_res_: Gio.AsyncResult): void;
        delete_path(path: string): Promise<void>;
        delete_path(path: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        delete_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        delete_path_finish(_res_: Gio.AsyncResult): void;
        stage(file: Gio.File): Promise<void>;
        stage(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        stage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        stage_finish(_res_: Gio.AsyncResult): void;
        stage_path(path: string): Promise<void>;
        stage_path(path: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        stage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        stage_path_finish(_res_: Gio.AsyncResult): void;
        stage_commit(path: string, commit: Ggit.Commit): Promise<void>;
        stage_commit(path: string, commit: Ggit.Commit, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        stage_commit(
            path: string,
            commit: Ggit.Commit,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<void> | void;
        stage_commit_finish(_res_: Gio.AsyncResult): void;
        stage_patch(patch: PatchSet): Promise<void>;
        stage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        stage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        stage_patch_finish(_res_: Gio.AsyncResult): void;
        unstage(file: Gio.File): Promise<void>;
        unstage(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        unstage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        unstage_finish(_res_: Gio.AsyncResult): void;
        unstage_path(path: string): Promise<void>;
        unstage_path(path: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        unstage_path(path: string, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        unstage_path_finish(_res_: Gio.AsyncResult): void;
        unstage_patch(patch: PatchSet): Promise<void>;
        unstage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        unstage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
        unstage_patch_finish(_res_: Gio.AsyncResult): void;
        diff_index_all(files?: StageStatusItem[] | null, defopts?: Ggit.DiffOptions | null): Promise<Ggit.Diff | null>;
        diff_index_all(
            files: StageStatusItem[] | null,
            defopts: Ggit.DiffOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_index_all(
            files?: StageStatusItem[] | null,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.Diff | null> | void;
        diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_index(f: StageStatusItem, defopts?: Ggit.DiffOptions | null): Promise<Ggit.Diff | null>;
        diff_index(
            f: StageStatusItem,
            defopts: Ggit.DiffOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_index(
            f: StageStatusItem,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.Diff | null> | void;
        diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_workdir_all(files: StageStatusItem[], defopts?: Ggit.DiffOptions | null): Promise<Ggit.Diff | null>;
        diff_workdir_all(
            files: StageStatusItem[],
            defopts: Ggit.DiffOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_workdir_all(
            files: StageStatusItem[],
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.Diff | null> | void;
        diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
        diff_workdir(f: StageStatusItem, defopts?: Ggit.DiffOptions | null): Promise<Ggit.Diff | null>;
        diff_workdir(
            f: StageStatusItem,
            defopts: Ggit.DiffOptions | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        diff_workdir(
            f: StageStatusItem,
            defopts?: Ggit.DiffOptions | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Ggit.Diff | null> | void;
        diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
    }

    class TextConv {
        static $gtype: GObject.GType<TextConv>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): TextConv;

        // Static methods

        static has_textconv_command(repository: Repository, file: Ggit.DiffFile): boolean;
        static get_textconv_content(repository: Repository, file: Ggit.DiffFile): Uint8Array;
        static get_textconv_content_from_raw(
            repository: Repository,
            file: Ggit.DiffFile,
            raw_content?: Uint8Array | null,
        ): Uint8Array;
    }

    namespace Theme {
        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    class Theme extends Gtk.Widget {
        static $gtype: GObject.GType<Theme>;

        // Constructors

        constructor(properties?: Partial<Theme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Theme;

        // Static methods

        static instance(): Theme;

        // Methods

        is_theme_dark(): boolean;
    }

    class Utils {
        static $gtype: GObject.GType<Utils>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Utils;

        // Static methods

        static replace_home_dir_with_tilde(file: Gio.File): string;
        static expand_home_dir(path: string): string;
    }

    namespace WhenMapped {
        interface OnMapped {
            (): void;
        }
    }

    class WhenMapped {
        static $gtype: GObject.GType<WhenMapped>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](widget: Gtk.Widget): WhenMapped;

        // Methods

        update(mapped: WhenMapped.OnMapped, lifetime?: GObject.Object | null): void;
    }

    type AsyncClass = typeof Async;
    abstract class AsyncPrivate {
        static $gtype: GObject.GType<AsyncPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AuthenticationDialogClass = typeof AuthenticationDialog;
    abstract class AuthenticationDialogPrivate {
        static $gtype: GObject.GType<AuthenticationDialogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AvatarCacheClass = typeof AvatarCache;
    abstract class AvatarCachePrivate {
        static $gtype: GObject.GType<AvatarCachePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BranchBaseClass = typeof BranchBase;
    abstract class BranchBasePrivate {
        static $gtype: GObject.GType<BranchBasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CellRendererLanesClass = typeof CellRendererLanes;
    abstract class CellRendererLanesPrivate {
        static $gtype: GObject.GType<CellRendererLanesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ColorClass = typeof Color;
    abstract class ColorPrivate {
        static $gtype: GObject.GType<ColorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CommitListViewClass = typeof CommitListView;
    abstract class CommitListViewPrivate {
        static $gtype: GObject.GType<CommitListViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CommitModelClass = typeof CommitModel;
    abstract class CommitModelPrivate {
        static $gtype: GObject.GType<CommitModelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CommitClass = typeof Commit;
    abstract class CommitPrivate {
        static $gtype: GObject.GType<CommitPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CredentialsManagerClass = typeof CredentialsManager;
    abstract class CredentialsManagerPrivate {
        static $gtype: GObject.GType<CredentialsManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DateClass = typeof Date;
    abstract class DatePrivate {
        static $gtype: GObject.GType<DatePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DiffStatClass = typeof DiffStat;
    abstract class DiffStatPrivate {
        static $gtype: GObject.GType<DiffStatPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DiffViewOptionsClass = typeof DiffViewOptions;
    abstract class DiffViewOptionsPrivate {
        static $gtype: GObject.GType<DiffViewOptionsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DiffViewClass = typeof DiffView;
    abstract class DiffViewPrivate {
        static $gtype: GObject.GType<DiffViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FontManagerClass = typeof FontManager;
    abstract class FontManagerPrivate {
        static $gtype: GObject.GType<FontManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GPGUtilsClass = typeof GPGUtils;
    abstract class GPGUtilsPrivate {
        static $gtype: GObject.GType<GPGUtilsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type HookClass = typeof Hook;
    abstract class HookPrivate {
        static $gtype: GObject.GType<HookPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LabelRendererClass = typeof LabelRenderer;
    abstract class LabelRendererPrivate {
        static $gtype: GObject.GType<LabelRendererPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LanesClass = typeof Lanes;
    abstract class LanesPrivate {
        static $gtype: GObject.GType<LanesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LaneClass = typeof Lane;
    abstract class LanePrivate {
        static $gtype: GObject.GType<LanePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ProgressBinClass = typeof ProgressBin;
    abstract class ProgressBinPrivate {
        static $gtype: GObject.GType<ProgressBinPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RefBaseClass = typeof RefBase;
    abstract class RefBasePrivate {
        static $gtype: GObject.GType<RefBasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ParsedRefNameClass = typeof ParsedRefName;
    abstract class ParsedRefNamePrivate {
        static $gtype: GObject.GType<ParsedRefNamePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RemoteClass = typeof Remote;
    abstract class RemotePrivate {
        static $gtype: GObject.GType<RemotePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RepositoryListBoxClass = typeof RepositoryListBox;
    abstract class RepositoryListBoxPrivate {
        static $gtype: GObject.GType<RepositoryListBoxPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RepositoryListBoxRowClass = typeof RepositoryListBoxRow;
    abstract class RepositoryListBoxRowPrivate {
        static $gtype: GObject.GType<RepositoryListBoxRowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RepositoryClass = typeof Repository;
    abstract class RepositoryPrivate {
        static $gtype: GObject.GType<RepositoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResourceClass = typeof Resource;
    abstract class ResourcePrivate {
        static $gtype: GObject.GType<ResourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SidebarStoreClass = typeof SidebarStore;
    abstract class SidebarStorePrivate {
        static $gtype: GObject.GType<SidebarStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SidebarStoreSidebarTextClass = typeof SidebarStoreSidebarText;
    abstract class SidebarStoreSidebarTextPrivate {
        static $gtype: GObject.GType<SidebarStoreSidebarTextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SidebarStoreSidebarHeaderClass = typeof SidebarStoreSidebarHeader;
    abstract class SidebarStoreSidebarHeaderPrivate {
        static $gtype: GObject.GType<SidebarStoreSidebarHeaderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SidebarClass = typeof Sidebar;
    abstract class SidebarPrivate {
        static $gtype: GObject.GType<SidebarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StageStatusFileClass = typeof StageStatusFile;
    abstract class StageStatusFilePrivate {
        static $gtype: GObject.GType<StageStatusFilePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StageStatusSubmoduleClass = typeof StageStatusSubmodule;
    abstract class StageStatusSubmodulePrivate {
        static $gtype: GObject.GType<StageStatusSubmodulePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StageStatusEnumeratorClass = typeof StageStatusEnumerator;
    abstract class StageStatusEnumeratorPrivate {
        static $gtype: GObject.GType<StageStatusEnumeratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PatchSetClass = typeof PatchSet;
    abstract class PatchSetPrivate {
        static $gtype: GObject.GType<PatchSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class PatchSetPatch {
        static $gtype: GObject.GType<PatchSetPatch>;

        // Fields

        type: PatchSetType;
        old_offset: number;
        new_offset: number;
        length: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type StageClass = typeof Stage;
    abstract class StagePrivate {
        static $gtype: GObject.GType<StagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TextConvClass = typeof TextConv;
    abstract class TextConvPrivate {
        static $gtype: GObject.GType<TextConvPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ThemeClass = typeof Theme;
    abstract class ThemePrivate {
        static $gtype: GObject.GType<ThemePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UtilsClass = typeof Utils;
    abstract class UtilsPrivate {
        static $gtype: GObject.GType<UtilsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WhenMappedClass = typeof WhenMapped;
    abstract class WhenMappedPrivate {
        static $gtype: GObject.GType<WhenMappedPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BranchIface = typeof Branch;
    type RefIface = typeof Ref;
    type CredentialsProviderIface = typeof CredentialsProvider;
    type SidebarItemIface = typeof SidebarItem;
    type StageStatusItemIface = typeof StageStatusItem;
    namespace Branch {
        // Constructor properties interface

        interface ConstructorProps extends Ggit.Branch.ConstructorProps {}
    }

    export interface BranchNamespace {
        $gtype: GObject.GType<Branch>;
        prototype: Branch;
    }
    interface Branch extends Ggit.Branch {
        // Methods

        get_upstream(): Ref;
        // Conflicted with Ggit.Branch.get_upstream
        get_upstream(...args: never[]): any;

        // Virtual methods

        vfunc_get_upstream(): Ref;
    }

    export const Branch: BranchNamespace & {
        new (): Branch; // This allows `obj instanceof Branch`
    };

    namespace Ref {
        // Constructor properties interface

        interface ConstructorProps extends Ggit.Ref.ConstructorProps {
            d_parsed_name: ParsedRefName;
            dParsedName: ParsedRefName;
            d_pushes: Ref[];
            dPushes: Ref[];
            state: RefState;
            working: boolean;
        }
    }

    export interface RefNamespace {
        $gtype: GObject.GType<Ref>;
        prototype: Ref;
    }
    interface Ref extends Ggit.Ref {
        // Properties

        get d_parsed_name(): ParsedRefName;
        set d_parsed_name(val: ParsedRefName);
        get dParsedName(): ParsedRefName;
        set dParsedName(val: ParsedRefName);
        get d_pushes(): Ref[];
        set d_pushes(val: Ref[]);
        get dPushes(): Ref[];
        set dPushes(val: Ref[]);
        get state(): RefState;
        set state(val: RefState);
        get working(): boolean;
        set working(val: boolean);

        // Methods

        get_owner(): Repository;
        // Conflicted with Ggit.Ref.get_owner
        get_owner(...args: never[]): any;
        get_d_parsed_name(): ParsedRefName;
        set_d_parsed_name(value: ParsedRefName): void;
        get_d_pushes(): Ref[] | null;
        set_d_pushes(value?: Ref[] | null): void;
        get_state(): RefState;
        set_state(value: RefState | null): void;
        get_working(): boolean;
        set_working(value: boolean): void;
        get_parsed_name(): ParsedRefName;
        get_pushes(): Ref[];

        // Virtual methods

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

    export const Ref: RefNamespace & {
        new (): Ref; // This allows `obj instanceof Ref`
    };

    namespace CredentialsProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CredentialsProviderNamespace {
        $gtype: GObject.GType<CredentialsProvider>;
        prototype: CredentialsProvider;
    }
    interface CredentialsProvider extends GObject.Object {
        // Methods

        credentials(
            url: string,
            username_from_url: string | null,
            allowed_types: Ggit.Credtype | null,
        ): Ggit.Cred | null;

        // Virtual methods

        vfunc_credentials(
            url: string,
            username_from_url: string | null,
            allowed_types: Ggit.Credtype,
        ): Ggit.Cred | null;
    }

    export const CredentialsProvider: CredentialsProviderNamespace & {
        new (): CredentialsProvider; // This allows `obj instanceof CredentialsProvider`
    };

    namespace SidebarItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            text: string;
            icon_name: string;
            iconName: string;
        }
    }

    export interface SidebarItemNamespace {
        $gtype: GObject.GType<SidebarItem>;
        prototype: SidebarItem;
    }
    interface SidebarItem extends GObject.Object {
        // Properties

        get text(): string;
        get icon_name(): string;
        get iconName(): string;

        // Methods

        activate(numclick: number): void;
        get_text(): string;
        get_icon_name(): string | null;

        // Virtual methods

        vfunc_activate(numclick: number): void;
        vfunc_get_text(): string;
        vfunc_get_icon_name(): string | null;
    }

    export const SidebarItem: SidebarItemNamespace & {
        new (): SidebarItem; // This allows `obj instanceof SidebarItem`
    };

    namespace StageStatusItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
            is_staged: boolean;
            isStaged: boolean;
            is_unstaged: boolean;
            isUnstaged: boolean;
            is_untracked: boolean;
            isUntracked: boolean;
            icon_name: string;
            iconName: string;
        }
    }

    export interface StageStatusItemNamespace {
        $gtype: GObject.GType<StageStatusItem>;
        prototype: StageStatusItem;
    }
    interface StageStatusItem extends GObject.Object {
        // Properties

        get path(): string;
        get is_staged(): boolean;
        get isStaged(): boolean;
        get is_unstaged(): boolean;
        get isUnstaged(): boolean;
        get is_untracked(): boolean;
        get isUntracked(): boolean;
        get icon_name(): string;
        get iconName(): string;

        // Methods

        get_path(): string;
        get_is_staged(): boolean;
        get_is_unstaged(): boolean;
        get_is_untracked(): boolean;
        get_icon_name(): string | null;

        // Virtual methods

        vfunc_get_path(): string;
        vfunc_get_is_staged(): boolean;
        vfunc_get_is_unstaged(): boolean;
        vfunc_get_is_untracked(): boolean;
        vfunc_get_icon_name(): string | null;
    }

    export const StageStatusItem: StageStatusItemNamespace & {
        new (): StageStatusItem; // This allows `obj instanceof StageStatusItem`
    };

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
