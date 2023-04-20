
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Zpj-0.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export namespace Zpj {

/**
 * This enumeration can be expanded at a later date.
 */
enum Error {
    /**
     * The server received an invalid URL,
     *   possibly because of an invalid `file_id`.
     */
    REQUEST_URL_INVALID,
    /**
     * An unknown error occurred.
     */
    UNKNOWN,
}
/**
 * The types of Skydrive
 * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
 * objects</ulink>.
 * 
 * This enumeration can be expanded at a later date.
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
 * the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
const SKYDRIVE_FOLDER_MY_DOCUMENTS: string | null
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Pictures folder. It can be used as the
 * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
const SKYDRIVE_FOLDER_MY_PHOTOS: string | null
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Public folder. It can be used as the
 * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string | null
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Skydrive top-level folder. It can be
 * used as the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
const SKYDRIVE_FOLDER_SKYDRIVE: string | null
function error_quark(): GLib.Quark
module Authorizer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Authorizer {

    // Owm methods of Zpj-0.0.Zpj.Authorizer

    /**
     * Whether the authorization tokens held by `iface` are valid for
     * `domain`.
     * 
     * This method is thread safe.
     * @param domain A #ZpjAuthorizationDomain.
     * @returns %TRUE if the tokens are valid.
     */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param call A #RestProxyCall.
     */
    process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param message A #SoupMessage.
     */
    process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization_async() for the
     * asynchronous version of this call.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the authorizer now has a valid token.
     */
    refresh_authorization(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_authorizer_refresh_authorization_finish() to get the
     * result of the operation.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    refresh_authorization_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of refresh_authorization_async

    /**
     * Promisified version of {@link refresh_authorization_async}
     * 
     * Asynchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_authorizer_refresh_authorization_finish() to get the
     * result of the operation.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A Promise of: %TRUE if the authorizer now has a valid token.
     */
    refresh_authorization_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes an asynchronous operation started with
     * zpj_authorizer_refresh_authorization_async().
     * @param res A #GAsyncResult.
     * @returns %TRUE if the authorizer now has a valid token.
     */
    refresh_authorization_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of Zpj-0.0.Zpj.Authorizer

    /**
     * Whether the authorization tokens held by `iface` are valid for
     * `domain`.
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain A #ZpjAuthorizationDomain.
     * @returns %TRUE if the tokens are valid.
     */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @virtual 
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param call A #RestProxyCall.
     */
    vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @virtual 
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param message A #SoupMessage.
     */
    vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization_async() for the
     * asynchronous version of this call.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the authorizer now has a valid token.
     */
    vfunc_refresh_authorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Zpj-0.0.Zpj.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Authorizer extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.Authorizer

    static name: string
    static $gtype: GObject.GType<Authorizer>

    // Constructors of Zpj-0.0.Zpj.Authorizer

    constructor(config?: Authorizer.ConstructorProperties) 
    _init(config?: Authorizer.ConstructorProperties): void
}

module AuthorizationDomain {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.AuthorizationDomain

        scope?: string | null
        service_name?: string | null
    }

}

interface AuthorizationDomain {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomain

    readonly scope: string | null
    readonly service_name: string | null

    // Own fields of Zpj-0.0.Zpj.AuthorizationDomain

    parent_instance: GObject.Object
    priv: AuthorizationDomainPrivate

    // Owm methods of Zpj-0.0.Zpj.AuthorizationDomain

    get_scope(): string | null
    get_service_name(): string | null

    // Class property signals of Zpj-0.0.Zpj.AuthorizationDomain

    connect(sigName: "notify::scope", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AuthorizationDomain extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomain

    static name: string
    static $gtype: GObject.GType<AuthorizationDomain>

    // Constructors of Zpj-0.0.Zpj.AuthorizationDomain

    constructor(config?: AuthorizationDomain.ConstructorProperties) 
    _init(config?: AuthorizationDomain.ConstructorProperties): void
}

module GoaAuthorizer {

    // Constructor properties interface

    interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GoaAuthorizer extends Authorizer {

    // Own fields of Zpj-0.0.Zpj.GoaAuthorizer

    parent_instance: GObject.Object
    priv: GoaAuthorizerPrivate

    // Class property signals of Zpj-0.0.Zpj.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjGoaAuthorizer structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
class GoaAuthorizer extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizer

    static name: string
    static $gtype: GObject.GType<GoaAuthorizer>

    // Constructors of Zpj-0.0.Zpj.GoaAuthorizer

    constructor(config?: GoaAuthorizer.ConstructorProperties) 
    _init(config?: GoaAuthorizer.ConstructorProperties): void
}

module Skydrive {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.Skydrive

        authorizer?: Authorizer | null
    }

}

interface Skydrive {

    // Own properties of Zpj-0.0.Zpj.Skydrive

    authorizer: Authorizer

    // Own fields of Zpj-0.0.Zpj.Skydrive

    parent_instance: GObject.Object
    priv: SkydrivePrivate

    // Owm methods of Zpj-0.0.Zpj.Skydrive

    create_folder(folder: SkydriveFolder, cancellable: Gio.Cancellable | null): boolean
    create_folder_from_name(name: string | null, parent_id: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously deletes the entry corresponding to `entry_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param entry_id The ID of the #ZpjSkydriveEntry to be deleted.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the #ZpjSkydriveEntry was deleted successfully.
     */
    delete_entry_id(entry_id: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously downloads the file corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and saves it in `path`. The file is temporarily
     * saved in the preferred directory for temporary files (as returned
     * by g_get_tmp_dir()) while the download is going on, and then moved
     * to `path`.
     * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
     * @param path The destination.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the #ZpjSkydriveFile was downloaded successfully.
     */
    download_file_id_to_path(file_id: string | null, path: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously returns a stream for downloading the file
     * corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See
     * zpj_skydrive_download_file_id_to_stream_async() for the asynchronous
     * version of this call.
     * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_id_to_stream(file_id: string | null, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Asynchronously returns a stream for downloading the file
     * corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_id_to_stream_finish() to get
     * the result of the operation.
     * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    download_file_id_to_stream_async(file_id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of download_file_id_to_stream_async

    /**
     * Promisified version of {@link download_file_id_to_stream_async}
     * 
     * Asynchronously returns a stream for downloading the file
     * corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_id_to_stream_finish() to get
     * the result of the operation.
     * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A Promise of: A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_id_to_stream_async(file_id: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_download_file_id_to_stream_async().
     * @param res A #GAsyncResult.
     * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_id_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream
    /**
     * Synchronously downloads `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and saves it in `path`. The file is temporarily
     * saved in the preferred directory for temporary files (as returned
     * by g_get_tmp_dir()) while the download is going on, and then moved
     * to `path`.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param path The destination.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the #ZpjSkydriveFile was downloaded successfully.
     */
    download_file_to_path(file: SkydriveFile, path: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously returns a stream for downloading `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream_async()
     * for the asynchronous version of this call.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_to_stream(file: SkydriveFile, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Asynchronously returns a stream for downloading `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_to_stream_finish() to get the
     * result of the operation.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    download_file_to_stream_async(file: SkydriveFile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of download_file_to_stream_async

    /**
     * Promisified version of {@link download_file_to_stream_async}
     * 
     * Asynchronously returns a stream for downloading `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_to_stream_finish() to get the
     * result of the operation.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A Promise of: A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_to_stream_async(file: SkydriveFile, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_download_file_to_stream_async().
     * @param res A #GAsyncResult.
     * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
     */
    download_file_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream
    /**
     * Gets the authorizer used to authorize requests to `self`.
     * @returns A #ZpjAuthorizer. The returned object is owned by #ZpjSkydrive and should not be modified or freed.
     */
    get_authorizer(): Authorizer
    /**
     * Synchronously lists the contents of `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param folder The #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
     */
    list_folder(folder: SkydriveFolder, cancellable: Gio.Cancellable | null): SkydriveEntry[]
    /**
     * Synchronously lists the contents of the folder corresponding to
     * `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
     */
    list_folder_id(folder_id: string | null, cancellable: Gio.Cancellable | null): SkydriveEntry[]
    /**
     * Asynchronously lists the contents of the folder corresponding to
     * `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_list_folder_id_finish() to get the result
     * of the operation.
     * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    list_folder_id_async(folder_id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of list_folder_id_async

    /**
     * Promisified version of {@link list_folder_id_async}
     * 
     * Asynchronously lists the contents of the folder corresponding to
     * `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_list_folder_id_finish() to get the result
     * of the operation.
     * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A Promise of: A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
     */
    list_folder_id_async(folder_id: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<SkydriveEntry[]>
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_list_folder_id_async().
     * @param res A #GAsyncResult.
     * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
     */
    list_folder_id_finish(res: Gio.AsyncResult): SkydriveEntry[]
    /**
     * Synchronously reads the properties of the entry corresponding to
     * `id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_query_info_from_id_async() for
     * the asynchronous version of this call.
     * @param id An ID to be queried.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
     */
    query_info_from_id(id: string | null, cancellable: Gio.Cancellable | null): SkydriveEntry
    /**
     * Asynchronously reads the properties of the entry corresponding to
     * `id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_query_info_from_id_finish() to get the result
     * of the operation.
     * @param id The ID to be queried.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    query_info_from_id_async(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of query_info_from_id_async

    /**
     * Promisified version of {@link query_info_from_id_async}
     * 
     * Asynchronously reads the properties of the entry corresponding to
     * `id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_query_info_from_id_finish() to get the result
     * of the operation.
     * @param id The ID to be queried.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A Promise of: A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
     */
    query_info_from_id_async(id: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<SkydriveEntry>
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_query_info_from_id_async().
     * @param res A #GAsyncResult.
     * @returns A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
     */
    query_info_from_id_finish(res: Gio.AsyncResult): SkydriveEntry
    /**
     * Uses the new `authorizer` to replace the old one that was used to
     * authorize requests to `self`.
     * @param authorizer A new #ZpjAuthorizer.
     */
    set_authorizer(authorizer: Authorizer): void
    /**
     * Synchronously returns a stream for downloading the thumbnail of the
     * file corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See
     * zpj_skydrive_thumbnail_file_id_to_stream_async() for the
     * asynchronous version of this call.
     * 
     * Thumbnails are only available for #ZpjSkydrivePhoto and
     * #ZpjSkydriveVideo objects. If `file_id` refers to some other kind of
     * #ZpjSkydriveFile, the error %ZPJ_ERROR_REQUEST_URL_INVALID will be
     * returned.
     * @param file_id The ID of the #ZpjSkydriveFile to be thumbnailed.
     * @param size The thumbnail size.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns A #GInputStream to read the thumbnail data from. Free the returned object with g_object_unref().
     */
    thumbnail_file_id_to_stream(file_id: string | null, size: ThumbnailSize, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Synchronously uploads the file at `path` to
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and places it under `folder`.
     * @param path The source.
     * @param folder The destination #ZpjSkydriveFolder.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the file was uploaded successfully.
     */
    upload_path_to_folder(path: string | null, folder: SkydriveFolder, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously uploads the file at `path` to
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and places it under the folder corresponding to
     * `folder_id`.
     * @param path The source.
     * @param folder_id The ID of the destination #ZpjSkydriveFolder.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @returns %TRUE if the file was uploaded successfully.
     */
    upload_path_to_folder_id(path: string | null, folder_id: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Zpj-0.0.Zpj.Skydrive

    connect(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydrive structure contains only private data and should
 * only be accessed using the provided API.
 * @class 
 */
class Skydrive extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.Skydrive

    static name: string
    static $gtype: GObject.GType<Skydrive>

    // Constructors of Zpj-0.0.Zpj.Skydrive

    constructor(config?: Skydrive.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydrive using the given `authorizer`.
     * @constructor 
     * @param authorizer A #ZpjAuthorizer to authorize the service's requests.
     * @returns A new #ZpjSkydrive. Free the returned object with g_object_unref().
     */
    constructor(authorizer: Authorizer) 
    /**
     * Creates a new #ZpjSkydrive using the given `authorizer`.
     * @constructor 
     * @param authorizer A #ZpjAuthorizer to authorize the service's requests.
     * @returns A new #ZpjSkydrive. Free the returned object with g_object_unref().
     */
    static new(authorizer: Authorizer): Skydrive
    _init(config?: Skydrive.ConstructorProperties): void
}

module SkydriveEntry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.SkydriveEntry

        json?: Json.Node | null
    }

}

interface SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntry

    readonly created_time: GLib.DateTime
    readonly description: string | null
    readonly from_id: string | null
    readonly from_name: string | null
    readonly id: string | null
    readonly json: Json.Node
    readonly name: string | null
    readonly parent_id: string | null
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime

    // Own fields of Zpj-0.0.Zpj.SkydriveEntry

    parent_instance: GObject.Object
    priv: SkydriveEntryPrivate

    // Owm methods of Zpj-0.0.Zpj.SkydriveEntry

    /**
     * Gets the time at which `self` was created. This is the value of the
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * updated_time</ulink> member in the JSON returned by the server.
     * @returns a #GDateTime representing the time at which the entry was created. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
     */
    get_created_time(): GLib.DateTime
    /**
     * Gets the description of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * description</ulink> member in the JSON returned by the server.
     * @returns description of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_description(): string | null
    /**
     * Gets the ID of the user who created or uploaded `self`. This is part
     * of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * from</ulink> object in the JSON returned by the server.
     * @returns ID of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_from_id(): string | null
    /**
     * Gets the name of the user who created or uploaded `self`. This is
     * part of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * from</ulink> object in the JSON returned by the server.
     * @returns name of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_from_name(): string | null
    /**
     * Gets the ID of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * id</ulink> member in the JSON returned by the server.
     * @returns the entry's ID. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_id(): string | null
    /**
     * Gets the name of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * name</ulink> member in the JSON returned by the server.
     * @returns name of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_name(): string | null
    /**
     * Gets the ID of the folder containing `self`. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * parent_id</ulink> member in the JSON returned by the server.
     * @returns ID of the parent folder. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
     */
    get_parent_id(): string | null
    /**
     * Gets the time at which `self` was last updated. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * updated_time</ulink> member in the JSON returned by the server.
     * @returns a #GDateTime representing the time at which the entry was last updated. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
     */
    get_updated_time(): GLib.DateTime
    /**
     * Whether `self` is a folder.
     * @returns %TRUE if the entry is a folder.
     */
    is_folder(): boolean

    // Own virtual methods of Zpj-0.0.Zpj.SkydriveEntry

    vfunc_parse_json_node(node: Json.Node): void

    // Class property signals of Zpj-0.0.Zpj.SkydriveEntry

    connect(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydriveEntry structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
class SkydriveEntry extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntry

    static name: string
    static $gtype: GObject.GType<SkydriveEntry>

    // Constructors of Zpj-0.0.Zpj.SkydriveEntry

    constructor(config?: SkydriveEntry.ConstructorProperties) 
    _init(config?: SkydriveEntry.ConstructorProperties): void
}

module SkydriveFile {

    // Constructor properties interface

    interface ConstructorProperties extends SkydriveEntry.ConstructorProperties {
    }

}

interface SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydriveFile

    readonly size: number

    // Own fields of Zpj-0.0.Zpj.SkydriveFile

    parent_instance: SkydriveEntry & GObject.Object
    priv: any

    // Owm methods of Zpj-0.0.Zpj.SkydriveFile

    /**
     * Gets the size of `self` in bytes. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#file">
     * size</ulink> member in the JSON returned by the server.
     * @returns The entry's size in bytes.
     */
    get_size(): number

    // Class property signals of Zpj-0.0.Zpj.SkydriveFile

    connect(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydriveFile structure contains only private data and should
 * only be accessed using the provided API.
 * @class 
 */
class SkydriveFile extends SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveFile

    static name: string
    static $gtype: GObject.GType<SkydriveFile>

    // Constructors of Zpj-0.0.Zpj.SkydriveFile

    constructor(config?: SkydriveFile.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveFile from the given `node`. If you already
     * know the ID of the file then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveFile. Free the returned object with g_object_unref().
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveFile from the given `node`. If you already
     * know the ID of the file then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveFile. Free the returned object with g_object_unref().
     */
    static new(node: Json.Node): SkydriveFile
    _init(config?: SkydriveFile.ConstructorProperties): void
}

module SkydriveFolder {

    // Constructor properties interface

    interface ConstructorProperties extends SkydriveEntry.ConstructorProperties {
    }

}

interface SkydriveFolder {

    // Own fields of Zpj-0.0.Zpj.SkydriveFolder

    parent_instance: SkydriveEntry & GObject.Object

    // Class property signals of Zpj-0.0.Zpj.SkydriveFolder

    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydriveFolder structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
class SkydriveFolder extends SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveFolder

    static name: string
    static $gtype: GObject.GType<SkydriveFolder>

    // Constructors of Zpj-0.0.Zpj.SkydriveFolder

    constructor(config?: SkydriveFolder.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveFolder from the given `node`. If you
     * already know the ID of the folder then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveFolder. Free the returned object with g_object_unref().
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveFolder from the given `node`. If you
     * already know the ID of the folder then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveFolder. Free the returned object with g_object_unref().
     */
    static new(node: Json.Node): SkydriveFolder
    _init(config?: SkydriveFolder.ConstructorProperties): void
}

module SkydrivePhoto {

    // Constructor properties interface

    interface ConstructorProperties extends SkydriveFile.ConstructorProperties {
    }

}

interface SkydrivePhoto {

    // Conflicting properties

    priv: any & SkydriveEntryPrivate

    // Own fields of Zpj-0.0.Zpj.SkydrivePhoto

    parent_instance: SkydriveFile & SkydriveEntry & GObject.Object & GObject.Object

    // Class property signals of Zpj-0.0.Zpj.SkydrivePhoto

    connect(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydrivePhoto structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
class SkydrivePhoto extends SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydrivePhoto

    static name: string
    static $gtype: GObject.GType<SkydrivePhoto>

    // Constructors of Zpj-0.0.Zpj.SkydrivePhoto

    constructor(config?: SkydrivePhoto.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydrivePhoto from the given `node`. If you already
     * know the ID of the photo then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydrivePhoto. Free the returned object with g_object_unref().
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydrivePhoto from the given `node`. If you already
     * know the ID of the photo then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydrivePhoto. Free the returned object with g_object_unref().
     */
    static new(node: Json.Node): SkydrivePhoto
    _init(config?: SkydrivePhoto.ConstructorProperties): void
}

module SkydriveVideo {

    // Constructor properties interface

    interface ConstructorProperties extends SkydriveFile.ConstructorProperties {
    }

}

interface SkydriveVideo {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideo

    readonly bitrate: number
    readonly duration: number
    readonly height: number
    readonly width: number

    // Own fields of Zpj-0.0.Zpj.SkydriveVideo

    parent_instance: SkydriveFile & SkydriveEntry & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Zpj-0.0.Zpj.SkydriveVideo

    /**
     * Gets the bit rate of `self` in bits per second. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * bitrate</ulink> member in the JSON returned by the server.
     * @returns The video's bit rate in bits per second.
     */
    get_bitrate(): number
    /**
     * Gets the run time duration of `self` in milliseconds. This is the
     * value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * duration</ulink> member in the JSON returned by the server.
     * @returns The video's run time duration in milliseconds.
     */
    get_duration(): number
    /**
     * Gets the height of `self` in pixels. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * height</ulink> member in the JSON returned by the server.
     * @returns The video's height in pixels.
     */
    get_height(): number
    /**
     * Gets the width of `self` in pixels. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * width</ulink> member in the JSON returned by the server.
     * @returns The video's width in pixels.
     */
    get_width(): number

    // Class property signals of Zpj-0.0.Zpj.SkydriveVideo

    connect(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ZpjSkydriveVideo structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
class SkydriveVideo extends SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideo

    static name: string
    static $gtype: GObject.GType<SkydriveVideo>

    // Constructors of Zpj-0.0.Zpj.SkydriveVideo

    constructor(config?: SkydriveVideo.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveVideo from the given `node`. If you already
     * know the ID of the video then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveVideo. Free the returned object with g_object_unref().
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveVideo from the given `node`. If you already
     * know the ID of the video then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     * @returns A new #ZpjSkydriveVideo. Free the returned object with g_object_unref().
     */
    static new(node: Json.Node): SkydriveVideo
    _init(config?: SkydriveVideo.ConstructorProperties): void
}

interface AuthorizationDomainClass {

    // Own fields of Zpj-0.0.Zpj.AuthorizationDomainClass

    parent_class: GObject.ObjectClass
}

abstract class AuthorizationDomainClass {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomainClass

    static name: string
}

interface AuthorizationDomainPrivate {
}

class AuthorizationDomainPrivate {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomainPrivate

    static name: string
}

interface AuthorizerInterface {

    // Own fields of Zpj-0.0.Zpj.AuthorizerInterface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    is_authorized_for_domain: (iface: Authorizer, domain: AuthorizationDomain) => boolean
    process_call: (iface: Authorizer, domain: AuthorizationDomain | null, call: Rest.ProxyCall) => void
    process_message: (iface: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    refresh_authorization: (iface: Authorizer, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Interface structure for #ZpjAuthorizer. All methods should be
 * thread safe.
 * @record 
 */
abstract class AuthorizerInterface {

    // Own properties of Zpj-0.0.Zpj.AuthorizerInterface

    static name: string
}

interface GoaAuthorizerClass {

    // Own fields of Zpj-0.0.Zpj.GoaAuthorizerClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Class structure for #ZpjGoaAuthorizer.
 * @record 
 */
abstract class GoaAuthorizerClass {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizerClass

    static name: string
}

interface GoaAuthorizerPrivate {
}

class GoaAuthorizerPrivate {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizerPrivate

    static name: string
}

interface SkydriveClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Class structure for #ZpjSkydrive.
 * @record 
 */
abstract class SkydriveClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveClass

    static name: string
}

interface SkydriveEntryClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveEntryClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    parse_json_node: (self: SkydriveEntry, node: Json.Node) => void
}

/**
 * Class structure for #ZpjSkydriveEntry.
 * @record 
 */
abstract class SkydriveEntryClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntryClass

    static name: string
}

interface SkydriveEntryPrivate {
}

class SkydriveEntryPrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntryPrivate

    static name: string
}

interface SkydriveFileClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveFileClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: SkydriveEntryClass
}

/**
 * Class structure for #ZpjSkydriveFile.
 * @record 
 */
abstract class SkydriveFileClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveFileClass

    static name: string
}

interface SkydriveFilePrivate {
}

class SkydriveFilePrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveFilePrivate

    static name: string
}

interface SkydriveFolderClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveFolderClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: SkydriveEntryClass
}

/**
 * Class structure for #ZpjSkydriveFolder.
 * @record 
 */
abstract class SkydriveFolderClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveFolderClass

    static name: string
}

interface SkydrivePhotoClass {

    // Own fields of Zpj-0.0.Zpj.SkydrivePhotoClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: SkydriveFileClass
}

/**
 * Class structure for #ZpjSkydrivePhoto.
 * @record 
 */
abstract class SkydrivePhotoClass {

    // Own properties of Zpj-0.0.Zpj.SkydrivePhotoClass

    static name: string
}

interface SkydrivePrivate {
}

class SkydrivePrivate {

    // Own properties of Zpj-0.0.Zpj.SkydrivePrivate

    static name: string
}

interface SkydriveVideoClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveVideoClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: SkydriveFileClass
}

/**
 * Class structure for #ZpjSkydriveVideo.
 * @record 
 */
abstract class SkydriveVideoClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideoClass

    static name: string
}

interface SkydriveVideoPrivate {
}

class SkydriveVideoPrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideoPrivate

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

export default Zpj;
// END