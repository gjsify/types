/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './sugargestures-1.0-ambient.d.ts';

/**
 * SugarGestures-1.0
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

export namespace SugarGestures {
    enum EventControllerState {
        NONE,
        COLLECTING,
        RECOGNIZED,
        NOT_RECOGNIZED,
    }
    enum SwipeDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    enum EventControllerFlags {
        NONE,
        EXCLUSIVE,
    }
    enum SwipeDirectionFlags {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    module EventController {
        // Signal callback interfaces

        interface Began {
            (): void;
        }

        interface Ended {
            (): void;
        }

        interface Updated {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: EventControllerState;
            widget: Gtk.Widget;
        }
    }

    abstract class EventController extends GObject.Object {
        static $gtype: GObject.GType<EventController>;

        // Own properties of SugarGestures.EventController

        get state(): EventControllerState;
        get widget(): Gtk.Widget;
        set widget(val: Gtk.Widget);

        // Constructors of SugarGestures.EventController

        constructor(properties?: Partial<EventController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of SugarGestures.EventController

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'began', callback: (_source: this) => void): number;
        connect_after(signal: 'began', callback: (_source: this) => void): number;
        emit(signal: 'began'): void;
        connect(signal: 'ended', callback: (_source: this) => void): number;
        connect_after(signal: 'ended', callback: (_source: this) => void): number;
        emit(signal: 'ended'): void;
        connect(signal: 'updated', callback: (_source: this) => void): number;
        connect_after(signal: 'updated', callback: (_source: this) => void): number;
        emit(signal: 'updated'): void;

        // Own virtual methods of SugarGestures.EventController

        vfunc_began(): void;
        vfunc_ended(): void;
        vfunc_get_state(): EventControllerState;
        vfunc_handle_event(event: Gdk.Event): boolean;
        vfunc_reset(): void;
        vfunc_updated(): void;

        // Own methods of SugarGestures.EventController

        attach(widget: Gtk.Widget, flags: EventControllerFlags): boolean;
        detach(widget: Gtk.Widget): boolean;
        get_state(): EventControllerState;
        handle_event(event: Gdk.Event): boolean;
        reset(): boolean;
    }

    module LongPressController {
        // Signal callback interfaces

        interface Pressed {
            (object: number, p0: number): void;
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

        // Own properties of SugarGestures.LongPressController

        get threshold(): number;
        set threshold(val: number);
        get trigger_delay(): number;
        set trigger_delay(val: number);
        get triggerDelay(): number;
        set triggerDelay(val: number);

        // Constructors of SugarGestures.LongPressController

        constructor(properties?: Partial<LongPressController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LongPressController;

        // Own signals of SugarGestures.LongPressController

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'pressed', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(signal: 'pressed', callback: (_source: this, object: number, p0: number) => void): number;
        emit(signal: 'pressed', object: number, p0: number): void;

        // Own virtual methods of SugarGestures.LongPressController

        vfunc_pressed(x: number, y: number): void;
    }

    module RotateController {
        // Signal callback interfaces

        interface AngleChanged {
            (angle: number, angle_delta: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TouchController.ConstructorProps {}
    }

    class RotateController extends TouchController {
        static $gtype: GObject.GType<RotateController>;

        // Constructors of SugarGestures.RotateController

        constructor(properties?: Partial<RotateController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RotateController;

        // Own signals of SugarGestures.RotateController

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'angle-changed', callback: (_source: this, angle: number, angle_delta: number) => void): number;
        connect_after(
            signal: 'angle-changed',
            callback: (_source: this, angle: number, angle_delta: number) => void,
        ): number;
        emit(signal: 'angle-changed', angle: number, angle_delta: number): void;

        // Own virtual methods of SugarGestures.RotateController

        vfunc_angle_changed(angle: number, delta: number): void;

        // Own methods of SugarGestures.RotateController

        /**
         * If `controller` is on state %SUGAR_EVENT_CONTROLLER_STATE_RECOGNIZED,
         * this function returns %TRUE and fills in `delta` with the angle difference
         * in radians since the gesture was first recognized.
         * @returns %TRUE if @controller is recognizing a rotate gesture
         */
        get_angle_delta(): [boolean, number];
    }

    module SwipeController {
        // Signal callback interfaces

        interface SwipeEnded {
            (object: SwipeDirection): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EventController.ConstructorProps {
            directions: SwipeDirectionFlags;
        }
    }

    class SwipeController extends EventController {
        static $gtype: GObject.GType<SwipeController>;

        // Own properties of SugarGestures.SwipeController

        get directions(): SwipeDirectionFlags;

        // Constructors of SugarGestures.SwipeController

        constructor(properties?: Partial<SwipeController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](directions: SwipeDirectionFlags): SwipeController;

        // Own signals of SugarGestures.SwipeController

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'swipe-ended', callback: (_source: this, object: SwipeDirection) => void): number;
        connect_after(signal: 'swipe-ended', callback: (_source: this, object: SwipeDirection) => void): number;
        emit(signal: 'swipe-ended', object: SwipeDirection): void;

        // Own virtual methods of SugarGestures.SwipeController

        vfunc_swipe_ended(direction: SwipeDirection): void;
    }

    module TouchController {
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

        // Own properties of SugarGestures.TouchController

        get max_touches(): number;
        set max_touches(val: number);
        get maxTouches(): number;
        set maxTouches(val: number);
        get min_touches(): number;
        set min_touches(val: number);
        get minTouches(): number;
        set minTouches(val: number);

        // Constructors of SugarGestures.TouchController

        constructor(properties?: Partial<TouchController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of SugarGestures.TouchController

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

    module ZoomController {
        // Signal callback interfaces

        interface ScaleChanged {
            (scale: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TouchController.ConstructorProps {}
    }

    class ZoomController extends TouchController {
        static $gtype: GObject.GType<ZoomController>;

        // Constructors of SugarGestures.ZoomController

        constructor(properties?: Partial<ZoomController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ZoomController;

        // Own signals of SugarGestures.ZoomController

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'scale-changed', callback: (_source: this, scale: number) => void): number;
        connect_after(signal: 'scale-changed', callback: (_source: this, scale: number) => void): number;
        emit(signal: 'scale-changed', scale: number): void;

        // Own virtual methods of SugarGestures.ZoomController

        vfunc_scale_changed(scale: number): void;

        // Own methods of SugarGestures.ZoomController

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
    type LongPressControllerClass = typeof LongPressController;
    type RotateControllerClass = typeof RotateController;
    type SwipeControllerClass = typeof SwipeController;
    type TouchControllerClass = typeof TouchController;
    type ZoomControllerClass = typeof ZoomController;
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
