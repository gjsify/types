
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
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export namespace Zpj {

    /**
     * Zpj-0.0
     */


    /**
     * This enumeration can be expanded at a later date.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The server received an invalid URL,
         *   possibly because of an invalid `file_id`.
         */
        static REQUEST_URL_INVALID: number;

        /**
         * An unknown error occurred.
         */
        static UNKNOWN: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * @gir-type Enum
     */
    export namespace SkydriveEntryType {
        export const $gtype: GObject.GType<SkydriveEntryType>;
    }

    /**
     * The types of Skydrive
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * objects</ulink>.
     * 
     * This enumeration can be expanded at a later date.
     * @gir-type Enum
     */
    enum SkydriveEntryType {
        /**
         * A file.
         */
        FILE,
        /**
         * A folder.
         */
        FOLDER,
        /**
         * A photo.
         */
        PHOTO,
        /**
         * A video.
         */
        VIDEO,
        /**
         * Invalid or unknown object.
         */
        INVALID,
    }


    /**
     * Different
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826522.aspx#reading_photos_videos_props">
     * thumbnail sizes</ulink> offered by SkyDrive.
     * 
     * This enumeration can be expanded at a later date.
     * @gir-type Enum
     */
    enum ThumbnailSize {
        /**
         * Smallest possible size.
         */
        SMALL,
        /**
         * The default.
         */
        NORMAL,
    }


    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Documents folder. It can be used as
     * the {@link Zpj.SkydriveEntry.id} and {@link Zpj.SkydriveEntry.parent_id}.
     */
    const SKYDRIVE_FOLDER_MY_DOCUMENTS: string;

    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Pictures folder. It can be used as the
     * {@link Zpj.SkydriveEntry.id} and {@link Zpj.SkydriveEntry.parent_id}.
     */
    const SKYDRIVE_FOLDER_MY_PHOTOS: string;

    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Public folder. It can be used as the
     * {@link Zpj.SkydriveEntry.id} and {@link Zpj.SkydriveEntry.parent_id}.
     */
    const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string;

    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Skydrive top-level folder. It can be
     * used as the {@link Zpj.SkydriveEntry.id} and {@link Zpj.SkydriveEntry.parent_id}.
     */
    const SKYDRIVE_FOLDER_SKYDRIVE: string;

    function error_quark(): GLib.Quark;

    namespace AuthorizationDomain {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scope": (pspec: GObject.ParamSpec) => void;
            "notify::service-name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scope: string;
            service_name: string;
            serviceName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class AuthorizationDomain extends GObject.Object {
        static $gtype: GObject.GType<AuthorizationDomain>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get scope(): string;

        /**
         * @construct-only
         * @default null
         */
        get service_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get serviceName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthorizationDomain.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AuthorizationDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AuthorizationDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthorizationDomain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AuthorizationDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthorizationDomain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AuthorizationDomain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthorizationDomain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_scope(): string;

        get_service_name(): string;
    }


    namespace GoaAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {

        }
    }

    /**
     * The {@link Zpj.GoaAuthorizer} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GoaAuthorizer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GoaAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         * 
         * This method is thread safe.
         * @param domain A {@link Zpj.AuthorizationDomain}.
         * @returns `true` if the tokens are valid.
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param call A {@link Rest.ProxyCall}.
         */
        process_call(domain: (AuthorizationDomain | null), call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param message A {@link Soup.Message}.
         */
        process_message(domain: (AuthorizationDomain | null), message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_authorizer_refresh_authorization_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization_finish(res: Gio.AsyncResult): boolean;

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         * 
         * This method is thread safe.
         * @param domain A {@link Zpj.AuthorizationDomain}.
         * @virtual
         */
        vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param call A {@link Rest.ProxyCall}.
         * @virtual
         */
        vfunc_process_call(domain: (AuthorizationDomain | null), call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param message A {@link Soup.Message}.
         * @virtual
         */
        vfunc_process_message(domain: (AuthorizationDomain | null), message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @virtual
         */
        vfunc_refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Skydrive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::authorizer": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authorizer: Authorizer;
        }
    }

    /**
     * The {@link Zpj.Skydrive} structure contains only private data and should
     * only be accessed using the provided API.
     * @gir-type Class
     */
    class Skydrive extends GObject.Object {
        static $gtype: GObject.GType<Skydrive>;

        // Properties
        get authorizer(): Authorizer;
        set authorizer(val: Authorizer);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Skydrive.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Skydrive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](authorizer: Authorizer): Skydrive;

        // Signals
        /** @signal */
        connect<K extends keyof Skydrive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Skydrive.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Skydrive.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Skydrive.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Skydrive.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Skydrive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param folder 
         * @param cancellable 
         */
        create_folder(folder: SkydriveFolder, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param name 
         * @param parent_id 
         * @param cancellable 
         */
        create_folder_from_name(name: string, parent_id: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Synchronously deletes the entry corresponding to `entry_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param entry_id The ID of the {@link Zpj.SkydriveEntry} to be deleted.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the {@link Zpj.SkydriveEntry} was deleted successfully.
         */
        delete_entry_id(entry_id: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Synchronously downloads the file corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and saves it in `path`. The file is temporarily
         * saved in the preferred directory for temporary files (as returned
         * by `g_get_tmp_dir()`) while the download is going on, and then moved
         * to `path`.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be downloaded.
         * @param path The destination.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the {@link Zpj.SkydriveFile} was downloaded successfully.
         */
        download_file_id_to_path(file_id: string, path: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Synchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See
         * `zpj_skydrive_download_file_id_to_stream_async()` for the asynchronous
         * version of this call.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A {@link Gio.InputStream} to read the file data from. Free the returned object with `g_object_unref()`.
         */
        download_file_id_to_stream(file_id: string, cancellable: (Gio.Cancellable | null)): Gio.InputStream;

        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_id_to_stream()` for
         * the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_id_to_stream_finish()` to get
         * the result of the operation.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        download_file_id_to_stream_async(file_id: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.InputStream>;

        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_id_to_stream()` for
         * the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_id_to_stream_finish()` to get
         * the result of the operation.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        download_file_id_to_stream_async(file_id: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_id_to_stream()` for
         * the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_id_to_stream_finish()` to get
         * the result of the operation.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        download_file_id_to_stream_async(file_id: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.InputStream> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_skydrive_download_file_id_to_stream_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns A {@link Gio.InputStream} to read the file data from. Free the returned object with `g_object_unref()`.
         */
        download_file_id_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;

        /**
         * Synchronously downloads `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and saves it in `path`. The file is temporarily
         * saved in the preferred directory for temporary files (as returned
         * by `g_get_tmp_dir()`) while the download is going on, and then moved
         * to `path`.
         * @param file The {@link Zpj.SkydriveFile} to be downloaded.
         * @param path The destination.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the {@link Zpj.SkydriveFile} was downloaded successfully.
         */
        download_file_to_path(file: SkydriveFile, path: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Synchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_to_stream_async()`
         * for the asynchronous version of this call.
         * @param file The {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A {@link Gio.InputStream} to read the file data from. Free the returned object with `g_object_unref()`.
         */
        download_file_to_stream(file: SkydriveFile, cancellable: (Gio.Cancellable | null)): Gio.InputStream;

        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_to_stream()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_to_stream_finish()` to get the
         * result of the operation.
         * @param file The {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        download_file_to_stream_async(file: SkydriveFile, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.InputStream>;

        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_to_stream()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_to_stream_finish()` to get the
         * result of the operation.
         * @param file The {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        download_file_to_stream_async(file: SkydriveFile, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_download_file_to_stream()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_download_file_to_stream_finish()` to get the
         * result of the operation.
         * @param file The {@link Zpj.SkydriveFile} to be downloaded.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        download_file_to_stream_async(file: SkydriveFile, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.InputStream> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_skydrive_download_file_to_stream_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns A {@link Gio.InputStream} to read the file data from. Free the returned object with `g_object_unref()`.
         */
        download_file_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;

        /**
         * Gets the authorizer used to authorize requests to `self`.
         * @returns A {@link Zpj.Authorizer}. The returned object is owned by {@link Zpj.Skydrive} and should not be modified or freed.
         */
        get_authorizer(): Authorizer;

        /**
         * Synchronously lists the contents of `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder The {@link Zpj.SkydriveFolder} to be listed.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A list of the {@link Zpj.Skydrive} entries within the {@link Zpj.SkydriveFolder}. Free the returned list with `g_list_free()` after each element has been freed with `g_object_unref()`.
         */
        list_folder(folder: SkydriveFolder, cancellable: (Gio.Cancellable | null)): SkydriveEntry[];

        /**
         * Synchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder_id The ID of the {@link Zpj.SkydriveFolder} to be listed.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A list of the {@link Zpj.Skydrive} entries within the {@link Zpj.SkydriveFolder}, or `null` on error. Free the returned list with `g_list_free()` after each element has been freed with `g_object_unref()`.
         */
        list_folder_id(folder_id: string, cancellable: (Gio.Cancellable | null)): SkydriveEntry[];

        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_list_folder_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_list_folder_id_finish()` to get the result
         * of the operation.
         * @param folder_id The ID of the {@link Zpj.SkydriveFolder} to be listed.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        list_folder_id_async(folder_id: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<SkydriveEntry[]>;

        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_list_folder_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_list_folder_id_finish()` to get the result
         * of the operation.
         * @param folder_id The ID of the {@link Zpj.SkydriveFolder} to be listed.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        list_folder_id_async(folder_id: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_list_folder_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_list_folder_id_finish()` to get the result
         * of the operation.
         * @param folder_id The ID of the {@link Zpj.SkydriveFolder} to be listed.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        list_folder_id_async(folder_id: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SkydriveEntry[]> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_skydrive_list_folder_id_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns A list of the {@link Zpj.Skydrive} entries within the {@link Zpj.SkydriveFolder}, or `null` on error. Free the returned list with `g_list_free()` after each element has been freed with `g_object_unref()`.
         */
        list_folder_id_finish(res: Gio.AsyncResult): SkydriveEntry[];

        /**
         * Synchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_query_info_from_id_async()` for
         * the asynchronous version of this call.
         * @param id An ID to be queried.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A new {@link Zpj.SkydriveEntry}. Free the returned object with `g_object_unref()`.
         */
        query_info_from_id(id: string, cancellable: (Gio.Cancellable | null)): SkydriveEntry;

        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_query_info_from_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_query_info_from_id_finish()` to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        query_info_from_id_async(id: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<SkydriveEntry>;

        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_query_info_from_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_query_info_from_id_finish()` to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        query_info_from_id_async(id: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See `zpj_skydrive_query_info_from_id()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_skydrive_query_info_from_id_finish()` to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        query_info_from_id_async(id: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SkydriveEntry> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_skydrive_query_info_from_id_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns A new {@link Zpj.SkydriveEntry}. Free the returned object with `g_object_unref()`.
         */
        query_info_from_id_finish(res: Gio.AsyncResult): SkydriveEntry;

        /**
         * Uses the new `authorizer` to replace the old one that was used to
         * authorize requests to `self`.
         * @param authorizer A new {@link Zpj.Authorizer}.
         */
        set_authorizer(authorizer: Authorizer): void;

        /**
         * Synchronously returns a stream for downloading the thumbnail of the
         * file corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See
         * `zpj_skydrive_thumbnail_file_id_to_stream_async()` for the
         * asynchronous version of this call.
         * 
         * Thumbnails are only available for {@link Zpj.SkydrivePhoto} and
         * {@link Zpj.SkydriveVideo} objects. If `file_id` refers to some other kind of
         * {@link Zpj.SkydriveFile}, the error {@link Zpj.Error.REQUEST_URL_INVALID} will be
         * returned.
         * @param file_id The ID of the {@link Zpj.SkydriveFile} to be thumbnailed.
         * @param size The thumbnail size.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns A {@link Gio.InputStream} to read the thumbnail data from. Free the returned object with `g_object_unref()`.
         */
        thumbnail_file_id_to_stream(file_id: string, size: ThumbnailSize, cancellable: (Gio.Cancellable | null)): Gio.InputStream;

        /**
         * Synchronously uploads the file at `path` to
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and places it under `folder`.
         * @param path The source.
         * @param folder The destination {@link Zpj.SkydriveFolder}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the file was uploaded successfully.
         */
        upload_path_to_folder(path: string, folder: SkydriveFolder, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Synchronously uploads the file at `path` to
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and places it under the folder corresponding to
         * `folder_id`.
         * @param path The source.
         * @param folder_id The ID of the destination {@link Zpj.SkydriveFolder}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the file was uploaded successfully.
         */
        upload_path_to_folder_id(path: string, folder_id: string, cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace SkydriveEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::from-id": (pspec: GObject.ParamSpec) => void;
            "notify::from-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::json": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent-id": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            created_time: GLib.DateTime;
            createdTime: GLib.DateTime;
            description: string;
            from_id: string;
            fromId: string;
            from_name: string;
            fromName: string;
            id: string;
            json: Json.Node;
            name: string;
            parent_id: string;
            parentId: string;
            type: SkydriveEntryType;
            updated_time: GLib.DateTime;
            updatedTime: GLib.DateTime;
        }
    }

    /**
     * The {@link Zpj.SkydriveEntry} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    abstract class SkydriveEntry extends GObject.Object {
        static $gtype: GObject.GType<SkydriveEntry>;

        // Properties
        /**
         * @read-only
         */
        get created_time(): GLib.DateTime;

        /**
         * @read-only
         */
        get createdTime(): GLib.DateTime;

        /**
         * @read-only
         * @default null
         */
        get description(): string;

        /**
         * @read-only
         * @default null
         */
        get from_id(): string;

        /**
         * @read-only
         * @default null
         */
        get fromId(): string;

        /**
         * @read-only
         * @default null
         */
        get from_name(): string;

        /**
         * @read-only
         * @default null
         */
        get fromName(): string;

        /**
         * @read-only
         * @default null
         */
        get id(): string;

        /**
         * @construct-only
         */
        set json(val: Json.Node);

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default null
         */
        get parent_id(): string;

        /**
         * @read-only
         * @default null
         */
        get parentId(): string;

        /**
         * @read-only
         * @default Zpj.SkydriveEntryType.INVALID
         */
        get type(): SkydriveEntryType;

        /**
         * @read-only
         */
        get updated_time(): GLib.DateTime;

        /**
         * @read-only
         */
        get updatedTime(): GLib.DateTime;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkydriveEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SkydriveEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkydriveEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkydriveEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkydriveEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param node 
         * @virtual
         */
        vfunc_parse_json_node(node: Json.Node): void;

        // Methods
        /**
         * Gets the time at which `self` was created. This is the value of the
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a {@link GLib.DateTime} representing the time at which the entry was created. The returned time is owned by the {@link Zpj.SkydriveEntry} and should not be unreferenced.
         */
        get_created_time(): GLib.DateTime;

        /**
         * Gets the description of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * description</ulink> member in the JSON returned by the server.
         * @returns description of the entry. This string is owned by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_description(): string;

        /**
         * Gets the ID of the user who created or uploaded `self`. This is part
         * of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns ID of the user who created the entry. This string is by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_from_id(): string;

        /**
         * Gets the name of the user who created or uploaded `self`. This is
         * part of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns name of the user who created the entry. This string is by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_from_name(): string;

        /**
         * Gets the ID of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * id</ulink> member in the JSON returned by the server.
         * @returns the entry's ID. This string is owned by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_id(): string;

        /**
         * Gets the name of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * name</ulink> member in the JSON returned by the server.
         * @returns name of the entry. This string is owned by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_name(): string;

        /**
         * Gets the ID of the folder containing `self`. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * parent_id</ulink> member in the JSON returned by the server.
         * @returns ID of the parent folder. This string is owned by the {@link Zpj.SkydriveEntry} and should not be modified or freed.
         */
        get_parent_id(): string;

        /**
         * Gets the time at which `self` was last updated. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a {@link GLib.DateTime} representing the time at which the entry was last updated. The returned time is owned by the {@link Zpj.SkydriveEntry} and should not be unreferenced.
         */
        get_updated_time(): GLib.DateTime;

        /**
         * Whether `self` is a folder.
         * @returns `true` if the entry is a folder.
         */
        is_folder(): boolean;
    }


    namespace SkydriveFile {
        // Signal signatures
        interface SignalSignatures extends SkydriveEntry.SignalSignatures {
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::from-id": (pspec: GObject.ParamSpec) => void;
            "notify::from-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::json": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent-id": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends SkydriveEntry.ConstructorProps {
            size: (bigint | number);
        }
    }

    /**
     * The {@link Zpj.SkydriveFile} structure contains only private data and should
     * only be accessed using the provided API.
     * @gir-type Class
     */
    class SkydriveFile extends SkydriveEntry {
        static $gtype: GObject.GType<SkydriveFile>;

        // Properties
        /**
         * @read-only
         * @default -1
         */
        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveFile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkydriveFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node: Json.Node): SkydriveFile;

        // Signals
        /** @signal */
        connect<K extends keyof SkydriveFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkydriveFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkydriveFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkydriveFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the size of `self` in bytes. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#file">
         * size</ulink> member in the JSON returned by the server.
         * @returns The entry's size in bytes.
         */
        get_size(): number;
    }


    namespace SkydriveFolder {
        // Signal signatures
        interface SignalSignatures extends SkydriveEntry.SignalSignatures {
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::from-id": (pspec: GObject.ParamSpec) => void;
            "notify::from-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::json": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent-id": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends SkydriveEntry.ConstructorProps {

        }
    }

    /**
     * The {@link Zpj.SkydriveFolder} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    class SkydriveFolder extends SkydriveEntry {
        static $gtype: GObject.GType<SkydriveFolder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveFolder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkydriveFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node: Json.Node): SkydriveFolder;

        // Signals
        /** @signal */
        connect<K extends keyof SkydriveFolder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveFolder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkydriveFolder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveFolder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkydriveFolder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkydriveFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SkydrivePhoto {
        // Signal signatures
        interface SignalSignatures extends SkydriveFile.SignalSignatures {
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::from-id": (pspec: GObject.ParamSpec) => void;
            "notify::from-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::json": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent-id": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends SkydriveFile.ConstructorProps {

        }
    }

    /**
     * The {@link Zpj.SkydrivePhoto} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    class SkydrivePhoto extends SkydriveFile {
        static $gtype: GObject.GType<SkydrivePhoto>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydrivePhoto.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkydrivePhoto.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node: Json.Node): SkydrivePhoto;

        // Signals
        /** @signal */
        connect<K extends keyof SkydrivePhoto.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydrivePhoto.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkydrivePhoto.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydrivePhoto.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkydrivePhoto.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkydrivePhoto.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SkydriveVideo {
        // Signal signatures
        interface SignalSignatures extends SkydriveFile.SignalSignatures {
            "notify::bitrate": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::from-id": (pspec: GObject.ParamSpec) => void;
            "notify::from-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::json": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent-id": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends SkydriveFile.ConstructorProps {
            bitrate: number;
            duration: (bigint | number);
            height: number;
            width: number;
        }
    }

    /**
     * The {@link Zpj.SkydriveVideo} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    class SkydriveVideo extends SkydriveFile {
        static $gtype: GObject.GType<SkydriveVideo>;

        // Properties
        /**
         * @read-only
         * @default 0
         */
        get bitrate(): number;

        /**
         * @read-only
         * @default 0
         */
        get duration(): number;

        /**
         * @read-only
         * @default 0
         */
        get height(): number;

        /**
         * @read-only
         * @default 0
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveVideo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkydriveVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node: Json.Node): SkydriveVideo;

        // Signals
        /** @signal */
        connect<K extends keyof SkydriveVideo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveVideo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkydriveVideo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkydriveVideo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkydriveVideo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkydriveVideo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the bit rate of `self` in bits per second. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * bitrate</ulink> member in the JSON returned by the server.
         * @returns The video's bit rate in bits per second.
         */
        get_bitrate(): number;

        /**
         * Gets the run time duration of `self` in milliseconds. This is the
         * value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * duration</ulink> member in the JSON returned by the server.
         * @returns The video's run time duration in milliseconds.
         */
        get_duration(): number;

        /**
         * Gets the height of `self` in pixels. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * height</ulink> member in the JSON returned by the server.
         * @returns The video's height in pixels.
         */
        get_height(): number;

        /**
         * Gets the width of `self` in pixels. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * width</ulink> member in the JSON returned by the server.
         * @returns The video's width in pixels.
         */
        get_width(): number;
    }


    /**
     * @gir-type Alias
     */
    type AuthorizationDomainClass = typeof AuthorizationDomain;

    /**
     * @gir-type Struct
     */
    abstract class AuthorizationDomainPrivate {
        static $gtype: GObject.GType<AuthorizationDomainPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AuthorizerInterface = typeof Authorizer;

    /**
     * @gir-type Alias
     */
    type GoaAuthorizerClass = typeof GoaAuthorizer;

    /**
     * @gir-type Struct
     */
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SkydriveClass = typeof Skydrive;

    /**
     * @gir-type Alias
     */
    type SkydriveEntryClass = typeof SkydriveEntry;

    /**
     * @gir-type Struct
     */
    abstract class SkydriveEntryPrivate {
        static $gtype: GObject.GType<SkydriveEntryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SkydriveFileClass = typeof SkydriveFile;

    /**
     * @gir-type Struct
     */
    abstract class SkydriveFilePrivate {
        static $gtype: GObject.GType<SkydriveFilePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SkydriveFolderClass = typeof SkydriveFolder;

    /**
     * @gir-type Alias
     */
    type SkydrivePhotoClass = typeof SkydrivePhoto;

    /**
     * @gir-type Struct
     */
    abstract class SkydrivePrivate {
        static $gtype: GObject.GType<SkydrivePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SkydriveVideoClass = typeof SkydriveVideo;

    /**
     * @gir-type Struct
     */
    abstract class SkydriveVideoPrivate {
        static $gtype: GObject.GType<SkydriveVideoPrivate>;
    }


    namespace Authorizer {
        /**
         * Interface for implementing Authorizer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Whether the authorization tokens held by `iface` are valid for
             * `domain`.
             * 
             * This method is thread safe.
             * @param domain A {@link Zpj.AuthorizationDomain}.
             * @virtual
             */
            vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

            /**
             * Adds the necessary authorization to `call`.
             * 
             * This method modifies `call` in place and is thread safe.
             * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
             * @param call A {@link Rest.ProxyCall}.
             * @virtual
             */
            vfunc_process_call(domain: (AuthorizationDomain | null), call: Rest.ProxyCall): void;

            /**
             * Adds the necessary authorization to `message`. The type of `message`
             * can be DELETE, GET and POST.
             * 
             * This method modifies `message` in place and is thread safe.
             * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
             * @param message A {@link Soup.Message}.
             * @virtual
             */
            vfunc_process_message(domain: (AuthorizationDomain | null), message: Soup.Message): void;

            /**
             * Synchronously forces `iface` to refresh any authorization tokens
             * held by it. See `zpj_authorizer_refresh_authorization_async()` for the
             * asynchronous version of this call.
             * 
             * This method is thread safe.
             * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
             * @virtual
             */
            vfunc_refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    /**
     * @gir-type Interface
     */
    interface Authorizer extends GObject.Object, Authorizer.Interface {

        // Methods
        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         * 
         * This method is thread safe.
         * @param domain A {@link Zpj.AuthorizationDomain}.
         * @returns `true` if the tokens are valid.
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param call A {@link Rest.ProxyCall}.
         */
        process_call(domain: (AuthorizationDomain | null), call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional {@link Zpj.AuthorizationDomain} object,   or `null`.
         * @param message A {@link Soup.Message}.
         */
        process_message(domain: (AuthorizationDomain | null), message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See `zpj_authorizer_refresh_authorization()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `zpj_authorizer_refresh_authorization_finish()` to get the
         * result of the operation.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the   request is satisfied.
         */
        refresh_authorization_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes an asynchronous operation started with
         * `zpj_authorizer_refresh_authorization_async()`.
         * @param res A {@link Gio.AsyncResult}.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization_finish(res: Gio.AsyncResult): boolean;
    }


    export const Authorizer: AuthorizerNamespace & {
        new (): Authorizer; // This allows `obj instanceof Authorizer`
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

export default Zpj;

// END
