
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

/**
 * Represents the axes of the analog sticks for the Libretro gamepad.
 */
export enum AnalogId {
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
export enum AnalogIndex {
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
export enum ControllerType {
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
export enum JoypadId {
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
export enum LightgunId {
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
export enum MemoryType {
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
export enum MouseId {
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
export enum PointerId {
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
export enum RumbleEffect {
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
export enum VideoFilter {
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
export function g_log(sender: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string): void
export function gtk_get_resource(): Gio.Resource
export function joypad_id_from_button_code(button_code: number): JoypadId
export function joypad_id_to_button_code(joypad_id: JoypadId): number
/**
 * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
 * @param pixbuf a #GdkPixbuf
 * @returns the aspect ratio, or 0 if the option is not set or its value is invalid.
 */
export function pixbuf_get_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf): number
/**
 * Sets the aspect ratio of `pixbuf` by setting the 'aspect-ratio' pixbuf option.
 * Use retro_pixbuf_get_aspect_ratio() to retrieve it.
 * @param pixbuf a #GdkPixbuf
 * @param aspect_ratio the aspect ratio value
 */
export function pixbuf_set_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf, aspect_ratio: number): void
/**
 * Gets a #RetroVideoFilter from it's name. It defaults to
 * RETRO_VIDEO_FILTER_SMOOTH in case of error.
 * @param filter a filter name
 * @returns a #RetroVideoFilter
 */
export function video_filter_from_string(filter: string): VideoFilter
export module Controller {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Controller {

    // Owm methods of Retro-0.14.Retro.Controller

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
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controller_type a #RetroControllerType
     * @returns whether @self has the capability
     */
    has_capability(controller_type: ControllerType): boolean
    /**
     * Polls the pending input events for `self`.
     */
    poll(): void
    /**
     * Sets the rumble state of `self`.
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     * @returns whether the rumble state has been successfully set.
     */
    set_rumble_state(effect: RumbleEffect, strength: number): boolean

    // Own virtual methods of Retro-0.14.Retro.Controller

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
     * Polls the pending input events for `self`.
     * @virtual 
     */
    vfunc_poll(): void
    /**
     * Sets the rumble state of `self`.
     * @virtual 
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     * @returns whether the rumble state has been successfully set.
     */
    vfunc_set_rumble_state(effect: RumbleEffect, strength: number): boolean

    // Class property signals of Retro-0.14.Retro.Controller

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Controller extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Controller

    static name: string
    static $gtype: GObject.GType<Controller>

    // Constructors of Retro-0.14.Retro.Controller

    constructor(config?: Controller.ConstructorProperties) 
    _init(config?: Controller.ConstructorProperties): void
}

export module ControllerIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ControllerIterator {

    // Owm methods of Retro-0.14.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller | null ]

    // Class property signals of Retro-0.14.Retro.ControllerIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ControllerIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ControllerIterator

    static name: string
    static $gtype: GObject.GType<ControllerIterator>

    // Constructors of Retro-0.14.Retro.ControllerIterator

    constructor(config?: ControllerIterator.ConstructorProperties) 
    _init(config?: ControllerIterator.ConstructorProperties): void
}

export module Core {

    // Signal callback interfaces

    /**
     * Signal callback interface for `audio-output`
     */
    export interface AudioOutputSignalCallback {
        ($obj: Core, data: Uint8Array, sample_rate: number): void
    }

    /**
     * Signal callback interface for `log`
     */
    export interface LogSignalCallback {
        ($obj: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string | null): void
    }

    /**
     * Signal callback interface for `message`
     */
    export interface MessageSignalCallback {
        ($obj: Core, message: string | null, frames: number): boolean
    }

    /**
     * Signal callback interface for `options-set`
     */
    export interface OptionsSetSignalCallback {
        ($obj: Core): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        ($obj: Core): boolean
    }

    /**
     * Signal callback interface for `video-output`
     */
    export interface VideoOutputSignalCallback {
        ($obj: Core, pixdata: Pixdata): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.Core

        content_directory?: string | null
        /**
         * The number of frame to run ahead of time.
         */
        runahead?: number | null
        /**
         * The save directory of the core.
         * 
         * The core will save some data here.
         */
        save_directory?: string | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        system_directory?: string | null
        contentDirectory?: string | null
        /**
         * The save directory of the core.
         * 
         * The core will save some data here.
         */
        saveDirectory?: string | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        systemDirectory?: string | null
    }

}

export interface Core {

    // Own properties of Retro-0.14.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly api_version: number
    /**
     * The Libretro API version implement by the core.
     */
    readonly apiVersion: number
    content_directory: string | null
    contentDirectory: string | null
    /**
     * The filename of the core.
     */
    readonly filename: string | null
    /**
     * The FPS rate for the core's video output.
     */
    readonly frames_per_second: number
    /**
     * The FPS rate for the core's video output.
     */
    readonly framesPerSecond: number
    /**
     * Whether a game has been loaded.
     */
    readonly game_loaded: boolean
    /**
     * Whether a game has been loaded.
     */
    readonly gameLoaded: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly is_initiated: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly isInitiated: boolean
    /**
     * The number of frame to run ahead of time.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    save_directory: string | null
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    saveDirectory: string | null
    /**
     * Whether the core supports running with no game.
     */
    readonly support_no_game: boolean
    /**
     * Whether the core supports running with no game.
     */
    readonly supportNoGame: boolean
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    system_directory: string | null
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    systemDirectory: string | null

    // Owm methods of Retro-0.14.Retro.Core

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
    get_content_directory(): string
    /**
     * Gets the filename of the core.
     * @returns the filename of the core
     */
    get_filename(): string
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
     * Gets a memory region of `self`.
     * @param memory_type the type of memory
     * @returns a #GBytes, or %NULL
     */
    get_memory(memory_type: MemoryType): GLib.Bytes
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
    get_option(key: string): Option
    get_runahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     * @returns the save directory of the core
     */
    get_save_directory(): string
    /**
     * Gets the state of `self`.
     * @returns a #GBytes, or %NULL
     */
    get_state(): GLib.Bytes
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
    get_system_directory(): string
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     * @returns whether the core has an option for the given key
     */
    has_option(key: string): boolean
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
     * Resets `self`.
     */
    reset(): void
    /**
     * Iterate `self` for a frame.
     */
    run(): void
    set_content_directory(content_directory: string): void
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
    /**
     * Sets a memory region of `self`.
     * @param memory_type the type of memory
     * @param bytes a #GBytes
     */
    set_memory(memory_type: MemoryType, bytes: GLib.Bytes): void
    set_runahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param save_directory the save directory
     */
    set_save_directory(save_directory: string): void
    /**
     * Sets the state of the `self`.
     * @param bytes a #GBytes
     */
    set_state(bytes: GLib.Bytes): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param system_directory the system directory
     */
    set_system_directory(system_directory: string): void

    // Own signals of Retro-0.14.Retro.Core

    connect(sigName: "audio-output", callback: Core.AudioOutputSignalCallback): number
    connect_after(sigName: "audio-output", callback: Core.AudioOutputSignalCallback): number
    emit(sigName: "audio-output", data: Uint8Array, sample_rate: number, ...args: any[]): void
    connect(sigName: "log", callback: Core.LogSignalCallback): number
    connect_after(sigName: "log", callback: Core.LogSignalCallback): number
    emit(sigName: "log", log_domain: string | null, log_level: GLib.LogLevelFlags, message: string | null, ...args: any[]): void
    connect(sigName: "message", callback: Core.MessageSignalCallback): number
    connect_after(sigName: "message", callback: Core.MessageSignalCallback): number
    emit(sigName: "message", message: string | null, frames: number, ...args: any[]): void
    connect(sigName: "options-set", callback: Core.OptionsSetSignalCallback): number
    connect_after(sigName: "options-set", callback: Core.OptionsSetSignalCallback): number
    emit(sigName: "options-set", ...args: any[]): void
    connect(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    connect_after(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    emit(sigName: "shutdown", ...args: any[]): void
    connect(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    connect_after(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    emit(sigName: "video-output", pixdata: Pixdata, ...args: any[]): void

    // Class property signals of Retro-0.14.Retro.Core

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
    connect(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-no-game", ...args: any[]): void
    connect(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Core extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Core

    static name: string
    static $gtype: GObject.GType<Core>

    // Constructors of Retro-0.14.Retro.Core

    constructor(config?: Core.ConstructorProperties) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     * @returns a new #RetroCore
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     * @returns a new #RetroCore
     */
    static new(filename: string): Core
    _init(config?: Core.ConstructorProperties): void
}

export module CoreDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CoreDescriptor {

    // Owm methods of Retro-0.14.Retro.CoreDescriptor

    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_md5(firmware: string): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_path(firmware: string): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    get_firmware_sha512(firmware: string): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
     */
    get_firmwares(platform: string): string[]
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
    get_is_firmware_mandatory(firmware: string): boolean
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
    get_mime_type(platform: string): string[]
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
    get_platform_supports_mime_types(platform: string, mime_types: string[]): boolean
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
    has_firmware_md5(firmware: string): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     * @returns whether the firmware declares its SHA512 fingerprint
     */
    has_firmware_sha512(firmware: string): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     * @returns whether the platform has associated firmwares
     */
    has_firmwares(platform: string): boolean
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
    has_platform(platform: string): boolean

    // Class property signals of Retro-0.14.Retro.CoreDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-0.14.Retro.CoreDescriptor

    static name: string
    static $gtype: GObject.GType<CoreDescriptor>

    // Constructors of Retro-0.14.Retro.CoreDescriptor

    constructor(config?: CoreDescriptor.ConstructorProperties) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     * @returns a new #RetroCoreDescriptor
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     * @returns a new #RetroCoreDescriptor
     */
    static new(filename: string): CoreDescriptor
    _init(config?: CoreDescriptor.ConstructorProperties): void
}

export module CoreView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.CoreView

        can_grab_pointer?: boolean | null
        snap_pointer_to_borders?: boolean | null
        canGrabPointer?: boolean | null
        snapPointerToBorders?: boolean | null
    }

}

export interface CoreView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Retro-0.14.Retro.CoreView

    can_grab_pointer: boolean
    canGrabPointer: boolean
    snap_pointer_to_borders: boolean
    snapPointerToBorders: boolean

    // Owm methods of Retro-0.14.Retro.CoreView

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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void
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
    child_notify(child_property: string): void

    // Class property signals of Retro-0.14.Retro.CoreView

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

export class CoreView extends Gtk.EventBox {

    // Own properties of Retro-0.14.Retro.CoreView

    static name: string
    static $gtype: GObject.GType<CoreView>

    // Constructors of Retro-0.14.Retro.CoreView

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

export module KeyJoypadMapping {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyJoypadMapping {

    // Owm methods of Retro-0.14.Retro.KeyJoypadMapping

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

    // Class property signals of Retro-0.14.Retro.KeyJoypadMapping

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-0.14.Retro.KeyJoypadMapping

    static name: string
    static $gtype: GObject.GType<KeyJoypadMapping>

    // Constructors of Retro-0.14.Retro.KeyJoypadMapping

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

export module MainLoop {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.MainLoop

        core?: Core | null
        speed_rate?: number | null
        speedRate?: number | null
    }

}

export interface MainLoop {

    // Own properties of Retro-0.14.Retro.MainLoop

    core: Core
    speed_rate: number
    speedRate: number

    // Owm methods of Retro-0.14.Retro.MainLoop

    /**
     * Gets the core handled by `self`.
     * @returns a #RetroCore
     */
    get_core(): Core
    /**
     * Gets the speed rate at which to run the core.
     * @returns the speed rate
     */
    get_speed_rate(): number
    /**
     * Resets the core. Results depend on the core's implementation.
     */
    reset(): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    set_core(core: Core | null): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speed_rate a speed rate
     */
    set_speed_rate(speed_rate: number): void
    /**
     * Starts running the core. If the core was stopped, it will restart from this moment.
     */
    start(): void
    /**
     * Stops running the core.
     */
    stop(): void

    // Class property signals of Retro-0.14.Retro.MainLoop

    connect(sigName: "notify::core", callback: (($obj: MainLoop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::core", callback: (($obj: MainLoop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::core", ...args: any[]): void
    connect(sigName: "notify::speed-rate", callback: (($obj: MainLoop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed-rate", callback: (($obj: MainLoop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed-rate", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MainLoop extends GObject.Object {

    // Own properties of Retro-0.14.Retro.MainLoop

    static name: string
    static $gtype: GObject.GType<MainLoop>

    // Constructors of Retro-0.14.Retro.MainLoop

    constructor(config?: MainLoop.ConstructorProperties) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     * @returns a new #RetroMainLoop
     */
    constructor(core: Core) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     * @returns a new #RetroMainLoop
     */
    static new(core: Core): MainLoop
    _init(config?: MainLoop.ConstructorProperties): void
}

export module ModuleIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ModuleIterator {

    // Owm methods of Retro-0.14.Retro.ModuleIterator

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

    // Class property signals of Retro-0.14.Retro.ModuleIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ModuleIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleIterator

    static name: string
    static $gtype: GObject.GType<ModuleIterator>

    // Constructors of Retro-0.14.Retro.ModuleIterator

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

export module ModuleQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ModuleQuery {

    // Owm methods of Retro-0.14.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     * @returns a new #RetroModuleIterator
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-0.14.Retro.ModuleQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ModuleQuery extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleQuery

    static name: string
    static $gtype: GObject.GType<ModuleQuery>

    // Constructors of Retro-0.14.Retro.ModuleQuery

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

export module Option {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        ($obj: Option): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Option {

    // Owm methods of Retro-0.14.Retro.Option

    /**
     * Gets the description of `self`.
     * @returns the description of @self
     */
    get_description(): string
    /**
     * Gets the key of `self`.
     * @returns the key of @self
     */
    get_key(): string
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    get_value(): string
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
    set_value(value: string): void

    // Own signals of Retro-0.14.Retro.Option

    connect(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-0.14.Retro.Option

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Option extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Option

    static name: string
    static $gtype: GObject.GType<Option>

    // Constructors of Retro-0.14.Retro.Option

    constructor(config?: Option.ConstructorProperties) 
    _init(config?: Option.ConstructorProperties): void
}

export module OptionIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface OptionIterator {

    // Owm methods of Retro-0.14.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-0.14.Retro.OptionIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OptionIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.OptionIterator

    static name: string
    static $gtype: GObject.GType<OptionIterator>

    // Constructors of Retro-0.14.Retro.OptionIterator

    constructor(config?: OptionIterator.ConstructorProperties) 
    _init(config?: OptionIterator.ConstructorProperties): void
}

export interface ControllerInterface {

    // Own fields of Retro-0.14.Retro.ControllerInterface

    parent_iface: GObject.TypeInterface
    poll: (self: Controller) => void
    get_input_state: (self: Controller, input: Input) => number
    get_controller_type: (self: Controller) => ControllerType
    get_capabilities: (self: Controller) => number
    set_rumble_state: (self: Controller, effect: RumbleEffect, strength: number) => boolean
}

export abstract class ControllerInterface {

    // Own properties of Retro-0.14.Retro.ControllerInterface

    static name: string
}

export interface ControllerIteratorClass {

    // Own fields of Retro-0.14.Retro.ControllerIteratorClass

    parent_class: GObject.ObjectClass
}

export abstract class ControllerIteratorClass {

    // Own properties of Retro-0.14.Retro.ControllerIteratorClass

    static name: string
}

export interface CoreClass {

    // Own fields of Retro-0.14.Retro.CoreClass

    parent_class: GObject.ObjectClass
}

export abstract class CoreClass {

    // Own properties of Retro-0.14.Retro.CoreClass

    static name: string
}

export interface CoreDescriptorClass {

    // Own fields of Retro-0.14.Retro.CoreDescriptorClass

    parent_class: GObject.ObjectClass
}

export abstract class CoreDescriptorClass {

    // Own properties of Retro-0.14.Retro.CoreDescriptorClass

    static name: string
}

export interface CoreViewClass {

    // Own fields of Retro-0.14.Retro.CoreViewClass

    parent_class: Gtk.EventBoxClass
}

export abstract class CoreViewClass {

    // Own properties of Retro-0.14.Retro.CoreViewClass

    static name: string
}

export interface KeyJoypadMappingClass {

    // Own fields of Retro-0.14.Retro.KeyJoypadMappingClass

    parent_class: GObject.ObjectClass
}

export abstract class KeyJoypadMappingClass {

    // Own properties of Retro-0.14.Retro.KeyJoypadMappingClass

    static name: string
}

export interface MainLoopClass {

    // Own fields of Retro-0.14.Retro.MainLoopClass

    parent_class: GObject.ObjectClass
}

export abstract class MainLoopClass {

    // Own properties of Retro-0.14.Retro.MainLoopClass

    static name: string
}

export interface ModuleIteratorClass {

    // Own fields of Retro-0.14.Retro.ModuleIteratorClass

    parent_class: GObject.ObjectClass
}

export abstract class ModuleIteratorClass {

    // Own properties of Retro-0.14.Retro.ModuleIteratorClass

    static name: string
}

export interface ModuleQueryClass {

    // Own fields of Retro-0.14.Retro.ModuleQueryClass

    parent_class: GObject.ObjectClass
}

export abstract class ModuleQueryClass {

    // Own properties of Retro-0.14.Retro.ModuleQueryClass

    static name: string
}

export interface OptionClass {

    // Own fields of Retro-0.14.Retro.OptionClass

    parent_class: GObject.ObjectClass
}

export abstract class OptionClass {

    // Own properties of Retro-0.14.Retro.OptionClass

    static name: string
}

export interface OptionIteratorClass {

    // Own fields of Retro-0.14.Retro.OptionIteratorClass

    parent_class: GObject.ObjectClass
}

export abstract class OptionIteratorClass {

    // Own properties of Retro-0.14.Retro.OptionIteratorClass

    static name: string
}

export interface Pixdata {

    // Owm methods of Retro-0.14.Retro.Pixdata

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
     * @returns a new #RetroPixdata
     */
    to_pixbuf(): GdkPixbuf.Pixbuf
}

export class Pixdata {

    // Own properties of Retro-0.14.Retro.Pixdata

    static name: string
}

export interface Input {

    // Owm methods of Retro-0.14.Retro.Input

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
     * Gets the analog id and index of %self, if any.
     * @returns whether the id and the index were retrieved
     */
    get_analog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     * @returns the controller type of @self
     */
    get_controller_type(): ControllerType
    /**
     * Gets the joypad id of %self, if any.
     * @returns whether the id was retrieved
     */
    get_joypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of %self, if any.
     * @returns whether the id was retrieved
     */
    get_lightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of %self, if any.
     * @returns whether the id was retrieved
     */
    get_mouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of %self, if any.
     * @returns whether the id was retrieved
     */
    get_pointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

export class Input {

    // Own properties of Retro-0.14.Retro.Input

    static name: string

    // Constructors of Retro-0.14.Retro.Input

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
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END