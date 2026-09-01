
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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace DMAP {

    /**
     * DMAP-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ConnectionState {
        export const $gtype: GObject.GType<ConnectionState>;
    }

    /**
     * @gir-type Enum
     */
    enum ConnectionState {
        GET_INFO = 0,
        LOGIN = 1,
        GET_REVISION_NUMBER = 2,
        GET_DB_INFO = 3,
        GET_SONGS = 4,
        GET_PLAYLISTS = 5,
        GET_PLAYLIST_ENTRIES = 6,
        LOGOUT = 7,
        DONE = 8,
    }


    /**
     * @gir-type Enum
     */
    enum ContentCode {
        CC_INVALID = 0,
        RAW = 1,
        CC_MDCL = 2,
        CC_MSTT = 3,
        CC_MIID = 4,
        CC_MINM = 5,
        CC_MIKD = 6,
        CC_MPER = 7,
        CC_MCON = 8,
        CC_MCTI = 9,
        CC_MPCO = 10,
        CC_MSTS = 11,
        CC_MIMC = 12,
        CC_MCTC = 13,
        CC_MRCO = 14,
        CC_MTCO = 15,
        CC_MLCL = 16,
        CC_MLIT = 17,
        CC_MBCL = 18,
        CC_MSRV = 19,
        CC_MSAU = 20,
        CC_MSLR = 21,
        CC_MPRO = 22,
        CC_MSAL = 23,
        CC_MSUP = 24,
        CC_MSPI = 25,
        CC_MSEX = 26,
        CC_MSBR = 27,
        CC_MSQY = 28,
        CC_MSIX = 29,
        CC_MSRS = 30,
        CC_MSTM = 31,
        CC_MSDC = 32,
        CC_MCCR = 33,
        CC_MCNM = 34,
        CC_MCNA = 35,
        CC_MCTY = 36,
        CC_MLOG = 37,
        CC_MLID = 38,
        CC_MUPD = 39,
        CC_MUSR = 40,
        CC_MUTY = 41,
        CC_MUDL = 42,
        CC_MSMA = 43,
        CC_FQUESCH = 44,
        CC_APRO = 45,
        CC_AVDB = 46,
        CC_ABRO = 47,
        CC_ABAL = 48,
        CC_ABAR = 49,
        CC_ABCP = 50,
        CC_ABGN = 51,
        CC_ADBS = 52,
        CC_ASAL = 53,
        CC_ASAI = 54,
        CC_ASAA = 55,
        CC_ASAR = 56,
        CC_ASBT = 57,
        CC_ASBR = 58,
        CC_ASCM = 59,
        CC_ASCO = 60,
        CC_ASDA = 61,
        CC_ASDM = 62,
        CC_ASDC = 63,
        CC_ASDN = 64,
        CC_ASDB = 65,
        CC_ASEQ = 66,
        CC_ASFM = 67,
        CC_ASGN = 68,
        CC_ASDT = 69,
        CC_ASRV = 70,
        CC_ASSR = 71,
        CC_ASSZ = 72,
        CC_ASST = 73,
        CC_ASSP = 74,
        CC_ASTM = 75,
        CC_ASTC = 76,
        CC_ASTN = 77,
        CC_ASUR = 78,
        CC_ASYR = 79,
        CC_ASDK = 80,
        CC_ASUL = 81,
        CC_ASSU = 82,
        CC_ASSA = 83,
        CC_APLY = 84,
        CC_ABPL = 85,
        CC_APSO = 86,
        CC_PRSV = 87,
        CC_ARIF = 88,
        CC_MSAS = 89,
        CC_AGRP = 90,
        CC_AGAL = 91,
        CC_ASCP = 92,
        CC_PPRO = 93,
        CC_PASP = 94,
        CC_PFDT = 95,
        CC_PICD = 96,
        CC_PIMF = 97,
        CC_PFMT = 98,
        CC_PIFS = 99,
        CC_PLSZ = 100,
        CC_PHGT = 101,
        CC_PWTH = 102,
        CC_PRAT = 103,
        CC_PCMT = 104,
        CC_PRET = 105,
        CC_AESV = 106,
        CC_AEHV = 107,
        CC_AESP = 108,
        CC_AEPP = 109,
        CC_AEPS = 110,
        CC_AESG = 111,
        CC_AEMK = 112,
        CC_AEFP = 113,
        CC_CMPA = 114,
        CC_CMNM = 115,
        CC_CMTY = 116,
        CC_CMPG = 117,
        CC_CACI = 118,
        CC_CAPS = 119,
        CC_CASH = 120,
        CC_CARP = 121,
        CC_CAAS = 122,
        CC_CAAR = 123,
        CC_CAIA = 124,
        CC_CANP = 125,
        CC_CANN = 126,
        CC_CANA = 127,
        CC_CANL = 128,
        CC_CANG = 129,
        CC_CANT = 130,
        CC_CASP = 131,
        CC_CASS = 132,
        CC_CAST = 133,
        CC_CASU = 134,
        CC_CASG = 135,
        CC_CACR = 136,
        CC_CMCP = 137,
        CC_CMGT = 138,
        CC_CMIK = 139,
        CC_CMSP = 140,
        CC_CMST = 141,
        CC_CMSV = 142,
        CC_CMSR = 143,
        CC_CMMK = 144,
        CC_CMVO = 145,
        CC_CMPR = 146,
        CC_CAPR = 147,
        CC_AEFR = 148,
        CC_CAOV = 149,
        CC_CMRL = 150,
        CC_CAHP = 151,
        CC_CAIV = 152,
        CC_CAVC = 153,
    }


    /**
     * @gir-type Struct
     */
    class MdnsBrowserError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOT_RUNNING: number;

        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace MdnsBrowserServiceType {
        export const $gtype: GObject.GType<MdnsBrowserServiceType>;
    }

    /**
     * @gir-type Enum
     */
    enum MdnsBrowserServiceType {
        INVALID = 0,
        DAAP = 1,
        DPAP = 2,
        DACP = 3,
        RAOP = 4,
        LAST = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace MdnsBrowserTransportProtocol {
        export const $gtype: GObject.GType<MdnsBrowserTransportProtocol>;
    }

    /**
     * @gir-type Enum
     */
    enum MdnsBrowserTransportProtocol {
        TCP = 0,
        UDP = 1,
        LAST = 1,
    }


    /**
     * @gir-type Struct
     */
    class MdnsPublisherError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOT_RUNNING: number;

        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace MediaKind {
        export const $gtype: GObject.GType<MediaKind>;
    }

    /**
     * @gir-type Enum
     */
    enum MediaKind {
        MUSIC = 1,
        MOVIE = 2,
        PODCAST = 32,
        TV_SHOW = 64,
    }


    /**
     * @gir-type Enum
     */
    export namespace Type {
        export const $gtype: GObject.GType<Type>;
    }

    /**
     * @gir-type Enum
     */
    enum Type {
        BYTE = 1,
        SIGNED_INT = 2,
        SHORT = 3,
        INT = 5,
        INT64 = 7,
        STRING = 9,
        DATE = 10,
        VERSION = 11,
        CONTAINER = 12,
        POINTER = 42,
    }


    /**
     * @default 16
     */
    const HASH_SIZE: number;

    /**
     * @default 200
     */
    const STATUS_OK: number;

    /**
     * @param code 
     */
    function content_code_dmap_type(code: ContentCode): Type;

    /**
     * @param code 
     */
    function content_code_name(code: ContentCode): string;

    /**
     * @param buf 
     */
    function content_code_read_from_buffer(buf: string): ContentCode;

    /**
     * @param code 
     */
    function content_code_string(code: ContentCode): string;

    /**
     * @param str 
     */
    function content_code_string_as_int32(str: string): number;

    /**
     * @param number 
     */
    function content_codes(number: number): ContentCodeDefinition;

    /**
     * @param version_major 
     * @param url 
     * @param hash_select 
     * @param out 
     * @param request_id 
     */
    function hash_generate(version_major: number, url: number, hash_select: number, out: number, request_id: number): void;

    /**
     * @param context 
     * @param digest 
     */
    function hash_progressive_final(context: HashContext, digest: number): void;

    /**
     * @param context 
     */
    function hash_progressive_init(context: HashContext): void;

    /**
     * @param digest 
     * @param string 
     */
    function hash_progressive_to_string(digest: number, string: string): void;

    /**
     * @param context 
     * @param buffer 
     * @param length 
     */
    function hash_progressive_update(context: HashContext, buffer: number, length: number): void;

    function mdns_browser_error_quark(): GLib.Quark;

    function mdns_publisher_error_quark(): GLib.Quark;

    /**
     * @param transcode_mimetype 
     */
    function mime_to_format(transcode_mimetype: string): string;

    /**
     * @param structure 
     */
    function structure_destroy(structure: GLib.Node): void;

    /**
     * @param structure 
     */
    function structure_get_size(structure: GLib.Node): number;

    /**
     * @param structure 
     * @param size 
     */
    function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void;

    /**
     * @param structure 
     */
    function structure_print(structure: GLib.Node): void;

    /**
     * @param structure 
     * @param length 
     */
    function structure_serialize(structure: GLib.Node, length: number): string;

    /**
     * @gir-type Callback
     */
    interface ConnectionCallback {
        (connection: Connection, result: boolean, reason: string): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface ResponseHandler {
        (connection: Connection, status: number, structure: GLib.Node): void;
    }

    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            authenticate: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            connected: () => void;
            /**
             * @signal
             * @run-last
             */
            connecting: (object: number, p0: number) => void;
            /**
             * @signal
             * @run-last
             */
            disconnected: () => void;
            /**
             * @signal
             * @run-first
             */
            "operation-done": () => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::database-id": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::dmap-version": (pspec: GObject.ParamSpec) => void;
            "notify::factory": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_uri: never;
            baseUri: never;
            database_id: number;
            databaseId: number;
            db: never;
            dmap_version: number;
            dmapVersion: number;
            factory: never;
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

    /**
     * @gir-type Class
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties
        get base_uri(): null;
        set base_uri(val: never);

        get baseUri(): null;
        set baseUri(val: never);

        get database_id(): number;
        set database_id(val: number);

        get databaseId(): number;
        set databaseId(val: number);

        /**
         * @construct-only
         */
        get db(): null;

        get dmap_version(): number;
        set dmap_version(val: number);

        get dmapVersion(): number;
        set dmapVersion(val: number);

        /**
         * @construct-only
         */
        get factory(): null;

        /**
         * @construct-only
         */
        get host(): string;

        /**
         * @construct-only
         */
        get name(): string;

        /**
         * @write-only
         */
        set password(val: string);

        /**
         * @construct-only
         */
        get port(): number;

        get revision_number(): number;
        set revision_number(val: number);

        get revisionNumber(): number;
        set revisionNumber(val: number);

        get session_id(): number;
        set session_id(val: number);

        get sessionId(): number;
        set sessionId(val: number);

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
        $signals: Connection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Connection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @virtual
         */
        vfunc_authenticate(name: string): string;

        /**
         * @virtual
         */
        vfunc_connected(): void;

        /**
         * @param state 
         * @param progress 
         * @virtual
         */
        vfunc_connecting(state: ConnectionState, progress: number): void;

        /**
         * @virtual
         */
        vfunc_disconnected(): void;

        /**
         * @virtual
         */
        vfunc_get_protocol_version_cc(): ContentCode;

        /**
         * @virtual
         */
        vfunc_get_query_metadata(): string;

        /**
         * @virtual
         */
        vfunc_operation_done(): void;

        // Methods
        /**
         * Attach an authentication credential to a request. This
         * method should be called by a function that is connected to the
         * {@link DMAP.Connection.SignalSignatures.authenticate | DMAP.Connection::authenticate} signal. The signal will provide the
         * connection, session, message and auth to that function. That function
         * should obtain a password and provide it to this method.
         * @param session A {@link Soup.Session}
         * @param message A {@link Soup.Message}
         * @param auth A {@link Soup.Auth}
         * @param password A password
         */
        authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;

        /**
         * @param uri 
         */
        get_headers(uri: string): Soup.MessageHeaders;

        is_connected(): boolean;

        setup(): void;
    }


    namespace GstInputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GstInputStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<GstInputStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GstInputStream.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GstInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream;

        // Signals
        /** @signal */
        connect<K extends keyof GstInputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GstInputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GstInputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GstInputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GstInputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GstInputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_kill_pipeline(): void;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @returns `true` if `seekable` can be seeked. `false` otherwise.
         */
        can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @returns `true` if the stream can be truncated, `false` otherwise.
         */
        can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
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
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         * @throws GLib.Error
         */
        seek(offset: bigint | number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         * @throws GLib.Error
         */
        truncate(offset: bigint | number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @virtual
         */
        vfunc_can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @virtual
         */
        vfunc_can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
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
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @virtual
         */
        vfunc_tell(): bigint | number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_truncate_fn(offset: number, cancellable: Gio.Cancellable | null): boolean;
    }


    namespace MdnsBrowser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted each time a service becomes available to `browser`
             * @signal
             * @run-last
             */
            "service-added": (service: null) => void;
            /**
             * @signal
             * @run-last
             */
            "service-removed": (object: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MdnsBrowser extends GObject.Object {
        static $gtype: GObject.GType<MdnsBrowser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MdnsBrowser.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<MdnsBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: MdnsBrowserServiceType): MdnsBrowser;

        // Signals
        /** @signal */
        connect<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsBrowser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsBrowser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MdnsBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param service 
         * @virtual
         */
        vfunc_service_added(service: MdnsBrowserService): void;

        /**
         * @param service 
         * @virtual
         */
        vfunc_service_removed(service: MdnsBrowserService): void;

        // Methods
        get_service_type(): MdnsBrowserServiceType;

        /**
         * Starts a DMAPMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         * @throws GLib.Error
         */
        start(): boolean;

        /**
         * Stops a DMAPMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         * @throws GLib.Error
         */
        stop(): boolean;
    }


    namespace MdnsPublisher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "name-collision": (object: string) => void;
            /**
             * @signal
             * @run-last
             */
            published: (object: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MdnsPublisher extends GObject.Object {
        static $gtype: GObject.GType<MdnsPublisher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MdnsPublisher.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<MdnsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MdnsPublisher;

        // Signals
        /** @signal */
        connect<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsPublisher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsPublisher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MdnsPublisher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @virtual
         */
        vfunc_name_collision(name: string): void;

        /**
         * @param name 
         * @virtual
         */
        vfunc_published(name: string): void;

        // Methods
        /**
         * @param name 
         * @param port 
         * @param type_of_service 
         * @param password_required 
         * @param txt_records 
         * @throws GLib.Error
         */
        publish(name: string, port: number, type_of_service: string, password_required: boolean, txt_records: string): boolean;

        /**
         * @param port 
         * @param name 
         * @throws GLib.Error
         */
        rename_at_port(port: number, name: string): boolean;

        /**
         * @param port 
         * @throws GLib.Error
         */
        withdraw(port: number): boolean;
    }


    namespace Share {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::auth-method": (pspec: GObject.ParamSpec) => void;
            "notify::container-db": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::server-ipv4": (pspec: GObject.ParamSpec) => void;
            "notify::server-ipv6": (pspec: GObject.ParamSpec) => void;
            "notify::transcode-mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::txt-records": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_method: number;
            authMethod: number;
            container_db: never;
            containerDb: never;
            db: never;
            name: string;
            password: string;
            revision_number: number;
            revisionNumber: number;
            server_ipv4: Soup.Server;
            serverIpv4: Soup.Server;
            server_ipv6: Soup.Server;
            serverIpv6: Soup.Server;
            transcode_mimetype: string;
            transcodeMimetype: string;
            txt_records: string[];
            txtRecords: string[];
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Share extends GObject.Object {
        static $gtype: GObject.GType<Share>;

        // Properties
        get auth_method(): number;
        set auth_method(val: number);

        get authMethod(): number;
        set authMethod(val: number);

        /**
         * @construct-only
         */
        get container_db(): null;

        /**
         * @construct-only
         */
        get containerDb(): null;

        /**
         * @construct-only
         */
        get db(): null;

        get name(): string;
        set name(val: string);

        get password(): string;
        set password(val: string);

        get revision_number(): number;
        set revision_number(val: number);

        get revisionNumber(): number;
        set revisionNumber(val: number);

        /**
         * @read-only
         */
        get server_ipv4(): Soup.Server;

        /**
         * @read-only
         */
        get serverIpv4(): Soup.Server;

        /**
         * @read-only
         */
        get server_ipv6(): Soup.Server;

        /**
         * @read-only
         */
        get serverIpv6(): Soup.Server;

        /**
         * @construct-only
         */
        get transcode_mimetype(): string;

        /**
         * @construct-only
         */
        get transcodeMimetype(): string;

        get txt_records(): string[];
        set txt_records(val: string[]);

        get txtRecords(): string[];
        set txtRecords(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Share.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Share.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Share.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Share.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Share.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Share.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Share.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Share.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_content_codes(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_ctrl_int(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param context 
         * @virtual
         */
        vfunc_databases(server: Soup.Server, message: Soup.Message, path: string, query: never, context: Soup.ClientContext): void;

        /**
         * @param server 
         * @param msg 
         * @param path 
         * @param query 
         * @param context 
         * @virtual
         */
        vfunc_databases_browse_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: never, context: Soup.ClientContext): void;

        /**
         * @param server 
         * @param msg 
         * @param path 
         * @param query 
         * @param context 
         * @virtual
         */
        vfunc_databases_items_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: never, context: Soup.ClientContext): void;

        /**
         * @virtual
         */
        vfunc_get_desired_port(): number;

        /**
         * @virtual
         */
        vfunc_get_type_of_service(): string;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_login(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_logout(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;

        /**
         * @param msg 
         * @virtual
         */
        vfunc_message_add_standard_headers(msg: Soup.Message): void;

        /**
         * @param publisher 
         * @param name 
         * @virtual
         */
        vfunc_name_collision(publisher: MdnsPublisher, name: string): void;

        /**
         * @param publisher 
         * @param name 
         * @virtual
         */
        vfunc_published(publisher: MdnsPublisher, name: string): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_server_info(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @param ctx 
         * @virtual
         */
        vfunc_update(server: Soup.Server, message: Soup.Message, path: string, query: never, ctx: Soup.ClientContext): void;
    }


    /**
     * @gir-type Alias
     */
    type ConnectionClass = typeof Connection;

    /**
     * @gir-type Struct
     */
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ContainerDbIface = typeof ContainerDb;

    /**
     * @gir-type Alias
     */
    type ContainerRecordIface = typeof ContainerRecord;

    /**
     * @gir-type Struct
     */
    class ContentCodeDefinition {
        static $gtype: GObject.GType<ContentCodeDefinition>;

        // Fields
        code: ContentCode;

        int_code: number;

        name: string;

        string: string;

        type: Type;
    }


    /**
     * @gir-type Struct
     */
    class DbFilterDefinition {
        static $gtype: GObject.GType<DbFilterDefinition>;

        // Fields
        key: string;

        value: string;

        negate: boolean;

        // Constructors

        constructor(properties?: Partial<{
            key: string;
            value: string;
            negate: boolean;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type DbIface = typeof Db;

    /**
     * @gir-type Alias
     */
    type GstInputStreamClass = typeof GstInputStream;

    /**
     * @gir-type Struct
     */
    abstract class GstInputStreamPrivate {
        static $gtype: GObject.GType<GstInputStreamPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class HashContext {
        static $gtype: GObject.GType<HashContext>;

        // Fields
        buf: number[];

        bits: number[];

        "in": number[];

        version: number;

        // Constructors

        constructor(properties?: Partial<{
            buf: number[];
            bits: number[];
            "in": number[];
            version: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type MdnsBrowserClass = typeof MdnsBrowser;

    /**
     * @gir-type Struct
     */
    abstract class MdnsBrowserPrivate {
        static $gtype: GObject.GType<MdnsBrowserPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class MdnsBrowserService {
        static $gtype: GObject.GType<MdnsBrowserService>;

        // Fields
        service_name: string;

        name: string;

        host: string;

        port: number;

        password_protected: boolean;

        pair: string;

        transport_protocol: MdnsBrowserTransportProtocol;
    }


    /**
     * @gir-type Alias
     */
    type MdnsPublisherClass = typeof MdnsPublisher;

    /**
     * @gir-type Struct
     */
    abstract class MdnsPublisherPrivate {
        static $gtype: GObject.GType<MdnsPublisherPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class MetaDataMap {
        static $gtype: GObject.GType<MetaDataMap>;

        // Fields
        tag: string;

        md: number;

        // Constructors

        constructor(properties?: Partial<{
            tag: string;
            md: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class Playlist {
        static $gtype: GObject.GType<Playlist>;

        // Fields
        name: string;

        id: number;

        uris: null[];

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            id: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type RecordFactoryIface = typeof RecordFactory;

    /**
     * @gir-type Alias
     */
    type RecordIface = typeof Record;

    /**
     * @gir-type Alias
     */
    type ShareClass = typeof Share;

    /**
     * @gir-type Struct
     */
    abstract class SharePrivate {
        static $gtype: GObject.GType<SharePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class StructureItem {
        static $gtype: GObject.GType<StructureItem>;

        // Fields
        content_code: ContentCode;

        size: number;
    }


    namespace ContainerDb {
        /**
         * Interface for implementing ContainerDb.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database.
             * @param record A record.
             * @virtual
             */
            vfunc_add(record: ContainerRecord): void;

            /**
             * @virtual
             */
            vfunc_count(): bigint | number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContainerDbNamespace {
        $gtype: GObject.GType<ContainerDb>;
        prototype: ContainerDb;
    }
    /**
     * @gir-type Interface
     */
    interface ContainerDb extends GObject.Object, ContainerDb.Interface {

        // Methods
        /**
         * Add a record to the database.
         * @param record A record.
         */
        add(record: ContainerRecord): void;

        /**
         * @returns the number of records in the database.
         */
        count(): number;
    }


    export const ContainerDb: ContainerDbNamespace & {
        new (): ContainerDb; // This allows `obj instanceof ContainerDb`
    };

    namespace ContainerRecord {
        /**
         * Interface for implementing ContainerRecord.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database. It is assumed that the record is placed
             * directly into the database (not copied) and not freed.
             * @param record A DMAPRecord.
             * @param id The record's ID.
             * @virtual
             */
            vfunc_add_entry(record: Record, id: number): void;

            /**
             * @virtual
             */
            vfunc_get_entry_count(): bigint | number;

            /**
             * @virtual
             */
            vfunc_get_id(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    export interface ContainerRecordNamespace {
        $gtype: GObject.GType<ContainerRecord>;
        prototype: ContainerRecord;
    }
    /**
     * @gir-type Interface
     */
    interface ContainerRecord extends GObject.Object, ContainerRecord.Interface {

        // Properties
        get name(): string;
        set name(val: string);

        // Methods
        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DMAPRecord.
         * @param id The record's ID.
         */
        add_entry(record: Record, id: number): void;

        /**
         * @returns the number of records in the container record.
         */
        get_entry_count(): number;

        /**
         * @returns the ID for the given record.
         */
        get_id(): number;
    }


    export const ContainerRecord: ContainerRecordNamespace & {
        new (): ContainerRecord; // This allows `obj instanceof ContainerRecord`
    };

    namespace Db {
        /**
         * Interface for implementing Db.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database.
             * @param record A database record.
             * @virtual
             */
            vfunc_add(record: Record): number;

            /**
             * Create a record and add it to the database.
             * @param path A path to an appropriate media file.
             * @virtual
             */
            vfunc_add_path(path: string): number;

            /**
             * Add a record to the database and assign it the given ID.
             * @param record A database record.
             * @param id A database record ID.
             * @virtual
             */
            vfunc_add_with_id(record: Record, id: number): number;

            /**
             * @virtual
             */
            vfunc_count(): bigint | number;

            /**
             * @param location A record location.
             * @virtual
             */
            vfunc_lookup_id_by_location(location: string): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DbNamespace {
        $gtype: GObject.GType<Db>;
        prototype: Db;
    }
    /**
     * @gir-type Interface
     */
    interface Db extends GObject.Object, Db.Interface {

        // Methods
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

        /**
         * @returns the number of records in the database.
         */
        count(): number;

        /**
         * @param location A record location.
         * @returns the database id for the record corresponding to `path` or 0 if such a record does not exist.
         */
        lookup_id_by_location(location: string): number;
    }


    export const Db: DbNamespace & {
        new (): Db; // This allows `obj instanceof Db`
    };

    namespace Record {
        /**
         * Interface for implementing Record.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param blob 
             * @virtual
             */
            vfunc_set_from_blob(blob: Uint8Array): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordNamespace {
        $gtype: GObject.GType<Record>;
        prototype: Record;
    }
    /**
     * @gir-type Interface
     */
    interface Record extends GObject.Object, Record.Interface {

        // Methods
        /**
         * @param blob 
         */
        set_from_blob(blob: Uint8Array | string): boolean;
    }


    export const Record: RecordNamespace & {
        new (): Record; // This allows `obj instanceof Record`
    };

    namespace RecordFactory {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordFactoryNamespace {
        $gtype: GObject.GType<RecordFactory>;
        prototype: RecordFactory;
    }
    /**
     * @gir-type Interface
     */
    interface RecordFactory extends GObject.Object {
    }


    export const RecordFactory: RecordFactoryNamespace & {
        new (): RecordFactory; // This allows `obj instanceof RecordFactory`
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

export default DMAP;

// END
