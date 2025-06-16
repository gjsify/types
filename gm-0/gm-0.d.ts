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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gm {
    /**
     * Gm-0
     */

    /**
     * Error codes returned by gmobile functions.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * Parsing of the given data failed.
         */
        static ERROR_PARSING_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Read compatible machine types from
     * `sysfs_root/firmware/devicetree/base/compatible` on Linux.
     * If the path doesn't exist or host is not Linux return %NULL.
     *
     * For debugging purposes `GMOBILE_DT_COMPATIBLES` can be set to a `:`
     * separated list of compatibles which will be returned instead.
     * @param sysfs_root Path where /sys is mounted. Defaults to `/sys` if %NULL is passed.
     * @returns compatible machine types or %NULL
     */
    function device_tree_get_compatibles(sysfs_root: string): string[];
    /**
     * Gets the GM Error Quark.
     * @returns a #GQuark.
     */
    function error_quark(): GLib.Quark;
    /**
     * Call this function to initialize the library explicitly. This makes
     * the embedded device information available.
     */
    function init(): void;
    /**
     * Returns the bounding box of an SVG path. As this is meant for
     * display cutouts we operate on integer (whole pixel) values.  When
     * parsing fails, `FALSE` is returned and `error` contains the error
     * information.
     * @param path An SVG path
     * @param x1 The lower x coordinate
     * @param x2 The upper x coordinate
     * @param y1 The lower y coordinate
     * @param y2 The upper x coordinate
     * @returns `TRUE` when parsing was successful, `FALSE` otherwise. See https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths for path syntax introduction.
     */
    function svg_path_get_bounding_box(path: string, x1: number, x2: number, y1: number, y2: number): boolean;
    /**
     * Sets a function to be called after a timeout with priority `priority`.
     * Correctly calculates the timeout even when the system is suspended in between.
     *
     * This internally creates a main loop source using
     * g_timeout_source_new_seconds() and attaches it to the main loop context
     * using g_source_attach().
     *
     * The timeout given is in terms of `CLOCK_BOOTTIME` time, it hence is also
     * correct across suspend and resume. If that doesn't matter use
     * `g_timeout_add_seconds_full` instead.
     *
     * Note that glib's `g_timeout_add_seconds()` doesn't take system
     * suspend/resume into account: https://gitlab.gnome.org/GNOME/glib/-/issues/2739
     * @param priority the priority of the timeout source. Typically this will be in   the range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
     * @param seconds the timeout in seconds
     * @param _function function to call
     * @param notify function to call when the timeout is removed, or %NULL
     * @returns the ID (greater than 0) of the event source.
     */
    function timeout_add_seconds_once(
        priority: number,
        seconds: number,
        _function: GLib.SourceOnceFunc,
        notify?: GLib.DestroyNotify | null,
    ): number;
    namespace Cutout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bounds': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bounds: Rect;
            name: string;
            path: string;
        }
    }

    /**
     * A display cutout or notch.
     *
     * A display cutout is an area of a display that is not usable for
     * rendering e.g.  because a camera or speaker is placed there. This
     * includes so called "notches".  The are needs to be avoided when
     * rendering. It is described by a SVG path. Each cutouts coordinate
     * systems is located at the top left display corner in the displays
     * natural orientation. Applications can query the area to avoid
     * for rendering via the `bounds` property so they don't need to
     * deal with the SVG path themselves.
     */
    class Cutout extends GObject.Object {
        static $gtype: GObject.GType<Cutout>;

        // Properties

        /**
         * Rectangular bounds of the cutout
         */
        get bounds(): Rect;
        /**
         * A name identifying the cutout.
         */
        get name(): string;
        /**
         * The SVG path that describes the display cutout or notch.
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cutout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cutout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): Cutout;

        // Signals

        connect<K extends keyof Cutout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cutout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cutout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cutout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cutout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cutout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the bounding box of the cutout.
         * @returns The bounding box.
         */
        get_bounds(): Rect;
        /**
         * The name of the cutout.
         * @returns The cutout's name.
         */
        get_name(): string;
        /**
         * Gets the SVG path describing the shape of the cutout.
         * @returns The cutout's shape as SVG path
         */
        get_path(): string;
    }

    namespace DeviceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::compatibles': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compatibles: string[];
        }
    }

    /**
     * Get device dependent information.
     *
     * Allows to query device dependent information from different
     * sources (currently we only look a the built-in gresources).
     *
     * The lookups are currently based on device tree compatibles.
     * See [func`device_tree_get_compatibles]`.
     */
    class DeviceInfo extends GObject.Object {
        static $gtype: GObject.GType<DeviceInfo>;

        // Properties

        /**
         * The compatibles to look up device information for.
         */
        get compatibles(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DeviceInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](compatibles: string): DeviceInfo;

        // Signals

        connect<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeviceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets display panel information. Queries the database for the best
         * matching panel based on the device's compatibles.
         * @returns The display panel information
         */
        get_display_panel(): DisplayPanel;
    }

    namespace DisplayPanel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::border-radius': (pspec: GObject.ParamSpec) => void;
            'notify::cutouts': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x-res': (pspec: GObject.ParamSpec) => void;
            'notify::y-res': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            border_radius: number;
            borderRadius: number;
            cutouts: Gio.ListStore;
            height: number;
            name: string;
            width: number;
            x_res: number;
            xRes: number;
            y_res: number;
            yRes: number;
        }
    }

    /**
     * Physical properties of a display panel like size, cutouts and
     * rounded corners.
     */
    class DisplayPanel extends GObject.Object {
        static $gtype: GObject.GType<DisplayPanel>;

        // Properties

        /**
         * The border radius of the panel edges in device pixels
         * If a single border radius isn't enough use multiple [type`Cutout]`.
         */
        get border_radius(): number;
        set border_radius(val: number);
        /**
         * The border radius of the panel edges in device pixels
         * If a single border radius isn't enough use multiple [type`Cutout]`.
         */
        get borderRadius(): number;
        set borderRadius(val: number);
        /**
         * The display cutouts as `GListModel` of [class`Cutout]`.
         */
        get cutouts(): Gio.ListStore;
        set cutouts(val: Gio.ListStore);
        /**
         * The display height in millimeters
         */
        get height(): number;
        set height(val: number);
        /**
         * The name of the display
         */
        get name(): string;
        set name(val: string);
        /**
         * The display width in millimeters
         */
        get width(): number;
        set width(val: number);
        /**
         * The panel resolution in pixels in the x direction
         */
        get x_res(): number;
        set x_res(val: number);
        /**
         * The panel resolution in pixels in the x direction
         */
        get xRes(): number;
        set xRes(val: number);
        /**
         * The panel resolution in pixels in the y direction
         */
        get y_res(): number;
        set y_res(val: number);
        /**
         * The panel resolution in pixels in the y direction
         */
        get yRes(): number;
        set yRes(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DisplayPanel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DisplayPanel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DisplayPanel;

        static new_from_data(data: string): DisplayPanel;

        static new_from_resource(resource_name: string): DisplayPanel;

        // Signals

        connect<K extends keyof DisplayPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DisplayPanel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DisplayPanel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DisplayPanel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DisplayPanel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DisplayPanel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the panels border radius. 0 indicates rectangular corners.  If
         * given applies to all corners of the panel.
         * @returns The panel's border radius.
         */
        get_border_radius(): number;
        /**
         * Get the display cutouts.
         * @returns The display cutouts
         */
        get_cutouts(): Gio.ListModel;
        /**
         * Gets the panels height in mm.
         * @returns The panel's height.
         */
        get_height(): number;
        /**
         * Gets the panel's name.
         * @returns The panel's name
         */
        get_name(): string;
        /**
         * Gets the panels width in mm.
         * @returns The panel's width.
         */
        get_width(): number;
        /**
         * Gets the panels resolution (in pixels) in the x direction
         * @returns The x resolution.
         */
        get_x_res(): number;
        /**
         * Gets the panels resolution (in pixels) in the y direction.
         * @returns The y resolution.
         */
        get_y_res(): number;
    }

    type CutoutClass = typeof Cutout;
    type DeviceInfoClass = typeof DeviceInfo;
    type DisplayPanelClass = typeof DisplayPanel;
    /**
     * A rectangle.
     *
     * Similar to GdkRectangle but we don't want to pull in gtk/gdk.
     */
    class Rect {
        static $gtype: GObject.GType<Rect>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
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

export default Gm;

// END
