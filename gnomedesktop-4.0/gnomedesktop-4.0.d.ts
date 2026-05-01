
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';

export namespace GnomeDesktop {

    /**
     * GnomeDesktop-4.0
     */


    /**
     * @gir-type Enum
     */
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE,
        XLARGE,
        XXLARGE,
    }


    const DESKTOP_PLATFORM_VERSION: number;

    /**
     * Returns whether the thumbnail has the correct uri and mtime embedded in the
     * png options. This function is threadsafe and does no blocking I/O.
     * @param pixbuf an loaded thumbnail {@link GdkPixbuf.Pixbuf}
     * @param uri a uri
     * @param mtime the mtime
     * @returns TRUE if the thumbnail has the right `uri` and `mtime`
     * @since 2.2
     */
    function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: (bigint | number)): boolean;

    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * This function is threadsafe and does no blocking I/O.
     * @param uri an uri
     * @param size a thumbnail size
     * @returns an absolute filename
     * @since 2.2
     */
    function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;

    /**
     * Gets all locales.
     * @returns a newly allocated `null`-terminated string array containing the   all locales. Free with `g_strfreev()`.
     * @since 3.8
     */
    function get_all_locales(): string[];

    /**
     * Gets the country name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 3166 code string
     * @param translation a locale string
     * @returns the country name. Caller takes ownership.
     * @since 3.8
     */
    function get_country_from_code(code: string, translation: (string | null)): string;

    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the country description. Caller takes ownership.
     * @since 3.8
     */
    function get_country_from_locale(locale: string, translation: (string | null)): string;

    /**
     * Gets the default input source's type and identifier for a given
     * locale.
     * @param locale a locale string
     * @returns `true` if a input source exists or `false` otherwise.
     * @since 3.8
     */
    function get_input_source_from_locale(locale: string): [boolean, string, string];

    /**
     * Gets the language name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 639 code string
     * @param translation a locale string
     * @returns the language name. Caller takes ownership.
     * @since 3.8
     */
    function get_language_from_code(code: string, translation: (string | null)): string;

    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the language description. Caller takes ownership.
     * @since 3.8
     */
    function get_language_from_locale(locale: string, translation: (string | null)): string;

    /**
     * Returns an integer with the major version of GNOME. Useful for
     * dynamic languages like Javascript or Python (static languages like
     * C should use `GNOME_DESKTOP_PLATFORM_VERSION`). If this
     * function doesn't exist, it can be presumed that the GNOME platform
     * version is 42 or previous.
     * @returns an integer with the major version of GNOME.
     * @since 43.0
     */
    function get_platform_version(): number;

    /**
     * Gets a translation of the raw `modifier` string. If `translation`
     * is provided the returned string is translated accordingly.
     * @param modifier the modifier part of a locale name
     * @param translation a locale string
     * @returns the translated modifier string. Caller takes ownership.
     * @since 3.34
     */
    function get_translated_modifier(modifier: string, translation: (string | null)): string;

    /**
     * Returns `true` if there are translations for language `code`.
     * @param code an ISO 639 code string
     * @returns `true` if there are translations for language `code`.
     * @since 3.8
     */
    function language_has_translations(code: string): boolean;

    /**
     * Gets the normalized locale string in the form
     * [language[_country][.codeset][`modifier`]] for `name`.
     * @param locale a locale string
     * @returns normalized locale string. Caller takes ownership.
     * @since 3.8
     */
    function normalize_locale(locale: string): string;

    /**
     * Extracts the various components of a locale string in XPG format.
     * ([language[_country][.codeset][`modifier`]]). See
     * http://en.wikipedia.org/wiki/Locale.
     * @param locale a locale string
     * @returns `true` if parsing was successful.
     * @since 3.8
     */
    function parse_locale(locale: string): [boolean, string, string, string, string];

    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     * 
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     * 
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     * 
     * If `connection` is `null` then `g_dbus_get()` will be called internally.
     * 
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a `null` `callback`.
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or `null`
     * @param connection An {@link Gio.DBusConnection} to the session bus, or `null`
     * @param cancellable {@link Gio.Cancellable} to use
     */
    function start_systemd_scope(name: string, pid: number, description: (string | null), connection: (Gio.DBusConnection | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     * 
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     * 
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     * 
     * If `connection` is `null` then `g_dbus_get()` will be called internally.
     * 
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a `null` `callback`.
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or `null`
     * @param connection An {@link Gio.DBusConnection} to the session bus, or `null`
     * @param cancellable {@link Gio.Cancellable} to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope(name: string, pid: number, description: (string | null), connection: (Gio.DBusConnection | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<string> | null)): void;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     * 
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     * 
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     * 
     * If `connection` is `null` then `g_dbus_get()` will be called internally.
     * 
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a `null` `callback`.
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or `null`
     * @param connection An {@link Gio.DBusConnection} to the session bus, or `null`
     * @param cancellable {@link Gio.Cancellable} to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope(name: string, pid: number, description: (string | null), connection: (Gio.DBusConnection | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<string> | null)): (globalThis.Promise<boolean> | void);

    /**
     * Finish an asynchronous operation to create a transient scope that was
     * started with `gnome_start_systemd_scope()`.
     * 
     * Note that a successful return code does not imply that a unit has been
     * created. It solely means that no error condition was hit sending the request.
     * @param res A {@link Gio.AsyncResult}
     * @returns `false` on error, `true` otherwise
     */
    function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;

    /**
     * @gir-type Callback
     */
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, id: number): void;
    }

    namespace DesktopThumbnailFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DesktopThumbnailFactory extends GObject.Object {
        static $gtype: GObject.GType<DesktopThumbnailFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DesktopThumbnailFactory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DesktopThumbnailFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](size: DesktopThumbnailSize): DesktopThumbnailFactory;

        // Signals
        /** @signal */
        connect<K extends keyof DesktopThumbnailFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopThumbnailFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DesktopThumbnailFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopThumbnailFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DesktopThumbnailFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DesktopThumbnailFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         * @returns TRUE if the file can be thumbnailed.
         */
        can_thumbnail(uri: string, mime_type: string, mtime: (bigint | number)): boolean;

        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        create_failed_thumbnail(uri: string, mtime: (bigint | number), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_create_failed_thumbnail()`
         * 
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         */
        create_failed_thumbnail_async(uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_create_failed_thumbnail()`
         * 
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_create_failed_thumbnail()`
         * 
         * Since 43.0
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result the result of the operation
         * @returns TRUE if the operation was correct; FALSE if there was an error Since 43.0
         */
        create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean;

        /**
         * Tries to generate a thumbnail for the specified file. If it succeeds
         * it returns a pixbuf that can be used as a thumbnail.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param cancellable a {@link Gio.Cancellable} object or NULL
         * @returns thumbnail pixbuf if thumbnailing succeeded, `null` otherwise and error will be set
         */
        generate_thumbnail(uri: string, mime_type: string, cancellable: (Gio.Cancellable | null)): GdkPixbuf.Pixbuf;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_generate_thumbnail()`
         * 
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         */
        generate_thumbnail_async(uri: string, mime_type: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<GdkPixbuf.Pixbuf>;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_generate_thumbnail()`
         * 
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(uri: string, mime_type: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_generate_thumbnail()`
         * 
         * Since 43.0
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(uri: string, mime_type: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<GdkPixbuf.Pixbuf> | void);

        /**
         * @param result the result of the operation
         * @returns thumbnail pixbuf if thumbnailing succeeded, `null` otherwise. Since 43.0
         */
        generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf;

        /**
         * Tries to locate an failed thumbnail for the file specified. Writing
         * and looking for failed thumbnails is important to avoid to try to
         * thumbnail e.g. broken images several times.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns TRUE if there is a failed thumbnail for the file.
         */
        has_valid_failed_thumbnail(uri: string, mtime: (bigint | number)): boolean;

        /**
         * Tries to locate an existing thumbnail for the file specified.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns The absolute path of the thumbnail, or `null` if none exist.
         */
        lookup(uri: string, mtime: (bigint | number)): string;

        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         * 
         * Usage of this function is threadsafe and does blocking I/O.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a GCancellable object, or NULL
         * @returns TRUE if everything went fine; FALSE if there was an error.
         */
        save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_save_thumbnail()`
         * 
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         */
        save_thumbnail_async(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_save_thumbnail()`
         * 
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronous version of `gnome_desktop_thumbnail_factory_save_thumbnail()`
         * 
         * Since 43.0
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: (bigint | number), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result the result of the operation
         * @returns TRUE if the operation was correct; FALSE if there was an error Since 43.0
         */
        save_thumbnail_finish(result: Gio.AsyncResult): boolean;
    }


    namespace IdleMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class IdleMonitor extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<IdleMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IdleMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<IdleMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): IdleMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof IdleMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IdleMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IdleMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IdleMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param interval_msec The idletime interval, in milliseconds. It must be     a strictly positive value (> 0).
         * @param callback The callback to call when the user has     accumulated `interval_msec` milliseconds of idle time.
         * @returns a watch id Adds a watch for a specific idle time. The callback will be called when the user has accumulated `interval_msec` milliseconds of idle time. This function will return an ID that can either be passed to `gnome_idle_monitor_remove_watch()`, or can be used to tell idle time watches apart if you have more than one. Also note that this function will only care about positive transitions (user's idle time exceeding a certain time). If you want to know about when the user has become active, use `gnome_idle_monitor_add_user_active_watch()`.
         */
        add_idle_watch(interval_msec: (bigint | number), callback: (IdleMonitorWatchFunc | null)): number;

        /**
         * @param callback The callback to call when the user is     active again.
         * @returns a watch id Add a one-time watch to know when the user is active again. Note that this watch is one-time and will de-activate after the function is called, for efficiency purposes. It's most convenient to call this when an idle watch, as added by `gnome_idle_monitor_add_idle_watch()`, has triggered.
         */
        add_user_active_watch(callback: (IdleMonitorWatchFunc | null)): number;

        /**
         * @returns The current idle time, in milliseconds
         */
        get_idletime(): number;

        /**
         * Removes an idle time watcher, previously added by
         * `gnome_idle_monitor_add_idle_watch()` or
         * `gnome_idle_monitor_add_user_active_watch()`.
         * @param id A watch ID
         */
        remove_watch(id: number): void;

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


    namespace PnpIds {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PnpIds extends GObject.Object {
        static $gtype: GObject.GType<PnpIds>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PnpIds.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PnpIds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PnpIds;

        // Signals
        /** @signal */
        connect<K extends keyof PnpIds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PnpIds.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PnpIds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PnpIds.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PnpIds.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PnpIds.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Find the full manufacturer name for the given PNP ID.
         * @param pnp_id the PNP ID to look for
         * @returns a new string representing the manufacturer name, or `null` when not found.
         */
        get_pnp_id(pnp_id: string): string;
    }


    namespace WallClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::clock": (pspec: GObject.ParamSpec) => void;
            "notify::force-seconds": (pspec: GObject.ParamSpec) => void;
            "notify::time-only": (pspec: GObject.ParamSpec) => void;
            "notify::timezone": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            clock: string;
            force_seconds: boolean;
            forceSeconds: boolean;
            time_only: boolean;
            timeOnly: boolean;
            timezone: GLib.TimeZone;
        }
    }

    /**
     * @gir-type Class
     */
    class WallClock extends GObject.Object {
        static $gtype: GObject.GType<WallClock>;

        // Properties
        /**
         * A formatted string representing the current clock display.
         * @read-only
         * @default null
         */
        get clock(): string;

        /**
         * If `true`, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         * @default false
         */
        get force_seconds(): boolean;
        set force_seconds(val: boolean);

        /**
         * If `true`, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         * @default false
         */
        get forceSeconds(): boolean;
        set forceSeconds(val: boolean);

        /**
         * If `true`, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         * @default false
         */
        get time_only(): boolean;
        set time_only(val: boolean);

        /**
         * If `true`, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         * @default false
         */
        get timeOnly(): boolean;
        set timeOnly(val: boolean);

        /**
         * The timezone used for this clock
         * @read-only
         */
        get timezone(): GLib.TimeZone;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WallClock.SignalSignatures;

        // Fields
        parent_object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<WallClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): WallClock;

        // Signals
        /** @signal */
        connect<K extends keyof WallClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WallClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WallClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WallClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the string representing the current time of this clock
         * according to the user settings.
         * @returns the time of the clock as a string.      This string points to internally allocated storage and      must not be freed, modified or stored.
         */
        get_clock(): string;

        /**
         * Returns the current local time zone used by this clock.
         * @returns the {@link GLib.TimeZone} of the clock.
         */
        get_timezone(): GLib.TimeZone;

        /**
         * @param now 
         * @param clock_format 
         * @param show_weekday 
         * @param show_full_date 
         * @param show_seconds 
         * @returns a newly allocated string representing the date & time passed, with the options applied.
         */
        string_for_datetime(now: GLib.DateTime, clock_format: GDesktopEnums.ClockFormat, show_weekday: boolean, show_full_date: boolean, show_seconds: boolean): string;
    }


    namespace XkbInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "layouts-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class XkbInfo extends GObject.Object {
        static $gtype: GObject.GType<XkbInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XkbInfo.SignalSignatures;

        // Fields
        parent_object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<XkbInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): XkbInfo;

        // Signals
        /** @signal */
        connect<K extends keyof XkbInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XkbInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof XkbInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XkbInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof XkbInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XkbInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param group_id identifier for group
         * @returns the translated description for the group `group_id`.
         */
        description_for_group(group_id: string): string;

        /**
         * @param group_id identifier for group containing the option
         * @param id option identifier
         * @returns the translated description for the option `id`.
         */
        description_for_option(group_id: string, id: string): string;

        /**
         * Returns a list of all layout identifiers we know about.
         * @returns the list of layout names. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_layouts(): string[];

        /**
         * Returns a list of all option group identifiers we know about.
         * @returns the list of option group ids. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_all_option_groups(): string[];

        /**
         * Returns a list of all languages supported by a layout, given by
         * `layout_id`.
         * @param layout_id a layout identifier
         * @returns the list of ISO 639 code strings. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_languages_for_layout(layout_id: string): string[];

        /**
         * Retrieves information about a layout. Both `display_name` and
         * `short_name` are suitable to show in UIs and might be localized if
         * translations are available.
         * 
         * Some layouts don't provide a short name (2 or 3 letters) or don't
         * specify a XKB variant, in those cases `short_name` or `xkb_variant`
         * are empty strings, i.e. "".
         * 
         * If the given layout doesn't exist the return value is `false` and
         * all the (out) parameters are set to `null`.
         * @param id layout's identifier about which to retrieve the info
         * @returns `true` if the layout exists or `false` otherwise.
         */
        get_layout_info(id: string): [boolean, string, string, string, string];

        /**
         * Returns a list of all layout identifiers we know about for
         * `country_code`.
         * @param country_code an ISO 3166 code string
         * @returns the list of layout ids. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_country(country_code: string): string[];

        /**
         * Returns a list of all layout identifiers we know about for
         * `language_code`.
         * @param language_code an ISO 639 code string
         * @returns the list of layout ids. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_layouts_for_language(language_code: string): string[];

        /**
         * Returns a list of all option identifiers we know about for group
         * `group_id`.
         * @param group_id group's identifier about which to retrieve the options
         * @returns the list of option ids. The caller takes ownership of the {@link GLib.List} but not of the strings themselves, those are internally allocated and must not be modified.
         */
        get_options_for_group(group_id: string): string[];
    }


    /**
     * @gir-type Alias
     */
    type DesktopThumbnailFactoryClass = typeof DesktopThumbnailFactory;

    /**
     * @gir-type Struct
     */
    abstract class DesktopThumbnailFactoryPrivate {
        static $gtype: GObject.GType<DesktopThumbnailFactoryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type IdleMonitorClass = typeof IdleMonitor;

    /**
     * @gir-type Struct
     */
    abstract class IdleMonitorPrivate {
        static $gtype: GObject.GType<IdleMonitorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PnpIdsClass = typeof PnpIds;

    /**
     * @gir-type Struct
     */
    abstract class PnpIdsPrivate {
        static $gtype: GObject.GType<PnpIdsPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WallClockClass = typeof WallClock;

    /**
     * @gir-type Struct
     */
    abstract class WallClockPrivate {
        static $gtype: GObject.GType<WallClockPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type XkbInfoClass = typeof XkbInfo;

    /**
     * @gir-type Struct
     */
    abstract class XkbInfoPrivate {
        static $gtype: GObject.GType<XkbInfoPrivate>;
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

export default GnomeDesktop;

// END
