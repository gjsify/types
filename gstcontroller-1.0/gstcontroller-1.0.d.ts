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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstController {
    /**
     * GstController-1.0
     */

    /**
     * The various interpolation modes available.
     */

    /**
     * The various interpolation modes available.
     */
    export namespace InterpolationMode {
        export const $gtype: GObject.GType<InterpolationMode>;
    }

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

    /**
     * The various waveform modes available.
     */
    export namespace LFOWaveform {
        export const $gtype: GObject.GType<LFOWaveform>;
    }

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
    function timed_value_control_invalidate_cache(self: TimedValueControlSource): void;
    interface DirectControlBindingConvertGValue {
        (self: DirectControlBinding, src_value: number, dest_value: GObject.Value | any): void;
    }
    interface DirectControlBindingConvertValue {
        (self: DirectControlBinding, src_value: number, dest_value?: any | null): void;
    }
    namespace ARGBControlBinding {
        // Signal signatures
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            'notify::control-source-a': GObject.Object.Notify;
            'notify::control-source-a': GObject.Object.Notify;
            'notify::control-source-b': GObject.Object.Notify;
            'notify::control-source-b': GObject.Object.Notify;
            'notify::control-source-g': GObject.Object.Notify;
            'notify::control-source-g': GObject.Object.Notify;
            'notify::control-source-r': GObject.Object.Notify;
            'notify::control-source-r': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::object': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {
            control_source_a: Gst.ControlSource;
            controlSourceA: Gst.ControlSource;
            control_source_b: Gst.ControlSource;
            controlSourceB: Gst.ControlSource;
            control_source_g: Gst.ControlSource;
            controlSourceG: Gst.ControlSource;
            control_source_r: Gst.ControlSource;
            controlSourceR: Gst.ControlSource;
        }
    }

    /**
     * A value mapping object that attaches multiple control sources to a guint
     * gobject properties representing a color. A control value of 0.0 will turn the
     * color component off and a value of 1.0 will be the color level.
     */
    class ARGBControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<ARGBControlBinding>;

        // Properties

        get control_source_a(): Gst.ControlSource;
        set control_source_a(val: Gst.ControlSource);
        get controlSourceA(): Gst.ControlSource;
        set controlSourceA(val: Gst.ControlSource);
        get control_source_b(): Gst.ControlSource;
        set control_source_b(val: Gst.ControlSource);
        get controlSourceB(): Gst.ControlSource;
        set controlSourceB(val: Gst.ControlSource);
        get control_source_g(): Gst.ControlSource;
        set control_source_g(val: Gst.ControlSource);
        get controlSourceG(): Gst.ControlSource;
        set controlSourceG(val: Gst.ControlSource);
        get control_source_r(): Gst.ControlSource;
        set control_source_r(val: Gst.ControlSource);
        get controlSourceR(): Gst.ControlSource;
        set controlSourceR(val: Gst.ControlSource);

        // Constructors

        constructor(properties?: Partial<ARGBControlBinding.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            object: Gst.Object,
            property_name: string,
            cs_a: Gst.ControlSource,
            cs_r: Gst.ControlSource,
            cs_g: Gst.ControlSource,
            cs_b: Gst.ControlSource,
        ): ARGBControlBinding;

        // Signals

        connect<K extends keyof ARGBControlBinding.SignalSignatures>(
            signal: K,
            callback: ARGBControlBinding.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ARGBControlBinding.SignalSignatures>(
            signal: K,
            callback: ARGBControlBinding.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ARGBControlBinding.SignalSignatures>(
            signal: K,
            ...args: ARGBControlBinding.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DirectControlBinding {
        // Signal signatures
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            'notify::absolute': GObject.Object.Notify;
            'notify::control-source': GObject.Object.Notify;
            'notify::control-source': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::object': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {
            absolute: boolean;
            control_source: Gst.ControlSource;
            controlSource: Gst.ControlSource;
        }
    }

    /**
     * A value mapping object that attaches control sources to gobject properties. It
     * will map the control values directly to the target property range. If a
     * non-absolute direct control binding is used, the value range [0.0 ... 1.0]
     * is mapped to full target property range, and all values outside the range
     * will be clipped. An absolute control binding will not do any value
     * transformations.
     */
    class DirectControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<DirectControlBinding>;

        // Properties

        get absolute(): boolean;
        get control_source(): Gst.ControlSource;
        set control_source(val: Gst.ControlSource);
        get controlSource(): Gst.ControlSource;
        set controlSource(val: Gst.ControlSource);

        // Constructors

        constructor(properties?: Partial<DirectControlBinding.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;

        static new_absolute(object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;

        // Signals

        connect<K extends keyof DirectControlBinding.SignalSignatures>(
            signal: K,
            callback: DirectControlBinding.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectControlBinding.SignalSignatures>(
            signal: K,
            callback: DirectControlBinding.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectControlBinding.SignalSignatures>(
            signal: K,
            ...args: DirectControlBinding.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InterpolationControlSource {
        // Signal signatures
        interface SignalSignatures extends TimedValueControlSource.SignalSignatures {
            'notify::mode': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends TimedValueControlSource.ConstructorProps {
            mode: InterpolationMode;
        }
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
     */
    class InterpolationControlSource extends TimedValueControlSource {
        static $gtype: GObject.GType<InterpolationControlSource>;

        // Properties

        get mode(): InterpolationMode;
        set mode(val: InterpolationMode);

        // Constructors

        constructor(properties?: Partial<InterpolationControlSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InterpolationControlSource;

        // Signals

        connect<K extends keyof InterpolationControlSource.SignalSignatures>(
            signal: K,
            callback: InterpolationControlSource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InterpolationControlSource.SignalSignatures>(
            signal: K,
            callback: InterpolationControlSource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InterpolationControlSource.SignalSignatures>(
            signal: K,
            ...args: InterpolationControlSource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace LFOControlSource {
        // Signal signatures
        interface SignalSignatures extends Gst.ControlSource.SignalSignatures {
            'notify::amplitude': GObject.Object.Notify;
            'notify::frequency': GObject.Object.Notify;
            'notify::offset': GObject.Object.Notify;
            'notify::timeshift': GObject.Object.Notify;
            'notify::waveform': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.ControlSource.ConstructorProps {
            amplitude: number;
            frequency: number;
            offset: number;
            timeshift: number;
            waveform: LFOWaveform;
        }
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
     */
    class LFOControlSource extends Gst.ControlSource {
        static $gtype: GObject.GType<LFOControlSource>;

        // Properties

        /**
         * Specifies the amplitude for the waveform of this #GstLFOControlSource.
         */
        get amplitude(): number;
        set amplitude(val: number);
        /**
         * Specifies the frequency that should be used for the waveform
         * of this #GstLFOControlSource. It should be large enough
         * so that the period is longer than one nanosecond.
         */
        get frequency(): number;
        set frequency(val: number);
        /**
         * Specifies the value offset for the waveform of this #GstLFOControlSource.
         */
        get offset(): number;
        set offset(val: number);
        /**
         * Specifies the timeshift to the right that should be used for the waveform
         * of this #GstLFOControlSource in nanoseconds.
         *
         * To get a n nanosecond shift to the left use
         * "(GST_SECOND / frequency) - n".
         */
        get timeshift(): number;
        set timeshift(val: number);
        /**
         * Specifies the waveform that should be used for this #GstLFOControlSource.
         */
        get waveform(): LFOWaveform;
        set waveform(val: LFOWaveform);

        // Constructors

        constructor(properties?: Partial<LFOControlSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LFOControlSource;

        // Signals

        connect<K extends keyof LFOControlSource.SignalSignatures>(
            signal: K,
            callback: LFOControlSource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LFOControlSource.SignalSignatures>(
            signal: K,
            callback: LFOControlSource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LFOControlSource.SignalSignatures>(
            signal: K,
            ...args: LFOControlSource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ProxyControlBinding {
        // Signal signatures
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            'notify::name': GObject.Object.Notify;
            'notify::object': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {}
    }

    /**
     * A #GstControlBinding that forwards requests to another #GstControlBinding
     */
    class ProxyControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<ProxyControlBinding>;

        // Constructors

        constructor(properties?: Partial<ProxyControlBinding.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            object: Gst.Object,
            property_name: string,
            ref_object: Gst.Object,
            ref_property_name: string,
        ): ProxyControlBinding;

        // Signals

        connect<K extends keyof ProxyControlBinding.SignalSignatures>(
            signal: K,
            callback: ProxyControlBinding.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProxyControlBinding.SignalSignatures>(
            signal: K,
            callback: ProxyControlBinding.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProxyControlBinding.SignalSignatures>(
            signal: K,
            ...args: ProxyControlBinding.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TimedValueControlSource {
        // Signal callback interfaces

        interface ValueAdded {
            (_source: TimedValueControlSource, timed_value: ControlPoint): void;
        }

        interface ValueChanged {
            (_source: TimedValueControlSource, timed_value: ControlPoint): void;
        }

        interface ValueRemoved {
            (_source: TimedValueControlSource, timed_value: ControlPoint): void;
        }

        // Signal signatures
        interface SignalSignatures extends Gst.ControlSource.SignalSignatures {
            'value-added': ValueAdded;
            'value-changed': ValueChanged;
            'value-removed': ValueRemoved;
            'notify::name': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.ControlSource.ConstructorProps {}
    }

    /**
     * Base class for #GstControlSource that use time-stamped values.
     *
     * When overriding bind, chain up first to give this bind implementation a
     * chance to setup things.
     *
     * All functions are MT-safe.
     */
    abstract class TimedValueControlSource extends Gst.ControlSource {
        static $gtype: GObject.GType<TimedValueControlSource>;

        // Fields

        nvalues: number;
        valid_cache: boolean;

        // Constructors

        constructor(properties?: Partial<TimedValueControlSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TimedValueControlSource.SignalSignatures>(
            signal: K,
            callback: TimedValueControlSource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TimedValueControlSource.SignalSignatures>(
            signal: K,
            callback: TimedValueControlSource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TimedValueControlSource.SignalSignatures>(
            signal: K,
            ...args: TimedValueControlSource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find last value before given timestamp in control point list.
         * If all values in the control point list come after the given
         * timestamp or no values exist, %NULL is returned.
         *
         * For use in control source implementations.
         * @param timestamp the search key
         * @returns the found #GSequenceIter or %NULL
         */
        find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter | null;
        /**
         * Returns a read-only copy of the list of #GstTimedValue for the given property.
         * Free the list after done with it.
         * @returns a copy of the list, or %NULL if the property isn't handled by the controller
         */
        get_all(): Gst.TimedValue[];
        /**
         * Get the number of control points that are set.
         * @returns the number of control points that are set.
         */
        get_count(): number;
        /**
         * Set the value of given controller-handled property at a certain time.
         * @param timestamp the time the control-change is scheduled for
         * @param value the control-value
         * @returns FALSE if the values couldn't be set, TRUE otherwise.
         */
        set(timestamp: Gst.ClockTime, value: number): boolean;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Sets multiple timed values at once.
         * @param timedvalues a list with #GstTimedValue items
         * @returns FALSE if the values couldn't be set, TRUE otherwise.
         */
        set_from_list(timedvalues: Gst.TimedValue[]): boolean;
        /**
         * Used to remove the value of given controller-handled property at a certain
         * time.
         * @param timestamp the time the control-change should be removed from
         * @returns FALSE if the value couldn't be unset (i.e. not found, TRUE otherwise.
         */
        unset(timestamp: Gst.ClockTime): boolean;
        /**
         * Used to remove all time-stamped values of given controller-handled property
         */
        unset_all(): void;
    }

    namespace TriggerControlSource {
        // Signal signatures
        interface SignalSignatures extends TimedValueControlSource.SignalSignatures {
            'notify::tolerance': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends TimedValueControlSource.ConstructorProps {
            tolerance: number;
        }
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
     */
    class TriggerControlSource extends TimedValueControlSource {
        static $gtype: GObject.GType<TriggerControlSource>;

        // Properties

        get tolerance(): number;
        set tolerance(val: number);

        // Constructors

        constructor(properties?: Partial<TriggerControlSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TriggerControlSource;

        // Signals

        connect<K extends keyof TriggerControlSource.SignalSignatures>(
            signal: K,
            callback: TriggerControlSource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TriggerControlSource.SignalSignatures>(
            signal: K,
            callback: TriggerControlSource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TriggerControlSource.SignalSignatures>(
            signal: K,
            ...args: TriggerControlSource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type ARGBControlBindingClass = typeof ARGBControlBinding;
    /**
     * An internal structure for value+time and various temporary
     * values used for interpolation. This "inherits" from
     * GstTimedValue.
     */
    class ControlPoint {
        static $gtype: GObject.GType<ControlPoint>;

        // Fields

        timestamp: Gst.ClockTime;
        value: number;

        // Constructors

        constructor(
            properties?: Partial<{
                timestamp: Gst.ClockTime;
                value: number;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Copies a #GstControlPoint
         * @returns A copy of @cp
         */
        copy(): ControlPoint;
        /**
         * Frees all data allocated by a #GstControlPoint instance.
         */
        free(): void;
    }

    type DirectControlBindingClass = typeof DirectControlBinding;
    type InterpolationControlSourceClass = typeof InterpolationControlSource;
    abstract class InterpolationControlSourcePrivate {
        static $gtype: GObject.GType<InterpolationControlSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LFOControlSourceClass = typeof LFOControlSource;
    abstract class LFOControlSourcePrivate {
        static $gtype: GObject.GType<LFOControlSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ProxyControlBindingClass = typeof ProxyControlBinding;
    type TimedValueControlSourceClass = typeof TimedValueControlSource;
    abstract class TimedValueControlSourcePrivate {
        static $gtype: GObject.GType<TimedValueControlSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TriggerControlSourceClass = typeof TriggerControlSource;
    abstract class TriggerControlSourcePrivate {
        static $gtype: GObject.GType<TriggerControlSourcePrivate>;

        // Constructors

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

export default GstController;

// END
