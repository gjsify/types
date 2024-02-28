/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './retro-0.14-ambient.d.ts';
import './retro-0.14-import.d.ts';
/**
 * Retro-0.14
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Retro {
    /**
     * Represents the axes of the analog sticks for the Libretro gamepad.
     */
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
    function g_log(sender: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string): void;
    function gtk_get_resource(): Gio.Resource;
    function joypad_id_from_button_code(button_code: number): JoypadId;
    function joypad_id_to_button_code(joypad_id: JoypadId): number;
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
    module ControllerIterator {
        // Constructor properties interface
    }

    class ControllerIterator extends GObject.Object {
        // Owm methods of Retro-0.14.ControllerIterator

        /**
         * Fetch the next #RetroController and the port number it is plugged into.
         * @returns %FALSE if it reached the end, %TRUE otherwise
         */
        next(): boolean;
    }

    module Core {
        // Signal callback interfaces

        interface AudioOutput {
            (data: Uint8Array, sample_rate: number): void;
        }

        interface Log {
            (log_domain: string, log_level: GLib.LogLevelFlags, message: string): void;
        }

        interface Message {
            (message: string, frames: number): boolean;
        }

        interface OptionsSet {
            (): void;
        }

        interface Shutdown {
            (): boolean;
        }

        interface VideoOutput {
            (pixdata: Pixdata): void;
        }

        // Constructor properties interface
    }

    class Core extends GObject.Object {
        // Own properties of Retro-0.14.Core

        /**
         * The Libretro API version implement by the core.
         */
        readonly api_version: number;
        /**
         * The Libretro API version implement by the core.
         */
        readonly apiVersion: number;
        content_directory: string;
        contentDirectory: string;
        /**
         * The filename of the core.
         */
        readonly filename: string;
        /**
         * The FPS rate for the core's video output.
         */
        readonly frames_per_second: number;
        /**
         * The FPS rate for the core's video output.
         */
        readonly framesPerSecond: number;
        /**
         * Whether a game has been loaded.
         */
        readonly game_loaded: boolean;
        /**
         * Whether a game has been loaded.
         */
        readonly gameLoaded: boolean;
        /**
         * Whether the core has been initiated.
         */
        readonly is_initiated: boolean;
        /**
         * Whether the core has been initiated.
         */
        readonly isInitiated: boolean;
        /**
         * The number of frame to run ahead of time.
         */
        runahead: number;
        /**
         * The save directory of the core.
         *
         * The core will save some data here.
         */
        save_directory: string;
        /**
         * The save directory of the core.
         *
         * The core will save some data here.
         */
        saveDirectory: string;
        /**
         * Whether the core supports running with no game.
         */
        readonly support_no_game: boolean;
        /**
         * Whether the core supports running with no game.
         */
        readonly supportNoGame: boolean;
        /**
         * The system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        system_directory: string;
        /**
         * The system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        systemDirectory: string;

        // Constructors of Retro-0.14.Core

        static ['new'](filename: string): Core;

        // Owm methods of Retro-0.14.Core

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
        get_memory(memory_type: MemoryType): GLib.Bytes;
        /**
         * Gets the size of a memory region of `self`.
         * @param memory_type the type of memory
         * @returns the size of a memory region
         */
        get_memory_size(memory_type: MemoryType): number;
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
        set_default_controller(controller_type: ControllerType, controller?: Controller | null): void;
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
        set_memory(memory_type: MemoryType, bytes: GLib.Bytes): void;
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
        set_state(bytes: GLib.Bytes): void;
        /**
         * Sets the system directory of the core.
         *
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         * @param system_directory the system directory
         */
        set_system_directory(system_directory: string): void;
    }

    module CoreDescriptor {
        // Constructor properties interface
    }

    class CoreDescriptor extends GObject.Object {
        // Constructors of Retro-0.14.CoreDescriptor

        static ['new'](filename: string): CoreDescriptor;

        // Owm methods of Retro-0.14.CoreDescriptor

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

    module CoreView {
        // Constructor properties interface
    }

    class CoreView extends Gtk.EventBox {
        // Own properties of Retro-0.14.CoreView

        can_grab_pointer: boolean;
        canGrabPointer: boolean;
        snap_pointer_to_borders: boolean;
        snapPointerToBorders: boolean;

        // Constructors of Retro-0.14.CoreView

        static ['new'](): CoreView;

        // Owm methods of Retro-0.14.CoreView

        /**
         * Creates a new #RetroController exposing `self` as the specified controller
         * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
         * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
         * RETRO_CONTROLLER_TYPE_POINTER.
         * @param controller_type the controller type to expose @self as
         * @returns a new #RetroController
         */
        as_controller(controller_type: ControllerType): Controller;
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
        set_filter(filter: VideoFilter): void;
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
    }

    module KeyJoypadMapping {
        // Constructor properties interface
    }

    class KeyJoypadMapping extends GObject.Object {
        // Constructors of Retro-0.14.KeyJoypadMapping

        static ['new'](): KeyJoypadMapping;

        static new_default(): KeyJoypadMapping;

        // Owm methods of Retro-0.14.KeyJoypadMapping

        /**
         * Gets the mapping key code for the joypad button id.
         * @param button joypad button id
         * @returns mapping key code
         */
        get_button_key(button: JoypadId): number;
        /**
         * Maps the joypad button id to mapping key code.
         * @param button joypad button id
         * @param hardware_keycode mapping key code
         */
        set_button_key(button: JoypadId, hardware_keycode: number): void;
    }

    module MainLoop {
        // Constructor properties interface
    }

    class MainLoop extends GObject.Object {
        // Own properties of Retro-0.14.MainLoop

        core: Core;
        speed_rate: number;
        speedRate: number;

        // Constructors of Retro-0.14.MainLoop

        static ['new'](core: Core): MainLoop;

        // Owm methods of Retro-0.14.MainLoop

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

    module ModuleIterator {
        // Constructor properties interface
    }

    class ModuleIterator extends GObject.Object {
        // Constructors of Retro-0.14.ModuleIterator

        static ['new'](lookup_paths: string[], recursive: boolean): ModuleIterator;

        // Owm methods of Retro-0.14.ModuleIterator

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

    module ModuleQuery {
        // Constructor properties interface
    }

    class ModuleQuery extends GObject.Object {
        // Constructors of Retro-0.14.ModuleQuery

        static ['new'](recursive: boolean): ModuleQuery;

        // Owm methods of Retro-0.14.ModuleQuery

        /**
         * Creates a new #RetroModuleIterator.
         * @returns a new #RetroModuleIterator
         */
        iterator(): ModuleIterator;
    }

    module Option {
        // Signal callback interfaces

        interface ValueChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Option extends GObject.Object {
        // Owm methods of Retro-0.14.Option

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

    module OptionIterator {
        // Constructor properties interface
    }

    class OptionIterator extends GObject.Object {
        // Owm methods of Retro-0.14.OptionIterator

        /**
         * Fetch the next #RetroOption and its key.
         * @returns %FALSE if it reached the end, %TRUE otherwise
         */
        next(): boolean;
    }

    class ControllerInterface {}

    class ControllerIteratorClass {}

    class CoreClass {}

    class CoreDescriptorClass {}

    class CoreViewClass {}

    class KeyJoypadMappingClass {}

    class MainLoopClass {}

    class ModuleIteratorClass {}

    class ModuleQueryClass {}

    class OptionClass {}

    class OptionIteratorClass {}

    class Pixdata {
        // Owm methods of Retro-0.14.Pixdata

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
        // Constructors of Retro-0.14.Input

        constructor(properties?: Partial<{}>);

        static ['new'](): Input;

        // Owm methods of Retro-0.14.Input

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
        get_analog(): boolean;
        /**
         * Gets the controller type of `self`.
         * @returns the controller type of @self
         */
        get_controller_type(): ControllerType;
        /**
         * Gets the joypad id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_joypad(): boolean;
        /**
         * Gets the lightgun id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_lightgun(): boolean;
        /**
         * Gets the mouse id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_mouse(): boolean;
        /**
         * Gets the pointer id of %self, if any.
         * @returns whether the id was retrieved
         */
        get_pointer(): boolean;
    }

    interface Controller {
        // Owm methods of Retro-0.14.Controller

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
        has_capability(controller_type: ControllerType): boolean;
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
        set_rumble_state(effect: RumbleEffect, strength: number): boolean;

        // Own virtual methods of Retro-0.14.Controller

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
