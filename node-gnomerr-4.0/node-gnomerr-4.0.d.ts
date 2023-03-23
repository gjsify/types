
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GnomeRR-4.0
 */

import type GnomeDesktop from '@girs/node-gnomedesktop-4.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GDesktopEnums from '@girs/node-gdesktopenums-3.0';
import type Gdk from '@girs/node-gdk-4.0';
import type cairo from '@girs/node-cairo-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';

export namespace GnomeRR {

enum DpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum DpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum Error {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
enum Rotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
const CONNECTOR_TYPE_PANEL: string | null
/**
 * Returns the error domain used by the GnomeRR API.
 * @returns the GnomeRR error domain
 */
function errorQuark(): GLib.Quark
module Config {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeRR-4.0.GnomeRR.Config

        screen?: Screen | null
    }

}

interface Config {

    // Own properties of GnomeRR-4.0.GnomeRR.Config

    readonly screen: Screen
    __gtype__: number

    // Owm methods of GnomeRR-4.0.GnomeRR.Config

    applicable(screen: Screen): boolean
    apply(screen: Screen): boolean
    applyPersistent(screen: Screen): boolean
    ensurePrimary(): boolean
    equal(config2: Config): boolean
    getClone(): boolean
    getOutputs(): OutputInfo[]
    loadCurrent(): boolean
    match(config2: Config): boolean
    sanitize(): void
    setClone(clone: boolean): void

    // Class property signals of GnomeRR-4.0.GnomeRR.Config

    connect(sigName: "notify::screen", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen", ...args: any[]): void
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

class Config extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.Config

    static name: string

    // Constructors of GnomeRR-4.0.GnomeRR.Config

    constructor(config?: Config.ConstructorProperties) 
    static newCurrent(screen: Screen): Config
    _init(config?: Config.ConstructorProperties): void
}

module OutputInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface OutputInfo {

    // Own properties of GnomeRR-4.0.GnomeRR.OutputInfo

    __gtype__: number

    // Owm methods of GnomeRR-4.0.GnomeRR.OutputInfo

    getAspectRatio(): number
    getDisplayName(): string | null
    /**
     * Get the geometry for the monitor connected to the specified output.
     * 
     * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
     */
    getGeometry(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    /**
     * Retrieves the output name.
     * @returns the output name
     */
    getName(): string | null
    getPreferredHeight(): number
    getPreferredWidth(): number
    getPrimary(): boolean
    getProduct(): string | null
    getRefreshRate(): number
    getRotation(): Rotation
    getSerial(): string | null
    getUnderscanning(): boolean
    getVendor(): string | null
    isActive(): boolean
    isConnected(): boolean
    isPrimaryTile(): boolean
    setActive(active: boolean): void
    /**
     * Set the geometry for the monitor connected to the specified output.
     * 
     * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
     * @param x x offset for monitor
     * @param y y offset for monitor
     * @param width monitor width
     * @param height monitor height
     */
    setGeometry(x: number, y: number, width: number, height: number): void
    setPrimary(primary: boolean): void
    setRefreshRate(rate: number): void
    setRotation(rotation: Rotation): void
    setUnderscanning(underscanning: boolean): void
    supportsRotation(rotation: Rotation): boolean

    // Class property signals of GnomeRR-4.0.GnomeRR.OutputInfo

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

/**
 * The representation of an output, which can be used for
 * querying and setting display state.
 * @class 
 */
class OutputInfo extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.OutputInfo

    static name: string

    // Constructors of GnomeRR-4.0.GnomeRR.OutputInfo

    constructor(config?: OutputInfo.ConstructorProperties) 
    _init(config?: OutputInfo.ConstructorProperties): void
}

module Screen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `output-connected`
     */
    interface OutputConnectedSignalCallback {
        (output: Output): void
    }

    /**
     * Signal callback interface for `output-disconnected`
     */
    interface OutputDisconnectedSignalCallback {
        (output: Output): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeRR-4.0.GnomeRR.Screen

        dpmsMode?: DpmsModeType | null
        gdkDisplay?: Gdk.Display | null
    }

}

interface Screen extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of GnomeRR-4.0.GnomeRR.Screen

    dpmsMode: DpmsModeType
    readonly gdkDisplay: Gdk.Display
    __gtype__: number

    // Own fields of GnomeRR-4.0.GnomeRR.Screen

    parentInstance: GObject.Object

    // Owm methods of GnomeRR-4.0.GnomeRR.Screen

    /**
     * Retrieves the CRTC of the screen using the given identifier.
     * @param id the identifier of a CRTC
     * @returns the CRTC identified by @id
     */
    getCrtcById(id: number): Crtc
    getDpmsMode(): [ /* returnType */ boolean, /* mode */ DpmsMode ]
    /**
     * Retrieves the output of a screen using the given identifier.
     * @param id the identifier of an output
     * @returns the output identified by @id
     */
    getOutputById(id: number): Output
    /**
     * Retrieves the output for the given name.
     * @param name 
     * @returns the output identified by @name
     */
    getOutputByName(name: string | null): Output
    /**
     * Get the ranges of the screen
     */
    getRanges(): [ /* minWidth */ number, /* maxWidth */ number, /* minHeight */ number, /* maxHeight */ number ]
    /**
     * Lists all available XRandR clone modes.
     * @returns the available XRandR clone modes
     */
    listCloneModes(): Mode[]
    /**
     * List all CRTCs of the given screen.
     * @returns the available CRTCs
     */
    listCrtcs(): Crtc[]
    /**
     * Lists all available XRandR modes.
     * @returns the available XRandR modes
     */
    listModes(): Mode[]
    /**
     * List all outputs of the given screen.
     * @returns the available outputs
     */
    listOutputs(): Output[]
    /**
     * Refreshes the screen configuration, and calls the screen's callback if it
     * exists and if the screen's configuration changed.
     * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
     */
    refresh(): boolean
    /**
     * This method also disables the DPMS timeouts.
     * @param mode 
     */
    setDpmsMode(mode: DpmsMode): boolean

    // Own virtual methods of GnomeRR-4.0.GnomeRR.Screen

    changed(): void
    outputConnected(output: Output): void
    outputDisconnected(output: Output): void

    // Own signals of GnomeRR-4.0.GnomeRR.Screen

    connect(sigName: "changed", callback: Screen.ChangedSignalCallback): number
    on(sigName: "changed", callback: Screen.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Screen.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Screen.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "output-connected", callback: Screen.OutputConnectedSignalCallback): number
    on(sigName: "output-connected", callback: Screen.OutputConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-connected", callback: Screen.OutputConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-connected", callback: Screen.OutputConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-connected", ...args: any[]): void
    connect(sigName: "output-disconnected", callback: Screen.OutputDisconnectedSignalCallback): number
    on(sigName: "output-disconnected", callback: Screen.OutputDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-disconnected", callback: Screen.OutputDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-disconnected", callback: Screen.OutputDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-disconnected", ...args: any[]): void

    // Class property signals of GnomeRR-4.0.GnomeRR.Screen

    connect(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::dpms-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dpms-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dpms-mode", ...args: any[]): void
    connect(sigName: "notify::gdk-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::gdk-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gdk-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gdk-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gdk-display", ...args: any[]): void
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

class Screen extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.Screen

    static name: string

    // Constructors of GnomeRR-4.0.GnomeRR.Screen

    constructor(config?: Screen.ConstructorProperties) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `display`.
     * @constructor 
     * @param display the windowing system connection used to query the display data
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or `NULL`   if this could not be created, for instance if the driver does not support   Xrandr 1.2.  Each #GdkDisplay thus has a single instance of #GnomeRRScreen.
     */
    constructor(display: Gdk.Display) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `display`.
     * @constructor 
     * @param display the windowing system connection used to query the display data
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or `NULL`   if this could not be created, for instance if the driver does not support   Xrandr 1.2.  Each #GdkDisplay thus has a single instance of #GnomeRRScreen.
     */
    static new(display: Gdk.Display): Screen
    /**
     * Finishes the asynchronous creation of a new #GnomeRRScreen instance.
     * @constructor 
     * @param result the result of the asynchronous operation
     * @returns the newly created instance; on error, this   function will return `NULL` and set the given #GError
     */
    static newFinish(result: Gio.AsyncResult): Screen
    _init(config?: Screen.ConstructorProperties): void
    /**
     * Asynchronously creates a new #GnomeRRScreen instance.
     * 
     * On both success and error, `callback` will be invoked. You should use
     * gnome_rr_screen_new_finish() to retrieve the newly created #GnomeRRScreen
     * instance.
     * @param display the windowing system connection used to query the display
     * @param callback the function to call when the #GnomeRRScreen is ready, or on error
     */
    static newAsync(display: Gdk.Display, callback: Gio.AsyncReadyCallback | null): void
}

interface CTM {
}

class CTM {

    // Own properties of GnomeRR-4.0.GnomeRR.CTM

    static name: string
}

interface ConfigClass {

    // Own fields of GnomeRR-4.0.GnomeRR.ConfigClass

    parentClass: GObject.ObjectClass
}

abstract class ConfigClass {

    // Own properties of GnomeRR-4.0.GnomeRR.ConfigClass

    static name: string
}

interface Crtc {

    // Owm methods of GnomeRR-4.0.GnomeRR.Crtc

    canDriveOutput(output: Output): boolean
    getCurrentMode(): Mode
    getCurrentRotation(): Rotation
    getGamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    getId(): number
    getPosition(): [ /* x */ number, /* y */ number ]
    getRotations(): Rotation
    setGamma(size: number, red: number, green: number, blue: number): boolean
    supportsRotation(rotation: Rotation): boolean
}

class Crtc {

    // Own properties of GnomeRR-4.0.GnomeRR.Crtc

    static name: string
}

interface Mode {

    // Owm methods of GnomeRR-4.0.GnomeRR.Mode

    getFreq(): number
    getFreqF(): number
    getHeight(): number
    getId(): number
    getIsInterlaced(): boolean
    /**
     * Returns TRUE if this mode is a tiled
     * mode created for span a tiled monitor.
     */
    getIsTiled(): boolean
    getWidth(): number
}

class Mode {

    // Own properties of GnomeRR-4.0.GnomeRR.Mode

    static name: string
}

interface Output {

    // Owm methods of GnomeRR-4.0.GnomeRR.Output

    /**
     * Checks whether the given output can clone another output.
     * @param clone the output to compare
     * @returns `TRUE` if the output can clone another output
     */
    canClone(clone: Output): boolean
    /**
     * Retrieves the backlight brightness of the given output.
     * @returns The currently set backlight brightness
     */
    getBacklight(): number
    /**
     * Retrieves the CRTC of the given output.
     * @returns the CRTC of the output
     */
    getCrtc(): Crtc
    /**
     * Retrieves the current mode of the given output.
     * @returns the current mode of this output
     */
    getCurrentMode(): Mode
    /**
     * Retrieves the display name of the given output.
     * @returns the display name
     */
    getDisplayName(): string | null
    getEdidData(size: number): number
    getId(): number
    /**
     * Retrieves the model identifiers from the EDID of the given output.
     */
    getIdsFromEdid(): [ /* vendor */ string | null, /* product */ string | null, /* serial */ string | null ]
    /**
     * Checks whether the given output is the primary output.
     * @returns `TRUE` if the output is the primary one
     */
    getIsPrimary(): boolean
    getIsUnderscanning(): boolean
    /**
     * Retrieves the value of the minimum backlight step for the given output,
     * as a percentage.
     * @returns The minimum backlight step available in percent
     */
    getMinBacklightStep(): number
    /**
     * Retrieves the name of the given output.
     * @returns the name of the output
     */
    getName(): string | null
    /**
     * Retrieves the physical size of the given output.
     */
    getPhysicalSize(): [ /* widthMm */ number, /* heightMm */ number ]
    getPosition(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves all the possible CRTC for the given output.
     * @returns the list of possible CRTC
     */
    getPossibleCrtcs(): Crtc[]
    /**
     * Retrieves the preferred mode of the given output.
     * @returns the preferred mode of the output
     */
    getPreferredMode(): Mode
    /**
     * Checks whether the given output is a built-in display.
     * @returns `TRUE` if the output is a built-in display
     */
    isBuiltinDisplay(): boolean
    /**
     * Retrieves all available modes of the given output.
     * @returns a list of modes
     */
    listModes(): Mode[]
    /**
     * Sets the backlight level for the given output.
     * 
     * The value is a percentage, with a range of [0, 100].
     * @param value the absolute value of the backlight
     * @returns `TRUE` for success
     */
    setBacklight(value: number): boolean
    /**
     * Sets the color transformation matrix for the given output.
     * @param ctm the color transformation matrix
     * @returns `TRUE` on success
     */
    setColorTransform(ctm: CTM): boolean
    supportsColorTransform(): boolean
    /**
     * Checks whether the given output supports a mode.
     * @param mode the mode to compare
     * @returns `TRUE` if the mode is supported
     */
    supportsMode(mode: Mode): boolean
    supportsUnderscanning(): boolean
}

class Output {

    // Own properties of GnomeRR-4.0.GnomeRR.Output

    static name: string
}

interface OutputInfoClass {

    // Own fields of GnomeRR-4.0.GnomeRR.OutputInfoClass

    parentClass: GObject.ObjectClass
}

abstract class OutputInfoClass {

    // Own properties of GnomeRR-4.0.GnomeRR.OutputInfoClass

    static name: string
}

interface ScreenClass {

    // Own fields of GnomeRR-4.0.GnomeRR.ScreenClass

    changed: (screen: Screen) => void
    outputConnected: (screen: Screen, output: Output) => void
    outputDisconnected: (screen: Screen, output: Output) => void
}

abstract class ScreenClass {

    // Own properties of GnomeRR-4.0.GnomeRR.ScreenClass

    static name: string
}

}

export default GnomeRR;