// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Retro-0.14
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
function g_log(sender: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string): void
function gtk_get_resource(): Gio.Resource
function joypad_id_from_button_code(button_code: number): JoypadId
function joypad_id_to_button_code(joypad_id: JoypadId): number
/**
 * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
 * @param pixbuf a #GdkPixbuf
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
 */
function video_filter_from_string(filter: string): VideoFilter
interface Controller_ConstructProps extends GObject.Object_ConstructProps {
}

interface Controller {

    // Owm methods of Retro-0.14.Retro.Controller

    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     */
    get_capabilities(): number
    /**
     * Gets the main type of the controller.
     */
    get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    get_input_state(input: Input): number
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controller_type a #RetroControllerType
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
     */
    vfunc_get_capabilities(): number
    /**
     * Gets the main type of the controller.
     * @virtual 
     */
    vfunc_get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @virtual 
     * @param input a #RetroInput to query `self`
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
     */
    vfunc_set_rumble_state(effect: RumbleEffect, strength: number): boolean

    // Class property signals of Retro-0.14.Retro.Controller

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Controller extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Controller

    static name: string
    static $gtype: GObject.GType<Controller>

    // Constructors of Retro-0.14.Retro.Controller

    constructor(config?: Controller_ConstructProps) 
    _init(config?: Controller_ConstructProps): void
}

interface ControllerIterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface ControllerIterator {

    // Owm methods of Retro-0.14.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller | null ]

    // Class property signals of Retro-0.14.Retro.ControllerIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ControllerIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ControllerIterator

    static name: string
    static $gtype: GObject.GType<ControllerIterator>

    // Constructors of Retro-0.14.Retro.ControllerIterator

    constructor(config?: ControllerIterator_ConstructProps) 
    _init(config?: ControllerIterator_ConstructProps): void
}

interface Core_ConstructProps extends GObject.Object_ConstructProps {

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
}

/**
 * Signal callback interface for `audio-output`
 */
interface Core_AudioOutputSignalCallback {
    ($obj: Core, data: Uint8Array, sample_rate: number): void
}

/**
 * Signal callback interface for `log`
 */
interface Core_LogSignalCallback {
    ($obj: Core, log_domain: string, log_level: GLib.LogLevelFlags, message: string): void
}

/**
 * Signal callback interface for `message`
 */
interface Core_MessageSignalCallback {
    ($obj: Core, message: string, frames: number): boolean
}

/**
 * Signal callback interface for `options-set`
 */
interface Core_OptionsSetSignalCallback {
    ($obj: Core): void
}

/**
 * Signal callback interface for `shutdown`
 */
interface Core_ShutdownSignalCallback {
    ($obj: Core): boolean
}

/**
 * Signal callback interface for `video-output`
 */
interface Core_VideoOutputSignalCallback {
    ($obj: Core, pixdata: Pixdata): void
}

interface Core {

    // Own properties of Retro-0.14.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly api_version: number
    content_directory: string
    /**
     * The filename of the core.
     */
    readonly filename: string
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
     * The number of frame to run ahead of time.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    save_directory: string
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
    system_directory: string

    // Owm methods of Retro-0.14.Retro.Core

    /**
     * This initializes `self,` loads its available options and loads the medias. You
     * need to boot `self` before using some of its methods.
     */
    boot(): void
    /**
     * Gets the Libretro API version implement by the core.
     */
    get_api_version(): number
    /**
     * Gets whether the state of `self` can be accessed.
     */
    get_can_access_state(): boolean
    get_content_directory(): string
    /**
     * Gets the filename of the core.
     */
    get_filename(): string
    /**
     * Gets the FPS rate for the core's video output.
     */
    get_frames_per_second(): number
    /**
     * Gets whether a game has been loaded.
     */
    get_game_loaded(): boolean
    /**
     * Gets whether the core has been initiated.
     */
    get_is_initiated(): boolean
    /**
     * Gets a memory region of `self`.
     * @param memory_type the type of memory
     */
    get_memory(memory_type: MemoryType): GLib.Bytes
    /**
     * Gets the size of a memory region of `self`.
     * @param memory_type the type of memory
     */
    get_memory_size(memory_type: MemoryType): number
    /**
     * Gets the option for the given key.
     * @param key the key of the option
     */
    get_option(key: string): Option
    get_runahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     */
    get_save_directory(): string
    /**
     * Gets the state of `self`.
     */
    get_state(): GLib.Bytes
    /**
     * Gets whether the core supports running with no game.
     */
    get_support_no_game(): boolean
    /**
     * Gets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    get_system_directory(): string
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     */
    has_option(key: string): boolean
    /**
     * Creates a new #RetroControllerIterator which can be used to iterate through
     * the controllers plugged into `self`.
     */
    iterate_controllers(): ControllerIterator
    /**
     * Creates a new #RetroOptionIterator which can be used to iterate through the
     * options of `self`.
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

    connect(sigName: "audio-output", callback: Core_AudioOutputSignalCallback): number
    connect_after(sigName: "audio-output", callback: Core_AudioOutputSignalCallback): number
    emit(sigName: "audio-output", data: Uint8Array, sample_rate: number, ...args: any[]): void
    connect(sigName: "log", callback: Core_LogSignalCallback): number
    connect_after(sigName: "log", callback: Core_LogSignalCallback): number
    emit(sigName: "log", log_domain: string, log_level: GLib.LogLevelFlags, message: string, ...args: any[]): void
    connect(sigName: "message", callback: Core_MessageSignalCallback): number
    connect_after(sigName: "message", callback: Core_MessageSignalCallback): number
    emit(sigName: "message", message: string, frames: number, ...args: any[]): void
    connect(sigName: "options-set", callback: Core_OptionsSetSignalCallback): number
    connect_after(sigName: "options-set", callback: Core_OptionsSetSignalCallback): number
    emit(sigName: "options-set", ...args: any[]): void
    connect(sigName: "shutdown", callback: Core_ShutdownSignalCallback): number
    connect_after(sigName: "shutdown", callback: Core_ShutdownSignalCallback): number
    emit(sigName: "shutdown", ...args: any[]): void
    connect(sigName: "video-output", callback: Core_VideoOutputSignalCallback): number
    connect_after(sigName: "video-output", callback: Core_VideoOutputSignalCallback): number
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

class Core extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Core

    static name: string
    static $gtype: GObject.GType<Core>

    // Constructors of Retro-0.14.Retro.Core

    constructor(config?: Core_ConstructProps) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     */
    static new(filename: string): Core
    _init(config?: Core_ConstructProps): void
}

interface CoreDescriptor_ConstructProps extends GObject.Object_ConstructProps {
}

interface CoreDescriptor {

    // Owm methods of Retro-0.14.Retro.CoreDescriptor

    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_md5(firmware: string): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_path(firmware: string): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_sha512(firmware: string): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     */
    get_firmwares(platform: string): string[]
    /**
     * Gets the icon, or %NULL if it doesn't exist.
     */
    get_icon(): Gio.Icon | null
    /**
     * Gets the ID of `self`.
     */
    get_id(): string
    /**
     * Gets whether the core is an emulator, and hence need games to be loaded.
     */
    get_is_emulator(): boolean
    /**
     * Gets whether the firmware is mandatory for the core to function.
     * @param firmware a firmware name
     */
    get_is_firmware_mandatory(firmware: string): boolean
    /**
     * Gets whether the core is a game, and hence can't load games.
     */
    get_is_game(): boolean
    /**
     * Gets the list of MIME types accepted used by the core for this platform.
     * @param platform a platform name
     */
    get_mime_type(platform: string): string[]
    /**
     * Gets the module file name, or %NULL if it doesn't exist.
     */
    get_module(): string | null
    /**
     * Gets the module file, or %NULL if it doesn't exist.
     */
    get_module_file(): Gio.File | null
    /**
     * Gets the name, or %NULL if it doesn't exist.
     */
    get_name(): string | null
    /**
     * Gets whether the platform supports all of the given MIME types.
     * @param platform a platform name
     * @param mime_types the MIME types
     */
    get_platform_supports_mime_types(platform: string, mime_types: string[]): boolean
    /**
     * Gets the URI of the file of `self`.
     */
    get_uri(): string
    /**
     * Gets whether the firmware declares its MD5 fingerprint.
     * @param firmware a firmware name
     */
    has_firmware_md5(firmware: string): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     */
    has_firmware_sha512(firmware: string): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     */
    has_firmwares(platform: string): boolean
    /**
     * Gets whether the core has an icon.
     */
    has_icon(): boolean
    /**
     * Gets whether the core descriptor declares the given platform.
     * @param platform a platform name
     */
    has_platform(platform: string): boolean

    // Class property signals of Retro-0.14.Retro.CoreDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-0.14.Retro.CoreDescriptor

    static name: string
    static $gtype: GObject.GType<CoreDescriptor>

    // Constructors of Retro-0.14.Retro.CoreDescriptor

    constructor(config?: CoreDescriptor_ConstructProps) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     */
    static new(filename: string): CoreDescriptor
    _init(config?: CoreDescriptor_ConstructProps): void
}

interface CoreView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.EventBox_ConstructProps {

    // Own constructor properties of Retro-0.14.Retro.CoreView

    can_grab_pointer?: boolean | null
    snap_pointer_to_borders?: boolean | null
}

interface CoreView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Retro-0.14.Retro.CoreView

    can_grab_pointer: boolean
    snap_pointer_to_borders: boolean

    // Owm methods of Retro-0.14.Retro.CoreView

    /**
     * Creates a new #RetroController exposing `self` as the specified controller
     * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
     * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param controller_type the controller type to expose `self` as
     */
    as_controller(controller_type: ControllerType): Controller
    /**
     * Gets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     */
    get_can_grab_pointer(): boolean
    /**
     * Gets a flag representing the capabilities of `self` when exposed as a
     * controller. See retro_controller_get_capabilities() for more information on
     * the flag.
     * 
     * See retro_core_view_as_controller() to know the capabilities of
     * #RetroCoreView when exposed as a controller.
     */
    get_controller_capabilities(): number
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    get_input_state(input: Input): number
    /**
     * Gets the currently set key joypad mapping.
     */
    get_key_joypad_mapping(): KeyJoypadMapping
    /**
     * Gets the currently displayed video frame.
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
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

    child_notify(...args: any[]): any

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

class CoreView extends Gtk.EventBox {

    // Own properties of Retro-0.14.Retro.CoreView

    static name: string
    static $gtype: GObject.GType<CoreView>

    // Constructors of Retro-0.14.Retro.CoreView

    constructor(config?: CoreView_ConstructProps) 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     */
    static new(): CoreView

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    _init(config?: CoreView_ConstructProps): void
}

interface KeyJoypadMapping_ConstructProps extends GObject.Object_ConstructProps {
}

interface KeyJoypadMapping {

    // Owm methods of Retro-0.14.Retro.KeyJoypadMapping

    /**
     * Gets the mapping key code for the joypad button id.
     * @param button joypad button id
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

class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-0.14.Retro.KeyJoypadMapping

    static name: string
    static $gtype: GObject.GType<KeyJoypadMapping>

    // Constructors of Retro-0.14.Retro.KeyJoypadMapping

    constructor(config?: KeyJoypadMapping_ConstructProps) 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     */
    static new(): KeyJoypadMapping
    /**
     * Creates a new #RetroKeyJoypadMapping with the default mapping.
     * @constructor 
     */
    static new_default(): KeyJoypadMapping
    _init(config?: KeyJoypadMapping_ConstructProps): void
}

interface MainLoop_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Retro-0.14.Retro.MainLoop

    core?: Core | null
    speed_rate?: number | null
}

interface MainLoop {

    // Own properties of Retro-0.14.Retro.MainLoop

    core: Core
    speed_rate: number

    // Owm methods of Retro-0.14.Retro.MainLoop

    /**
     * Gets the core handled by `self`.
     */
    get_core(): Core
    /**
     * Gets the speed rate at which to run the core.
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

class MainLoop extends GObject.Object {

    // Own properties of Retro-0.14.Retro.MainLoop

    static name: string
    static $gtype: GObject.GType<MainLoop>

    // Constructors of Retro-0.14.Retro.MainLoop

    constructor(config?: MainLoop_ConstructProps) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     */
    constructor(core: Core) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     */
    static new(core: Core): MainLoop
    _init(config?: MainLoop_ConstructProps): void
}

interface ModuleIterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface ModuleIterator {

    // Owm methods of Retro-0.14.Retro.ModuleIterator

    /**
     * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
     * or %NULL if the end was reached.
     */
    get(): CoreDescriptor | null
    /**
     * Fetch the next #RetroModuleIterator.
     */
    next(): boolean

    // Class property signals of Retro-0.14.Retro.ModuleIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModuleIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleIterator

    static name: string
    static $gtype: GObject.GType<ModuleIterator>

    // Constructors of Retro-0.14.Retro.ModuleIterator

    constructor(config?: ModuleIterator_ConstructProps) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookup_paths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     */
    constructor(lookup_paths: string[], recursive: boolean) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookup_paths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     */
    static new(lookup_paths: string[], recursive: boolean): ModuleIterator
    _init(config?: ModuleIterator_ConstructProps): void
}

interface ModuleQuery_ConstructProps extends GObject.Object_ConstructProps {
}

interface ModuleQuery {

    // Owm methods of Retro-0.14.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-0.14.Retro.ModuleQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModuleQuery extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleQuery

    static name: string
    static $gtype: GObject.GType<ModuleQuery>

    // Constructors of Retro-0.14.Retro.ModuleQuery

    constructor(config?: ModuleQuery_ConstructProps) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     */
    constructor(recursive: boolean) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     */
    static new(recursive: boolean): ModuleQuery
    _init(config?: ModuleQuery_ConstructProps): void
}

interface Option_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `value-changed`
 */
interface Option_ValueChangedSignalCallback {
    ($obj: Option): void
}

interface Option {

    // Owm methods of Retro-0.14.Retro.Option

    /**
     * Gets the description of `self`.
     */
    get_description(): string
    /**
     * Gets the key of `self`.
     */
    get_key(): string
    /**
     * Gets the value of `self`.
     */
    get_value(): string
    /**
     * Gets the value of `self`.
     */
    get_values(): string[]
    /**
     * Sets the value for `self`. An error will be thrown if the value is invalid for
     * `self`.
     * @param value the value
     */
    set_value(value: string): void

    // Own signals of Retro-0.14.Retro.Option

    connect(sigName: "value-changed", callback: Option_ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: Option_ValueChangedSignalCallback): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-0.14.Retro.Option

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Option extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Option

    static name: string
    static $gtype: GObject.GType<Option>

    // Constructors of Retro-0.14.Retro.Option

    constructor(config?: Option_ConstructProps) 
    _init(config?: Option_ConstructProps): void
}

interface OptionIterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface OptionIterator {

    // Owm methods of Retro-0.14.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-0.14.Retro.OptionIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OptionIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.OptionIterator

    static name: string
    static $gtype: GObject.GType<OptionIterator>

    // Constructors of Retro-0.14.Retro.OptionIterator

    constructor(config?: OptionIterator_ConstructProps) 
    _init(config?: OptionIterator_ConstructProps): void
}

interface ControllerInterface {

    // Own fields of Retro-0.14.Retro.ControllerInterface

    parent_iface: GObject.TypeInterface
    poll: (self: Controller) => void
    get_input_state: (self: Controller, input: Input) => number
    get_controller_type: (self: Controller) => ControllerType
    get_capabilities: (self: Controller) => number
    set_rumble_state: (self: Controller, effect: RumbleEffect, strength: number) => boolean
}

abstract class ControllerInterface {

    // Own properties of Retro-0.14.Retro.ControllerInterface

    static name: string
}

interface ControllerIteratorClass {

    // Own fields of Retro-0.14.Retro.ControllerIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class ControllerIteratorClass {

    // Own properties of Retro-0.14.Retro.ControllerIteratorClass

    static name: string
}

interface CoreClass {

    // Own fields of Retro-0.14.Retro.CoreClass

    parent_class: GObject.ObjectClass
}

abstract class CoreClass {

    // Own properties of Retro-0.14.Retro.CoreClass

    static name: string
}

interface CoreDescriptorClass {

    // Own fields of Retro-0.14.Retro.CoreDescriptorClass

    parent_class: GObject.ObjectClass
}

abstract class CoreDescriptorClass {

    // Own properties of Retro-0.14.Retro.CoreDescriptorClass

    static name: string
}

interface CoreViewClass {

    // Own fields of Retro-0.14.Retro.CoreViewClass

    parent_class: Gtk.EventBoxClass
}

abstract class CoreViewClass {

    // Own properties of Retro-0.14.Retro.CoreViewClass

    static name: string
}

interface KeyJoypadMappingClass {

    // Own fields of Retro-0.14.Retro.KeyJoypadMappingClass

    parent_class: GObject.ObjectClass
}

abstract class KeyJoypadMappingClass {

    // Own properties of Retro-0.14.Retro.KeyJoypadMappingClass

    static name: string
}

interface MainLoopClass {

    // Own fields of Retro-0.14.Retro.MainLoopClass

    parent_class: GObject.ObjectClass
}

abstract class MainLoopClass {

    // Own properties of Retro-0.14.Retro.MainLoopClass

    static name: string
}

interface ModuleIteratorClass {

    // Own fields of Retro-0.14.Retro.ModuleIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class ModuleIteratorClass {

    // Own properties of Retro-0.14.Retro.ModuleIteratorClass

    static name: string
}

interface ModuleQueryClass {

    // Own fields of Retro-0.14.Retro.ModuleQueryClass

    parent_class: GObject.ObjectClass
}

abstract class ModuleQueryClass {

    // Own properties of Retro-0.14.Retro.ModuleQueryClass

    static name: string
}

interface OptionClass {

    // Own fields of Retro-0.14.Retro.OptionClass

    parent_class: GObject.ObjectClass
}

abstract class OptionClass {

    // Own properties of Retro-0.14.Retro.OptionClass

    static name: string
}

interface OptionIteratorClass {

    // Own fields of Retro-0.14.Retro.OptionIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class OptionIteratorClass {

    // Own properties of Retro-0.14.Retro.OptionIteratorClass

    static name: string
}

interface Pixdata {

    // Owm methods of Retro-0.14.Retro.Pixdata

    /**
     * Copies `self` into a new #RetroPixdata.
     */
    copy(): Pixdata
    /**
     * Frees the given #RetroPixdata object.
     */
    free(): void
    /**
     * Gets the aspect ratio the video should be rendered with.
     */
    get_aspect_ratio(): number
    /**
     * Gets the height of `self`.
     */
    get_height(): number
    /**
     * Gets the width of `self`.
     */
    get_width(): number
    /**
     * Loads an OpenGL texture from `self`.
     */
    load_gl_texture(): boolean
    /**
     * Creates a new #GdkPixbuf from `self`.
     */
    to_pixbuf(): GdkPixbuf.Pixbuf
}

class Pixdata {

    // Own properties of Retro-0.14.Retro.Pixdata

    static name: string
}

interface Input {

    // Owm methods of Retro-0.14.Retro.Input

    /**
     * Copies `self` into a new #RetroInput.
     */
    copy(): Input
    /**
     * Frees the given #RetroInput.
     */
    free(): void
    /**
     * Gets the analog id and index of %self, if any.
     */
    get_analog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     */
    get_controller_type(): ControllerType
    /**
     * Gets the joypad id of %self, if any.
     */
    get_joypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of %self, if any.
     */
    get_lightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of %self, if any.
     */
    get_mouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of %self, if any.
     */
    get_pointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

class Input {

    // Own properties of Retro-0.14.Retro.Input

    static name: string

    // Constructors of Retro-0.14.Retro.Input

    /**
     * Creates a new #RetroInput.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroInput.
     * @constructor 
     */
    static new(): Input
}

}
export default Retro;