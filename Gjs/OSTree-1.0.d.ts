/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * OSTree-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace OSTree {

enum DeploymentUnlockedState {
    NONE,
    DEVELOPMENT,
    HOTFIX,
}
/**
 * Signature attributes available from an #OstreeGpgVerifyResult.
 * The attribute's #GVariantType is shown in brackets.
 */
enum GpgSignatureAttr {
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Is the signature valid?
     */
    VALID,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signature expired?
     */
    SIG_EXPIRED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key expired?
     */
    KEY_EXPIRED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key been revoked?
     */
    KEY_REVOKED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Is the signing key missing?
     */
    KEY_MISSING,
    /**
     * [#G_VARIANT_TYPE_STRING] Fingerprint of the signing key
     */
    FINGERPRINT,
    /**
     * [#G_VARIANT_TYPE_INT64] Signature creation Unix timestamp
     */
    TIMESTAMP,
    /**
     * [#G_VARIANT_TYPE_INT64] Signature expiration Unix timestamp (0 if no
     *   expiration)
     */
    EXP_TIMESTAMP,
    /**
     * [#G_VARIANT_TYPE_STRING] Name of the public key algorithm used to create
     *   the signature
     */
    PUBKEY_ALGO_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] Name of the hash algorithm used to create the
     *   signature
     */
    HASH_ALGO_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] The name of the signing key's primary user
     */
    USER_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] The email address of the signing key's primary
     *   user
     */
    USER_EMAIL,
}
/**
 * Formatting flags for ostree_gpg_verify_result_describe().  Currently
 * there's only one possible output format, but this enumeration allows
 * for future variations.
 */
enum GpgSignatureFormatFlags {
    /**
     * Use the default output format
     */
    GPG_SIGNATURE_FORMAT_DEFAULT,
}
/**
 * Enumeration for core object types; %OSTREE_OBJECT_TYPE_FILE is for
 * content, the other types are metadata.
 */
enum ObjectType {
    /**
     * Content; regular file, symbolic link
     */
    FILE,
    /**
     * List of children (trees or files), and metadata
     */
    DIR_TREE,
    /**
     * Directory metadata
     */
    DIR_META,
    /**
     * Toplevel object, refers to tree and dirmeta for root
     */
    COMMIT,
    /**
     * Toplevel object, refers to a deleted commit
     */
    TOMBSTONE_COMMIT,
    /**
     * Detached metadata for a commit
     */
    COMMIT_META,
}
enum RepoCheckoutMode {
    /**
     * No special options
     */
    NONE,
    /**
     * Ignore uid/gid of files
     */
    USER,
}
enum RepoCheckoutOverwriteMode {
    /**
     * No special options
     */
    NONE,
    /**
     * When layering checkouts, overwrite earlier files, but keep earlier directories
     */
    UNION_FILES,
}
enum RepoCommitFilterResult {
    /**
     * Do commit this object
     */
    ALLOW,
    /**
     * Ignore this object
     */
    SKIP,
}
enum RepoCommitIterResult {
    ERROR,
    END,
    FILE,
    DIR,
}
enum RepoListRefsExtFlags {
    /**
     * No flags.
     */
    REPO_LIST_REFS_EXT_NONE,
}
/**
 * See the documentation of #OstreeRepo for more information about the
 * possible modes.
 */
enum RepoMode {
    /**
     * Files are stored as themselves; checkouts are hardlinks; can only be written as root
     */
    BARE,
    /**
     * Files are compressed, should be owned by non-root.  Can be served via HTTP
     */
    ARCHIVE_Z2,
    /**
     * Files are stored as themselves, except ownership; can be written by user. Hardlinks work only in user checkouts.
     */
    BARE_USER,
}
enum RepoPruneFlags {
    /**
     * No special options for pruning
     */
    NONE,
    /**
     * Don't actually delete objects
     */
    NO_PRUNE,
    /**
     * Do not traverse individual commit objects, only follow refs
     */
    REFS_ONLY,
}
/**
 * The remote change operation.
 */
enum RepoRemoteChange {
    ADD,
    ADD_IF_NOT_EXISTS,
    DELETE,
    DELETE_IF_EXISTS,
}
enum RepoResolveRevExtFlags {
    /**
     * No flags.
     */
    REPO_RESOLVE_REV_EXT_NONE,
}
/**
 * Parameters controlling optimization of static deltas.
 */
enum StaticDeltaGenerateOpt {
    /**
     * Optimize for speed of delta creation over space
     */
    LOWLATENCY,
    /**
     * Optimize for delta size (may be very slow)
     */
    MAJOR,
}
enum DiffFlags {
    NONE,
    IGNORE_XATTRS,
}
enum RepoCommitModifierFlags {
    /**
     * No special flags
     */
    NONE,
    /**
     * Do not process extended attributes
     */
    SKIP_XATTRS,
    /**
     * Generate size information.
     */
    GENERATE_SIZES,
}
enum RepoCommitState {
    REPO_COMMIT_STATE_PARTIAL,
}
enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE,
}
enum RepoListObjectsFlags {
    /**
     * List only loose (plain file) objects
     */
    LOOSE,
    /**
     * List only packed (compacted into blobs) objects
     */
    PACKED,
    /**
     * List all objects
     */
    ALL,
    /**
     * Only list objects in this repo, not parents
     */
    NO_PARENTS,
}
enum RepoPullFlags {
    /**
     * No special options for pull
     */
    NONE,
    /**
     * Write out refs suitable for mirrors
     */
    MIRROR,
    /**
     * Fetch only the commit metadata
     */
    COMMIT_ONLY,
    /**
     * Don't trust local remote
     */
    UNTRUSTED,
}
enum SePolicyRestoreconFlags {
    NONE,
    ALLOW_NOLABEL,
    KEEP_EXISTING,
}
enum SysrootSimpleWriteDeploymentFlags {
    NONE,
    RETAIN,
    NOT_DEFAULT,
    NO_CLEAN,
}
/**
 * Flags controlling operation of an #OstreeSysrootUpgrader.
 */
enum SysrootUpgraderFlags {
    /**
     * Do not error if the origin has an unconfigured-state key
     */
    IGNORE_UNCONFIGURED,
}
enum SysrootUpgraderPullFlags {
    NONE,
    ALLOW_OLDER,
}
const COMMIT_GVARIANT_STRING: string
const DIRMETA_GVARIANT_STRING: string
const FILEMETA_GVARIANT_STRING: string
/**
 * Maximum permitted size in bytes of metadata objects.  This is an
 * arbitrary number, but really, no one should be putting humongous
 * data in metadata.
 */
const MAX_METADATA_SIZE: number
/**
 * Objects committed above this size will be allowed, but a warning
 * will be emitted.
 */
const MAX_METADATA_WARN_SIZE: number
/**
 * Maximum depth of metadata.
 */
const MAX_RECURSION: number
/**
 * Length of a sha256 digest when expressed as raw bytes
 */
const SHA256_DIGEST_LEN: number
/**
 * Length of a sha256 digest when expressed as a hexadecimal string
 */
const SHA256_STRING_LEN: number
const SUMMARY_GVARIANT_STRING: string
const SUMMARY_SIG_GVARIANT_STRING: string
/**
 * The mtime used for stored files.  This was originally 0, changed to 1 for
 * a few releases, then was reverted due to regressions it introduced from
 * users who had been using zero before.
 */
const TIMESTAMP: number
const TREE_GVARIANT_STRING: string
const WITH_AUTOCLEANUPS: number
function checksum_b64_from_bytes(csum: Uint8Array): string
function checksum_b64_to_bytes(checksum: string): Uint8Array
function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array
function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array
function checksum_file(f: Gio.File, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_file_from_input(file_info: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_from_bytes(csum: Uint8Array): string
function checksum_from_bytes_v(csum_v: GLib.Variant): string
function checksum_inplace_to_bytes(checksum: string, buf: number): void
function checksum_to_bytes(checksum: string): Uint8Array
function checksum_to_bytes_v(checksum: string): GLib.Variant
function cmd__private__(): CmdPrivateVTable
function cmp_checksum_bytes(a: number, b: number): number
function commit_get_parent(commit_variant: GLib.Variant): string
function commit_get_timestamp(commit_variant: GLib.Variant): number
function content_file_parse(compressed: boolean, content_path: Gio.File, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function content_file_parse_at(compressed: boolean, parent_dfd: number, path: string, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function content_stream_parse(compressed: boolean, input: Gio.InputStream, input_length: number, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function create_directory_metadata(dir_info: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant
function diff_dirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable?: Gio.Cancellable | null): boolean
function diff_print(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
function hash_object_name(a?: object | null): number
function metadata_variant_type(objtype: ObjectType): GLib.VariantType
function object_from_string(str: string): [ /* out_checksum */ string, /* out_objtype */ ObjectType ]
function object_name_deserialize(variant: GLib.Variant): [ /* out_checksum */ string, /* out_objtype */ ObjectType ]
function object_name_serialize(checksum: string, objtype: ObjectType): GLib.Variant
function object_to_string(checksum: string, objtype: ObjectType): string
function object_type_from_string(str: string): ObjectType
function object_type_to_string(objtype: ObjectType): string
function parse_refspec(refspec: string): [ /* returnType */ boolean, /* out_remote */ string | null, /* out_ref */ string | null ]
function raw_file_to_archive_z2_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream ]
function raw_file_to_content_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_length */ number ]
function repo_commit_traverse_iter_cleanup(p?: object | null): void
function validate_checksum_string(sha256: string): boolean
function validate_rev(rev: string): boolean
function validate_structureof_checksum_string(checksum: string): boolean
function validate_structureof_commit(commit: GLib.Variant): boolean
function validate_structureof_csum_v(checksum: GLib.Variant): boolean
function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean
function validate_structureof_dirtree(dirtree: GLib.Variant): boolean
function validate_structureof_file_mode(mode: number): boolean
function validate_structureof_objtype(objtype: number): boolean
interface RepoCommitFilter {
    (repo: Repo, path: string, file_info: Gio.FileInfo): RepoCommitFilterResult
}
interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string, file_info: Gio.FileInfo): GLib.Variant
}
interface AsyncProgress_ConstructProps extends GObject.Object_ConstructProps {
}
class AsyncProgress {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.AsyncProgress */
    /**
     * Process any pending signals, ensuring the main context is cleared
     * of sources used by this object.  Also ensures that no further
     * events will be queued.
     */
    finish(): void
    get_status(): string
    get_uint(key: string): number
    get_uint64(key: string): number
    set_status(status: string): void
    set_uint(key: string, value: number): void
    set_uint64(key: string, value: number): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of OSTree-1.0.OSTree.AsyncProgress */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of OSTree-1.0.OSTree.AsyncProgress */
    /**
     * Emitted when `self` has been changed.
     */
    connect(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AsyncProgress_ConstructProps)
    _init (config?: AsyncProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncProgress
    static new_and_connect(changed?: object | null, user_data?: object | null): AsyncProgress
    static $gtype: GObject.Type
}
interface BootconfigParser_ConstructProps extends GObject.Object_ConstructProps {
}
class BootconfigParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.BootconfigParser */
    clone(): BootconfigParser
    get(key: string): string
    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initialize a bootconfig from the given file.
     */
    parse_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set(key: string, value: string): void
    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    write_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BootconfigParser_ConstructProps)
    _init (config?: BootconfigParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BootconfigParser
    static $gtype: GObject.Type
}
interface ChecksumInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.ChecksumInputStream */
    checksum?: object
}
class ChecksumInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parent_instance: Gio.InputStream
    readonly base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    /**
     * Gets the base stream for the filter stream.
     */
    get_base_stream(): Gio.InputStream
    /**
     * Returns whether the base stream will be closed when `stream` is
     * closed.
     */
    get_close_base_stream(): boolean
    /**
     * Sets whether the base stream will be closed when `stream` is closed.
     */
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    /**
     * Clears the pending flag on `stream`.
     */
    clear_pending(): void
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     */
    close(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks if an input stream has pending actions.
     */
    has_pending(): boolean
    /**
     * Checks if an input stream is closed.
     */
    is_closed(): boolean
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     */
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * This function is similar to g_input_stream_read(), except it tries to
     * read as many bytes as requested, only stopping on an error or end of stream.
     * 
     * On a successful read of `count` bytes, or if we reached the end of the
     * stream,  %TRUE is returned, and `bytes_read` is set to the number of bytes
     * read into `buffer`.
     * 
     * If there is an error during the operation %FALSE is returned and `error`
     * is set to indicate the error status.
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read().
     */
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the
     * buffer starting at `buffer`.
     * 
     * This is the asynchronous equivalent of g_input_stream_read_all().
     * 
     * Call g_input_stream_read_all_finish() to collect the result.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     */
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Finishes an asynchronous stream read operation started with
     * g_input_stream_read_all_async().
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read_async().
     */
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     */
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    /**
     * Request an asynchronous read of `count` bytes from the stream into a
     * new #GBytes. When the operation is finished `callback` will be
     * called. You can then call g_input_stream_read_bytes_finish() to get the
     * result of the operation.
     * 
     * During an async request no other sync and async calls are allowed
     * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the new #GBytes will be passed to the callback. It is
     * not an error if this is smaller than the requested size, as it can
     * happen e.g. near the end of a file, but generally we try to read as
     * many bytes as requested. Zero is returned on end of file (or if
     * `count` is zero), but never otherwise.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     */
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream read-into-#GBytes operation.
     */
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    /**
     * Finishes an asynchronous stream read operation.
     */
    read_finish(result: Gio.AsyncResult): number
    /**
     * Sets `stream` to have actions pending. If the pending flag is
     * already set or `stream` is closed, it will return %FALSE and set
     * `error`.
     */
    set_pending(): boolean
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     */
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     */
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     */
    skip_finish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     */
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    /**
     * Finishes an asynchronous stream read operation.
     */
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     */
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     */
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     */
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChecksumInputStream_ConstructProps)
    _init (config?: ChecksumInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream
    static $gtype: GObject.Type
}
interface Deployment_ConstructProps extends GObject.Object_ConstructProps {
}
class Deployment {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Deployment */
    clone(): Deployment
    equal(bp: Deployment): boolean
    get_bootconfig(): BootconfigParser
    get_bootcsum(): string
    get_bootserial(): number
    get_csum(): string
    get_deployserial(): number
    get_index(): number
    get_origin(): GLib.KeyFile
    /**
     * Note this function only returns a *relative* path - if you want to
     * access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     */
    get_origin_relpath(): string
    get_osname(): string
    get_unlocked(): DeploymentUnlockedState
    set_bootconfig(bootconfig: BootconfigParser): void
    set_bootserial(index: number): void
    set_index(index: number): void
    set_origin(origin: GLib.KeyFile): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number, osname: string, csum: string, deployserial: number, bootcsum: string, bootserial: number): Deployment
    static hash(v?: object | null): number
    static unlocked_state_to_string(state: DeploymentUnlockedState): string
    static $gtype: GObject.Type
}
interface GpgVerifyResult_ConstructProps extends GObject.Object_ConstructProps {
}
class GpgVerifyResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.GpgVerifyResult */
    /**
     * Counts all the signatures in `result`.
     */
    count_all(): number
    /**
     * Counts only the valid signatures in `result`.
     */
    count_valid(): number
    /**
     * Appends a brief, human-readable description of the GPG signature at
     * `signature_index` in `result` to the `output_buffer`.  The description
     * spans multiple lines.  A `line_prefix` string, if given, will precede
     * each line of the description.
     * 
     * The `flags` argument is reserved for future variations to the description
     * format.  Currently must be 0.
     * 
     * It is a programmer error to request an invalid `signature_index`.  Use
     * ostree_gpg_verify_result_count_all() to find the number of signatures in
     * `result`.
     */
    describe(signature_index: number, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Builds a #GVariant tuple of requested attributes for the GPG signature at
     * `signature_index` in `result`.  See the #OstreeGpgSignatureAttr description
     * for the #GVariantType of each available attribute.
     * 
     * It is a programmer error to request an invalid #OstreeGpgSignatureAttr or
     * an invalid `signature_index`.  Use ostree_gpg_verify_result_count_all() to
     * find the number of signatures in `result`.
     */
    get(signature_index: number, attrs: GpgSignatureAttr[]): GLib.Variant
    /**
     * Builds a #GVariant tuple of all available attributes for the GPG signature
     * at `signature_index` in `result`.
     * 
     * The child values in the returned #GVariant tuple are ordered to match the
     * #OstreeGpgSignatureAttr enumeration, which means the enum values can be
     * used as index values in functions like g_variant_get_child().  See the
     * #OstreeGpgSignatureAttr description for the #GVariantType of each
     * available attribute.
     * 
     * <note>
     *   <para>
     *     The #OstreeGpgSignatureAttr enumeration may be extended in the future
     *     with new attributes, which would affect the #GVariant tuple returned by
     *     this function.  While the position and type of current child values in
     *     the #GVariant tuple will not change, to avoid backward-compatibility
     *     issues <emphasis>please do not depend on the tuple's overall size or
     *     type signature</emphasis>.
     *   </para>
     * </note>
     * 
     * It is a programmer error to request an invalid `signature_index`.  Use
     * ostree_gpg_verify_result_count_all() to find the number of signatures in
     * `result`.
     */
    get_all(signature_index: number): GLib.Variant
    /**
     * Searches `result` for a signature signed by `key_id`.  If a match is found,
     * the function returns %TRUE and sets `out_signature_index` so that further
     * signature details can be obtained through ostree_gpg_verify_result_get().
     * If no match is found, the function returns %FALSE and leaves
     * `out_signature_index` unchanged.
     */
    lookup(key_id: string): [ /* returnType */ boolean, /* out_signature_index */ number ]
    /**
     * Checks if the result contains at least one signature from the
     * trusted keyring.  You can call this function immediately after
     * ostree_repo_verify_summary() or ostree_repo_verify_commit_ext() -
     * it will handle the %NULL `result` and filled `error` too.
     */
    require_valid_signature(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of OSTree-1.0.OSTree.GpgVerifyResult */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgVerifyResult_ConstructProps)
    _init (config?: GpgVerifyResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Similar to ostree_gpg_verify_result_describe() but takes a #GVariant of
     * all attributes for a GPG signature instead of an #OstreeGpgVerifyResult
     * and signature index.
     * 
     * The `variant` <emphasis>MUST</emphasis> have been created by
     * ostree_gpg_verify_result_get_all().
     */
    static describe_variant(variant: GLib.Variant, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MutableTree_ConstructProps extends GObject.Object_ConstructProps {
}
class MutableTree {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.MutableTree */
    ensure_dir(name: string, out_subdir: MutableTree): boolean
    /**
     * Create all parent trees necessary for the given `split_path` to
     * exist.
     */
    ensure_parent_dirs(split_path: string[], metadata_checksum: string): [ /* returnType */ boolean, /* out_parent */ MutableTree ]
    get_contents_checksum(): string
    get_files(): GLib.HashTable
    get_metadata_checksum(): string
    get_subdirs(): GLib.HashTable
    lookup(name: string, out_file_checksum: string, out_subdir: MutableTree): boolean
    replace_file(name: string, checksum: string): boolean
    set_contents_checksum(checksum: string): void
    set_metadata_checksum(checksum: string): void
    /**
     * Traverse `start` number of elements starting from `split_path;` the
     * child will be returned in `out_subdir`.
     */
    walk(split_path: string[], start: number): [ /* returnType */ boolean, /* out_subdir */ MutableTree ]
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MutableTree_ConstructProps)
    _init (config?: MutableTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MutableTree
    static $gtype: GObject.Type
}
interface Repo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.Repo */
    path?: Gio.File
    remotes_config_dir?: string
    sysroot_path?: Gio.File
}
class Repo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Repo */
    abort_transaction(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a static delta.
     */
    add_gpg_signature_summary(key_id: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Append a GPG signature to a commit.
     */
    append_gpg_signature(commit_checksum: string, signature_bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Similar to ostree_repo_checkout_tree(), but uses directory-relative
     * paths for the destination, uses a new `OstreeRepoCheckoutAtOptions`,
     * and takes a commit checksum and optional subpath pair, rather than
     * requiring use of `GFile` APIs for the caller.
     * 
     * It also replaces ostree_repo_checkout_at() which was not safe to
     * use with GObject introspection.
     * 
     * Note in addition that unlike ostree_repo_checkout_tree(), the
     * default is not to use the repository-internal uncompressed objects
     * cache.
     */
    checkout_at(options: RepoCheckoutAtOptions | null, destination_dfd: number, destination_path: string, commit: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Call this after finishing a succession of checkout operations; it
     * will delete any currently-unused uncompressed objects from the
     * cache.
     */
    checkout_gc(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Check out `source` into `destination,` which must live on the
     * physical filesystem.  `source` may be any subdirectory of a given
     * commit.  The `mode` and `overwrite_mode` allow control over how the
     * files are checked out.
     */
    checkout_tree(mode: RepoCheckoutMode, overwrite_mode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, source_info: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Complete the transaction. Any refs set with
     * ostree_repo_transaction_set_ref() or
     * ostree_repo_transaction_set_refspec() will be written out.
     */
    commit_transaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_stats */ RepoTransactionStats | null ]
    copy_config(): GLib.KeyFile
    /**
     * Create the underlying structure on disk for the repository, and call
     * ostree_repo_open() on the result, preparing it for use.
     * 
     * Since version 2016.8, this function will succeed on an existing
     * repository, and finish creating any necessary files in a partially
     * created repository.  However, this function cannot change the mode
     * of an existing repository, and will silently ignore an attempt to
     * do so.
     */
    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Remove the object of type `objtype` with checksum `sha2`56
     * from the repository.  An error of type %G_IO_ERROR_NOT_FOUND
     * is thrown if the object does not exist.
     */
    delete_object(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    get_config(): GLib.KeyFile
    /**
     * In some cases it's useful for applications to access the repository
     * directly; for example, writing content into `repo/tmp` ensures it's
     * on the same filesystem.  Another case is detecting the mtime on the
     * repository (to see whether a ref was written).
     */
    get_dfd(): number
    /**
     * For more information see ostree_repo_set_disable_fsync().
     */
    get_disable_fsync(): boolean
    get_mode(): RepoMode
    /**
     * Before this function can be used, ostree_repo_init() must have been
     * called.
     */
    get_parent(): Repo
    get_path(): Gio.File
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as a boolean.
     * If the option is not set, `out_value` will be set to `default_value`.
     */
    get_remote_boolean_option(remote_name: string, option_name: string, default_value: boolean): [ /* returnType */ boolean, /* out_value */ boolean ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as an zero terminated array of strings.
     * If the option is not set, `out_value` will be set to %NULL.
     */
    get_remote_list_option(remote_name: string, option_name: string): [ /* returnType */ boolean, /* out_value */ string[] ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, or `default_value` if the remote exists but not the
     * option name.
     */
    get_remote_option(remote_name: string, option_name: string, default_value?: string | null): [ /* returnType */ boolean, /* out_value */ string ]
    /**
     * Verify `signatures` for `data` using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * 
     * The `remote_name` parameter can be %NULL. In that case it will do
     * the verifications using GPG keys in the keyrings of all remotes.
     */
    gpg_verify_data(remote_name: string | null, data: GLib.Bytes, signatures: GLib.Bytes, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Set `out_have_object` to %TRUE if `self` contains the given object;
     * %FALSE otherwise.
     */
    has_object(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_have_object */ boolean ]
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     */
    import_object_from(source: Repo, objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     */
    import_object_from_with_trust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable?: Gio.Cancellable | null): boolean
    is_system(): boolean
    /**
     * Returns whether the repository is writable by the current user.
     * If the repository is not writable, the `error` indicates why.
     */
    is_writable(): boolean
    /**
     * This function synchronously enumerates all commit objects starting
     * with `start,` returning data in `out_commits`.
     */
    list_commit_objects_starting_with(start: string, out_commits: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function synchronously enumerates all objects in the
     * repository, returning data in `out_objects`.  `out_objects`
     * maps from keys returned by ostree_object_name_serialize()
     * to #GVariant values of type %OSTREE_REPO_LIST_OBJECTS_VARIANT_TYPE.
     */
    list_objects(flags: RepoListObjectsFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.
     */
    list_refs(refspec_prefix?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.  Differently from
     * ostree_repo_list_refs(), the prefix will not be removed from the ref
     * name.
     */
    list_refs_ext(refspec_prefix: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * This function synchronously enumerates all static deltas in the
     * repository, returning its result in `out_deltas`.
     */
    list_static_delta_names(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_deltas */ string[] ]
    /**
     * A version of ostree_repo_load_variant() specialized to commits,
     * capable of returning extended state information.  Currently
     * the only extended state is %OSTREE_REPO_COMMIT_STATE_PARTIAL, which
     * means that only a sub-path of the commit is available.
     */
    load_commit(checksum: string): [ /* returnType */ boolean, /* out_commit */ GLib.Variant | null, /* out_state */ RepoCommitState | null ]
    /**
     * Load content object, decomposing it into three parts: the actual
     * content (for regular files), the metadata, and extended attributes.
     */
    load_file(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream | null, /* out_file_info */ Gio.FileInfo | null, /* out_xattrs */ GLib.Variant | null ]
    /**
     * Load object as a stream; useful when copying objects between
     * repositories.
     */
    load_object_stream(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_size */ number ]
    /**
     * Load the metadata object `sha2`56 of type `objtype,` storing the
     * result in `out_variant`.
     */
    load_variant(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
    /**
     * Attempt to load the metadata object `sha2`56 of type `objtype` if it
     * exists, storing the result in `out_variant`.  If it doesn't exist,
     * %NULL is returned.
     */
    load_variant_if_exists(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
    open(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Starts or resumes a transaction. In order to write to a repo, you
     * need to start a transaction. You can complete the transaction with
     * ostree_repo_commit_transaction(), or abort the transaction with
     * ostree_repo_abort_transaction().
     * 
     * Currently, transactions are not atomic, and aborting a transaction
     * will not erase any data you  write during the transaction.
     */
    prepare_transaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_transaction_resume */ boolean | null ]
    /**
     * Delete content from the repository.  By default, this function will
     * only delete "orphaned" objects not referred to by any commit.  This
     * can happen during a local commit operation, when we have written
     * content objects but not saved the commit referencing them.
     * 
     * However, if %OSTREE_REPO_PRUNE_FLAGS_REFS_ONLY is provided, instead
     * of traversing all commits, only refs will be used.  Particularly
     * when combined with `depth,` this is a convenient way to delete
     * history from the repository.
     * 
     * Use the %OSTREE_REPO_PRUNE_FLAGS_NO_PRUNE to just determine
     * statistics on objects that would be deleted, without actually
     * deleting them.
     */
    prune(flags: RepoPruneFlags, depth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects_total */ number, /* out_objects_pruned */ number, /* out_pruned_object_size_total */ number ]
    /**
     * Prune static deltas, if COMMIT is specified then delete static delta files only
     * targeting that commit; otherwise any static delta of non existing commits are
     * deleted.
     */
    prune_static_deltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Connect to the remote repository, fetching the specified set of
     * refs `refs_to_fetch`.  For each ref that is changed, download the
     * commit, all metadata, and all content objects, storing them safely
     * on disk in `self`.
     * 
     * If `flags` contains %OSTREE_REPO_PULL_FLAGS_MIRROR, and
     * the `refs_to_fetch` is %NULL, and the remote repository contains a
     * summary file, then all refs will be fetched.
     * 
     * If `flags` contains %OSTREE_REPO_PULL_FLAGS_COMMIT_ONLY, then only the
     * metadata for the commits in `refs_to_fetch` is pulled.
     * 
     * Warning: This API will iterate the thread default main context,
     * which is a bug, but kept for compatibility reasons.  If you want to
     * avoid this, use g_main_context_push_thread_default() to push a new
     * one around this call.
     */
    pull(remote_name: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This is similar to ostree_repo_pull(), but only fetches a single
     * subpath.
     */
    pull_one_dir(remote_name: string, dir_to_pull: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_pull(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     *   * refs (as): Array of string refs
     *   * flags (i): An instance of #OstreeRepoPullFlags
     *   * subdir (s): Pull just this subdirectory
     *   * override-remote-name (s): If local, add this remote to refspec
     *   * gpg-verify (b): GPG verify commits
     *   * gpg-verify-summary (b): GPG verify summary
     *   * depth (i): How far in the history to traverse; default is 0, -1 means infinite
     *   * disable-static-deltas (b): Do not use static deltas
     *   * require-static-deltas (b): Require static deltas
     *   * override-commit-ids (as): Array of specific commit IDs to fetch for refs
     *   * dry-run (b): Only print information on what will be downloaded (requires static deltas)
     *   * override-url (s): Fetch objects from this URL if remote specifies no metalink in options
     */
    pull_with_options(remote_name_or_baseurl: string, options: GLib.Variant, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Return the size in bytes of object with checksum `sha2`56, after any
     * compression has been applied.
     */
    query_object_storage_size(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_size */ number ]
    /**
     * Load the content for `rev` into `out_root`.
     */
    read_commit(ref: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_root */ Gio.File, /* out_commit */ string ]
    /**
     * OSTree commits can have arbitrary metadata associated; this
     * function retrieves them.  If none exists, `out_metadata` will be set
     * to %NULL.
     */
    read_commit_detached_metadata(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_metadata */ GLib.Variant ]
    /**
     * An OSTree repository can contain a high level "summary" file that
     * describes the available branches and other metadata.
     * 
     * It is regenerated automatically after a commit if
     * `core/commit-update-summary` is set.
     */
    regenerate_summary(additional_metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Create a new remote named `name` pointing to `url`.  If `options` is
     * provided, then it will be mapped to #GKeyFile entries, where the
     * GVariant dictionary key is an option string, and the value is
     * mapped as follows:
     *   * s: g_key_file_set_string()
     *   * b: g_key_file_set_boolean()
     *   * as: g_key_file_set_string_list()
     */
    remote_add(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * A combined function handling the equivalent of
     * ostree_repo_remote_add(), ostree_repo_remote_delete(), with more
     * options.
     */
    remote_change(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Delete the remote named `name`.  It is an error if the provided
     * remote does not exist.
     */
    remote_delete(name: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tries to fetch the summary file and any GPG signatures on the summary file
     * over HTTP, and returns the binary data in `out_summary` and `out_signatures`
     * respectively.
     * 
     * If no summary file exists on the remote server, `out_summary` is set to
     * `NULL`.  Likewise if the summary file is not signed, `out_signatures` is
     * set to `NULL`.  In either case the function still returns %TRUE.
     * 
     * Parse the summary data into a #GVariant using g_variant_new_from_bytes()
     * with #OSTREE_SUMMARY_GVARIANT_FORMAT as the format string.
     */
    remote_fetch_summary(name: string, out_summary?: GLib.Bytes | null, out_signatures?: GLib.Bytes | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_remote_fetch_summary(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     * - override-url (s): Fetch summary from this URL if remote specifies no metalink in options
     */
    remote_fetch_summary_with_options(name: string, options?: GLib.Variant | null, out_summary?: GLib.Bytes | null, out_signatures?: GLib.Bytes | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Return whether GPG verification is enabled for the remote named `name`
     * through `out_gpg_verify`.  It is an error if the provided remote does
     * not exist.
     */
    remote_get_gpg_verify(name: string): [ /* returnType */ boolean, /* out_gpg_verify */ boolean | null ]
    /**
     * Return whether GPG verification of the summary is enabled for the remote
     * named `name` through `out_gpg_verify_summary`.  It is an error if the provided
     * remote does not exist.
     */
    remote_get_gpg_verify_summary(name: string): [ /* returnType */ boolean, /* out_gpg_verify_summary */ boolean | null ]
    /**
     * Return the URL of the remote named `name` through `out_url`.  It is an
     * error if the provided remote does not exist.
     */
    remote_get_url(name: string): [ /* returnType */ boolean, /* out_url */ string | null ]
    /**
     * Imports one or more GPG keys from the open `source_stream,` or from the
     * user's personal keyring if `source_stream` is %NULL.  The `key_ids` array
     * can optionally restrict which keys are imported.  If `key_ids` is %NULL,
     * then all keys are imported.
     * 
     * The imported keys will be used to conduct GPG verification when pulling
     * from the remote named `name`.
     */
    remote_gpg_import(name: string, source_stream?: Gio.InputStream | null, key_ids?: string[] | null, out_imported?: number | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * List available remote names in an #OstreeRepo.  Remote names are sorted
     * alphabetically.  If no remotes are available the function returns %NULL.
     */
    remote_list(): string[]
    remote_list_refs(remote_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Will fall back on remote directory if cannot
     * find the given refspec in local.
     */
    resolve_rev(refspec: string, allow_noent: boolean): [ /* returnType */ boolean, /* out_rev */ string ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Differently from ostree_repo_resolve_rev(),
     * this will not fall back to searching through remote repos if a
     * local ref is specified but not found.
     */
    resolve_rev_ext(refspec: string, allow_noent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* out_rev */ string ]
    /**
     * When ostree builds a mutable tree from directory like in
     * ostree_repo_write_directory_to_mtree(), it has to scan all files that you
     * pass in and compute their checksums. If your commit contains hardlinks from
     * ostree's existing repo, ostree can build a mapping of device numbers and
     * inodes to their checksum.
     * 
     * There is an upfront cost to creating this mapping, as this will scan the
     * entire objects directory. If your commit is composed of mostly hardlinks to
     * existing ostree objects, then this will speed up considerably, so call it
     * before you call ostree_write_directory_to_mtree() or similar.
     */
    scan_hardlinks(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set a custom location for the cache directory used for e.g.
     * per-remote summary caches. Setting this manually is useful when
     * doing operations on a system repo as a user because you don't have
     * write permissions in the repo, where the cache is normally stored.
     */
    set_cache_dir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Disable requests to fsync() to stable storage during commits.  This
     * option should only be used by build system tools which are creating
     * disposable virtual machines, or have higher level mechanisms for
     * ensuring data consistency.
     */
    set_disable_fsync(disable_fsync: boolean): void
    /**
     * This is like ostree_repo_transaction_set_ref(), except it may be
     * invoked outside of a transaction.  This is presently safe for the
     * case where we're creating or overwriting an existing ref.
     */
    set_ref_immediate(remote: string | null, ref: string, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a commit.
     */
    sign_commit(commit_checksum: string, key_id: string, homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function is deprecated, sign the summary file instead.
     * Add a GPG signature to a static delta.
     */
    sign_delta(from_commit: string, to_commit: string, key_id: string, homedir: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Given a directory representing an already-downloaded static delta
     * on disk, apply it, generating a new commit.  The directory must be
     * named with the form "FROM-TO", where both are checksums, and it
     * must contain a file named "superblock", along with at least one part.
     */
    static_delta_execute_offline(dir_or_file: Gio.File, skip_validation: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Generate a lookaside "static delta" from `from` (%NULL means
     * from-empty) which can generate the objects in `to`.  This delta is
     * an optimization over fetching individual objects, and can be
     * conveniently stored and applied offline.
     * 
     * The `params` argument should be an a{sv}.  The following attributes
     * are known:
     *   - min-fallback-size: u: Minimum uncompressed size in megabytes to use fallback, 0 to disable fallbacks
     *   - max-chunk-size: u: Maximum size in megabytes of a delta part
     *   - max-bsdiff-size: u: Maximum size in megabytes to consider bsdiff compression
     *   for input files
     *   - compression: y: Compression type: 0=none, x=lzma, g=gzip
     *   - bsdiff-enabled: b: Enable bsdiff compression.  Default TRUE.
     *   - inline-parts: b: Put part data in header, to get a single file delta.  Default FALSE.
     *   - verbose: b: Print diagnostic messages.  Default FALSE.
     *   - endianness: b: Deltas use host byte order by default; this option allows choosing (G_BIG_ENDIAN or G_LITTLE_ENDIAN)
     *   - filename: ay: Save delta superblock to this filename, and parts in the same directory.  Default saves to repository.
     */
    static_delta_generate(opt: StaticDeltaGenerateOpt, from: string, to: string, metadata?: GLib.Variant | null, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * If `checksum` is not %NULL, then record it as the target of ref named
     * `ref;` if `remote` is provided, the ref will appear to originate from that
     * remote.
     * 
     * Otherwise, if `checksum` is %NULL, then record that the ref should
     * be deleted.
     * 
     * The change will not be written out immediately, but when the transaction
     * is completed with ostree_repo_commit_transaction(). If the transaction
     * is instead aborted with ostree_repo_abort_transaction(), no changes will
     * be made to the repository.
     */
    transaction_set_ref(remote: string | null, ref: string, checksum: string): void
    /**
     * Like ostree_repo_transaction_set_ref(), but takes concatenated
     * `refspec` format as input instead of separate remote and name
     * arguments.
     */
    transaction_set_refspec(refspec: string, checksum: string): void
    /**
     * Create a new set `out_reachable` containing all objects reachable
     * from `commit_checksum,` traversing `maxdepth` parent commits.
     */
    traverse_commit(commit_checksum: string, maxdepth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reachable */ GLib.HashTable ]
    /**
     * Check for a valid GPG signature on commit named by the ASCII
     * checksum `commit_checksum`.
     */
    verify_commit(commit_checksum: string, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Read GPG signature(s) on the commit named by the ASCII checksum
     * `commit_checksum` and return detailed results.
     */
    verify_commit_ext(commit_checksum: string, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Verify `signatures` for `summary` data using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     */
    verify_summary(remote_name: string, summary: GLib.Bytes, signatures: GLib.Bytes, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Import an archive file `archive` into the repository, and write its
     * file structure to `mtree`.
     */
    write_archive_to_mtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     */
    write_commit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string ]
    /**
     * Replace any existing metadata associated with commit referred to by
     * `checksum` with `metadata`.  If `metadata` is %NULL, then existing
     * data will be deleted.
     */
    write_commit_detached_metadata(checksum: string, metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     */
    write_commit_with_time(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string ]
    /**
     * Save `new_config` in place of this repository's config file.  Note
     * that `new_config` should not be modified after - this function
     * simply adds a reference.
     */
    write_config(new_config: GLib.KeyFile): boolean
    /**
     * Store the content object streamed as `object_input,`
     * with total length `length`.  The actual checksum will
     * be returned as `out_csum`.
     */
    write_content(expected_checksum: string | null, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array | null ]
    /**
     * Asynchronously store the content object `object`.  If provided, the
     * checksum `expected_checksum` will be verified.
     */
    write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an invocation of ostree_repo_write_content_async().
     */
    write_content_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ number ]
    /**
     * Store the content object streamed as `object_input,` with total
     * length `length`.  The given `checksum` will be treated as trusted.
     * 
     * This function should be used when importing file objects from local
     * disk, for example.
     */
    write_content_trusted(checksum: string, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store as objects all contents of the directory referred to by `dfd`
     * and `path` all children into the repository `self,` overlaying the
     * resulting filesystem hierarchy into `mtree`.
     */
    write_dfd_to_mtree(dfd: number, path: string, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store objects for `dir` and all children into the repository `self,`
     * overlaying the resulting filesystem hierarchy into `mtree`.
     */
    write_directory_to_mtree(dir: Gio.File, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant`.  Return the checksum
     * as `out_csum`.
     * 
     * If `expected_checksum` is not %NULL, verify it against the
     * computed checksum.
     */
    write_metadata(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array | null ]
    /**
     * Asynchronously store the metadata object `variant`.  If provided,
     * the checksum `expected_checksum` will be verified.
     */
    write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_metadata_finish(result: Gio.AsyncResult, out_csum: number): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     */
    write_metadata_stream_trusted(objtype: ObjectType, checksum: string, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     */
    write_metadata_trusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write all metadata objects for `mtree` to repo; the resulting
     * `out_file` points to the %OSTREE_OBJECT_TYPE_DIR_TREE object that
     * the `mtree` represented.
     */
    write_mtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_file */ Gio.File ]
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of OSTree-1.0.OSTree.Repo */
    /**
     * Emitted during a pull operation upon GPG verification (if enabled).
     * Applications can connect to this signal to output the verification
     * results if desired.
     * 
     * The signal will be emitted from whichever #GMainContext is the
     * thread-default at the point when ostree_repo_pull_with_options()
     * is called.
     */
    connect(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    connect_after(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    emit(sigName: "gpg-verify-result", checksum: string, result: GpgVerifyResult): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repo_ConstructProps)
    _init (config?: Repo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File): Repo
    static new_default(): Repo
    static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo
    static mode_from_string(mode: string, out_mode: RepoMode): boolean
    /**
     * Convenient "changed" callback for use with
     * ostree_async_progress_new_and_connect() when pulling from a remote
     * repository.
     * 
     * Depending on the state of the #OstreeAsyncProgress, either displays a
     * custom status message, or else outstanding fetch progress in bytes/sec,
     * or else outstanding content or metadata writes to the repository in
     * number of objects.
     * 
     * Compatibility note: this function previously assumed that `user_data`
     * was a pointer to a #GSConsole instance.  This is no longer the case,
     * and `user_data` is ignored.
     */
    static pull_default_console_progress_changed(progress: AsyncProgress, user_data?: object | null): void
    /**
     * This hash table is a set of #GVariant which can be accessed via
     * ostree_object_name_deserialize().
     */
    static traverse_new_reachable(): GLib.HashTable
    static $gtype: GObject.Type
}
interface RepoFile_ConstructProps extends GObject.Object_ConstructProps {
}
class RepoFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.RepoFile */
    ensure_resolved(): boolean
    get_checksum(): string
    get_repo(): Repo
    get_root(): RepoFile
    get_xattrs(out_xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    tree_find_child(name: string, is_dir: boolean, out_container: GLib.Variant): number
    tree_get_contents(): GLib.Variant
    tree_get_contents_checksum(): string
    tree_get_metadata(): GLib.Variant
    tree_get_metadata_checksum(): string
    tree_query_child(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, out_info: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    tree_set_metadata(checksum: string, metadata: GLib.Variant): void
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.File */
    /**
     * Gets an output stream for appending data to the file.
     * If the file doesn't already exist it is created.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level that
     * is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * Some file systems don't allow all file names, and may return an
     * %G_IO_ERROR_INVALID_FILENAME error. If the file is a directory the
     * %G_IO_ERROR_IS_DIRECTORY error will be returned. Other errors are
     * possible too, and depend on what kind of filesystem the file is on.
     */
    append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously opens `file` for appending.
     * 
     * For more details, see g_file_append_to() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_append_to_finish() to get the result
     * of the operation.
     */
    append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file append operation started with
     * g_file_append_to_async().
     */
    append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Prepares the file attribute query string for copying to `file`.
     * 
     * This function prepares an attribute query string to be
     * passed to g_file_query_info() to get a list of attributes
     * normally copied with the file (see g_file_copy_attributes()
     * for the detailed description). This function is used by the
     * implementation of g_file_copy_attributes() and is useful
     * when one needs to query and set the attributes in two
     * stages (e.g., for recursive move of a directory).
     */
    build_attribute_list_for_copy(flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): string
    /**
     * Copies the file `source` to the location specified by `destination`.
     * Can not handle recursive copies of directories.
     * 
     * If the flag #G_FILE_COPY_OVERWRITE is specified an already
     * existing `destination` file is overwritten.
     * 
     * If the flag #G_FILE_COPY_NOFOLLOW_SYMLINKS is specified then symlinks
     * will be copied as symlinks, otherwise the target of the
     * `source` symlink will be copied.
     * 
     * If the flag #G_FILE_COPY_ALL_METADATA is specified then all the metadata
     * that is possible to copy is copied, not just the default subset (which,
     * for instance, does not include the owner, see #GFileInfo).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored
     * by setting this to a #GFileProgressCallback function.
     * `progress_callback_data` will be passed to this function. It is guaranteed
     * that this callback will be called after all data has been transferred with
     * the total number of bytes copied during the operation.
     * 
     * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND error
     * is returned, independent on the status of the `destination`.
     * 
     * If #G_FILE_COPY_OVERWRITE is not specified and the target exists, then
     * the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * #G_FILE_COPY_OVERWRITE is specified and the target is a file, then the
     * %G_IO_ERROR_WOULD_RECURSE error is returned.
     * 
     * If you are interested in copying the #GFile object itself (not the on-disk
     * file), see g_file_dup().
     */
    copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    /**
     * Copies the file `source` to the location specified by `destination`
     * asynchronously. For details of the behaviour, see g_file_copy().
     * 
     * If `progress_callback` is not %NULL, then that function that will be called
     * just like in g_file_copy(). The callback will run in the default main context
     * of the thread calling g_file_copy_async() — the same context as `callback` is
     * run in.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * g_file_copy_finish() to get the result of the operation.
     */
    copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null): void
    /**
     * Copies the file attributes from `source` to `destination`.
     * 
     * Normally only a subset of the file attributes are copied,
     * those that are copies in a normal file copy operation
     * (which for instance does not include e.g. owner). However
     * if #G_FILE_COPY_ALL_METADATA is specified in `flags,` then
     * all the metadata that is possible to copy is copied. This
     * is useful when implementing move by copy + delete source.
     */
    copy_attributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Finishes copying the file started with g_file_copy_async().
     */
    copy_finish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new file and returns an output stream for writing to it.
     * The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level
     * that is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If a file or directory with this name already exists the
     * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
     * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
     * error, and if the name is to long %G_IO_ERROR_FILENAME_TOO_LONG will
     * be returned. Other errors are possible too, and depend on what kind
     * of filesystem the file is on.
     */
    create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously creates a new file and returns an output stream
     * for writing to it. The file must not already exist.
     * 
     * For more details, see g_file_create() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_create_finish() to get the result
     * of the operation.
     */
    create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_async().
     */
    create_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Creates a new file and returns a stream for reading and
     * writing to it. The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level
     * that is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If a file or directory with this name already exists, the
     * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
     * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
     * error, and if the name is too long, %G_IO_ERROR_FILENAME_TOO_LONG
     * will be returned. Other errors are possible too, and depend on what
     * kind of filesystem the file is on.
     * 
     * Note that in many non-local file cases read and write streams are
     * not supported, so make sure you really need to do read and write
     * streaming, rather than just opening for reading or writing.
     */
    create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously creates a new file and returns a stream
     * for reading and writing to it. The file must not already exist.
     * 
     * For more details, see g_file_create_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_create_readwrite_finish() to get
     * the result of the operation.
     */
    create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_readwrite_async().
     */
    create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Deletes a file. If the `file` is a directory, it will only be
     * deleted if it is empty. This has the same semantics as g_unlink().
     * 
     * If `file` doesn’t exist, %G_IO_ERROR_NOT_FOUND will be returned. This allows
     * for deletion to be implemented avoiding
     * [time-of-check to time-of-use races](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use):
     * |[
     * g_autoptr(GError) local_error = NULL;
     * if (!g_file_delete (my_file, my_cancellable, &local_error) &&
     *     !g_error_matches (local_error, G_IO_ERROR, G_IO_ERROR_NOT_FOUND))
     *   {
     *     // deletion failed for some reason other than the file not existing:
     *     // so report the error
     *     g_warning ("Failed to delete %s: %s",
     *                g_file_peek_path (my_file), local_error->message);
     *   }
     * ```
     * 
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    delete(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously delete a file. If the `file` is a directory, it will
     * only be deleted if it is empty.  This has the same semantics as
     * g_unlink().
     */
    delete_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes deleting a file started with g_file_delete_async().
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Duplicates a #GFile handle. This operation does not duplicate
     * the actual file or directory represented by the #GFile; see
     * g_file_copy() if attempting to copy a file.
     * 
     * g_file_dup() is useful when a second handle is needed to the same underlying
     * file, for use in a separate thread (#GFile is not thread-safe). For use
     * within the same thread, use g_object_ref() to increment the existing object’s
     * reference count.
     * 
     * This call does no blocking I/O.
     */
    dup(): Gio.File
    /**
     * Starts an asynchronous eject on a mountable.
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_eject_mountable_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    eject_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable().
     */
    eject_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Starts an asynchronous eject on a mountable.
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_eject_mountable_with_operation_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable_with_operation().
     */
    eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the requested information about the files in a directory.
     * The result is a #GFileEnumerator object that will give out
     * #GFileInfo objects for all the files in the directory.
     * 
     * The `attributes` value is a string that specifies the file
     * attributes that should be gathered. It is not an error if
     * it's not possible to read a particular requested attribute
     * from a file - it just won't be set. `attributes` should
     * be a comma-separated list of attributes or attribute wildcards.
     * The wildcard "*" means all attributes, and a wildcard like
     * "standard::*" means all attributes in the standard namespace.
     * An example attribute query be "standard::*,owner::user".
     * The standard attributes are available as defines, like
     * #G_FILE_ATTRIBUTE_STANDARD_NAME. #G_FILE_ATTRIBUTE_STANDARD_NAME should
     * always be specified if you plan to call g_file_enumerator_get_child() or
     * g_file_enumerator_iterate() on the returned enumerator.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. If the file is not a directory, the %G_IO_ERROR_NOT_DIRECTORY
     * error will be returned. Other errors are possible too.
     */
    enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    /**
     * Asynchronously gets the requested information about the files
     * in a directory. The result is a #GFileEnumerator object that will
     * give out #GFileInfo objects for all the files in the directory.
     * 
     * For more details, see g_file_enumerate_children() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_enumerate_children_finish() to get the result of
     * the operation.
     */
    enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async enumerate children operation.
     * See g_file_enumerate_children_async().
     */
    enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator
    /**
     * Checks if the two given #GFiles refer to the same file.
     * 
     * Note that two #GFiles that differ can still refer to the same
     * file on the filesystem due to various forms of filename
     * aliasing.
     * 
     * This call does no blocking I/O.
     */
    equal(file2: Gio.File): boolean
    /**
     * Gets a #GMount for the #GFile.
     * 
     * #GMount is returned only for user interesting locations, see
     * #GVolumeMonitor. If the #GFileIface for `file` does not have a #mount,
     * `error` will be set to %G_IO_ERROR_NOT_FOUND and %NULL #will be returned.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount
    /**
     * Asynchronously gets the mount for the file.
     * 
     * For more details, see g_file_find_enclosing_mount() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_find_enclosing_mount_finish() to
     * get the result of the operation.
     */
    find_enclosing_mount_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous find mount request.
     * See g_file_find_enclosing_mount_async().
     */
    find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount
    /**
     * Gets the base name (the last component of the path) for a given #GFile.
     * 
     * If called for the top level of a system (such as the filesystem root
     * or a uri like sftp://host/) it will return a single directory separator
     * (and on Windows, possibly a drive letter).
     * 
     * The base name is a byte string (not UTF-8). It has no defined encoding
     * or rules other than it may not contain zero bytes.  If you want to use
     * filenames in a user interface you should use the display name that you
     * can get by requesting the %G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME
     * attribute with g_file_query_info().
     * 
     * This call does no blocking I/O.
     */
    get_basename(): string | null
    /**
     * Gets a child of `file` with basename equal to `name`.
     * 
     * Note that the file with that specific name might not exist, but
     * you can still have a #GFile that points to it. You can use this
     * for instance to create that file.
     * 
     * This call does no blocking I/O.
     */
    get_child(name: string): Gio.File
    /**
     * Gets the child of `file` for a given `display_name` (i.e. a UTF-8
     * version of the name). If this function fails, it returns %NULL
     * and `error` will be set. This is very useful when constructing a
     * #GFile for a new file and the user entered the filename in the
     * user interface, for instance when you select a directory and
     * type a filename in the file selector.
     * 
     * This call does no blocking I/O.
     */
    get_child_for_display_name(display_name: string): Gio.File
    /**
     * Gets the parent directory for the `file`.
     * If the `file` represents the root directory of the
     * file system, then %NULL will be returned.
     * 
     * This call does no blocking I/O.
     */
    get_parent(): Gio.File | null
    /**
     * Gets the parse name of the `file`.
     * A parse name is a UTF-8 string that describes the
     * file such that one can get the #GFile back using
     * g_file_parse_name().
     * 
     * This is generally used to show the #GFile as a nice
     * full-pathname kind of string in a user interface,
     * like in a location entry.
     * 
     * For local files with names that can safely be converted
     * to UTF-8 the pathname is used, otherwise the IRI is used
     * (a form of URI that allows UTF-8 characters unescaped).
     * 
     * This call does no blocking I/O.
     */
    get_parse_name(): string
    /**
     * Gets the local pathname for #GFile, if one exists. If non-%NULL, this is
     * guaranteed to be an absolute, canonical path. It might contain symlinks.
     * 
     * This call does no blocking I/O.
     */
    get_path(): string | null
    /**
     * Gets the path for `descendant` relative to `parent`.
     * 
     * This call does no blocking I/O.
     */
    get_relative_path(descendant: Gio.File): string | null
    /**
     * Gets the URI for the `file`.
     * 
     * This call does no blocking I/O.
     */
    get_uri(): string
    /**
     * Gets the URI scheme for a #GFile.
     * RFC 3986 decodes the scheme as:
     * |[
     * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
     * ```
     * 
     * Common schemes include "file", "http", "ftp", etc.
     * 
     * The scheme can be different from the one used to construct the #GFile,
     * in that it might be replaced with one that is logically equivalent to the #GFile.
     * 
     * This call does no blocking I/O.
     */
    get_uri_scheme(): string | null
    /**
     * Checks if `file` has a parent, and optionally, if it is `parent`.
     * 
     * If `parent` is %NULL then this function returns %TRUE if `file` has any
     * parent at all.  If `parent` is non-%NULL then %TRUE is only returned
     * if `file` is an immediate child of `parent`.
     */
    has_parent(parent?: Gio.File | null): boolean
    /**
     * Checks whether `file` has the prefix specified by `prefix`.
     * 
     * In other words, if the names of initial elements of `file'`s
     * pathname match `prefix`. Only full pathname elements are matched,
     * so a path like /foo is not considered a prefix of /foobar, only
     * of /foo/bar.
     * 
     * A #GFile is not a prefix of itself. If you want to check for
     * equality, use g_file_equal().
     * 
     * This call does no I/O, as it works purely on names. As such it can
     * sometimes return %FALSE even if `file` is inside a `prefix` (from a
     * filesystem point of view), because the prefix of `file` is an alias
     * of `prefix`.
     */
    has_prefix(prefix: Gio.File): boolean
    /**
     * Checks to see if a #GFile has a given URI scheme.
     * 
     * This call does no blocking I/O.
     */
    has_uri_scheme(uri_scheme: string): boolean
    /**
     * Creates a hash value for a #GFile.
     * 
     * This call does no blocking I/O.
     */
    hash(): number
    /**
     * Checks to see if a file is native to the platform.
     * 
     * A native file is one expressed in the platform-native filename format,
     * e.g. "C:\Windows" or "/usr/bin/". This does not mean the file is local,
     * as it might be on a locally mounted remote filesystem.
     * 
     * On some systems non-native files may be available using the native
     * filesystem via a userspace filesystem (FUSE), in these cases this call
     * will return %FALSE, but g_file_get_path() will still return a native path.
     * 
     * This call does no blocking I/O.
     */
    is_native(): boolean
    /**
     * Loads the contents of `file` and returns it as #GBytes.
     * 
     * If `file` is a resource:// based URI, the resulting bytes will reference the
     * embedded resource instead of a copy. Otherwise, this is equivalent to calling
     * g_file_load_contents() and g_bytes_new_take().
     * 
     * For resources, `etag_out` will be set to %NULL.
     * 
     * The data contained in the resulting #GBytes is always zero-terminated, but
     * this is not included in the #GBytes length. The resulting #GBytes should be
     * freed with g_bytes_unref() when no longer in use.
     */
    load_bytes(cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Bytes, /* etag_out */ string | null ]
    /**
     * Asynchronously loads the contents of `file` as #GBytes.
     * 
     * If `file` is a resource:// based URI, the resulting bytes will reference the
     * embedded resource instead of a copy. Otherwise, this is equivalent to calling
     * g_file_load_contents_async() and g_bytes_new_take().
     * 
     * `callback` should call g_file_load_bytes_finish() to get the result of this
     * asynchronous operation.
     * 
     * See g_file_load_bytes() for more information.
     */
    load_bytes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request to g_file_load_bytes_async().
     * 
     * For resources, `etag_out` will be set to %NULL.
     * 
     * The data contained in the resulting #GBytes is always zero-terminated, but
     * this is not included in the #GBytes length. The resulting #GBytes should be
     * freed with g_bytes_unref() when no longer in use.
     * 
     * See g_file_load_bytes() for more information.
     */
    load_bytes_finish(result: Gio.AsyncResult): [ /* returnType */ GLib.Bytes, /* etag_out */ string | null ]
    /**
     * Loads the content of the file into memory. The data is always
     * zero-terminated, but this is not included in the resultant `length`.
     * The returned `contents` should be freed with g_free() when no longer
     * needed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    load_contents(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    /**
     * Starts an asynchronous load of the `file'`s contents.
     * 
     * For more details, see g_file_load_contents() which is
     * the synchronous version of this call.
     * 
     * When the load operation has completed, `callback` will be called
     * with `user` data. To finish the operation, call
     * g_file_load_contents_finish() with the #GAsyncResult returned by
     * the `callback`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    load_contents_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous load of the `file'`s contents.
     * The contents are placed in `contents,` and `length` is set to the
     * size of the `contents` string. The `contents` should be freed with
     * g_free() when no longer needed. If `etag_out` is present, it will be
     * set to the new entity tag for the `file`.
     */
    load_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    /**
     * Finishes an asynchronous partial load operation that was started
     * with g_file_load_partial_contents_async(). The data is always
     * zero-terminated, but this is not included in the resultant `length`.
     * The returned `contents` should be freed with g_free() when no longer
     * needed.
     */
    load_partial_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    /**
     * Creates a directory. Note that this will only create a child directory
     * of the immediate parent directory of the path or URI given by the #GFile.
     * To recursively create directories, see g_file_make_directory_with_parents().
     * This function will fail if the parent directory does not exist, setting
     * `error` to %G_IO_ERROR_NOT_FOUND. If the file system doesn't support
     * creating directories, this function will fail, setting `error` to
     * %G_IO_ERROR_NOT_SUPPORTED.
     * 
     * For a local #GFile the newly created directory will have the default
     * (current) ownership and permissions of the current process.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    make_directory(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates a directory.
     */
    make_directory_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous directory creation, started with
     * g_file_make_directory_async().
     */
    make_directory_finish(result: Gio.AsyncResult): boolean
    /**
     * Creates a directory and any parent directories that may not
     * exist similar to 'mkdir -p'. If the file system does not support
     * creating directories, this function will fail, setting `error` to
     * %G_IO_ERROR_NOT_SUPPORTED. If the directory itself already exists,
     * this function will fail setting `error` to %G_IO_ERROR_EXISTS, unlike
     * the similar g_mkdir_with_parents().
     * 
     * For a local #GFile the newly created directories will have the default
     * (current) ownership and permissions of the current process.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    make_directory_with_parents(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Creates a symbolic link named `file` which contains the string
     * `symlink_value`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Collects the results from an earlier call to
     * g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for
     * more information.
     */
    measure_disk_usage_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    /**
     * Obtains a file or directory monitor for the given file,
     * depending on the type of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    monitor(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Obtains a directory monitor for the given file.
     * This may fail if directory monitoring is not supported.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * It does not make sense for `flags` to contain
     * %G_FILE_MONITOR_WATCH_HARD_LINKS, since hard links can not be made to
     * directories.  It is not possible to monitor all the files in a
     * directory for changes made via hard links; if you want to do this then
     * you must register individual watches with g_file_monitor().
     */
    monitor_directory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Obtains a file monitor for the given file. If no file notification
     * mechanism exists, then regular polling of the file is used.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `flags` contains %G_FILE_MONITOR_WATCH_HARD_LINKS then the monitor
     * will also attempt to report changes made to the file via another
     * filename (ie, a hard link). Without this flag, you can only rely on
     * changes made through the filename contained in `file` to be
     * reported. Using this flag may result in an increase in resource
     * usage, and may not have any effect depending on the #GFileMonitor
     * backend and/or filesystem type.
     */
    monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Starts a `mount_operation,` mounting the volume that contains
     * the file `location`.
     * 
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_mount_enclosing_volume_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation started by g_file_mount_enclosing_volume().
     */
    mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean
    /**
     * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
     * Using `mount_operation,` you can request callbacks when, for instance,
     * passwords are needed during authentication.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    mount_mountable(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation. See g_file_mount_mountable() for details.
     * 
     * Finish an asynchronous mount operation that was started
     * with g_file_mount_mountable().
     */
    mount_mountable_finish(result: Gio.AsyncResult): Gio.File
    /**
     * Tries to move the file or directory `source` to the location specified
     * by `destination`. If native move operations are supported then this is
     * used, otherwise a copy + delete fallback is used. The native
     * implementation may support moving directories (for instance on moves
     * inside the same filesystem), but the fallback code does not.
     * 
     * If the flag #G_FILE_COPY_OVERWRITE is specified an already
     * existing `destination` file is overwritten.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored
     * by setting this to a #GFileProgressCallback function.
     * `progress_callback_data` will be passed to this function. It is
     * guaranteed that this callback will be called after all data has been
     * transferred with the total number of bytes copied during the operation.
     * 
     * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND
     * error is returned, independent on the status of the `destination`.
     * 
     * If #G_FILE_COPY_OVERWRITE is not specified and the target exists,
     * then the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * #G_FILE_COPY_OVERWRITE is specified and the target is a file, then
     * the %G_IO_ERROR_WOULD_RECURSE error may be returned (if the native
     * move operation isn't available).
     */
    move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    /**
     * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
     * 
     * If `progress_callback` is not %NULL, then that function that will be called
     * just like in g_file_move(). The callback will run in the default main context
     * of the thread calling g_file_move_async() — the same context as `callback` is
     * run in.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * g_file_move_finish() to get the result of the operation.
     */
    move_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file movement, started with
     * g_file_move_async().
     */
    move_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens an existing file for reading and writing. The result is
     * a #GFileIOStream that can be used to read and write the contents
     * of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error will be returned. Other errors are possible too, and depend on
     * what kind of filesystem the file is on. Note that in many non-local
     * file cases read and write streams are not supported, so make sure you
     * really need to do read and write streaming, rather than just opening
     * for reading or writing.
     */
    open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously opens `file` for reading and writing.
     * 
     * For more details, see g_file_open_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_open_readwrite_finish() to get
     * the result of the operation.
     */
    open_readwrite_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_open_readwrite_async().
     */
    open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Exactly like g_file_get_path(), but caches the result via
     * g_object_set_qdata_full().  This is useful for example in C
     * applications which mix `g_file_*` APIs with native ones.  It
     * also avoids an extra duplicated string when possible, so will be
     * generally more efficient.
     * 
     * This call does no blocking I/O.
     */
    peek_path(): string | null
    /**
     * Polls a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a poll operation. See g_file_poll_mountable() for details.
     * 
     * Finish an asynchronous poll operation that was polled
     * with g_file_poll_mountable().
     */
    poll_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Returns the #GAppInfo that is registered as the default
     * application to handle the file specified by `file`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    query_default_handler(cancellable?: Gio.Cancellable | null): Gio.AppInfo
    /**
     * Async version of g_file_query_default_handler().
     */
    query_default_handler_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a g_file_query_default_handler_async() operation.
     */
    query_default_handler_finish(result: Gio.AsyncResult): Gio.AppInfo
    /**
     * Utility function to check if a particular file exists. This is
     * implemented using g_file_query_info() and as such does blocking I/O.
     * 
     * Note that in many cases it is [racy to first check for file existence](https://en.wikipedia.org/wiki/Time_of_check_to_time_of_use)
     * and then execute something based on the outcome of that, because the
     * file might have been created or removed in between the operations. The
     * general approach to handling that is to not check, but just do the
     * operation and handle the errors as they come.
     * 
     * As an example of race-free checking, take the case of reading a file,
     * and if it doesn't exist, creating it. There are two racy versions: read
     * it, and on error create it; and: check if it exists, if not create it.
     * These can both result in two processes creating the file (with perhaps
     * a partially written file as the result). The correct approach is to
     * always try to create the file with g_file_create() which will either
     * atomically create the file or fail with a %G_IO_ERROR_EXISTS error.
     * 
     * However, in many cases an existence check is useful in a user interface,
     * for instance to make a menu item sensitive/insensitive, so that you don't
     * have to fool users that something is possible and then just show an error
     * dialog. If you do this, you should make sure to also handle the errors
     * that can happen due to races when you execute the operation.
     */
    query_exists(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Utility function to inspect the #GFileType of a file. This is
     * implemented using g_file_query_info() and as such does blocking I/O.
     * 
     * The primary use case of this method is to check if a file is
     * a regular file, directory, or symlink.
     */
    query_file_type(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType
    /**
     * Similar to g_file_query_info(), but obtains information
     * about the filesystem the `file` is on, rather than the file itself.
     * For instance the amount of space available and the type of
     * the filesystem.
     * 
     * The `attributes` value is a string that specifies the attributes
     * that should be gathered. It is not an error if it's not possible
     * to read a particular requested attribute from a file - it just
     * won't be set. `attributes` should be a comma-separated list of
     * attributes or attribute wildcards. The wildcard "*" means all
     * attributes, and a wildcard like "filesystem::*" means all attributes
     * in the filesystem namespace. The standard namespace for filesystem
     * attributes is "filesystem". Common attributes of interest are
     * #G_FILE_ATTRIBUTE_FILESYSTEM_SIZE (the total size of the filesystem
     * in bytes), #G_FILE_ATTRIBUTE_FILESYSTEM_FREE (number of bytes available),
     * and #G_FILE_ATTRIBUTE_FILESYSTEM_TYPE (type of the filesystem).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. Other errors are possible too, and depend on what
     * kind of filesystem the file is on.
     */
    query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    /**
     * Asynchronously gets the requested information about the filesystem
     * that the specified `file` is on. The result is a #GFileInfo object
     * that contains key-value attributes (such as type or size for the
     * file).
     * 
     * For more details, see g_file_query_filesystem_info() which is the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_query_info_finish() to get the result of the
     * operation.
     */
    query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filesystem info query.
     * See g_file_query_filesystem_info_async().
     */
    query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    /**
     * Gets the requested information about specified `file`.
     * The result is a #GFileInfo object that contains key-value
     * attributes (such as the type or size of the file).
     * 
     * The `attributes` value is a string that specifies the file
     * attributes that should be gathered. It is not an error if
     * it's not possible to read a particular requested attribute
     * from a file - it just won't be set. `attributes` should be a
     * comma-separated list of attributes or attribute wildcards.
     * The wildcard "*" means all attributes, and a wildcard like
     * "standard::*" means all attributes in the standard namespace.
     * An example attribute query be "standard::*,owner::user".
     * The standard attributes are available as defines, like
     * #G_FILE_ATTRIBUTE_STANDARD_NAME.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * For symlinks, normally the information about the target of the
     * symlink is returned, rather than information about the symlink
     * itself. However if you pass #G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS
     * in `flags` the information about the symlink itself will be returned.
     * Also, for symlinks that point to non-existing files the information
     * about the symlink itself will be returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
     * returned. Other errors are possible too, and depend on what kind of
     * filesystem the file is on.
     */
    query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    /**
     * Asynchronously gets the requested information about specified `file`.
     * The result is a #GFileInfo object that contains key-value attributes
     * (such as type or size for the file).
     * 
     * For more details, see g_file_query_info() which is the synchronous
     * version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_query_info_finish() to get the result of the operation.
     */
    query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file info query.
     * See g_file_query_info_async().
     */
    query_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    /**
     * Obtain the list of settable attributes for the file.
     * 
     * Returns the type and full attribute name of all the attributes
     * that can be set on this file. This doesn't mean setting it will
     * always succeed though, you might get an access failure, or some
     * specific file may not support a specific attribute.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    /**
     * Obtain the list of attribute namespaces where new attributes
     * can be created by a user. An example of this is extended
     * attributes (in the "xattr" namespace).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    /**
     * Opens a file for reading. The result is a #GFileInputStream that
     * can be used to read the contents of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
     * returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error will be returned. Other errors are possible too, and depend
     * on what kind of filesystem the file is on.
     */
    read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    /**
     * Asynchronously opens `file` for reading.
     * 
     * For more details, see g_file_read() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_read_finish() to get the result
     * of the operation.
     */
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_read_async().
     */
    read_finish(res: Gio.AsyncResult): Gio.FileInputStream
    /**
     * Returns an output stream for overwriting the file, possibly
     * creating a backup copy of the file first. If the file doesn't exist,
     * it will be created.
     * 
     * This will try to replace the file in the safest way possible so
     * that any errors during the writing will not affect an already
     * existing copy of the file. For instance, for local files it
     * may write to a temporary file and then atomically rename over
     * the destination when the stream is closed.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level that
     * is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If you pass in a non-%NULL `etag` value and `file` already exists, then
     * this value is compared to the current entity tag of the file, and if
     * they differ an %G_IO_ERROR_WRONG_ETAG error is returned. This
     * generally means that the file has been changed since you last read
     * it. You can get the new etag from g_file_output_stream_get_etag()
     * after you've finished writing and closed the #GFileOutputStream. When
     * you load a new file you can use g_file_input_stream_query_info() to
     * get the etag of the file.
     * 
     * If `make_backup` is %TRUE, this function will attempt to make a
     * backup of the current file before overwriting it. If this fails
     * a %G_IO_ERROR_CANT_CREATE_BACKUP error will be returned. If you
     * want to replace anyway, try again with `make_backup` set to %FALSE.
     * 
     * If the file is a directory the %G_IO_ERROR_IS_DIRECTORY error will
     * be returned, and if the file is some other form of non-regular file
     * then a %G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some
     * file systems don't allow all file names, and may return an
     * %G_IO_ERROR_INVALID_FILENAME error, and if the name is to long
     * %G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are
     * possible too, and depend on what kind of filesystem the file is on.
     */
    replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously overwrites the file, replacing the contents,
     * possibly creating a backup copy of the file first.
     * 
     * For more details, see g_file_replace() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_replace_finish() to get the result
     * of the operation.
     */
    replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Replaces the contents of `file` with `contents` of `length` bytes.
     * 
     * If `etag` is specified (not %NULL), any existing file must have that etag,
     * or the error %G_IO_ERROR_WRONG_ETAG will be returned.
     * 
     * If `make_backup` is %TRUE, this function will attempt to make a backup
     * of `file`. Internally, it uses g_file_replace(), so will try to replace the
     * file contents in the safest way possible. For example, atomic renames are
     * used when replacing local files’ contents.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * The returned `new_etag` can be used to verify that the file hasn't
     * changed the next time it is saved over.
     */
    replace_contents(contents: Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* new_etag */ string | null ]
    /**
     * Starts an asynchronous replacement of `file` with the given
     * `contents` of `length` bytes. `etag` will replace the document's
     * current entity tag.
     * 
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_replace_contents_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `make_backup` is %TRUE, this function will attempt to
     * make a backup of `file`.
     * 
     * Note that no copy of `contents` will be made, so it must stay valid
     * until `callback` is called. See g_file_replace_contents_bytes_async()
     * for a #GBytes version that will automatically hold a reference to the
     * contents (without copying) for the duration of the call.
     */
    replace_contents_async(contents: Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Same as g_file_replace_contents_async() but takes a #GBytes input instead.
     * This function will keep a ref on `contents` until the operation is done.
     * Unlike g_file_replace_contents_async() this allows forgetting about the
     * content without waiting for the callback.
     * 
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_replace_contents_finish().
     */
    replace_contents_bytes_async(contents: GLib.Bytes, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous replace of the given `file`. See
     * g_file_replace_contents_async(). Sets `new_etag` to the new entity
     * tag for the document, if present.
     */
    replace_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* new_etag */ string | null ]
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_async().
     */
    replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Returns an output stream for overwriting the file in readwrite mode,
     * possibly creating a backup copy of the file first. If the file doesn't
     * exist, it will be created.
     * 
     * For details about the behaviour, see g_file_replace() which does the
     * same thing but returns an output stream only.
     * 
     * Note that in many non-local file cases read and write streams are not
     * supported, so make sure you really need to do read and write streaming,
     * rather than just opening for reading or writing.
     */
    replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously overwrites the file in read-write mode,
     * replacing the contents, possibly creating a backup copy
     * of the file first.
     * 
     * For more details, see g_file_replace_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_replace_readwrite_finish() to get
     * the result of the operation.
     */
    replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_readwrite_async().
     */
    replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Resolves a relative path for `file` to an absolute path.
     * 
     * This call does no blocking I/O.
     * 
     * If the `relative_path` is an absolute path name, the resolution
     * is done absolutely (without taking `file` path as base).
     */
    resolve_relative_path(relative_path: string): Gio.File
    /**
     * Sets an attribute in the file with attribute name `attribute` to `value_p`.
     * 
     * Some attributes can be unset by setting `type` to
     * %G_FILE_ATTRIBUTE_TYPE_INVALID and `value_p` to %NULL.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_BYTE_STRING to `value`.
     * If `attribute` is of a different type, this operation will fail,
     * returning %FALSE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_byte_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT32 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_int32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT64 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_int64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_STRING to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT32 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_uint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT64 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attribute_uint64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sets the attributes of `file` with `info`.
     * 
     * For more details, see g_file_set_attributes_from_info(),
     * which is the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_attributes_finish() to get
     * the result of the operation.
     */
    set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting an attribute started in g_file_set_attributes_async().
     */
    set_attributes_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
    /**
     * Tries to set all attributes in the #GFileInfo on the target
     * values, not stopping on the first error.
     * 
     * If there is any error during this operation then `error` will
     * be set to the first error. Error on particular fields are flagged
     * by setting the "status" field in the attribute value to
     * %G_FILE_ATTRIBUTE_STATUS_ERROR_SETTING, which means you can
     * also detect further errors.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Renames `file` to the specified display name.
     * 
     * The display name is converted from UTF-8 to the correct encoding
     * for the target filesystem if possible and the `file` is renamed to this.
     * 
     * If you want to implement a rename operation in the user interface the
     * edit name (#G_FILE_ATTRIBUTE_STANDARD_EDIT_NAME) should be used as the
     * initial value in the rename widget, and then the result after editing
     * should be passed to g_file_set_display_name().
     * 
     * On success the resulting converted filename is returned.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronously sets the display name for a given #GFile.
     * 
     * For more details, see g_file_set_display_name() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_display_name_finish() to get
     * the result of the operation.
     */
    set_display_name_async(display_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting a display name started with
     * g_file_set_display_name_async().
     */
    set_display_name_finish(res: Gio.AsyncResult): Gio.File
    /**
     * Starts a file of type #G_FILE_TYPE_MOUNTABLE.
     * Using `start_operation,` you can request callbacks when, for instance,
     * passwords are needed during authentication.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    start_mountable(flags: Gio.DriveStartFlags, start_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a start operation. See g_file_start_mountable() for details.
     * 
     * Finish an asynchronous start operation that was started
     * with g_file_start_mountable().
     */
    start_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Stops a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_stop_mountable_finish() to get
     * the result of the operation.
     */
    stop_mountable(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stop operation, see g_file_stop_mountable() for details.
     * 
     * Finish an asynchronous stop operation that was started
     * with g_file_stop_mountable().
     */
    stop_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks if `file` supports
     * [thread-default contexts][g-main-context-push-thread-default-context].
     * If this returns %FALSE, you cannot perform asynchronous operations on
     * `file` in a thread that has a thread-default context.
     */
    supports_thread_contexts(): boolean
    /**
     * Sends `file` to the "Trashcan", if possible. This is similar to
     * deleting it, but the user can recover it before emptying the trashcan.
     * Not all file systems support trashing, so this call can return the
     * %G_IO_ERROR_NOT_SUPPORTED error. Since GLib 2.66, the `x-gvfs-notrash` unix
     * mount option can be used to disable g_file_trash() support for certain
     * mounts, the %G_IO_ERROR_NOT_SUPPORTED error will be returned in that case.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    trash(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends `file` to the Trash location, if possible.
     */
    trash_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file trashing operation, started with
     * g_file_trash_async().
     */
    trash_finish(result: Gio.AsyncResult): boolean
    /**
     * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_unmount_mountable_finish() to get
     * the result of the operation.
     */
    unmount_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation, see g_file_unmount_mountable() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable().
     */
    unmount_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Unmounts a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_unmount_mountable_finish() to get
     * the result of the operation.
     */
    unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation,
     * see g_file_unmount_mountable_with_operation() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable_with_operation().
     */
    unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of OSTree-1.0.OSTree.RepoFile */
    /**
     * Gets an output stream for appending data to the file.
     * If the file doesn't already exist it is created.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level that
     * is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * Some file systems don't allow all file names, and may return an
     * %G_IO_ERROR_INVALID_FILENAME error. If the file is a directory the
     * %G_IO_ERROR_IS_DIRECTORY error will be returned. Other errors are
     * possible too, and depend on what kind of filesystem the file is on.
     */
    vfunc_append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously opens `file` for appending.
     * 
     * For more details, see g_file_append_to() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_append_to_finish() to get the result
     * of the operation.
     */
    vfunc_append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file append operation started with
     * g_file_append_to_async().
     */
    vfunc_append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Copies the file `source` to the location specified by `destination`.
     * Can not handle recursive copies of directories.
     * 
     * If the flag #G_FILE_COPY_OVERWRITE is specified an already
     * existing `destination` file is overwritten.
     * 
     * If the flag #G_FILE_COPY_NOFOLLOW_SYMLINKS is specified then symlinks
     * will be copied as symlinks, otherwise the target of the
     * `source` symlink will be copied.
     * 
     * If the flag #G_FILE_COPY_ALL_METADATA is specified then all the metadata
     * that is possible to copy is copied, not just the default subset (which,
     * for instance, does not include the owner, see #GFileInfo).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored
     * by setting this to a #GFileProgressCallback function.
     * `progress_callback_data` will be passed to this function. It is guaranteed
     * that this callback will be called after all data has been transferred with
     * the total number of bytes copied during the operation.
     * 
     * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND error
     * is returned, independent on the status of the `destination`.
     * 
     * If #G_FILE_COPY_OVERWRITE is not specified and the target exists, then
     * the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * #G_FILE_COPY_OVERWRITE is specified and the target is a file, then the
     * %G_IO_ERROR_WOULD_RECURSE error is returned.
     * 
     * If you are interested in copying the #GFile object itself (not the on-disk
     * file), see g_file_dup().
     */
    vfunc_copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    /**
     * Copies the file `source` to the location specified by `destination`
     * asynchronously. For details of the behaviour, see g_file_copy().
     * 
     * If `progress_callback` is not %NULL, then that function that will be called
     * just like in g_file_copy(). The callback will run in the default main context
     * of the thread calling g_file_copy_async() — the same context as `callback` is
     * run in.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * g_file_copy_finish() to get the result of the operation.
     */
    vfunc_copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null): void
    /**
     * Finishes copying the file started with g_file_copy_async().
     */
    vfunc_copy_finish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new file and returns an output stream for writing to it.
     * The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level
     * that is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If a file or directory with this name already exists the
     * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
     * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
     * error, and if the name is to long %G_IO_ERROR_FILENAME_TOO_LONG will
     * be returned. Other errors are possible too, and depend on what kind
     * of filesystem the file is on.
     */
    vfunc_create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously creates a new file and returns an output stream
     * for writing to it. The file must not already exist.
     * 
     * For more details, see g_file_create() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_create_finish() to get the result
     * of the operation.
     */
    vfunc_create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_async().
     */
    vfunc_create_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Creates a new file and returns a stream for reading and
     * writing to it. The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level
     * that is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If a file or directory with this name already exists, the
     * %G_IO_ERROR_EXISTS error will be returned. Some file systems don't
     * allow all file names, and may return an %G_IO_ERROR_INVALID_FILENAME
     * error, and if the name is too long, %G_IO_ERROR_FILENAME_TOO_LONG
     * will be returned. Other errors are possible too, and depend on what
     * kind of filesystem the file is on.
     * 
     * Note that in many non-local file cases read and write streams are
     * not supported, so make sure you really need to do read and write
     * streaming, rather than just opening for reading or writing.
     */
    vfunc_create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously creates a new file and returns a stream
     * for reading and writing to it. The file must not already exist.
     * 
     * For more details, see g_file_create_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_create_readwrite_finish() to get
     * the result of the operation.
     */
    vfunc_create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_readwrite_async().
     */
    vfunc_create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Deletes a file. If the `file` is a directory, it will only be
     * deleted if it is empty. This has the same semantics as g_unlink().
     * 
     * If `file` doesn’t exist, %G_IO_ERROR_NOT_FOUND will be returned. This allows
     * for deletion to be implemented avoiding
     * [time-of-check to time-of-use races](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use):
     * |[
     * g_autoptr(GError) local_error = NULL;
     * if (!g_file_delete (my_file, my_cancellable, &local_error) &&
     *     !g_error_matches (local_error, G_IO_ERROR, G_IO_ERROR_NOT_FOUND))
     *   {
     *     // deletion failed for some reason other than the file not existing:
     *     // so report the error
     *     g_warning ("Failed to delete %s: %s",
     *                g_file_peek_path (my_file), local_error->message);
     *   }
     * ```
     * 
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_delete_file(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously delete a file. If the `file` is a directory, it will
     * only be deleted if it is empty.  This has the same semantics as
     * g_unlink().
     */
    vfunc_delete_file_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes deleting a file started with g_file_delete_async().
     */
    vfunc_delete_file_finish(result: Gio.AsyncResult): boolean
    /**
     * Duplicates a #GFile handle. This operation does not duplicate
     * the actual file or directory represented by the #GFile; see
     * g_file_copy() if attempting to copy a file.
     * 
     * g_file_dup() is useful when a second handle is needed to the same underlying
     * file, for use in a separate thread (#GFile is not thread-safe). For use
     * within the same thread, use g_object_ref() to increment the existing object’s
     * reference count.
     * 
     * This call does no blocking I/O.
     */
    vfunc_dup(): Gio.File
    /**
     * Starts an asynchronous eject on a mountable.
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_eject_mountable_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_eject_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable().
     */
    vfunc_eject_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Starts an asynchronous eject on a mountable.
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_eject_mountable_with_operation_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable_with_operation().
     */
    vfunc_eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the requested information about the files in a directory.
     * The result is a #GFileEnumerator object that will give out
     * #GFileInfo objects for all the files in the directory.
     * 
     * The `attributes` value is a string that specifies the file
     * attributes that should be gathered. It is not an error if
     * it's not possible to read a particular requested attribute
     * from a file - it just won't be set. `attributes` should
     * be a comma-separated list of attributes or attribute wildcards.
     * The wildcard "*" means all attributes, and a wildcard like
     * "standard::*" means all attributes in the standard namespace.
     * An example attribute query be "standard::*,owner::user".
     * The standard attributes are available as defines, like
     * #G_FILE_ATTRIBUTE_STANDARD_NAME. #G_FILE_ATTRIBUTE_STANDARD_NAME should
     * always be specified if you plan to call g_file_enumerator_get_child() or
     * g_file_enumerator_iterate() on the returned enumerator.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. If the file is not a directory, the %G_IO_ERROR_NOT_DIRECTORY
     * error will be returned. Other errors are possible too.
     */
    vfunc_enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    /**
     * Asynchronously gets the requested information about the files
     * in a directory. The result is a #GFileEnumerator object that will
     * give out #GFileInfo objects for all the files in the directory.
     * 
     * For more details, see g_file_enumerate_children() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_enumerate_children_finish() to get the result of
     * the operation.
     */
    vfunc_enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async enumerate children operation.
     * See g_file_enumerate_children_async().
     */
    vfunc_enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator
    /**
     * Checks if the two given #GFiles refer to the same file.
     * 
     * Note that two #GFiles that differ can still refer to the same
     * file on the filesystem due to various forms of filename
     * aliasing.
     * 
     * This call does no blocking I/O.
     */
    vfunc_equal(file2: Gio.File): boolean
    /**
     * Gets a #GMount for the #GFile.
     * 
     * #GMount is returned only for user interesting locations, see
     * #GVolumeMonitor. If the #GFileIface for `file` does not have a #mount,
     * `error` will be set to %G_IO_ERROR_NOT_FOUND and %NULL #will be returned.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount
    /**
     * Asynchronously gets the mount for the file.
     * 
     * For more details, see g_file_find_enclosing_mount() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_find_enclosing_mount_finish() to
     * get the result of the operation.
     */
    vfunc_find_enclosing_mount_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous find mount request.
     * See g_file_find_enclosing_mount_async().
     */
    vfunc_find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount
    /**
     * Gets the base name (the last component of the path) for a given #GFile.
     * 
     * If called for the top level of a system (such as the filesystem root
     * or a uri like sftp://host/) it will return a single directory separator
     * (and on Windows, possibly a drive letter).
     * 
     * The base name is a byte string (not UTF-8). It has no defined encoding
     * or rules other than it may not contain zero bytes.  If you want to use
     * filenames in a user interface you should use the display name that you
     * can get by requesting the %G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME
     * attribute with g_file_query_info().
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_basename(): string | null
    /**
     * Gets the child of `file` for a given `display_name` (i.e. a UTF-8
     * version of the name). If this function fails, it returns %NULL
     * and `error` will be set. This is very useful when constructing a
     * #GFile for a new file and the user entered the filename in the
     * user interface, for instance when you select a directory and
     * type a filename in the file selector.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_child_for_display_name(display_name: string): Gio.File
    /**
     * Gets the parent directory for the `file`.
     * If the `file` represents the root directory of the
     * file system, then %NULL will be returned.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_parent(): Gio.File | null
    /**
     * Gets the parse name of the `file`.
     * A parse name is a UTF-8 string that describes the
     * file such that one can get the #GFile back using
     * g_file_parse_name().
     * 
     * This is generally used to show the #GFile as a nice
     * full-pathname kind of string in a user interface,
     * like in a location entry.
     * 
     * For local files with names that can safely be converted
     * to UTF-8 the pathname is used, otherwise the IRI is used
     * (a form of URI that allows UTF-8 characters unescaped).
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_parse_name(): string
    /**
     * Gets the local pathname for #GFile, if one exists. If non-%NULL, this is
     * guaranteed to be an absolute, canonical path. It might contain symlinks.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_path(): string | null
    /**
     * Gets the path for `descendant` relative to `parent`.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_relative_path(descendant: Gio.File): string | null
    /**
     * Gets the URI for the `file`.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_uri(): string
    /**
     * Gets the URI scheme for a #GFile.
     * RFC 3986 decodes the scheme as:
     * |[
     * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
     * ```
     * 
     * Common schemes include "file", "http", "ftp", etc.
     * 
     * The scheme can be different from the one used to construct the #GFile,
     * in that it might be replaced with one that is logically equivalent to the #GFile.
     * 
     * This call does no blocking I/O.
     */
    vfunc_get_uri_scheme(): string | null
    /**
     * Checks to see if a #GFile has a given URI scheme.
     * 
     * This call does no blocking I/O.
     */
    vfunc_has_uri_scheme(uri_scheme: string): boolean
    /**
     * Creates a hash value for a #GFile.
     * 
     * This call does no blocking I/O.
     */
    vfunc_hash(): number
    /**
     * Checks to see if a file is native to the platform.
     * 
     * A native file is one expressed in the platform-native filename format,
     * e.g. "C:\Windows" or "/usr/bin/". This does not mean the file is local,
     * as it might be on a locally mounted remote filesystem.
     * 
     * On some systems non-native files may be available using the native
     * filesystem via a userspace filesystem (FUSE), in these cases this call
     * will return %FALSE, but g_file_get_path() will still return a native path.
     * 
     * This call does no blocking I/O.
     */
    vfunc_is_native(): boolean
    /**
     * Creates a directory. Note that this will only create a child directory
     * of the immediate parent directory of the path or URI given by the #GFile.
     * To recursively create directories, see g_file_make_directory_with_parents().
     * This function will fail if the parent directory does not exist, setting
     * `error` to %G_IO_ERROR_NOT_FOUND. If the file system doesn't support
     * creating directories, this function will fail, setting `error` to
     * %G_IO_ERROR_NOT_SUPPORTED.
     * 
     * For a local #GFile the newly created directory will have the default
     * (current) ownership and permissions of the current process.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_make_directory(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates a directory.
     */
    vfunc_make_directory_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous directory creation, started with
     * g_file_make_directory_async().
     */
    vfunc_make_directory_finish(result: Gio.AsyncResult): boolean
    /**
     * Creates a symbolic link named `file` which contains the string
     * `symlink_value`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Collects the results from an earlier call to
     * g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for
     * more information.
     */
    vfunc_measure_disk_usage_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    /**
     * Obtains a directory monitor for the given file.
     * This may fail if directory monitoring is not supported.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * It does not make sense for `flags` to contain
     * %G_FILE_MONITOR_WATCH_HARD_LINKS, since hard links can not be made to
     * directories.  It is not possible to monitor all the files in a
     * directory for changes made via hard links; if you want to do this then
     * you must register individual watches with g_file_monitor().
     */
    vfunc_monitor_dir(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Obtains a file monitor for the given file. If no file notification
     * mechanism exists, then regular polling of the file is used.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `flags` contains %G_FILE_MONITOR_WATCH_HARD_LINKS then the monitor
     * will also attempt to report changes made to the file via another
     * filename (ie, a hard link). Without this flag, you can only rely on
     * changes made through the filename contained in `file` to be
     * reported. Using this flag may result in an increase in resource
     * usage, and may not have any effect depending on the #GFileMonitor
     * backend and/or filesystem type.
     */
    vfunc_monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Starts a `mount_operation,` mounting the volume that contains
     * the file `location`.
     * 
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_mount_enclosing_volume_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation started by g_file_mount_enclosing_volume().
     */
    vfunc_mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean
    /**
     * Mounts a file of type G_FILE_TYPE_MOUNTABLE.
     * Using `mount_operation,` you can request callbacks when, for instance,
     * passwords are needed during authentication.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_mount_mountable(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation. See g_file_mount_mountable() for details.
     * 
     * Finish an asynchronous mount operation that was started
     * with g_file_mount_mountable().
     */
    vfunc_mount_mountable_finish(result: Gio.AsyncResult): Gio.File
    /**
     * Tries to move the file or directory `source` to the location specified
     * by `destination`. If native move operations are supported then this is
     * used, otherwise a copy + delete fallback is used. The native
     * implementation may support moving directories (for instance on moves
     * inside the same filesystem), but the fallback code does not.
     * 
     * If the flag #G_FILE_COPY_OVERWRITE is specified an already
     * existing `destination` file is overwritten.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If `progress_callback` is not %NULL, then the operation can be monitored
     * by setting this to a #GFileProgressCallback function.
     * `progress_callback_data` will be passed to this function. It is
     * guaranteed that this callback will be called after all data has been
     * transferred with the total number of bytes copied during the operation.
     * 
     * If the `source` file does not exist, then the %G_IO_ERROR_NOT_FOUND
     * error is returned, independent on the status of the `destination`.
     * 
     * If #G_FILE_COPY_OVERWRITE is not specified and the target exists,
     * then the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * #G_FILE_COPY_OVERWRITE is specified and the target is a file, then
     * the %G_IO_ERROR_WOULD_RECURSE error may be returned (if the native
     * move operation isn't available).
     */
    vfunc_move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    /**
     * Asynchronously moves a file `source` to the location of `destination`. For details of the behaviour, see g_file_move().
     * 
     * If `progress_callback` is not %NULL, then that function that will be called
     * just like in g_file_move(). The callback will run in the default main context
     * of the thread calling g_file_move_async() — the same context as `callback` is
     * run in.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * g_file_move_finish() to get the result of the operation.
     */
    vfunc_move_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file movement, started with
     * g_file_move_async().
     */
    vfunc_move_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens an existing file for reading and writing. The result is
     * a #GFileIOStream that can be used to read and write the contents
     * of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error will be returned. Other errors are possible too, and depend on
     * what kind of filesystem the file is on. Note that in many non-local
     * file cases read and write streams are not supported, so make sure you
     * really need to do read and write streaming, rather than just opening
     * for reading or writing.
     */
    vfunc_open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously opens `file` for reading and writing.
     * 
     * For more details, see g_file_open_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_open_readwrite_finish() to get
     * the result of the operation.
     */
    vfunc_open_readwrite_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_open_readwrite_async().
     */
    vfunc_open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Polls a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a poll operation. See g_file_poll_mountable() for details.
     * 
     * Finish an asynchronous poll operation that was polled
     * with g_file_poll_mountable().
     */
    vfunc_poll_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks whether `file` has the prefix specified by `prefix`.
     * 
     * In other words, if the names of initial elements of `file'`s
     * pathname match `prefix`. Only full pathname elements are matched,
     * so a path like /foo is not considered a prefix of /foobar, only
     * of /foo/bar.
     * 
     * A #GFile is not a prefix of itself. If you want to check for
     * equality, use g_file_equal().
     * 
     * This call does no I/O, as it works purely on names. As such it can
     * sometimes return %FALSE even if `file` is inside a `prefix` (from a
     * filesystem point of view), because the prefix of `file` is an alias
     * of `prefix`.
     */
    vfunc_prefix_matches(file: Gio.File): boolean
    /**
     * Similar to g_file_query_info(), but obtains information
     * about the filesystem the `file` is on, rather than the file itself.
     * For instance the amount of space available and the type of
     * the filesystem.
     * 
     * The `attributes` value is a string that specifies the attributes
     * that should be gathered. It is not an error if it's not possible
     * to read a particular requested attribute from a file - it just
     * won't be set. `attributes` should be a comma-separated list of
     * attributes or attribute wildcards. The wildcard "*" means all
     * attributes, and a wildcard like "filesystem::*" means all attributes
     * in the filesystem namespace. The standard namespace for filesystem
     * attributes is "filesystem". Common attributes of interest are
     * #G_FILE_ATTRIBUTE_FILESYSTEM_SIZE (the total size of the filesystem
     * in bytes), #G_FILE_ATTRIBUTE_FILESYSTEM_FREE (number of bytes available),
     * and #G_FILE_ATTRIBUTE_FILESYSTEM_TYPE (type of the filesystem).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. Other errors are possible too, and depend on what
     * kind of filesystem the file is on.
     */
    vfunc_query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    /**
     * Asynchronously gets the requested information about the filesystem
     * that the specified `file` is on. The result is a #GFileInfo object
     * that contains key-value attributes (such as type or size for the
     * file).
     * 
     * For more details, see g_file_query_filesystem_info() which is the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_query_info_finish() to get the result of the
     * operation.
     */
    vfunc_query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filesystem info query.
     * See g_file_query_filesystem_info_async().
     */
    vfunc_query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    /**
     * Gets the requested information about specified `file`.
     * The result is a #GFileInfo object that contains key-value
     * attributes (such as the type or size of the file).
     * 
     * The `attributes` value is a string that specifies the file
     * attributes that should be gathered. It is not an error if
     * it's not possible to read a particular requested attribute
     * from a file - it just won't be set. `attributes` should be a
     * comma-separated list of attributes or attribute wildcards.
     * The wildcard "*" means all attributes, and a wildcard like
     * "standard::*" means all attributes in the standard namespace.
     * An example attribute query be "standard::*,owner::user".
     * The standard attributes are available as defines, like
     * #G_FILE_ATTRIBUTE_STANDARD_NAME.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * For symlinks, normally the information about the target of the
     * symlink is returned, rather than information about the symlink
     * itself. However if you pass #G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS
     * in `flags` the information about the symlink itself will be returned.
     * Also, for symlinks that point to non-existing files the information
     * about the symlink itself will be returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
     * returned. Other errors are possible too, and depend on what kind of
     * filesystem the file is on.
     */
    vfunc_query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    /**
     * Asynchronously gets the requested information about specified `file`.
     * The result is a #GFileInfo object that contains key-value attributes
     * (such as type or size for the file).
     * 
     * For more details, see g_file_query_info() which is the synchronous
     * version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call g_file_query_info_finish() to get the result of the operation.
     */
    vfunc_query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file info query.
     * See g_file_query_info_async().
     */
    vfunc_query_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    /**
     * Obtain the list of settable attributes for the file.
     * 
     * Returns the type and full attribute name of all the attributes
     * that can be set on this file. This doesn't mean setting it will
     * always succeed though, you might get an access failure, or some
     * specific file may not support a specific attribute.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    /**
     * Obtain the list of attribute namespaces where new attributes
     * can be created by a user. An example of this is extended
     * attributes (in the "xattr" namespace).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    /**
     * Asynchronously opens `file` for reading.
     * 
     * For more details, see g_file_read() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_read_finish() to get the result
     * of the operation.
     */
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_read_async().
     */
    vfunc_read_finish(res: Gio.AsyncResult): Gio.FileInputStream
    /**
     * Opens a file for reading. The result is a #GFileInputStream that
     * can be used to read the contents of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
     * returned. If the file is a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error will be returned. Other errors are possible too, and depend
     * on what kind of filesystem the file is on.
     */
    vfunc_read_fn(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    /**
     * Returns an output stream for overwriting the file, possibly
     * creating a backup copy of the file first. If the file doesn't exist,
     * it will be created.
     * 
     * This will try to replace the file in the safest way possible so
     * that any errors during the writing will not affect an already
     * existing copy of the file. For instance, for local files it
     * may write to a temporary file and then atomically rename over
     * the destination when the stream is closed.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass #G_FILE_CREATE_PRIVATE in `flags` the file
     * will be made readable only to the current user, to the level that
     * is supported on the target filesystem.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If you pass in a non-%NULL `etag` value and `file` already exists, then
     * this value is compared to the current entity tag of the file, and if
     * they differ an %G_IO_ERROR_WRONG_ETAG error is returned. This
     * generally means that the file has been changed since you last read
     * it. You can get the new etag from g_file_output_stream_get_etag()
     * after you've finished writing and closed the #GFileOutputStream. When
     * you load a new file you can use g_file_input_stream_query_info() to
     * get the etag of the file.
     * 
     * If `make_backup` is %TRUE, this function will attempt to make a
     * backup of the current file before overwriting it. If this fails
     * a %G_IO_ERROR_CANT_CREATE_BACKUP error will be returned. If you
     * want to replace anyway, try again with `make_backup` set to %FALSE.
     * 
     * If the file is a directory the %G_IO_ERROR_IS_DIRECTORY error will
     * be returned, and if the file is some other form of non-regular file
     * then a %G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some
     * file systems don't allow all file names, and may return an
     * %G_IO_ERROR_INVALID_FILENAME error, and if the name is to long
     * %G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are
     * possible too, and depend on what kind of filesystem the file is on.
     */
    vfunc_replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously overwrites the file, replacing the contents,
     * possibly creating a backup copy of the file first.
     * 
     * For more details, see g_file_replace() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_replace_finish() to get the result
     * of the operation.
     */
    vfunc_replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_async().
     */
    vfunc_replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Returns an output stream for overwriting the file in readwrite mode,
     * possibly creating a backup copy of the file first. If the file doesn't
     * exist, it will be created.
     * 
     * For details about the behaviour, see g_file_replace() which does the
     * same thing but returns an output stream only.
     * 
     * Note that in many non-local file cases read and write streams are not
     * supported, so make sure you really need to do read and write streaming,
     * rather than just opening for reading or writing.
     */
    vfunc_replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously overwrites the file in read-write mode,
     * replacing the contents, possibly creating a backup copy
     * of the file first.
     * 
     * For more details, see g_file_replace_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_replace_readwrite_finish() to get
     * the result of the operation.
     */
    vfunc_replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_readwrite_async().
     */
    vfunc_replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Resolves a relative path for `file` to an absolute path.
     * 
     * This call does no blocking I/O.
     * 
     * If the `relative_path` is an absolute path name, the resolution
     * is done absolutely (without taking `file` path as base).
     */
    vfunc_resolve_relative_path(relative_path: string): Gio.File
    /**
     * Sets an attribute in the file with attribute name `attribute` to `value_p`.
     * 
     * Some attributes can be unset by setting `type` to
     * %G_FILE_ATTRIBUTE_TYPE_INVALID and `value_p` to %NULL.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sets the attributes of `file` with `info`.
     * 
     * For more details, see g_file_set_attributes_from_info(),
     * which is the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_attributes_finish() to get
     * the result of the operation.
     */
    vfunc_set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting an attribute started in g_file_set_attributes_async().
     */
    vfunc_set_attributes_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
    /**
     * Tries to set all attributes in the #GFileInfo on the target
     * values, not stopping on the first error.
     * 
     * If there is any error during this operation then `error` will
     * be set to the first error. Error on particular fields are flagged
     * by setting the "status" field in the attribute value to
     * %G_FILE_ATTRIBUTE_STATUS_ERROR_SETTING, which means you can
     * also detect further errors.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Renames `file` to the specified display name.
     * 
     * The display name is converted from UTF-8 to the correct encoding
     * for the target filesystem if possible and the `file` is renamed to this.
     * 
     * If you want to implement a rename operation in the user interface the
     * edit name (#G_FILE_ATTRIBUTE_STANDARD_EDIT_NAME) should be used as the
     * initial value in the rename widget, and then the result after editing
     * should be passed to g_file_set_display_name().
     * 
     * On success the resulting converted filename is returned.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronously sets the display name for a given #GFile.
     * 
     * For more details, see g_file_set_display_name() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_display_name_finish() to get
     * the result of the operation.
     */
    vfunc_set_display_name_async(display_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting a display name started with
     * g_file_set_display_name_async().
     */
    vfunc_set_display_name_finish(res: Gio.AsyncResult): Gio.File
    /**
     * Starts a file of type #G_FILE_TYPE_MOUNTABLE.
     * Using `start_operation,` you can request callbacks when, for instance,
     * passwords are needed during authentication.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_start_mountable(flags: Gio.DriveStartFlags, start_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a start operation. See g_file_start_mountable() for details.
     * 
     * Finish an asynchronous start operation that was started
     * with g_file_start_mountable().
     */
    vfunc_start_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Stops a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_stop_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_stop_mountable(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stop operation, see g_file_stop_mountable() for details.
     * 
     * Finish an asynchronous stop operation that was started
     * with g_file_stop_mountable().
     */
    vfunc_stop_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Sends `file` to the "Trashcan", if possible. This is similar to
     * deleting it, but the user can recover it before emptying the trashcan.
     * Not all file systems support trashing, so this call can return the
     * %G_IO_ERROR_NOT_SUPPORTED error. Since GLib 2.66, the `x-gvfs-notrash` unix
     * mount option can be used to disable g_file_trash() support for certain
     * mounts, the %G_IO_ERROR_NOT_SUPPORTED error will be returned in that case.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     */
    vfunc_trash(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends `file` to the Trash location, if possible.
     */
    vfunc_trash_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file trashing operation, started with
     * g_file_trash_async().
     */
    vfunc_trash_finish(result: Gio.AsyncResult): boolean
    /**
     * Unmounts a file of type G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_unmount_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_unmount_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation, see g_file_unmount_mountable() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable().
     */
    vfunc_unmount_mountable_finish(result: Gio.AsyncResult): boolean
    /**
     * Unmounts a file of type #G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_unmount_mountable_finish() to get
     * the result of the operation.
     */
    vfunc_unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation,
     * see g_file_unmount_mountable_with_operation() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable_with_operation().
     */
    vfunc_unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepoFile_ConstructProps)
    _init (config?: RepoFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Creates a #GFile with the given argument from the command line.
     * The value of `arg` can be either a URI, an absolute path or a
     * relative path resolved relative to the current working directory.
     * This operation never fails, but the returned object might not
     * support any I/O operation if `arg` points to a malformed path.
     * 
     * Note that on Windows, this function expects its argument to be in
     * UTF-8 -- not the system code page.  This means that you
     * should not use this function with string from argv as it is passed
     * to main().  g_win32_get_command_line() will return a UTF-8 version of
     * the commandline.  #GApplication also uses UTF-8 but
     * g_application_command_line_create_file_for_arg() may be more useful
     * for you there.  It is also always possible to use this function with
     * #GOptionContext arguments of type %G_OPTION_ARG_FILENAME.
     */
    static new_for_commandline_arg(arg: string): Gio.File
    /**
     * Creates a #GFile with the given argument from the command line.
     * 
     * This function is similar to g_file_new_for_commandline_arg() except
     * that it allows for passing the current working directory as an
     * argument instead of using the current working directory of the
     * process.
     * 
     * This is useful if the commandline argument was given in a context
     * other than the invocation of the current process.
     * 
     * See also g_application_command_line_create_file_for_arg().
     */
    static new_for_commandline_arg_and_cwd(arg: string, cwd: string): Gio.File
    /**
     * Constructs a #GFile for a given path. This operation never
     * fails, but the returned object might not support any I/O
     * operation if `path` is malformed.
     */
    static new_for_path(path: string): Gio.File
    /**
     * Constructs a #GFile for a given URI. This operation never
     * fails, but the returned object might not support any I/O
     * operation if `uri` is malformed or if the uri type is
     * not supported.
     */
    static new_for_uri(uri: string): Gio.File
    /**
     * Opens a file in the preferred directory for temporary files (as
     * returned by g_get_tmp_dir()) and returns a #GFile and
     * #GFileIOStream pointing to it.
     * 
     * `tmpl` should be a string in the GLib file name encoding
     * containing a sequence of six 'X' characters, and containing no
     * directory components. If it is %NULL, a default template is used.
     * 
     * Unlike the other #GFile constructors, this will return %NULL if
     * a temporary file could not be created.
     */
    static new_tmp(tmpl?: string | null): [ /* returnType */ Gio.File, /* iostream */ Gio.FileIOStream ]
    /**
     * Constructs a #GFile with the given `parse_name` (i.e. something
     * given by g_file_get_parse_name()). This operation never fails,
     * but the returned object might not support any I/O operation if
     * the `parse_name` cannot be parsed.
     */
    static parse_name(parse_name: string): Gio.File
    static $gtype: GObject.Type
}
interface SePolicy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SePolicy */
    path?: Gio.File
}
class SePolicy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SePolicy */
    get_csum(): string
    /**
     * Store in `out_label` the security context for the given `relpath` and
     * mode `unix_mode`.  If the policy does not specify a label, %NULL
     * will be returned.
     */
    get_label(relpath: string, unix_mode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_label */ string | null ]
    get_name(): string
    get_path(): Gio.File
    /**
     * Reset the security context of `target` based on the SELinux policy.
     */
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_label */ string | null ]
    setfscreatecon(path: string, mode: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of OSTree-1.0.OSTree.SePolicy */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SePolicy_ConstructProps)
    _init (config?: SePolicy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy
    /**
     * Cleanup function for ostree_sepolicy_setfscreatecon().
     */
    static fscreatecon_cleanup(unused?: object | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Sysroot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.Sysroot */
    path?: Gio.File
}
class Sysroot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Sysroot */
    /**
     * Delete any state that resulted from a partially completed
     * transaction, such as incomplete deployments.
     */
    cleanup(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Check out deployment tree with revision `revision,` performing a 3
     * way merge with `provided_merge_deployment` for configuration.
     */
    deploy_tree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, provided_merge_deployment?: Deployment | null, override_kernel_argv?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_deployment */ Deployment ]
    /**
     * Entirely replace the kernel arguments of `deployment` with the
     * values in `new_kargs`.
     */
    deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * By default, deployment directories are not mutable.  This function
     * will allow making them temporarily mutable, for example to allow
     * layering additional non-OSTree content.
     */
    deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Configure the target deployment `deployment` such that it
     * is writable.  There are multiple modes, essentially differing
     * in whether or not any changes persist across reboot.
     * 
     * The `OSTREE_DEPLOYMENT_UNLOCKED_HOTFIX` state is persistent
     * across reboots.
     */
    deployment_unlock(deployment: Deployment, unlocked_state: DeploymentUnlockedState, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Ensure that `self` is set up as a valid rootfs, by creating
     * /ostree/repo, among other things.
     */
    ensure_initialized(cancellable?: Gio.Cancellable | null): boolean
    get_booted_deployment(): Deployment
    get_bootversion(): number
    get_deployment_directory(deployment: Deployment): Gio.File
    /**
     * Note this function only returns a *relative* path - if you want
     * to access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     */
    get_deployment_dirpath(deployment: Deployment): string
    get_deployments(): Deployment[]
    /**
     * Access a file descriptor that refers to the root directory of this
     * sysroot.  ostree_sysroot_load() must have been invoked prior to
     * calling this function.
     */
    get_fd(): number
    /**
     * Find the deployment to use as a configuration merge source; this is
     * the first one in the current deployment list which matches osname.
     */
    get_merge_deployment(osname?: string | null): Deployment
    get_path(): Gio.File
    /**
     * Retrieve the OSTree repository in sysroot `self`.
     */
    get_repo(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_repo */ Repo ]
    get_subbootversion(): number
    /**
     * Initialize the directory structure for an "osname", which is a
     * group of operating system deployments, with a shared `/var`.  One
     * is required for generating a deployment.
     */
    init_osname(osname: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Load deployment list, bootversion, and subbootversion from the
     * rootfs `self`.
     */
    load(cancellable?: Gio.Cancellable | null): boolean
    load_if_changed(out_changed: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Acquire an exclusive multi-process write lock for `self`.  This call
     * blocks until the lock has been acquired.  The lock is not
     * reentrant.
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    lock(): boolean
    /**
     * An asynchronous version of ostree_sysroot_lock().
     */
    lock_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Call when ostree_sysroot_lock_async() is ready.
     */
    lock_finish(result: Gio.AsyncResult): boolean
    origin_new_from_refspec(refspec: string): GLib.KeyFile
    /**
     * Like ostree_sysroot_cleanup() in that it cleans up incomplete deployments
     * and old boot versions, but does NOT prune the repository.
     */
    prepare_cleanup(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Prepend `new_deployment` to the list of deployments, commit, and
     * cleanup.  By default, all other deployments for the given `osname`
     * except the merge deployment and the booted deployment will be
     * garbage collected.
     * 
     * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_RETAIN is
     * specified, then all current deployments will be kept.
     * 
     * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_NOT_DEFAULT is
     * specified, then instead of prepending, the new deployment will be
     * added right after the booted or merge deployment, instead of first.
     */
    simple_write_deployment(osname: string | null, new_deployment: Deployment, merge_deployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Try to acquire an exclusive multi-process write lock for `self`.  If
     * another process holds the lock, this function will return
     * immediately, setting `out_acquired` to %FALSE, and returning %TRUE
     * (and no error).
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    try_lock(): [ /* returnType */ boolean, /* out_acquired */ boolean ]
    /**
     * Release any resources such as file descriptors referring to the
     * root directory of this sysroot.  Normally, those resources are
     * cleared by finalization, but in garbage collected languages that
     * may not be predictable.
     * 
     * This undoes the effect of `ostree_sysroot_load()`.
     */
    unload(): void
    /**
     * Clear the lock previously acquired with ostree_sysroot_lock().  It
     * is safe to call this function if the lock has not been previously
     * acquired.
     */
    unlock(): void
    /**
     * Assuming `new_deployments` have already been deployed in place on
     * disk, atomically update bootloader configuration.
     */
    write_deployments(new_deployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Immediately replace the origin file of the referenced `deployment`
     * with the contents of `new_origin`.  If `new_origin` is %NULL,
     * this function will write the current origin of `deployment`.
     */
    write_origin_file(deployment: Deployment, new_origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sysroot_ConstructProps)
    _init (config?: Sysroot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path?: Gio.File | null): Sysroot
    static new_default(): Sysroot
    static get_deployment_origin_path(deployment_path: Gio.File): Gio.File
    static $gtype: GObject.Type
}
interface SysrootUpgrader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SysrootUpgrader */
    flags?: SysrootUpgraderFlags
    osname?: string
    sysroot?: Sysroot
}
class SysrootUpgrader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SysrootUpgrader */
    /**
     * Write the new deployment to disk, perform a configuration merge
     * with /etc, and update the bootloader configuration.
     */
    deploy(cancellable?: Gio.Cancellable | null): boolean
    dup_origin(): GLib.KeyFile
    get_origin(): GLib.KeyFile
    get_origin_description(): string
    /**
     * Perform a pull from the origin.  First check if the ref has
     * changed, if so download the linked objects, and store the updated
     * ref locally.  Then `out_changed` will be %TRUE.
     * 
     * If the origin remote is unchanged, `out_changed` will be set to
     * %FALSE.
     */
    pull(flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_changed */ boolean ]
    /**
     * Like ostree_sysroot_upgrader_pull(), but allows retrieving just a
     * subpath of the tree.  This can be used to download metadata files
     * from inside the tree such as package databases.
     */
    pull_one_dir(dir_to_pull: string, flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress, out_changed: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Replace the origin with `origin`.
     */
    set_origin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of OSTree-1.0.OSTree.SysrootUpgrader */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SysrootUpgrader_ConstructProps)
    _init (config?: SysrootUpgrader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os_with_flags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    /**
     * Check that the timestamp on `to_rev` is equal to or newer than
     * `from_rev`.  This protects systems against man-in-the-middle
     * attackers which provide a client with an older commit.
     */
    static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AsyncProgressClass {
    /* Fields of OSTree-1.0.OSTree.AsyncProgressClass */
    readonly parent_class: GObject.ObjectClass
    readonly changed: (self: AsyncProgress) => void
    static name: string
}
class Bootloader {
    static name: string
}
class BootloaderGrub2 {
    static name: string
}
class BootloaderInterface {
    /* Fields of OSTree-1.0.OSTree.BootloaderInterface */
    readonly g_iface: GObject.TypeInterface
    readonly query: (bootloader: Bootloader, out_is_active: boolean, cancellable: Gio.Cancellable) => boolean
    readonly get_name: (self: Bootloader) => string
    readonly write_config: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    readonly is_atomic: (self: Bootloader) => boolean
    static name: string
}
class BootloaderSyslinux {
    static name: string
}
class BootloaderUboot {
    static name: string
}
abstract class ChecksumInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.ChecksumInputStreamClass */
    readonly parent_class: Gio.FilterInputStreamClass
    static name: string
}
class ChecksumInputStreamPrivate {
    static name: string
}
class CmdPrivateVTable {
    /* Fields of OSTree-1.0.OSTree.CmdPrivateVTable */
    readonly ostree_generate_grub2_config: (sysroot: Sysroot, bootversion: number, target_fd: number, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_dump: (repo: Repo, delta_id: string, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_query_exists: (repo: Repo, delta_id: string, out_exists: boolean, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_delete: (repo: Repo, delta_id: string, cancellable: Gio.Cancellable) => boolean
    static name: string
}
class DiffItem {
    /* Fields of OSTree-1.0.OSTree.DiffItem */
    readonly refcount: number
    readonly src: Gio.File
    readonly target: Gio.File
    readonly src_info: Gio.FileInfo
    readonly target_info: Gio.FileInfo
    readonly src_checksum: string
    readonly target_checksum: string
    /* Methods of OSTree-1.0.OSTree.DiffItem */
    ref(): DiffItem
    unref(): void
    static name: string
}
class GpgVerifier {
    static name: string
}
class LibarchiveInputStream {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStream */
    readonly parent_instance: Gio.InputStream
    static name: string
}
class LibarchiveInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass */
    readonly parent_class: Gio.InputStreamClass
    static name: string
}
class LibarchiveInputStreamPrivate {
    static name: string
}
class LzmaCompressor {
    static name: string
}
class LzmaCompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaCompressorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class LzmaDecompressor {
    static name: string
}
class LzmaDecompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaDecompressorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class MutableTreeClass {
    /* Fields of OSTree-1.0.OSTree.MutableTreeClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MutableTreeIter {
    /* Fields of OSTree-1.0.OSTree.MutableTreeIter */
    readonly in_files: boolean
    readonly iter: GLib.HashTableIter
    static name: string
}
class RepoCheckoutAtOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions */
    readonly mode: RepoCheckoutMode
    readonly overwrite_mode: RepoCheckoutOverwriteMode
    readonly enable_uncompressed_cache: boolean
    readonly enable_fsync: boolean
    readonly process_whiteouts: boolean
    readonly no_copy_fallback: boolean
    readonly unused_bools: boolean[]
    readonly subpath: string
    readonly devino_to_csum_cache: RepoDevInoCache
    readonly unused_ints: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoCheckoutOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutOptions */
    readonly mode: RepoCheckoutMode
    readonly overwrite_mode: RepoCheckoutOverwriteMode
    readonly enable_uncompressed_cache: number
    readonly disable_fsync: number
    readonly process_whiteouts: number
    readonly no_copy_fallback: number
    readonly reserved: number
    readonly subpath: string
    readonly devino_to_csum_cache: RepoDevInoCache
    readonly unused_uints: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoCommitModifier {
    /* Methods of OSTree-1.0.OSTree.RepoCommitModifier */
    ref(): RepoCommitModifier
    /**
     * See the documentation for
     * `ostree_repo_devino_cache_new()`.  This function can
     * then be used for later calls to
     * `ostree_repo_write_directory_to_mtree()` to optimize commits.
     * 
     * Note if your process has multiple writers, you should use separate
     * `OSTreeRepo` instances if you want to also use this API.
     * 
     * This function will add a reference to `cache` without copying - you
     * should avoid further mutation of the cache.
     */
    set_devino_cache(cache: RepoDevInoCache): void
    /**
     * If `policy` is non-%NULL, use it to look up labels to use for
     * "security.selinux" extended attributes.
     * 
     * Note that any policy specified this way operates in addition to any
     * extended attributes provided via
     * ostree_repo_commit_modifier_set_xattr_callback().  However if both
     * specify a value for "security.selinux", then the one from the
     * policy wins.
     */
    set_sepolicy(sepolicy?: SePolicy | null): void
    /**
     * If set, this function should return extended attributes to use for
     * the given path.  This is useful for things like ACLs and SELinux,
     * where a build system can label the files as it's committing to the
     * repository.
     */
    set_xattr_callback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
    static name: string
    static new(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier
    constructor(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null)
    /* Static methods and pseudo-constructors */
    static new(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier
}
class RepoCommitTraverseIter {
    /* Fields of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    readonly initialized: boolean
    readonly dummy: object[]
    readonly dummy_checksum_data: number[]
    /* Methods of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    clear(): void
    /**
     * Return information on the current directory.  This function may
     * only be called if %OSTREE_REPO_COMMIT_ITER_RESULT_DIR was returned
     * from ostree_repo_commit_traverse_iter_next().
     */
    get_dir(): [ /* out_name */ string, /* out_content_checksum */ string, /* out_meta_checksum */ string ]
    /**
     * Return information on the current file.  This function may only be
     * called if %OSTREE_REPO_COMMIT_ITER_RESULT_FILE was returned from
     * ostree_repo_commit_traverse_iter_next().
     */
    get_file(): [ /* out_name */ string, /* out_checksum */ string ]
    /**
     * Initialize (in place) an iterator over the root of a commit object.
     */
    init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Initialize (in place) an iterator over a directory tree.
     */
    init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Step the interator to the next item.  Files will be returned first,
     * then subdirectories.  Call this in a loop; upon encountering
     * %OSTREE_REPO_COMMIT_ITER_RESULT_END, there will be no more files or
     * directories.  If %OSTREE_REPO_COMMIT_ITER_RESULT_DIR is returned,
     * then call ostree_repo_commit_traverse_iter_get_dir() to retrieve
     * data for that directory.  Similarly, if
     * %OSTREE_REPO_COMMIT_ITER_RESULT_FILE is returned, call
     * ostree_repo_commit_traverse_iter_get_file().
     * 
     * If %OSTREE_REPO_COMMIT_ITER_RESULT_ERROR is returned, it is a
     * program error to call any further API on `iter` except for
     * ostree_repo_commit_traverse_iter_clear().
     */
    next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult
    static name: string
    /* Static methods and pseudo-constructors */
    static cleanup(p?: object | null): void
}
class RepoDevInoCache {
    /* Methods of OSTree-1.0.OSTree.RepoDevInoCache */
    ref(): RepoDevInoCache
    unref(): void
    static name: string
    static new(): RepoDevInoCache
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RepoDevInoCache
}
class RepoExportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoExportArchiveOptions */
    readonly disable_xattrs: number
    readonly reserved: number
    readonly timestamp_secs: number
    readonly unused_uint: number[]
    readonly path_prefix: string
    readonly unused_ptrs: object[]
    static name: string
}
abstract class RepoFileClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class RepoFileEnumerator {
    static name: string
}
class RepoFileEnumeratorClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileEnumeratorClass */
    readonly parent_class: Gio.FileEnumeratorClass
    static name: string
}
class RepoImportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoImportArchiveOptions */
    readonly ignore_unsupported_content: number
    readonly autocreate_parents: number
    readonly use_ostree_convention: number
    readonly callback_with_entry_pathname: number
    readonly reserved: number
    readonly unused_uint: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoTransactionStats {
    /* Fields of OSTree-1.0.OSTree.RepoTransactionStats */
    /**
     * The total number of metadata objects
     * in the repository after this transaction has completed.
     */
    readonly metadata_objects_total: number
    /**
     * The number of metadata objects that
     * were written to the repository in this transaction.
     */
    readonly metadata_objects_written: number
    /**
     * The total number of content objects
     * in the repository after this transaction has completed.
     */
    readonly content_objects_total: number
    /**
     * The number of content objects that
     * were written to the repository in this transaction.
     */
    readonly content_objects_written: number
    /**
     * The amount of data added to the repository,
     * in bytes, counting only content objects.
     */
    readonly content_bytes_written: number
    /**
     * reserved
     */
    readonly padding1: number
    /**
     * reserved
     */
    readonly padding2: number
    /**
     * reserved
     */
    readonly padding3: number
    /**
     * reserved
     */
    readonly padding4: number
    static name: string
}
class RollsumMatches {
    /* Fields of OSTree-1.0.OSTree.RollsumMatches */
    readonly from_rollsums: GLib.HashTable
    readonly to_rollsums: GLib.HashTable
    readonly crcmatches: number
    readonly bufmatches: number
    readonly total: number
    readonly match_size: number
    readonly matches: object[]
    static name: string
}
class TlsCertInteraction {
    static name: string
}
class TlsCertInteractionClass {
    static name: string
}
}
export default OSTree;