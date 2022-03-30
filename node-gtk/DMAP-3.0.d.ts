/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DMAP-3.0
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace DMAP {

enum ConnectionState {
    GET_INFO,
    LOGIN,
    GET_REVISION_NUMBER,
    GET_DB_INFO,
    GET_SONGS,
    GET_PLAYLISTS,
    GET_PLAYLIST_ENTRIES,
    LOGOUT,
    DONE,
}
enum ContentCode {
    CC_INVALID,
    RAW,
    CC_MDCL,
    CC_MSTT,
    CC_MIID,
    CC_MINM,
    CC_MIKD,
    CC_MPER,
    CC_MCON,
    CC_MCTI,
    CC_MPCO,
    CC_MSTS,
    CC_MIMC,
    CC_MCTC,
    CC_MRCO,
    CC_MTCO,
    CC_MLCL,
    CC_MLIT,
    CC_MBCL,
    CC_MSRV,
    CC_MSAU,
    CC_MSLR,
    CC_MPRO,
    CC_MSAL,
    CC_MSUP,
    CC_MSPI,
    CC_MSEX,
    CC_MSBR,
    CC_MSQY,
    CC_MSIX,
    CC_MSRS,
    CC_MSTM,
    CC_MSDC,
    CC_MCCR,
    CC_MCNM,
    CC_MCNA,
    CC_MCTY,
    CC_MLOG,
    CC_MLID,
    CC_MUPD,
    CC_MUSR,
    CC_MUTY,
    CC_MUDL,
    CC_MSMA,
    CC_FQUESCH,
    CC_APRO,
    CC_AVDB,
    CC_ABRO,
    CC_ABAL,
    CC_ABAR,
    CC_ABCP,
    CC_ABGN,
    CC_ADBS,
    CC_ASAL,
    CC_ASAI,
    CC_ASAA,
    CC_ASAR,
    CC_ASBT,
    CC_ASBR,
    CC_ASCM,
    CC_ASCO,
    CC_ASDA,
    CC_ASDM,
    CC_ASDC,
    CC_ASDN,
    CC_ASDB,
    CC_ASEQ,
    CC_ASFM,
    CC_ASGN,
    CC_ASDT,
    CC_ASRV,
    CC_ASSR,
    CC_ASSZ,
    CC_ASST,
    CC_ASSP,
    CC_ASTM,
    CC_ASTC,
    CC_ASTN,
    CC_ASUR,
    CC_ASYR,
    CC_ASDK,
    CC_ASUL,
    CC_ASSU,
    CC_ASSA,
    CC_APLY,
    CC_ABPL,
    CC_APSO,
    CC_PRSV,
    CC_ARIF,
    CC_MSAS,
    CC_AGRP,
    CC_AGAL,
    CC_ASCP,
    CC_PPRO,
    CC_PASP,
    CC_PFDT,
    CC_PICD,
    CC_PIMF,
    CC_PFMT,
    CC_PIFS,
    CC_PLSZ,
    CC_PHGT,
    CC_PWTH,
    CC_PRAT,
    CC_PCMT,
    CC_PRET,
    CC_AESV,
    CC_AEHV,
    CC_AESP,
    CC_AEPP,
    CC_AEPS,
    CC_AESG,
    CC_AEMK,
    CC_AEFP,
    CC_CMPA,
    CC_CMNM,
    CC_CMTY,
    CC_CMPG,
    CC_CACI,
    CC_CAPS,
    CC_CASH,
    CC_CARP,
    CC_CAAS,
    CC_CAAR,
    CC_CAIA,
    CC_CANP,
    CC_CANN,
    CC_CANA,
    CC_CANL,
    CC_CANG,
    CC_CANT,
    CC_CASP,
    CC_CASS,
    CC_CAST,
    CC_CASU,
    CC_CASG,
    CC_CACR,
    CC_CMCP,
    CC_CMGT,
    CC_CMIK,
    CC_CMSP,
    CC_CMST,
    CC_CMSV,
    CC_CMSR,
    CC_CMMK,
    CC_CMVO,
    CC_CMPR,
    CC_CAPR,
    CC_AEFR,
    CC_CAOV,
    CC_CMRL,
    CC_CAHP,
    CC_CAIV,
    CC_CAVC,
}
enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
}
enum MdnsBrowserServiceType {
    INVALID,
    DAAP,
    DPAP,
    DACP,
    RAOP,
    LAST,
}
enum MdnsBrowserTransportProtocol {
    TCP,
    UDP,
    LAST,
}
enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
}
enum MediaKind {
    MUSIC,
    MOVIE,
    PODCAST,
    TV_SHOW,
}
enum Type {
    BYTE,
    SIGNED_INT,
    SHORT,
    INT,
    INT64,
    STRING,
    DATE,
    VERSION,
    CONTAINER,
    POINTER,
}
const HASH_SIZE: number
const STATUS_OK: number
function contentCodeDmapType(code: ContentCode): Type
function contentCodeName(code: ContentCode): string
function contentCodeReadFromBuffer(buf: string): ContentCode
function contentCodeString(code: ContentCode): string
function contentCodeStringAsInt32(str: string): number
function contentCodes(number: number): ContentCodeDefinition
function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
function hashProgressiveFinal(context: HashContext, digest: number): void
function hashProgressiveInit(context: HashContext): void
function hashProgressiveToString(digest: number, string: string): void
function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
function mdnsBrowserErrorQuark(): GLib.Quark
function mdnsPublisherErrorQuark(): GLib.Quark
function mimeToFormat(transcodeMimetype: string): string
function structureDestroy(structure: GLib.Node): void
function structureGetSize(structure: GLib.Node): number
function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
function structurePrint(structure: GLib.Node): void
function structureSerialize(structure: GLib.Node, length: number): string
interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
class ContainerDb {
    /* Methods of DMAP-3.0.DMAP.ContainerDb */
    /**
     * Add a record to the database.
     * @param record A record.
     */
    add(record: ContainerRecord): void
    count(): number
    static name: string
}
class ContainerRecord {
    /* Properties of DMAP-3.0.DMAP.ContainerRecord */
    name: string
    /* Methods of DMAP-3.0.DMAP.ContainerRecord */
    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
     * @param record A DMAPRecord.
     * @param id The record's ID.
     */
    addEntry(record: Record, id: number): void
    getEntryCount(): number
    getId(): number
    static name: string
}
class Db {
    /* Methods of DMAP-3.0.DMAP.Db */
    /**
     * Add a record to the database.
     * @param record A database record.
     */
    add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @param path A path to an appropriate media file.
     */
    addPath(path: string): number
    /**
     * Add a record to the database and assign it the given ID.
     * @param record A database record.
     * @param id A database record ID.
     */
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string): number
    static name: string
}
class Record {
    /* Methods of DMAP-3.0.DMAP.Record */
    setFromBlob(blob: Uint8Array): boolean
    static name: string
}
class RecordFactory {
    static name: string
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of DMAP-3.0.DMAP.Connection */
    baseUri?: object
    databaseId?: number
    db?: object
    dmapVersion?: number
    factory?: object
    host?: string
    name?: string
    password?: string
    port?: number
    revisionNumber?: number
    sessionId?: number
    username?: string
}
class Connection {
    /* Properties of DMAP-3.0.DMAP.Connection */
    baseUri: object
    databaseId: number
    readonly db: object
    dmapVersion: number
    readonly factory: object
    readonly host: string
    readonly name: string
    password: string
    readonly port: number
    revisionNumber: number
    sessionId: number
    readonly username: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.Connection */
    /**
     * Attach an authentication credential to a request. This
     * method should be called by a function that is connected to the
     * #DMAPConnection::authenticate signal. The signal will provide the
     * connection, session, message and auth to that function. That function
     * should obtain a password and provide it to this method.
     * @param session A #SoupSession
     * @param message A #SoupMessage
     * @param auth A #SoupAuth
     * @param password A password
     */
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    getHeaders(uri: string): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void
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
    /* Signals of DMAP-3.0.DMAP.Connection */
    connect(sigName: "authenticate", callback: ((object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    on(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    connect(sigName: "connected", callback: (() => void)): number
    on(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connected"): void
    connect(sigName: "connecting", callback: ((object: number, p0: number) => void)): number
    on(sigName: "connecting", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connecting", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connecting", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "connecting", object: number, p0: number): void
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "operation-done", callback: (() => void)): number
    on(sigName: "operation-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "operation-done"): void
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
    connect(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::db", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dmap-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dmap-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision-number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static $gtype: GObject.Type
}
interface GstInputStream_ConstructProps extends Gio.InputStream_ConstructProps {
}
class GstInputStream {
    /* Fields of Gio-2.0.Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gio-2.0.Gio.Seekable */
    /**
     * Tests if the stream supports the #GSeekableIface.
     */
    canSeek(): boolean
    /**
     * Tests if the length of the stream can be adjusted with
     * g_seekable_truncate().
     */
    canTruncate(): boolean
    /**
     * Seeks in the stream by the given `offset,` modified by `type`.
     * 
     * Attempting to seek past the end of the stream will have different
     * results depending on if the stream is fixed-sized or resizable.  If
     * the stream is resizable then seeking past the end and then writing
     * will result in zeros filling the empty space.  Seeking past the end
     * of a resizable stream and reading will result in EOF.  Seeking past
     * the end of a fixed-sized stream will fail.
     * 
     * Any operation that would result in a negative offset will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param offset a #goffset.
     * @param type a #GSeekType.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tells the current position within the stream.
     */
    tell(): number
    /**
     * Sets the length of the stream to `offset`. If the stream was previously
     * larger than `offset,` the extra data is discarded. If the stream was
     * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param offset new length for `seekable,` in bytes.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: GstInputStream_ConstructProps)
    _init (config?: GstInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(transcodeMimetype: string, srcStream: Gio.InputStream): GstInputStream
    static $gtype: GObject.Type
}
interface MdnsBrowser_ConstructProps extends GObject.Object_ConstructProps {
}
class MdnsBrowser {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.MdnsBrowser */
    getServiceType(): MdnsBrowserServiceType
    /**
     * Starts a DMAPMdnsBrowser.
     */
    start(): boolean
    /**
     * Stops a DMAPMdnsBrowser.
     */
    stop(): boolean
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
    /* Signals of DMAP-3.0.DMAP.MdnsBrowser */
    /**
     * Emitted each time a service becomes available to `browser`
     * @param service #DMAPMdnsBrowserService
     */
    connect(sigName: "service-added", callback: ((service: object) => void)): number
    on(sigName: "service-added", callback: (service: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-added", callback: (service: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-added", callback: (service: object) => void): NodeJS.EventEmitter
    emit(sigName: "service-added", service: object): void
    connect(sigName: "service-removed", callback: ((object: string) => void)): number
    on(sigName: "service-removed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-removed", object: string): void
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
    constructor (config?: MdnsBrowser_ConstructProps)
    _init (config?: MdnsBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    static $gtype: GObject.Type
}
interface MdnsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
class MdnsPublisher {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.MdnsPublisher */
    publish(name: string, port: number, typeOfService: string, passwordRequired: boolean, txtRecords: string): boolean
    renameAtPort(port: number, name: string): boolean
    withdraw(port: number): boolean
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
    /* Signals of DMAP-3.0.DMAP.MdnsPublisher */
    connect(sigName: "name-collision", callback: ((object: string) => void)): number
    on(sigName: "name-collision", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-collision", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-collision", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-collision", object: string): void
    connect(sigName: "published", callback: ((object: string) => void)): number
    on(sigName: "published", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "published", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "published", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "published", object: string): void
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
    constructor (config?: MdnsPublisher_ConstructProps)
    _init (config?: MdnsPublisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MdnsPublisher
    static $gtype: GObject.Type
}
interface Share_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of DMAP-3.0.DMAP.Share */
    authMethod?: number
    containerDb?: object
    db?: object
    name?: string
    password?: string
    revisionNumber?: number
    transcodeMimetype?: string
    txtRecords?: string[]
}
class Share {
    /* Properties of DMAP-3.0.DMAP.Share */
    authMethod: number
    readonly containerDb: object
    readonly db: object
    name: string
    password: string
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    readonly transcodeMimetype: string
    txtRecords: string[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::auth-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container-db", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-db", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::db", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision-number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-ipv4", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv4", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-ipv6", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv6", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transcode-mimetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transcode-mimetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::txt-records", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::txt-records", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Share_ConstructProps)
    _init (config?: Share_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of DMAP-3.0.DMAP.ConnectionClass */
    parent: GObject.ObjectClass
    getProtocolVersionCc: (connection: Connection) => ContentCode
    getQueryMetadata: (connection: Connection) => string
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operationDone: (connection: Connection) => void
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class ContainerDbIface {
    /* Fields of DMAP-3.0.DMAP.ContainerDbIface */
    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
    static name: string
}
abstract class ContainerRecordIface {
    /* Fields of DMAP-3.0.DMAP.ContainerRecordIface */
    parent: GObject.TypeInterface
    getId: (record: ContainerRecord) => number
    addEntry: (containerRecord: ContainerRecord, record: Record, id: number) => void
    getEntryCount: (record: ContainerRecord) => number
    static name: string
}
class ContentCodeDefinition {
    /* Fields of DMAP-3.0.DMAP.ContentCodeDefinition */
    code: ContentCode
    intCode: number
    name: string
    string: string
    type: Type
    static name: string
}
class DbFilterDefinition {
    /* Fields of DMAP-3.0.DMAP.DbFilterDefinition */
    key: string
    value: string
    negate: boolean
    static name: string
}
abstract class DbIface {
    /* Fields of DMAP-3.0.DMAP.DbIface */
    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    addWithId: (db: Db, record: Record, id: number) => number
    addPath: (db: Db, path: string) => number
    lookupIdByLocation: (db: Db, location: string) => number
    count: (db: Db) => number
    static name: string
}
abstract class GstInputStreamClass {
    /* Fields of DMAP-3.0.DMAP.GstInputStreamClass */
    parent: Gio.InputStreamClass
    killPipeline: (arg0: GstInputStream) => void
    static name: string
}
class GstInputStreamPrivate {
    static name: string
}
class HashContext {
    /* Fields of DMAP-3.0.DMAP.HashContext */
    buf: number[]
    bits: number[]
    in_: number[]
    version: number
    static name: string
}
abstract class MdnsBrowserClass {
    /* Fields of DMAP-3.0.DMAP.MdnsBrowserClass */
    parentClass: GObject.ObjectClass
    serviceAdded: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    serviceRemoved: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    static name: string
}
class MdnsBrowserPrivate {
    static name: string
}
class MdnsBrowserService {
    /* Fields of DMAP-3.0.DMAP.MdnsBrowserService */
    serviceName: string
    name: string
    host: string
    port: number
    passwordProtected: boolean
    pair: string
    transportProtocol: MdnsBrowserTransportProtocol
    static name: string
}
abstract class MdnsPublisherClass {
    /* Fields of DMAP-3.0.DMAP.MdnsPublisherClass */
    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    nameCollision: (publisher: MdnsPublisher, name: string) => void
    static name: string
}
class MdnsPublisherPrivate {
    static name: string
}
class MetaDataMap {
    /* Fields of DMAP-3.0.DMAP.MetaDataMap */
    tag: string
    md: number
    static name: string
}
class Playlist {
    /* Fields of DMAP-3.0.DMAP.Playlist */
    name: string
    id: number
    uris: object[]
    static name: string
}
abstract class RecordFactoryIface {
    /* Fields of DMAP-3.0.DMAP.RecordFactoryIface */
    parent: GObject.TypeInterface
    static name: string
}
abstract class RecordIface {
    /* Fields of DMAP-3.0.DMAP.RecordIface */
    parent: GObject.TypeInterface
    setFromBlob: (record: Record, blob: Uint8Array) => boolean
    static name: string
}
abstract class ShareClass {
    /* Fields of DMAP-3.0.DMAP.ShareClass */
    parent: GObject.ObjectClass
    getDesiredPort: (share: Share) => number
    getTypeOfService: (share: Share) => string
    messageAddStandardHeaders: (share: Share, msg: Soup.Message) => void
    addEntryToMlcl: (id: object, record: Record, mb: object) => void
    databasesBrowseXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databasesItemsXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    serverInfo: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    contentCodes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrlInt: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    nameCollision: (share: Share, publisher: MdnsPublisher, name: string) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    static name: string
}
class SharePrivate {
    static name: string
}
class StructureItem {
    /* Fields of DMAP-3.0.DMAP.StructureItem */
    contentCode: ContentCode
    content: any
    size: number
    static name: string
}
}
export default DMAP;