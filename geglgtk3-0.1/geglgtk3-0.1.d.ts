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
import type Gegl from '@girs/gegl-0.4';
import type Babl from '@girs/babl-0.1';

export namespace GeglGtk3 {
    /**
     * GeglGtk3-0.1
     */

    /**
     * @gir-type Enum
     */
    export namespace ViewAutoscale {
        export const $gtype: GObject.GType<ViewAutoscale>;
    }

    /**
     * Specifies the autoscaling behavior of {@link GeglGtk3.View}.
     * @gir-type Enum
     */
    enum ViewAutoscale {
        /**
         * Do not autoscale
         */
        DISABLED,
        /**
         * Automatically scale the widget size
         */
        WIDGET,
        /**
         * Automatically scale content to fit widget
         */
        CONTENT,
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * Emitted during painting, before the node contents has been rendered.
             * Allows consumers to draw a custom background for the widget.
             *
             * Note:
             * Manipulating the view widget in the signal handler is not supported.
             * This signal is only available if GEGL-GTK was build with Cairo GObject support.
             * @signal
             */
            'draw-background': (arg0: cairo.Context, arg1: Gdk.Rectangle) => void;
            /**
             * Emitted during painting, before the node contents has been rendered.
             *
             * Allows consumers to draw an overlay for the widget, for instance
             * for simple user interface elements.
             *
             * Note:
             * Manipulating the view widget in the signal handler is not supported.
             * This signal is only available if GEGL-GTK was build with Cairo GObject support.
             * @signal
             */
            'draw-overlay': (arg0: cairo.Context, arg1: Gdk.Rectangle) => void;
            'notify::autoscale-policy': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            autoscale_policy: ViewAutoscale;
            autoscalePolicy: ViewAutoscale;
            block: boolean;
            node: GObject.Object;
            scale: number;
            x: number;
            y: number;
        }
    }

    /**
     * @gir-type Class
     */
    class View extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<View>;

        // Properties

        get autoscale_policy(): ViewAutoscale;
        set autoscale_policy(val: ViewAutoscale);
        get autoscalePolicy(): ViewAutoscale;
        set autoscalePolicy(val: ViewAutoscale);
        get block(): boolean;
        set block(val: boolean);
        get node(): GObject.Object;
        set node(val: GObject.Object);
        get scale(): number;
        set scale(val: number);
        get x(): number;
        set x(val: number);
        get y(): number;
        set y(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        static new_for_buffer(buffer: Gegl.Buffer): View;

        static new_for_node(node: Gegl.Node): View;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the autoscaling policy
         * @returns Current {@link GeglGtk3.ViewAutoscale} policy in use
         */
        get_autoscale_policy(): ViewAutoscale;
        /**
         * Get the displayed {@link Gegl.Node}
         * @returns The {@link Gegl.Node} this widget displays
         */
        get_node(): Gegl.Node;
        /**
         * Getter for the :scale property
         */
        get_scale(): number;
        /**
         * Get the model->view transformation
         *
         * The transformation matrix describes the transformation between the
         * model (the output of the GeglNode) and the view (the display in the widget).
         * To transform coordinates use `gegl_matrix3_transform_point()`.
         * To get a matrix representing the view->model space transformation, use `gegl_matrix3_invert()`
         */
        get_transformation(): Gegl.Matrix3;
        /**
         * Getter for the :x property
         */
        get_x(): number;
        /**
         * Getter for the :y property
         */
        get_y(): number;
        /**
         * Set the autoscaling policy
         * @param autoscale {@link GeglGtk3.ViewAutoscale} policy to use
         */
        set_autoscale_policy(autoscale: ViewAutoscale): void;
        /**
         * Change the {@link Gegl.Node} to display
         * @param node a {@link Gegl.Node} instance or `null`
         */
        set_node(node: Gegl.Node | null): void;
        /**
         * Setter for the :scale property
         * @param scale
         */
        set_scale(scale: number): void;
        /**
         * Setter for the :x property
         * @param x
         */
        set_x(x: number): void;
        /**
         * Setter for the :y property
         * @param y
         */
        set_y(y: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
    /**
     * @gir-type Struct
     */
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;
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

export default GeglGtk3;

// END
