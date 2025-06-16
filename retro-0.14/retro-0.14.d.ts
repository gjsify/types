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

export namespace Retro {
    /**
     * Retro-0.14
     */

    /**
     * Represents the axes of the analog sticks for the Libretro gamepad.
     */

    /**
     * Represents the axes of the analog sticks for the Libretro gamepad.
     */
    export namespace AnalogId {
        export const $gtype: GObject.GType<AnalogId>;
    }

    enum AnalogId {
        /**
         * the X axis of an analog stick
         */
        X,
        /**
         * the Y axis of an analog stick
         */
        Y,
        /**
         * the number of ids
         */
        COUNT,
    }
    /**
     * Represents the analog sticks for the Libretro gamepad.
     */

    /**
     * Represents the analog sticks for the Libretro gamepad.
     */
    export namespace AnalogIndex {
        export const $gtype: GObject.GType<AnalogIndex>;
    }

    enum AnalogIndex {
        /**
         * the left analog stick
         */
        LEFT,
        /**
         * the right analog stick
         */
        RIGHT,
        /**
         * the number of indexes
         */
        COUNT,
    }
    /**
     * Represents the base types for Libretro controllers.
     */

    /**
     * Represents the base types for Libretro controllers.
     */
    export namespace ControllerType {
        export const $gtype: GObject.GType<ControllerType>;
    }

    enum ControllerType {
        /**
         * no controller
         */
        NONE,
        /**
         * a classic gamepad
         */
        JOYPAD,
        /**
         * a simple mouse
         */
        MOUSE,
        /**
         * a keyboard
         */
        KEYBOARD,
        /**
         * a lightgun
         */
        LIGHTGUN,
        /**
         * a gamepad with analog sticks
         */
        ANALOG,
        /**
         * a screen pointer
         */
        POINTER,
        /**
         * the number of types
         */
        COUNT,
        /**
         * a mask to get the super type of a derived one
         */
        TYPE_MASK,
    }
    /**
     * Represents the buttons for the Libretro gamepad. The available buttons are
     * the same as the W3C Standard Gamepad, the SDL GameController and many other
     * modern standard gamepads, but the name of the buttons may differ. See the
     * <ulink url="https://w3c.github.io/gamepad/">W3C Gamepad Specification</ulink>
     * and the <ulink url="https://wiki.libsdl.org/CategoryGameController">SDL
     * GamepadController definition</ulink> for more information.
     */

    /**
     * Represents the buttons for the Libretro gamepad. The available buttons are
     * the same as the W3C Standard Gamepad, the SDL GameController and many other
     * modern standard gamepads, but the name of the buttons may differ. See the
     * <ulink url="https://w3c.github.io/gamepad/">W3C Gamepad Specification</ulink>
     * and the <ulink url="https://wiki.libsdl.org/CategoryGameController">SDL
     * GamepadController definition</ulink> for more information.
     */
    export namespace JoypadId {
        export const $gtype: GObject.GType<JoypadId>;
    }

    enum JoypadId {
        /**
         * the bottom action button
         */
        B,
        /**
         * the left action button
         */
        Y,
        /**
         * the Select button
         */
        SELECT,
        /**
         * the Start button
         */
        START,
        /**
         * the up directional button
         */
        UP,
        /**
         * the down directional button
         */
        DOWN,
        /**
         * the left directional button
         */
        LEFT,
        /**
         * the right directional button
         */
        RIGHT,
        /**
         * the right action button
         */
        A,
        /**
         * the top action button
         */
        X,
        /**
         * the first left shoulder button
         */
        L,
        /**
         * the first right shoulder button
         */
        R,
        /**
         * the second left shoulder button
         */
        L2,
        /**
         * the second right shoulder button
         */
        R2,
        /**
         * the left thumb button
         */
        L3,
        /**
         * the right thumb button
         */
        R3,
        /**
         * the number of ids
         */
        COUNT,
    }
    /**
     * Represents the inputs for the Libretro lightgun.
     */

    /**
     * Represents the inputs for the Libretro lightgun.
     */
    export namespace LightgunId {
        export const $gtype: GObject.GType<LightgunId>;
    }

    enum LightgunId {
        /**
         * the X axis of a lightgun
         */
        X,
        /**
         * the Y axis of a lightgun
         */
        Y,
        /**
         * the trigger of a lightgun
         */
        TRIGGER,
        /**
         * the cursor of a lightgun
         */
        CURSOR,
        /**
         * the turbo button of a lightgun
         */
        TURBO,
        /**
         * the pause button of a lightgun
         */
        PAUSE,
        /**
         * the start button of a lightgun
         */
        START,
        /**
         * the number of ids
         */
        COUNT,
    }
    /**
     * Represents the memory types for the Libretro core.
     */

    /**
     * Represents the memory types for the Libretro core.
     */
    export namespace MemoryType {
        export const $gtype: GObject.GType<MemoryType>;
    }

    enum MemoryType {
        /**
         * the save RAM
         */
        SAVE_RAM,
        /**
         * the real time clock
         */
        RTC,
        /**
         * the system RAM
         */
        SYSTEM_RAM,
        /**
         * the video RAM
         */
        VIDEO_RAM,
    }
    /**
     * Represents the inputs for the Libretro mouse.
     */

    /**
     * Represents the inputs for the Libretro mouse.
     */
    export namespace MouseId {
        export const $gtype: GObject.GType<MouseId>;
    }

    enum MouseId {
        /**
         * the X axis of a mouse
         */
        X,
        /**
         * the Y axis of a mouse
         */
        Y,
        /**
         * the left button of a mouse
         */
        LEFT,
        /**
         * the right button of a mouse
         */
        RIGHT,
        /**
         * the up direction of a mouse wheel
         */
        WHEELUP,
        /**
         * the down direction of a mouse wheel
         */
        WHEELDOWN,
        /**
         * the middle button of a mouse
         */
        MIDDLE,
        /**
         * the horizontal up direction of a mouse wheel
         */
        HORIZ_WHEELUP,
        /**
         * the horizontal down direction of a mouse wheel
         */
        HORIZ_WHEELDOWN,
        /**
         * the number of ids
         */
        COUNT,
    }
    /**
     * Represents the inputs for the Libretro pointer.
     */

    /**
     * Represents the inputs for the Libretro pointer.
     */
    export namespace PointerId {
        export const $gtype: GObject.GType<PointerId>;
    }

    enum PointerId {
        /**
         * the X axis of a pointer
         */
        X,
        /**
         * the Y axis of a pointer
         */
        Y,
        /**
         * the pression of a pointer
         */
        PRESSED,
        /**
         * the number of ids
         */
        COUNT,
    }
    /**
     * Represents the strength of the rumble effect.
     */

    /**
     * Represents the strength of the rumble effect.
     */
    export namespace RumbleEffect {
        export const $gtype: GObject.GType<RumbleEffect>;
    }

    enum RumbleEffect {
        /**
         * the strong rumble effect
         */
        STRONG,
        /**
         * the weak rumble effect
         */
        WEAK,
        /**
         * the number of rumble effects
         */
        COUNT,
    }
    /**
     * Represents the filters that can be applied to the video output.
     */

    /**
     * Represents the filters that can be applied to the video output.
     */
    export namespace VideoFilter {
        export const $gtype: GObject.GType<VideoFilter>;
    }

    enum VideoFilter {
        /**
         * a smooth but blurry video filer
         */
        SMOOTH,
        /**
         * a sharp video filter showing every pixel
         */
        SHARP,
        /**
         * a video filter mimicking CRT screens
         */
        CRT,
        /**
         * the number of video filters
         */
        COUNT,
    }
    /**
     * Logs an error or debugging message.
     *
     * This is a convenience function to forward the log signal of #RetroCore to
     * g_log(), see it for more information.
     * @param sender a #RetroCore
     * @param log_domain the log domain, usually #G_LOG_DOMAIN, or %NULL
     * @param log_level the log level, either from #GLogLevelFlags or a user-defined level
     * @param message the message to log
     */
    function g_log(
        sender: Core,
        log_domain: string | null,
        log_level: GLib.LogLevelFlags | null,
        message: string,
    ): void;
    function gtk_get_resource(): Gio.Resource;
    function joypad_id_from_button_code(button_code: number): JoypadId;
    function joypad_id_to_button_code(joypad_id: JoypadId | null): number;
    /**
     * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
     * @param pixbuf a #GdkPixbuf
     * @returns the aspect ratio, or 0 if the option is not set or its value is invalid.
     */
    function pixbuf_get_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf): number;
    /**
     * Sets the aspect ratio of `pixbuf` by setting the 'aspect-ratio' pixbuf option.
     * Use retro_pixbuf_get_aspect_ratio() to retrieve it.
     * @param pixbuf a #GdkPixbuf
     * @param aspect_ratio the aspect ratio value
     */
    function pixbuf_set_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf, aspect_ratio: number): void;
    /**
     * Gets a #RetroVideoFilter from it's name. It defaults to
     * RETRO_VIDEO_FILTER_SMOOTH in case of error.
     * @param filter a filter name
     * @returns a #RetroVideoFilter
     */
    function video_filter_from_string(filter: string): VideoFilter;
    namespace ControllerIterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ControllerIterator extends GObject.Object {
        static $gtype: GObject.GType<ControllerIterator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControllerIterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ControllerIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ControllerIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControllerIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControllerIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ControllerIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControllerIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ControllerIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fetch the next #RetroController and the port number it is plugged into.
         * @returns %FALSE if it reached the end, %TRUE otherwise
         */
        next(): [boolean, number, Controller | null];
    }

    namespace Core {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'audio-output': (arg0: Uint8Array, arg1: number) => void;
            log: (arg0: string, arg1: GLib.LogLevelFlags, arg2: string) => void;
            message: (arg0: string, arg1: number) => boolean | void;
            'options-set': () => void;
            shutdown: () => boolean | void;
            'video-output': (arg0: Pixdata) => void;
            'notify::api-version': (pspec: GObject.ParamSpec) => void;
            'notify::content-directory': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::frames-per-second': (pspec: GObject.ParamSpec) => void;
            'notify::game-loaded': (pspec: GObject.ParamSpec) => void;
            'notify::is-initiated': (pspec: GObject.ParamSpec) => void;
            'notify::runahead': (pspec: GObject.ParamSpec) => void;
            'notify::save-directory': (pspec: GObject.ParamSpec) => void;
            'notify::support-no-game': (pspec: GObject.ParamSpec) => void;
            'notify::system-directory': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            api_version: number;
            apiVersion: number;
            content_directory: string;
            contentDirectory: string;
            filename: string;
            frames_per_second: number;
            framesPerSecond: number;
            game_loaded: boolean;
            gameLoaded: boolean;
            is_initiated: boolean;
            isInitiated: boolean;
            runahead: number;
            save_directory: string;
            saveDirectory: string;
            support_no_game: boolean;
            supportNoGame: boolean;
            system_directory: string;
            systemDirectory: string;
        }
    }

    class Core extends GObject.Object {
        static $gtype: GObject.GType<Core>;

        // Properties

        /**
         * The Libretro API version implement by the core.
         */
        get api_version(): number;
        /**
         * The Libretro API version implement by the core.
         */
        get apiVersion(): number;
        get content_directory(): string;
        set content_directory(val: string);
        get contentDirectory(): string;
        set contentDirectory(val: string);
        /**
         * The filename of the core.
         */
        get filename(): string;
        /**
         * The FPS rate for the core's video output.
         */
        get frames_per_second(): number;
        /**
         * The FPS rate for the core's video output.
         */
        get framesPerSecond(): number;
        /**
         * Whether a game has been loaded.
         */
        get game_loaded(): boolean;
        /**
         * Whether a game has been loaded.
         */
        get gameLoaded(): boolean;
        /**
         * Whether the core has been initiated.
         */
        get is_initiated(): boolean;
        /**
         * Whether the core has been initiated.
         */
        get isInitiated(): boolean;
        /**
         * The number of frame to run ahead of time.
         */
        get runahead(): number;
        set runahead(val: number);
        /**
         * The save directory of the core.
         *
         * The core will save some data here.
         */
        get save_directory(): string;
        set save_directory(val: string);
        /**
         * The save directory of the core.
         *
         * The core will save some data here.
         */
        get saveDirectory(): string;
        set saveDirectory(val: string);
        /**
         * Whether the core supports running with no game.
         */
        get support_no_game(): boolean;
        /**
         * Whether the core supports running with no game.
         */
        get supportNoGame(): boolean;
        /**
         * The system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        get system_directory(): string;
        set system_directory(val: string);
        /**
         * The system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        get systemDirectory(): string;
        set systemDirectory(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Core.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Core.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): Core;

        // Signals

        connect<K extends keyof Core.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Core.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Core.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Core.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This initializes `self,` loads its available options and loads the medias. You
         * need to boot `self` before using some of its methods.
         */
        boot(): void;
        /**
         * Gets the Libretro API version implement by the core.
         * @returns the API version
         */
        get_api_version(): number;
        /**
         * Gets whether the state of `self` can be accessed.
         * @returns whether the state of @self can be accessed
         */
        get_can_access_state(): boolean;
        get_content_directory(): string;
        /**
         * Gets the filename of the core.
         * @returns the filename of the core
         */
        get_filename(): string;
        /**
         * Gets the FPS rate for the core's video output.
         * @returns the FPS rate for the core's video output
         */
        get_frames_per_second(): number;
        /**
         * Gets whether a game has been loaded.
         * @returns whether a game has been loaded
         */
        get_game_loaded(): boolean;
        /**
         * Gets whether the core has been initiated.
         * @returns whether the core has been initiated
         */
        get_is_initiated(): boolean;
        /**
         * Gets a memory region of `self`.
         * @param memory_type the type of memory
         * @returns a #GBytes, or %NULL
         */
        get_memory(memory_type: MemoryType | null): GLib.Bytes;
        /**
         * Gets the size of a memory region of `self`.
         * @param memory_type the type of memory
         * @returns the size of a memory region
         */
        get_memory_size(memory_type: MemoryType | null): number;
        /**
         * Gets the option for the given key.
         * @param key the key of the option
         * @returns the option
         */
        get_option(key: string): Option;
        get_runahead(): number;
        /**
         * Gets the save directory of the core.
         *
         * The core will save some data here.
         * @returns the save directory of the core
         */
        get_save_directory(): string;
        /**
         * Gets the state of `self`.
         * @returns a #GBytes, or %NULL
         */
        get_state(): GLib.Bytes;
        /**
         * Gets whether the core supports running with no game.
         * @returns whether the core supports running with no game
         */
        get_support_no_game(): boolean;
        /**
         * Gets the system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         * @returns the system directory of the core
         */
        get_system_directory(): string;
        /**
         * Gets whether the core has an option for the given key.
         * @param key the key of the option
         * @returns whether the core has an option for the given key
         */
        has_option(key: string): boolean;
        /**
         * Creates a new #RetroControllerIterator which can be used to iterate through
         * the controllers plugged into `self`.
         * @returns a new #RetroControllerIterator
         */
        iterate_controllers(): ControllerIterator;
        /**
         * Creates a new #RetroOptionIterator which can be used to iterate through the
         * options of `self`.
         * @returns a new #RetroOptionIterator
         */
        iterate_options(): OptionIterator;
        /**
         * Resets `self`.
         */
        reset(): void;
        /**
         * Iterate `self` for a frame.
         */
        run(): void;
        set_content_directory(content_directory: string): void;
        /**
         * Plugs `controller` into the specified port number of `self`.
         * @param port the port number
         * @param controller a #RetroController
         */
        set_controller(port: number, controller?: Controller | null): void;
        /**
         * Sets the current media index.
         *
         * You can use this after booting the core.
         * @param media_index the media index
         */
        set_current_media(media_index: number): void;
        /**
         * Uses `controller` as the default controller for the given type. When a port
         * has no controller plugged plugged into it, the core will use the default
         * controllers instead.
         * @param controller_type a #RetroControllerType
         * @param controller a #RetroController
         */
        set_default_controller(controller_type: ControllerType | null, controller?: Controller | null): void;
        /**
         * Sets the widget whose key events will be forwarded to `self`.
         * @param widget a #GtkWidget, or %NULL
         */
        set_keyboard(widget?: Gtk.Widget | null): void;
        /**
         * Sets the medias to load into the core.
         *
         * You can use this before booting the core.
         * @param uris the URIs
         */
        set_medias(uris: string[]): void;
        /**
         * Sets a memory region of `self`.
         * @param memory_type the type of memory
         * @param bytes a #GBytes
         */
        set_memory(memory_type: MemoryType | null, bytes: GLib.Bytes | Uint8Array): void;
        set_runahead(runahead: number): void;
        /**
         * Sets the save directory of the core.
         *
         * The core will save some data here.
         * @param save_directory the save directory
         */
        set_save_directory(save_directory: string): void;
        /**
         * Sets the state of the `self`.
         * @param bytes a #GBytes
         */
        set_state(bytes: GLib.Bytes | Uint8Array): void;
        /**
         * Sets the system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         * @param system_directory the system directory
         */
        set_system_directory(system_directory: string): void;
    }

    namespace CoreDescriptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CoreDescriptor extends GObject.Object {
        static $gtype: GObject.GType<CoreDescriptor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoreDescriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CoreDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): CoreDescriptor;

        // Signals

        connect<K extends keyof CoreDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreDescriptor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CoreDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreDescriptor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CoreDescriptor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CoreDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the MD5 fingerprint of the firmware file, or %NULL.
         * @param firmware a firmware name
         * @returns a string or %NULL, free it with g_free()
         */
        get_firmware_md5(firmware: string): string | null;
        /**
         * Gets the demanded path to the firmware file, or %NULL.
         * @param firmware a firmware name
         * @returns a string or %NULL, free it with g_free()
         */
        get_firmware_path(firmware: string): string | null;
        /**
         * Gets the SHA512 fingerprint of the firmware file, or %NULL.
         * @param firmware a firmware name
         * @returns a string or %NULL, free it with g_free()
         */
        get_firmware_sha512(firmware: string): string | null;
        /**
         * Gets the list of firmwares used by the core for this platform.
         * @param platform a platform name
         * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
         */
        get_firmwares(platform: string): string[];
        /**
         * Gets the icon, or %NULL if it doesn't exist.
         * @returns a #GIcon or %NULL
         */
        get_icon(): Gio.Icon | null;
        /**
         * Gets the ID of `self`.
         * @returns the ID of @self, free it with g_free()
         */
        get_id(): string;
        /**
         * Gets whether the core is an emulator, and hence need games to be loaded.
         * @returns whether the core is an emulator
         */
        get_is_emulator(): boolean;
        /**
         * Gets whether the firmware is mandatory for the core to function.
         * @param firmware a firmware name
         * @returns whether the firmware is mandatory for the core to function
         */
        get_is_firmware_mandatory(firmware: string): boolean;
        /**
         * Gets whether the core is a game, and hence can't load games.
         * @returns whether the core is a game
         */
        get_is_game(): boolean;
        /**
         * Gets the list of MIME types accepted used by the core for this platform.
         * @param platform a platform name
         * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
         */
        get_mime_type(platform: string): string[];
        /**
         * Gets the module file name, or %NULL if it doesn't exist.
         * @returns a string or %NULL, free it with g_free()
         */
        get_module(): string | null;
        /**
         * Gets the module file, or %NULL if it doesn't exist.
         * @returns a #GFile or %NULL
         */
        get_module_file(): Gio.File | null;
        /**
         * Gets the name, or %NULL if it doesn't exist.
         * @returns a string or %NULL, free it with g_free()
         */
        get_name(): string | null;
        /**
         * Gets whether the platform supports all of the given MIME types.
         * @param platform a platform name
         * @param mime_types the MIME types
         * @returns whether the platform supports all of the given MIME types
         */
        get_platform_supports_mime_types(platform: string, mime_types: string[]): boolean;
        /**
         * Gets the URI of the file of `self`.
         * @returns the URI of the file of @self, free it with g_free()
         */
        get_uri(): string;
        /**
         * Gets whether the firmware declares its MD5 fingerprint.
         * @param firmware a firmware name
         * @returns whether the firmware declares its MD5 fingerprint
         */
        has_firmware_md5(firmware: string): boolean;
        /**
         * Gets whether the firmware declares its SHA512 fingerprint.
         * @param firmware a firmware name
         * @returns whether the firmware declares its SHA512 fingerprint
         */
        has_firmware_sha512(firmware: string): boolean;
        /**
         * Gets whether the platform has associated firmwares.
         * @param platform a platform name
         * @returns whether the platform has associated firmwares
         */
        has_firmwares(platform: string): boolean;
        /**
         * Gets whether the core has an icon.
         * @returns whether the core has an icon
         */
        has_icon(): boolean;
        /**
         * Gets whether the core descriptor declares the given platform.
         * @param platform a platform name
         * @returns whether the core descriptor declares the given platform
         */
        has_platform(platform: string): boolean;
    }

    namespace CoreView {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'notify::can-grab-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::snap-pointer-to-borders': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
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
            extends Gtk.EventBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            can_grab_pointer: boolean;
            canGrabPointer: boolean;
            snap_pointer_to_borders: boolean;
            snapPointerToBorders: boolean;
        }
    }

    class CoreView extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CoreView>;

        // Properties

        get can_grab_pointer(): boolean;
        set can_grab_pointer(val: boolean);
        get canGrabPointer(): boolean;
        set canGrabPointer(val: boolean);
        get snap_pointer_to_borders(): boolean;
        set snap_pointer_to_borders(val: boolean);
        get snapPointerToBorders(): boolean;
        set snapPointerToBorders(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoreView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CoreView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CoreView;

        // Signals

        connect<K extends keyof CoreView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CoreView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CoreView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CoreView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new #RetroController exposing `self` as the specified controller
         * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
         * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
         * RETRO_CONTROLLER_TYPE_POINTER.
         * @param controller_type the controller type to expose @self as
         * @returns a new #RetroController
         */
        as_controller(controller_type: ControllerType | null): Controller;
        /**
         * Gets whether the pointer should be grabbed when clicking on the view. This
         * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
         * RETRO_CONTROLLER_TYPE_POINTER.
         * @returns whether the pointer should snap to the borders
         */
        get_can_grab_pointer(): boolean;
        /**
         * Gets a flag representing the capabilities of `self` when exposed as a
         * controller. See retro_controller_get_capabilities() for more information on
         * the flag.
         *
         * See retro_core_view_as_controller() to know the capabilities of
         * #RetroCoreView when exposed as a controller.
         * @returns the capabilities flag of @self when exposed as a controller
         */
        get_controller_capabilities(): number;
        /**
         * Gets the state of an input of `self`.
         * @param input a #RetroInput to query @self
         * @returns the input's state
         */
        get_input_state(input: Input): number;
        /**
         * Gets the currently set key joypad mapping.
         * @returns a #RetroKeyJoypadMapping
         */
        get_key_joypad_mapping(): KeyJoypadMapping;
        /**
         * Gets the currently displayed video frame.
         * @returns a #GdkPixbuf
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Gets whether the pointer should be considered to be at the border of the
         * video display when it is outside of it. This is used when `self` is exposed as
         * a RETRO_CONTROLLER_TYPE_POINTER.
         * @returns whether the pointer should snap to the borders
         */
        get_snap_pointer_to_borders(): boolean;
        /**
         * Sets the `self` as the default controllers of `core`.
         * @param core a #RetroCore
         */
        set_as_default_controller(core?: Core | null): void;
        /**
         * Sets whether the pointer should be grabbed when clicking on the view. This
         * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
         * RETRO_CONTROLLER_TYPE_POINTER.
         * @param can_grab_pointer whether the pointer should be grabbed when clicking on the view
         */
        set_can_grab_pointer(can_grab_pointer: boolean): void;
        /**
         * Sets `core` as the #RetroCore handled by `self`.
         * @param core a #RetroCore, or %NULL
         */
        set_core(core?: Core | null): void;
        /**
         * Sets the video filter to use to render the core's video on `self`.
         * @param filter a #RetroVideoFilter
         */
        set_filter(filter: VideoFilter | null): void;
        /**
         * Sets the key joypad mapping on `self`. If given mapping is %NULL, then set to
         * an empty configuration.
         * @param mapping a #RetroKeyJoypadMapping
         */
        set_key_joypad_mapping(mapping?: KeyJoypadMapping | null): void;
        /**
         * Sets `pixbuf` as the currently displayed video frame.
         *
         * retro_pixbuf_set_aspect_ratio() can be used to specify the aspect ratio for
         * the pixbuf. Otherwise the core's aspect ratio will be used.
         * @param pixbuf a #GdkPixbuf
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Sets whether the pointer should be considered to be at the border of the
         * video display when it is outside of it. This is used when `self` is exposed as
         * a RETRO_CONTROLLER_TYPE_POINTER.
         * @param snap_pointer_to_borders whether the pointer should snap to the borders
         */
        set_snap_pointer_to_borders(snap_pointer_to_borders: boolean): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace KeyJoypadMapping {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyJoypadMapping extends GObject.Object {
        static $gtype: GObject.GType<KeyJoypadMapping>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyJoypadMapping.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<KeyJoypadMapping.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): KeyJoypadMapping;

        static new_default(): KeyJoypadMapping;

        // Signals

        connect<K extends keyof KeyJoypadMapping.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyJoypadMapping.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KeyJoypadMapping.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyJoypadMapping.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KeyJoypadMapping.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyJoypadMapping.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the mapping key code for the joypad button id.
         * @param button joypad button id
         * @returns mapping key code
         */
        get_button_key(button: JoypadId | null): number;
        /**
         * Maps the joypad button id to mapping key code.
         * @param button joypad button id
         * @param hardware_keycode mapping key code
         */
        set_button_key(button: JoypadId | null, hardware_keycode: number): void;
    }

    namespace MainLoop {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::core': (pspec: GObject.ParamSpec) => void;
            'notify::speed-rate': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            core: Core;
            speed_rate: number;
            speedRate: number;
        }
    }

    class MainLoop extends GObject.Object {
        static $gtype: GObject.GType<MainLoop>;

        // Properties

        get core(): Core;
        set core(val: Core);
        get speed_rate(): number;
        set speed_rate(val: number);
        get speedRate(): number;
        set speedRate(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MainLoop.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MainLoop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](core: Core): MainLoop;

        // Signals

        connect<K extends keyof MainLoop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MainLoop.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MainLoop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MainLoop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MainLoop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MainLoop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the core handled by `self`.
         * @returns a #RetroCore
         */
        get_core(): Core;
        /**
         * Gets the speed rate at which to run the core.
         * @returns the speed rate
         */
        get_speed_rate(): number;
        /**
         * Resets the core. Results depend on the core's implementation.
         */
        reset(): void;
        /**
         * Sets `core` as the #RetroCore handled by `self`.
         * @param core a #RetroCore, or %NULL
         */
        set_core(core?: Core | null): void;
        /**
         * Sets the speed rate at which to run the core.
         * @param speed_rate a speed rate
         */
        set_speed_rate(speed_rate: number): void;
        /**
         * Starts running the core. If the core was stopped, it will restart from this moment.
         */
        start(): void;
        /**
         * Stops running the core.
         */
        stop(): void;
    }

    namespace ModuleIterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ModuleIterator extends GObject.Object {
        static $gtype: GObject.GType<ModuleIterator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleIterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](lookup_paths: string[], recursive: boolean): ModuleIterator;

        // Signals

        connect<K extends keyof ModuleIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModuleIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModuleIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
         * or %NULL if the end was reached.
         * @returns a #RetroCoreDescriptor, or %NULL
         */
        get(): CoreDescriptor | null;
        /**
         * Fetch the next #RetroModuleIterator.
         * @returns %FALSE if it reached the end, %TRUE otherwise
         */
        next(): boolean;
    }

    namespace ModuleQuery {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ModuleQuery extends GObject.Object {
        static $gtype: GObject.GType<ModuleQuery>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleQuery.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleQuery.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](recursive: boolean): ModuleQuery;

        // Signals

        connect<K extends keyof ModuleQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleQuery.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModuleQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleQuery.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModuleQuery.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleQuery.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new #RetroModuleIterator.
         * @returns a new #RetroModuleIterator
         */
        iterator(): ModuleIterator;
    }

    namespace Option {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'value-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Option extends GObject.Object {
        static $gtype: GObject.GType<Option>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Option.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Option.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Option.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Option.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Option.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Option.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Option.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Option.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the description of `self`.
         * @returns the description of @self
         */
        get_description(): string;
        /**
         * Gets the key of `self`.
         * @returns the key of @self
         */
        get_key(): string;
        /**
         * Gets the value of `self`.
         * @returns the value of @self
         */
        get_value(): string;
        /**
         * Gets the value of `self`.
         * @returns the value of @self
         */
        get_values(): string[];
        /**
         * Sets the value for `self`. An error will be thrown if the value is invalid for
         * `self`.
         * @param value the value
         */
        set_value(value: string): void;
    }

    namespace OptionIterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class OptionIterator extends GObject.Object {
        static $gtype: GObject.GType<OptionIterator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OptionIterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OptionIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof OptionIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OptionIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OptionIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OptionIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fetch the next #RetroOption and its key.
         * @returns %FALSE if it reached the end, %TRUE otherwise
         */
        next(): [boolean, number, Option | null];
    }

    type ControllerInterface = typeof Controller;
    type ControllerIteratorClass = typeof ControllerIterator;
    type CoreClass = typeof Core;
    type CoreDescriptorClass = typeof CoreDescriptor;
    type CoreViewClass = typeof CoreView;
    type KeyJoypadMappingClass = typeof KeyJoypadMapping;
    type MainLoopClass = typeof MainLoop;
    type ModuleIteratorClass = typeof ModuleIterator;
    type ModuleQueryClass = typeof ModuleQuery;
    type OptionClass = typeof Option;
    type OptionIteratorClass = typeof OptionIterator;
    class Pixdata {
        static $gtype: GObject.GType<Pixdata>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Copies `self` into a new #RetroPixdata.
         * @returns a new #RetroPixdata, use retro_pixdata_free() to free it
         */
        copy(): Pixdata;
        /**
         * Frees the given #RetroPixdata object.
         */
        free(): void;
        /**
         * Gets the aspect ratio the video should be rendered with.
         * @returns the aspect ratio
         */
        get_aspect_ratio(): number;
        /**
         * Gets the height of `self`.
         * @returns the height
         */
        get_height(): number;
        /**
         * Gets the width of `self`.
         * @returns the width
         */
        get_width(): number;
        /**
         * Loads an OpenGL texture from `self`.
         * @returns whether the loading was successful
         */
        load_gl_texture(): boolean;
        /**
         * Creates a new #GdkPixbuf from `self`.
         * @returns a new #RetroPixdata
         */
        to_pixbuf(): GdkPixbuf.Pixbuf;
    }

    class Input {
        static $gtype: GObject.GType<Input>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Input;

        // Methods

        /**
         * Copies `self` into a new #RetroInput.
         * @returns a new #RetroInput, use retro_input_free() to free it
         */
        copy(): Input;
        /**
         * Frees the given #RetroInput.
         */
        free(): void;
        /**
         * Gets the analog id and index of %self, if any.
         * @returns whether the id and the index were retrieved
         */
        get_analog(): [boolean, AnalogId, AnalogIndex];
        /**
         * Gets the controller type of `self`.
         * @returns the controller type of @self
         */
        get_controller_type(): ControllerType;
        /**
         * Gets the joypad id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_joypad(): [boolean, JoypadId];
        /**
         * Gets the lightgun id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_lightgun(): [boolean, LightgunId];
        /**
         * Gets the mouse id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_mouse(): [boolean, MouseId];
        /**
         * Gets the pointer id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_pointer(): [boolean, PointerId];
    }

    namespace Controller {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ControllerNamespace {
        $gtype: GObject.GType<Controller>;
        prototype: Controller;
    }
    interface Controller extends GObject.Object {
        // Methods

        /**
         * Gets a flag representing the capabilities of `self`. Each bit index matches
         * the #RetroControllerType of same number.
         *
         * For example, if `self` is an analog gamepad, the value would be: (1 <<
         * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
         * @returns the capabilities flag of @self
         */
        get_capabilities(): number;
        /**
         * Gets the main type of the controller.
         * @returns the controller type of @self
         */
        get_controller_type(): ControllerType;
        /**
         * Gets the state of an input of `self`.
         * @param input a #RetroInput to query @self
         * @returns the input's state
         */
        get_input_state(input: Input): number;
        /**
         * Gets whether `self` has the capability to represent the given controller type.
         * @param controller_type a #RetroControllerType
         * @returns whether @self has the capability
         */
        has_capability(controller_type: ControllerType | null): boolean;
        /**
         * Polls the pending input events for `self`.
         */
        poll(): void;
        /**
         * Sets the rumble state of `self`.
         * @param effect the rumble effect
         * @param strength the rumble effect strength
         * @returns whether the rumble state has been successfully set.
         */
        set_rumble_state(effect: RumbleEffect | null, strength: number): boolean;

        // Virtual methods

        /**
         * Gets a flag representing the capabilities of `self`. Each bit index matches
         * the #RetroControllerType of same number.
         *
         * For example, if `self` is an analog gamepad, the value would be: (1 <<
         * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
         */
        vfunc_get_capabilities(): number;
        /**
         * Gets the main type of the controller.
         */
        vfunc_get_controller_type(): ControllerType;
        /**
         * Gets the state of an input of `self`.
         * @param input a #RetroInput to query @self
         */
        vfunc_get_input_state(input: Input): number;
        /**
         * Polls the pending input events for `self`.
         */
        vfunc_poll(): void;
        /**
         * Sets the rumble state of `self`.
         * @param effect the rumble effect
         * @param strength the rumble effect strength
         */
        vfunc_set_rumble_state(effect: RumbleEffect, strength: number): boolean;
    }

    export const Controller: ControllerNamespace & {
        new (): Controller; // This allows `obj instanceof Controller`
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

export default Retro;

// END
