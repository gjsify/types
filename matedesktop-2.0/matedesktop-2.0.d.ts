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

export namespace MateDesktop {
    /**
     * MateDesktop-2.0
     */

    /**
     * @gir-type Enum
     */
    enum BGColorType {
        SOLID,
        H_GRADIENT,
        V_GRADIENT,
    }

    /**
     * @gir-type Enum
     */
    enum BGPlacement {
        TILED,
        ZOOMED,
        CENTERED,
        SCALED,
        FILL_SCREEN,
        SPANNED,
    }

    /**
     * @gir-type Struct
     */
    class DesktopItemError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static NO_FILENAME: number;
        static UNKNOWN_ENCODING: number;
        static CANNOT_OPEN: number;
        static NO_EXEC_STRING: number;
        static BAD_EXEC_STRING: number;
        static NO_URL: number;
        static NOT_LAUNCHABLE: number;
        static INVALID_TYPE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum DesktopItemStatus {
        UNCHANGED,
        CHANGED,
        DISAPPEARED,
    }

    /**
     * @gir-type Enum
     */
    enum DesktopItemType {
        NULL,
        OTHER,
        APPLICATION,
        LINK,
        FSDEVICE,
        MIME_TYPE,
        DIRECTORY,
        SERVICE,
        SERVICE_TYPE,
    }

    /**
     * @gir-type Enum
     */
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE,
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

        // Constructors

        constructor(options: { message: string; code: number });
    }

    const BG_KEY_BACKGROUND_FADE: string;
    const BG_KEY_COLOR_TYPE: string;
    const BG_KEY_DRAW_BACKGROUND: string;
    const BG_KEY_PICTURE_FILENAME: string;
    const BG_KEY_PICTURE_OPACITY: string;
    const BG_KEY_PICTURE_PLACEMENT: string;
    const BG_KEY_PRIMARY_COLOR: string;
    const BG_KEY_SECONDARY_COLOR: string;
    const BG_KEY_SHOW_DESKTOP: string;
    const BG_SCHEMA: string;
    const DESKTOP_ITEM_ACTIONS: string;
    const DESKTOP_ITEM_CATEGORIES: string;
    const DESKTOP_ITEM_COMMENT: string;
    const DESKTOP_ITEM_DEFAULT_APP: string;
    const DESKTOP_ITEM_DEV: string;
    const DESKTOP_ITEM_DOC_PATH: string;
    const DESKTOP_ITEM_ENCODING: string;
    const DESKTOP_ITEM_EXEC: string;
    const DESKTOP_ITEM_FILE_PATTERN: string;
    const DESKTOP_ITEM_FS_TYPE: string;
    const DESKTOP_ITEM_GENERIC_NAME: string;
    const DESKTOP_ITEM_HIDDEN: string;
    const DESKTOP_ITEM_ICON: string;
    const DESKTOP_ITEM_MIME_TYPE: string;
    const DESKTOP_ITEM_MINI_ICON: string;
    const DESKTOP_ITEM_MOUNT_POINT: string;
    const DESKTOP_ITEM_NAME: string;
    const DESKTOP_ITEM_NO_DISPLAY: string;
    const DESKTOP_ITEM_ONLY_SHOW_IN: string;
    const DESKTOP_ITEM_PATH: string;
    const DESKTOP_ITEM_PATTERNS: string;
    const DESKTOP_ITEM_READ_ONLY: string;
    const DESKTOP_ITEM_SORT_ORDER: string;
    const DESKTOP_ITEM_SWALLOW_EXEC: string;
    const DESKTOP_ITEM_SWALLOW_TITLE: string;
    const DESKTOP_ITEM_TERMINAL: string;
    const DESKTOP_ITEM_TERMINAL_OPTIONS: string;
    const DESKTOP_ITEM_TRY_EXEC: string;
    const DESKTOP_ITEM_TYPE: string;
    const DESKTOP_ITEM_UNMOUNT_ICON: string;
    const DESKTOP_ITEM_URL: string;
    const DESKTOP_ITEM_VERSION: string;
    const DESKTOP_VERSION: string;
    const RR_CONNECTOR_TYPE_PANEL: string;
    /**
     * Allow to reset a dconf path.
     * @param dir the dconf directory to reset.
     * @since 1.7.1
     */
    function dconf_recursive_reset(dir: string): boolean;
    /**
     * Ensure dconf daemon syncs the written values.
     * @since 1.7.1
     */
    function dconf_sync(): void;
    /**
     * Allow to write a value to dconf.
     * @param key the key to write.
     * @param value the value to write.
     * @since 1.7.1
     */
    function dconf_write_sync(key: string, value: GLib.Variant): boolean;
    /**
     * @param style
     * @param state
     * @param color
     */
    function desktop_gtk_style_get_dark_color(style: Gtk.StyleContext, state: Gtk.StateFlags, color: Gdk.RGBA): void;
    /**
     * @param style
     * @param state
     * @param color
     */
    function desktop_gtk_style_get_light_color(style: Gtk.StyleContext, state: Gtk.StateFlags, color: Gdk.RGBA): void;
    function desktop_item_error_quark(): GLib.Quark;
    /**
     * @param icon_theme
     * @param icon
     * @param desired_size
     * @param flags
     */
    function desktop_item_find_icon(
        icon_theme: Gtk.IconTheme,
        icon: string,
        desired_size: number,
        flags: number,
    ): string;
    /**
     * Prepends a terminal (either the one configured as default in the user's
     * MATE setup, or one of the common xterm emulators) to the passed in vector,
     * modifying it in the process.  The vector should be allocated with `g_malloc`,
     * as this will `g_free` the original vector.  Also all elements must have been
     * allocated separately.  That is the standard glib/MATE way of doing vectors
     * however.  If the integer that `argc` points to is negative, the size will
     * first be computed.  Also note that passing in pointers to a vector that is
     * empty, will just create a new vector for you.
     * @param argc a pointer to the vector size
     * @param argv a pointer to the vector
     */
    function desktop_prepend_terminal_to_vector(argc: number, argv: string): void;
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
    function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: bigint | number): boolean;
    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * @param uri an uri
     * @param size a thumbnail size
     * @returns an absolute filename
     * @since 2.2
     */
    function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;
    /**
     * This is a replacement for gdk_spawn_command_line_on_screen, deprecated
     * in GDK 2.24 and removed in GDK 3.0.
     *
     * gdk_spawn_command_line_on_screen is like `g_spawn_command_line_async()`,
     * except the child process is spawned in such an environment that on
     * calling `gdk_display_open()` it would be returned a GdkDisplay with
     * screen as the default screen.
     *
     * This is useful for applications which wish to launch an application
     * on a specific screen.
     * @param screen a GdkScreen
     * @param command a command line
     * @returns TRUE on success, FALSE if error is set.
     * @since 1.7.1
     */
    function gdk_spawn_command_line_on_screen(screen: Gdk.Screen, command: string): boolean;
    /**
     * Gets all locales.
     * @returns a newly allocated `null`-terminated string array containing the   all locales. Free with `g_strfreev()`.
     * @since 1.22
     */
    function get_all_locales(): string[];
    /**
     * Gets the country name for `code`. If `locale` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 3166 code string
     * @param translation a locale string
     * @returns the country name. Caller takes ownership.
     * @since 1.22
     */
    function get_country_from_code(code: string, translation: string | null): string;
    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the country description. Caller takes ownership.
     * @since 1.22
     */
    function get_country_from_locale(locale: string, translation: string | null): string;
    /**
     * Gets the language name for `code`. If `locale` is provided the
     * returned string is translated accordingly.
     * @param code an ISO 639 code string
     * @param translation a locale string
     * @returns the language name. Caller takes ownership.
     * @since 1.22
     */
    function get_language_from_code(code: string, translation: string | null): string;
    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the language description. Caller takes ownership.
     * @since 1.22
     */
    function get_language_from_locale(locale: string, translation: string | null): string;
    /**
     * @param settings
     * @param key
     * @param value
     */
    function gsettings_append_strv(settings: Gio.Settings, key: string, value: string): boolean;
    /**
     * @param key
     */
    function gsettings_is_valid_keyname(key: string): boolean;
    /**
     * @param settings
     * @param key
     * @param value
     */
    function gsettings_remove_all_from_strv(settings: Gio.Settings, key: string, value: string): boolean;
    /**
     * Check if a given schema is installed in GSettings.
     * @param schema schema to check.
     * @returns TRUE if schema exists, FALSE if not.
     * @since 1.7.1
     */
    function gsettings_schema_exists(schema: string): boolean;
    /**
     * Returns `true` if there are translations for language `code`.
     * @param code an ISO 639 code string
     * @returns `true` if there are translations for language `code`.
     * @since 1.22
     */
    function language_has_translations(code: string): boolean;
    /**
     * Gets the normalized locale string in the form
     * [language[_country][.codeset][`modifier`]] for `name`.
     * @param locale a locale string
     * @returns normalized locale string. Caller takes ownership.
     * @since 1.22
     */
    function normalize_locale(locale: string): string;
    /**
     * Extracts the various components of a locale string of the form
     * [language[_country][.codeset][`modifier`]]. See
     * http://en.wikipedia.org/wiki/Locale.
     * @param locale a locale string
     * @returns `true` if parsing was successful.
     * @since 1.22
     */
    function parse_locale(locale: string): [boolean, string, string, string, string];
    /**
     * Returns the {@link GLib.Quark} that will be used for {@link GLib.Error} values returned by the
     * MateRR API.
     * @returns a {@link GLib.Quark} used to identify errors coming from the MateRR API.
     */
    function rr_error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface ColorSelectionChangePaletteFunc {
        (colors: Gdk.RGBA, n_colors: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface ColorSelectionChangePaletteWithScreenFunc {
        (screen: Gdk.Screen, colors: Gdk.RGBA, n_colors: number): void;
    }
    /**
     * @gir-type Flags
     */
    enum DesktopItemIconFlags {
        DESKTOP_ITEM_ICON_NO_KDE,
    }

    /**
     * @gir-type Flags
     */
    enum DesktopItemLaunchFlags {
        ONLY_ONE,
        USE_CURRENT_DIR,
        APPEND_URIS,
        APPEND_PATHS,
        DO_NOT_REAP_CHILD,
    }

    /**
     * @gir-type Flags
     */
    enum DesktopItemLoadFlags {
        ONLY_IF_EXISTS,
        NO_TRANSLATIONS,
    }

    /**
     * @gir-type Flags
     */
    enum RRRotation {
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
             * @run-last
             */
            changed: () => void;
            /**
             * @signal
             * @run-last
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
         * the current root window background surface and returns
         * a copy of it. If the _XROOTPMAP_ID is not set, then
         * a black surface is returned.
         * @param screen a {@link Gdk.Screen}
         */
        static get_surface_from_root(screen: Gdk.Screen): cairo.Surface;
        /**
         * Set the root pixmap, and properties pointing to it. We
         * do this atomically with a server grab to make sure that
         * we won't leak the pixmap if somebody else it setting
         * it at the same time. (This assumes that they follow the
         * same conventions we do).  `surface` should come from a call
         * to `mate_bg_create_surface()`.
         * @param screen the {@link Gdk.Screen} to change root background on
         * @param surface the {@link cairo.Surface} to set root background from.   Must be an xlib surface backing a pixmap.
         */
        static set_surface_as_root(screen: Gdk.Screen, surface: cairo.Surface): void;
        /**
         * Set the root pixmap, and properties pointing to it.
         * This function differs from `mate_bg_set_surface_as_root()`
         * in that it adds a subtle crossfade animation from the
         * current root pixmap to the new one.
         * @param screen the {@link Gdk.Screen} to change root background on
         * @param surface the cairo xlib surface to set root background from
         */
        static set_surface_as_root_with_crossfade(screen: Gdk.Screen, surface: cairo.Surface): BGCrossfade;

        // Methods

        changes_with_time(): boolean;
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
         * Create a surface that can be set as background for `window`. If `root` is
         * TRUE, the surface created will be created by a temporary X server connection
         * so that if someone calls XKillClient on it, it won't affect the application
         * who created it.
         * @param window
         * @param width
         * @param height
         * @param root
         */
        create_surface(window: Gdk.Window, width: number, height: number, root: boolean): cairo.Surface;
        /**
         * Create a scaled surface that can be set as background for `window`. If `root` is
         * TRUE, the surface created will be created by a temporary X server connection
         * so that if someone calls XKillClient on it, it won't affect the application
         * who created it.
         * @param window
         * @param width
         * @param height
         * @param scale
         * @param root
         */
        create_surface_scale(
            window: Gdk.Window,
            width: number,
            height: number,
            scale: number,
            root: boolean,
        ): cairo.Surface;
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
        get_color(type: BGColorType, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
        get_draw_background(): boolean;
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
        get_placement(): BGPlacement;
        has_multiple_sizes(): boolean;
        /**
         * @param dest_width
         * @param dest_height
         */
        is_dark(dest_width: number, dest_height: number): boolean;
        /**
         * @param settings
         */
        load_from_gsettings(settings: Gio.Settings): void;
        load_from_preferences(): void;
        /**
         * @param settings
         * @param reset_apply
         */
        load_from_system_gsettings(settings: Gio.Settings, reset_apply: boolean): void;
        load_from_system_preferences(): void;
        /**
         * @param settings
         */
        save_to_gsettings(settings: Gio.Settings): void;
        save_to_preferences(): void;
        /**
         * @param type
         * @param primary
         * @param secondary
         */
        set_color(type: BGColorType, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
        /**
         * @param draw_background
         */
        set_draw_background(draw_background: boolean): void;
        /**
         * @param filename
         */
        set_filename(filename: string): void;
        /**
         * @param placement
         */
        set_placement(placement: BGPlacement): void;
    }

    namespace BGCrossfade {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * When a crossfade finishes, `window` will have a copy
             * of the end surface as its background, and this signal will
             * get emitted.
             * @signal
             * @run-last
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
         * @construct-only
         * @default 0
         */
        get height(): number;
        /**
         * When a crossfade is running, this is width of the fading
         * surface.
         * @construct-only
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
         * running on a window.  See `mate_bg_crossfade_start()` for
         * information on how to initiate a crossfade.
         * @returns `true` if fading, or `false` if not fading
         */
        is_started(): boolean;
        /**
         * Before initiating a crossfade with `mate_bg_crossfade_start()`
         * a start and end surface have to be set.  This function sets
         * the surface shown at the end of the crossfade effect.
         * @param surface The cairo surface to fade to
         * @returns `true` if successful, or `false` if the surface could not be copied.
         */
        set_end_surface(surface: cairo.Surface): boolean;
        /**
         * Before initiating a crossfade with `mate_bg_crossfade_start()`
         * a start and end surface have to be set.  This function sets
         * the surface shown at the beginning of the crossfade effect.
         * @param surface The cairo surface to fade from
         * @returns `true` if successful, or `false` if the surface could not be copied.
         */
        set_start_surface(surface: cairo.Surface): boolean;
        /**
         * This function initiates a quick crossfade between two surfaces on
         * the background of `window`. Before initiating the crossfade both
         * `mate_bg_crossfade_set_start_surface()` and
         * `mate_bg_crossfade_set_end_surface()` need to be called. If animations
         * are disabled, the crossfade is skipped, and the window background is
         * set immediately to the end surface.
         * @param window The {@link Gdk.Window} to draw crossfade on
         */
        start(window: Gdk.Window): void;
        /**
         * This function initiates a quick crossfade between two surfaces on
         * the background of `widget`. Before initiating the crossfade both
         * `mate_bg_crossfade_set_start_surface()` and
         * `mate_bg_crossfade_set_end_surface()` need to be called. If animations
         * are disabled, the crossfade is skipped, and the window background is
         * set immediately to the end surface.
         * @param widget The {@link Gtk.Widget} to draw crossfade on
         */
        start_widget(widget: Gtk.Widget): void;
        /**
         * This function stops any in progress crossfades that may be
         * happening.  It's harmless to call this function if `fade` is
         * already stopped.
         */
        stop(): void;
    }

    namespace ColorSelection {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'color-changed': () => void;
            'notify::current-alpha': (pspec: GObject.ParamSpec) => void;
            'notify::current-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::has-opacity-control': (pspec: GObject.ParamSpec) => void;
            'notify::has-palette': (pspec: GObject.ParamSpec) => void;
            'notify::hex-string': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            current_alpha: number;
            currentAlpha: number;
            current_rgba: Gdk.RGBA;
            currentRgba: Gdk.RGBA;
            has_opacity_control: boolean;
            hasOpacityControl: boolean;
            has_palette: boolean;
            hasPalette: boolean;
            hex_string: string;
            hexString: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ColorSelection extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorSelection>;

        // Properties

        /**
         * @default 65535
         */
        get current_alpha(): number;
        set current_alpha(val: number);
        /**
         * @default 65535
         */
        get currentAlpha(): number;
        set currentAlpha(val: number);
        get current_rgba(): Gdk.RGBA;
        set current_rgba(val: Gdk.RGBA);
        get currentRgba(): Gdk.RGBA;
        set currentRgba(val: Gdk.RGBA);
        /**
         * @default false
         */
        get has_opacity_control(): boolean;
        set has_opacity_control(val: boolean);
        /**
         * @default false
         */
        get hasOpacityControl(): boolean;
        set hasOpacityControl(val: boolean);
        /**
         * @default false
         */
        get has_palette(): boolean;
        set has_palette(val: boolean);
        /**
         * @default false
         */
        get hasPalette(): boolean;
        set hasPalette(val: boolean);
        /**
         * @read-only
         */
        get hex_string(): string;
        /**
         * @read-only
         */
        get hexString(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorSelection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColorSelection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ColorSelection;

        // Signals

        /** @signal */
        connect<K extends keyof ColorSelection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorSelection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ColorSelection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorSelection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ColorSelection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColorSelection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Parses a color palette string; the string is a colon-separated
         * list of color names readable by `gdk_color_parse()`.
         * @param str a string encoding a color palette.
         */
        static palette_from_string(str: string): [boolean, Gdk.RGBA[]];
        /**
         * Encodes a palette as a string, useful for persistent storage.
         * @param colors an array of colors.
         */
        static palette_to_string(colors: Gdk.RGBA[]): string;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_color_changed(): void;

        // Methods

        /**
         * Sets `color` to be the current color in the MateColorSelection widget.
         * @param color an array of 4 `gdouble` to fill in with the current color.
         */
        get_color(color: number): void;
        /**
         * Returns the current alpha value.
         * @returns an integer between 0 and 65535.
         */
        get_current_alpha(): number;
        /**
         * Sets `color` to be the current color in the MateColorSelection widget.
         */
        get_current_rgba(): Gdk.RGBA;
        /**
         * Determines whether the colorsel has an opacity control.
         * @returns `true` if the `colorsel` has an opacity control.  `false` if it does't.
         */
        get_has_opacity_control(): boolean;
        /**
         * Determines whether the color selector has a color palette.
         * @returns `true` if the selector has a palette.  `false` if it hasn't.
         */
        get_has_palette(): boolean;
        /**
         * Returns the previous alpha value.
         * @returns an integer between 0 and 65535.
         */
        get_previous_alpha(): number;
        /**
         * Fills `color` in with the original color value.
         */
        get_previous_color(): Gdk.RGBA;
        /**
         * Gets the current state of the `colorsel`.
         * @returns `true` if the user is currently dragging a color around, and `false` if the selection has stopped.
         */
        is_adjusting(): boolean;
        /**
         * Sets the current color to be `color`.  The first time this is called, it will
         * also set the original color to be `color` too.
         * @param color an array of 4 doubles specifying the red, green, blue and opacity   to set the current color to.
         */
        set_color(color: number): void;
        /**
         * Sets the current opacity to be `alpha`.  The first time this is called, it will
         * also set the original opacity to be `alpha` too.
         * @param alpha an integer between 0 and 65535.
         */
        set_current_alpha(alpha: number): void;
        /**
         * Sets the current color to be `color`.  The first time this is called, it will
         * also set the original color to be `color` too.
         * @param color A {@link Gdk.RGBA} to set the current color with.
         */
        set_current_rgba(color: Gdk.RGBA): void;
        /**
         * Sets the `colorsel` to use or not use opacity.
         * @param has_opacity `true` if `colorsel` can set the opacity, `false` otherwise.
         */
        set_has_opacity_control(has_opacity: boolean): void;
        /**
         * Shows and hides the palette based upon the value of `has_palette`.
         * @param has_palette `true` if palette is to be visible, `false` otherwise.
         */
        set_has_palette(has_palette: boolean): void;
        /**
         * Sets the 'previous' alpha to be `alpha`.  This function should be called with
         * some hesitations, as it might seem confusing to have that alpha change.
         * @param alpha an integer between 0 and 65535.
         */
        set_previous_alpha(alpha: number): void;
        /**
         * Sets the 'previous' color to be `color`.  This function should be called with
         * some hesitations, as it might seem confusing to have that color change.
         * Calling `mate_color_selection_set_current_color()` will also set this color the first
         * time it is called.
         * @param color a {@link Gdk.RGBA} to set the previous color with.
         */
        set_previous_color(color: Gdk.RGBA): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace ColorSelectionDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::cancel-button': (pspec: GObject.ParamSpec) => void;
            'notify::color-selection': (pspec: GObject.ParamSpec) => void;
            'notify::help-button': (pspec: GObject.ParamSpec) => void;
            'notify::ok-button': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            cancel_button: Gtk.Widget;
            cancelButton: Gtk.Widget;
            color_selection: Gtk.Widget;
            colorSelection: Gtk.Widget;
            help_button: Gtk.Widget;
            helpButton: Gtk.Widget;
            ok_button: Gtk.Widget;
            okButton: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class ColorSelectionDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ColorSelectionDialog>;

        // Properties

        /**
         * @read-only
         */
        get cancel_button(): Gtk.Widget;
        /**
         * @read-only
         */
        get cancelButton(): Gtk.Widget;
        /**
         * @read-only
         */
        get color_selection(): Gtk.Widget;
        /**
         * @read-only
         */
        get colorSelection(): Gtk.Widget;
        /**
         * @read-only
         */
        get help_button(): Gtk.Widget;
        /**
         * @read-only
         */
        get helpButton(): Gtk.Widget;
        /**
         * @read-only
         */
        get ok_button(): Gtk.Widget;
        /**
         * @read-only
         */
        get okButton(): Gtk.Widget;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorSelectionDialog.SignalSignatures;

        // Fields

        colorsel: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<ColorSelectionDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string): ColorSelectionDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ColorSelectionDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorSelectionDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ColorSelectionDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorSelectionDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ColorSelectionDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColorSelectionDialog.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the {@link MateDesktop.ColorSelection} widget embedded in the dialog.
         * @returns the embedded {@link MateDesktop.ColorSelection}
         */
        get_color_selection(): Gtk.Widget;
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
         * Returns TRUE if this MateDesktopThumbnailFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         * @returns TRUE if the file can be thumbnailed.
         */
        can_thumbnail(uri: string, mime_type: string, mtime: bigint | number): boolean;
        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         */
        create_failed_thumbnail(uri: string, mtime: bigint | number): void;
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
        has_valid_failed_thumbnail(uri: string, mtime: bigint | number): boolean;
        /**
         * Tries to locate an existing thumbnail for the file specified.
         *
         * Usage of this function is threadsafe.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         * @returns The absolute path of the thumbnail, or `null` if none exist.
         */
        lookup(uri: string, mtime: bigint | number): string;
        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         *
         * Usage of this function is threadsafe.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         */
        save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: bigint | number): void;
    }

    namespace HSV {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            changed: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            move: (arg0: Gtk.DirectionType) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HSV extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<HSV>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HSV.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HSV.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HSV;

        // Signals

        /** @signal */
        connect<K extends keyof HSV.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HSV.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HSV.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HSV.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HSV.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HSV.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * @param type
         * @virtual
         */
        vfunc_move(type: Gtk.DirectionType): void;

        // Methods

        /**
         * Queries the current color in an HSV color selector.
         * Returned values will be in the [0.0, 1.0] range.
         */
        get_color(): [number, number, number];
        /**
         * Queries the size and ring width of an HSV color selector.
         */
        get_metrics(): [number, number];
        /**
         * An HSV color selector can be said to be adjusting if multiple rapid
         * changes are being made to its value, for example, when the user is
         * adjusting the value with the mouse. This function queries whether
         * the HSV color selector is being adjusted or not.
         * @returns `true` if clients can ignore changes to the color value,     since they may be transitory, or `false` if they should consider     the color value status to be final.
         */
        is_adjusting(): boolean;
        /**
         * Sets the current color in an HSV color selector.
         * Color component values must be in the [0.0, 1.0] range.
         * @param h Hue
         * @param s Saturation
         * @param v Value
         */
        set_color(h: number, s: number, v: number): void;
        /**
         * Sets the size and ring width of an HSV color selector.
         * @param size Diameter for the hue ring
         * @param ring_width Width of the hue ring
         */
        set_metrics(size: number, ring_width: number): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }

    namespace ImageMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuItem.SignalSignatures {
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::right-justified': (pspec: GObject.ParamSpec) => void;
            'notify::submenu': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.MenuItem.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            image: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class ImageMenuItem
        extends Gtk.MenuItem
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<ImageMenuItem>;

        // Properties

        /**
         * Child widget to appear next to the menu text.
         */
        get image(): Gtk.Widget;
        set image(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageMenuItem.SignalSignatures;

        // Fields

        menu_item: Gtk.MenuItem;

        // Constructors

        constructor(properties?: Partial<ImageMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ImageMenuItem;

        static new_with_label(label: string): ImageMenuItem;

        static new_with_mnemonic(label: string): ImageMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof ImageMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ImageMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ImageMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the widget that is currently set as the image of `image_menu_item`.
         * See `mate_image_menu_item_set_image()`.
         * @returns the widget set as image of `image_menu_item`
         */
        get_image(): Gtk.Widget;
        /**
         * Sets the image of `image_menu_item` to the given widget.
         * Note that it depends on the show-menu-images setting whether
         * the image will be displayed or not.
         * @param image a widget to set as the image for the menu item.
         */
        set_image(image: Gtk.Widget | null): void;
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);
        /**
         * @default null
         * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);
        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         *
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
         * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         *
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;
        /**
         * Gets the action name for `actionable`.
         *
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is `null` then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         *
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         *
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         *
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         *
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
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

        /**
         * @construct-only
         */
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
        /**
         * @returns whether at least two outputs are at (0, 0) offset and they have the same width/height.  Those outputs are of course connected and on (i.e. they have a CRTC assigned).
         */
        get_clone(): boolean;
        /**
         * @returns the output configuration for this {@link MateDesktop.RRConfig}
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

        /**
         * @construct-only
         */
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
         * Hide ouput labels.
         */
        hide(): void;
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
        get_rotation(): RRRotation;
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
         * Set the geometry for the monitor connected to the specified output.
         * @param x x offset for monitor
         * @param y y offset for monitor
         * @param width monitor width
         * @param height monitor height
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
         * @param rotation
         */
        set_rotation(rotation: RRRotation): void;
    }

    namespace RRScreen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            changed: () => void;
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

        /**
         * @construct-only
         */
        get gdk_screen(): Gdk.Screen;
        /**
         * @construct-only
         */
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
         * @param id
         * @returns the CRTC identified by `id`
         */
        get_crtc_by_id(id: number): RRCrtc;
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
        init(cancellable: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
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
    type ColorSelectionClass = typeof ColorSelection;
    /**
     * @gir-type Alias
     */
    type ColorSelectionDialogClass = typeof ColorSelectionDialog;
    /**
     * @gir-type Struct
     */
    abstract class ColorSelectionPrivate {
        static $gtype: GObject.GType<ColorSelectionPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class DesktopItem {
        static $gtype: GObject.GType<DesktopItem>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): DesktopItem;

        static new_from_basename(basename: string, flags: DesktopItemLoadFlags): DesktopItem;

        static new_from_file(file: string, flags: DesktopItemLoadFlags): DesktopItem;

        static new_from_string(
            uri: string,
            string: string,
            length: bigint | number,
            flags: DesktopItemLoadFlags,
        ): DesktopItem;

        static new_from_uri(uri: string, flags: DesktopItemLoadFlags): DesktopItem;

        // Static methods

        static error_quark(): GLib.Quark;
        /**
         * @param icon_theme
         * @param icon
         * @param desired_size
         * @param flags
         */
        static find_icon(icon_theme: Gtk.IconTheme, icon: string, desired_size: number, flags: number): string;

        // Methods

        /**
         * @param attr
         */
        attr_exists(attr: string): boolean;
        /**
         * @param attr
         */
        clear_localestring(attr: string): void;
        /**
         * @param section
         */
        clear_section(section: string): void;
        copy(): DesktopItem;
        /**
         * @param uri_list
         * @param flags
         */
        drop_uri_list(uri_list: string, flags: DesktopItemLaunchFlags): number;
        /**
         * @param uri_list
         * @param flags
         * @param envp
         */
        drop_uri_list_with_env(uri_list: string, flags: DesktopItemLaunchFlags, envp: string): number;
        exists(): boolean;
        /**
         * @param attr
         */
        get_attr_locale(attr: string): string;
        /**
         * @param attr
         */
        get_boolean(attr: string): boolean;
        get_entry_type(): DesktopItemType;
        get_file_status(): DesktopItemStatus;
        /**
         * @param icon_theme
         */
        get_icon(icon_theme: Gtk.IconTheme): string;
        /**
         * @param attr
         */
        get_localestring(attr: string): string;
        /**
         * @param attr
         * @param language
         */
        get_localestring_lang(attr: string, language: string): string;
        get_location(): string;
        /**
         * @param attr
         */
        get_string(attr: string): string;
        ref(): DesktopItem;
        /**
         * @param under
         * @param force
         */
        save(under: string, force: boolean): boolean;
        /**
         * @param attr
         * @param value
         */
        set_boolean(attr: string, value: boolean): void;
        /**
         * @param type
         */
        set_entry_type(type: DesktopItemType): void;
        /**
         * @param timestamp
         */
        set_launch_time(timestamp: number): void;
        /**
         * @param attr
         * @param value
         */
        set_localestring(attr: string, value: string): void;
        /**
         * @param attr
         * @param language
         * @param value
         */
        set_localestring_lang(attr: string, language: string, value: string): void;
        /**
         * @param location
         */
        set_location(location: string): void;
        /**
         * @param file
         */
        set_location_file(file: string): void;
        /**
         * @param attr
         * @param value
         */
        set_string(attr: string, value: string): void;
        /**
         * @param attr
         * @param strings
         */
        set_strings(attr: string, strings: string): void;
        unref(): void;
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
    type HSVClass = typeof HSV;
    /**
     * @gir-type Struct
     */
    abstract class HSVPrivate {
        static $gtype: GObject.GType<HSVPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ImageMenuItemClass = typeof ImageMenuItem;
    /**
     * @gir-type Struct
     */
    abstract class ImageMenuItemPrivate {
        static $gtype: GObject.GType<ImageMenuItemPrivate>;
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
        /**
         * @returns the current mode of this crtc
         */
        get_current_mode(): RRMode;
        get_current_rotation(): RRRotation;
        /**
         * @param size
         * @returns `true` for success
         */
        get_gamma(size: number): [boolean, number, number, number];
        get_id(): number;
        get_position(): [number, number];
        get_rotations(): RRRotation;
        /**
         * @param x
         * @param y
         * @param mode
         * @param rotation
         * @param outputs
         * @param n_outputs
         */
        set_config(
            x: number,
            y: number,
            mode: RRMode,
            rotation: RRRotation,
            outputs: RROutput,
            n_outputs: number,
        ): boolean;
        /**
         * @param timestamp
         * @param x
         * @param y
         * @param mode
         * @param rotation
         * @param outputs
         * @param n_outputs
         */
        set_config_with_time(
            timestamp: number,
            x: number,
            y: number,
            mode: RRMode,
            rotation: RRRotation,
            outputs: RROutput,
            n_outputs: number,
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
        supports_rotation(rotation: RRRotation): boolean;
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

        get_freq(): number;
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
        get_connector_type(): string;
        get_crtc(): RRCrtc;
        /**
         * @returns the current mode of this output
         */
        get_current_mode(): RRMode;
        get_edid_data(): number;
        get_height_mm(): number;
        get_id(): number;
        get_is_primary(): boolean;
        get_name(): string;
        get_position(): [number, number];
        get_possible_crtcs(): RRCrtc[];
        get_preferred_mode(): RRMode;
        get_size_inches(): number;
        get_width_mm(): number;
        is_connected(): boolean;
        is_laptop(): boolean;
        list_modes(): RRMode[];
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

export default MateDesktop;

// END
