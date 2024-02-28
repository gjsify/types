/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './zpj-0.0-ambient.d.ts';
import './zpj-0.0-import.d.ts';
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
    class Error extends GLib.Error {
        // Own fields of Zpj-0.0.Error

        /**
         * The server received an invalid URL,
         *   possibly because of an invalid `file_id`.
         */
        REQUEST_URL_INVALID: number;
        /**
         * An unknown error occurred.
         */
        UNKNOWN: number;

        // Constructors of Zpj-0.0.Error

        constructor(options: { message: string; code: number });
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
    const SKYDRIVE_FOLDER_MY_DOCUMENTS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Pictures folder. It can be used as the
     * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_MY_PHOTOS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Public folder. It can be used as the
     * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Skydrive top-level folder. It can be
     * used as the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_SKYDRIVE: string;
    function error_quark(): GLib.Quark;
    module AuthorizationDomain {
        // Constructor properties interface
    }

    class AuthorizationDomain extends GObject.Object {
        // Own properties of Zpj-0.0.AuthorizationDomain

        scope: string;
        service_name: string;
        serviceName: string;

        // Owm methods of Zpj-0.0.AuthorizationDomain

        get_scope(): string;
        get_service_name(): string;
    }

    module GoaAuthorizer {
        // Constructor properties interface
    }

    /**
     * The #ZpjGoaAuthorizer structure contains only private data and
     * should only be accessed using the provided API.
     */
    class GoaAuthorizer extends GObject.Object {}

    module Skydrive {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydrive structure contains only private data and should
     * only be accessed using the provided API.
     */
    class Skydrive extends GObject.Object {
        // Own properties of Zpj-0.0.Skydrive

        authorizer: Authorizer;

        // Constructors of Zpj-0.0.Skydrive

        static ['new'](authorizer: Authorizer): Skydrive;

        // Owm methods of Zpj-0.0.Skydrive

        create_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean;
        create_folder_from_name(name: string, parent_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously deletes the entry corresponding to `entry_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param entry_id The ID of the #ZpjSkydriveEntry to be deleted.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the #ZpjSkydriveEntry was deleted successfully.
         */
        delete_entry_id(entry_id: string, cancellable?: Gio.Cancellable | null): boolean;
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
        download_file_id_to_path(file_id: string, path: string, cancellable?: Gio.Cancellable | null): boolean;
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
        download_file_id_to_stream(file_id: string, cancellable?: Gio.Cancellable | null): Gio.InputStream;
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
        download_file_id_to_stream_async(
            file_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_download_file_id_to_stream_async().
         * @param res A #GAsyncResult.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_id_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;
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
        download_file_to_path(file: SkydriveFile, path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream_async()
         * for the asynchronous version of this call.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_to_stream(file: SkydriveFile, cancellable?: Gio.Cancellable | null): Gio.InputStream;
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
        download_file_to_stream_async(
            file: SkydriveFile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_download_file_to_stream_async().
         * @param res A #GAsyncResult.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;
        /**
         * Gets the authorizer used to authorize requests to `self`.
         * @returns A #ZpjAuthorizer. The returned object is owned by #ZpjSkydrive and should not be modified or freed.
         */
        get_authorizer(): Authorizer;
        /**
         * Synchronously lists the contents of `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder The #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): SkydriveEntry[];
        /**
         * Synchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder_id(folder_id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry[];
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
        list_folder_id_async(
            folder_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_list_folder_id_async().
         * @param res A #GAsyncResult.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder_id_finish(res: Gio.AsyncResult): SkydriveEntry[];
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
        query_info_from_id(id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry;
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
        query_info_from_id_async(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_query_info_from_id_async().
         * @param res A #GAsyncResult.
         * @returns A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
         */
        query_info_from_id_finish(res: Gio.AsyncResult): SkydriveEntry;
        /**
         * Uses the new `authorizer` to replace the old one that was used to
         * authorize requests to `self`.
         * @param authorizer A new #ZpjAuthorizer.
         */
        set_authorizer(authorizer: Authorizer): void;
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
        thumbnail_file_id_to_stream(
            file_id: string,
            size: ThumbnailSize,
            cancellable?: Gio.Cancellable | null,
        ): Gio.InputStream;
        /**
         * Synchronously uploads the file at `path` to
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and places it under `folder`.
         * @param path The source.
         * @param folder The destination #ZpjSkydriveFolder.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the file was uploaded successfully.
         */
        upload_path_to_folder(path: string, folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean;
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
        upload_path_to_folder_id(path: string, folder_id: string, cancellable?: Gio.Cancellable | null): boolean;
    }

    module SkydriveEntry {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydriveEntry structure contains only private data and
     * should only be accessed using the provided API.
     */
    abstract class SkydriveEntry extends GObject.Object {
        // Own properties of Zpj-0.0.SkydriveEntry

        readonly created_time: GLib.DateTime;
        readonly createdTime: GLib.DateTime;
        readonly description: string;
        readonly from_id: string;
        readonly fromId: string;
        readonly from_name: string;
        readonly fromName: string;
        readonly id: string;
        json: Json.Node;
        readonly name: string;
        readonly parent_id: string;
        readonly parentId: string;
        readonly type: SkydriveEntryType;
        readonly updated_time: GLib.DateTime;
        readonly updatedTime: GLib.DateTime;

        // Owm methods of Zpj-0.0.SkydriveEntry

        /**
         * Gets the time at which `self` was created. This is the value of the
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a #GDateTime representing the time at which the entry was created. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
         */
        get_created_time(): GLib.DateTime;
        /**
         * Gets the description of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * description</ulink> member in the JSON returned by the server.
         * @returns description of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_description(): string;
        /**
         * Gets the ID of the user who created or uploaded `self`. This is part
         * of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns ID of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_from_id(): string;
        /**
         * Gets the name of the user who created or uploaded `self`. This is
         * part of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns name of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_from_name(): string;
        /**
         * Gets the ID of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * id</ulink> member in the JSON returned by the server.
         * @returns the entry's ID. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_id(): string;
        /**
         * Gets the name of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * name</ulink> member in the JSON returned by the server.
         * @returns name of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_name(): string;
        /**
         * Gets the ID of the folder containing `self`. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * parent_id</ulink> member in the JSON returned by the server.
         * @returns ID of the parent folder. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_parent_id(): string;
        /**
         * Gets the time at which `self` was last updated. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a #GDateTime representing the time at which the entry was last updated. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
         */
        get_updated_time(): GLib.DateTime;
        /**
         * Whether `self` is a folder.
         * @returns %TRUE if the entry is a folder.
         */
        is_folder(): boolean;
    }

    module SkydriveFile {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydriveFile structure contains only private data and should
     * only be accessed using the provided API.
     */
    class SkydriveFile extends SkydriveEntry {
        // Own properties of Zpj-0.0.SkydriveFile

        readonly size: number;

        // Constructors of Zpj-0.0.SkydriveFile

        static ['new'](node: Json.Node): SkydriveFile;

        // Owm methods of Zpj-0.0.SkydriveFile

        /**
         * Gets the size of `self` in bytes. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#file">
         * size</ulink> member in the JSON returned by the server.
         * @returns The entry's size in bytes.
         */
        get_size(): number;
    }

    module SkydriveFolder {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydriveFolder structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydriveFolder extends SkydriveEntry {
        // Constructors of Zpj-0.0.SkydriveFolder

        static ['new'](node: Json.Node): SkydriveFolder;
    }

    module SkydrivePhoto {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydrivePhoto structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydrivePhoto extends SkydriveFile {
        // Constructors of Zpj-0.0.SkydrivePhoto

        static ['new'](node: Json.Node): SkydrivePhoto;
    }

    module SkydriveVideo {
        // Constructor properties interface
    }

    /**
     * The #ZpjSkydriveVideo structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydriveVideo extends SkydriveFile {
        // Own properties of Zpj-0.0.SkydriveVideo

        readonly bitrate: number;
        readonly duration: number;
        readonly height: number;
        readonly width: number;

        // Constructors of Zpj-0.0.SkydriveVideo

        static ['new'](node: Json.Node): SkydriveVideo;

        // Owm methods of Zpj-0.0.SkydriveVideo

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

    class AuthorizationDomainClass {}

    class AuthorizationDomainPrivate {}

    /**
     * Interface structure for #ZpjAuthorizer. All methods should be
     * thread safe.
     */
    class AuthorizerInterface {}

    /**
     * Class structure for #ZpjGoaAuthorizer.
     */
    class GoaAuthorizerClass {}

    class GoaAuthorizerPrivate {}

    /**
     * Class structure for #ZpjSkydrive.
     */
    class SkydriveClass {}

    /**
     * Class structure for #ZpjSkydriveEntry.
     */
    class SkydriveEntryClass {}

    class SkydriveEntryPrivate {}

    /**
     * Class structure for #ZpjSkydriveFile.
     */
    class SkydriveFileClass {}

    class SkydriveFilePrivate {}

    /**
     * Class structure for #ZpjSkydriveFolder.
     */
    class SkydriveFolderClass {}

    /**
     * Class structure for #ZpjSkydrivePhoto.
     */
    class SkydrivePhotoClass {}

    class SkydrivePrivate {}

    /**
     * Class structure for #ZpjSkydriveVideo.
     */
    class SkydriveVideoClass {}

    class SkydriveVideoPrivate {}

    interface Authorizer {
        // Owm methods of Zpj-0.0.Authorizer

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         * @returns %TRUE if the tokens are valid.
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
        refresh_authorization_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_authorizer_refresh_authorization_async().
         * @param res A #GAsyncResult.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization_finish(res: Gio.AsyncResult): boolean;

        // Own virtual methods of Zpj-0.0.Authorizer

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         */
        vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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

export default Zpj;
// END
