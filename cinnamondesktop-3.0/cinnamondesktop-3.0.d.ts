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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type CDesktopEnums from '@girs/cdesktopenums-3.0';

export namespace CinnamonDesktop {
    /**
     * CinnamonDesktop-3.0
     */

    /**
     * @gir-type Enum
     */
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE,
    }

    /**
     * @gir-type Enum
     */
    enum RRDpmsMode {
        ON,
        STANDBY,
        SUSPEND,
        OFF,
        DISABLED,
        UNKNOWN,
    }

    /**
     * @gir-type Struct
     */
    class RRError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static UNKNOWN: number;
        static NO_RANDR_EXTENSION: number;
        static RANDR_ERROR: number;
        static BOUNDS_ERROR: number;
        static CRTC_ASSIGNMENT: number;
        static NO_MATCHING_CONFIG: number;
        static NO_DPMS_EXTENSION: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    const RR_CONNECTOR_TYPE_PANEL: string;
    /**
     * Returns the GSettings key string of the
     * given media key type.
     * @param type The CDesktopMediaKeyType
     * @returns the string corresponding to the provided media key type or `null`
     */
    function desktop_get_media_key_string(type: number): string;
    /**
     * Prepends a terminal (either the one configured as default in
     * the user's GNOME setup, or one of the common xterm emulators) to the passed
     * in vector, modifying it in the process.  The vector should be allocated with
     * `g_malloc`, as this will `g_free` the original vector.  Also all elements must
     * have been allocated separately.  That is the standard glib/GNOME way of
     * doing vectors however.  If the integer that `argc` points to is negative, the
     * size will first be computed.  Also note that passing in pointers to a vector
     * that is empty, will just create a new vector for you.
     * @param argc a pointer to the vector size
     * @param argv a pointer to the vector
     */
    function desktop_prepend_terminal_to_vector(argc: number, argv: string): void;
    /**
     * @param factory
     * @param quick
     */
    function desktop_thumbnail_cache_check_permissions(factory: DesktopThumbnailFactory, quick: boolean): boolean;
    function desktop_thumbnail_cache_fix_permissions(): void;
    /**
     * Returns whether the thumbnail has the correct uri embedded in the
     * Thumb::URI option in the png.
     * @param pixbuf an loaded thumbnail pixbuf
     * @param uri a uri
     * @returns TRUE if the thumbnail is for `uri`
     * @since 2.2
     */
    function desktop_thumbnail_has_uri(pixbuf: GdkPixbuf.Pixbuf, uri: string): boolean;
    /**
     * Returns whether the thumbnail has the correct uri and mtime embedded in the
     * png options.
     * @param pixbuf an loaded thumbnail {@link GdkPixbuf.Pixbuf}
     * @param uri a uri
     * @param mtime the mtime
     * @returns TRUE if the thumbnail has the right `uri` and `mtime`
     * @since 2.2
     */
    function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;
    /**
     * Calculates the MD5 checksum of the uri. This can be useful
     * if you want to manually handle thumbnail files.
     * @param uri an uri
     * @returns A string with the MD5 digest of the uri string.
     * @since 2.2
     * @deprecated since 2.22: Use {@link GLib.Checksum} instead
     */
    function desktop_thumbnail_md5(uri: string): string;
    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * @param uri an uri
     * @param size a thumbnail size
     * @returns an absolute filename
     * @since 2.2
     */
    function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize | null): string;
    /**
     * Scales the pixbuf to the desired size. This function
     * is a lot faster than gdk-pixbuf when scaling down by
     * large amounts.
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param dest_width the desired new width
     * @param dest_height the desired new height
     * @returns a scaled pixbuf
     * @since 2.2
     */
    function desktop_thumbnail_scale_down_pixbuf(
        pixbuf: GdkPixbuf.Pixbuf,
        dest_width: number,
        dest_height: number,
    ): GdkPixbuf.Pixbuf;
    /**
     * Uses packagekit to check if provided package names are installed.
     * @param packages a null-terminated array of package names
     * @param callback the callback to run for the result
     */
    function installer_check_for_packages(packages: string[], callback: InstallerClientCallback): void;
    /**
     * Uses packagekit to install the provided list of packages.
     * @param packages a null-terminated array of package names
     * @param callback the callback to run for the result
     */
    function installer_install_packages(packages: string[], callback: InstallerClientCallback): void;
    /**
     * Returns the {@link GLib.Quark} that will be used for {@link GLib.Error} values returned by the
     * GnomeRR API.
     * @returns a {@link GLib.Quark} used to identify errors coming from the GnomeRR API.
     */
    function rr_error_quark(): GLib.Quark;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID for desktop files or
     * the executable in all other cases.
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
    function start_systemd_scope(
        name: string,
        pid: number,
        description?: string | null,
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID for desktop files or
     * the executable in all other cases.
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
    function start_systemd_scope(
        name: string,
        pid: number,
        description: string | null,
        connection: Gio.DBusConnection | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID for desktop files or
     * the executable in all other cases.
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
    function start_systemd_scope(
        name: string,
        pid: number,
        description?: string | null,
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
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
    /**
     * @gir-type Callback
     */
    interface InstallerClientCallback {
        (success: boolean): void;
    }
    /**
     * @gir-type Flags
     */
    enum RRRotation {
        ROTATION_NEXT,
        ROTATION_0,
        ROTATION_90,
        ROTATION_180,
        ROTATION_270,
        REFLECT_X,
        REFLECT_Y,
    }

    namespace BG {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
            /**
             * @signal
             */
            transitioned: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BG extends GObject.Object {
        static $gtype: GObject.GType<BG>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BG.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BG.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BG;

        // Signals

        /** @signal */
        connect<K extends keyof BG.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BG.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BG.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BG.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BG.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BG.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * This function queries the _XROOTPMAP_ID property from
         * the root window associated with `screen` to determine
         * the current root window background pixmap and returns
         * a copy of it. If the _XROOTPMAP_ID is not set, then
         * a black surface is returned.
         * @param screen a {@link Gdk.Screen}
         */
        static get_surface_from_root(screen: Gdk.Screen): cairo.Surface;
        /**
         * @param background
         */
        static set_accountsservice_background(background: string): void;
        /**
         * Set the root pixmap, and properties pointing to it. We
         * do this atomically with a server grab to make sure that
         * we won't leak the pixmap if somebody else it setting
         * it at the same time. (This assumes that they follow the
         * same conventions we do).  `surface` should come from a call
         * to `gnome_bg_create_surface()`.
         * @param screen the {@link Gdk.Screen} to change root background on
         * @param surface the {@link cairo.Surface} to set root background from.   Must be an xlib surface backing a pixmap.
         */
        static set_surface_as_root(screen: Gdk.Screen, surface: cairo.Surface): void;
        /**
         * Set the root pixmap, and properties pointing to it.
         * This function differs from `gnome_bg_set_surface_as_root()`
         * in that it adds a subtle crossfade animation from the
         * current root pixmap to the new one.
         * @param screen the {@link Gdk.Screen} to change root background on
         * @param surface the cairo xlib surface to set root background from
         */
        static set_surface_as_root_with_crossfade(screen: Gdk.Screen, surface: cairo.Surface): BGCrossfade;

        // Methods

        changes_with_time(): boolean;
        /**
         * @param image
         * @param width
         * @param height
         */
        create_and_set_gtk_image(image: Gtk.Image, width: number, height: number): void;
        /**
         * @param root_window the {@link Gdk.Window}
         * @param screen the {@link Gdk.Screen}
         */
        create_and_set_surface_as_root(root_window: Gdk.Window, screen: Gdk.Screen): void;
        /**
         * Creates a thumbnail for a certain frame, where 'frame' is somewhat
         * vaguely defined as 'suitable point to show while single-stepping
         * through the slideshow'.
         * @param factory
         * @param screen
         * @param dest_width
         * @param dest_height
         * @param frame_num
         * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
         */
        create_frame_thumbnail(
            factory: DesktopThumbnailFactory,
            screen: Gdk.Screen,
            dest_width: number,
            dest_height: number,
            frame_num: number,
        ): GdkPixbuf.Pixbuf;
        /**
         * Create a surface that can be set as background for `window`. If `is_root` is
         * TRUE, the surface created will be created by a temporary X server connection
         * so that if someone calls XKillClient on it, it won't affect the application
         * who created it.
         * @param window
         * @param width
         * @param height
         * @param root
         * @returns `null` on error (e.g. out of X connections)
         */
        create_surface(window: Gdk.Window, width: number, height: number, root: boolean): cairo.Surface;
        /**
         * @param factory
         * @param screen
         * @param dest_width
         * @param dest_height
         * @returns a {@link GdkPixbuf.Pixbuf} showing the background as a thumbnail
         */
        create_thumbnail(
            factory: DesktopThumbnailFactory,
            screen: Gdk.Screen,
            dest_width: number,
            dest_height: number,
        ): GdkPixbuf.Pixbuf;
        /**
         * @param dest
         * @param screen
         * @param is_root
         */
        draw(dest: GdkPixbuf.Pixbuf, screen: Gdk.Screen, is_root: boolean): void;
        /**
         * @param type
         * @param primary
         * @param secondary
         */
        get_color(type: CDesktopEnums.BackgroundShading | null, primary: Gdk.Color, secondary: Gdk.Color): void;
        get_filename(): string;
        /**
         * @param factory
         * @param best_width
         * @param best_height
         * @param width
         * @param height
         */
        get_image_size(
            factory: DesktopThumbnailFactory,
            best_width: number,
            best_height: number,
            width: number,
            height: number,
        ): boolean;
        get_placement(): CDesktopEnums.BackgroundStyle;
        has_multiple_sizes(): boolean;
        /**
         * @param dest_width
         * @param dest_height
         */
        is_dark(dest_width: number, dest_height: number): boolean;
        /**
         * @param settings
         */
        load_from_preferences(settings: Gio.Settings): void;
        /**
         * @param settings
         */
        save_to_preferences(settings: Gio.Settings): void;
        /**
         * @param type
         * @param primary
         * @param secondary
         */
        set_color(type: CDesktopEnums.BackgroundShading | null, primary: Gdk.Color, secondary: Gdk.Color): void;
        /**
         * @param filename
         */
        set_filename(filename: string): void;
        /**
         * @param placement
         */
        set_placement(placement: CDesktopEnums.BackgroundStyle | null): void;
    }

    namespace BGCrossfade {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * When a crossfade finishes, `window` will have a copy
             * of the end surface as its background, and this signal will
             * get emitted.
             * @signal
             */
            finished: (arg0: GObject.Object) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            height: number;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class BGCrossfade extends GObject.Object {
        static $gtype: GObject.GType<BGCrossfade>;

        // Properties

        /**
         * When a crossfade is running, this is height of the fading
         * surface.
         */
        get height(): number;
        /**
         * When a crossfade is running, this is width of the fading
         * surface.
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BGCrossfade.SignalSignatures;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<BGCrossfade.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number): BGCrossfade;

        // Signals

        /** @signal */
        connect<K extends keyof BGCrossfade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BGCrossfade.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BGCrossfade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BGCrossfade.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BGCrossfade.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BGCrossfade.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param window
         * @virtual
         */
        vfunc_finished(window: Gdk.Window): void;

        // Methods

        /**
         * This function reveals whether or not `fade` is currently
         * running on a window.  See `gnome_bg_crossfade_start()` for
         * information on how to initiate a crossfade.
         * @returns `true` if fading, or `false` if not fading
         */
        is_started(): boolean;
        /**
         * Before initiating a crossfade with `gnome_bg_crossfade_start()`
         * a start and end surface have to be set.  This function sets
         * the surface shown at the end of the crossfade effect.
         * @param surface The cairo surface to fade to
         * @returns `true` if successful, or `false` if the surface could not be copied.
         */
        set_end_surface(surface: cairo.Surface): boolean;
        /**
         * Before initiating a crossfade with `gnome_bg_crossfade_start()`
         * a start and end surface have to be set.  This function sets
         * the surface shown at the beginning of the crossfade effect.
         * @param surface The cairo surface to fade from
         * @returns `true` if successful, or `false` if the surface could not be copied.
         */
        set_start_surface(surface: cairo.Surface): boolean;
        /**
         * This function initiates a quick crossfade between two surfaces on
         * the background of `window`.  Before initiating the crossfade both
         * `gnome_bg_crossfade_start()` and `gnome_bg_crossfade_end()` need to
         * be called. If animations are disabled, the crossfade is skipped,
         * and the window background is set immediately to the end surface.
         * @param window The {@link Gdk.Window} to draw crossfade on
         */
        start(window: Gdk.Window): void;
        /**
         * This function stops any in progress crossfades that may be
         * happening.  It's harmless to call this function if `fade` is
         * already stopped.
         */
        stop(): void;
    }

    namespace DesktopThumbnailFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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

        static ['new'](size: DesktopThumbnailSize): DesktopThumbnailFactory;

        // Signals

        /** @signal */
        connect<K extends keyof DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DesktopThumbnailFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DesktopThumbnailFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DesktopThumbnailFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns TRUE if this GnomeIconFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         * @returns TRUE if the file can be thumbnailed.
         */
        can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;
        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         */
        create_failed_thumbnail(uri: string, mtime: number): void;
        /**
         * Tries to generate a thumbnail for the specified file. If it succeeds
         * it returns a pixbuf that can be used as a thumbnail.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @returns thumbnail pixbuf if thumbnailing succeeded, `null` otherwise.
         */
        generate_thumbnail(uri: string, mime_type: string): GdkPixbuf.Pixbuf;
        /**
         * Tries to locate an failed thumbnail for the file specified. Writing
         * and looking for failed thumbnails is important to avoid to try to
         * thumbnail e.g. broken images several times.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns TRUE if there is a failed thumbnail for the file.
         */
        has_valid_failed_thumbnail(uri: string, mtime: number): boolean;
        /**
         * Tries to locate an existing thumbnail for the file specified.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns The absolute path of the thumbnail, or `null` if none exist.
         */
        lookup(uri: string, mtime: number): string;
        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         *
         * Usage of this function is threadsafe.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         */
        save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number): void;
    }

    namespace IdleMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
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

        static ['new'](): IdleMonitor;

        // Signals

        /** @signal */
        connect<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IdleMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param interval_msec The idletime interval, in milliseconds. It must be     a strictly positive value (> 0).
         * @param callback The callback to call when the user has     accumulated `interval_msec` milliseconds of idle time.
         * @returns a watch id Adds a watch for a specific idle time. The callback will be called when the user has accumulated `interval_msec` milliseconds of idle time. This function will return an ID that can either be passed to `gnome_idle_monitor_remove_watch()`, or can be used to tell idle time watches apart if you have more than one. Also note that this function will only care about positive transitions (user's idle time exceeding a certain time). If you want to know about when the user has become active, use `gnome_idle_monitor_add_user_active_watch()`.
         */
        add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;
        /**
         * @param callback The callback to call when the user is     active again.
         * @returns a watch id Add a one-time watch to know when the user is active again. Note that this watch is one-time and will de-activate after the function is called, for efficiency purposes. It's most convenient to call this when an idle watch, as added by `gnome_idle_monitor_add_idle_watch()`, has triggered.
         */
        add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PnpIds {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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

        static ['new'](): PnpIds;

        // Signals

        /** @signal */
        connect<K extends keyof PnpIds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PnpIds.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PnpIds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PnpIds.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PnpIds.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PnpIds.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find the full manufacturer name for the given PNP ID.
         * @param pnp_id the PNP ID to look for
         * @returns a new string representing the manufacturer name, or `null` when not found.
         */
        get_pnp_id(pnp_id: string): string;
    }

    namespace RRConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            screen: RRScreen;
        }
    }

    /**
     * @gir-type Class
     */
    class RRConfig extends GObject.Object {
        static $gtype: GObject.GType<RRConfig>;

        // Properties

        set screen(val: RRScreen);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RRConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RRConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_current(screen: RRScreen): RRConfig;

        static new_stored(screen: RRScreen): RRConfig;

        // Signals

        /** @signal */
        connect<K extends keyof RRConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RRConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RRConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RRConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param screen
         * @param filename
         * @param timestamp
         */
        static apply_from_filename_with_time(screen: RRScreen, filename: string, timestamp: number): boolean;
        static get_backup_filename(): string;
        static get_intended_filename(): string;
        static get_legacy_filename(): string;

        // Methods

        /**
         * @param screen
         */
        applicable(screen: RRScreen): boolean;
        /**
         * @param screen
         * @param timestamp
         */
        apply_with_time(screen: RRScreen, timestamp: number): boolean;
        ensure_primary(): boolean;
        /**
         * @param config2
         */
        equal(config2: RRConfig): boolean;
        get_auto_scale(): boolean;
        get_base_scale(): number;
        /**
         * @returns whether at least two outputs are at (0, 0) offset and they have the same width/height.  Those outputs are of course connected and on (i.e. they have a CRTC assigned).
         */
        get_clone(): boolean;
        /**
         * @returns the output configuration for this {@link CinnamonDesktop.RRConfig}
         */
        get_outputs(): RROutputInfo[];
        load_current(): boolean;
        /**
         * @param filename
         */
        load_filename(filename: string): boolean;
        /**
         * @param config2
         */
        match(config2: RRConfig): boolean;
        sanitize(): void;
        save(): boolean;
        /**
         * @param auto_scale
         */
        set_auto_scale(auto_scale: boolean): void;
        /**
         * @param base_scale
         */
        set_base_scale(base_scale: number): void;
        /**
         * @param clone
         */
        set_clone(clone: boolean): void;
    }

    namespace RRLabeler {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: RRConfig;
        }
    }

    /**
     * @gir-type Class
     */
    class RRLabeler extends GObject.Object {
        static $gtype: GObject.GType<RRLabeler>;

        // Properties

        set config(val: RRConfig);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RRLabeler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RRLabeler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](config: RRConfig): RRLabeler;

        // Signals

        /** @signal */
        connect<K extends keyof RRLabeler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRLabeler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RRLabeler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRLabeler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RRLabeler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RRLabeler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the color used for the label on a given output (monitor).
         * @param output Output device (i.e. monitor) to query
         */
        get_rgba_for_output(output: RROutputInfo): Gdk.RGBA;
        /**
         * Hide output labels.
         */
        hide(): void;
        /**
         * Show the labels.
         */
        show(): void;
    }

    namespace RROutputInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class RROutputInfo extends GObject.Object {
        static $gtype: GObject.GType<RROutputInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RROutputInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RROutputInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RROutputInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RROutputInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RROutputInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RROutputInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RROutputInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RROutputInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_aspect_ratio(): number;
        /**
         * @returns the display name of this output
         */
        get_display_name(): string;
        /**
         * @param doublescan
         * @param interlaced
         * @param vsync
         */
        get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
        get_geometry(): [number, number, number, number];
        /**
         * @returns the output name
         */
        get_name(): string;
        get_preferred_height(): number;
        get_preferred_width(): number;
        get_primary(): boolean;
        get_product(): number;
        get_refresh_rate(): number;
        get_refresh_rate_f(): number;
        get_rotation(): RRRotation;
        get_scale(): number;
        get_serial(): number;
        get_vendor(): string[];
        /**
         * @returns whether there is a CRTC assigned to this output (i.e. a signal is being sent to it)
         */
        is_active(): boolean;
        /**
         * @returns whether the output is physically connected to a monitor
         */
        is_connected(): boolean;
        /**
         * @param active
         */
        set_active(active: boolean): void;
        /**
         * @param doublescan
         * @param interlaced
         * @param vsync
         */
        set_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
        /**
         * @param x
         * @param y
         * @param width
         * @param height
         */
        set_geometry(x: number, y: number, width: number, height: number): void;
        /**
         * @param primary
         */
        set_primary(primary: boolean): void;
        /**
         * @param rate
         */
        set_refresh_rate(rate: number): void;
        /**
         * @param rate
         */
        set_refresh_rate_f(rate: number): void;
        /**
         * @param rotation
         */
        set_rotation(rotation: RRRotation | null): void;
        /**
         * @param scale
         */
        set_scale(scale: number): void;
    }

    namespace RRScreen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
            /**
             * This signal is emitted when a display device is connected to a
             * port, or a port is hotplugged with an active output. The latter
             * can happen if a laptop is docked, and the dock provides a new
             * active output.
             *
             * The `output` value is not a {@link GObject.Object}. The returned `output` value can
             * only assume to be valid during the emission of the signal (i.e. within
             * your signal handler only), as it may change later when the `screen`
             * is modified due to an event from the X server, or due to another
             * place in the application modifying the `screen` and the `output`.
             * Therefore, deal with changes to the `output` right in your signal
             * handler, instead of keeping the `output` reference for an async or
             * idle function.
             * @signal
             */
            'output-connected': (arg0: any | null) => void;
            /**
             * This signal is emitted when a display device is disconnected from
             * a port, or a port output is hot-unplugged. The latter can happen
             * if a laptop is undocked, and the dock provided the output.
             *
             * The `output` value is not a {@link GObject.Object}. The returned `output` value can
             * only assume to be valid during the emission of the signal (i.e. within
             * your signal handler only), as it may change later when the `screen`
             * is modified due to an event from the X server, or due to another
             * place in the application modifying the `screen` and the `output`.
             * Therefore, deal with changes to the `output` right in your signal
             * handler, instead of keeping the `output` reference for an async or
             * idle function.
             * @signal
             */
            'output-disconnected': (arg0: any | null) => void;
            'notify::gdk-screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            gdk_screen: Gdk.Screen;
            gdkScreen: Gdk.Screen;
        }
    }

    /**
     * @gir-type Class
     */
    class RRScreen extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<RRScreen>;

        // Properties

        get gdk_screen(): Gdk.Screen;
        get gdkScreen(): Gdk.Screen;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RRScreen.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RRScreen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](screen: Gdk.Screen): RRScreen;

        // Signals

        /** @signal */
        connect<K extends keyof RRScreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRScreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RRScreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RRScreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RRScreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RRScreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param index
         */
        calculate_best_global_scale(index: number): number;
        /**
         * @param width
         * @param height
         * @param n_supported_scales
         */
        calculate_supported_scales(width: number, height: number, n_supported_scales: number): number;
        create_clone_modes(): RRMode;
        /**
         * @param id
         * @returns the CRTC identified by `id`
         */
        get_crtc_by_id(id: number): RRCrtc;
        /**
         * @param mode
         */
        get_dpms_mode(mode: RRDpmsMode | null): boolean;
        get_global_scale(): number;
        get_global_scale_setting(): number;
        /**
         * @param id
         * @returns the output identified by `id`
         */
        get_output_by_id(id: number): RROutput;
        /**
         * @param name
         * @returns the output identified by `name`
         */
        get_output_by_name(name: string): RROutput;
        /**
         * Get the ranges of the screen
         */
        get_ranges(): [number, number, number, number];
        /**
         * Queries the two timestamps that the X RANDR extension maintains.  The X
         * server will prevent change requests for stale configurations, those whose
         * timestamp is not equal to that of the latest request for configuration.  The
         * X server will also prevent change requests that have an older timestamp to
         * the latest change request.
         */
        get_timestamps(): [number, number];
        get_use_upscaling(): boolean;
        /**
         * List available XRandR clone modes
         */
        list_clone_modes(): RRMode[];
        /**
         * List all CRTCs
         */
        list_crtcs(): RRCrtc[];
        /**
         * List available XRandR modes
         */
        list_modes(): RRMode[];
        /**
         * List all outputs
         */
        list_outputs(): RROutput[];
        /**
         * Refreshes the screen configuration, and calls the screen's callback if it
         * exists and if the screen's configuration changed.
         * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
         */
        refresh(): boolean;
        /**
         * This method also disables the DPMS timeouts.
         * @param mode
         */
        set_dpms_mode(mode: RRDpmsMode | null): boolean;
        /**
         * @param scale_factor
         */
        set_global_scale_setting(scale_factor: number): void;
        /**
         * @param output
         */
        set_primary_output(output: RROutput): void;
        /**
         * @param width
         * @param height
         * @param mm_width
         * @param mm_height
         */
        set_size(width: number, height: number, mm_width: number, mm_height: number): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WallClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::format-string': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            clock: string;
            format_string: string;
            formatString: string;
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
         */
        get clock(): string;
        /**
         * If not NULL, the wall clock will format the time/date according to
         * this format string.  If the format string is invalid, the default string
         * will be used instead.
         */
        get format_string(): string;
        set format_string(val: string);
        /**
         * If not NULL, the wall clock will format the time/date according to
         * this format string.  If the format string is invalid, the default string
         * will be used instead.
         */
        get formatString(): string;
        set formatString(val: string);

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

        static ['new'](): WallClock;

        // Signals

        /** @signal */
        connect<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WallClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the translation of the format string according to
         * the LC_TIME locale.
         * @param gettext_domain
         * @param format_string
         */
        static lctime_format(gettext_domain?: string | null, format_string?: string | null): string;

        // Methods

        /**
         * Returns a formatted date and time based on either default format
         * settings, or via a custom-set format string.
         *
         * The returned string should be ready to be set on a label.
         * @returns The formatted date/time string.
         */
        get_clock(): string;
        /**
         * Returns a formatted date and time based on the provided format string.
         * The returned string should be ready to be set on a label.
         * @param format_string
         * @returns The formatted date/time string, or NULL if there was a problem with the format string.
         */
        get_clock_for_format(format_string: string): string;
        /**
         * Returns the current date-only format based on current locale
         * defaults and clock settings.
         * @returns The default date format string.
         */
        get_default_date_format(): string;
        /**
         * Returns the current time-only format based on current locale
         * defaults and clock settings.
         * @returns The default time format string.
         */
        get_default_time_format(): string;
        /**
         * Sets the wall clock to use the provided format string for any
         * subsequent updates.  Passing NULL will un-set any custom format,
         * and rely on a default locale format.
         *
         * Any invalid format string passed will cause it to be ignored,
         * and the default locale format used instead.
         * @param format_string
         * @returns Whether or not the format string was valid and accepted.
         */
        set_format_string(format_string?: string | null): boolean;
    }

    namespace XkbInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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

        static ['new'](): XkbInfo;

        // Signals

        /** @signal */
        connect<K extends keyof XkbInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XkbInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof XkbInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XkbInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof XkbInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XkbInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * Retrieves the layout that better fits `language`. It also fetches
         * information about that layout like `gnome_xkb_info_get_layout_info()`.
         *
         * If a layout can't be found the return value is `false` and all the
         * (out) parameters are set to `null`.
         * @param language an ISO 639 code
         * @returns `true` if a layout exists or `false` otherwise.
         */
        get_layout_info_for_language(language: string): [boolean, string, string, string, string, string];
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
    type BGClass = typeof BG;
    /**
     * @gir-type Alias
     */
    type BGCrossfadeClass = typeof BGCrossfade;
    /**
     * @gir-type Struct
     */
    abstract class BGCrossfadePrivate {
        static $gtype: GObject.GType<BGCrossfadePrivate>;
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
    type RRConfigClass = typeof RRConfig;
    /**
     * @gir-type Struct
     */
    abstract class RRConfigPrivate {
        static $gtype: GObject.GType<RRConfigPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class RRCrtc {
        static $gtype: GObject.GType<RRCrtc>;

        // Methods

        /**
         * @param output
         */
        can_drive_output(output: RROutput): boolean;
        get_current_mode(): RRMode;
        get_current_rotation(): RRRotation;
        /**
         * @param size
         * @param red
         * @param green
         * @param blue
         */
        get_gamma(size: number, red: number, green: number, blue: number): boolean;
        get_id(): number;
        /**
         * @param x
         * @param y
         */
        get_position(x: number, y: number): void;
        get_rotations(): RRRotation;
        get_scale(): number;
        /**
         * @param timestamp
         * @param x
         * @param y
         * @param mode
         * @param rotation
         * @param outputs
         * @param n_outputs
         * @param scale
         * @param global_scale
         */
        set_config_with_time(
            timestamp: number,
            x: number,
            y: number,
            mode: RRMode,
            rotation: RRRotation | null,
            outputs: RROutput,
            n_outputs: number,
            scale: number,
            global_scale: number,
        ): boolean;
        /**
         * @param size
         * @param red
         * @param green
         * @param blue
         */
        set_gamma(size: number, red: number, green: number, blue: number): void;
        /**
         * @param rotation
         */
        supports_rotation(rotation: RRRotation | null): boolean;
    }

    /**
     * @gir-type Alias
     */
    type RRLabelerClass = typeof RRLabeler;
    /**
     * @gir-type Struct
     */
    abstract class RRLabelerPrivate {
        static $gtype: GObject.GType<RRLabelerPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class RRMode {
        static $gtype: GObject.GType<RRMode>;

        // Methods

        /**
         * @param doublescan
         * @param interlaced
         * @param vsync
         */
        get_flags(doublescan: boolean, interlaced: boolean, vsync: boolean): void;
        get_freq(): number;
        get_freq_f(): number;
        get_height(): number;
        get_id(): number;
        get_width(): number;
    }

    /**
     * @gir-type Struct
     */
    abstract class RROutput {
        static $gtype: GObject.GType<RROutput>;

        // Methods

        /**
         * @param clone
         */
        can_clone(clone: RROutput): boolean;
        /**
         * @returns The currently set backlight brightness
         */
        get_backlight(): number;
        /**
         * @returns The maximum backlight value, or -1 if not supported
         */
        get_backlight_max(): number;
        /**
         * @returns The minimum backlight value, or -1 if not supported
         */
        get_backlight_min(): number;
        get_connector_type(): string;
        get_crtc(): RRCrtc;
        get_current_mode(): RRMode;
        /**
         * @param size
         */
        get_edid_data(size: number): number;
        get_height_mm(): number;
        get_id(): number;
        /**
         * @param vendor
         * @param product
         * @param serial
         */
        get_ids_from_edid(vendor: string, product: number, serial: number): boolean;
        get_is_primary(): boolean;
        get_name(): string;
        /**
         * @param x
         * @param y
         */
        get_position(x: number, y: number): void;
        get_possible_crtcs(): RRCrtc;
        get_preferred_mode(): RRMode;
        get_size_inches(): number;
        get_width_mm(): number;
        is_connected(): boolean;
        is_laptop(): boolean;
        list_modes(): RRMode;
        /**
         * @param value the absolute value which is min >= this <= max
         * @returns `true` for success
         */
        set_backlight(value: number): boolean;
        /**
         * @param mode
         */
        supports_mode(mode: RRMode): boolean;
    }

    /**
     * @gir-type Alias
     */
    type RROutputInfoClass = typeof RROutputInfo;
    /**
     * @gir-type Struct
     */
    abstract class RROutputInfoPrivate {
        static $gtype: GObject.GType<RROutputInfoPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RRScreenClass = typeof RRScreen;
    /**
     * @gir-type Struct
     */
    abstract class RRScreenPrivate {
        static $gtype: GObject.GType<RRScreenPrivate>;
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

export default CinnamonDesktop;

// END
