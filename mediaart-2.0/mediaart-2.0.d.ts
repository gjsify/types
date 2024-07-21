/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace MediaArt {
    /**
     * MediaArt-2.0
     */

    /**
     * Enumeration values used in errors returned by the
     * #MediaArtError API.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of MediaArt.Error

        /**
         * Storage information is unknown, we
         * have no knowledge about removable media.
         */
        static NO_STORAGE: number;
        /**
         * Title is required, but was not provided,
         * or was empty.
         */
        static NO_TITLE: number;
        /**
         * A call to symlink() failed
         * resulting in the incorrect storage of media art.
         */
        static SYMLINK_FAILED: number;
        /**
         * File could not be renamed.
         */
        static RENAME_FAILED: number;
        /**
         * This is given when the
         * XDG_CACHE_HOME directory could not be used to create the
         * 'media-art' subdirectory used for caching media art. This is
         * usually an initiation error.
         */
        static NO_CACHE_DIR: number;

        // Constructors of MediaArt.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace Type {
        export const $gtype: GObject.GType<Type>;
    }

    /**
     * This type categorized the type of media art we're dealing with.
     */
    enum Type {
        /**
         * No media art is available
         */
        NONE,
        /**
         * Media art is an album
         */
        ALBUM,
        /**
         * Media art is a movie or video
         */
        VIDEO,
    }
    /**
     * This function performs the same operation as
     * media_art_file_to_jpeg() with the exception that a raw `buffer` can
     * be used instead providing `len` and the `buffer_mime` too.
     * @param buffer Raw buffer representing content to save
     * @param buffer_mime MIME type for @buffer
     * @param target Output file name (not URI) to save converted content to
     * @returns %TRUE if conversion was successful, otherwise %FALSE is returned if @error is set.
     */
    function buffer_to_jpeg(buffer: Uint8Array | string, buffer_mime: string, target: string): boolean;
    /**
     * The error domain for #MediaArtError.
     * @returns the #GQuark used to identify media art errors in GError structures.
     */
    function error_quark(): GLib.Quark;
    /**
     * Save `filename` to `target` as JPEG format. The `filename` may not be
     * a JPEG in the first place.
     * @param filename Original file name (not URI) to convert
     * @param target Output file name (not URI) to save converted content to
     * @returns %TRUE if conversion was successful, otherwise %FALSE is returned if @error is set.
     */
    function file_to_jpeg(filename: string, target: string): boolean;
    /**
     * Gets the files pointing to cache files suitable for storing the media
     * art provided by the `artist,` `title` and `file` arguments. `cache_file`
     * will point to a location in the XDG user cache directory..
     *
     * The `cache_file` relates to a symlink stored in XDG cache directories
     * for the user. A `cache_file` would be expected to look like
     * <filename>file:///home/martyn/.cache/media-art/...</filename>. This
     * is normally the location that is most useful (assuming the cache
     * has been extracted in the first place).
     *
     * When done, both #GFile<!-- -->s must be freed with g_object_unref() if
     * non-%NULL.
     *
     * This operation should not use i/o, but it depends on the backend
     * GFile implementation.
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist the artist
     * @param title the title
     * @param prefix the prefix for cache files, for example "album"
     * @returns %TRUE if @cache_file was returned, otherwise %FALSE.
     */
    function get_file(
        artist?: string | null,
        title?: string | null,
        prefix?: string | null,
    ): [boolean, Gio.File | null];
    /**
     * This function calls media_art_get_file() by creating a #GFile for
     * `uri` and passing the same arguments to media_art_get_file(). For more
     * details about what this function does, see media_art_get_file().
     *
     * Get the path to media art for a given resource. Newly allocated
     * data returned in `cache_path` must be freed with g_free().
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist the artist
     * @param title the title
     * @param prefix the prefix, for example "album"
     * @returns %TRUE if @cache_path was returned, otherwise %FALSE.
     */
    function get_path(artist: string | null, title: string | null, prefix: string | null): [boolean, string];
    /**
     * This function facilitates a plugin&apos;s need to create any
     * internal caches before anything else is done. This function must
     * exist in each plugin and is called immediately after the plugin is
     * loaded. Conversely, media_art_plugin_shutdown() is called before
     * tear down of the plugin system or plugin itself.
     * @param max_width The maximum width that an image is allowed to be
     */
    function plugin_init(max_width: number): void;
    /**
     * This function facilitates a plugin&apos;s need to clean up any
     * internal caches. This function must exist in each plugin and is
     * called immediately after the plugin is loaded. Conversely,
     * media_art_plugin_init() is called after the plugin is loaded.
     */
    function plugin_shutdown(): void;
    /**
     * Removes media art for given album/artist provided.
     *
     * If `artist` and `album` are %NULL, ALL media art cache is removed.
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or %NULL
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns #TRUE on success, otherwise #FALSE where @error will be set.
     */
    function remove(artist: string, album?: string | null, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as media_art_remove() is performing, but
     * asynchronously.
     *
     * When all i/o for the operation is finished the `callback` will be
     * called.
     *
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with %G_IO_ERROR_CANCELLED.
     *
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     *
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or %NULL
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the #GObject this task belongs to, can be %NULL.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    function remove_async(
        artist: string,
        album: string | null,
        io_priority: number,
        source_object?: GObject.Object | null,
        cancellable?: Gio.Cancellable | null,
    ): Promise<boolean>;
    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as media_art_remove() is performing, but
     * asynchronously.
     *
     * When all i/o for the operation is finished the `callback` will be
     * called.
     *
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with %G_IO_ERROR_CANCELLED.
     *
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     *
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or %NULL
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the #GObject this task belongs to, can be %NULL.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    function remove_async(
        artist: string,
        album: string | null,
        io_priority: number,
        source_object: GObject.Object | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as media_art_remove() is performing, but
     * asynchronously.
     *
     * When all i/o for the operation is finished the `callback` will be
     * called.
     *
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with %G_IO_ERROR_CANCELLED.
     *
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     *
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     *
     * All string inputs must be valid UTF8. Use g_utf8_validate() if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or %NULL
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the #GObject this task belongs to, can be %NULL.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    function remove_async(
        artist: string,
        album: string | null,
        io_priority: number,
        source_object?: GObject.Object | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): Promise<boolean> | void;
    /**
     * Finishes the asynchronous operation started with
     * media_art_remove_async().
     * @param source_object the #GObject this task belongs to, can be %NULL.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success, otherwise %FALSE when @error will be set.
     */
    function remove_finish(source_object: GObject.Object | null, result: Gio.AsyncResult): boolean;
    /**
     * Strip a albumname or artistname string to prepare it for calculating the
     * media art path with it. Certain characters and charactersets will be stripped
     * and a newly allocated string returned which you must free with g_free().
     *
     * This functions is used internally by media_art_get_file() and
     * media_art_get_path(). You will not normally need to call it yourself.
     *
     * This function provides the following features:
     * 1. Invalid characters include: ()[]<>{}_!`#`$^&*+=|\/"'?~;
     * 2. Text inside brackets of (), {}, [] and <> pairs are removed.
     * 3. Multiples of space characters are removed.
     *
     * This function expects that the input is valid UTF-8. Use g_utf8_validate()
     * if the input has not already been validated.
     * @param original original string
     * @returns @original stripped of invalid characters which must be freed. On error or if @original is NULL, %NULL is returned.
     */
    function strip_invalid_entities(original?: string | null): string;
    export namespace ProcessFlags {
        export const $gtype: GObject.GType<ProcessFlags>;
    }

    /**
     * This type categorized the flags used when processing media art.
     */
    enum ProcessFlags {
        /**
         * Normal operation.
         */
        NONE,
        /**
         * Force media art to be re-saved to disk even if it already exists and the related file or URI has the same modified time (mtime).
         */
        FORCE,
    }
    module Process {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * A class implementation for processing and extracting media art.
     */
    class Process extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Process>;

        // Constructors of MediaArt.Process

        constructor(properties?: Partial<Process.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Process;

        // Own methods of MediaArt.Process

        /**
         * Processes a memory buffer represented by `buffer` and `len`. If you
         * have extracted any embedded media art and passed this in as
         * `buffer,` the image data will be converted to the correct format and
         * saved in the media art cache.
         *
         * Either `artist` OR `title` can be %NULL, but they can not both be %NULL.
         *
         * If `file` is on a removable filesystem, the media art file will be saved in a
         * cache on the removable file system rather than on the host machine.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing @file data, or %NULL
         * @param mime MIME type of @buffer, or %NULL
         * @param artist The artist name @file or %NULL
         * @param title The title for @file or %NULL
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @returns %TRUE if @file could be processed or %FALSE if @error is set.
         */
        buffer(
            type: Type,
            flags: ProcessFlags,
            related_file: Gio.File,
            buffer?: Uint8Array | null,
            mime?: string | null,
            artist?: string | null,
            title?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Processes media art. Precisely the same operation as
         * media_art_process_buffer() is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * Dbufferng an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing @file data, or %NULL
         * @param mime MIME type of @buffer, or %NULL
         * @param artist The artist name @file or %NULL
         * @param title The title for @file or %NULL
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        buffer_async(
            type: Type,
            flags: ProcessFlags,
            related_file: Gio.File,
            buffer: Uint8Array | null,
            mime: string,
            artist: string | null,
            title: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * media_art_process_file_async().
         * @param result a #GAsyncResult.
         * @returns %TRUE on success, otherwise %FALSE when @error will be set.
         */
        buffer_finish(result: Gio.AsyncResult): boolean;
        /**
         * Process `file` and check if media art exists and if it is up to date
         * with `artist` and `title` provided. Either `artist` OR `title` can be
         * %NULL, but they can not both be %NULL.
         *
         * NOTE: This function MAY retrieve media art for
         * `artist` and `title` combinations. It is not guaranteed and depends
         * on download services available over DBus at the time.
         *
         * In cases where download is unavailable, media_art_process_file()
         * will only try to procure a cache for possible media art found in
         * directories surrounding the location of `file`. If a buffer or
         * memory chunk needs to be saved to disk which has been retrieved
         * from an MP3 (for example), you should use
         * media_art_process_buffer().
         *
         * The modification time (mtime) of `file` is checked against the
         * cached stored for `artist` and `title`. If the cache is old or
         * doesn't exist, it will be updated. What this actually does is
         * update the mtime of the cache (a symlink) on the disk.
         *
         * If there is no actual media art stored locally (for example, it's
         * stored in a directory on a removable device), it is copied locally
         * (usually to an XDG cache directory).
         *
         * If `file` is on a removable filesystem, the media art file will be
         * saved in a cache on the removable file system rather than on the
         * host machine.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param file File to be processed
         * @param artist The artist name @file or %NULL
         * @param title The title for @file or %NULL
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @returns %TRUE if @file could be processed or %FALSE if @error is set.
         */
        file(
            type: Type,
            flags: ProcessFlags,
            file: Gio.File,
            artist?: string | null,
            title?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Processes media art. Precisely the same operation as
         * media_art_process_file() is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param file File to be processed
         * @param artist The artist name @file or %NULL
         * @param title The title for @file or %NULL
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        file_async(
            type: Type,
            flags: ProcessFlags,
            file: Gio.File,
            artist: string | null,
            title: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * media_art_process_file_async().
         * @param result a #GAsyncResult.
         * @returns %TRUE on success, otherwise %FALSE when @error will be set.
         */
        file_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function calls media_art_process_file(), but takes the `uri` as
         * a string rather than a #GFile object. Either `artist` OR `title` can be
         * %NULL, but they can not both be %NULL.
         * @param type The type of media that contained the image data
         * @param flags How the media art is processed
         * @param uri URI of the media file that contained the data
         * @param artist The artist name @uri or %NULL
         * @param title The title for @uri or %NULL
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @returns %TRUE if @uri could be processed or %FALSE if @error is set.
         */
        uri(
            type: Type,
            flags: ProcessFlags,
            uri: string,
            artist?: string | null,
            title?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Processes media art. Precisely the same operation as
         * media_art_process_uri() is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param uri A string representing a URI to be processed
         * @param artist The artist name @file or %NULL
         * @param title The title for @file or %NULL
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        uri_async(
            type: Type,
            flags: ProcessFlags,
            uri: string,
            artist: string | null,
            title: string | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * media_art_process_file_async().
         * @param result a #GAsyncResult.
         * @returns %TRUE on success, otherwise %FALSE when @error will be set.
         */
        uri_finish(result: Gio.AsyncResult): boolean;

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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type ProcessClass = typeof Process;
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

export default MediaArt;

// END
