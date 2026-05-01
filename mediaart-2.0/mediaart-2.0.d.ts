
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
     * {@link MediaArt.Error} API.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
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
         * A call to `symlink()` failed
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

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * This type categorized the type of media art we're dealing with.
     * @gir-type Enum
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
     * `media_art_file_to_jpeg()` with the exception that a raw `buffer` can
     * be used instead providing `len` and the `buffer_mime` too.
     * @param buffer Raw buffer representing content to save
     * @param buffer_mime MIME type for `buffer`
     * @param target Output file name (not URI) to save converted content to
     * @returns `true` if conversion was successful, otherwise `false` is returned if `error` is set.
     * @since 0.1.0
     */
    function buffer_to_jpeg(buffer: (Uint8Array | string), buffer_mime: string, target: string): boolean;

    /**
     * The error domain for {@link MediaArt.Error}.
     * @returns the {@link GLib.Quark} used to identify media art errors in GError structures.
     * @since 0.2.0
     */
    function error_quark(): GLib.Quark;

    /**
     * Save `filename` to `target` as JPEG format. The `filename` may not be
     * a JPEG in the first place.
     * @param filename Original file name (not URI) to convert
     * @param target Output file name (not URI) to save converted content to
     * @returns `true` if conversion was successful, otherwise `false` is returned if `error` is set.
     * @since 0.1.0
     */
    function file_to_jpeg(filename: string, target: string): boolean;

    /**
     * Gets the files pointing to cache files suitable for storing the media
     * art provided by the `artist`, `title` and `file` arguments. `cache_file`
     * will point to a location in the XDG user cache directory..
     * 
     * The `cache_file` relates to a symlink stored in XDG cache directories
     * for the user. A `cache_file` would be expected to look like
     * <filename>file:///home/martyn/.cache/media-art/...</filename>. This
     * is normally the location that is most useful (assuming the cache
     * has been extracted in the first place).
     * 
     * When done, both {@link Gio.File}<!-- -->s must be freed with `g_object_unref()` if
     * non-`null`.
     * 
     * This operation should not use i/o, but it depends on the backend
     * GFile implementation.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist the artist
     * @param title the title
     * @param prefix the prefix for cache files, for example "album"
     * @returns `true` if `cache_file` was returned, otherwise `false`.
     * @since 0.2.0
     */
    function get_file(artist: (string | null), title: (string | null), prefix: (string | null)): [boolean, Gio.File | null];

    /**
     * This function calls `media_art_get_file()` by creating a {@link Gio.File} for
     * `uri` and passing the same arguments to `media_art_get_file()`. For more
     * details about what this function does, see `media_art_get_file()`.
     * 
     * Get the path to media art for a given resource. Newly allocated
     * data returned in `cache_path` must be freed with `g_free()`.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist the artist
     * @param title the title
     * @param prefix the prefix, for example "album"
     * @returns `true` if `cache_path` was returned, otherwise `false`.
     * @since 0.2.0
     */
    function get_path(artist: (string | null), title: (string | null), prefix: (string | null)): [boolean, string];

    /**
     * This function facilitates a plugin&apos;s need to create any
     * internal caches before anything else is done. This function must
     * exist in each plugin and is called immediately after the plugin is
     * loaded. Conversely, `media_art_plugin_shutdown()` is called before
     * tear down of the plugin system or plugin itself.
     * @param max_width The maximum width that an image is allowed to be
     * @since 0.1.0
     */
    function plugin_init(max_width: number): void;

    /**
     * This function facilitates a plugin&apos;s need to clean up any
     * internal caches. This function must exist in each plugin and is
     * called immediately after the plugin is loaded. Conversely,
     * `media_art_plugin_init()` is called after the plugin is loaded.
     * @since 0.1.0
     */
    function plugin_shutdown(): void;

    /**
     * Removes media art for given album/artist provided.
     * 
     * If `artist` and `album` are `null`, ALL media art cache is removed.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or `null`
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @returns `TRUE` on success, otherwise `FALSE` where `error` will be set.
     * @since 0.2.0
     */
    function remove(artist: string, album: (string | null), cancellable: (Gio.Cancellable | null)): boolean;

    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as `media_art_remove()` is performing, but
     * asynchronously.
     * 
     * When all i/o for the operation is finished the `callback` will be
     * called.
     * 
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with {@link Gio.IOErrorEnum.CANCELLED}.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
     * 
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is `G_PRIORITY_DEFAULT`.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or `null`
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the {@link GObject.Object} this task belongs to, can be `null`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @since 0.7.0
     */
    function remove_async(artist: string, album: (string | null), io_priority: number, source_object: (GObject.Object | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;
    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as `media_art_remove()` is performing, but
     * asynchronously.
     * 
     * When all i/o for the operation is finished the `callback` will be
     * called.
     * 
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with {@link Gio.IOErrorEnum.CANCELLED}.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
     * 
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is `G_PRIORITY_DEFAULT`.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or `null`
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the {@link GObject.Object} this task belongs to, can be `null`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
     * @since 0.7.0
     */
    function remove_async(artist: string, album: (string | null), io_priority: number, source_object: (GObject.Object | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<string> | null)): void;
    /**
     * Removes media art for given album/artist provided. Precisely the
     * same operation as `media_art_remove()` is performing, but
     * asynchronously.
     * 
     * When all i/o for the operation is finished the `callback` will be
     * called.
     * 
     * In case of a partial error the callback will be called with any
     * succeeding items and no error, and on the next request the error
     * will be reported. If a request is cancelled the callback will be
     * called with {@link Gio.IOErrorEnum.CANCELLED}.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
     * 
     * Any outstanding i/o request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is `G_PRIORITY_DEFAULT`.
     * 
     * All string inputs must be valid UTF8. Use `g_utf8_validate()` if the
     * input has not already been validated.
     * @param artist artist the media art belongs to
     * @param album album the media art belongs or `null`
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param source_object the {@link GObject.Object} this task belongs to, can be `null`.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
     * @since 0.7.0
     */
    function remove_async(artist: string, album: (string | null), io_priority: number, source_object: (GObject.Object | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<string> | null)): (globalThis.Promise<boolean> | void);

    /**
     * Finishes the asynchronous operation started with
     * `media_art_remove_async()`.
     * @param source_object the {@link GObject.Object} this task belongs to, can be `null`.
     * @param result a {@link Gio.AsyncResult}.
     * @returns `true` on success, otherwise `false` when `error` will be set.
     * @since 0.7.0
     */
    function remove_finish(source_object: (GObject.Object | null), result: Gio.AsyncResult): boolean;

    /**
     * Strip a albumname or artistname string to prepare it for calculating the
     * media art path with it. Certain characters and charactersets will be stripped
     * and a newly allocated string returned which you must free with `g_free()`.
     * 
     * This functions is used internally by `media_art_get_file()` and
     * `media_art_get_path()`. You will not normally need to call it yourself.
     * 
     * This function provides the following features:
     * 1. Invalid characters include: ()[]<>{}_!@#$^&*+=|\/"'?~;
     * 2. Text inside brackets of (), {}, [] and <> pairs are removed.
     * 3. Multiples of space characters are removed.
     * 
     * This function expects that the input is valid UTF-8. Use `g_utf8_validate()`
     * if the input has not already been validated.
     * @param original original string
     * @returns `original` stripped of invalid characters which must be freed. On error or if `original` is NULL, `null` is returned.
     * @since 0.2.0
     */
    function strip_invalid_entities(original: (string | null)): string;

    /**
     * This type categorized the flags used when processing media art.
     * @gir-type Flags
     * @since 0.3.0
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


    namespace Process {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * A class implementation for processing and extracting media art.
     * @gir-type Class
     */
    class Process extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Process>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Process.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Process.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Process;

        // Signals
        /** @signal */
        connect<K extends keyof Process.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Process.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Process.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Process.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Process.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Process.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Processes a memory buffer represented by `buffer` and `len`. If you
         * have extracted any embedded media art and passed this in as
         * `buffer`, the image data will be converted to the correct format and
         * saved in the media art cache.
         * 
         * Either `artist` OR `title` can be `null`, but they can not both be `null`.
         * 
         * If `file` is on a removable filesystem, the media art file will be saved in a
         * cache on the removable file system rather than on the host machine.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing `file` data, or `null`
         * @param mime MIME type of `buffer`, or `null`
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @returns `true` if `file` could be processed or `false` if `error` is set.
         */
        buffer(type: Type, flags: ProcessFlags, related_file: Gio.File, buffer: (Uint8Array | null), mime: (string | null), artist: (string | null), title: (string | null), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_buffer()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * Dbufferng an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing `file` data, or `null`
         * @param mime MIME type of `buffer`, or `null`
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        buffer_async(type: Type, flags: ProcessFlags, related_file: Gio.File, buffer: (Uint8Array | null), mime: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_buffer()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * Dbufferng an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing `file` data, or `null`
         * @param mime MIME type of `buffer`, or `null`
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        buffer_async(type: Type, flags: ProcessFlags, related_file: Gio.File, buffer: (Uint8Array | null), mime: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_buffer()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * Dbufferng an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param related_file File related to the media art
         * @param buffer a buffer containing `file` data, or `null`
         * @param mime MIME type of `buffer`, or `null`
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        buffer_async(type: Type, flags: ProcessFlags, related_file: Gio.File, buffer: (Uint8Array | null), mime: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes the asynchronous operation started with
         * `media_art_process_file_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns `true` on success, otherwise `false` when `error` will be set.
         */
        buffer_finish(result: Gio.AsyncResult): boolean;

        /**
         * Process `file` and check if media art exists and if it is up to date
         * with `artist` and `title` provided. Either `artist` OR `title` can be
         * `null`, but they can not both be `null`.
         * 
         * NOTE: This function MAY retrieve media art for
         * `artist` and `title` combinations. It is not guaranteed and depends
         * on download services available over DBus at the time.
         * 
         * In cases where download is unavailable, `media_art_process_file()`
         * will only try to procure a cache for possible media art found in
         * directories surrounding the location of `file`. If a buffer or
         * memory chunk needs to be saved to disk which has been retrieved
         * from an MP3 (for example), you should use
         * `media_art_process_buffer()`.
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
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @returns `true` if `file` could be processed or `false` if `error` is set.
         */
        file(type: Type, flags: ProcessFlags, file: Gio.File, artist: (string | null), title: (string | null), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_file()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param file File to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        file_async(type: Type, flags: ProcessFlags, file: Gio.File, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_file()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param file File to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        file_async(type: Type, flags: ProcessFlags, file: Gio.File, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_file()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param file File to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        file_async(type: Type, flags: ProcessFlags, file: Gio.File, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes the asynchronous operation started with
         * `media_art_process_file_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns `true` on success, otherwise `false` when `error` will be set.
         */
        file_finish(result: Gio.AsyncResult): boolean;

        /**
         * This function calls `media_art_process_file()`, but takes the `uri` as
         * a string rather than a {@link Gio.File} object. Either `artist` OR `title` can be
         * `null`, but they can not both be `null`.
         * @param type The type of media that contained the image data
         * @param flags How the media art is processed
         * @param uri URI of the media file that contained the data
         * @param artist The artist name `uri` or `null`
         * @param title The title for `uri` or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @returns `true` if `uri` could be processed or `false` if `error` is set.
         */
        uri(type: Type, flags: ProcessFlags, uri: string, artist: (string | null), title: (string | null), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_uri()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param uri A string representing a URI to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        uri_async(type: Type, flags: ProcessFlags, uri: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_uri()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param uri A string representing a URI to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        uri_async(type: Type, flags: ProcessFlags, uri: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Processes media art. Precisely the same operation as
         * `media_art_process_uri()` is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param type The type of media
         * @param flags The options given for how to process the media art
         * @param uri A string representing a URI to be processed
         * @param artist The artist name `file` or `null`
         * @param title The title for `file` or `null`
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        uri_async(type: Type, flags: ProcessFlags, uri: string, artist: (string | null), title: (string | null), io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes the asynchronous operation started with
         * `media_art_process_file_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns `true` on success, otherwise `false` when `error` will be set.
         */
        uri_finish(result: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
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
