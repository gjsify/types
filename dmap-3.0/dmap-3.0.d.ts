/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dmap-3.0-ambient.d.ts';

/**
 * DMAP-3.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
    class MdnsBrowserError extends GLib.Error {
        static $gtype: GObject.GType<MdnsBrowserError>;

        // Static fields of DMAP.MdnsBrowserError

        static NOT_RUNNING: number;
        static FAILED: number;

        // Constructors of DMAP.MdnsBrowserError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of DMAP.MdnsBrowserError

        static quark(): GLib.Quark;
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
    class MdnsPublisherError extends GLib.Error {
        static $gtype: GObject.GType<MdnsPublisherError>;

        // Static fields of DMAP.MdnsPublisherError

        static NOT_RUNNING: number;
        static FAILED: number;

        // Constructors of DMAP.MdnsPublisherError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of DMAP.MdnsPublisherError

        static quark(): GLib.Quark;
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
    const HASH_SIZE: number;
    const STATUS_OK: number;
    function content_code_dmap_type(code: ContentCode): Type;
    function content_code_name(code: ContentCode): string;
    function content_code_read_from_buffer(buf: string): ContentCode;
    function content_code_string(code: ContentCode): string;
    function content_code_string_as_int32(str: string): number;
    function content_codes(number: number): ContentCodeDefinition;
    function hash_generate(
        version_major: number,
        url: number,
        hash_select: number,
        out: number,
        request_id: number,
    ): void;
    function hash_progressive_final(context: HashContext, digest: number): void;
    function hash_progressive_init(context: HashContext): void;
    function hash_progressive_to_string(digest: number, string: string): void;
    function hash_progressive_update(context: HashContext, buffer: number, length: number): void;
    function mdns_browser_error_quark(): GLib.Quark;
    function mdns_publisher_error_quark(): GLib.Quark;
    function structure_destroy(structure: GLib.Node): void;
    function structure_get_size(structure: GLib.Node): number;
    function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void;
    function structure_print(structure: GLib.Node): void;
    function structure_serialize(structure: GLib.Node, length: number): string;
    function utils_mime_to_format(transcode_mimetype: string): string;
    interface ConnectionCallback {
        (connection: Connection, result: boolean, reason: string): boolean;
    }
    interface ResponseHandler {
        (connection: Connection, status: number, structure: GLib.Node): void;
    }
    module Connection {
        // Signal callback interfaces

        interface Authenticate {
            (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void;
        }

        interface Connected {
            (): void;
        }

        interface Connecting {
            (object: number, p0: number): void;
        }

        interface Disconnected {
            (): void;
        }

        interface OperationDone {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_uri: any;
            baseUri: any;
            database_id: number;
            databaseId: number;
            db: any;
            dmap_version: number;
            dmapVersion: number;
            factory: any;
            host: string;
            name: string;
            password: string;
            port: number;
            revision_number: number;
            revisionNumber: number;
            session_id: number;
            sessionId: number;
            username: string;
        }
    }

    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Own properties of DMAP.Connection

        get base_uri(): any;
        set base_uri(val: any);
        get baseUri(): any;
        set baseUri(val: any);
        get database_id(): number;
        set database_id(val: number);
        get databaseId(): number;
        set databaseId(val: number);
        get db(): any;
        get dmap_version(): number;
        set dmap_version(val: number);
        get dmapVersion(): number;
        set dmapVersion(val: number);
        get factory(): any;
        get host(): string;
        get name(): string;
        set password(val: string);
        get port(): number;
        get revision_number(): number;
        set revision_number(val: number);
        get revisionNumber(): number;
        set revisionNumber(val: number);
        get session_id(): number;
        set session_id(val: number);
        get sessionId(): number;
        set sessionId(val: number);
        get username(): string;

        // Constructors of DMAP.Connection

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of DMAP.Connection

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'authenticate',
            callback: (
                _source: this,
                object: string,
                p0: Soup.Session,
                p1: Soup.Message,
                p2: Soup.Auth,
                p3: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'authenticate',
            callback: (
                _source: this,
                object: string,
                p0: Soup.Session,
                p1: Soup.Message,
                p2: Soup.Auth,
                p3: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'authenticate',
            object: string,
            p0: Soup.Session,
            p1: Soup.Message,
            p2: Soup.Auth,
            p3: boolean,
        ): void;
        connect(signal: 'connected', callback: (_source: this) => void): number;
        connect_after(signal: 'connected', callback: (_source: this) => void): number;
        emit(signal: 'connected'): void;
        connect(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;
        emit(signal: 'connecting', object: number, p0: number): void;
        connect(signal: 'disconnected', callback: (_source: this) => void): number;
        connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
        emit(signal: 'disconnected'): void;
        connect(signal: 'operation-done', callback: (_source: this) => void): number;
        connect_after(signal: 'operation-done', callback: (_source: this) => void): number;
        emit(signal: 'operation-done'): void;

        // Own virtual methods of DMAP.Connection

        vfunc_authenticate(name: string): string;
        vfunc_connected(): void;
        vfunc_connecting(state: ConnectionState, progress: number): void;
        vfunc_disconnected(): void;
        vfunc_get_protocol_version_cc(): ContentCode;
        vfunc_get_query_metadata(): string;
        vfunc_operation_done(): void;

        // Own methods of DMAP.Connection

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
        authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;
        get_headers(uri: string): Soup.MessageHeaders;
        is_connected(): boolean;
        setup(): void;
    }

    module GstInputStream {
        // Constructor properties interface

        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class GstInputStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<GstInputStream>;

        // Constructors of DMAP.GstInputStream

        constructor(properties?: Partial<GstInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream;

        // Own virtual methods of DMAP.GstInputStream

        vfunc_kill_pipeline(): void;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
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
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
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
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
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
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
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
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module MdnsBrowser {
        // Signal callback interfaces

        interface ServiceAdded {
            (service?: any | null): void;
        }

        interface ServiceRemoved {
            (object: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MdnsBrowser extends GObject.Object {
        static $gtype: GObject.GType<MdnsBrowser>;

        // Own fields of DMAP.MdnsBrowser

        object: GObject.Object;

        // Constructors of DMAP.MdnsBrowser

        constructor(properties?: Partial<MdnsBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: MdnsBrowserServiceType): MdnsBrowser;

        // Own signals of DMAP.MdnsBrowser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'service-added', callback: (_source: this, service: any | null) => void): number;
        connect_after(signal: 'service-added', callback: (_source: this, service: any | null) => void): number;
        emit(signal: 'service-added', service?: any | null): void;
        connect(signal: 'service-removed', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'service-removed', callback: (_source: this, object: string) => void): number;
        emit(signal: 'service-removed', object: string): void;

        // Own virtual methods of DMAP.MdnsBrowser

        vfunc_service_added(service: MdnsBrowserService): void;
        vfunc_service_removed(service: MdnsBrowserService): void;

        // Own methods of DMAP.MdnsBrowser

        get_service_type(): MdnsBrowserServiceType;
        /**
         * Starts a DMAPMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         */
        start(): boolean;
        /**
         * Stops a DMAPMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         */
        stop(): boolean;
    }

    module MdnsPublisher {
        // Signal callback interfaces

        interface NameCollision {
            (object: string): void;
        }

        interface Published {
            (object: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MdnsPublisher extends GObject.Object {
        static $gtype: GObject.GType<MdnsPublisher>;

        // Own fields of DMAP.MdnsPublisher

        object: GObject.Object;

        // Constructors of DMAP.MdnsPublisher

        constructor(properties?: Partial<MdnsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MdnsPublisher;

        // Own signals of DMAP.MdnsPublisher

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'name-collision', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'name-collision', callback: (_source: this, object: string) => void): number;
        emit(signal: 'name-collision', object: string): void;
        connect(signal: 'published', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'published', callback: (_source: this, object: string) => void): number;
        emit(signal: 'published', object: string): void;

        // Own virtual methods of DMAP.MdnsPublisher

        vfunc_name_collision(name: string): void;
        vfunc_published(name: string): void;

        // Own methods of DMAP.MdnsPublisher

        publish(
            name: string,
            port: number,
            type_of_service: string,
            password_required: boolean,
            txt_records: string,
        ): boolean;
        rename_at_port(port: number, name: string): boolean;
        withdraw(port: number): boolean;
    }

    module Share {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_method: number;
            authMethod: number;
            container_db: any;
            containerDb: any;
            db: any;
            name: string;
            password: string;
            revision_number: number;
            revisionNumber: number;
            server: Soup.Server;
            transcode_mimetype: string;
            transcodeMimetype: string;
            txt_records: string[];
            txtRecords: string[];
        }
    }

    abstract class Share extends GObject.Object {
        static $gtype: GObject.GType<Share>;

        // Own properties of DMAP.Share

        get auth_method(): number;
        set auth_method(val: number);
        get authMethod(): number;
        set authMethod(val: number);
        get container_db(): any;
        get containerDb(): any;
        get db(): any;
        get name(): string;
        set name(val: string);
        get password(): string;
        set password(val: string);
        get revision_number(): number;
        set revision_number(val: number);
        get revisionNumber(): number;
        set revisionNumber(val: number);
        get server(): Soup.Server;
        get transcode_mimetype(): string;
        get transcodeMimetype(): string;
        get txt_records(): string[];
        set txt_records(val: string[]);
        get txtRecords(): string[];
        set txtRecords(val: string[]);

        // Constructors of DMAP.Share

        constructor(properties?: Partial<Share.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of DMAP.Share

        vfunc_content_codes(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
        vfunc_ctrl_int(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
        vfunc_databases(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            context: Soup.ClientContext,
        ): void;
        vfunc_databases_browse_xxx(
            server: Soup.Server,
            msg: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            context: Soup.ClientContext,
        ): void;
        vfunc_databases_items_xxx(
            server: Soup.Server,
            msg: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            context: Soup.ClientContext,
        ): void;
        vfunc_get_desired_port(): number;
        vfunc_get_meta_data_map(): any | null;
        vfunc_get_type_of_service(): string;
        vfunc_login(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
        vfunc_logout(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
        vfunc_message_add_standard_headers(msg: Soup.Message): void;
        vfunc_name_collision(publisher: MdnsPublisher, name: string): void;
        vfunc_published(publisher: MdnsPublisher, name: string): void;
        vfunc_server_info(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
        vfunc_update(
            server: Soup.Server,
            message: Soup.Message,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            ctx: Soup.ClientContext,
        ): void;
    }

    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;

        // Constructors of DMAP.ConnectionPrivate

        _init(...args: any[]): void;
    }

    type ContainerDbIface = typeof ContainerDb;
    type ContainerRecordIface = typeof ContainerRecord;
    class ContentCodeDefinition {
        static $gtype: GObject.GType<ContentCodeDefinition>;

        // Own fields of DMAP.ContentCodeDefinition

        code: ContentCode;
        int_code: number;
        name: string;
        string: string;
        type: Type;

        // Constructors of DMAP.ContentCodeDefinition

        _init(...args: any[]): void;
    }

    class DbFilterDefinition {
        static $gtype: GObject.GType<DbFilterDefinition>;

        // Own fields of DMAP.DbFilterDefinition

        key: string;
        value: string;
        negate: boolean;

        // Constructors of DMAP.DbFilterDefinition

        constructor(
            properties?: Partial<{
                key: string;
                value: string;
                negate: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DbIface = typeof Db;
    type GstInputStreamClass = typeof GstInputStream;
    abstract class GstInputStreamPrivate {
        static $gtype: GObject.GType<GstInputStreamPrivate>;

        // Constructors of DMAP.GstInputStreamPrivate

        _init(...args: any[]): void;
    }

    class HashContext {
        static $gtype: GObject.GType<HashContext>;

        // Own fields of DMAP.HashContext

        buf: number[];
        bits: number[];
        'in': Uint8Array;
        version: number;

        // Constructors of DMAP.HashContext

        constructor(
            properties?: Partial<{
                buf: number[];
                bits: number[];
                in: Uint8Array;
                version: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type MdnsBrowserClass = typeof MdnsBrowser;
    abstract class MdnsBrowserPrivate {
        static $gtype: GObject.GType<MdnsBrowserPrivate>;

        // Constructors of DMAP.MdnsBrowserPrivate

        _init(...args: any[]): void;
    }

    class MdnsBrowserService {
        static $gtype: GObject.GType<MdnsBrowserService>;

        // Own fields of DMAP.MdnsBrowserService

        service_name: string;
        name: string;
        host: string;
        port: number;
        password_protected: boolean;
        pair: string;
        transport_protocol: MdnsBrowserTransportProtocol;

        // Constructors of DMAP.MdnsBrowserService

        _init(...args: any[]): void;
    }

    type MdnsPublisherClass = typeof MdnsPublisher;
    abstract class MdnsPublisherPrivate {
        static $gtype: GObject.GType<MdnsPublisherPrivate>;

        // Constructors of DMAP.MdnsPublisherPrivate

        _init(...args: any[]): void;
    }

    class MetaDataMap {
        static $gtype: GObject.GType<MetaDataMap>;

        // Own fields of DMAP.MetaDataMap

        tag: string;
        md: number;

        // Constructors of DMAP.MetaDataMap

        constructor(
            properties?: Partial<{
                tag: string;
                md: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Playlist {
        static $gtype: GObject.GType<Playlist>;

        // Own fields of DMAP.Playlist

        name: string;
        id: number;
        uris: any[];

        // Constructors of DMAP.Playlist

        constructor(
            properties?: Partial<{
                name: string;
                id: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type RecordFactoryIface = typeof RecordFactory;
    type RecordIface = typeof Record;
    type ShareClass = typeof Share;
    abstract class SharePrivate {
        static $gtype: GObject.GType<SharePrivate>;

        // Constructors of DMAP.SharePrivate

        _init(...args: any[]): void;
    }

    class StructureItem {
        static $gtype: GObject.GType<StructureItem>;

        // Own fields of DMAP.StructureItem

        content_code: ContentCode;
        size: number;

        // Constructors of DMAP.StructureItem

        _init(...args: any[]): void;
    }

    module ContainerDb {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContainerDbNamespace {
        $gtype: GObject.GType<ContainerDb>;
        prototype: ContainerDb;
    }
    interface ContainerDb extends GObject.Object {
        // Own methods of DMAP.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        add(record: ContainerRecord): void;
        count(): number;

        // Own virtual methods of DMAP.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        vfunc_add(record: ContainerRecord): void;
        vfunc_count(): number;
    }

    export const ContainerDb: ContainerDbNamespace;

    module ContainerRecord {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    export interface ContainerRecordNamespace {
        $gtype: GObject.GType<ContainerRecord>;
        prototype: ContainerRecord;
    }
    interface ContainerRecord extends GObject.Object {
        // Own properties of DMAP.ContainerRecord

        get name(): string;
        set name(val: string);

        // Own methods of DMAP.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DMAPRecord.
         * @param id The record's ID.
         */
        add_entry(record: Record, id: number): void;
        get_entry_count(): number;
        get_id(): number;

        // Own virtual methods of DMAP.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DMAPRecord.
         * @param id The record's ID.
         */
        vfunc_add_entry(record: Record, id: number): void;
        vfunc_get_entry_count(): number;
        vfunc_get_id(): number;
    }

    export const ContainerRecord: ContainerRecordNamespace;

    module Db {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DbNamespace {
        $gtype: GObject.GType<Db>;
        prototype: Db;
    }
    interface Db extends GObject.Object {
        // Own methods of DMAP.Db

        /**
         * Add a record to the database.
         * @param record A database record.
         * @returns The ID for the newly added record. A reference to the record will be retained by the database (if required; an adapter-type implementation may not want to retain a reference as the record data may be placed elsewhere). In all cases, the record should be unrefed by the calling code.
         */
        add(record: Record): number;
        /**
         * Create a record and add it to the database.
         * @param path A path to an appropriate media file.
         * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
         */
        add_path(path: string): number;
        /**
         * Add a record to the database and assign it the given ID.
         * @param record A database record.
         * @param id A database record ID.
         * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
         */
        add_with_id(record: Record, id: number): number;
        count(): number;
        lookup_id_by_location(location: string): number;

        // Own virtual methods of DMAP.Db

        /**
         * Add a record to the database.
         * @param record A database record.
         */
        vfunc_add(record: Record): number;
        /**
         * Create a record and add it to the database.
         * @param path A path to an appropriate media file.
         */
        vfunc_add_path(path: string): number;
        /**
         * Add a record to the database and assign it the given ID.
         * @param record A database record.
         * @param id A database record ID.
         */
        vfunc_add_with_id(record: Record, id: number): number;
        vfunc_count(): number;
        vfunc_lookup_id_by_location(location: string): number;
    }

    export const Db: DbNamespace;

    module Record {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordNamespace {
        $gtype: GObject.GType<Record>;
        prototype: Record;
    }
    interface Record extends GObject.Object {
        // Own methods of DMAP.Record

        set_from_blob(blob: Uint8Array | string): boolean;

        // Own virtual methods of DMAP.Record

        vfunc_set_from_blob(blob: Uint8Array | string): boolean;
    }

    export const Record: RecordNamespace;

    module RecordFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordFactoryNamespace {
        $gtype: GObject.GType<RecordFactory>;
        prototype: RecordFactory;
    }
    interface RecordFactory extends GObject.Object {}

    export const RecordFactory: RecordFactoryNamespace;

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

export default DMAP;
// END
