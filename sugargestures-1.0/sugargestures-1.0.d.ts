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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace SugarGestures {
    /**
     * SugarGestures-1.0
     */

    export namespace EventControllerState {
        export const $gtype: GObject.GType<EventControllerState>;
    }

    enum EventControllerState {
        NONE,
        COLLECTING,
        RECOGNIZED,
        NOT_RECOGNIZED,
    }

    export namespace SwipeDirection {
        export const $gtype: GObject.GType<SwipeDirection>;
    }

    enum SwipeDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }

    export namespace EventControllerFlags {
        export const $gtype: GObject.GType<EventControllerFlags>;
    }

    enum EventControllerFlags {
        NONE,
        EXCLUSIVE,
    }

    export namespace SwipeDirectionFlags {
        export const $gtype: GObject.GType<SwipeDirectionFlags>;
    }

    enum SwipeDirectionFlags {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    namespace EventController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            began: () => void;
            ended: () => void;
            updated: () => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: EventControllerState;
            widget: Gtk.Widget;
        }
    }

    abstract class EventController extends GObject.Object {
        static $gtype: GObject.GType<EventController>;

        // Properties

        get state(): EventControllerState;
        get widget(): Gtk.Widget;
        set widget(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EventController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EventController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof EventController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EventController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EventController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EventController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EventController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EventController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_began(): void;
        vfunc_ended(): void;
        vfunc_get_state(): EventControllerState;
        vfunc_handle_event(event: Gdk.Event): boolean;
        vfunc_reset(): void;
        vfunc_updated(): void;

        // Methods

        attach(widget: Gtk.Widget, flags: EventControllerFlags | null): boolean;
        detach(widget: Gtk.Widget): boolean;
        get_state(): EventControllerState;
        handle_event(event: Gdk.Event): boolean;
        reset(): boolean;
    }

    namespace LongPressController {
        // Signal signatures
        interface SignalSignatures extends EventController.SignalSignatures {
            pressed: (arg0: number, arg1: number) => void;
            'notify::threshold': (pspec: GObject.ParamSpec) => void;
            'notify::trigger-delay': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EventController.ConstructorProps {
            threshold: number;
            trigger_delay: number;
            triggerDelay: number;
        }
    }

    class LongPressController extends EventController {
        static $gtype: GObject.GType<LongPressController>;

        // Properties

        get threshold(): number;
        set threshold(val: number);
        get trigger_delay(): number;
        set trigger_delay(val: number);
        get triggerDelay(): number;
        set triggerDelay(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LongPressController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LongPressController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LongPressController;

        // Signals

        connect<K extends keyof LongPressController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LongPressController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LongPressController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LongPressController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LongPressController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LongPressController.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_pressed(x: number, y: number): void;
    }

    namespace RotateController {
        // Signal signatures
        interface SignalSignatures extends TouchController.SignalSignatures {
            'angle-changed': (arg0: number, arg1: number) => void;
            'notify::max-touches': (pspec: GObject.ParamSpec) => void;
            'notify::min-touches': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TouchController.ConstructorProps {}
    }

    class RotateController extends TouchController {
        static $gtype: GObject.GType<RotateController>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RotateController.SignalSignatures;

        // Fields

        priv: RotateControllerPrivate;

        // Constructors

        constructor(properties?: Partial<RotateController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RotateController;

        // Signals

        connect<K extends keyof RotateController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RotateController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RotateController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RotateController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RotateController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RotateController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_angle_changed(angle: number, delta: number): void;

        // Methods

        /**
         * If `controller` is on state %SUGAR_EVENT_CONTROLLER_STATE_RECOGNIZED,
         * this function returns %TRUE and fills in `delta` with the angle difference
         * in radians since the gesture was first recognized.
         * @returns %TRUE if @controller is recognizing a rotate gesture
         */
        get_angle_delta(): [boolean, number];
    }

    namespace SwipeController {
        // Signal signatures
        interface SignalSignatures extends EventController.SignalSignatures {
            'swipe-ended': (arg0: SwipeDirection) => void;
            'notify::directions': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EventController.ConstructorProps {
            directions: SwipeDirectionFlags;
        }
    }

    class SwipeController extends EventController {
        static $gtype: GObject.GType<SwipeController>;

        // Properties

        get directions(): SwipeDirectionFlags;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwipeController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwipeController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](directions: SwipeDirectionFlags): SwipeController;

        // Signals

        connect<K extends keyof SwipeController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwipeController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwipeController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwipeController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwipeController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwipeController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_swipe_ended(direction: SwipeDirection): void;
    }

    namespace TouchController {
        // Signal signatures
        interface SignalSignatures extends EventController.SignalSignatures {
            'notify::max-touches': (pspec: GObject.ParamSpec) => void;
            'notify::min-touches': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EventController.ConstructorProps {
            max_touches: number;
            maxTouches: number;
            min_touches: number;
            minTouches: number;
        }
    }

    abstract class TouchController extends EventController {
        static $gtype: GObject.GType<TouchController>;

        // Properties

        get max_touches(): number;
        set max_touches(val: number);
        get maxTouches(): number;
        set maxTouches(val: number);
        get min_touches(): number;
        set min_touches(val: number);
        get minTouches(): number;
        set minTouches(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TouchController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TouchController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TouchController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TouchController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TouchController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TouchController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TouchController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TouchController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * If a gesture is ongoing, this function returns the center of
         * the bounding box containing all ongoing touches.
         * @returns %TRUE if a gesture is in progress
         */
        get_center(): [boolean, number, number];
        /**
         * If `sequence` is operating on `controller,` this function returns %TRUE and
         * fills in `x` and `y` with the latest coordinates for that `sequence`.
         * @param sequence a #GdkEventSequence
         * @returns %TRUE if @sequence operates on @controller
         */
        get_coords(sequence: Gdk.EventSequence): [boolean, number, number];
        /**
         * Returns the number of touches currently operating on `controller`
         * @returns The number of touches
         */
        get_num_touches(): number;
        /**
         * Returns the touch sequences currently operating on `controller`
         * @returns The list of sequences
         */
        get_sequences(): Gdk.EventSequence[];
    }

    namespace ZoomController {
        // Signal signatures
        interface SignalSignatures extends TouchController.SignalSignatures {
            'scale-changed': (arg0: number) => void;
            'notify::max-touches': (pspec: GObject.ParamSpec) => void;
            'notify::min-touches': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TouchController.ConstructorProps {}
    }

    class ZoomController extends TouchController {
        static $gtype: GObject.GType<ZoomController>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ZoomController.SignalSignatures;

        // Fields

        priv: ZoomControllerPrivate;

        // Constructors

        constructor(properties?: Partial<ZoomController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ZoomController;

        // Signals

        connect<K extends keyof ZoomController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ZoomController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ZoomController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ZoomController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ZoomController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ZoomController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_scale_changed(scale: number): void;

        // Methods

        /**
         * If `controller` is on state %SUGAR_EVENT_CONTROLLER_STATE_RECOGNIZED,
         * this function returns %TRUE and fills in `scale` with the zooming
         * difference since the gesture was recognized (hence the starting point
         * is considered 1x).
         * @returns %TRUE if @controller is recognizing a zoom gesture
         */
        get_scale_delta(): [boolean, number];
    }

    type EventControllerClass = typeof EventController;
    class EventControllerPrivate {
        static $gtype: GObject.GType<EventControllerPrivate>;

        // Fields

        widget: Gtk.Widget;

        // Constructors

        _init(...args: any[]): void;
    }

    type LongPressControllerClass = typeof LongPressController;
    class LongPressControllerPrivate {
        static $gtype: GObject.GType<LongPressControllerPrivate>;

        // Fields

        device: Gdk.Device;
        start_time: number;
        x: number;
        y: number;
        root_x: number;
        root_y: number;
        timeout_id: number;
        threshold: number;
        delay: number;
        cancelled: number;
        triggered: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type RotateControllerClass = typeof RotateController;
    class RotateControllerPrivate {
        static $gtype: GObject.GType<RotateControllerPrivate>;

        // Fields

        initial_angle: number;

        // Constructors

        constructor(
            properties?: Partial<{
                initial_angle: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SwipeControllerClass = typeof SwipeController;
    class SwipeControllerPrivate {
        static $gtype: GObject.GType<SwipeControllerPrivate>;

        // Fields

        device: Gdk.Device;
        event_data: any[];
        swiping: number;
        swiped: number;
        directions: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type TouchControllerClass = typeof TouchController;
    class TouchControllerPrivate {
        static $gtype: GObject.GType<TouchControllerPrivate>;

        // Fields

        min_touches: number;
        max_touches: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type ZoomControllerClass = typeof ZoomController;
    class ZoomControllerPrivate {
        static $gtype: GObject.GType<ZoomControllerPrivate>;

        // Fields

        initial_distance: number;

        // Constructors

        constructor(
            properties?: Partial<{
                initial_distance: number;
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

export default SugarGestures;

// END
