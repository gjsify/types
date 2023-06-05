
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstcontroller-1.0-import.d.ts';
    
/**
 * GstController-1.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * The various interpolation modes available.
 */
export enum InterpolationMode {
    /**
     * steps-like interpolation, default
     */
    NONE,
    /**
     * linear interpolation
     */
    LINEAR,
    /**
     * cubic interpolation (natural), may overshoot
     *   the min or max values set by the control point, but is more 'curvy'
     */
    CUBIC,
    /**
     * monotonic cubic interpolation, will not
     *   produce any values outside of the min-max range set by the control points
     *   (Since: 1.8)
     */
    CUBIC_MONOTONIC,
}
/**
 * The various waveform modes available.
 */
export enum LFOWaveform {
    /**
     * sine waveform
     */
    SINE,
    /**
     * square waveform
     */
    SQUARE,
    /**
     * saw waveform
     */
    SAW,
    /**
     * reverse saw waveform
     */
    REVERSE_SAW,
    /**
     * triangle waveform
     */
    TRIANGLE,
}
/**
 * Reset the controlled value cache.
 * @param self the #GstTimedValueControlSource
 */
export function timedValueControlInvalidateCache(self: TimedValueControlSource): void
/**
 * Function to map a control-value to the target GValue.
 * @callback 
 * @param self the #GstDirectControlBinding instance
 * @param srcValue the value returned by the cotnrol source
 * @param destValue the target GValue
 */
export interface DirectControlBindingConvertGValue {
    (self: DirectControlBinding, srcValue: number, destValue: any): void
}
/**
 * Function to map a control-value to the target plain data type.
 * @callback 
 * @param self the #GstDirectControlBinding instance
 * @param srcValue the value returned by the cotnrol source
 * @param destValue the target location
 */
export interface DirectControlBindingConvertValue {
    (self: DirectControlBinding, srcValue: number, destValue: any | null): void
}
export module ARGBControlBinding {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {

        // Own constructor properties of GstController-1.0.GstController.ARGBControlBinding

        controlSourceA?: Gst.ControlSource | null
        controlSourceB?: Gst.ControlSource | null
        controlSourceG?: Gst.ControlSource | null
        controlSourceR?: Gst.ControlSource | null
    }

}

export interface ARGBControlBinding {

    // Own properties of GstController-1.0.GstController.ARGBControlBinding

    controlSourceA: Gst.ControlSource | null
    controlSourceB: Gst.ControlSource | null
    controlSourceG: Gst.ControlSource | null
    controlSourceR: Gst.ControlSource | null
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstController-1.0.GstController.ARGBControlBinding

    parent: Gst.ControlBinding & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @virtual 
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean

    // Overloads of getGValueArray

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets the value for the given controlled property at the requested time.
     * @virtual 
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(timestamp: Gst.ClockTime): any | null

    // Overloads of getValue

    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Sets the property of the `object,` according to the #GstControlSources that
     * handles it and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @virtual 
     * @param object the object that has controlled properties
     * @param timestamp the time that should be processed
     * @param lastSync the last time this was called
     * @returns %TRUE if the controller value could be applied to the object property, %FALSE otherwise
     */
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean

    // Overloads of syncValues

    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.ARGBControlBinding

    connect(sigName: "notify::control-source-a", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-source-a", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-source-a", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-source-a", ...args: any[]): void
    connect(sigName: "notify::control-source-b", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-source-b", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-source-b", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-source-b", ...args: any[]): void
    connect(sigName: "notify::control-source-g", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-source-g", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-source-g", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-source-g", ...args: any[]): void
    connect(sigName: "notify::control-source-r", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-source-r", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-source-r", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-source-r", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::object", callback: (...args: any[]) => void): number
    on(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A value mapping object that attaches multiple control sources to a guint
 * gobject properties representing a color. A control value of 0.0 will turn the
 * color component off and a value of 1.0 will be the color level.
 * @class 
 */
export class ARGBControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.ARGBControlBinding

    static name: string

    // Constructors of GstController-1.0.GstController.ARGBControlBinding

    constructor(config?: ARGBControlBinding.ConstructorProperties) 
    /**
     * Create a new control-binding that attaches the given #GstControlSource to the
     * #GObject property.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param csA the control source for the alpha channel
     * @param csR the control source for the red channel
     * @param csG the control source for the green channel
     * @param csB the control source for the blue channel
     * @returns the new #GstARGBControlBinding
     */
    constructor(object: Gst.Object, propertyName: string | null, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource) 
    /**
     * Create a new control-binding that attaches the given #GstControlSource to the
     * #GObject property.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param csA the control source for the alpha channel
     * @param csR the control source for the red channel
     * @param csG the control source for the green channel
     * @param csB the control source for the blue channel
     * @returns the new #GstARGBControlBinding
     */
    static new(object: Gst.Object, propertyName: string | null, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource): ARGBControlBinding
    _init(config?: ARGBControlBinding.ConstructorProperties): void
}

export module DirectControlBinding {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {

        // Own constructor properties of GstController-1.0.GstController.DirectControlBinding

        absolute?: boolean | null
        controlSource?: Gst.ControlSource | null
    }

}

export interface DirectControlBinding {

    // Own properties of GstController-1.0.GstController.DirectControlBinding

    readonly absolute: boolean
    controlSource: Gst.ControlSource | null
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstController-1.0.GstController.DirectControlBinding

    parent: Gst.ControlBinding & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @virtual 
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean

    // Overloads of getGValueArray

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets the value for the given controlled property at the requested time.
     * @virtual 
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(timestamp: Gst.ClockTime): any | null

    // Overloads of getValue

    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Sets the property of the `object,` according to the #GstControlSources that
     * handles it and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @virtual 
     * @param object the object that has controlled properties
     * @param timestamp the time that should be processed
     * @param lastSync the last time this was called
     * @returns %TRUE if the controller value could be applied to the object property, %FALSE otherwise
     */
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean

    // Overloads of syncValues

    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.DirectControlBinding

    connect(sigName: "notify::absolute", callback: (...args: any[]) => void): number
    on(sigName: "notify::absolute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::absolute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::absolute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::absolute", ...args: any[]): void
    connect(sigName: "notify::control-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::object", callback: (...args: any[]) => void): number
    on(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A value mapping object that attaches control sources to gobject properties. It
 * will map the control values directly to the target property range. If a
 * non-absolute direct control binding is used, the value range [0.0 ... 1.0]
 * is mapped to full target property range, and all values outside the range
 * will be clipped. An absolute control binding will not do any value
 * transformations.
 * @class 
 */
export class DirectControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.DirectControlBinding

    static name: string

    // Constructors of GstController-1.0.GstController.DirectControlBinding

    constructor(config?: DirectControlBinding.ConstructorProperties) 
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will map the control source range [0.0 ... 1.0] to
     * the full target property range, and clip all values outside this range.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     * @returns the new #GstDirectControlBinding
     */
    constructor(object: Gst.Object, propertyName: string | null, cs: Gst.ControlSource) 
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will map the control source range [0.0 ... 1.0] to
     * the full target property range, and clip all values outside this range.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     * @returns the new #GstDirectControlBinding
     */
    static new(object: Gst.Object, propertyName: string | null, cs: Gst.ControlSource): DirectControlBinding
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will directly map the control source values to the
     * target property range without any transformations.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     * @returns the new #GstDirectControlBinding
     */
    static newAbsolute(object: Gst.Object, propertyName: string | null, cs: Gst.ControlSource): DirectControlBinding
    _init(config?: DirectControlBinding.ConstructorProperties): void
}

export module InterpolationControlSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TimedValueControlSource.ConstructorProperties {

        // Own constructor properties of GstController-1.0.GstController.InterpolationControlSource

        mode?: InterpolationMode | null
    }

}

export interface InterpolationControlSource {

    // Own properties of GstController-1.0.GstController.InterpolationControlSource

    mode: InterpolationMode
    __gtype__: number

    // Own fields of GstController-1.0.GstController.InterpolationControlSource

    parent: TimedValueControlSource & Gst.ControlSource & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.InterpolationControlSource

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * #GstInterpolationControlSource is a #GstControlSource, that interpolates values between user-given
 * control points. It supports several interpolation modes and property types.
 * 
 * To use #GstInterpolationControlSource get a new instance by calling
 * gst_interpolation_control_source_new(), bind it to a #GParamSpec and set some
 * control points by calling gst_timed_value_control_source_set().
 * 
 * All functions are MT-safe.
 * @class 
 */
export class InterpolationControlSource extends TimedValueControlSource {

    // Own properties of GstController-1.0.GstController.InterpolationControlSource

    static name: string

    // Constructors of GstController-1.0.GstController.InterpolationControlSource

    constructor(config?: InterpolationControlSource.ConstructorProperties) 
    /**
     * This returns a new, unbound #GstInterpolationControlSource.
     * @constructor 
     * @returns a new, unbound #GstInterpolationControlSource.
     */
    constructor() 
    /**
     * This returns a new, unbound #GstInterpolationControlSource.
     * @constructor 
     * @returns a new, unbound #GstInterpolationControlSource.
     */
    static new(): InterpolationControlSource
    _init(config?: InterpolationControlSource.ConstructorProperties): void
}

export module LFOControlSource {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ControlSource.ConstructorProperties {

        // Own constructor properties of GstController-1.0.GstController.LFOControlSource

        /**
         * Specifies the amplitude for the waveform of this #GstLFOControlSource.
         */
        amplitude?: number | null
        /**
         * Specifies the frequency that should be used for the waveform
         * of this #GstLFOControlSource. It should be large enough
         * so that the period is longer than one nanosecond.
         */
        frequency?: number | null
        /**
         * Specifies the value offset for the waveform of this #GstLFOControlSource.
         */
        offset?: number | null
        /**
         * Specifies the timeshift to the right that should be used for the waveform
         * of this #GstLFOControlSource in nanoseconds.
         * 
         * To get a n nanosecond shift to the left use
         * "(GST_SECOND / frequency) - n".
         */
        timeshift?: number | null
        /**
         * Specifies the waveform that should be used for this #GstLFOControlSource.
         */
        waveform?: LFOWaveform | null
    }

}

export interface LFOControlSource {

    // Own properties of GstController-1.0.GstController.LFOControlSource

    /**
     * Specifies the amplitude for the waveform of this #GstLFOControlSource.
     */
    amplitude: number
    /**
     * Specifies the frequency that should be used for the waveform
     * of this #GstLFOControlSource. It should be large enough
     * so that the period is longer than one nanosecond.
     */
    frequency: number
    /**
     * Specifies the value offset for the waveform of this #GstLFOControlSource.
     */
    offset: number
    /**
     * Specifies the timeshift to the right that should be used for the waveform
     * of this #GstLFOControlSource in nanoseconds.
     * 
     * To get a n nanosecond shift to the left use
     * "(GST_SECOND / frequency) - n".
     */
    timeshift: number
    /**
     * Specifies the waveform that should be used for this #GstLFOControlSource.
     */
    waveform: LFOWaveform
    __gtype__: number

    // Own fields of GstController-1.0.GstController.LFOControlSource

    parent: Gst.ControlSource & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.LFOControlSource

    connect(sigName: "notify::amplitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::amplitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::amplitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::amplitude", ...args: any[]): void
    connect(sigName: "notify::frequency", callback: (...args: any[]) => void): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frequency", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::timeshift", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeshift", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeshift", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeshift", ...args: any[]): void
    connect(sigName: "notify::waveform", callback: (...args: any[]) => void): number
    on(sigName: "notify::waveform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::waveform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::waveform", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * #GstLFOControlSource is a #GstControlSource, that provides several periodic
 * waveforms as control values.
 * 
 * To use #GstLFOControlSource get a new instance by calling
 * gst_lfo_control_source_new(), bind it to a #GParamSpec and set the relevant
 * properties.
 * 
 * All functions are MT-safe.
 * @class 
 */
export class LFOControlSource extends Gst.ControlSource {

    // Own properties of GstController-1.0.GstController.LFOControlSource

    static name: string

    // Constructors of GstController-1.0.GstController.LFOControlSource

    constructor(config?: LFOControlSource.ConstructorProperties) 
    /**
     * This returns a new, unbound #GstLFOControlSource.
     * @constructor 
     * @returns a new, unbound #GstLFOControlSource.
     */
    constructor() 
    /**
     * This returns a new, unbound #GstLFOControlSource.
     * @constructor 
     * @returns a new, unbound #GstLFOControlSource.
     */
    static new(): LFOControlSource
    _init(config?: LFOControlSource.ConstructorProperties): void
}

export module ProxyControlBinding {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {
    }

}

export interface ProxyControlBinding {

    // Own properties of GstController-1.0.GstController.ProxyControlBinding

    __gtype__: number

    // Conflicting properties

    object: any

    // Conflicting methods

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @virtual 
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean

    // Overloads of getGValueArray

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     * @returns %TRUE if the given array could be filled, %FALSE otherwise
     */
    getGValueArray(propertyName: string | null, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Gets the value for the given controlled property at the requested time.
     * @virtual 
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(timestamp: Gst.ClockTime): any | null

    // Overloads of getValue

    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     * @returns the GValue of the property at the given time, or %NULL if the property isn't controlled.
     */
    getValue(propertyName: string | null, timestamp: Gst.ClockTime): any | null
    /**
     * Sets the property of the `object,` according to the #GstControlSources that
     * handles it and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @virtual 
     * @param object the object that has controlled properties
     * @param timestamp the time that should be processed
     * @param lastSync the last time this was called
     * @returns %TRUE if the controller value could be applied to the object property, %FALSE otherwise
     */
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean

    // Overloads of syncValues

    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     * @returns %TRUE if the controller values could be applied to the object properties, %FALSE otherwise
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.ProxyControlBinding

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::object", callback: (...args: any[]) => void): number
    on(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstControlBinding that forwards requests to another #GstControlBinding
 * @class 
 */
export class ProxyControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.ProxyControlBinding

    static name: string

    // Constructors of GstController-1.0.GstController.ProxyControlBinding

    constructor(config?: ProxyControlBinding.ConstructorProperties) 
    /**
     * #GstProxyControlBinding forwards all access to data or `sync_values()`
     * requests from `property_name` on `object` to the control binding at
     * `ref_property_name` on `ref_object`.
     * @constructor 
     * @param object a #GstObject
     * @param propertyName the property name in `object` to control
     * @param refObject a #GstObject to forward all              #GstControlBinding requests to
     * @param refPropertyName the property_name in `ref_object` to control
     * @returns a new #GstControlBinding that proxies the control interface between properties on different #GstObject's
     */
    constructor(object: Gst.Object, propertyName: string | null, refObject: Gst.Object, refPropertyName: string | null) 
    /**
     * #GstProxyControlBinding forwards all access to data or `sync_values()`
     * requests from `property_name` on `object` to the control binding at
     * `ref_property_name` on `ref_object`.
     * @constructor 
     * @param object a #GstObject
     * @param propertyName the property name in `object` to control
     * @param refObject a #GstObject to forward all              #GstControlBinding requests to
     * @param refPropertyName the property_name in `ref_object` to control
     * @returns a new #GstControlBinding that proxies the control interface between properties on different #GstObject's
     */
    static new(object: Gst.Object, propertyName: string | null, refObject: Gst.Object, refPropertyName: string | null): ProxyControlBinding
    _init(config?: ProxyControlBinding.ConstructorProperties): void
}

export module TimedValueControlSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-added`
     */
    export interface ValueAddedSignalCallback {
        (timedValue: ControlPoint): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (timedValue: ControlPoint): void
    }

    /**
     * Signal callback interface for `value-removed`
     */
    export interface ValueRemovedSignalCallback {
        (timedValue: ControlPoint): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ControlSource.ConstructorProperties {
    }

}

export interface TimedValueControlSource {

    // Own properties of GstController-1.0.GstController.TimedValueControlSource

    __gtype__: number

    // Own fields of GstController-1.0.GstController.TimedValueControlSource

    parent: Gst.ControlSource & Gst.Object & Gst.Object
    lock: GLib.Mutex
    values: GLib.Sequence
    nvalues: number
    validCache: boolean

    // Owm methods of GstController-1.0.GstController.TimedValueControlSource

    /**
     * Find last value before given timestamp in control point list.
     * If all values in the control point list come after the given
     * timestamp or no values exist, %NULL is returned.
     * 
     * For use in control source implementations.
     * @param timestamp the search key
     * @returns the found #GSequenceIter or %NULL
     */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter | null
    /**
     * Returns a read-only copy of the list of #GstTimedValue for the given property.
     * Free the list after done with it.
     * @returns a copy of the list, or %NULL if the property isn't handled by the controller
     */
    getAll(): Gst.TimedValue[]
    /**
     * Get the number of control points that are set.
     * @returns the number of control points that are set.
     */
    getCount(): number
    /**
     * Set the value of given controller-handled property at a certain time.
     * @param timestamp the time the control-change is scheduled for
     * @param value the control-value
     * @returns FALSE if the values couldn't be set, TRUE otherwise.
     */
    set(timestamp: Gst.ClockTime, value: number): boolean
    /**
     * Sets multiple timed values at once.
     * @param timedvalues a list with #GstTimedValue items
     * @returns FALSE if the values couldn't be set, TRUE otherwise.
     */
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    /**
     * Used to remove the value of given controller-handled property at a certain
     * time.
     * @param timestamp the time the control-change should be removed from
     * @returns FALSE if the value couldn't be unset (i.e. not found, TRUE otherwise.
     */
    unset(timestamp: Gst.ClockTime): boolean
    /**
     * Used to remove all time-stamped values of given controller-handled property
     */
    unsetAll(): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own signals of GstController-1.0.GstController.TimedValueControlSource

    connect(sigName: "value-added", callback: TimedValueControlSource.ValueAddedSignalCallback): number
    on(sigName: "value-added", callback: TimedValueControlSource.ValueAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-added", callback: TimedValueControlSource.ValueAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-added", callback: TimedValueControlSource.ValueAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-added", ...args: any[]): void
    connect(sigName: "value-changed", callback: TimedValueControlSource.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: TimedValueControlSource.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: TimedValueControlSource.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: TimedValueControlSource.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", ...args: any[]): void
    connect(sigName: "value-removed", callback: TimedValueControlSource.ValueRemovedSignalCallback): number
    on(sigName: "value-removed", callback: TimedValueControlSource.ValueRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: TimedValueControlSource.ValueRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: TimedValueControlSource.ValueRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-removed", ...args: any[]): void

    // Class property signals of GstController-1.0.GstController.TimedValueControlSource

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
    disconnect(id: number): void
}

/**
 * Base class for #GstControlSource that use time-stamped values.
 * 
 * When overriding bind, chain up first to give this bind implementation a
 * chance to setup things.
 * 
 * All functions are MT-safe.
 * @class 
 */
export class TimedValueControlSource extends Gst.ControlSource {

    // Own properties of GstController-1.0.GstController.TimedValueControlSource

    static name: string

    // Constructors of GstController-1.0.GstController.TimedValueControlSource

    constructor(config?: TimedValueControlSource.ConstructorProperties) 
    _init(config?: TimedValueControlSource.ConstructorProperties): void
}

export module TriggerControlSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TimedValueControlSource.ConstructorProperties {

        // Own constructor properties of GstController-1.0.GstController.TriggerControlSource

        tolerance?: number | null
    }

}

export interface TriggerControlSource {

    // Own properties of GstController-1.0.GstController.TriggerControlSource

    tolerance: number
    __gtype__: number

    // Own fields of GstController-1.0.GstController.TriggerControlSource

    parent: TimedValueControlSource & Gst.ControlSource & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstController-1.0.GstController.TriggerControlSource

    connect(sigName: "notify::tolerance", callback: (...args: any[]) => void): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tolerance", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * #GstTriggerControlSource is a #GstControlSource, that returns values from user-given
 * control points. It allows for a tolerance on the time-stamps.
 * 
 * To use #GstTriggerControlSource get a new instance by calling
 * gst_trigger_control_source_new(), bind it to a #GParamSpec and set some
 * control points by calling gst_timed_value_control_source_set().
 * 
 * All functions are MT-safe.
 * @class 
 */
export class TriggerControlSource extends TimedValueControlSource {

    // Own properties of GstController-1.0.GstController.TriggerControlSource

    static name: string

    // Constructors of GstController-1.0.GstController.TriggerControlSource

    constructor(config?: TriggerControlSource.ConstructorProperties) 
    /**
     * This returns a new, unbound #GstTriggerControlSource.
     * @constructor 
     * @returns a new, unbound #GstTriggerControlSource.
     */
    constructor() 
    /**
     * This returns a new, unbound #GstTriggerControlSource.
     * @constructor 
     * @returns a new, unbound #GstTriggerControlSource.
     */
    static new(): TriggerControlSource
    _init(config?: TriggerControlSource.ConstructorProperties): void
}

export interface ARGBControlBindingClass {

    // Own fields of GstController-1.0.GstController.ARGBControlBindingClass

    /**
     * Parent class
     * @field 
     */
    parentClass: Gst.ControlBindingClass
}

/**
 * The class structure of #GstARGBControlBinding.
 * @record 
 */
export abstract class ARGBControlBindingClass {

    // Own properties of GstController-1.0.GstController.ARGBControlBindingClass

    static name: string
}

export interface ControlPoint {

    // Own fields of GstController-1.0.GstController.ControlPoint

    /**
     * timestamp of the value change
     * @field 
     */
    timestamp: Gst.ClockTime
    /**
     * the new value
     * @field 
     */
    value: number

    // Owm methods of GstController-1.0.GstController.ControlPoint

    /**
     * Copies a #GstControlPoint
     * @returns A copy of @cp
     */
    copy(): ControlPoint
    /**
     * Frees all data allocated by a #GstControlPoint instance.
     */
    free(): void
}

/**
 * An internal structure for value+time and various temporary
 * values used for interpolation. This "inherits" from
 * GstTimedValue.
 * @record 
 */
export class ControlPoint {

    // Own properties of GstController-1.0.GstController.ControlPoint

    static name: string
}

export interface DirectControlBindingClass {

    // Own fields of GstController-1.0.GstController.DirectControlBindingClass

    /**
     * Parent class
     * @field 
     */
    parentClass: Gst.ControlBindingClass
}

/**
 * The class structure of #GstDirectControlBinding.
 * @record 
 */
export abstract class DirectControlBindingClass {

    // Own properties of GstController-1.0.GstController.DirectControlBindingClass

    static name: string
}

export interface InterpolationControlSourceClass {

    // Own fields of GstController-1.0.GstController.InterpolationControlSourceClass

    parentClass: TimedValueControlSourceClass
}

export abstract class InterpolationControlSourceClass {

    // Own properties of GstController-1.0.GstController.InterpolationControlSourceClass

    static name: string
}

export interface InterpolationControlSourcePrivate {
}

export class InterpolationControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.InterpolationControlSourcePrivate

    static name: string
}

export interface LFOControlSourceClass {

    // Own fields of GstController-1.0.GstController.LFOControlSourceClass

    parentClass: Gst.ControlSourceClass
}

export abstract class LFOControlSourceClass {

    // Own properties of GstController-1.0.GstController.LFOControlSourceClass

    static name: string
}

export interface LFOControlSourcePrivate {
}

export class LFOControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.LFOControlSourcePrivate

    static name: string
}

export interface ProxyControlBindingClass {
}

/**
 * Opaque #GstProxyControlBindingClass struct
 * @record 
 */
export abstract class ProxyControlBindingClass {

    // Own properties of GstController-1.0.GstController.ProxyControlBindingClass

    static name: string
}

export interface TimedValueControlSourceClass {

    // Own fields of GstController-1.0.GstController.TimedValueControlSourceClass

    parentClass: Gst.ControlSourceClass
}

export abstract class TimedValueControlSourceClass {

    // Own properties of GstController-1.0.GstController.TimedValueControlSourceClass

    static name: string
}

export interface TimedValueControlSourcePrivate {
}

export class TimedValueControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.TimedValueControlSourcePrivate

    static name: string
}

export interface TriggerControlSourceClass {

    // Own fields of GstController-1.0.GstController.TriggerControlSourceClass

    parentClass: TimedValueControlSourceClass
}

export abstract class TriggerControlSourceClass {

    // Own properties of GstController-1.0.GstController.TriggerControlSourceClass

    static name: string
}

export interface TriggerControlSourcePrivate {
}

export class TriggerControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.TriggerControlSourcePrivate

    static name: string
}

// END