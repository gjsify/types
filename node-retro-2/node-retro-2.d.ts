
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-retro-2-import.d.ts';
    
/**
 * Retro-2
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

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
function controllerTypeGetIdCount(type: ControllerType): number
function controllerTypeGetIndexCount(type: ControllerType): number
/**
 * Logs an error or debugging message.
 * 
 * This is a convenience function to forward the #RetroCore::log signal of
 * #RetroCore to g_log(), see it for more information.
 * @param sender a #RetroCore
 * @param logDomain the log domain, usually #G_LOG_DOMAIN, or %NULL
 * @param logLevel the log level, either from #GLogLevelFlags or a user-defined level
 * @param message the message to log
 */
function gLog(sender: Core, logDomain: string | null, logLevel: GLib.LogLevelFlags, message: string | null): void
function gtkGetResource(): Gio.Resource
function joypadIdFromButtonCode(buttonCode: number): JoypadId
function joypadIdToButtonCode(joypadId: JoypadId): number
/**
 * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
 * @param pixbuf a #GdkPixbuf
 * @returns the aspect ratio, or 0 if the option is not set or its value is invalid.
 */
function pixbufGetAspectRatio(pixbuf: GdkPixbuf.Pixbuf): number
/**
 * Sets the aspect ratio of `pixbuf` by setting the 'aspect-ratio' pixbuf option.
 * Use retro_pixbuf_get_aspect_ratio() to retrieve it.
 * @param pixbuf a #GdkPixbuf
 * @param aspectRatio the aspect ratio value
 */
function pixbufSetAspectRatio(pixbuf: GdkPixbuf.Pixbuf, aspectRatio: number): void
/**
 * Gets a #RetroVideoFilter from it's name. It defaults to
 * RETRO_VIDEO_FILTER_SMOOTH in case of error.
 * @param filter a filter name
 * @returns a #RetroVideoFilter
 */
function videoFilterFromString(filter: string | null): VideoFilter
module Controller {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Controller {

    // Own properties of Retro-2.Retro.Controller

    __gtype__: number

    // Owm methods of Retro-2.Retro.Controller

    emitStateChanged(): void
    // Has conflict: getCapabilities(): number
    // Has conflict: getControllerType(): ControllerType
    // Has conflict: getInputState(input: Input): number
    // Has conflict: getSupportsRumble(): boolean
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controllerType a #RetroControllerType
     * @returns whether @self has the capability
     */
    hasCapability(controllerType: ControllerType): boolean
    // Has conflict: setRumbleState(effect: RumbleEffect, strength: number): void

    // Own virtual methods of Retro-2.Retro.Controller

    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     * @virtual 
     * @returns the capabilities flag of @self
     */
    getCapabilities(): number
    /**
     * Gets the main type of the controller.
     * @virtual 
     * @returns the controller type of @self
     */
    getControllerType(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @virtual 
     * @param input a #RetroInput to query `self`
     * @returns the input's state
     */
    getInputState(input: Input): number
    /**
     * Gets whether `self` supports rumble effects.
     * @virtual 
     * @returns whether @self supports rumble effects.
     */
    getSupportsRumble(): boolean
    /**
     * Sets the rumble state of `self`.
     * @virtual 
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    setRumbleState(effect: RumbleEffect, strength: number): void

    // Own signals of Retro-2.Retro.Controller

    connect(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Controller.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: Controller.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.Controller

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Controller extends GObject.Object {

    // Own properties of Retro-2.Retro.Controller

    static name: string

    // Constructors of Retro-2.Retro.Controller

    constructor(config?: Controller.ConstructorProperties) 
    _init(config?: Controller.ConstructorProperties): void
}

module ControllerIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ControllerIterator {

    // Own properties of Retro-2.Retro.ControllerIterator

    __gtype__: number

    // Owm methods of Retro-2.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller ]

    // Class property signals of Retro-2.Retro.ControllerIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ControllerIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.ControllerIterator

    static name: string

    // Constructors of Retro-2.Retro.ControllerIterator

    constructor(config?: ControllerIterator.ConstructorProperties) 
    _init(config?: ControllerIterator.ConstructorProperties): void
}

module Core {

    // Signal callback interfaces

    /**
     * Signal callback interface for `crashed`
     */
    interface CrashedSignalCallback {
        (message: string | null): void
    }

    /**
     * Signal callback interface for `log`
     */
    interface LogSignalCallback {
        (logDomain: string | null, logLevel: GLib.LogLevelFlags, message: string | null): void
    }

    /**
     * Signal callback interface for `message`
     */
    interface MessageSignalCallback {
        (message: string | null, frames: number): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    interface ShutdownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `video-output`
     */
    interface VideoOutputSignalCallback {
        (pixdata: Pixdata): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-2.Retro.Core

        coreAssetsDirectory?: string | null
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
        saveDirectory?: string | null
        /**
         * The speed ratio at wich the core will run.
         */
        speedRate?: number | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        systemDirectory?: string | null
        /**
         * The name of the user.
         */
        userName?: string | null
    }

}

interface Core {

    // Own properties of Retro-2.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly apiVersion: number
    coreAssetsDirectory: string | null
    /**
     * The filename of the core.
     */
    readonly filename: string | null
    /**
     * The FPS rate for the core's video output.
     */
    readonly framesPerSecond: number
    /**
     * Whether a game has been loaded.
     */
    readonly gameLoaded: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly isInitiated: boolean
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
    saveDirectory: string | null
    /**
     * The speed ratio at wich the core will run.
     */
    speedRate: number
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
    systemDirectory: string | null
    /**
     * The name of the user.
     */
    userName: string | null
    __gtype__: number

    // Owm methods of Retro-2.Retro.Core

    /**
     * This initializes `self,` loads its available options and loads the medias. You
     * need to boot `self` before using some of its methods.
     */
    boot(): void
    /**
     * Gets the Libretro API version implement by the core.
     * @returns the API version
     */
    getApiVersion(): number
    /**
     * Gets whether the state of `self` can be accessed.
     * @returns whether the state of @self can be accessed
     */
    getCanAccessState(): boolean
    getCoreAssetsDirectory(): string | null
    /**
     * Gets the filename of the core.
     * @returns the filename of the core
     */
    getFilename(): string | null
    /**
     * Gets the FPS rate for the core's video output.
     * @returns the FPS rate for the core's video output
     */
    getFramesPerSecond(): number
    /**
     * Gets whether a game has been loaded.
     * @returns whether a game has been loaded
     */
    getGameLoaded(): boolean
    /**
     * Gets whether the core has been initiated.
     * @returns whether the core has been initiated
     */
    getIsInitiated(): boolean
    /**
     * Gets the size of a memory region of `self`.
     * @param memoryType the type of memory
     * @returns the size of a memory region
     */
    getMemorySize(memoryType: MemoryType): number
    /**
     * Gets the option for the given key.
     * @param key the key of the option
     * @returns the option
     */
    getOption(key: string | null): Option
    getRunahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     * @returns the save directory of the core
     */
    getSaveDirectory(): string | null
    /**
     * Gets the speed rate at which to run the core.
     * @returns the speed rate
     */
    getSpeedRate(): number
    /**
     * Gets whether the core supports running with no game.
     * @returns whether the core supports running with no game
     */
    getSupportNoGame(): boolean
    /**
     * Gets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @returns the system directory of the core
     */
    getSystemDirectory(): string | null
    /**
     * Gets the name of the user.
     * @returns the name of the user
     */
    getUserName(): string | null
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     * @returns whether the core has an option for the given key
     */
    hasOption(key: string | null): boolean
    /**
     * Creates a new #RetroControllerIterator which can be used to iterate through
     * the controllers plugged into `self`.
     * @returns a new #RetroControllerIterator
     */
    iterateControllers(): ControllerIterator
    /**
     * Creates a new #RetroOptionIterator which can be used to iterate through the
     * options of `self`.
     * @returns a new #RetroOptionIterator
     */
    iterateOptions(): OptionIterator
    /**
     * Iterate `self` for a frame.
     */
    iteration(): void
    /**
     * Loads a memory region of `self`.
     * @param memoryType the type of memory
     * @param filename a file to load the data from
     */
    loadMemory(memoryType: MemoryType, filename: string | null): void
    /**
     * Loads the state of the `self`.
     * @param filename the file to load the state from
     */
    loadState(filename: string | null): void
    /**
     * Overrides default value for the option `key`. This can be used to set value
     * for a startup-only option.
     * 
     * You can use this before booting the core.
     * @param key the key of the option
     * @param value the default value
     */
    overrideOptionDefault(key: string | null, value: string | null): void
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
     * @param memoryType the type of memory
     * @param filename a file to save the data to
     */
    saveMemory(memoryType: MemoryType, filename: string | null): void
    /**
     * Saves the state of `self`.
     * @param filename the file to save the state to
     */
    saveState(filename: string | null): void
    /**
     * Plugs `controller` into the specified port number of `self`.
     * @param port the port number
     * @param controller a #RetroController
     */
    setController(port: number, controller: Controller | null): void
    setCoreAssetsDirectory(coreAssetsDirectory: string | null): void
    /**
     * Sets the current media index.
     * 
     * You can use this after booting the core.
     * @param mediaIndex the media index
     */
    setCurrentMedia(mediaIndex: number): void
    /**
     * Uses `controller` as the default controller for the given type. When a port
     * has no controller plugged plugged into it, the core will use the default
     * controllers instead.
     * @param controllerType a #RetroControllerType
     * @param controller a #RetroController
     */
    setDefaultController(controllerType: ControllerType, controller: Controller | null): void
    /**
     * Sets the widget whose key events will be forwarded to `self`.
     * @param widget a #GtkWidget, or %NULL
     */
    setKeyboard(widget: Gtk.Widget | null): void
    /**
     * Sets the medias to load into the core.
     * 
     * You can use this before booting the core.
     * @param uris the URIs
     */
    setMedias(uris: string[]): void
    setRunahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param saveDirectory the save directory
     */
    setSaveDirectory(saveDirectory: string | null): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speedRate a speed rate
     */
    setSpeedRate(speedRate: number): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param systemDirectory the system directory
     */
    setSystemDirectory(systemDirectory: string | null): void
    /**
     * Sets the name of the user.
     * @param userName the user name
     */
    setUserName(userName: string | null): void
    /**
     * Stops running the core.
     */
    stop(): void

    // Own signals of Retro-2.Retro.Core

    connect(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    on(sigName: "crashed", callback: Core.CrashedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "crashed", callback: Core.CrashedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "crashed", callback: Core.CrashedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "crashed", ...args: any[]): void
    connect(sigName: "log", callback: Core.LogSignalCallback): number
    on(sigName: "log", callback: Core.LogSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "log", callback: Core.LogSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "log", callback: Core.LogSignalCallback): NodeJS.EventEmitter
    emit(sigName: "log", logLevel: GLib.LogLevelFlags, message: string | null, ...args: any[]): void
    connect(sigName: "message", callback: Core.MessageSignalCallback): number
    on(sigName: "message", callback: Core.MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: Core.MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: Core.MessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "message", frames: number, ...args: any[]): void
    connect(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: Core.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: Core.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: Core.ShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "shutdown", ...args: any[]): void
    connect(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    on(sigName: "video-output", callback: Core.VideoOutputSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-output", callback: Core.VideoOutputSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-output", callback: Core.VideoOutputSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-output", ...args: any[]): void

    // Class property signals of Retro-2.Retro.Core

    connect(sigName: "notify::api-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::api-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::api-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::api-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::api-version", ...args: any[]): void
    connect(sigName: "notify::core-assets-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::core-assets-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::core-assets-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::core-assets-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::core-assets-directory", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::frames-per-second", callback: (...args: any[]) => void): number
    on(sigName: "notify::frames-per-second", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frames-per-second", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frames-per-second", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frames-per-second", ...args: any[]): void
    connect(sigName: "notify::game-loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::game-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::game-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::game-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::game-loaded", ...args: any[]): void
    connect(sigName: "notify::is-initiated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-initiated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-initiated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-initiated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-initiated", ...args: any[]): void
    connect(sigName: "notify::runahead", callback: (...args: any[]) => void): number
    on(sigName: "notify::runahead", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::runahead", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::runahead", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::runahead", ...args: any[]): void
    connect(sigName: "notify::save-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::save-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::save-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::save-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::save-directory", ...args: any[]): void
    connect(sigName: "notify::speed-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::speed-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::speed-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::speed-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::speed-rate", ...args: any[]): void
    connect(sigName: "notify::support-no-game", callback: (...args: any[]) => void): number
    on(sigName: "notify::support-no-game", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::support-no-game", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::support-no-game", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::support-no-game", ...args: any[]): void
    connect(sigName: "notify::system-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::system-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::system-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::system-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::system-directory", ...args: any[]): void
    connect(sigName: "notify::user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Core extends GObject.Object {

    // Own properties of Retro-2.Retro.Core

    static name: string

    // Constructors of Retro-2.Retro.Core

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

    // Own properties of Retro-2.Retro.CoreDescriptor

    __gtype__: number

    // Owm methods of Retro-2.Retro.CoreDescriptor

    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    getFirmwareMd5(firmware: string | null): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    getFirmwarePath(firmware: string | null): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     * @returns a string or %NULL, free it with g_free()
     */
    getFirmwareSha512(firmware: string | null): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
     */
    getFirmwares(platform: string | null): string[]
    /**
     * Gets the icon, or %NULL if it doesn't exist.
     * @returns a #GIcon or %NULL
     */
    getIcon(): Gio.Icon | null
    /**
     * Gets the ID of `self`.
     * @returns the ID of @self, free it with g_free()
     */
    getId(): string | null
    /**
     * Gets whether the core is an emulator, and hence need games to be loaded.
     * @returns whether the core is an emulator
     */
    getIsEmulator(): boolean
    /**
     * Gets whether the firmware is mandatory for the core to function.
     * @param firmware a firmware name
     * @returns whether the firmware is mandatory for the core to function
     */
    getIsFirmwareMandatory(firmware: string | null): boolean
    /**
     * Gets whether the core is a game, and hence can't load games.
     * @returns whether the core is a game
     */
    getIsGame(): boolean
    /**
     * Gets the list of MIME types accepted used by the core for this platform.
     * @param platform a platform name
     * @returns a %NULL-terminated string array or %NULL, the array should be freed with g_strfreev()
     */
    getMimeType(platform: string | null): string[]
    /**
     * Gets the module file name, or %NULL if it doesn't exist.
     * @returns a string or %NULL, free it with g_free()
     */
    getModule(): string | null
    /**
     * Gets the module file, or %NULL if it doesn't exist.
     * @returns a #GFile or %NULL
     */
    getModuleFile(): Gio.File | null
    /**
     * Gets the name, or %NULL if it doesn't exist.
     * @returns a string or %NULL, free it with g_free()
     */
    getName(): string | null
    /**
     * Gets whether the platform supports all of the given MIME types.
     * @param platform a platform name
     * @param mimeTypes the MIME types
     * @returns whether the platform supports all of the given MIME types
     */
    getPlatformSupportsMimeTypes(platform: string | null, mimeTypes: string[]): boolean
    /**
     * Gets the URI of the file of `self`.
     * @returns the URI of the file of @self, free it with g_free()
     */
    getUri(): string | null
    /**
     * Gets whether the firmware declares its MD5 fingerprint.
     * @param firmware a firmware name
     * @returns whether the firmware declares its MD5 fingerprint
     */
    hasFirmwareMd5(firmware: string | null): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     * @returns whether the firmware declares its SHA512 fingerprint
     */
    hasFirmwareSha512(firmware: string | null): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     * @returns whether the platform has associated firmwares
     */
    hasFirmwares(platform: string | null): boolean
    /**
     * Gets whether the core has an icon.
     * @returns whether the core has an icon
     */
    hasIcon(): boolean
    /**
     * Gets whether the core descriptor declares the given platform.
     * @param platform a platform name
     * @returns whether the core descriptor declares the given platform
     */
    hasPlatform(platform: string | null): boolean

    // Class property signals of Retro-2.Retro.CoreDescriptor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-2.Retro.CoreDescriptor

    static name: string

    // Constructors of Retro-2.Retro.CoreDescriptor

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
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Retro-2.Retro.CoreView

        canGrabPointer?: boolean | null
        snapPointerToBorders?: boolean | null
    }

}

interface CoreView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Retro-2.Retro.CoreView

    canGrabPointer: boolean
    snapPointerToBorders: boolean
    __gtype__: number

    // Owm methods of Retro-2.Retro.CoreView

    /**
     * Creates a new #RetroController exposing `self` as the specified controller
     * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
     * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param controllerType the controller type to expose `self` as
     * @returns a new #RetroController
     */
    asController(controllerType: ControllerType): Controller
    /**
     * Gets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @returns whether the pointer should snap to the borders
     */
    getCanGrabPointer(): boolean
    /**
     * Gets a flag representing the capabilities of `self` when exposed as a
     * controller. See retro_controller_get_capabilities() for more information on
     * the flag.
     * 
     * See retro_core_view_as_controller() to know the capabilities of
     * #RetroCoreView when exposed as a controller.
     * @returns the capabilities flag of @self when exposed as a controller
     */
    getControllerCapabilities(): number
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     * @returns the input's state
     */
    getInputState(input: Input): number
    /**
     * Gets the currently set key joypad mapping.
     * @returns a #RetroKeyJoypadMapping
     */
    getKeyJoypadMapping(): KeyJoypadMapping
    /**
     * Gets the currently displayed video frame.
     * @returns a #GdkPixbuf
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @returns whether the pointer should snap to the borders
     */
    getSnapPointerToBorders(): boolean
    /**
     * Sets the `self` as the default controllers of `core`.
     * @param core a #RetroCore
     */
    setAsDefaultController(core: Core | null): void
    /**
     * Sets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param canGrabPointer whether the pointer should be grabbed when clicking on the view
     */
    setCanGrabPointer(canGrabPointer: boolean): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    setCore(core: Core | null): void
    /**
     * Sets the video filter to use to render the core's video on `self`.
     * @param filter a #RetroVideoFilter
     */
    setFilter(filter: VideoFilter): void
    /**
     * Sets the key joypad mapping on `self`. If given mapping is %NULL, then set to
     * an empty configuration.
     * @param mapping a #RetroKeyJoypadMapping
     */
    setKeyJoypadMapping(mapping: KeyJoypadMapping | null): void
    /**
     * Sets `pixbuf` as the currently displayed video frame.
     * 
     * retro_pixbuf_set_aspect_ratio() can be used to specify the aspect ratio for
     * the pixbuf. Otherwise the core's aspect ratio will be used.
     * @param pixbuf a #GdkPixbuf
     */
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @param snapPointerToBorders whether the pointer should snap to the borders
     */
    setSnapPointerToBorders(snapPointerToBorders: boolean): void

    // Own signals of Retro-2.Retro.CoreView

    connect(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    on(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "controller-state-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.CoreView

    connect(sigName: "notify::can-grab-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-grab-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-grab-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-grab-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-grab-pointer", ...args: any[]): void
    connect(sigName: "notify::snap-pointer-to-borders", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap-pointer-to-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap-pointer-to-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap-pointer-to-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap-pointer-to-borders", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CoreView extends Gtk.Widget {

    // Own properties of Retro-2.Retro.CoreView

    static name: string

    // Constructors of Retro-2.Retro.CoreView

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
    _init(config?: CoreView.ConstructorProperties): void
}

module KeyJoypadMapping {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface KeyJoypadMapping {

    // Own properties of Retro-2.Retro.KeyJoypadMapping

    __gtype__: number

    // Owm methods of Retro-2.Retro.KeyJoypadMapping

    /**
     * Gets the mapping key code for the joypad button id.
     * @param button joypad button id
     * @returns mapping key code
     */
    getButtonKey(button: JoypadId): number
    /**
     * Maps the joypad button id to mapping key code.
     * @param button joypad button id
     * @param hardwareKeycode mapping key code
     */
    setButtonKey(button: JoypadId, hardwareKeycode: number): void

    // Class property signals of Retro-2.Retro.KeyJoypadMapping

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-2.Retro.KeyJoypadMapping

    static name: string

    // Constructors of Retro-2.Retro.KeyJoypadMapping

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
    static newDefault(): KeyJoypadMapping
    _init(config?: KeyJoypadMapping.ConstructorProperties): void
}

module ModuleIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ModuleIterator {

    // Own properties of Retro-2.Retro.ModuleIterator

    __gtype__: number

    // Owm methods of Retro-2.Retro.ModuleIterator

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

    // Class property signals of Retro-2.Retro.ModuleIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ModuleIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.ModuleIterator

    static name: string

    // Constructors of Retro-2.Retro.ModuleIterator

    constructor(config?: ModuleIterator.ConstructorProperties) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookupPaths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleIterator
     */
    constructor(lookupPaths: string[], recursive: boolean) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookupPaths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     * @returns a new #RetroModuleIterator
     */
    static new(lookupPaths: string[], recursive: boolean): ModuleIterator
    _init(config?: ModuleIterator.ConstructorProperties): void
}

module ModuleQuery {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ModuleQuery {

    // Own properties of Retro-2.Retro.ModuleQuery

    __gtype__: number

    // Owm methods of Retro-2.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     * @returns a new #RetroModuleIterator
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-2.Retro.ModuleQuery

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ModuleQuery extends GObject.Object {

    // Own properties of Retro-2.Retro.ModuleQuery

    static name: string

    // Constructors of Retro-2.Retro.ModuleQuery

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
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Option {

    // Own properties of Retro-2.Retro.Option

    __gtype__: number

    // Owm methods of Retro-2.Retro.Option

    /**
     * Gets the description of `self`.
     * @returns the description of @self
     */
    getDescription(): string | null
    /**
     * Gets the key of `self`.
     * @returns the key of @self
     */
    getKey(): string | null
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    getValue(): string | null
    /**
     * Gets the value of `self`.
     * @returns the value of @self
     */
    getValues(): string[]
    /**
     * Sets the value for `self`. An error will be thrown if the value is invalid for
     * `self`.
     * @param value the value
     */
    setValue(value: string | null): void

    // Own signals of Retro-2.Retro.Option

    connect(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Option.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: Option.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.Option

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Option extends GObject.Object {

    // Own properties of Retro-2.Retro.Option

    static name: string

    // Constructors of Retro-2.Retro.Option

    constructor(config?: Option.ConstructorProperties) 
    _init(config?: Option.ConstructorProperties): void
}

module OptionIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface OptionIterator {

    // Own properties of Retro-2.Retro.OptionIterator

    __gtype__: number

    // Owm methods of Retro-2.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     * @returns %FALSE if it reached the end, %TRUE otherwise
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-2.Retro.OptionIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OptionIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.OptionIterator

    static name: string

    // Constructors of Retro-2.Retro.OptionIterator

    constructor(config?: OptionIterator.ConstructorProperties) 
    _init(config?: OptionIterator.ConstructorProperties): void
}

interface ControllerInterface {

    // Own fields of Retro-2.Retro.ControllerInterface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getInputState: (self: Controller, input: Input) => number
    getControllerType: (self: Controller) => ControllerType
    getCapabilities: (self: Controller) => number
    getSupportsRumble: (self: Controller) => boolean
    setRumbleState: (self: Controller, effect: RumbleEffect, strength: number) => void
}

/**
 * An interface for a controller, e.g. a gamepad.
 * @record 
 */
abstract class ControllerInterface {

    // Own properties of Retro-2.Retro.ControllerInterface

    static name: string
}

interface ControllerIteratorClass {

    // Own fields of Retro-2.Retro.ControllerIteratorClass

    parentClass: GObject.ObjectClass
}

abstract class ControllerIteratorClass {

    // Own properties of Retro-2.Retro.ControllerIteratorClass

    static name: string
}

interface CoreClass {

    // Own fields of Retro-2.Retro.CoreClass

    parentClass: GObject.ObjectClass
}

abstract class CoreClass {

    // Own properties of Retro-2.Retro.CoreClass

    static name: string
}

interface CoreDescriptorClass {

    // Own fields of Retro-2.Retro.CoreDescriptorClass

    parentClass: GObject.ObjectClass
}

abstract class CoreDescriptorClass {

    // Own properties of Retro-2.Retro.CoreDescriptorClass

    static name: string
}

interface CoreViewClass {

    // Own fields of Retro-2.Retro.CoreViewClass

    parentClass: Gtk.WidgetClass
}

abstract class CoreViewClass {

    // Own properties of Retro-2.Retro.CoreViewClass

    static name: string
}

interface KeyJoypadMappingClass {

    // Own fields of Retro-2.Retro.KeyJoypadMappingClass

    parentClass: GObject.ObjectClass
}

abstract class KeyJoypadMappingClass {

    // Own properties of Retro-2.Retro.KeyJoypadMappingClass

    static name: string
}

interface ModuleIteratorClass {

    // Own fields of Retro-2.Retro.ModuleIteratorClass

    parentClass: GObject.ObjectClass
}

abstract class ModuleIteratorClass {

    // Own properties of Retro-2.Retro.ModuleIteratorClass

    static name: string
}

interface ModuleQueryClass {

    // Own fields of Retro-2.Retro.ModuleQueryClass

    parentClass: GObject.ObjectClass
}

abstract class ModuleQueryClass {

    // Own properties of Retro-2.Retro.ModuleQueryClass

    static name: string
}

interface OptionClass {

    // Own fields of Retro-2.Retro.OptionClass

    parentClass: GObject.ObjectClass
}

abstract class OptionClass {

    // Own properties of Retro-2.Retro.OptionClass

    static name: string
}

interface OptionIteratorClass {

    // Own fields of Retro-2.Retro.OptionIteratorClass

    parentClass: GObject.ObjectClass
}

abstract class OptionIteratorClass {

    // Own properties of Retro-2.Retro.OptionIteratorClass

    static name: string
}

interface Pixdata {

    // Owm methods of Retro-2.Retro.Pixdata

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
    getAspectRatio(): number
    /**
     * Gets the height of `self`.
     * @returns the height
     */
    getHeight(): number
    /**
     * Gets the width of `self`.
     * @returns the width
     */
    getWidth(): number
    /**
     * Loads an OpenGL texture from `self`.
     * @returns whether the loading was successful
     */
    loadGlTexture(): boolean
    /**
     * Creates a new #GdkPixbuf from `self`.
     * 
     * The #GdkPixbuf stores the intended aspect-ratio, you can access it via
     * retro_pixbuf_get_aspect_ratio().
     * @returns a new #RetroPixdata
     */
    toPixbuf(): GdkPixbuf.Pixbuf
}

class Pixdata {

    // Own properties of Retro-2.Retro.Pixdata

    static name: string
}

interface Input {

    // Owm methods of Retro-2.Retro.Input

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
    getAnalog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     * @returns the controller type of @self
     */
    getControllerType(): ControllerType
    /**
     * Gets the joypad id of `self,` if any.
     * @returns whether the id was retrieved
     */
    getJoypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of `self,` if any.
     * @returns whether the id was retrieved
     */
    getLightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of `self,` if any.
     * @returns whether the id was retrieved
     */
    getMouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of `self,` if any.
     * @returns whether the id was retrieved
     */
    getPointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

class Input {

    // Own properties of Retro-2.Retro.Input

    static name: string

    // Constructors of Retro-2.Retro.Input

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

}

export default Retro;
// END