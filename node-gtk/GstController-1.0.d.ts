// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstController-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstController {

/**
 * The various interpolation modes available.
 */
enum InterpolationMode {
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
enum LFOWaveform {
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
function timedValueControlInvalidateCache(self: TimedValueControlSource): void
/**
 * Function to map a control-value to the target GValue.
 * @callback 
 * @param self the #GstDirectControlBinding instance
 * @param srcValue the value returned by the cotnrol source
 * @param destValue the target GValue
 */
interface DirectControlBindingConvertGValue {
    (self: DirectControlBinding, srcValue: number, destValue: any): void
}
/**
 * Function to map a control-value to the target plain data type.
 * @callback 
 * @param self the #GstDirectControlBinding instance
 * @param srcValue the value returned by the cotnrol source
 * @param destValue the target location
 */
interface DirectControlBindingConvertValue {
    (self: DirectControlBinding, srcValue: number, destValue: object | null): void
}
interface ARGBControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {

    // Own constructor properties of GstController-1.0.GstController.ARGBControlBinding

    controlSourceA?: Gst.ControlSource | null
    controlSourceB?: Gst.ControlSource | null
    controlSourceG?: Gst.ControlSource | null
    controlSourceR?: Gst.ControlSource | null
}

interface ARGBControlBinding {

    // Own properties of GstController-1.0.GstController.ARGBControlBinding

    controlSourceA: Gst.ControlSource
    controlSourceB: Gst.ControlSource
    controlSourceG: Gst.ControlSource
    controlSourceR: Gst.ControlSource

    // Conflicting properties

    object: any

    // Own fields of GstController-1.0.GstController.ARGBControlBinding

    parent: Gst.ControlBinding

    // Conflicting methods

    getGValueArray(...args: any[]): any
    getValue(...args: any[]): any
    syncValues(...args: any[]): any
    ref(...args: any[]): any

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
}

/**
 * A value mapping object that attaches multiple control sources to a guint
 * gobject properties representing a color. A control value of 0.0 will turn the
 * color component off and a value of 1.0 will be the color level.
 * @class 
 */
class ARGBControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.ARGBControlBinding

    static name: string
    static $gtype: GObject.GType<ARGBControlBinding>

    // Constructors of GstController-1.0.GstController.ARGBControlBinding

    constructor(config?: ARGBControlBinding_ConstructProps) 
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
     */
    constructor(object: Gst.Object, propertyName: string, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource) 
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
     */
    static new(object: Gst.Object, propertyName: string, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource): ARGBControlBinding
    _init(config?: ARGBControlBinding_ConstructProps): void
}

interface DirectControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {

    // Own constructor properties of GstController-1.0.GstController.DirectControlBinding

    absolute?: boolean | null
    controlSource?: Gst.ControlSource | null
}

interface DirectControlBinding {

    // Own properties of GstController-1.0.GstController.DirectControlBinding

    readonly absolute: boolean
    controlSource: Gst.ControlSource

    // Conflicting properties

    object: any

    // Own fields of GstController-1.0.GstController.DirectControlBinding

    parent: Gst.ControlBinding

    // Conflicting methods

    getGValueArray(...args: any[]): any
    getValue(...args: any[]): any
    syncValues(...args: any[]): any
    ref(...args: any[]): any

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
class DirectControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.DirectControlBinding

    static name: string
    static $gtype: GObject.GType<DirectControlBinding>

    // Constructors of GstController-1.0.GstController.DirectControlBinding

    constructor(config?: DirectControlBinding_ConstructProps) 
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will map the control source range [0.0 ... 1.0] to
     * the full target property range, and clip all values outside this range.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     */
    constructor(object: Gst.Object, propertyName: string, cs: Gst.ControlSource) 
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will map the control source range [0.0 ... 1.0] to
     * the full target property range, and clip all values outside this range.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     */
    static new(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    /**
     * Create a new control-binding that attaches the #GstControlSource to the
     * #GObject property. It will directly map the control source values to the
     * target property range without any transformations.
     * @constructor 
     * @param object the object of the property
     * @param propertyName the property-name to attach the control source
     * @param cs the control source
     */
    static newAbsolute(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    _init(config?: DirectControlBinding_ConstructProps): void
}

interface InterpolationControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {

    // Own constructor properties of GstController-1.0.GstController.InterpolationControlSource

    mode?: InterpolationMode | null
}

interface InterpolationControlSource {

    // Own properties of GstController-1.0.GstController.InterpolationControlSource

    mode: InterpolationMode

    // Own fields of GstController-1.0.GstController.InterpolationControlSource

    parent: TimedValueControlSource

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstController-1.0.GstController.InterpolationControlSource

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
class InterpolationControlSource extends TimedValueControlSource {

    // Own properties of GstController-1.0.GstController.InterpolationControlSource

    static name: string
    static $gtype: GObject.GType<InterpolationControlSource>

    // Constructors of GstController-1.0.GstController.InterpolationControlSource

    constructor(config?: InterpolationControlSource_ConstructProps) 
    /**
     * This returns a new, unbound #GstInterpolationControlSource.
     * @constructor 
     */
    constructor() 
    /**
     * This returns a new, unbound #GstInterpolationControlSource.
     * @constructor 
     */
    static new(): InterpolationControlSource
    _init(config?: InterpolationControlSource_ConstructProps): void
}

interface LFOControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {

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

interface LFOControlSource {

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

    // Own fields of GstController-1.0.GstController.LFOControlSource

    parent: Gst.ControlSource

    // Conflicting methods

    ref(...args: any[]): any

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
class LFOControlSource extends Gst.ControlSource {

    // Own properties of GstController-1.0.GstController.LFOControlSource

    static name: string
    static $gtype: GObject.GType<LFOControlSource>

    // Constructors of GstController-1.0.GstController.LFOControlSource

    constructor(config?: LFOControlSource_ConstructProps) 
    /**
     * This returns a new, unbound #GstLFOControlSource.
     * @constructor 
     */
    constructor() 
    /**
     * This returns a new, unbound #GstLFOControlSource.
     * @constructor 
     */
    static new(): LFOControlSource
    _init(config?: LFOControlSource_ConstructProps): void
}

interface ProxyControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
}

interface ProxyControlBinding {

    // Conflicting properties

    object: any

    // Conflicting methods

    getGValueArray(...args: any[]): any
    getValue(...args: any[]): any
    syncValues(...args: any[]): any
    ref(...args: any[]): any

    // Class property signals of GstController-1.0.GstController.ProxyControlBinding

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
}

/**
 * A #GstControlBinding that forwards requests to another #GstControlBinding
 * @class 
 */
class ProxyControlBinding extends Gst.ControlBinding {

    // Own properties of GstController-1.0.GstController.ProxyControlBinding

    static name: string
    static $gtype: GObject.GType<ProxyControlBinding>

    // Constructors of GstController-1.0.GstController.ProxyControlBinding

    constructor(config?: ProxyControlBinding_ConstructProps) 
    /**
     * #GstProxyControlBinding forwards all access to data or `sync_values()`
     * requests from `property_name` on `object` to the control binding at
     * `ref_property_name` on `ref_object`.
     * @constructor 
     * @param object a #GstObject
     * @param propertyName the property name in `object` to control
     * @param refObject a #GstObject to forward all              #GstControlBinding requests to
     * @param refPropertyName the property_name in `ref_object` to control
     */
    constructor(object: Gst.Object, propertyName: string, refObject: Gst.Object, refPropertyName: string) 
    /**
     * #GstProxyControlBinding forwards all access to data or `sync_values()`
     * requests from `property_name` on `object` to the control binding at
     * `ref_property_name` on `ref_object`.
     * @constructor 
     * @param object a #GstObject
     * @param propertyName the property name in `object` to control
     * @param refObject a #GstObject to forward all              #GstControlBinding requests to
     * @param refPropertyName the property_name in `ref_object` to control
     */
    static new(object: Gst.Object, propertyName: string, refObject: Gst.Object, refPropertyName: string): ProxyControlBinding
    _init(config?: ProxyControlBinding_ConstructProps): void
}

interface TimedValueControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
}

/**
 * Signal callback interface for `value-added`
 */
interface TimedValueControlSource_ValueAddedSignalCallback {
    (timedValue: ControlPoint): void
}

/**
 * Signal callback interface for `value-changed`
 */
interface TimedValueControlSource_ValueChangedSignalCallback {
    (timedValue: ControlPoint): void
}

/**
 * Signal callback interface for `value-removed`
 */
interface TimedValueControlSource_ValueRemovedSignalCallback {
    (timedValue: ControlPoint): void
}

interface TimedValueControlSource {

    // Own fields of GstController-1.0.GstController.TimedValueControlSource

    parent: Gst.ControlSource
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
     */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    /**
     * Returns a read-only copy of the list of #GstTimedValue for the given property.
     * Free the list after done with it.
     */
    getAll(): Gst.TimedValue[]
    /**
     * Get the number of control points that are set.
     */
    getCount(): number
    /**
     * Set the value of given controller-handled property at a certain time.
     * @param timestamp the time the control-change is scheduled for
     * @param value the control-value
     */
    set(timestamp: Gst.ClockTime, value: number): boolean
    /**
     * Sets multiple timed values at once.
     * @param timedvalues a list with #GstTimedValue items
     */
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    /**
     * Used to remove the value of given controller-handled property at a certain
     * time.
     * @param timestamp the time the control-change should be removed from
     */
    unset(timestamp: Gst.ClockTime): boolean
    /**
     * Used to remove all time-stamped values of given controller-handled property
     */
    unsetAll(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstController-1.0.GstController.TimedValueControlSource

    connect(sigName: "value-added", callback: TimedValueControlSource_ValueAddedSignalCallback): number
    on(sigName: "value-added", callback: TimedValueControlSource_ValueAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-added", callback: TimedValueControlSource_ValueAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-added", callback: TimedValueControlSource_ValueAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-added", ...args: any[]): void
    connect(sigName: "value-changed", callback: TimedValueControlSource_ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: TimedValueControlSource_ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: TimedValueControlSource_ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: TimedValueControlSource_ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", ...args: any[]): void
    connect(sigName: "value-removed", callback: TimedValueControlSource_ValueRemovedSignalCallback): number
    on(sigName: "value-removed", callback: TimedValueControlSource_ValueRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: TimedValueControlSource_ValueRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: TimedValueControlSource_ValueRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-removed", ...args: any[]): void

    // Class property signals of GstController-1.0.GstController.TimedValueControlSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
class TimedValueControlSource extends Gst.ControlSource {

    // Own properties of GstController-1.0.GstController.TimedValueControlSource

    static name: string
    static $gtype: GObject.GType<TimedValueControlSource>

    // Constructors of GstController-1.0.GstController.TimedValueControlSource

    constructor(config?: TimedValueControlSource_ConstructProps) 
    _init(config?: TimedValueControlSource_ConstructProps): void
}

interface TriggerControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {

    // Own constructor properties of GstController-1.0.GstController.TriggerControlSource

    tolerance?: number | null
}

interface TriggerControlSource {

    // Own properties of GstController-1.0.GstController.TriggerControlSource

    tolerance: number

    // Own fields of GstController-1.0.GstController.TriggerControlSource

    parent: TimedValueControlSource

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstController-1.0.GstController.TriggerControlSource

    connect(sigName: "notify::tolerance", callback: (...args: any[]) => void): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tolerance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
class TriggerControlSource extends TimedValueControlSource {

    // Own properties of GstController-1.0.GstController.TriggerControlSource

    static name: string
    static $gtype: GObject.GType<TriggerControlSource>

    // Constructors of GstController-1.0.GstController.TriggerControlSource

    constructor(config?: TriggerControlSource_ConstructProps) 
    /**
     * This returns a new, unbound #GstTriggerControlSource.
     * @constructor 
     */
    constructor() 
    /**
     * This returns a new, unbound #GstTriggerControlSource.
     * @constructor 
     */
    static new(): TriggerControlSource
    _init(config?: TriggerControlSource_ConstructProps): void
}

interface ARGBControlBindingClass {

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
abstract class ARGBControlBindingClass {

    // Own properties of GstController-1.0.GstController.ARGBControlBindingClass

    static name: string
}

interface ControlPoint {

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
class ControlPoint {

    // Own properties of GstController-1.0.GstController.ControlPoint

    static name: string
}

interface DirectControlBindingClass {

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
abstract class DirectControlBindingClass {

    // Own properties of GstController-1.0.GstController.DirectControlBindingClass

    static name: string
}

interface InterpolationControlSourceClass {

    // Own fields of GstController-1.0.GstController.InterpolationControlSourceClass

    parentClass: TimedValueControlSourceClass
}

abstract class InterpolationControlSourceClass {

    // Own properties of GstController-1.0.GstController.InterpolationControlSourceClass

    static name: string
}

interface InterpolationControlSourcePrivate {
}

class InterpolationControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.InterpolationControlSourcePrivate

    static name: string
}

interface LFOControlSourceClass {

    // Own fields of GstController-1.0.GstController.LFOControlSourceClass

    parentClass: Gst.ControlSourceClass
}

abstract class LFOControlSourceClass {

    // Own properties of GstController-1.0.GstController.LFOControlSourceClass

    static name: string
}

interface LFOControlSourcePrivate {
}

class LFOControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.LFOControlSourcePrivate

    static name: string
}

interface ProxyControlBindingClass {
}

/**
 * Opaque #GstProxyControlBindingClass struct
 * @record 
 */
abstract class ProxyControlBindingClass {

    // Own properties of GstController-1.0.GstController.ProxyControlBindingClass

    static name: string
}

interface TimedValueControlSourceClass {

    // Own fields of GstController-1.0.GstController.TimedValueControlSourceClass

    parentClass: Gst.ControlSourceClass
}

abstract class TimedValueControlSourceClass {

    // Own properties of GstController-1.0.GstController.TimedValueControlSourceClass

    static name: string
}

interface TimedValueControlSourcePrivate {
}

class TimedValueControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.TimedValueControlSourcePrivate

    static name: string
}

interface TriggerControlSourceClass {

    // Own fields of GstController-1.0.GstController.TriggerControlSourceClass

    parentClass: TimedValueControlSourceClass
}

abstract class TriggerControlSourceClass {

    // Own properties of GstController-1.0.GstController.TriggerControlSourceClass

    static name: string
}

interface TriggerControlSourcePrivate {
}

class TriggerControlSourcePrivate {

    // Own properties of GstController-1.0.GstController.TriggerControlSourcePrivate

    static name: string
}

}
export default GstController;