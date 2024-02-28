/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './geglgtk3-0.1-ambient.d.ts';
import './geglgtk3-0.1-import.d.ts';
/**
 * GeglGtk3-0.1
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
import type Gegl from '@girs/gegl-0.4';
import type Babl from '@girs/babl-0.1';

export namespace GeglGtk3 {
    /**
     * Specifies the autoscaling behavior of #GeglGtkView.
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
    module View {
        // Signal callback interfaces

        interface DrawBackground {
            (cr: cairo.Context, rect: Gdk.Rectangle): void;
        }

        interface DrawOverlay {
            (cr: cairo.Context, rect: Gdk.Rectangle): void;
        }

        // Constructor properties interface
    }

    class View extends Gtk.DrawingArea {
        // Own properties of GeglGtk3-0.1.View

        autoscale_policy: ViewAutoscale;
        autoscalePolicy: ViewAutoscale;
        block: boolean;
        node: GObject.Object;
        scale: number;
        x: number;
        y: number;

        // Constructors of GeglGtk3-0.1.View

        static ['new'](): View;

        static new_for_buffer(buffer: Gegl.Buffer): View;

        static new_for_node(node: Gegl.Node): View;

        // Owm methods of GeglGtk3-0.1.View

        /**
         * Get the autoscaling policy
         * @returns Current #GeglGtkViewAutoscale policy in use
         */
        get_autoscale_policy(): ViewAutoscale;
        /**
         * Get the displayed #GeglNode
         * @returns The #GeglNode this widget displays
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
         * To transform coordinates use gegl_matrix3_transform_point().
         * To get a matrix representing the view->model space transformation, use gegl_matrix3_invert()
         */
        get_transformation(): void;
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
         * @param autoscale #GeglGtkViewAutoscale policy to use
         */
        set_autoscale_policy(autoscale: ViewAutoscale): void;
        /**
         * Change the #GeglNode to display
         * @param node a #GeglNode instance or %NULL
         */
        set_node(node?: Gegl.Node | null): void;
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

    class ViewClass {}

    class ViewPrivate {}

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
