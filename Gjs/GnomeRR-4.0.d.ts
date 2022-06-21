// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeRR-4.0
 */

import type * as Gjs from './Gjs';
import type GnomeDesktop from './GnomeDesktop-4.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type GDesktopEnums from './GDesktopEnums-3.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';

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
const CONNECTOR_TYPE_PANEL: string
/**
 * Returns the error domain used by the GnomeRR API.
 */
function error_quark(): GLib.Quark
interface Config_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeRR-4.0.GnomeRR.Config

    screen?: Screen | null
}

interface Config {

    // Own properties of GnomeRR-4.0.GnomeRR.Config

    readonly screen: Screen

    // Owm methods of GnomeRR-4.0.GnomeRR.Config

    applicable(screen: Screen): boolean
    apply(screen: Screen): boolean
    apply_persistent(screen: Screen): boolean
    ensure_primary(): boolean
    equal(config2: Config): boolean
    get_clone(): boolean
    get_outputs(): OutputInfo[]
    load_current(): boolean
    match(config2: Config): boolean
    sanitize(): void
    set_clone(clone: boolean): void

    // Class property signals of GnomeRR-4.0.GnomeRR.Config

    connect(sigName: "notify::screen", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Config extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of GnomeRR-4.0.GnomeRR.Config

    constructor(config?: Config_ConstructProps) 
    static new_current(screen: Screen): Config
    _init(config?: Config_ConstructProps): void
}

interface OutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface OutputInfo {

    // Owm methods of GnomeRR-4.0.GnomeRR.OutputInfo

    get_aspect_ratio(): number
    get_display_name(): string
    /**
     * Get the geometry for the monitor connected to the specified output.
     * 
     * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
     */
    get_geometry(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    /**
     * Retrieves the output name.
     */
    get_name(): string
    get_preferred_height(): number
    get_preferred_width(): number
    get_primary(): boolean
    get_product(): string
    get_refresh_rate(): number
    get_rotation(): Rotation
    get_serial(): string
    get_underscanning(): boolean
    get_vendor(): string
    is_active(): boolean
    is_connected(): boolean
    is_primary_tile(): boolean
    set_active(active: boolean): void
    /**
     * Set the geometry for the monitor connected to the specified output.
     * 
     * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
     * @param x x offset for monitor
     * @param y y offset for monitor
     * @param width monitor width
     * @param height monitor height
     */
    set_geometry(x: number, y: number, width: number, height: number): void
    set_primary(primary: boolean): void
    set_refresh_rate(rate: number): void
    set_rotation(rotation: Rotation): void
    set_underscanning(underscanning: boolean): void
    supports_rotation(rotation: Rotation): boolean

    // Class property signals of GnomeRR-4.0.GnomeRR.OutputInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The representation of an output, which can be used for
 * querying and setting display state.
 * @class 
 */
class OutputInfo extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.OutputInfo

    static name: string
    static $gtype: GObject.GType<OutputInfo>

    // Constructors of GnomeRR-4.0.GnomeRR.OutputInfo

    constructor(config?: OutputInfo_ConstructProps) 
    _init(config?: OutputInfo_ConstructProps): void
}

interface Screen_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GnomeRR-4.0.GnomeRR.Screen

    dpms_mode?: DpmsModeType | null
    gdk_display?: Gdk.Display | null
}

/**
 * Signal callback interface for `changed`
 */
interface Screen_ChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `output-connected`
 */
interface Screen_OutputConnectedSignalCallback {
    ($obj: Screen, output: Output): void
}

/**
 * Signal callback interface for `output-disconnected`
 */
interface Screen_OutputDisconnectedSignalCallback {
    ($obj: Screen, output: Output): void
}

interface Screen extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of GnomeRR-4.0.GnomeRR.Screen

    dpms_mode: DpmsModeType
    readonly gdk_display: Gdk.Display

    // Own fields of GnomeRR-4.0.GnomeRR.Screen

    parent_instance: GObject.Object

    // Owm methods of GnomeRR-4.0.GnomeRR.Screen

    /**
     * Retrieves the CRTC of the screen using the given identifier.
     * @param id the identifier of a CRTC
     */
    get_crtc_by_id(id: number): Crtc
    get_dpms_mode(): [ /* returnType */ boolean, /* mode */ DpmsMode ]
    /**
     * Retrieves the output of a screen using the given identifier.
     * @param id the identifier of an output
     */
    get_output_by_id(id: number): Output
    /**
     * Retrieves the output for the given name.
     * @param name 
     */
    get_output_by_name(name: string): Output
    /**
     * Get the ranges of the screen
     */
    get_ranges(): [ /* min_width */ number, /* max_width */ number, /* min_height */ number, /* max_height */ number ]
    /**
     * Lists all available XRandR clone modes.
     */
    list_clone_modes(): Mode[]
    /**
     * List all CRTCs of the given screen.
     */
    list_crtcs(): Crtc[]
    /**
     * Lists all available XRandR modes.
     */
    list_modes(): Mode[]
    /**
     * List all outputs of the given screen.
     */
    list_outputs(): Output[]
    /**
     * Refreshes the screen configuration, and calls the screen's callback if it
     * exists and if the screen's configuration changed.
     */
    refresh(): boolean
    /**
     * This method also disables the DPMS timeouts.
     * @param mode 
     */
    set_dpms_mode(mode: DpmsMode): boolean

    // Own virtual methods of GnomeRR-4.0.GnomeRR.Screen

    vfunc_changed(): void
    vfunc_output_connected(output: Output): void
    vfunc_output_disconnected(output: Output): void

    // Own signals of GnomeRR-4.0.GnomeRR.Screen

    connect(sigName: "changed", callback: Screen_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Screen_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "output-connected", callback: Screen_OutputConnectedSignalCallback): number
    connect_after(sigName: "output-connected", callback: Screen_OutputConnectedSignalCallback): number
    emit(sigName: "output-connected", output: Output, ...args: any[]): void
    connect(sigName: "output-disconnected", callback: Screen_OutputDisconnectedSignalCallback): number
    connect_after(sigName: "output-disconnected", callback: Screen_OutputDisconnectedSignalCallback): number
    emit(sigName: "output-disconnected", output: Output, ...args: any[]): void

    // Class property signals of GnomeRR-4.0.GnomeRR.Screen

    connect(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dpms-mode", ...args: any[]): void
    connect(sigName: "notify::gdk-display", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gdk-display", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gdk-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Screen extends GObject.Object {

    // Own properties of GnomeRR-4.0.GnomeRR.Screen

    static name: string
    static $gtype: GObject.GType<Screen>

    // Constructors of GnomeRR-4.0.GnomeRR.Screen

    constructor(config?: Screen_ConstructProps) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `display`.
     * @constructor 
     * @param display the windowing system connection used to query the display data
     */
    constructor(display: Gdk.Display) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `display`.
     * @constructor 
     * @param display the windowing system connection used to query the display data
     */
    static new(display: Gdk.Display): Screen
    /**
     * Finishes the asynchronous creation of a new #GnomeRRScreen instance.
     * @constructor 
     * @param result the result of the asynchronous operation
     */
    static new_finish(result: Gio.AsyncResult): Screen
    _init(config?: Screen_ConstructProps): void
    /**
     * Asynchronously creates a new #GnomeRRScreen instance.
     * 
     * On both success and error, `callback` will be invoked. You should use
     * gnome_rr_screen_new_finish() to retrieve the newly created #GnomeRRScreen
     * instance.
     * @param display the windowing system connection used to query the display
     * @param callback the function to call when the #GnomeRRScreen is ready, or on error
     */
    static new_async(display: Gdk.Display, callback: Gio.AsyncReadyCallback | null): void
}

interface CTM {
}

class CTM {

    // Own properties of GnomeRR-4.0.GnomeRR.CTM

    static name: string
}

interface ConfigClass {

    // Own fields of GnomeRR-4.0.GnomeRR.ConfigClass

    parent_class: GObject.ObjectClass
}

abstract class ConfigClass {

    // Own properties of GnomeRR-4.0.GnomeRR.ConfigClass

    static name: string
}

interface Crtc {

    // Owm methods of GnomeRR-4.0.GnomeRR.Crtc

    can_drive_output(output: Output): boolean
    get_current_mode(): Mode
    get_current_rotation(): Rotation
    get_gamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    get_id(): number
    get_position(): [ /* x */ number, /* y */ number ]
    get_rotations(): Rotation
    set_gamma(size: number, red: number, green: number, blue: number): boolean
    supports_rotation(rotation: Rotation): boolean
}

class Crtc {

    // Own properties of GnomeRR-4.0.GnomeRR.Crtc

    static name: string
}

interface Mode {

    // Owm methods of GnomeRR-4.0.GnomeRR.Mode

    get_freq(): number
    get_freq_f(): number
    get_height(): number
    get_id(): number
    get_is_interlaced(): boolean
    /**
     * Returns TRUE if this mode is a tiled
     * mode created for span a tiled monitor.
     */
    get_is_tiled(): boolean
    get_width(): number
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
     */
    can_clone(clone: Output): boolean
    /**
     * Retrieves the backlight brightness of the given output.
     */
    get_backlight(): number
    /**
     * Retrieves the CRTC of the given output.
     */
    get_crtc(): Crtc
    /**
     * Retrieves the current mode of the given output.
     */
    get_current_mode(): Mode
    /**
     * Retrieves the display name of the given output.
     */
    get_display_name(): string
    get_edid_data(size: number): number
    get_id(): number
    /**
     * Retrieves the model identifiers from the EDID of the given output.
     */
    get_ids_from_edid(): [ /* vendor */ string, /* product */ string, /* serial */ string ]
    /**
     * Checks whether the given output is the primary output.
     */
    get_is_primary(): boolean
    get_is_underscanning(): boolean
    /**
     * Retrieves the value of the minimum backlight step for the given output,
     * as a percentage.
     */
    get_min_backlight_step(): number
    /**
     * Retrieves the name of the given output.
     */
    get_name(): string
    /**
     * Retrieves the physical size of the given output.
     */
    get_physical_size(): [ /* width_mm */ number, /* height_mm */ number ]
    get_position(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves all the possible CRTC for the given output.
     */
    get_possible_crtcs(): Crtc[]
    /**
     * Retrieves the preferred mode of the given output.
     */
    get_preferred_mode(): Mode
    /**
     * Checks whether the given output is a built-in display.
     */
    is_builtin_display(): boolean
    /**
     * Retrieves all available modes of the given output.
     */
    list_modes(): Mode[]
    /**
     * Sets the backlight level for the given output.
     * 
     * The value is a percentage, with a range of [0, 100].
     * @param value the absolute value of the backlight
     */
    set_backlight(value: number): boolean
    /**
     * Sets the color transformation matrix for the given output.
     * @param ctm the color transformation matrix
     */
    set_color_transform(ctm: CTM): boolean
    supports_color_transform(): boolean
    /**
     * Checks whether the given output supports a mode.
     * @param mode the mode to compare
     */
    supports_mode(mode: Mode): boolean
    supports_underscanning(): boolean
}

class Output {

    // Own properties of GnomeRR-4.0.GnomeRR.Output

    static name: string
}

interface OutputInfoClass {

    // Own fields of GnomeRR-4.0.GnomeRR.OutputInfoClass

    parent_class: GObject.ObjectClass
}

abstract class OutputInfoClass {

    // Own properties of GnomeRR-4.0.GnomeRR.OutputInfoClass

    static name: string
}

interface ScreenClass {

    // Own fields of GnomeRR-4.0.GnomeRR.ScreenClass

    changed: (screen: Screen) => void
    output_connected: (screen: Screen, output: Output) => void
    output_disconnected: (screen: Screen, output: Output) => void
}

abstract class ScreenClass {

    // Own properties of GnomeRR-4.0.GnomeRR.ScreenClass

    static name: string
}

}
export default GnomeRR;