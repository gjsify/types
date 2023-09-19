
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './retro-1-ambient.d.ts';
import './retro-1-import.d.ts';
/**
 * Retro-1
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
     * the fourth button of a mouse
     */
    BUTTON_4,
    /**
     * the fifth button of a mouse
     */
    BUTTON_5,
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
}
function controller_type_get_id_count(type: ControllerType): number
function controller_type_get_index_count(type: ControllerType): number
/**
 * Logs an error or debugging message.
 * 
 * This is a convenience function to forward the #RetroCore::log signal of
 * #RetroCore to g_log(), see it for more information.
 * @param sender a #RetroCore
 * @param log_domain the log domain, usually #G_LOG_DOMAIN, or %NULL
 * @param log_level the log level, either from #GLogLevelFlags or a user-defined level
 * @param message the message to log
 */
function g_log(sender: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string | null): void
function gtk_get_resource(): Gio.Resource
function joypad_id_from_button_code(button_code: number): JoypadId
function joypad_id_to_button_code(joypad_id: JoypadId): number
/**
 * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
 * @param pixbuf a #GdkPixbuf
 * @returns the aspect ratio, or 0 if the option is not set or its value is invalid.
 */
function pixbuf_get_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf): number
/**
 * Sets the aspect ratio of `pixbuf` by setting the 'aspect-ratio' pixbuf option.
 * Use retro_pixbuf_get_aspect_ratio() to retrieve it.
 * @param pixbuf a #GdkPixbuf
 * @param aspect_ratio the aspect ratio value
 */
function pixbuf_set_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf, aspect_ratio: number): void
/**
 * Gets a #RetroVideoFilter from it's name. It defaults to
 * RETRO_VIDEO_FILTER_SMOOTH in case of error.
 * @param filter a filter name
 * @returns a #RetroVideoFilter
 */
function video_filter_from_string(filter: string | null): VideoFilter
module Controller {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: Controller): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Controller {

    // Owm methods of Retro-1.Retro.Controller

    emit_state_changed(): void
    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     * @returns the capabilities flag of @self
     */
    get_capabilities(): number
    /**
     * Gets the main type of the controller.
     * @returns the controller type of @self
     */
    get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     * @returns the input's state
     */
    get_input_state(input: Input): number
    /**
     * Gets whether `self` supports rumble effects.
     * @returns whether @self supports rumble effects.
     */
    get_supports_rumble(): boolean
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controller_type a #RetroControllerType
     * @returns whether @self has the capability
     */
    has_capability(controller_type: ControllerType): boolean
    /**
     * Sets the rumble state of `self`.
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    set_rumble_state(effect: RumbleEffect, strength: number): void

    // Own virtual methods of Retro-1.Retro.Controller

    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     * @virtual 
     * @returns the capabilities flag of @self
     */
    vfunc_get_capabilities(): number
    /**
     * Gets the main type of the controller.
     * @virtual 
     * @returns the controller type of @self
     */
    vfunc_get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @virtual 
     * @param input a #RetroInput to query `self`
     * @returns the input's state
     */
    vfunc_get_input_state(input: Input): number
    /**
     * Gets whether `self` supports rumble effects.
     * @virtual 
     * @returns whether @self supports rumble effects.
     */
    vfunc_get_supports_rumble(): boolean
    /**
     * Sets the rumble state of `self`.
     * @virtual 
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    vfunc_set_rumble_state(effect: RumbleEffect, strength: number): void

    // Own signals of Retro-1.Retro.Controller

    connect(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Retro-1.Retro.Controller

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Controller extends GObject.Object {

    // Own properties of Retro-1.Retro.Controller

    static name: string
    static $gtype: GObject.GType<Controller>

    // Constructors of Retro-1.Retro.Controller

    constructor(config?: Controller.ConstructorProperties) 
    _init(config?: Controller.ConstructorProperties): void
}

module ControllerIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ControllerIterator {

    // Owm methods of Retro-1.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller ]

    // Class property signals of Retro-1.Retro.ControllerIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ControllerIterator extends GObject.Object {

    // Own properties of Retro-1.Retro.ControllerIterator

    static name: string
    static $gtype: GObject.GType<ControllerIterator>

    // Constructors of Retro-1.Retro.ControllerIterator

    constructor(config?: ControllerIterator.ConstructorProperties) 
    _init(config?: ControllerIterator.ConstructorProperties): void
}

module Core {

    // Signal callback interfaces

    /**
     * Signal callback interface for `crashed`
     */
    interface CrashedSignalCallback {
        ($obj: Core, message: string | null): void
    }

    /**
     * Signal callback interface for `log`
     */
    interface LogSignalCallback {
        ($obj: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string | null): void
    }

    /**
     * Signal callback interface for `message`
     */
    interface MessageSignalCallback {
        ($obj: Core, message: string | null, frames: number): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    interface ShutdownSignalCallback {
        ($obj: Core): void
    }

    /**
     * Signal callback interface for `video-output`
     */
    interface VideoOutputSignalCallback {
        ($obj: Core, pixdata: Pixdata): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-1.Retro.Core

        content_directory?: string | null
        /**
         * The filename of the core.
         */
        filename?: string | null
        /**
         * The number of frames to run ahead of time. This allows to know in advance
         * what should happen in the given number of frames, allowing to react in
         * advance.
         * 
         * Note that this is resource intensive as the core will be iterated over
         * multiple times for each perceived iteration. In order to work, this
         * requires the cores to properly support serialization, otherwise the
         * behavior is undefined.
         */
        runahead?: number | null
        /**
         * The save directory of the core.
         * 
         * The core will save some data here.
         */
        save_directory?: string | null
        /**
         * The speed ratio at wich the core will run.
         */
        speed_rate?: number | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        system_directory?: string | null
        /**
         * The name of the user.
         */
        user_name?: string | null
    }

}

interface Core {

    // Own properties of Retro-1.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly api_version: number
    content_directory: string | null
    /**
     * The filename of the core.
     */
    readonly filename: string | null
    /**
     * The FPS rate for the core's video output.
     */
    readonly frames_per_second: number
    /**
     * Whether a game has been loaded.
     */
    readonly game_loaded: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly is_initiated: boolean
    /**
     * The number of frames to run ahead of time. This allows to know in advance
     * what should happen in the given number of frames, allowing to react in
     * advance.
     * 
     * Note that this is resource intensive as the core will be iterated over
     * multiple times for each perceived iteration. In order to work, this
     * requires the cores to properly support serialization, otherwise the
     * behavior is undefined.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    save_directory: string | null
    /**
     * The speed ratio at wich the core will run.
     */
    speed_rate: number
    /**
     * Whether the core supports running with no game.
     */
    readonly support_no_game: boolean
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    system_directory: string | null
    /**
     * The name of the user.
     */
    user_name: string | null

    // Owm methods of Retro-1.Retro.Core

    /**
     * This initializes `self,` loads its available options and loads the medias. You
     * need to boot `self` before using some of its methods.
     */
    boot(): void
    /**
     * Gets the Libretro API version implement by the core.
     * @returns the API version
     */
    get_api_version(): number
    /**
     * Gets whether the state of `self` can be accessed.
     * @returns whether the state of @self can be accessed
     */
    get_can_access_state(): boolean
    get_content_directory(): string | null
    /**
     * Gets the filename of the core.
     * @returns the filename of the core
     */
    get_filename(): string | null
    /**
     * Gets the FPS rate for the core's video output.
     * @returns the FPS rate for the core's video output
     */
    get_frames_per_second(): number
    /**
     * Gets whether a game has been loaded.
     * @returns whether a game has been loaded
     */
    get_game_loaded(): boolean
    /**
     * Gets whether the core has been initiated.
     * @returns whether the core has been initiated
     */
    get_is_initiated(): boolean
    /**
     * Gets the size of a memory region of `self`.
     * @param memory_type the type of memory
     * @returns the size of a memory region
     */
    get_memory_size(memory_type: MemoryType): number
    /**
     * Gets the option for the given key.
     * @param key the key of the option
     * @returns the option
     */
    get_option(key: string | null): Option
    get_runahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     * @returns the save directory of the core
     */
    get_save_directory(): string | null
    /**
     * Gets the speed rate at which to run the core.
     * @returns the speed rate
     */
    get_speed_rate(): number
    /**
     * Gets whether the core supports running with no game.
     * @returns whether the core supports running with no game
     */
    get_support_no_game(): boolean
    /**
     * Gets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @returns the system directory of the core
     */
    get_system_directory(): string | null
    /**
     * Gets the name of the user.
     * @returns the name of the user
     */
    get_user_name(): string | null
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     * @returns whether the core has an option for the given key
     */
    has_option(key: string | null): boolean
    /**
     * Creates a new #RetroControllerIterator which can be used to iterate through
     * the controllers plugged into `self`.
     * @returns a new #RetroControllerIterator
     */
    iterate_controllers(): ControllerIterator
    /**
     * Creates a new #RetroOptionIterator which can be used to iterate through the
     * options of `self`.
     * @returns a new #RetroOptionIterator
     */
    iterate_options(): OptionIterator
    /**
     * Iterate `self` for a frame.
     */
    iteration(): void
    /**
     * Loads a memory region of `self`.
     * @param memory_type the type of memory
     * @param filename a file to load the data from
     */
    load_memory(memory_type: MemoryType, filename: string | null): void
    /**
     * Loads the state of the `self`.
     * @param filename the file to load the state from
     */
    load_state(filename: string | null): void
    /**
     * Overrides default value for the option `key`. This can be used to set value
     * for a startup-only option.
     * 
     * You can use this before booting the core.
     * @param key the key of the option
     * @param value the default value
     */
    override_option_default(key: string | null, value: string | null): void
    /**
     * Resets `self`.
     */
    reset(): void
    /**
     * Starts running the core. If the core was stopped, it will restart from this
     * moment.
     */
    run(): void
    /**
     * Saves a memory region of `self`.
     * @param memory_type the type of memory
     * @param filename a file to save the data to
     */
    save_memory(memory_type: MemoryType, filename: string | null): void
    /**
     * Saves the state of `self`.
     * @param filename the file to save the state to
     */
    save_state(filename: string | null): void
    set_content_directory(content_directory: string | null): void
    /**
     * Plugs `controller` into the specified port number of `self`.
     * @param port the port number
     * @param controller a #RetroController
     */
    set_controller(port: number, controller: Controller | null): void
    /**
     * Sets the current media index.
     * 
     * You can use this after booting the core.
     * @param media_index the media index
     */
    set_current_media(media_index: number): void
    /**
     * Uses `controller` as the default controller for the given type. When a port
     * has no controller plugged plugged into it, the core will use the default
     * controllers instead.
     * @param controller_type a #RetroControllerType
     * @param controller a #RetroController
     */
    set_default_controller(controller_type: ControllerType, controller: Controller | null): void
    /**
     * Sets the widget whose key events will be forwarded to `self`.
     * @param widget a #GtkWidget, or %NULL
     */
    set_keyboard(widget: Gtk.Widget | null): void
    /**
     * Sets the medias to load into the core.
     * 
     * You can use this before booting the core.
     * @param uris the URIs
     */
    set_medias(uris: string[]): void
    set_runahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param save_directory the save directory
     */
    set_save_directory(save_directory: string | null): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speed_rate a speed rate
     */
    set_speed_rate(speed_rate: number): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param system_directory the system directory
     */
    set_system_directory(system_directory: string | null): void
    /**
     * Sets the name of the user.
     * @param user_name the user name
     */
    set_user_name(user_name: string | null): void
    /**
     * Stops running the core.
     */
    stop(): void

    // Own signals of Retro-1.Retro.Core

    connect(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    connect_after(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    emit(sigName: "crashed", message: string | null, ...args: any[]): void
    connect(sigName: "log", callback: Core.LogSignalCallback): number
    connect_after(sigName: "log", callback: Core.LogSignalCallback): number
    emit(sigName: "log", log_domain: string | null, log_level: GLib.LogLevelFlags, message: string | null, ...args: any[]): void
    connect(sigName: "message", callback: Core.MessageSignalCallback): number
    connect_after(sigName: "message", callback: Core.MessageSignalCallback): number
    emit(sigName: "message", message: string | null, frames: number, ...args: any[]): void
    connect(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    connect_after(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    emit(sigName: "shutdown", ...args: any[]): void
    connect(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    connect_after(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    emit(sigName: "video-output", pixdata: Pixdata, ...args: any[]): void

    // Class property signals of Retro-1.Retro.Core

    connect(sigName: "notify::api-version", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-version", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api-version", ...args: any[]): void
    connect(sigName: "notify::content-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-directory", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::frames-per-second", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frames-per-second", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frames-per-second", ...args: any[]): void
    connect(sigName: "notify::game-loaded", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::game-loaded", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::game-loaded", ...args: any[]): void
    connect(sigName: "notify::is-initiated", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-initiated", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-initiated", ...args: any[]): void
    connect(sigName: "notify::runahead", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::runahead", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::runahead", ...args: any[]): void
    connect(sigName: "notify::save-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::save-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::save-directory", ...args: any[]): void
    connect(sigName: "notify::speed-rate", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed-rate", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed-rate", ...args: any[]): void
    connect(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-no-game", ...args: any[]): void
    connect(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-directory", ...args: any[]): void
    connect(sigName: "notify::user-name", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Core extends GObject.Object {

    // Own properties of Retro-1.Retro.Core

    static name: string
    static $gtype: GObject.GType<Core>

    // Constructors of Retro-1.Retro.Core

    constructor(config?: Core.ConstructorProperties) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     * @returns a new #RetroCore
     */
    constructor(filename: string | null) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     * @returns a new #RetroCore
     */
    static new(filename: string | null): Core
    _init(config?: Core.ConstructorProperties): void
}

module CoreDescriptor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CoreDescriptor {

    // Owm methods of Retro-1.Retro.CoreDescriptor

    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_md5(firmware: string | null): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_path(firmware: string | null): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_sha512(firmware: string | null): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
     */
    get_firmwares(platform: string | null): string[]
    /**
     * Gets the icon, or %NULL if it doesn't exist.
     * @returns a #GIcon or %NULL
     */
    get_icon(): Gio.Icon | null
    /**
     * Gets the ID of `self`.
     * @returns the ID of @self, free it with g_free()
     */
    get_id(): string | null
    /**
     * Gets whether the core is an emulator, and hence need games to be loaded.
     * @returns whether the core is an emulator
     */
    get_is_emulator(): boolean
    /**
     * Gets whether the firmware is mandatory for the core to function.
     * @param firmware a firmware name
     * @returns whether the firmware is mandatory for the core to function
     */
    get_is_firmware_mandatory(firmware: string | null): boolean
    /**
     * Gets whether the core is a game, and hence can't load games.
     * @returns whether the core is a game
     */
    get_is_game(): boolean
    /**
     * Gets the list of MIME types accepted used by the core for this platform.
     * @param platform a platform name
     * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
     */
    get_mime_type(platform: string | null): string[]
    /**
     * Gets the module file name, or %NULL if it doesn't exist.
     * @returns a string or %NULL, free it with g_free()
     */
    get_module(): string | null
    /**
     * Gets the module file, or %NULL if it doesn't exist.
     * @returns a #GFile or %NULL
     */
    get_module_file(): Gio.File | null
    /**
     * Gets the name, or %NULL if it doesn't exist.
     * @returns a string or %NULL, free it with g_free()
     */
    get_name(): string | null
    /**
     * Gets whether the platform supports all of the given MIME types.
     * @param platform a platform name
     * @param mime_types the MIME types
     * @returns whether the platform supports all of the given MIME types
     */
    get_platform_supports_mime_types(platform: string | null, mime_types: string[]): boolean
    /**
     * Gets the URI of the file of `self`.
     * @returns the URI of the file of @self, free it with g_free()
     */
    get_uri(): string | null
    /**
     * Gets whether the firmware declares its MD5 fingerprint.
     * @param firmware a firmware name
     * @returns whether the firmware declares its MD5 fingerprint
     */
    has_firmware_md5(firmware: string | null): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     * @returns whether the firmware declares its SHA512 fingerprint
     */
    has_firmware_sha512(firmware: string | null): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     * @returns whether the platform has associated firmwares
     */
    has_firmwares(platform: string | null): boolean
    /**
     * Gets whether the core has an icon.
     * @returns whether the core has an icon
     */
    has_icon(): boolean
    /**
     * Gets whether the core descriptor declares the given platform.
     * @param platform a platform name
     * @returns whether the core descriptor declares the given platform
     */
    has_platform(platform: string | null): boolean

    // Class property signals of Retro-1.Retro.CoreDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-1.Retro.CoreDescriptor

    static name: string
    static $gtype: GObject.GType<CoreDescriptor>

    // Constructors of Retro-1.Retro.CoreDescriptor

    constructor(config?: CoreDescriptor.ConstructorProperties) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     * @returns a new #RetroCoreDescriptor
     */
    constructor(filename: string | null) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     * @returns a new #RetroCoreDescriptor
     */
    static new(filename: string | null): CoreDescriptor
    _init(config?: CoreDescriptor.ConstructorProperties): void
}

module CoreView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `controller-state-changed`
     */
    interface ControllerStateChangedSignalCallback {
        ($obj: CoreView): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Retro-1.Retro.CoreView

        can_grab_pointer?: boolean | null
        snap_pointer_to_borders?: boolean | null
    }

}

interface CoreView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Retro-1.Retro.CoreView

    can_grab_pointer: boolean
    snap_pointer_to_borders: boolean

    // Owm methods of Retro-1.Retro.CoreView

    /**
     * Creates a new #RetroController exposing `self` as the specified controller
     * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
     * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param controller_type the controller type to expose `self` as
     * @returns a new #RetroController
     */
    as_controller(controller_type: ControllerType): Controller
    /**
     * Gets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @returns whether the pointer should snap to the borders
     */
    get_can_grab_pointer(): boolean
    /**
     * Gets a flag representing the capabilities of `self` when exposed as a
     * controller. See retro_controller_get_capabilities() for more information on
     * the flag.
     * 
     * See retro_core_view_as_controller() to know the capabilities of
     * #RetroCoreView when exposed as a controller.
     * @returns the capabilities flag of @self when exposed as a controller
     */
    get_controller_capabilities(): number
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     * @returns the input's state
     */
    get_input_state(input: Input): number
    /**
     * Gets the currently set key joypad mapping.
     * @returns a #RetroKeyJoypadMapping
     */
    get_key_joypad_mapping(): KeyJoypadMapping
    /**
     * Gets the currently displayed video frame.
     * @returns a #GdkPixbuf
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @returns whether the pointer should snap to the borders
     */
    get_snap_pointer_to_borders(): boolean
    /**
     * Sets the `self` as the default controllers of `core`.
     * @param core a #RetroCore
     */
    set_as_default_controller(core: Core | null): void
    /**
     * Sets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param can_grab_pointer whether the pointer should be grabbed when clicking on the view
     */
    set_can_grab_pointer(can_grab_pointer: boolean): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    set_core(core: Core | null): void
    /**
     * Sets the video filter to use to render the core's video on `self`.
     * @param filter a #RetroVideoFilter
     */
    set_filter(filter: VideoFilter): void
    /**
     * Sets the key joypad mapping on `self`. If given mapping is %NULL, then set to
     * an empty configuration.
     * @param mapping a #RetroKeyJoypadMapping
     */
    set_key_joypad_mapping(mapping: KeyJoypadMapping | null): void
    /**
     * Sets `pixbuf` as the currently displayed video frame.
     * 
     * retro_pixbuf_set_aspect_ratio() can be used to specify the aspect ratio for
     * the pixbuf. Otherwise the core's aspect ratio will be used.
     * @param pixbuf a #GdkPixbuf
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @param snap_pointer_to_borders whether the pointer should snap to the borders
     */
    set_snap_pointer_to_borders(snap_pointer_to_borders: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own signals of Retro-1.Retro.CoreView

    connect(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    connect_after(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    emit(sigName: "controller-state-changed", ...args: any[]): void

    // Class property signals of Retro-1.Retro.CoreView

    connect(sigName: "notify::can-grab-pointer", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-grab-pointer", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-grab-pointer", ...args: any[]): void
    connect(sigName: "notify::snap-pointer-to-borders", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-pointer-to-borders", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap-pointer-to-borders", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CoreView extends Gtk.EventBox {

    // Own properties of Retro-1.Retro.CoreView

    static name: string
    static $gtype: GObject.GType<CoreView>

    // Constructors of Retro-1.Retro.CoreView

    constructor(config?: CoreView.ConstructorProperties) 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     * @returns a new #RetroCoreView
     */
    constructor() 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     * @returns a new #RetroCoreView
     */
    static new(): CoreView

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     * @returns a new #GtkEventBox
     */
    static new(): Gtk.EventBox
    _init(config?: CoreView.ConstructorProperties): void
}

module KeyJoypadMapping {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface KeyJoypadMapping {

    // Owm methods of Retro-1.Retro.KeyJoypadMapping

    /**
     * Gets the mapping key code for the joypad button id.
     * @param button joypad button id
     * @returns mapping key code
     */
    get_button_key(button: JoypadId): number
    /**
     * Maps the joypad button id to mapping key code.
     * @param button joypad button id
     * @param hardware_keycode mapping key code
     */
    set_button_key(button: JoypadId, hardware_keycode: number): void

    // Class property signals of Retro-1.Retro.KeyJoypadMapping

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-1.Retro.KeyJoypadMapping

    static name: string
    static $gtype: GObject.GType<KeyJoypadMapping>

    // Constructors of Retro-1.Retro.KeyJoypadMapping

    constructor(config?: KeyJoypadMapping.ConstructorProperties) 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     * @returns a new #RetroKeyJoypadMapping
     */
    constructor() 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     * @returns a new #RetroKeyJoypadMapping
     */
    static new(): KeyJoypadMapping
    /**
     * Creates a new #RetroKeyJoypadMapping with the default mapping.
     * @constructor 
     * @returns a new #RetroKeyJoypadMapping
     */
    static new_default(): KeyJoypadMapping
    _init(config?: KeyJoypadMapping.ConstructorProperties): void
}

module ModuleIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ModuleIterator {

    // Owm methods of Retro-1.Retro.ModuleIterator

    /**
     * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
     * or %NULL if the end was reached.
     * @returns a #RetroCoreDescriptor, or %NULL
     */
    get(): CoreDescriptor | null
    /**
     * Fetch the next #RetroModuleIterator.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): boolean

    // Class property signals of Retro-1.Retro.ModuleIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModuleIterator extends GObject.Object {

    // Own properties of Retro-1.Retro.ModuleIterator

    static name: string
    static $gtype: GObject.GType<ModuleIterator>

    // Constructors of Retro-1.Retro.ModuleIterator

    constructor(config?: ModuleIterator.ConstructorProperties) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookup_paths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleIterator
     */
    constructor(lookup_paths: string[], recursive: boolean) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookup_paths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleIterator
     */
    static new(lookup_paths: string[], recursive: boolean): ModuleIterator
    _init(config?: ModuleIterator.ConstructorProperties): void
}

module ModuleQuery {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ModuleQuery {

    // Owm methods of Retro-1.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     * @returns a new #RetroModuleIterator
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-1.Retro.ModuleQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModuleQuery extends GObject.Object {

    // Own properties of Retro-1.Retro.ModuleQuery

    static name: string
    static $gtype: GObject.GType<ModuleQuery>

    // Constructors of Retro-1.Retro.ModuleQuery

    constructor(config?: ModuleQuery.ConstructorProperties) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleQuery
     */
    constructor(recursive: boolean) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleQuery
     */
    static new(recursive: boolean): ModuleQuery
    _init(config?: ModuleQuery.ConstructorProperties): void
}

module Option {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    interface ValueChangedSignalCallback {
        ($obj: Option): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Option {

    // Owm methods of Retro-1.Retro.Option

    /**
     * Gets the description of `self`.
     * @returns the description of @self
     */
    get_description(): string | null
    /**
     * Gets the key of `self`.
     * @returns the key of @self
     */
    get_key(): string | null
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    get_value(): string | null
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    get_values(): string[]
    /**
     * Sets the value for `self`. An error will be thrown if the value is invalid for
     * `self`.
     * @param value the value
     */
    set_value(value: string | null): void

    // Own signals of Retro-1.Retro.Option

    connect(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-1.Retro.Option

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Option extends GObject.Object {

    // Own properties of Retro-1.Retro.Option

    static name: string
    static $gtype: GObject.GType<Option>

    // Constructors of Retro-1.Retro.Option

    constructor(config?: Option.ConstructorProperties) 
    _init(config?: Option.ConstructorProperties): void
}

module OptionIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface OptionIterator {

    // Owm methods of Retro-1.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-1.Retro.OptionIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OptionIterator extends GObject.Object {

    // Own properties of Retro-1.Retro.OptionIterator

    static name: string
    static $gtype: GObject.GType<OptionIterator>

    // Constructors of Retro-1.Retro.OptionIterator

    constructor(config?: OptionIterator.ConstructorProperties) 
    _init(config?: OptionIterator.ConstructorProperties): void
}

interface ControllerInterface {

    // Own fields of Retro-1.Retro.ControllerInterface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_input_state: (self: Controller, input: Input) => number
    get_controller_type: (self: Controller) => ControllerType
    get_capabilities: (self: Controller) => number
    get_supports_rumble: (self: Controller) => boolean
    set_rumble_state: (self: Controller, effect: RumbleEffect, strength: number) => void
}

/**
 * An interface for a controller, e.g. a gamepad.
 * @record 
 */
abstract class ControllerInterface {

    // Own properties of Retro-1.Retro.ControllerInterface

    static name: string
}

interface ControllerIteratorClass {

    // Own fields of Retro-1.Retro.ControllerIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class ControllerIteratorClass {

    // Own properties of Retro-1.Retro.ControllerIteratorClass

    static name: string
}

interface CoreClass {

    // Own fields of Retro-1.Retro.CoreClass

    parent_class: GObject.ObjectClass
}

abstract class CoreClass {

    // Own properties of Retro-1.Retro.CoreClass

    static name: string
}

interface CoreDescriptorClass {

    // Own fields of Retro-1.Retro.CoreDescriptorClass

    parent_class: GObject.ObjectClass
}

abstract class CoreDescriptorClass {

    // Own properties of Retro-1.Retro.CoreDescriptorClass

    static name: string
}

interface CoreViewClass {

    // Own fields of Retro-1.Retro.CoreViewClass

    parent_class: Gtk.EventBoxClass
}

abstract class CoreViewClass {

    // Own properties of Retro-1.Retro.CoreViewClass

    static name: string
}

interface KeyJoypadMappingClass {

    // Own fields of Retro-1.Retro.KeyJoypadMappingClass

    parent_class: GObject.ObjectClass
}

abstract class KeyJoypadMappingClass {

    // Own properties of Retro-1.Retro.KeyJoypadMappingClass

    static name: string
}

interface ModuleIteratorClass {

    // Own fields of Retro-1.Retro.ModuleIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class ModuleIteratorClass {

    // Own properties of Retro-1.Retro.ModuleIteratorClass

    static name: string
}

interface ModuleQueryClass {

    // Own fields of Retro-1.Retro.ModuleQueryClass

    parent_class: GObject.ObjectClass
}

abstract class ModuleQueryClass {

    // Own properties of Retro-1.Retro.ModuleQueryClass

    static name: string
}

interface OptionClass {

    // Own fields of Retro-1.Retro.OptionClass

    parent_class: GObject.ObjectClass
}

abstract class OptionClass {

    // Own properties of Retro-1.Retro.OptionClass

    static name: string
}

interface OptionIteratorClass {

    // Own fields of Retro-1.Retro.OptionIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class OptionIteratorClass {

    // Own properties of Retro-1.Retro.OptionIteratorClass

    static name: string
}

interface Pixdata {

    // Owm methods of Retro-1.Retro.Pixdata

    /**
     * Copies `self` into a new #RetroPixdata.
     * @returns a new #RetroPixdata, use retro_pixdata_free() to free it
     */
    copy(): Pixdata
    /**
     * Frees the given #RetroPixdata object.
     */
    free(): void
    /**
     * Gets the aspect ratio the video should be rendered with.
     * @returns the aspect ratio
     */
    get_aspect_ratio(): number
    /**
     * Gets the height of `self`.
     * @returns the height
     */
    get_height(): number
    /**
     * Gets the width of `self`.
     * @returns the width
     */
    get_width(): number
    /**
     * Loads an OpenGL texture from `self`.
     * @returns whether the loading was successful
     */
    load_gl_texture(): boolean
    /**
     * Creates a new #GdkPixbuf from `self`.
     * 
     * The #GdkPixbuf stores the intended aspect-ratio, you can access it via
     * retro_pixbuf_get_aspect_ratio().
     * @returns a new #RetroPixdata
     */
    to_pixbuf(): GdkPixbuf.Pixbuf
}

class Pixdata {

    // Own properties of Retro-1.Retro.Pixdata

    static name: string
}

interface Input {

    // Owm methods of Retro-1.Retro.Input

    /**
     * Copies `self` into a new #RetroInput.
     * @returns a new #RetroInput, use retro_input_free() to free it
     */
    copy(): Input
    /**
     * Frees the given #RetroInput.
     */
    free(): void
    /**
     * Gets the analog id and index of `self,` if any.
     * @returns whether the id and the index were retrieved
     */
    get_analog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     * @returns the controller type of @self
     */
    get_controller_type(): ControllerType
    /**
     * Gets the joypad id of `self,` if any.
     * @returns whether the id was retrieved
     */
    get_joypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of `self,` if any.
     * @returns whether the id was retrieved
     */
    get_lightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of `self,` if any.
     * @returns whether the id was retrieved
     */
    get_mouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of `self,` if any.
     * @returns whether the id was retrieved
     */
    get_pointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

class Input {

    // Own properties of Retro-1.Retro.Input

    static name: string

    // Constructors of Retro-1.Retro.Input

    /**
     * Creates a new #RetroInput.
     * @constructor 
     * @returns a new #RetroInput, use retro_input_free() to free it
     */
    constructor() 
    /**
     * Creates a new #RetroInput.
     * @constructor 
     * @returns a new #RetroInput, use retro_input_free() to free it
     */
    static new(): Input
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

export default Retro;
// END