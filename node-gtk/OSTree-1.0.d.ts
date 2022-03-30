/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * OSTree-1.0
 */

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
function checksumB64FromBytes(csum: Uint8Array): string
function checksumB64ToBytes(checksum: string): Uint8Array
function checksumBytesPeek(bytes: GLib.Variant): Uint8Array
function checksumBytesPeekValidate(bytes: GLib.Variant): Uint8Array
function checksumFile(f: Gio.File, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
function checksumFileAsync(f: Gio.File, objtype: ObjectType, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function checksumFileAsyncFinish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
function checksumFileFromInput(fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
function checksumFromBytes(csum: Uint8Array): string
function checksumFromBytesV(csumV: GLib.Variant): string
function checksumInplaceToBytes(checksum: string, buf: number): void
function checksumToBytes(checksum: string): Uint8Array
function checksumToBytesV(checksum: string): GLib.Variant
function cmdprivate(): CmdPrivateVTable
function cmpChecksumBytes(a: number, b: number): number
function commitGetParent(commitVariant: GLib.Variant): string
function commitGetTimestamp(commitVariant: GLib.Variant): number
function contentFileParse(compressed: boolean, contentPath: Gio.File, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
function contentFileParseAt(compressed: boolean, parentDfd: number, path: string, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
function contentStreamParse(compressed: boolean, input: Gio.InputStream, inputLength: number, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
function createDirectoryMetadata(dirInfo: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant
function diffDirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable?: Gio.Cancellable | null): boolean
function diffPrint(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
function hashObjectName(a?: object | null): number
function metadataVariantType(objtype: ObjectType): GLib.VariantType
function objectFromString(str: string): [ /* outChecksum */ string, /* outObjtype */ ObjectType ]
function objectNameDeserialize(variant: GLib.Variant): [ /* outChecksum */ string, /* outObjtype */ ObjectType ]
function objectNameSerialize(checksum: string, objtype: ObjectType): GLib.Variant
function objectToString(checksum: string, objtype: ObjectType): string
function objectTypeFromString(str: string): ObjectType
function objectTypeToString(objtype: ObjectType): string
function parseRefspec(refspec: string): [ /* returnType */ boolean, /* outRemote */ string | null, /* outRef */ string | null ]
function rawFileToArchiveZ2Stream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream ]
function rawFileToContentStream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outLength */ number ]
function repoCommitTraverseIterCleanup(p?: object | null): void
function validateChecksumString(sha256: string): boolean
function validateRev(rev: string): boolean
function validateStructureofChecksumString(checksum: string): boolean
function validateStructureofCommit(commit: GLib.Variant): boolean
function validateStructureofCsumV(checksum: GLib.Variant): boolean
function validateStructureofDirmeta(dirmeta: GLib.Variant): boolean
function validateStructureofDirtree(dirtree: GLib.Variant): boolean
function validateStructureofFileMode(mode: number): boolean
function validateStructureofObjtype(objtype: number): boolean
interface RepoCommitFilter {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): RepoCommitFilterResult
}
interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string, fileInfo: Gio.FileInfo): GLib.Variant
}
interface AsyncProgress_ConstructProps extends GObject.Object_ConstructProps {
}
class AsyncProgress {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.AsyncProgress */
    /**
     * Process any pending signals, ensuring the main context is cleared
     * of sources used by this object.  Also ensures that no further
     * events will be queued.
     */
    finish(): void
    getStatus(): string
    getUint(key: string): number
    getUint64(key: string): number
    setStatus(status: string): void
    setUint(key: string, value: number): void
    setUint64(key: string, value: number): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of OSTree-1.0.OSTree.AsyncProgress */
    /**
     * Emitted when `self` has been changed.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AsyncProgress_ConstructProps)
    _init (config?: AsyncProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncProgress
    static newAndConnect(changed?: object | null, userData?: object | null): AsyncProgress
    static $gtype: GObject.Type
}
interface BootconfigParser_ConstructProps extends GObject.Object_ConstructProps {
}
class BootconfigParser {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.BootconfigParser */
    clone(): BootconfigParser
    get(key: string): string
    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initialize a bootconfig from the given file.
     * @param dfd Directory fd
     * @param path File path
     * @param cancellable Cancellable
     */
    parseAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set(key: string, value: string): void
    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    writeAt(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of OSTree-1.0.OSTree.ChecksumInputStream */
    readonly checksum: object
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    parentInstance: Gio.InputStream
    baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    /**
     * Gets the base stream for the filter stream.
     */
    getBaseStream(): Gio.InputStream
    /**
     * Returns whether the base stream will be closed when `stream` is
     * closed.
     */
    getCloseBaseStream(): boolean
    /**
     * Sets whether the base stream will be closed when `stream` is closed.
     * @param closeBase %TRUE to close the base stream.
     */
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    /**
     * Clears the pending flag on `stream`.
     */
    clearPending(): void
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional cancellable object
     * @param callback callback to call when the request is satisfied
     */
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     * @param result a #GAsyncResult.
     */
    closeFinish(result: Gio.AsyncResult): boolean
    /**
     * Checks if an input stream has pending actions.
     */
    hasPending(): boolean
    /**
     * Checks if an input stream is closed.
     */
    isClosed(): boolean
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
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
     * @param result a #GAsyncResult
     */
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
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
     * @param ioPriority the [I/O priority][io-priority] of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
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
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
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
     * @param count the number of bytes that will be read from the stream
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream read-into-#GBytes operation.
     * @param result a #GAsyncResult.
     */
    readBytesFinish(result: Gio.AsyncResult): any
    /**
     * Finishes an asynchronous stream read operation.
     * @param result a #GAsyncResult.
     */
    readFinish(result: Gio.AsyncResult): number
    /**
     * Sets `stream` to have actions pending. If the pending flag is
     * already set or `stream` is closed, it will return %FALSE and set
     * `error`.
     */
    setPending(): boolean
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
     * @param count the number of bytes that will be skipped from the stream
     * @param cancellable optional #GCancellable object, %NULL to ignore.
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
     * @param count the number of bytes that will be skipped from the stream
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     * @param result a #GAsyncResult.
     */
    skipFinish(result: Gio.AsyncResult): number
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::checksum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Deployment */
    clone(): Deployment
    equal(bp: Deployment): boolean
    getBootconfig(): BootconfigParser
    getBootcsum(): string
    getBootserial(): number
    getCsum(): string
    getDeployserial(): number
    getIndex(): number
    getOrigin(): GLib.KeyFile
    /**
     * Note this function only returns a *relative* path - if you want to
     * access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     */
    getOriginRelpath(): string
    getOsname(): string
    getUnlocked(): DeploymentUnlockedState
    setBootconfig(bootconfig: BootconfigParser): void
    setBootserial(index: number): void
    setIndex(index: number): void
    setOrigin(origin: GLib.KeyFile): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number, osname: string, csum: string, deployserial: number, bootcsum: string, bootserial: number): Deployment
    static hash(v?: object | null): number
    static unlockedStateToString(state: DeploymentUnlockedState): string
    static $gtype: GObject.Type
}
interface GpgVerifyResult_ConstructProps extends GObject.Object_ConstructProps {
}
class GpgVerifyResult {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.GpgVerifyResult */
    /**
     * Counts all the signatures in `result`.
     */
    countAll(): number
    /**
     * Counts only the valid signatures in `result`.
     */
    countValid(): number
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
     * @param signatureIndex which signature to describe
     * @param outputBuffer a #GString to hold the description
     * @param linePrefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    describe(signatureIndex: number, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Builds a #GVariant tuple of requested attributes for the GPG signature at
     * `signature_index` in `result`.  See the #OstreeGpgSignatureAttr description
     * for the #GVariantType of each available attribute.
     * 
     * It is a programmer error to request an invalid #OstreeGpgSignatureAttr or
     * an invalid `signature_index`.  Use ostree_gpg_verify_result_count_all() to
     * find the number of signatures in `result`.
     * @param signatureIndex which signature to get attributes from
     * @param attrs Array of requested attributes
     */
    get(signatureIndex: number, attrs: GpgSignatureAttr[]): GLib.Variant
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
     * @param signatureIndex which signature to get attributes from
     */
    getAll(signatureIndex: number): GLib.Variant
    /**
     * Searches `result` for a signature signed by `key_id`.  If a match is found,
     * the function returns %TRUE and sets `out_signature_index` so that further
     * signature details can be obtained through ostree_gpg_verify_result_get().
     * If no match is found, the function returns %FALSE and leaves
     * `out_signature_index` unchanged.
     * @param keyId a GPG key ID or fingerprint
     */
    lookup(keyId: string): [ /* returnType */ boolean, /* outSignatureIndex */ number ]
    /**
     * Checks if the result contains at least one signature from the
     * trusted keyring.  You can call this function immediately after
     * ostree_repo_verify_summary() or ostree_repo_verify_commit_ext() -
     * it will handle the %NULL `result` and filled `error` too.
     */
    requireValidSignature(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
     * @param variant a #GVariant from ostree_gpg_verify_result_get_all()
     * @param outputBuffer a #GString to hold the description
     * @param linePrefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    static describeVariant(variant: GLib.Variant, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MutableTree_ConstructProps extends GObject.Object_ConstructProps {
}
class MutableTree {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.MutableTree */
    ensureDir(name: string, outSubdir: MutableTree): boolean
    /**
     * Create all parent trees necessary for the given `split_path` to
     * exist.
     * @param splitPath File path components
     * @param metadataChecksum SHA256 checksum for metadata
     */
    ensureParentDirs(splitPath: string[], metadataChecksum: string): [ /* returnType */ boolean, /* outParent */ MutableTree ]
    getContentsChecksum(): string
    getFiles(): GLib.HashTable
    getMetadataChecksum(): string
    getSubdirs(): GLib.HashTable
    lookup(name: string, outFileChecksum: string, outSubdir: MutableTree): boolean
    replaceFile(name: string, checksum: string): boolean
    setContentsChecksum(checksum: string): void
    setMetadataChecksum(checksum: string): void
    /**
     * Traverse `start` number of elements starting from `split_path;` the
     * child will be returned in `out_subdir`.
     * @param splitPath Split pathname
     * @param start Descend from this number of elements in `split_path`
     */
    walk(splitPath: string[], start: number): [ /* returnType */ boolean, /* outSubdir */ MutableTree ]
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    remotesConfigDir?: string
    sysrootPath?: Gio.File
}
class Repo {
    /* Properties of OSTree-1.0.OSTree.Repo */
    readonly path: Gio.File
    readonly remotesConfigDir: string
    readonly sysrootPath: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Repo */
    abortTransaction(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a static delta.
     * @param keyId NULL-terminated array of GPG keys.
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    addGpgSignatureSummary(keyId: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Append a GPG signature to a commit.
     * @param commitChecksum SHA256 of given commit to sign
     * @param signatureBytes Signature data
     * @param cancellable A #GCancellable
     */
    appendGpgSignature(commitChecksum: string, signatureBytes: any, cancellable?: Gio.Cancellable | null): boolean
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
     * @param options Options
     * @param destinationDfd Directory FD for destination
     * @param destinationPath Directory for destination
     * @param commit Checksum for commit
     * @param cancellable Cancellable
     */
    checkoutAt(options: RepoCheckoutAtOptions | null, destinationDfd: number, destinationPath: string, commit: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Call this after finishing a succession of checkout operations; it
     * will delete any currently-unused uncompressed objects from the
     * cache.
     * @param cancellable Cancellable
     */
    checkoutGc(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Check out `source` into `destination,` which must live on the
     * physical filesystem.  `source` may be any subdirectory of a given
     * commit.  The `mode` and `overwrite_mode` allow control over how the
     * files are checked out.
     * @param mode Options controlling all files
     * @param overwriteMode Whether or not to overwrite files
     * @param destination Place tree here
     * @param source Source tree
     * @param sourceInfo Source info
     * @param cancellable Cancellable
     */
    checkoutTree(mode: RepoCheckoutMode, overwriteMode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, sourceInfo: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Complete the transaction. Any refs set with
     * ostree_repo_transaction_set_ref() or
     * ostree_repo_transaction_set_refspec() will be written out.
     * @param cancellable Cancellable
     */
    commitTransaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outStats */ RepoTransactionStats | null ]
    copyConfig(): GLib.KeyFile
    /**
     * Create the underlying structure on disk for the repository, and call
     * ostree_repo_open() on the result, preparing it for use.
     * 
     * Since version 2016.8, this function will succeed on an existing
     * repository, and finish creating any necessary files in a partially
     * created repository.  However, this function cannot change the mode
     * of an existing repository, and will silently ignore an attempt to
     * do so.
     * @param mode The mode to store the repository in
     * @param cancellable Cancellable
     */
    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Remove the object of type `objtype` with checksum `sha2`56
     * from the repository.  An error of type %G_IO_ERROR_NOT_FOUND
     * is thrown if the object does not exist.
     * @param objtype Object type
     * @param sha256 Checksum
     * @param cancellable Cancellable
     */
    deleteObject(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    getConfig(): GLib.KeyFile
    /**
     * In some cases it's useful for applications to access the repository
     * directly; for example, writing content into `repo/tmp` ensures it's
     * on the same filesystem.  Another case is detecting the mtime on the
     * repository (to see whether a ref was written).
     */
    getDfd(): number
    /**
     * For more information see ostree_repo_set_disable_fsync().
     */
    getDisableFsync(): boolean
    getMode(): RepoMode
    /**
     * Before this function can be used, ostree_repo_init() must have been
     * called.
     */
    getParent(): Repo
    getPath(): Gio.File
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as a boolean.
     * If the option is not set, `out_value` will be set to `default_value`.
     * @param remoteName Name
     * @param optionName Option
     * @param defaultValue Value returned if `option_name` is not present
     */
    getRemoteBooleanOption(remoteName: string, optionName: string, defaultValue: boolean): [ /* returnType */ boolean, /* outValue */ boolean ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as an zero terminated array of strings.
     * If the option is not set, `out_value` will be set to %NULL.
     * @param remoteName Name
     * @param optionName Option
     */
    getRemoteListOption(remoteName: string, optionName: string): [ /* returnType */ boolean, /* outValue */ string[] ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, or `default_value` if the remote exists but not the
     * option name.
     * @param remoteName Name
     * @param optionName Option
     * @param defaultValue Value returned if `option_name` is not present
     */
    getRemoteOption(remoteName: string, optionName: string, defaultValue?: string | null): [ /* returnType */ boolean, /* outValue */ string ]
    /**
     * Verify `signatures` for `data` using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * 
     * The `remote_name` parameter can be %NULL. In that case it will do
     * the verifications using GPG keys in the keyrings of all remotes.
     * @param remoteName Name of remote
     * @param data Data as a #GBytes
     * @param signatures Signatures as a #GBytes
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     */
    gpgVerifyData(remoteName: string | null, data: any, signatures: any, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Set `out_have_object` to %TRUE if `self` contains the given object;
     * %FALSE otherwise.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    hasObject(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHaveObject */ boolean ]
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     * @param source Source repo
     * @param objtype Object type
     * @param checksum checksum
     * @param cancellable Cancellable
     */
    importObjectFrom(source: Repo, objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     * @param source Source repo
     * @param objtype Object type
     * @param checksum checksum
     * @param trusted If %TRUE, assume the source repo is valid and trusted
     * @param cancellable Cancellable
     */
    importObjectFromWithTrust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable?: Gio.Cancellable | null): boolean
    isSystem(): boolean
    /**
     * Returns whether the repository is writable by the current user.
     * If the repository is not writable, the `error` indicates why.
     */
    isWritable(): boolean
    /**
     * This function synchronously enumerates all commit objects starting
     * with `start,` returning data in `out_commits`.
     * @param start List commits starting with this checksum
     * @param outCommits Array of GVariants
     * @param cancellable Cancellable
     */
    listCommitObjectsStartingWith(start: string, outCommits: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function synchronously enumerates all objects in the
     * repository, returning data in `out_objects`.  `out_objects`
     * maps from keys returned by ostree_object_name_serialize()
     * to #GVariant values of type %OSTREE_REPO_LIST_OBJECTS_VARIANT_TYPE.
     * @param flags Flags controlling enumeration
     * @param cancellable Cancellable
     */
    listObjects(flags: RepoListObjectsFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.
     * @param refspecPrefix Only list refs which match this prefix
     * @param cancellable Cancellable
     */
    listRefs(refspecPrefix?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.  Differently from
     * ostree_repo_list_refs(), the prefix will not be removed from the ref
     * name.
     * @param refspecPrefix Only list refs which match this prefix
     * @param flags Options controlling listing behavior
     * @param cancellable Cancellable
     */
    listRefsExt(refspecPrefix: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * This function synchronously enumerates all static deltas in the
     * repository, returning its result in `out_deltas`.
     * @param cancellable Cancellable
     */
    listStaticDeltaNames(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDeltas */ string[] ]
    /**
     * A version of ostree_repo_load_variant() specialized to commits,
     * capable of returning extended state information.  Currently
     * the only extended state is %OSTREE_REPO_COMMIT_STATE_PARTIAL, which
     * means that only a sub-path of the commit is available.
     * @param checksum Commit checksum
     */
    loadCommit(checksum: string): [ /* returnType */ boolean, /* outCommit */ GLib.Variant | null, /* outState */ RepoCommitState | null ]
    /**
     * Load content object, decomposing it into three parts: the actual
     * content (for regular files), the metadata, and extended attributes.
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    loadFile(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream | null, /* outFileInfo */ Gio.FileInfo | null, /* outXattrs */ GLib.Variant | null ]
    /**
     * Load object as a stream; useful when copying objects between
     * repositories.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    loadObjectStream(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outSize */ number ]
    /**
     * Load the metadata object `sha2`56 of type `objtype,` storing the
     * result in `out_variant`.
     * @param objtype Expected object type
     * @param sha256 Checksum string
     */
    loadVariant(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    /**
     * Attempt to load the metadata object `sha2`56 of type `objtype` if it
     * exists, storing the result in `out_variant`.  If it doesn't exist,
     * %NULL is returned.
     * @param objtype Object type
     * @param sha256 ASCII checksum
     */
    loadVariantIfExists(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    open(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Starts or resumes a transaction. In order to write to a repo, you
     * need to start a transaction. You can complete the transaction with
     * ostree_repo_commit_transaction(), or abort the transaction with
     * ostree_repo_abort_transaction().
     * 
     * Currently, transactions are not atomic, and aborting a transaction
     * will not erase any data you  write during the transaction.
     * @param cancellable Cancellable
     */
    prepareTransaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTransactionResume */ boolean | null ]
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
     * @param flags Options controlling prune process
     * @param depth Stop traversal after this many iterations (-1 for unlimited)
     * @param cancellable Cancellable
     */
    prune(flags: RepoPruneFlags, depth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjectsTotal */ number, /* outObjectsPruned */ number, /* outPrunedObjectSizeTotal */ number ]
    /**
     * Prune static deltas, if COMMIT is specified then delete static delta files only
     * targeting that commit; otherwise any static delta of non existing commits are
     * deleted.
     * @param commit ASCII SHA256 checksum for commit, or %NULL for each non existing commit
     * @param cancellable Cancellable
     */
    pruneStaticDeltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     * @param remoteName Name of remote
     * @param refsToFetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(remoteName: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This is similar to ostree_repo_pull(), but only fetches a single
     * subpath.
     * @param remoteName Name of remote
     * @param dirToPull Subdirectory path
     * @param refsToFetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pullOneDir(remoteName: string, dirToPull: string, refsToFetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
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
     * @param remoteNameOrBaseurl Name of remote or file:// url
     * @param options A GVariant a{sv} with an extensible set of flags.
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pullWithOptions(remoteNameOrBaseurl: string, options: GLib.Variant, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Return the size in bytes of object with checksum `sha2`56, after any
     * compression has been applied.
     * @param objtype Object type
     * @param sha256 Checksum
     * @param cancellable Cancellable
     */
    queryObjectStorageSize(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSize */ number ]
    /**
     * Load the content for `rev` into `out_root`.
     * @param ref Ref or ASCII checksum
     * @param cancellable Cancellable
     */
    readCommit(ref: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRoot */ Gio.File, /* outCommit */ string ]
    /**
     * OSTree commits can have arbitrary metadata associated; this
     * function retrieves them.  If none exists, `out_metadata` will be set
     * to %NULL.
     * @param checksum ASCII SHA256 commit checksum
     * @param cancellable Cancellable
     */
    readCommitDetachedMetadata(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMetadata */ GLib.Variant ]
    /**
     * An OSTree repository can contain a high level "summary" file that
     * describes the available branches and other metadata.
     * 
     * It is regenerated automatically after a commit if
     * `core/commit-update-summary` is set.
     * @param additionalMetadata A GVariant of type a{sv}, or %NULL
     * @param cancellable Cancellable
     */
    regenerateSummary(additionalMetadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Create a new remote named `name` pointing to `url`.  If `options` is
     * provided, then it will be mapped to #GKeyFile entries, where the
     * GVariant dictionary key is an option string, and the value is
     * mapped as follows:
     *   * s: g_key_file_set_string()
     *   * b: g_key_file_set_boolean()
     *   * as: g_key_file_set_string_list()
     * @param name Name of remote
     * @param url URL for remote (if URL begins with metalink=, it will be used as such)
     * @param options GVariant of type a{sv}
     * @param cancellable Cancellable
     */
    remoteAdd(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * A combined function handling the equivalent of
     * ostree_repo_remote_add(), ostree_repo_remote_delete(), with more
     * options.
     * @param sysroot System root
     * @param changeop Operation to perform
     * @param name Name of remote
     * @param url URL for remote (if URL begins with metalink=, it will be used as such)
     * @param options GVariant of type a{sv}
     * @param cancellable Cancellable
     */
    remoteChange(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Delete the remote named `name`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     * @param cancellable Cancellable
     */
    remoteDelete(name: string, cancellable?: Gio.Cancellable | null): boolean
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
     * @param name name of a remote
     * @param outSummary return location for raw summary data, or %NULL
     * @param outSignatures return location for raw summary signature                                data, or %NULL
     * @param cancellable a #GCancellable
     */
    remoteFetchSummary(name: string, outSummary?: any | null, outSignatures?: any | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_remote_fetch_summary(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     * - override-url (s): Fetch summary from this URL if remote specifies no metalink in options
     * @param name name of a remote
     * @param options A GVariant a{sv} with an extensible set of flags
     * @param outSummary return location for raw summary data, or %NULL
     * @param outSignatures return location for raw summary signature                              data, or %NULL
     * @param cancellable a #GCancellable
     */
    remoteFetchSummaryWithOptions(name: string, options?: GLib.Variant | null, outSummary?: any | null, outSignatures?: any | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Return whether GPG verification is enabled for the remote named `name`
     * through `out_gpg_verify`.  It is an error if the provided remote does
     * not exist.
     * @param name Name of remote
     */
    remoteGetGpgVerify(name: string): [ /* returnType */ boolean, /* outGpgVerify */ boolean | null ]
    /**
     * Return whether GPG verification of the summary is enabled for the remote
     * named `name` through `out_gpg_verify_summary`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     */
    remoteGetGpgVerifySummary(name: string): [ /* returnType */ boolean, /* outGpgVerifySummary */ boolean | null ]
    /**
     * Return the URL of the remote named `name` through `out_url`.  It is an
     * error if the provided remote does not exist.
     * @param name Name of remote
     */
    remoteGetUrl(name: string): [ /* returnType */ boolean, /* outUrl */ string | null ]
    /**
     * Imports one or more GPG keys from the open `source_stream,` or from the
     * user's personal keyring if `source_stream` is %NULL.  The `key_ids` array
     * can optionally restrict which keys are imported.  If `key_ids` is %NULL,
     * then all keys are imported.
     * 
     * The imported keys will be used to conduct GPG verification when pulling
     * from the remote named `name`.
     * @param name name of a remote
     * @param sourceStream a #GInputStream, or %NULL
     * @param keyIds a %NULL-terminated array of GPG key IDs, or %NULL
     * @param outImported return location for the number of imported                              keys, or %NULL
     * @param cancellable a #GCancellable
     */
    remoteGpgImport(name: string, sourceStream?: Gio.InputStream | null, keyIds?: string[] | null, outImported?: number | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * List available remote names in an #OstreeRepo.  Remote names are sorted
     * alphabetically.  If no remotes are available the function returns %NULL.
     */
    remoteList(): string[]
    remoteListRefs(remoteName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Will fall back on remote directory if cannot
     * find the given refspec in local.
     * @param refspec A refspec
     * @param allowNoent Do not throw an error if refspec does not exist
     */
    resolveRev(refspec: string, allowNoent: boolean): [ /* returnType */ boolean, /* outRev */ string ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Differently from ostree_repo_resolve_rev(),
     * this will not fall back to searching through remote repos if a
     * local ref is specified but not found.
     * @param refspec A refspec
     * @param allowNoent Do not throw an error if refspec does not exist
     * @param flags Options controlling behavior
     */
    resolveRevExt(refspec: string, allowNoent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* outRev */ string ]
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
     * @param cancellable Cancellable
     */
    scanHardlinks(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set a custom location for the cache directory used for e.g.
     * per-remote summary caches. Setting this manually is useful when
     * doing operations on a system repo as a user because you don't have
     * write permissions in the repo, where the cache is normally stored.
     * @param dfd directory fd
     * @param path subpath in `dfd`
     * @param cancellable a #GCancellable
     */
    setCacheDir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Disable requests to fsync() to stable storage during commits.  This
     * option should only be used by build system tools which are creating
     * disposable virtual machines, or have higher level mechanisms for
     * ensuring data consistency.
     * @param disableFsync If %TRUE, do not fsync
     */
    setDisableFsync(disableFsync: boolean): void
    /**
     * This is like ostree_repo_transaction_set_ref(), except it may be
     * invoked outside of a transaction.  This is presently safe for the
     * case where we're creating or overwriting an existing ref.
     * @param remote A remote for the ref
     * @param ref The ref to write
     * @param checksum The checksum to point it to, or %NULL to unset
     * @param cancellable GCancellable
     */
    setRefImmediate(remote: string | null, ref: string, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a commit.
     * @param commitChecksum SHA256 of given commit to sign
     * @param keyId Use this GPG key id
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    signCommit(commitChecksum: string, keyId: string, homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function is deprecated, sign the summary file instead.
     * Add a GPG signature to a static delta.
     * @param fromCommit 
     * @param toCommit 
     * @param keyId 
     * @param homedir 
     * @param cancellable 
     */
    signDelta(fromCommit: string, toCommit: string, keyId: string, homedir: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Given a directory representing an already-downloaded static delta
     * on disk, apply it, generating a new commit.  The directory must be
     * named with the form "FROM-TO", where both are checksums, and it
     * must contain a file named "superblock", along with at least one part.
     * @param dirOrFile Path to a directory containing static delta data, or directly to the superblock
     * @param skipValidation If %TRUE, assume data integrity
     * @param cancellable Cancellable
     */
    staticDeltaExecuteOffline(dirOrFile: Gio.File, skipValidation: boolean, cancellable?: Gio.Cancellable | null): boolean
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
     * @param opt High level optimization choice
     * @param from ASCII SHA256 checksum of origin, or %NULL
     * @param to ASCII SHA256 checksum of target
     * @param metadata Optional metadata
     * @param params Parameters, see below
     * @param cancellable Cancellable
     */
    staticDeltaGenerate(opt: StaticDeltaGenerateOpt, from: string, to: string, metadata?: GLib.Variant | null, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
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
     * @param remote A remote for the ref
     * @param ref The ref to write
     * @param checksum The checksum to point it to
     */
    transactionSetRef(remote: string | null, ref: string, checksum: string): void
    /**
     * Like ostree_repo_transaction_set_ref(), but takes concatenated
     * `refspec` format as input instead of separate remote and name
     * arguments.
     * @param refspec The refspec to write
     * @param checksum The checksum to point it to
     */
    transactionSetRefspec(refspec: string, checksum: string): void
    /**
     * Create a new set `out_reachable` containing all objects reachable
     * from `commit_checksum,` traversing `maxdepth` parent commits.
     * @param commitChecksum ASCII SHA256 checksum
     * @param maxdepth Traverse this many parent commits, -1 for unlimited
     * @param cancellable Cancellable
     */
    traverseCommit(commitChecksum: string, maxdepth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReachable */ GLib.HashTable ]
    /**
     * Check for a valid GPG signature on commit named by the ASCII
     * checksum `commit_checksum`.
     * @param commitChecksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     */
    verifyCommit(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Read GPG signature(s) on the commit named by the ASCII checksum
     * `commit_checksum` and return detailed results.
     * @param commitChecksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     */
    verifyCommitExt(commitChecksum: string, keyringdir?: Gio.File | null, extraKeyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Verify `signatures` for `summary` data using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * @param remoteName Name of remote
     * @param summary Summary data as a #GBytes
     * @param signatures Summary signatures as a #GBytes
     * @param cancellable Cancellable
     */
    verifySummary(remoteName: string, summary: any, signatures: any, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Import an archive file `archive` into the repository, and write its
     * file structure to `mtree`.
     * @param archive A path to an archive file
     * @param mtree The #OstreeMutableTree to write to
     * @param modifier Optional commit modifier
     * @param autocreateParents Autocreate parent directories
     * @param cancellable Cancellable
     */
    writeArchiveToMtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreateParents: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     * @param parent ASCII SHA256 checksum for parent, or %NULL for none
     * @param subject Subject
     * @param body Body
     * @param metadata GVariant of type a{sv}, or %NULL for none
     * @param root The tree to point the commit to
     * @param cancellable Cancellable
     */
    writeCommit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string ]
    /**
     * Replace any existing metadata associated with commit referred to by
     * `checksum` with `metadata`.  If `metadata` is %NULL, then existing
     * data will be deleted.
     * @param checksum ASCII SHA256 commit checksum
     * @param metadata Metadata to associate with commit in with format "a{sv}", or %NULL to delete
     * @param cancellable Cancellable
     */
    writeCommitDetachedMetadata(checksum: string, metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     * @param parent ASCII SHA256 checksum for parent, or %NULL for none
     * @param subject Subject
     * @param body Body
     * @param metadata GVariant of type a{sv}, or %NULL for none
     * @param root The tree to point the commit to
     * @param time The time to use to stamp the commit
     * @param cancellable Cancellable
     */
    writeCommitWithTime(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string ]
    /**
     * Save `new_config` in place of this repository's config file.  Note
     * that `new_config` should not be modified after - this function
     * simply adds a reference.
     * @param newConfig Overwrite the config file with this data.  Do not change later!
     */
    writeConfig(newConfig: GLib.KeyFile): boolean
    /**
     * Store the content object streamed as `object_input,`
     * with total length `length`.  The actual checksum will
     * be returned as `out_csum`.
     * @param expectedChecksum If provided, validate content against this checksum
     * @param objectInput Content object stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    writeContent(expectedChecksum: string | null, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array | null ]
    /**
     * Asynchronously store the content object `object`.  If provided, the
     * checksum `expected_checksum` will be verified.
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Input
     * @param length Length of `object`
     * @param cancellable Cancellable
     * @param callback Invoked when content is writed
     */
    writeContentAsync(expectedChecksum: string | null, object: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an invocation of ostree_repo_write_content_async().
     * @param result a #GAsyncResult
     */
    writeContentFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ number ]
    /**
     * Store the content object streamed as `object_input,` with total
     * length `length`.  The given `checksum` will be treated as trusted.
     * 
     * This function should be used when importing file objects from local
     * disk, for example.
     * @param checksum Store content using this ASCII SHA256 checksum
     * @param objectInput Content stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    writeContentTrusted(checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store as objects all contents of the directory referred to by `dfd`
     * and `path` all children into the repository `self,` overlaying the
     * resulting filesystem hierarchy into `mtree`.
     * @param dfd Directory file descriptor
     * @param path Path
     * @param mtree Overlay directory contents into this tree
     * @param modifier Optional modifier
     * @param cancellable Cancellable
     */
    writeDfdToMtree(dfd: number, path: string, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store objects for `dir` and all children into the repository `self,`
     * overlaying the resulting filesystem hierarchy into `mtree`.
     * @param dir Path to a directory
     * @param mtree Overlay directory contents into this tree
     * @param modifier Optional modifier
     * @param cancellable Cancellable
     */
    writeDirectoryToMtree(dir: Gio.File, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant`.  Return the checksum
     * as `out_csum`.
     * 
     * If `expected_checksum` is not %NULL, verify it against the
     * computed checksum.
     * @param objtype Object type
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     */
    writeMetadata(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array | null ]
    /**
     * Asynchronously store the metadata object `variant`.  If provided,
     * the checksum `expected_checksum` will be verified.
     * @param objtype Object type
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     * @param callback Invoked when metadata is writed
     */
    writeMetadataAsync(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMetadataFinish(result: Gio.AsyncResult, outCsum: number): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param objectInput Metadata object stream
     * @param length Length, may be 0 for unknown
     * @param cancellable Cancellable
     */
    writeMetadataStreamTrusted(objtype: ObjectType, checksum: string, objectInput: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param variant Metadata object
     * @param cancellable Cancellable
     */
    writeMetadataTrusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Write all metadata objects for `mtree` to repo; the resulting
     * `out_file` points to the %OSTREE_OBJECT_TYPE_DIR_TREE object that
     * the `mtree` represented.
     * @param mtree Mutable tree
     * @param cancellable Cancellable
     */
    writeMtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFile */ Gio.File ]
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of OSTree-1.0.OSTree.Repo */
    /**
     * Emitted during a pull operation upon GPG verification (if enabled).
     * Applications can connect to this signal to output the verification
     * results if desired.
     * 
     * The signal will be emitted from whichever #GMainContext is the
     * thread-default at the point when ostree_repo_pull_with_options()
     * is called.
     * @param checksum checksum of the signed object
     * @param result an #OstreeGpgVerifyResult
     */
    connect(sigName: "gpg-verify-result", callback: ((checksum: string, result: GpgVerifyResult) => void)): number
    on(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gpg-verify-result", callback: (checksum: string, result: GpgVerifyResult) => void): NodeJS.EventEmitter
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remotes-config-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remotes-config-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysroot-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysroot-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysroot-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysroot-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysroot-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Repo_ConstructProps)
    _init (config?: Repo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File): Repo
    static newDefault(): Repo
    static newForSysrootPath(repoPath: Gio.File, sysrootPath: Gio.File): Repo
    static modeFromString(mode: string, outMode: RepoMode): boolean
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
     * @param progress Async progress
     * @param userData User data
     */
    static pullDefaultConsoleProgressChanged(progress: AsyncProgress, userData?: object | null): void
    /**
     * This hash table is a set of #GVariant which can be accessed via
     * ostree_object_name_deserialize().
     */
    static traverseNewReachable(): GLib.HashTable
    static $gtype: GObject.Type
}
interface RepoFile_ConstructProps extends GObject.Object_ConstructProps {
}
class RepoFile {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.RepoFile */
    ensureResolved(): boolean
    getChecksum(): string
    getRepo(): Repo
    getRoot(): RepoFile
    getXattrs(outXattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    treeFindChild(name: string, isDir: boolean, outContainer: GLib.Variant): number
    treeGetContents(): GLib.Variant
    treeGetContentsChecksum(): string
    treeGetMetadata(): GLib.Variant
    treeGetMetadataChecksum(): string
    treeQueryChild(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, outInfo: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    treeSetMetadata(checksum: string, metadata: GLib.Variant): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.File */
    /**
     * Gets an output stream for appending data to the file.
     * If the file doesn't already exist it is created.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
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
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    appendTo(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    /**
     * Asynchronously opens `file` for appending.
     * 
     * For more details, see g_file_append_to() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_append_to_finish() to get the result
     * of the operation.
     * @param flags a set of #GFileCreateFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    appendToAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file append operation started with
     * g_file_append_to_async().
     * @param res #GAsyncResult
     */
    appendToFinish(res: Gio.AsyncResult): Gio.FileOutputStream
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
     * @param flags a set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    buildAttributeListForCopy(flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): string
    /**
     * Copies the file `source` to the location specified by `destination`.
     * Can not handle recursive copies of directories.
     * 
     * If the flag %G_FILE_COPY_OVERWRITE is specified an already
     * existing `destination` file is overwritten.
     * 
     * If the flag %G_FILE_COPY_NOFOLLOW_SYMLINKS is specified then symlinks
     * will be copied as symlinks, otherwise the target of the
     * `source` symlink will be copied.
     * 
     * If the flag %G_FILE_COPY_ALL_METADATA is specified then all the metadata
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
     * If %G_FILE_COPY_OVERWRITE is not specified and the target exists, then
     * the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then the
     * %G_IO_ERROR_WOULD_RECURSE error is returned.
     * 
     * If you are interested in copying the #GFile object itself (not the on-disk
     * file), see g_file_dup().
     * @param destination destination #GFile
     * @param flags set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param progressCallback function to callback with   progress information, or %NULL if progress information is not needed
     */
    copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
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
     * @param destination destination #GFile
     * @param flags set of #GFileCopyFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    copyAsync(destination: Gio.File, flags: Gio.FileCopyFlags, ioPriority: number, cancellable?: Gio.Cancellable | null): void
    /**
     * Copies the file attributes from `source` to `destination`.
     * 
     * Normally only a subset of the file attributes are copied,
     * those that are copies in a normal file copy operation
     * (which for instance does not include e.g. owner). However
     * if %G_FILE_COPY_ALL_METADATA is specified in `flags,` then
     * all the metadata that is possible to copy is copied. This
     * is useful when implementing move by copy + delete source.
     * @param destination a #GFile to copy attributes to
     * @param flags a set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    copyAttributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Finishes copying the file started with g_file_copy_async().
     * @param res a #GAsyncResult
     */
    copyFinish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new file and returns an output stream for writing to it.
     * The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
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
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
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
     * @param flags a set of #GFileCreateFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    createAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_async().
     * @param res a #GAsyncResult
     */
    createFinish(res: Gio.AsyncResult): Gio.FileOutputStream
    /**
     * Creates a new file and returns a stream for reading and
     * writing to it. The file must not already exist.
     * 
     * By default files created are generally readable by everyone,
     * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
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
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    createReadwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
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
     * @param flags a set of #GFileCreateFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    createReadwriteAsync(flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file create operation started with
     * g_file_create_readwrite_async().
     * @param res a #GAsyncResult
     */
    createReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    delete(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously delete a file. If the `file` is a directory, it will
     * only be deleted if it is empty.  This has the same semantics as
     * g_unlink().
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    deleteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes deleting a file started with g_file_delete_async().
     * @param result a #GAsyncResult
     */
    deleteFinish(result: Gio.AsyncResult): boolean
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
     * @param flags flags affecting the operation
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    ejectMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable().
     * @param result a #GAsyncResult
     */
    ejectMountableFinish(result: Gio.AsyncResult): boolean
    /**
     * Starts an asynchronous eject on a mountable.
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_eject_mountable_with_operation_finish().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param flags flags affecting the operation
     * @param mountOperation a #GMountOperation,   or %NULL to avoid user interaction
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    ejectMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous eject operation started by
     * g_file_eject_mountable_with_operation().
     * @param result a #GAsyncResult
     */
    ejectMountableWithOperationFinish(result: Gio.AsyncResult): boolean
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
     * %G_FILE_ATTRIBUTE_STANDARD_NAME. %G_FILE_ATTRIBUTE_STANDARD_NAME should
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
     * @param attributes an attribute query string
     * @param flags a set of #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    enumerateChildren(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
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
     * @param attributes an attribute query string
     * @param flags a set of #GFileQueryInfoFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the   request is satisfied
     */
    enumerateChildrenAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async enumerate children operation.
     * See g_file_enumerate_children_async().
     * @param res a #GAsyncResult
     */
    enumerateChildrenFinish(res: Gio.AsyncResult): Gio.FileEnumerator
    /**
     * Checks if the two given #GFiles refer to the same file.
     * 
     * Note that two #GFiles that differ can still refer to the same
     * file on the filesystem due to various forms of filename
     * aliasing.
     * 
     * This call does no blocking I/O.
     * @param file2 the second #GFile
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    findEnclosingMount(cancellable?: Gio.Cancellable | null): Gio.Mount
    /**
     * Asynchronously gets the mount for the file.
     * 
     * For more details, see g_file_find_enclosing_mount() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_find_enclosing_mount_finish() to
     * get the result of the operation.
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    findEnclosingMountAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous find mount request.
     * See g_file_find_enclosing_mount_async().
     * @param res a #GAsyncResult
     */
    findEnclosingMountFinish(res: Gio.AsyncResult): Gio.Mount
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
    getBasename(): string | null
    /**
     * Gets a child of `file` with basename equal to `name`.
     * 
     * Note that the file with that specific name might not exist, but
     * you can still have a #GFile that points to it. You can use this
     * for instance to create that file.
     * 
     * This call does no blocking I/O.
     * @param name string containing the child's basename
     */
    getChild(name: string): Gio.File
    /**
     * Gets the child of `file` for a given `display_name` (i.e. a UTF-8
     * version of the name). If this function fails, it returns %NULL
     * and `error` will be set. This is very useful when constructing a
     * #GFile for a new file and the user entered the filename in the
     * user interface, for instance when you select a directory and
     * type a filename in the file selector.
     * 
     * This call does no blocking I/O.
     * @param displayName string to a possible child
     */
    getChildForDisplayName(displayName: string): Gio.File
    /**
     * Gets the parent directory for the `file`.
     * If the `file` represents the root directory of the
     * file system, then %NULL will be returned.
     * 
     * This call does no blocking I/O.
     */
    getParent(): Gio.File | null
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
    getParseName(): string
    /**
     * Gets the local pathname for #GFile, if one exists. If non-%NULL, this is
     * guaranteed to be an absolute, canonical path. It might contain symlinks.
     * 
     * This call does no blocking I/O.
     */
    getPath(): string | null
    /**
     * Gets the path for `descendant` relative to `parent`.
     * 
     * This call does no blocking I/O.
     * @param descendant input #GFile
     */
    getRelativePath(descendant: Gio.File): string | null
    /**
     * Gets the URI for the `file`.
     * 
     * This call does no blocking I/O.
     */
    getUri(): string
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
    getUriScheme(): string | null
    /**
     * Checks if `file` has a parent, and optionally, if it is `parent`.
     * 
     * If `parent` is %NULL then this function returns %TRUE if `file` has any
     * parent at all.  If `parent` is non-%NULL then %TRUE is only returned
     * if `file` is an immediate child of `parent`.
     * @param parent the parent to check for, or %NULL
     */
    hasParent(parent?: Gio.File | null): boolean
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
     * @param prefix input #GFile
     */
    hasPrefix(prefix: Gio.File): boolean
    /**
     * Checks to see if a #GFile has a given URI scheme.
     * 
     * This call does no blocking I/O.
     * @param uriScheme a string containing a URI scheme
     */
    hasUriScheme(uriScheme: string): boolean
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
    isNative(): boolean
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
     * @param cancellable a #GCancellable or %NULL
     */
    loadBytes(cancellable?: Gio.Cancellable | null): [ /* returnType */ any, /* etagOut */ string | null ]
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
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the   request is satisfied
     */
    loadBytesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     * @param result a #GAsyncResult provided to the callback
     */
    loadBytesFinish(result: Gio.AsyncResult): [ /* returnType */ any, /* etagOut */ string | null ]
    /**
     * Loads the content of the file into memory. The data is always
     * zero-terminated, but this is not included in the resultant `length`.
     * The returned `contents` should be freed with g_free() when no longer
     * needed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    loadContents(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
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
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    loadContentsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous load of the `file'`s contents.
     * The contents are placed in `contents,` and `length` is set to the
     * size of the `contents` string. The `contents` should be freed with
     * g_free() when no longer needed. If `etag_out` is present, it will be
     * set to the new entity tag for the `file`.
     * @param res a #GAsyncResult
     */
    loadContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
    /**
     * Finishes an asynchronous partial load operation that was started
     * with g_file_load_partial_contents_async(). The data is always
     * zero-terminated, but this is not included in the resultant `length`.
     * The returned `contents` should be freed with g_free() when no longer
     * needed.
     * @param res a #GAsyncResult
     */
    loadPartialContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    makeDirectory(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates a directory.
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    makeDirectoryAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous directory creation, started with
     * g_file_make_directory_async().
     * @param result a #GAsyncResult
     */
    makeDirectoryFinish(result: Gio.AsyncResult): boolean
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    makeDirectoryWithParents(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Creates a symbolic link named `file` which contains the string
     * `symlink_value`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param symlinkValue a string with the path for the target   of the new symlink
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    makeSymbolicLink(symlinkValue: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Collects the results from an earlier call to
     * g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for
     * more information.
     * @param result the #GAsyncResult passed to your #GAsyncReadyCallback
     */
    measureDiskUsageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    /**
     * Obtains a file or directory monitor for the given file,
     * depending on the type of the file.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param flags a set of #GFileMonitorFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
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
     * @param flags a set of #GFileMonitorFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    monitorDirectory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
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
     * @param flags a set of #GFileMonitorFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    monitorFile(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
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
     * @param flags flags affecting the operation
     * @param mountOperation a #GMountOperation   or %NULL to avoid user interaction
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    mountEnclosingVolume(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation started by g_file_mount_enclosing_volume().
     * @param result a #GAsyncResult
     */
    mountEnclosingVolumeFinish(result: Gio.AsyncResult): boolean
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
     * @param flags flags affecting the operation
     * @param mountOperation a #GMountOperation,   or %NULL to avoid user interaction
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    mountMountable(flags: Gio.MountMountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a mount operation. See g_file_mount_mountable() for details.
     * 
     * Finish an asynchronous mount operation that was started
     * with g_file_mount_mountable().
     * @param result a #GAsyncResult
     */
    mountMountableFinish(result: Gio.AsyncResult): Gio.File
    /**
     * Tries to move the file or directory `source` to the location specified
     * by `destination`. If native move operations are supported then this is
     * used, otherwise a copy + delete fallback is used. The native
     * implementation may support moving directories (for instance on moves
     * inside the same filesystem), but the fallback code does not.
     * 
     * If the flag %G_FILE_COPY_OVERWRITE is specified an already
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
     * If %G_FILE_COPY_OVERWRITE is not specified and the target exists,
     * then the error %G_IO_ERROR_EXISTS is returned.
     * 
     * If trying to overwrite a file over a directory, the %G_IO_ERROR_IS_DIRECTORY
     * error is returned. If trying to overwrite a directory with a directory the
     * %G_IO_ERROR_WOULD_MERGE error is returned.
     * 
     * If the source is a directory and the target does not exist, or
     * %G_FILE_COPY_OVERWRITE is specified and the target is a file, then
     * the %G_IO_ERROR_WOULD_RECURSE error may be returned (if the native
     * move operation isn't available).
     * @param destination #GFile pointing to the destination location
     * @param flags set of #GFileCopyFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param progressCallback #GFileProgressCallback   function for updates
     */
    move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null): boolean
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
     * @param destination #GFile pointing to the destination location
     * @param flags set of #GFileCopyFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param progressCallback #GFileProgressCallback   function for updates
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    moveAsync(destination: Gio.File, flags: Gio.FileCopyFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file movement, started with
     * g_file_move_async().
     * @param result a #GAsyncResult
     */
    moveFinish(result: Gio.AsyncResult): boolean
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
     * @param cancellable a #GCancellable
     */
    openReadwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    /**
     * Asynchronously opens `file` for reading and writing.
     * 
     * For more details, see g_file_open_readwrite() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_open_readwrite_finish() to get
     * the result of the operation.
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    openReadwriteAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_open_readwrite_async().
     * @param res a #GAsyncResult
     */
    openReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Exactly like g_file_get_path(), but caches the result via
     * g_object_set_qdata_full().  This is useful for example in C
     * applications which mix `g_file_*` APIs with native ones.  It
     * also avoids an extra duplicated string when possible, so will be
     * generally more efficient.
     * 
     * This call does no blocking I/O.
     */
    peekPath(): string | null
    /**
     * Polls a file of type %G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_mount_mountable_finish() to get
     * the result of the operation.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    pollMountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a poll operation. See g_file_poll_mountable() for details.
     * 
     * Finish an asynchronous poll operation that was polled
     * with g_file_poll_mountable().
     * @param result a #GAsyncResult
     */
    pollMountableFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns the #GAppInfo that is registered as the default
     * application to handle the file specified by `file`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    queryDefaultHandler(cancellable?: Gio.Cancellable | null): Gio.AppInfo
    /**
     * Async version of g_file_query_default_handler().
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is done
     */
    queryDefaultHandlerAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a g_file_query_default_handler_async() operation.
     * @param result a #GAsyncResult
     */
    queryDefaultHandlerFinish(result: Gio.AsyncResult): Gio.AppInfo
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    queryExists(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Utility function to inspect the #GFileType of a file. This is
     * implemented using g_file_query_info() and as such does blocking I/O.
     * 
     * The primary use case of this method is to check if a file is
     * a regular file, directory, or symlink.
     * @param flags a set of #GFileQueryInfoFlags passed to g_file_query_info()
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    queryFileType(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType
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
     * %G_FILE_ATTRIBUTE_FILESYSTEM_SIZE (the total size of the filesystem
     * in bytes), %G_FILE_ATTRIBUTE_FILESYSTEM_FREE (number of bytes available),
     * and %G_FILE_ATTRIBUTE_FILESYSTEM_TYPE (type of the filesystem).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will
     * be returned. Other errors are possible too, and depend on what
     * kind of filesystem the file is on.
     * @param attributes an attribute query string
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    queryFilesystemInfo(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
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
     * @param attributes an attribute query string
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filesystem info query.
     * See g_file_query_filesystem_info_async().
     * @param res a #GAsyncResult
     */
    queryFilesystemInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
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
     * %G_FILE_ATTRIBUTE_STANDARD_NAME.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled
     * by triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * 
     * For symlinks, normally the information about the target of the
     * symlink is returned, rather than information about the symlink
     * itself. However if you pass %G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS
     * in `flags` the information about the symlink itself will be returned.
     * Also, for symlinks that point to non-existing files the information
     * about the symlink itself will be returned.
     * 
     * If the file does not exist, the %G_IO_ERROR_NOT_FOUND error will be
     * returned. Other errors are possible too, and depend on what kind of
     * filesystem the file is on.
     * @param attributes an attribute query string
     * @param flags a set of #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    queryInfo(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
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
     * @param attributes an attribute query string
     * @param flags a set of #GFileQueryInfoFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the   request is satisfied
     */
    queryInfoAsync(attributes: string, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file info query.
     * See g_file_query_info_async().
     * @param res a #GAsyncResult
     */
    queryInfoFinish(res: Gio.AsyncResult): Gio.FileInfo
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    querySettableAttributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    /**
     * Obtain the list of attribute namespaces where new attributes
     * can be created by a user. An example of this is extended
     * attributes (in the "xattr" namespace).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    queryWritableNamespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
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
     * @param cancellable a #GCancellable
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file read operation started with
     * g_file_read_async().
     * @param res a #GAsyncResult
     */
    readFinish(res: Gio.AsyncResult): Gio.FileInputStream
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
     * but if you pass %G_FILE_CREATE_PRIVATE in `flags` the file
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
     * @param etag an optional [entity tag][gfile-etag]   for the current #GFile, or #NULL to ignore
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    replace(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
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
     * @param etag an [entity tag][gfile-etag] for the current #GFile,   or %NULL to ignore
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    replaceAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     * @param contents a string containing the new contents for `file`
     * @param etag the old [entity-tag][gfile-etag] for the document,   or %NULL
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    replaceContents(contents: Uint8Array, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* newEtag */ string | null ]
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
     * @param contents string of contents to replace the file with
     * @param etag a new [entity tag][gfile-etag] for the `file,` or %NULL
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    replaceContentsAsync(contents: Uint8Array, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Same as g_file_replace_contents_async() but takes a #GBytes input instead.
     * This function will keep a ref on `contents` until the operation is done.
     * Unlike g_file_replace_contents_async() this allows forgetting about the
     * content without waiting for the callback.
     * 
     * When this operation has completed, `callback` will be called with
     * `user_user` data, and the operation can be finalized with
     * g_file_replace_contents_finish().
     * @param contents a #GBytes
     * @param etag a new [entity tag][gfile-etag] for the `file,` or %NULL
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    replaceContentsBytesAsync(contents: any, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous replace of the given `file`. See
     * g_file_replace_contents_async(). Sets `new_etag` to the new entity
     * tag for the document, if present.
     * @param res a #GAsyncResult
     */
    replaceContentsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* newEtag */ string | null ]
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_async().
     * @param res a #GAsyncResult
     */
    replaceFinish(res: Gio.AsyncResult): Gio.FileOutputStream
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
     * @param etag an optional [entity tag][gfile-etag]   for the current #GFile, or #NULL to ignore
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    replaceReadwrite(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
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
     * @param etag an [entity tag][gfile-etag] for the current #GFile,   or %NULL to ignore
     * @param makeBackup %TRUE if a backup should be created
     * @param flags a set of #GFileCreateFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file replace operation started with
     * g_file_replace_readwrite_async().
     * @param res a #GAsyncResult
     */
    replaceReadwriteFinish(res: Gio.AsyncResult): Gio.FileIOStream
    /**
     * Resolves a relative path for `file` to an absolute path.
     * 
     * This call does no blocking I/O.
     * 
     * If the `relative_path` is an absolute path name, the resolution
     * is done absolutely (without taking `file` path as base).
     * @param relativePath a given relative path string
     */
    resolveRelativePath(relativePath: string): Gio.File
    /**
     * Sets an attribute in the file with attribute name `attribute` to `value_p`.
     * 
     * Some attributes can be unset by setting `type` to
     * %G_FILE_ATTRIBUTE_TYPE_INVALID and `value_p` to %NULL.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param type The type of the attribute
     * @param valueP a pointer to the value (or the pointer   itself if the type is a pointer type)
     * @param flags a set of #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttribute(attribute: string, type: Gio.FileAttributeType, valueP: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_BYTE_STRING to `value`.
     * If `attribute` is of a different type, this operation will fail,
     * returning %FALSE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a string containing the attribute's new value
     * @param flags a #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeByteString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT32 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a #gint32 containing the attribute's new value
     * @param flags a #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeInt32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_INT64 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a #guint64 containing the attribute's new value
     * @param flags a #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeInt64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_STRING to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a string containing the attribute's value
     * @param flags #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeString(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT32 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a #guint32 containing the attribute's new value
     * @param flags a #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeUint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `attribute` of type %G_FILE_ATTRIBUTE_TYPE_UINT64 to `value`.
     * If `attribute` is of a different type, this operation will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param attribute a string containing the attribute's name
     * @param value a #guint64 containing the attribute's new value
     * @param flags a #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributeUint64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sets the attributes of `file` with `info`.
     * 
     * For more details, see g_file_set_attributes_from_info(),
     * which is the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_attributes_finish() to get
     * the result of the operation.
     * @param info a #GFileInfo
     * @param flags a #GFileQueryInfoFlags
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback
     */
    setAttributesAsync(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting an attribute started in g_file_set_attributes_async().
     * @param result a #GAsyncResult
     */
    setAttributesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
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
     * @param info a #GFileInfo
     * @param flags #GFileQueryInfoFlags
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setAttributesFromInfo(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Renames `file` to the specified display name.
     * 
     * The display name is converted from UTF-8 to the correct encoding
     * for the target filesystem if possible and the `file` is renamed to this.
     * 
     * If you want to implement a rename operation in the user interface the
     * edit name (%G_FILE_ATTRIBUTE_STANDARD_EDIT_NAME) should be used as the
     * initial value in the rename widget, and then the result after editing
     * should be passed to g_file_set_display_name().
     * 
     * On success the resulting converted filename is returned.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param displayName a string
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    setDisplayName(displayName: string, cancellable?: Gio.Cancellable | null): Gio.File
    /**
     * Asynchronously sets the display name for a given #GFile.
     * 
     * For more details, see g_file_set_display_name() which is
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_set_display_name_finish() to get
     * the result of the operation.
     * @param displayName a string
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes setting a display name started with
     * g_file_set_display_name_async().
     * @param res a #GAsyncResult
     */
    setDisplayNameFinish(res: Gio.AsyncResult): Gio.File
    /**
     * Starts a file of type %G_FILE_TYPE_MOUNTABLE.
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
     * @param flags flags affecting the operation
     * @param startOperation a #GMountOperation, or %NULL to avoid user interaction
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied, or %NULL
     */
    startMountable(flags: Gio.DriveStartFlags, startOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a start operation. See g_file_start_mountable() for details.
     * 
     * Finish an asynchronous start operation that was started
     * with g_file_start_mountable().
     * @param result a #GAsyncResult
     */
    startMountableFinish(result: Gio.AsyncResult): boolean
    /**
     * Stops a file of type %G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_stop_mountable_finish() to get
     * the result of the operation.
     * @param flags flags affecting the operation
     * @param mountOperation a #GMountOperation,   or %NULL to avoid user interaction.
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    stopMountable(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stop operation, see g_file_stop_mountable() for details.
     * 
     * Finish an asynchronous stop operation that was started
     * with g_file_stop_mountable().
     * @param result a #GAsyncResult
     */
    stopMountableFinish(result: Gio.AsyncResult): boolean
    /**
     * Checks if `file` supports
     * [thread-default contexts][g-main-context-push-thread-default-context].
     * If this returns %FALSE, you cannot perform asynchronous operations on
     * `file` in a thread that has a thread-default context.
     */
    supportsThreadContexts(): boolean
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
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     */
    trash(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends `file` to the Trash location, if possible.
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied
     */
    trashAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous file trashing operation, started with
     * g_file_trash_async().
     * @param result a #GAsyncResult
     */
    trashFinish(result: Gio.AsyncResult): boolean
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
     * @param flags flags affecting the operation
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    unmountMountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation, see g_file_unmount_mountable() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable().
     * @param result a #GAsyncResult
     */
    unmountMountableFinish(result: Gio.AsyncResult): boolean
    /**
     * Unmounts a file of type %G_FILE_TYPE_MOUNTABLE.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * When the operation is finished, `callback` will be called.
     * You can then call g_file_unmount_mountable_finish() to get
     * the result of the operation.
     * @param flags flags affecting the operation
     * @param mountOperation a #GMountOperation,   or %NULL to avoid user interaction
     * @param cancellable optional #GCancellable object,   %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call   when the request is satisfied, or %NULL
     */
    unmountMountableWithOperation(flags: Gio.MountUnmountFlags, mountOperation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an unmount operation,
     * see g_file_unmount_mountable_with_operation() for details.
     * 
     * Finish an asynchronous unmount operation that was started
     * with g_file_unmount_mountable_with_operation().
     * @param result a #GAsyncResult
     */
    unmountMountableWithOperationFinish(result: Gio.AsyncResult): boolean
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
     * @param arg a command line string
     */
    static newForCommandlineArg(arg: string): Gio.File
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
     * @param arg a command line string
     * @param cwd the current working directory of the commandline
     */
    static newForCommandlineArgAndCwd(arg: string, cwd: string): Gio.File
    /**
     * Constructs a #GFile for a given path. This operation never
     * fails, but the returned object might not support any I/O
     * operation if `path` is malformed.
     * @param path a string containing a relative or absolute path.   The string must be encoded in the glib filename encoding.
     */
    static newForPath(path: string): Gio.File
    /**
     * Constructs a #GFile for a given URI. This operation never
     * fails, but the returned object might not support any I/O
     * operation if `uri` is malformed or if the uri type is
     * not supported.
     * @param uri a UTF-8 string containing a URI
     */
    static newForUri(uri: string): Gio.File
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
     * @param tmpl Template for the file   name, as in g_file_open_tmp(), or %NULL for a default template
     */
    static newTmp(tmpl?: string | null): [ /* returnType */ Gio.File, /* iostream */ Gio.FileIOStream ]
    /**
     * Constructs a #GFile with the given `parse_name` (i.e. something
     * given by g_file_get_parse_name()). This operation never fails,
     * but the returned object might not support any I/O operation if
     * the `parse_name` cannot be parsed.
     * @param parseName a file name or path to be parsed
     */
    static parseName(parseName: string): Gio.File
    static $gtype: GObject.Type
}
interface SePolicy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SePolicy */
    path?: Gio.File
}
class SePolicy {
    /* Properties of OSTree-1.0.OSTree.SePolicy */
    readonly path: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SePolicy */
    getCsum(): string
    /**
     * Store in `out_label` the security context for the given `relpath` and
     * mode `unix_mode`.  If the policy does not specify a label, %NULL
     * will be returned.
     * @param relpath Path
     * @param unixMode Unix mode
     * @param cancellable Cancellable
     */
    getLabel(relpath: string, unixMode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLabel */ string | null ]
    getName(): string
    getPath(): Gio.File
    /**
     * Reset the security context of `target` based on the SELinux policy.
     * @param path Path string to use for policy lookup
     * @param info File attributes
     * @param target Physical path to target file
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewLabel */ string | null ]
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SePolicy_ConstructProps)
    _init (config?: SePolicy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy
    /**
     * Cleanup function for ostree_sepolicy_setfscreatecon().
     * @param unused 
     */
    static fscreateconCleanup(unused?: object | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Sysroot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.Sysroot */
    path?: Gio.File
}
class Sysroot {
    /* Properties of OSTree-1.0.OSTree.Sysroot */
    readonly path: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Sysroot */
    /**
     * Delete any state that resulted from a partially completed
     * transaction, such as incomplete deployments.
     * @param cancellable Cancellable
     */
    cleanup(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Check out deployment tree with revision `revision,` performing a 3
     * way merge with `provided_merge_deployment` for configuration.
     * @param osname osname to use for merge deployment
     * @param revision Checksum to add
     * @param origin Origin to use for upgrades
     * @param providedMergeDeployment Use this deployment for merge path
     * @param overrideKernelArgv Use these as kernel arguments; if %NULL, inherit options from provided_merge_deployment
     * @param cancellable Cancellable
     */
    deployTree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, providedMergeDeployment?: Deployment | null, overrideKernelArgv?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    /**
     * Entirely replace the kernel arguments of `deployment` with the
     * values in `new_kargs`.
     * @param deployment A deployment
     * @param newKargs Replace deployment's kernel arguments
     * @param cancellable Cancellable
     */
    deploymentSetKargs(deployment: Deployment, newKargs: string[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * By default, deployment directories are not mutable.  This function
     * will allow making them temporarily mutable, for example to allow
     * layering additional non-OSTree content.
     * @param deployment A deployment
     * @param isMutable Whether or not deployment's files can be changed
     * @param cancellable 
     */
    deploymentSetMutable(deployment: Deployment, isMutable: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Configure the target deployment `deployment` such that it
     * is writable.  There are multiple modes, essentially differing
     * in whether or not any changes persist across reboot.
     * 
     * The `OSTREE_DEPLOYMENT_UNLOCKED_HOTFIX` state is persistent
     * across reboots.
     * @param deployment Deployment
     * @param unlockedState Transition to this unlocked state
     * @param cancellable Cancellable
     */
    deploymentUnlock(deployment: Deployment, unlockedState: DeploymentUnlockedState, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Ensure that `self` is set up as a valid rootfs, by creating
     * /ostree/repo, among other things.
     * @param cancellable Cancellable
     */
    ensureInitialized(cancellable?: Gio.Cancellable | null): boolean
    getBootedDeployment(): Deployment
    getBootversion(): number
    getDeploymentDirectory(deployment: Deployment): Gio.File
    /**
     * Note this function only returns a *relative* path - if you want
     * to access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     * @param deployment A deployment
     */
    getDeploymentDirpath(deployment: Deployment): string
    getDeployments(): Deployment[]
    /**
     * Access a file descriptor that refers to the root directory of this
     * sysroot.  ostree_sysroot_load() must have been invoked prior to
     * calling this function.
     */
    getFd(): number
    /**
     * Find the deployment to use as a configuration merge source; this is
     * the first one in the current deployment list which matches osname.
     * @param osname Operating system group
     */
    getMergeDeployment(osname?: string | null): Deployment
    getPath(): Gio.File
    /**
     * Retrieve the OSTree repository in sysroot `self`.
     * @param cancellable Cancellable
     */
    getRepo(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRepo */ Repo ]
    getSubbootversion(): number
    /**
     * Initialize the directory structure for an "osname", which is a
     * group of operating system deployments, with a shared `/var`.  One
     * is required for generating a deployment.
     * @param osname Name group of operating system checkouts
     * @param cancellable Cancellable
     */
    initOsname(osname: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Load deployment list, bootversion, and subbootversion from the
     * rootfs `self`.
     * @param cancellable Cancellable
     */
    load(cancellable?: Gio.Cancellable | null): boolean
    loadIfChanged(outChanged: boolean, cancellable?: Gio.Cancellable | null): boolean
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
     * @param cancellable Cancellable
     * @param callback Callback
     */
    lockAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Call when ostree_sysroot_lock_async() is ready.
     * @param result Result
     */
    lockFinish(result: Gio.AsyncResult): boolean
    originNewFromRefspec(refspec: string): GLib.KeyFile
    /**
     * Like ostree_sysroot_cleanup() in that it cleans up incomplete deployments
     * and old boot versions, but does NOT prune the repository.
     * @param cancellable Cancellable
     */
    prepareCleanup(cancellable?: Gio.Cancellable | null): boolean
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
     * @param osname OS name
     * @param newDeployment Prepend this deployment to the list
     * @param mergeDeployment Use this deployment for configuration merge
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    simpleWriteDeployment(osname: string | null, newDeployment: Deployment, mergeDeployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Try to acquire an exclusive multi-process write lock for `self`.  If
     * another process holds the lock, this function will return
     * immediately, setting `out_acquired` to %FALSE, and returning %TRUE
     * (and no error).
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    tryLock(): [ /* returnType */ boolean, /* outAcquired */ boolean ]
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
     * @param newDeployments List of new deployments
     * @param cancellable Cancellable
     */
    writeDeployments(newDeployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Immediately replace the origin file of the referenced `deployment`
     * with the contents of `new_origin`.  If `new_origin` is %NULL,
     * this function will write the current origin of `deployment`.
     * @param deployment Deployment
     * @param newOrigin Origin content
     * @param cancellable Cancellable
     */
    writeOriginFile(deployment: Deployment, newOrigin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Sysroot_ConstructProps)
    _init (config?: Sysroot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path?: Gio.File | null): Sysroot
    static newDefault(): Sysroot
    static getDeploymentOriginPath(deploymentPath: Gio.File): Gio.File
    static $gtype: GObject.Type
}
interface SysrootUpgrader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SysrootUpgrader */
    flags?: SysrootUpgraderFlags
    osname?: string
    sysroot?: Sysroot
}
class SysrootUpgrader {
    /* Properties of OSTree-1.0.OSTree.SysrootUpgrader */
    readonly flags: SysrootUpgraderFlags
    readonly osname: string
    readonly sysroot: Sysroot
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SysrootUpgrader */
    /**
     * Write the new deployment to disk, perform a configuration merge
     * with /etc, and update the bootloader configuration.
     * @param cancellable Cancellable
     */
    deploy(cancellable?: Gio.Cancellable | null): boolean
    dupOrigin(): GLib.KeyFile
    getOrigin(): GLib.KeyFile
    getOriginDescription(): string
    /**
     * Perform a pull from the origin.  First check if the ref has
     * changed, if so download the linked objects, and store the updated
     * ref locally.  Then `out_changed` will be %TRUE.
     * 
     * If the origin remote is unchanged, `out_changed` will be set to
     * %FALSE.
     * @param flags Flags controlling pull behavior
     * @param upgraderFlags Flags controlling upgrader behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChanged */ boolean ]
    /**
     * Like ostree_sysroot_upgrader_pull(), but allows retrieving just a
     * subpath of the tree.  This can be used to download metadata files
     * from inside the tree such as package databases.
     * @param dirToPull 
     * @param flags 
     * @param upgraderFlags 
     * @param progress 
     * @param outChanged 
     * @param cancellable 
     */
    pullOneDir(dirToPull: string, flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress: AsyncProgress, outChanged: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Replace the origin with `origin`.
     * @param origin The new origin
     * @param cancellable Cancellable
     */
    setOrigin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
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
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::osname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::osname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::osname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::osname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysroot", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysroot", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysroot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysroot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysroot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SysrootUpgrader_ConstructProps)
    _init (config?: SysrootUpgrader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOs(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static newForOsWithFlags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    /**
     * Check that the timestamp on `to_rev` is equal to or newer than
     * `from_rev`.  This protects systems against man-in-the-middle
     * attackers which provide a client with an older commit.
     * @param repo Repo
     * @param fromRev From revision
     * @param toRev To revision
     */
    static checkTimestamps(repo: Repo, fromRev: string, toRev: string): boolean
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AsyncProgressClass {
    /* Fields of OSTree-1.0.OSTree.AsyncProgressClass */
    parentClass: GObject.ObjectClass
    changed: (self: AsyncProgress) => void
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
    gIface: GObject.TypeInterface
    query: (bootloader: Bootloader, outIsActive: boolean, cancellable: Gio.Cancellable) => boolean
    getName: (self: Bootloader) => string
    writeConfig: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    isAtomic: (self: Bootloader) => boolean
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
    parentClass: Gio.FilterInputStreamClass
    static name: string
}
class ChecksumInputStreamPrivate {
    static name: string
}
class CmdPrivateVTable {
    /* Fields of OSTree-1.0.OSTree.CmdPrivateVTable */
    ostreeGenerateGrub2Config: (sysroot: Sysroot, bootversion: number, targetFd: number, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDump: (repo: Repo, deltaId: string, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaQueryExists: (repo: Repo, deltaId: string, outExists: boolean, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDelete: (repo: Repo, deltaId: string, cancellable: Gio.Cancellable) => boolean
    static name: string
}
class DiffItem {
    /* Fields of OSTree-1.0.OSTree.DiffItem */
    refcount: number
    src: Gio.File
    target: Gio.File
    srcInfo: Gio.FileInfo
    targetInfo: Gio.FileInfo
    srcChecksum: string
    targetChecksum: string
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
    parentInstance: Gio.InputStream
    static name: string
}
class LibarchiveInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass */
    parentClass: Gio.InputStreamClass
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
    parentClass: GObject.ObjectClass
    static name: string
}
class LzmaDecompressor {
    static name: string
}
class LzmaDecompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaDecompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MutableTreeClass {
    /* Fields of OSTree-1.0.OSTree.MutableTreeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class MutableTreeIter {
    /* Fields of OSTree-1.0.OSTree.MutableTreeIter */
    inFiles: boolean
    iter: GLib.HashTableIter
    static name: string
}
class RepoCheckoutAtOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: boolean
    enableFsync: boolean
    processWhiteouts: boolean
    noCopyFallback: boolean
    unusedBools: boolean[]
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedInts: number[]
    unusedPtrs: object[]
    static name: string
}
class RepoCheckoutOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutOptions */
    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: number
    disableFsync: number
    processWhiteouts: number
    noCopyFallback: number
    reserved: number
    subpath: string
    devinoToCsumCache: RepoDevInoCache
    unusedUints: number[]
    unusedPtrs: object[]
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
     * @param cache A hash table caching device,inode to checksums
     */
    setDevinoCache(cache: RepoDevInoCache): void
    /**
     * If `policy` is non-%NULL, use it to look up labels to use for
     * "security.selinux" extended attributes.
     * 
     * Note that any policy specified this way operates in addition to any
     * extended attributes provided via
     * ostree_repo_commit_modifier_set_xattr_callback().  However if both
     * specify a value for "security.selinux", then the one from the
     * policy wins.
     * @param sepolicy Policy to use for labeling
     */
    setSepolicy(sepolicy?: SePolicy | null): void
    /**
     * If set, this function should return extended attributes to use for
     * the given path.  This is useful for things like ACLs and SELinux,
     * where a build system can label the files as it's committing to the
     * repository.
     * @param callback Function to be invoked, should return extended attributes for path
     */
    setXattrCallback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
    static name: string
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
    constructor(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null)
    /* Static methods and pseudo-constructors */
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
}
class RepoCommitTraverseIter {
    /* Fields of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    initialized: boolean
    dummy: object[]
    dummyChecksumData: number[]
    /* Methods of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    clear(): void
    /**
     * Return information on the current directory.  This function may
     * only be called if %OSTREE_REPO_COMMIT_ITER_RESULT_DIR was returned
     * from ostree_repo_commit_traverse_iter_next().
     */
    getDir(): [ /* outName */ string, /* outContentChecksum */ string, /* outMetaChecksum */ string ]
    /**
     * Return information on the current file.  This function may only be
     * called if %OSTREE_REPO_COMMIT_ITER_RESULT_FILE was returned from
     * ostree_repo_commit_traverse_iter_next().
     */
    getFile(): [ /* outName */ string, /* outChecksum */ string ]
    /**
     * Initialize (in place) an iterator over the root of a commit object.
     * @param repo A repo
     * @param commit Variant of type %OSTREE_OBJECT_TYPE_COMMIT
     * @param flags Flags
     */
    initCommit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Initialize (in place) an iterator over a directory tree.
     * @param repo A repo
     * @param dirtree Variant of type %OSTREE_OBJECT_TYPE_DIR_TREE
     * @param flags Flags
     */
    initDirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
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
     * @param cancellable Cancellable
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
    disableXattrs: number
    reserved: number
    timestampSecs: number
    unusedUint: number[]
    pathPrefix: string
    unusedPtrs: object[]
    static name: string
}
abstract class RepoFileClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class RepoFileEnumerator {
    static name: string
}
class RepoFileEnumeratorClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileEnumeratorClass */
    parentClass: Gio.FileEnumeratorClass
    static name: string
}
class RepoImportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoImportArchiveOptions */
    ignoreUnsupportedContent: number
    autocreateParents: number
    useOstreeConvention: number
    callbackWithEntryPathname: number
    reserved: number
    unusedUint: number[]
    unusedPtrs: object[]
    static name: string
}
class RepoTransactionStats {
    /* Fields of OSTree-1.0.OSTree.RepoTransactionStats */
    /**
     * The total number of metadata objects
     * in the repository after this transaction has completed.
     */
    metadataObjectsTotal: number
    /**
     * The number of metadata objects that
     * were written to the repository in this transaction.
     */
    metadataObjectsWritten: number
    /**
     * The total number of content objects
     * in the repository after this transaction has completed.
     */
    contentObjectsTotal: number
    /**
     * The number of content objects that
     * were written to the repository in this transaction.
     */
    contentObjectsWritten: number
    /**
     * The amount of data added to the repository,
     * in bytes, counting only content objects.
     */
    contentBytesWritten: number
    /**
     * reserved
     */
    padding1: number
    /**
     * reserved
     */
    padding2: number
    /**
     * reserved
     */
    padding3: number
    /**
     * reserved
     */
    padding4: number
    static name: string
}
class RollsumMatches {
    /* Fields of OSTree-1.0.OSTree.RollsumMatches */
    fromRollsums: GLib.HashTable
    toRollsums: GLib.HashTable
    crcmatches: number
    bufmatches: number
    total: number
    matchSize: number
    matches: object[]
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