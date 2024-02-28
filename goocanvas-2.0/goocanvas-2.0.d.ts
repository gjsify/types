/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './goocanvas-2.0-ambient.d.ts';
import './goocanvas-2.0-import.d.ts';
/**
 * GooCanvas-2.0
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

export namespace GooCanvas {
    /**
     * #GooCairoAntialias is simply a wrapper for the #cairo_antialias_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_antialias_t documentation.
     */
    enum CairoAntialias {
        DEFAULT,
        NONE,
        GRAY,
        SUBPIXEL,
    }
    /**
     * #GooCairoFillRule is simply a wrapper for the #cairo_fill_rule_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_fill_rule_t documentation.
     */
    enum CairoFillRule {
        WINDING,
        EVEN_ODD,
    }
    /**
     * #GooCairoHintMetrics is simply a wrapper for the #cairo_hint_metrics_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_hint_metrics_t documentation.
     */
    enum CairoHintMetrics {
        DEFAULT,
        OFF,
        ON,
    }
    /**
     * #GooCairoLineCap is simply a wrapper for the #cairo_line_cap_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_line_cap_t documentation.
     */
    enum CairoLineCap {
        BUTT,
        ROUND,
        SQUARE,
    }
    /**
     * #GooCairoLineJoin is simply a wrapper for the #cairo_line_join_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_line_join_t documentation.
     */
    enum CairoLineJoin {
        MITER,
        ROUND,
        BEVEL,
    }
    /**
     * #GooCairoOperator is simply a wrapper for the #cairo_operator_t type,
     * allowing it to be used for #GObject properties.
     *
     * See the #cairo_operator_t documentation.
     */
    enum CairoOperator {
        CLEAR,
        SOURCE,
        OVER,
        IN,
        OUT,
        ATOP,
        DEST,
        DEST_OVER,
        DEST_IN,
        DEST_OUT,
        DEST_ATOP,
        XOR,
        ADD,
        SATURATE,
    }
    /**
     * GooCanvasAnchorType is used to specify the positions of objects relative to
     * a particular anchor point.
     */
    enum CanvasAnchorType {
        /**
         * the anchor is in the center of the object.
         */
        CENTER,
        /**
         * the anchor is at the top of the object, centered horizontally.
         */
        NORTH,
        /**
         * the anchor is at the top-left of the object.
         */
        NORTH_WEST,
        /**
         * the anchor is at the top-right of the object.
         */
        NORTH_EAST,
        /**
         * the anchor is at the bottom of the object, centered horizontally.
         */
        SOUTH,
        /**
         * the anchor is at the bottom-left of the object.
         */
        SOUTH_WEST,
        /**
         * the anchor is at the bottom-right of the object.
         */
        SOUTH_EAST,
        /**
         * the anchor is on the left of the object, centered vertically.
         */
        WEST,
        /**
         * the anchor is on the right of the object, centered vertically.
         */
        EAST,
        /**
         * see GOO_CANVAS_ANCHOR_NORTH.
         */
        N,
        /**
         * see GOO_CANVAS_ANCHOR_NORTH_WEST.
         */
        NW,
        /**
         * see GOO_CANVAS_ANCHOR_NORTH_EAST.
         */
        NE,
        /**
         * see GOO_CANVAS_ANCHOR_SOUTH.
         */
        S,
        /**
         * see GOO_CANVAS_ANCHOR_SOUTH_WEST.
         */
        SW,
        /**
         * see GOO_CANVAS_ANCHOR_SOUTH_EAST.
         */
        SE,
        /**
         * see GOO_CANVAS_ANCHOR_WEST.
         */
        W,
        /**
         * see GOO_CANVAS_ANCHOR_EAST.
         */
        E,
    }
    /**
     * #GooCanvasAnimateType is used to specify what happens when the end of an
     * animation is reached.
     */
    enum CanvasAnimateType {
        /**
         * the item remains in the final position.
         */
        FREEZE,
        /**
         * the item is moved back to the initial position.
         */
        RESET,
        /**
         * the animation is restarted from the initial
         *  position.
         */
        RESTART,
        /**
         * the animation bounces back and forth between the
         *  start and end positions.
         */
        BOUNCE,
    }
    /**
     * The #GooCanvasItemVisibility enumeration is used to specify when a canvas
     * item is visible.
     */
    enum CanvasItemVisibility {
        /**
         * the item is invisible, and is not allocated any
         *  space in layout container items such as #GooCanvasTable.
         */
        HIDDEN,
        /**
         * the item is invisible, but it is still allocated
         *  space in layout container items.
         */
        INVISIBLE,
        /**
         * the item is visible.
         */
        VISIBLE,
        /**
         * the item is visible when the
         *  canvas scale setting is greater than or equal to the item's visibility
         *  threshold setting.
         */
        VISIBLE_ABOVE_THRESHOLD,
    }
    /**
     * GooCanvasPathCommandType specifies the type of each command in the path.
     * See the path element in the <ulink url="http://www.w3.org/Graphics/SVG/">
     * Scalable Vector Graphics (SVG) specification</ulink> for more details.
     */
    enum CanvasPathCommandType {
        /**
         * move to the given point.
         */
        MOVE_TO,
        /**
         * close the current path, drawing a line from the
         *  current position to the start of the path.
         */
        CLOSE_PATH,
        /**
         * draw a line to the given point.
         */
        LINE_TO,
        /**
         * draw a horizontal line to the given
         *  x coordinate.
         */
        HORIZONTAL_LINE_TO,
        /**
         * draw a vertical line to the given y
         *  coordinate.
         */
        VERTICAL_LINE_TO,
        /**
         * draw a bezier curve using two control
         *  points to the given point.
         */
        CURVE_TO,
        /**
         * draw a bezier curve using a reflection
         *  of the last control point of the last curve as the first control point,
         *  and one new control point, to the given point.
         */
        SMOOTH_CURVE_TO,
        /**
         * draw a quadratic bezier curve using
         *  a single control point to the given point.
         */
        QUADRATIC_CURVE_TO,
        /**
         * draw a quadratic bezier curve
         *  using a reflection of the control point from the previous curve as the
         *  control point, to the given point.
         */
        SMOOTH_QUADRATIC_CURVE_TO,
        /**
         * draw an elliptical arc, using the given
         *  2 radii, the x axis rotation, and the 2 flags to disambiguate the arc,
         *  to the given point.
         */
        ELLIPTICAL_ARC,
    }
    const CANVAS_POLYLINE_NUM_ARROW_POINTS: number;
    function cairo_matrix_copy(matrix: cairo.Matrix): cairo.Matrix;
    function cairo_matrix_free(matrix: cairo.Matrix): void;
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     *
     * It finds a child property of a canvas item class by name.
     * @param iclass a #GObjectClass
     * @param property_name the name of the child property to find
     * @returns the #GParamSpec of the  child property or %NULL if @class has no child property with that name.
     */
    function canvas_item_class_find_child_property(
        iclass: GObject.ObjectClass,
        property_name: string,
    ): GObject.ParamSpec;
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     *
     * It installs a child property on a canvas item class.
     * @param iclass a #GObjectClass
     * @param property_id the id for the property
     * @param pspec the #GParamSpec for the property
     */
    function canvas_item_class_install_child_property(
        iclass: GObject.ObjectClass,
        property_id: number,
        pspec: GObject.ParamSpec,
    ): void;
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     *
     * It returns all child properties of a canvas item class.
     * @param iclass a #GObjectClass
     * @returns a newly allocated  array of #GParamSpec*. The array must be freed with g_free().
     */
    function canvas_item_class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[];
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     *
     * It finds a child property of a canvas item class by name.
     * @param mclass a #GObjectClass
     * @param property_name the name of the child property to find
     * @returns The #GParamSpec of the child  property or %NULL if @class has no child property with that name.
     */
    function canvas_item_model_class_find_child_property(
        mclass: GObject.ObjectClass,
        property_name: string,
    ): GObject.ParamSpec;
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     *
     * It installs a child property on a canvas item class.
     * @param mclass a #GObjectClass
     * @param property_id the id for the property
     * @param pspec the #GParamSpec for the property
     */
    function canvas_item_model_class_install_child_property(
        mclass: GObject.ObjectClass,
        property_id: number,
        pspec: GObject.ParamSpec,
    ): void;
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     *
     * It returns all child properties of a canvas item class.
     * @param mclass a #GObjectClass
     * @returns a newly allocated array of #GParamSpec*. The array must be freed with g_free().
     */
    function canvas_item_model_class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[];
    type CairoMatrix = object | null;
    type CairoPattern = object | null;
    /**
     * Specifies when an item receives pointer events such as mouse clicks.
     */
    enum CanvasPointerEvents {
        /**
         * a mask indicating that the item only
         *  receives events when it is visible.
         */
        VISIBLE_MASK,
        /**
         * a mask indicating that the item only
         *  receives events when the specified parts of it are painted.
         */
        PAINTED_MASK,
        /**
         * a mask indicating that the filled part of
         *  the item receives events.
         */
        FILL_MASK,
        /**
         * a mask indicating that the stroked part
         *  of the item receives events.
         */
        STROKE_MASK,
        /**
         * the item doesn't receive events at all.
         */
        NONE,
        /**
         * the item receives events in its
         *  painted areas when it is visible (the default).
         */
        VISIBLE_PAINTED,
        /**
         * the item's interior receives events
         *  when it is visible.
         */
        VISIBLE_FILL,
        /**
         * the item's perimeter receives
         *  events when it is visible.
         */
        VISIBLE_STROKE,
        /**
         * the item receives events when it is visible,
         *  whether it is painted or not.
         */
        VISIBLE,
        /**
         * the item receives events in its painted areas,
         *  whether it is visible or not.
         */
        PAINTED,
        /**
         * the item's interior receives events, whether it
         *  is visible or painted or not.
         */
        FILL,
        /**
         * the item's perimeter receives events, whether
         *  it is visible or painted or not.
         */
        STROKE,
        /**
         * the item's perimeter and interior receive events,
         *  whether it is visible or painted or not.
         */
        ALL,
    }
    module Canvas {
        // Signal callback interfaces

        interface ItemCreated {
            (item: CanvasItem, model: CanvasItemModel): void;
        }

        // Constructor properties interface
    }

    /**
     * #GooCanvas is the main widget containing a number of canvas items.
     *
     * Here is a simple example:
     *
     * <informalexample><programlisting>
     *  &num;include &lt;goocanvas.h&gt;
     *
     *  static gboolean on_rect_button_press (GooCanvasItem  *view,
     *                                        GooCanvasItem  *target,
     *                                        GdkEventButton *event,
     *                                        gpointer        data);
     *
     *  int
     *  main (int argc, char *argv[])
     *  {
     *    GtkWidget *window, *scrolled_win, *canvas;
     *    GooCanvasItem *root, *rect_item, *text_item;
     *
     *    /&ast; Initialize GTK+. &ast;/
     *    gtk_init (&amp;argc, &amp;argv);
     *
     *    /&ast; Create the window and widgets. &ast;/
     *    window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
     *    gtk_window_set_default_size (GTK_WINDOW (window), 640, 600);
     *    gtk_widget_show (window);
     *    g_signal_connect (window, "delete_event", G_CALLBACK (on_delete_event),
     *                      NULL);
     *
     *    scrolled_win = gtk_scrolled_window_new (NULL, NULL);
     *    gtk_scrolled_window_set_shadow_type (GTK_SCROLLED_WINDOW (scrolled_win),
     *                                         GTK_SHADOW_IN);
     *    gtk_widget_show (scrolled_win);
     *    gtk_container_add (GTK_CONTAINER (window), scrolled_win);
     *
     *    canvas = goo_canvas_new&nbsp;();
     *    gtk_widget_set_size_request (canvas, 600, 450);
     *    goo_canvas_set_bounds (GOO_CANVAS (canvas), 0, 0, 1000, 1000);
     *    gtk_widget_show (canvas);
     *    gtk_container_add (GTK_CONTAINER (scrolled_win), canvas);
     *
     *    root = goo_canvas_get_root_item (GOO_CANVAS (canvas));
     *
     *    /&ast; Add a few simple items. &ast;/
     *    rect_item = goo_canvas_rect_new (root, 100, 100, 400, 400,
     *                                     "line-width", 10.0,
     *                                     "radius-x", 20.0,
     *                                     "radius-y", 10.0,
     *                                     "stroke-color", "yellow",
     *                                     "fill-color", "red",
     *                                     NULL);
     *
     *    text_item = goo_canvas_text_new (root, "Hello World", 300, 300, -1,
     *                                     GOO_CANVAS_ANCHOR_CENTER,
     *                                     "font", "Sans 24",
     *                                     NULL);
     *    goo_canvas_item_rotate (text_item, 45, 300, 300);
     *
     *    /&ast; Connect a signal handler for the rectangle item. &ast;/
     *    g_signal_connect (rect_item, "button_press_event",
     *                      G_CALLBACK (on_rect_button_press), NULL);
     *
     *    /&ast; Pass control to the GTK+ main event loop. &ast;/
     *    gtk_main&nbsp;();
     *
     *    return 0;
     *  }
     *
     *
     *  /&ast; This handles button presses in item views. We simply output a message to
     *     the console. &ast;/
     *  static gboolean
     *  on_rect_button_press (GooCanvasItem  *item,
     *                        GooCanvasItem  *target,
     *                        GdkEventButton *event,
     *                        gpointer        data)
     *  {
     *    g_print ("rect item received button press event\n");
     *    return TRUE;
     *  }
     *
     * </programlisting></informalexample>
     *
     * A #GooCanvas widget is usually placed inside a #GtkScrolledWindow widget
     * and can be scrolled with the scrollbar or with the scroll wheel on a mouse.
     * To disable mouse wheel scrolling, do this:
     * <informalexample><programlisting>
     *  g_signal_connect (canvas, "scroll-event", G_CALLBACK (gtk_true), NULL);
     * </programlisting></informalexample>
     */
    class Canvas extends Gtk.Container {
        // Own properties of GooCanvas-2.0.Canvas

        anchor: CanvasAnchorType;
        automatic_bounds: boolean;
        automaticBounds: boolean;
        background_color: string;
        backgroundColor: string;
        /**
         * The color to use for the canvas background, specified as a GdkRGBA.
         */
        background_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use for the canvas background, specified as a GdkRGBA.
         */
        backgroundColorGdkRgba: Gdk.RGBA;
        background_color_rgb: number;
        backgroundColorRgb: number;
        bounds_from_origin: boolean;
        boundsFromOrigin: boolean;
        bounds_padding: number;
        boundsPadding: number;
        clear_background: boolean;
        clearBackground: boolean;
        integer_layout: boolean;
        integerLayout: boolean;
        redraw_when_scrolled: boolean;
        redrawWhenScrolled: boolean;
        resolution_x: number;
        resolutionX: number;
        resolution_y: number;
        resolutionY: number;
        scale: number;
        scale_x: number;
        scaleX: number;
        scale_y: number;
        scaleY: number;
        units: Gtk.Unit;
        x1: number;
        x2: number;
        y1: number;
        y2: number;

        // Own fields of GooCanvas-2.0.Canvas

        container: Gtk.Container;
        root_item_model: CanvasItemModel;
        root_item: CanvasItem;
        bounds: CanvasBounds;
        idle_id: number;
        need_update: number;
        need_entire_subtree_update: number;
        before_initial_draw: number;
        hscroll_policy: number;
        vscroll_policy: number;
        pointer_item: CanvasItem;
        pointer_grab_item: CanvasItem;
        pointer_grab_initial_item: CanvasItem;
        pointer_grab_button: number;
        focused_item: CanvasItem;
        keyboard_grab_item: CanvasItem;
        crossing_event: any;
        canvas_window: any;
        canvas_x_offset: number;
        canvas_y_offset: number;
        hadjustment: Gtk.Adjustment;
        vadjustment: Gtk.Adjustment;
        freeze_count: number;
        tmp_window: any;
        device_to_pixels_x: number;
        device_to_pixels_y: number;
        widget_items: any[];

        // Constructors of GooCanvas-2.0.Canvas

        static ['new'](): Canvas;

        // Owm methods of GooCanvas-2.0.Canvas

        /**
         * Creates the path specified by the given #GooCanvasPathCommand array.
         * @param commands an array of  #GooCanvasPathCommand.
         * @param cr a cairo context.
         */
        static create_path(commands: CanvasPathCommand[], cr: cairo.Context): void;
        static marshal_BOOLEAN__BOXED(
            closure: GObject.Closure,
            return_value: GObject.Value,
            n_param_values: number,
            param_values: GObject.Value,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        static marshal_BOOLEAN__DOUBLE_DOUBLE_BOOLEAN_OBJECT(
            closure: GObject.Closure,
            return_value: GObject.Value,
            n_param_values: number,
            param_values: GObject.Value,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        static marshal_BOOLEAN__OBJECT_BOXED(
            closure: GObject.Closure,
            return_value: GObject.Value,
            n_param_values: number,
            param_values: GObject.Value,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        static marshal_VOID__INT_INT(
            closure: GObject.Closure,
            return_value: GObject.Value,
            n_param_values: number,
            param_values: GObject.Value,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        static marshal_VOID__OBJECT_OBJECT(
            closure: GObject.Closure,
            return_value: GObject.Value,
            n_param_values: number,
            param_values: GObject.Value,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * Parses the given SVG path specification string.
         * @param path_data the sequence of path commands, specified as a string using the  same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable  Vector Graphics (SVG)</ulink> path element.
         */
        static parse_path_data(path_data: string): CanvasPathCommand[];

        // Owm methods of GooCanvas-2.0.Canvas

        /**
         * Converts the given bounds in the canvas coordinate space to a bounding box
         * in item space. This is useful in the item paint() methods to convert the
         * bounds to be painted to the item's coordinate space.
         * @param item a #GooCanvasItem.
         * @param bounds the bounds in canvas coordinate space, to be converted.
         */
        convert_bounds_to_item_space(item: CanvasItem, bounds: CanvasBounds): void;
        /**
         * Converts a coordinate from the given item's coordinate space to the canvas
         * coordinate space, applying all transformation matrices including the
         * item's own transformation matrix, if it has one.
         * @param item a #GooCanvasItem.
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_from_item_space(item: CanvasItem, x: number, y: number): void;
        /**
         * Converts a coordinate from pixels to the canvas coordinate space.
         *
         * The pixel coordinate space specifies pixels from the top-left of the entire
         * canvas window, according to the current scale setting.
         * See goo_canvas_set_scale().
         *
         * The canvas coordinate space is specified in the call to
         * goo_canvas_set_bounds().
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_from_pixels(x: number, y: number): void;
        /**
         * Converts a coordinate from the canvas coordinate space to the given
         * item's coordinate space, applying all transformation matrices including the
         * item's own transformation matrix, if it has one.
         * @param item a #GooCanvasItem.
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_to_item_space(item: CanvasItem, x: number, y: number): void;
        /**
         * Converts a coordinate from the canvas coordinate space to pixels.
         *
         * The canvas coordinate space is specified in the call to
         * goo_canvas_set_bounds().
         *
         * The pixel coordinate space specifies pixels from the top-left of the entire
         * canvas window, according to the current scale setting.
         * See goo_canvas_set_scale().
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_to_pixels(x: number, y: number): void;
        /**
         * Converts a coordinate from pixels to the canvas's units,
         * ignoring scaling and ignoring the coordinate space specified
         * in the call to goo_canvas_set_bounds().
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_units_from_pixels(x: number, y: number): void;
        /**
         * Converts a coordinate from the canvas's units to pixels,
         * ignoring scaling and ignoring the coordinate space specified
         * in the call to goo_canvas_set_bounds().
         * @param x a pointer to the x coordinate to convert.
         * @param y a pointer to the y coordinate to convert.
         */
        convert_units_to_pixels(x: number, y: number): void;
        /**
         * Creates a cairo context, initialized with the default canvas settings.
         * Note that this context should not be used for drawing. It should only be
         * used for calculating bounds of items.
         * @returns a new cairo context. It should be freed with cairo_destroy().
         */
        create_cairo_context(): cairo.Context;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, typically container items such as #GooCanvasGroup.
         *
         * It creates a new canvas item for the given item model, and recursively
         * creates items for any children.
         *
         * It uses the create_item() virtual method if it has been set.
         * Subclasses of #GooCanvas can define this method if they want to use
         * custom views for items.
         *
         * It emits the #GooCanvas::item-created signal after creating the view, so
         * application code can connect signal handlers to the new view if desired.
         * @param model the item model to create a canvas item for.
         * @returns a new canvas item.
         */
        create_item(model: CanvasItemModel): CanvasItem;
        /**
         * Gets the bounds of the canvas, in canvas units.
         *
         * By default, canvas units are pixels, though the #GooCanvas:units property
         * can be used to change the units to points, inches or millimeters.
         */
        get_bounds(): void;
        /**
         * Gets the default line width, which depends on the current units setting.
         * @returns the default line width of the canvas.
         */
        get_default_line_width(): number;
        /**
         * Gets the canvas item associated with the given #GooCanvasItemModel.
         * This is only useful when goo_canvas_set_root_item_model() has been used to
         * set a model for the canvas.
         *
         * For simple applications you can use goo_canvas_get_item() to set up
         * signal handlers for your items, e.g.
         *
         * <informalexample><programlisting>
         *    item = goo_canvas_get_item (GOO_CANVAS (canvas), my_item);
         *    g_signal_connect (item, "button_press_event",
         *                      (GtkSignalFunc) on_my_item_button_press, NULL);
         * </programlisting></informalexample>
         *
         * More complex applications may want to use the #GooCanvas::item-created
         * signal to hook up their signal handlers.
         * @param model a #GooCanvasItemModel.
         * @returns the canvas item corresponding to the given  #GooCanvasItemModel, or %NULL if no canvas item has been created for it yet.
         */
        get_item(model: CanvasItemModel): CanvasItem;
        /**
         * Gets the item at the given point.
         * @param x the x coordinate of the point.
         * @param y the y coordinate of the point
         * @param is_pointer_event %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
         * @returns the item found at the given point, or %NULL if no  item was found.
         */
        get_item_at(x: number, y: number, is_pointer_event: boolean): CanvasItem;
        /**
         * Gets all items at the given point.
         * @param x the x coordinate of the point.
         * @param y the y coordinate of the point
         * @param is_pointer_event %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
         * @returns a list of  items found at the given point, with the top item at the start of the list,  or %NULL if no items were found. The list must be freed with g_list_free().
         */
        get_items_at(x: number, y: number, is_pointer_event: boolean): CanvasItem[];
        /**
         * Gets a list of items inside or outside a given area.
         * @param area the area to compare with each item's bounds.
         * @param inside_area %TRUE if items inside @area should be returned, or %FALSE if  items outside @area should be returned.
         * @param allow_overlaps %TRUE if items which are partly inside and partly outside  should be returned.
         * @param include_containers %TRUE if containers should be checked as well as  normal items.
         * @returns a list of  items in the given area, or %NULL if no items are found.  The list should be freed with g_list_free().
         */
        get_items_in_area(
            area: CanvasBounds,
            inside_area: boolean,
            allow_overlaps: boolean,
            include_containers: boolean,
        ): CanvasItem[];
        /**
         * Gets the root item of the canvas, usually a #GooCanvasGroup.
         * @returns the root item, or %NULL if there is no root item.
         */
        get_root_item(): CanvasItem;
        /**
         * Gets the root item model of the canvas.
         * @returns the root item model, or %NULL if there is no root item model.
         */
        get_root_item_model(): CanvasItemModel;
        /**
         * Gets the current scale of the canvas.
         *
         * The scale specifies the magnification factor of the canvas, e.g. if an item
         * has a width of 2 pixels and the scale is set to 3, it will be displayed with
         * a width of 2 x 3 = 6 pixels.
         * @returns the current scale setting.
         */
        get_scale(): number;
        /**
         * Gets the static root item of the canvas.
         *
         * Static items are exactly the same as ordinary canvas items, except that
         * they do not move or change size when the canvas is scrolled or the scale
         * changes.
         *
         * Static items are added to the static root item in exactly the same way that
         * ordinary items are added to the root item.
         * @returns the static root item, or %NULL.
         */
        get_static_root_item(): CanvasItem;
        /**
         * Gets the static root item model of the canvas.
         *
         * Static item models are exactly the same as ordinary item models, except that
         * the corresponding items do not move or change size when the canvas is
         * scrolled or the scale changes.
         *
         * Static items models are added to the static root item model in exactly the
         * same way that ordinary item models are added to the root item model.
         * @returns the static root item model, or %NULL.
         */
        get_static_root_item_model(): CanvasItemModel;
        /**
         * Grabs the keyboard focus for the given item.
         * @param item the item to grab the focus.
         */
        grab_focus(item: CanvasItem): void;
        /**
         * Attempts to grab the keyboard for the given item.
         * @param item the item to grab the keyboard for.
         * @param owner_events %TRUE if keyboard events for this application will be  reported normally, or %FALSE if all keyboard events will be reported with  respect to the grab item.
         * @param time the time of the event that lead to the keyboard grab. This should  come from the relevant #GdkEvent.
         * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
         */
        keyboard_grab(item: CanvasItem, owner_events: boolean, time: number): Gdk.GrabStatus;
        /**
         * Ungrabs the keyboard, if the given item has the keyboard grab.
         * @param item the item that has the keyboard grab.
         * @param time the time of the event that lead to the keyboard ungrab. This should  come from the relevant #GdkEvent.
         */
        keyboard_ungrab(item: CanvasItem, time: number): void;
        /**
         * Attempts to grab the pointer for the given item.
         * @param item the item to grab the pointer for.
         * @param event_mask the events to receive during the grab.
         * @param cursor the cursor to display during the grab, or NULL.
         * @param time the time of the event that lead to the pointer grab. This should  come from the relevant #GdkEvent.
         * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
         */
        pointer_grab(
            item: CanvasItem,
            event_mask: Gdk.EventMask,
            cursor: Gdk.Cursor | null,
            time: number,
        ): Gdk.GrabStatus;
        /**
         * Ungrabs the pointer, if the given item has the pointer grab.
         * @param item the item that has the grab.
         * @param time the time of the event that lead to the pointer ungrab. This should  come from the relevant #GdkEvent.
         */
        pointer_ungrab(item: CanvasItem, time: number): void;
        /**
         * This function should only be used by #GooCanvasWidget and subclass
         * implementations.
         *
         * It registers a widget item with the canvas, so that the canvas can do the
         * necessary actions to move and resize the widget as needed.
         * @param witem a #GooCanvasWidget item.
         */
        register_widget_item(witem: CanvasWidget): void;
        /**
         * Renders all or part of a canvas to the given cairo context.
         *
         * This example code could be used in a #GtkPrintOperation
         * #GtkPrintOperation::draw-page callback to print each page in a multi-page
         * document (assuming the pages appear one after the other vertically in the
         * canvas). Note the call to cairo_translate() to translate the output to
         * the correct position on the printed page.
         *
         * <informalexample><programlisting>
         *    GooCanvasBounds bounds;
         *    bounds.x1 = 0;
         *    bounds.x2 = A4_PAGE_WIDTH;
         *    bounds.y1 = A4_PAGE_HEIGHT * page_num;
         *    bounds.y2 = A4_PAGE_HEIGHT * (page_num + 1);
         *
         *    cr = gtk_print_context_get_cairo_context (print_context);
         *    cairo_translate (cr, 0, -A4_PAGE_HEIGHT * page_num);
         *    goo_canvas_render (GOO_CANVAS (canvas), cr, &bounds, 0.0);
         * </programlisting></informalexample>
         * @param cr a cairo context.
         * @param bounds the area to render, or %NULL to render the entire canvas.
         * @param scale the scale to compare with each item's visibility threshold to see if they should be rendered. This only affects items that have their visibility set to %GOO_CANVAS_ITEM_VISIBLE_ABOVE_THRESHOLD.
         */
        render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void;
        /**
         * This function is only intended to be used by subclasses of #GooCanvas or
         * #GooCanvasItem implementations.
         *
         * Requests that the given bounds be redrawn. If `is_static` is %TRUE the bounds
         * are assumed to be in the static item coordinate space, otherwise they are
         * assumed to be in the canvas coordinate space.
         *
         * If `is_static` is %FALSE this function behaves the same as
         * goo_canvas_request_redraw().
         * @param bounds the bounds of the item to redraw.
         * @param is_static if the item is static.
         */
        request_item_redraw(bounds: CanvasBounds, is_static: boolean): void;
        /**
         * This function is only intended to be used by subclasses of #GooCanvas or
         * #GooCanvasItem implementations.
         *
         * Requests that the given bounds be redrawn. The bounds must be in the canvas
         * coordinate space.
         * @param bounds the bounds to redraw, in device space.
         */
        request_redraw(bounds: CanvasBounds): void;
        /**
         * This function is only intended to be used by subclasses of #GooCanvas or
         * #GooCanvasItem implementations.
         *
         * It schedules an update of the #GooCanvas. This will be performed in
         * the idle loop, after all pending events have been handled, but before
         * the canvas has been repainted.
         */
        request_update(): void;
        /**
         * Scrolls the canvas, placing the given point as close to the top-left of
         * the view as possible.
         * @param left the x coordinate to scroll to.
         * @param top the y coordinate to scroll to.
         */
        scroll_to(left: number, top: number): void;
        /**
         * Sets the bounds of the #GooCanvas, in canvas units.
         *
         * By default, canvas units are pixels, though the #GooCanvas:units property
         * can be used to change the units to points, inches or millimeters.
         * @param left the left edge.
         * @param top the top edge.
         * @param right the right edge.
         * @param bottom the bottom edge.
         */
        set_bounds(left: number, top: number, right: number, bottom: number): void;
        /**
         * Sets the root item of the canvas. Any existing canvas items are removed.
         * @param item the root canvas item.
         */
        set_root_item(item: CanvasItem): void;
        /**
         * Sets the root item model of the canvas.
         *
         * A hierarchy of canvas items will be created, corresponding to the hierarchy
         * of items in the model. Any current canvas items will be removed.
         * @param model a #GooCanvasItemModel.
         */
        set_root_item_model(model: CanvasItemModel): void;
        /**
         * Sets the scale of the canvas.
         *
         * The scale specifies the magnification factor of the canvas, e.g. if an item
         * has a width of 2 pixels and the scale is set to 3, it will be displayed with
         * a width of 2 x 3 = 6 pixels.
         * @param scale the new scale setting.
         */
        set_scale(scale: number): void;
        /**
         * Sets the static root item. Any existing static items are removed.
         *
         * Static items are exactly the same as ordinary canvas items, except that
         * they do not move or change size when the canvas is scrolled or the scale
         * changes.
         *
         * Static items are added to the static root item in exactly the same way that
         * ordinary items are added to the root item.
         * @param item the static root item.
         */
        set_static_root_item(item: CanvasItem): void;
        /**
         * Sets the static root item model. Any existing static item models are
         * removed.
         *
         * Static item models are exactly the same as ordinary item models, except that
         * the corresponding items do not move or change size when the canvas is
         * scrolled or the scale changes.
         *
         * Static items models are added to the static root item model in exactly the
         *  same way that ordinary item models are added to the root item model.
         * @param model the static root item model.
         */
        set_static_root_item_model(model: CanvasItemModel): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items.
         *
         * It should be called in the finalize method of #GooCanvasItem
         * objects, to remove the canvas item from the #GooCanvas's hash table.
         * @param model the item model whose canvas item is being finalized.
         */
        unregister_item(model: CanvasItemModel): void;
        /**
         * This function should only be used by #GooCanvasWidget and subclass
         * implementations.
         *
         * It unregisters a widget item from the canvas, when the item is no longer in
         * the canvas.
         * @param witem a #GooCanvasWidget item.
         */
        unregister_widget_item(witem: CanvasWidget): void;
        /**
         * This function is only intended to be used by subclasses of #GooCanvas or
         * #GooCanvasItem implementations.
         *
         * It updates any items that need updating.
         *
         * If the bounds of items change, they will request a redraw of the old and
         * new bounds so the display is updated correctly.
         */
        update(): void;
    }

    module CanvasAccessibleFactory {
        // Constructor properties interface
    }

    class CanvasAccessibleFactory extends Atk.ObjectFactory {}

    module CanvasEllipse {
        // Constructor properties interface
    }

    /**
     * GooCanvasEllipse represents an ellipse item.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * To create a #GooCanvasEllipse use goo_canvas_ellipse_new().
     *
     * To get or set the properties of an existing #GooCanvasEllipse, use
     * g_object_get() and g_object_set().
     *
     * The ellipse can be specified either with the "center-x", "center-y",
     * "radius-x" and "radius-y" properties, or with the "x", "y", "width" and
     * "height" properties.
     */
    class CanvasEllipse extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasEllipse

        center_x: number;
        centerX: number;
        center_y: number;
        centerY: number;
        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasEllipse

        parent_object: CanvasItemSimple;
        ellipse_data: CanvasEllipseData;
    }

    module CanvasEllipseModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasEllipseModel represents a model for ellipse items.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasEllipseModel use goo_canvas_ellipse_model_new().
     *
     * To get or set the properties of an existing #GooCanvasEllipseModel, use
     * g_object_get() and g_object_set().
     *
     * The ellipse can be specified either with the "center-x", "center-y",
     * "radius-x" and "radius-y" properties, or with the "x", "y", "width" and
     * "height" properties.
     *
     * To respond to events such as mouse clicks on the ellipse you must connect
     * to the signal handlers of the corresponding #GooCanvasEllipse objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasEllipseModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasEllipseModel

        center_x: number;
        centerX: number;
        center_y: number;
        centerY: number;
        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasEllipseModel

        parent_object: CanvasItemModelSimple;
        ellipse_data: CanvasEllipseData;
    }

    module CanvasGrid {
        // Constructor properties interface
    }

    /**
     * GooCanvasGrid represents a grid item.
     * A grid consists of a number of equally-spaced horizontal and vertical
     * grid lines, plus an optional border.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * To create a #GooCanvasGrid use goo_canvas_grid_new().
     *
     * To get or set the properties of an existing #GooCanvasGrid, use
     * g_object_get() and g_object_set().
     *
     * The grid's position and size is specified with the #GooCanvasGrid:x,
     * #GooCanvasGrid:y, #GooCanvasGrid:width and #GooCanvasGrid:height properties.
     *
     * The #GooCanvasGrid:x-step and #GooCanvasGrid:y-step properties specify the
     * distance between grid lines. The  #GooCanvasGrid:x-offset and
     * #GooCanvasGrid:y-offset properties specify the distance before the first
     * grid lines.
     *
     * The horizontal or vertical grid lines can be hidden using the
     * #GooCanvasGrid:show-horz-grid-lines and #GooCanvasGrid:show-vert-grid-lines
     * properties.
     *
     * The width of the border can be set using the #GooCanvasGrid:border-width
     * property. The border is drawn outside the area specified with the
     * #GooCanvasGrid:x, #GooCanvasGrid:y, #GooCanvasGrid:width and
     * #GooCanvasGrid:height properties.
     *
     * Other properties allow the colors and widths of the grid lines to be set.
     * The grid line color and width properties override the standard
     * #GooCanvasItemSimple:stroke-color and #GooCanvasItemSimple:line-width
     * properties, enabling different styles for horizontal and vertical grid lines.
     */
    class CanvasGrid extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasGrid

        border_color: string;
        borderColor: string;
        /**
         * The color to use for the border, specified as a GdkRGBA.
         */
        border_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use for the border, specified as a GdkRGBA.
         */
        borderColorGdkRgba: Gdk.RGBA;
        border_color_rgba: number;
        borderColorRgba: number;
        border_pattern: CairoPattern;
        borderPattern: CairoPattern;
        border_pixbuf: GdkPixbuf.Pixbuf;
        borderPixbuf: GdkPixbuf.Pixbuf;
        border_width: number;
        borderWidth: number;
        height: number;
        horz_grid_line_color: string;
        horzGridLineColor: string;
        /**
         * The color to use for the horizontal grid lines, specified as a GdkRGBA.
         */
        horz_grid_line_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use for the horizontal grid lines, specified as a GdkRGBA.
         */
        horzGridLineColorGdkRgba: Gdk.RGBA;
        horz_grid_line_color_rgba: number;
        horzGridLineColorRgba: number;
        horz_grid_line_pattern: CairoPattern;
        horzGridLinePattern: CairoPattern;
        horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        horzGridLinePixbuf: GdkPixbuf.Pixbuf;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        show_horz_grid_lines: boolean;
        showHorzGridLines: boolean;
        show_vert_grid_lines: boolean;
        showVertGridLines: boolean;
        vert_grid_line_color: string;
        vertGridLineColor: string;
        /**
         * The color to use for the vertical grid lines, specified as a GdkRGBA.
         */
        vert_grid_line_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use for the vertical grid lines, specified as a GdkRGBA.
         */
        vertGridLineColorGdkRgba: Gdk.RGBA;
        vert_grid_line_color_rgba: number;
        vertGridLineColorRgba: number;
        vert_grid_line_pattern: CairoPattern;
        vertGridLinePattern: CairoPattern;
        vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        vertGridLinePixbuf: GdkPixbuf.Pixbuf;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        vert_grid_lines_on_top: boolean;
        vertGridLinesOnTop: boolean;
        width: number;
        x: number;
        x_offset: number;
        xOffset: number;
        x_step: number;
        xStep: number;
        y: number;
        y_offset: number;
        yOffset: number;
        y_step: number;
        yStep: number;

        // Own fields of GooCanvas-2.0.CanvasGrid

        parent_object: CanvasItemSimple;
    }

    module CanvasGridModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasGridModel represents a model for grid items.
     * A grid consists of a number of equally-spaced horizontal and vertical
     * grid lines, plus an optional border.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasGridModel use goo_canvas_grid_model_new().
     *
     * To get or set the properties of an existing #GooCanvasGridModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the grid you must connect
     * to the signal handlers of the corresponding #GooCanvasGrid objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     *
     * The grid's position and size is specified with the #GooCanvasGridModel:x,
     * #GooCanvasGridModel:y, #GooCanvasGridModel:width and
     * #GooCanvasGridModel:height properties.
     *
     * The #GooCanvasGridModel:x-step and #GooCanvasGridModel:y-step properties
     * specify the distance between grid lines. The  #GooCanvasGridModel:x-offset
     * and #GooCanvasGridModel:y-offset properties specify the distance before the
     * first grid lines.
     *
     * The horizontal or vertical grid lines can be hidden using the
     * #GooCanvasGridModel:show-horz-grid-lines and
     * #GooCanvasGridModel:show-vert-grid-lines properties.
     *
     * The width of the border can be set using the #GooCanvasGridModel:border-width
     * property. The border is drawn outside the area specified with the
     * #GooCanvasGridModel:x, #GooCanvasGridModel:y, #GooCanvasGridModel:width and
     * #GooCanvasGridModel:height properties.
     *
     * Other properties allow the colors and widths of the grid lines to be set.
     * The grid line color and width properties override the standard
     * #GooCanvasItemModelSimple:stroke-color and
     * #GooCanvasItemModelSimple:line-width properties, enabling different styles
     * for horizontal and vertical grid lines.
     */
    class CanvasGridModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasGridModel

        border_color: string;
        borderColor: string;
        border_color_gdk_rgba: Gdk.RGBA;
        borderColorGdkRgba: Gdk.RGBA;
        border_color_rgba: number;
        borderColorRgba: number;
        border_pattern: CairoPattern;
        borderPattern: CairoPattern;
        border_pixbuf: GdkPixbuf.Pixbuf;
        borderPixbuf: GdkPixbuf.Pixbuf;
        border_width: number;
        borderWidth: number;
        height: number;
        horz_grid_line_color: string;
        horzGridLineColor: string;
        horz_grid_line_color_gdk_rgba: Gdk.RGBA;
        horzGridLineColorGdkRgba: Gdk.RGBA;
        horz_grid_line_color_rgba: number;
        horzGridLineColorRgba: number;
        horz_grid_line_pattern: CairoPattern;
        horzGridLinePattern: CairoPattern;
        horz_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        horzGridLinePixbuf: GdkPixbuf.Pixbuf;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        show_horz_grid_lines: boolean;
        showHorzGridLines: boolean;
        show_vert_grid_lines: boolean;
        showVertGridLines: boolean;
        vert_grid_line_color: string;
        vertGridLineColor: string;
        vert_grid_line_color_gdk_rgba: Gdk.RGBA;
        vertGridLineColorGdkRgba: Gdk.RGBA;
        vert_grid_line_color_rgba: number;
        vertGridLineColorRgba: number;
        vert_grid_line_pattern: CairoPattern;
        vertGridLinePattern: CairoPattern;
        vert_grid_line_pixbuf: GdkPixbuf.Pixbuf;
        vertGridLinePixbuf: GdkPixbuf.Pixbuf;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        vert_grid_lines_on_top: boolean;
        vertGridLinesOnTop: boolean;
        width: number;
        x: number;
        x_offset: number;
        xOffset: number;
        x_step: number;
        xStep: number;
        y: number;
        y_offset: number;
        yOffset: number;
        y_step: number;
        yStep: number;

        // Own fields of GooCanvas-2.0.CanvasGridModel

        parent_object: CanvasItemModelSimple;
    }

    module CanvasGroup {
        // Constructor properties interface
    }

    /**
     * #GooCanvasGroup represents a group of items. Groups can be nested to
     * any depth, to create a hierarchy of items. Items are ordered within each
     * group, with later items being displayed above earlier items.
     *
     * #GooCanvasGroup is a subclass of #GooCanvasItemSimple and so
     * inherits all of the style properties such as "stroke-color", "fill-color"
     * and "line-width". Setting a style property on a #GooCanvasGroup will affect
     * all children of the #GooCanvasGroup (unless the children override the
     * property setting).
     *
     * #GooCanvasGroup implements the #GooCanvasItem interface, so you can use
     * the #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate(), and the properties such as "visibility" and
     * "pointer-events".
     *
     * If the #GooCanvasGroup:width and #GooCanvasGroup:height properties are
     * set to positive values then the group is clipped to the given size.
     *
     * To create a #GooCanvasGroup use goo_canvas_group_new().
     *
     * To get or set the properties of an existing #GooCanvasGroup, use
     * g_object_get() and g_object_set().
     */
    class CanvasGroup extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasGroup

        height: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasGroup

        parent_object: CanvasItemSimple;
        items: any[];
    }

    module CanvasGroupModel {
        // Constructor properties interface
    }

    /**
     * #GooCanvasGroupModel represents a group of items. Groups can be nested to
     * any depth, to create a hierarchy of items. Items are ordered within each
     * group, with later items being displayed above earlier items.
     *
     * #GooCanvasGroupModel is a subclass of #GooCanvasItemModelSimple and so
     * inherits all of the style properties such as "stroke-color", "fill-color"
     * and "line-width". Setting a style property on a #GooCanvasGroupModel will
     * affect all children of the #GooCanvasGroupModel (unless the children
     * override the property setting).
     *
     * #GooCanvasGroupModel implements the #GooCanvasItemModel interface, so you
     * can use the #GooCanvasItemModel functions such as
     * goo_canvas_item_model_raise() and goo_canvas_item_model_rotate(), and the
     * properties such as "visibility" and "pointer-events".
     *
     * To create a #GooCanvasGroupModel use goo_canvas_group_model_new().
     *
     * To get or set the properties of an existing #GooCanvasGroupModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the group you must connect
     * to the signal handlers of the corresponding #GooCanvasGroup objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasGroupModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasGroupModel

        height: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasGroupModel

        parent_object: CanvasItemModelSimple;
        children: any[];
    }

    module CanvasImage {
        // Constructor properties interface
    }

    /**
     * GooCanvasImage represents an image item.
     *
     * <note><para>
     * It is usually necessary to set the "scale-to-fit" property to %TRUE to
     * scale the image to fit the given rectangle.
     * </para></note>
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "operator" and "pointer-events".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * To create a #GooCanvasImage use goo_canvas_image_new().
     *
     * To get or set the properties of an existing #GooCanvasImage, use
     * g_object_get() and g_object_set().
     */
    class CanvasImage extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasImage

        alpha: number;
        height: number;
        pattern: CairoPattern;
        pixbuf: GdkPixbuf.Pixbuf;
        scale_to_fit: boolean;
        scaleToFit: boolean;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasImage

        parent_object: CanvasItemSimple;
    }

    module CanvasImageModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasImageModel represent a model for image items.
     *
     * <note><para>
     * It is usually necessary to set the "scale-to-fit" property to %TRUE to
     * scale the image to fit the given rectangle. When using units other than
     * %GTK_UNIT_PIXEL it is also necessary to set the "width" and "height"
     * properties to set the desired size.
     * </para></note>
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "operator" and "pointer-events".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasImageModel use goo_canvas_image_model_new().
     *
     * To get or set the properties of an existing #GooCanvasImageModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the image you must connect
     * to the signal handlers of the corresponding #GooCanvasImage objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasImageModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasImageModel

        alpha: number;
        height: number;
        pattern: CairoPattern;
        pixbuf: GdkPixbuf.Pixbuf;
        scale_to_fit: boolean;
        scaleToFit: boolean;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasImageModel

        parent_object: CanvasItemModelSimple;
    }

    module CanvasItemAccessibleFactory {
        // Constructor properties interface
    }

    class CanvasItemAccessibleFactory extends Atk.ObjectFactory {}

    module CanvasItemModelSimple {
        // Constructor properties interface
    }

    /**
     * #GooCanvasItemModelSimple is used as a base class for the standard canvas
     * item models. It can also be used as the base class for new custom canvas
     * item models.
     *
     * <note><para>
     * 	The Model/View canvas feature may be removed in a future version of
     * 	GooCanvas.
     * </para></note>
     *
     * It provides default implementations for many of the #GooCanvasItemModel
     * methods.
     *
     * Subclasses of #GooCanvasItemModelSimple only need to implement the
     * create_item() method of the #GooCanvasItemModel interface, to create
     * the default canvas item to view the item model.
     */
    class CanvasItemModelSimple extends GObject.Object {
        // Own properties of GooCanvas-2.0.CanvasItemModelSimple

        antialias: CairoAntialias;
        clip_fill_rule: CairoFillRule;
        clipFillRule: CairoFillRule;
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clip_path: string;
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clipPath: string;
        fill_color: string;
        fillColor: string;
        fill_color_gdk_rgba: Gdk.RGBA;
        fillColorGdkRgba: Gdk.RGBA;
        fill_color_rgba: number;
        fillColorRgba: number;
        fill_pattern: CairoPattern;
        fillPattern: CairoPattern;
        fill_pixbuf: GdkPixbuf.Pixbuf;
        fillPixbuf: GdkPixbuf.Pixbuf;
        fill_rule: CairoFillRule;
        fillRule: CairoFillRule;
        font: string;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        hint_metrics: CairoHintMetrics;
        hintMetrics: CairoHintMetrics;
        line_cap: CairoLineCap;
        lineCap: CairoLineCap;
        line_dash: CanvasLineDash;
        lineDash: CanvasLineDash;
        line_join: CairoLineJoin;
        lineJoin: CairoLineJoin;
        line_join_miter_limit: number;
        lineJoinMiterLimit: number;
        line_width: number;
        lineWidth: number;
        operator: CairoOperator;
        stroke_color: string;
        strokeColor: string;
        stroke_color_gdk_rgba: Gdk.RGBA;
        strokeColorGdkRgba: Gdk.RGBA;
        stroke_color_rgba: number;
        strokeColorRgba: number;
        stroke_pattern: CairoPattern;
        strokePattern: CairoPattern;
        stroke_pixbuf: GdkPixbuf.Pixbuf;
        strokePixbuf: GdkPixbuf.Pixbuf;

        // Own fields of GooCanvas-2.0.CanvasItemModelSimple

        parent_object: GObject.Object;
    }

    module CanvasItemSimple {
        // Constructor properties interface
    }

    /**
     * #GooCanvasItemSimple is used as a base class for all of the standard canvas
     * items. It can also be used as the base class for new custom canvas items.
     *
     * It provides default implementations for many of the #GooCanvasItem
     * methods.
     *
     * For very simple items, all that is needed is to implement the create_path()
     * method. (#GooCanvasEllipse, #GooCanvasRect and #GooCanvasPath do this.)
     *
     * More complicated items need to implement the update(), paint() and
     * is_item_at() methods instead. (#GooCanvasImage, #GooCanvasPolyline,
     * #GooCanvasText and #GooCanvasWidget do this.) They may also need to
     * override some of the other GooCanvasItem methods such as set_canvas(),
     * set_parent() or allocate_area() if special code is needed. (#GooCanvasWidget
     * does this to make sure the #GtkWidget is embedded in the #GooCanvas widget
     * correctly.)
     */
    class CanvasItemSimple extends GObject.Object {
        // Own properties of GooCanvas-2.0.CanvasItemSimple

        antialias: CairoAntialias;
        clip_fill_rule: CairoFillRule;
        clipFillRule: CairoFillRule;
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clip_path: string;
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clipPath: string;
        fill_color: string;
        fillColor: string;
        /**
         * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
         */
        fill_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
         */
        fillColorGdkRgba: Gdk.RGBA;
        fill_color_rgba: number;
        fillColorRgba: number;
        fill_pattern: CairoPattern;
        fillPattern: CairoPattern;
        fill_pixbuf: GdkPixbuf.Pixbuf;
        fillPixbuf: GdkPixbuf.Pixbuf;
        fill_rule: CairoFillRule;
        fillRule: CairoFillRule;
        font: string;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        hint_metrics: CairoHintMetrics;
        hintMetrics: CairoHintMetrics;
        line_cap: CairoLineCap;
        lineCap: CairoLineCap;
        line_dash: CanvasLineDash;
        lineDash: CanvasLineDash;
        line_join: CairoLineJoin;
        lineJoin: CairoLineJoin;
        line_join_miter_limit: number;
        lineJoinMiterLimit: number;
        line_width: number;
        lineWidth: number;
        operator: CairoOperator;
        stroke_color: string;
        strokeColor: string;
        /**
         * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
         */
        stroke_color_gdk_rgba: Gdk.RGBA;
        /**
         * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
         */
        strokeColorGdkRgba: Gdk.RGBA;
        stroke_color_rgba: number;
        strokeColorRgba: number;
        stroke_pattern: CairoPattern;
        strokePattern: CairoPattern;
        stroke_pixbuf: GdkPixbuf.Pixbuf;
        strokePixbuf: GdkPixbuf.Pixbuf;

        // Own fields of GooCanvas-2.0.CanvasItemSimple

        canvas: Canvas;
        model: CanvasItemModelSimple;
        bounds: CanvasBounds;
        need_update: number;
        need_entire_subtree_update: number;

        // Owm methods of GooCanvas-2.0.CanvasItemSimple

        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple.
         *
         * It is used as a callback for the "changed" signal of the item models.
         * It requests an update or redraw of the item as appropriate.
         * @param recompute_bounds if the item's bounds need to be recomputed.
         */
        changed(recompute_bounds: boolean): void;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple.
         *
         * It checks if the given point is in the current path, using the item's
         * style settings.
         * @param x the x coordinate of the point.
         * @param y the y coordinate of the point.
         * @param cr a cairo context.
         * @param pointer_events specifies which parts of the path to check.
         * @returns %TRUE if the given point is in the current path.
         */
        check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple,
         * typically in their update() or get_requested_area() methods.
         *
         * It ensures that the item's style is setup correctly. If the item has its
         * own #GooCanvasStyle it makes sure the parent is set correctly. If it
         * doesn't have its own style it uses the parent item's style.
         */
        check_style(): void;
        /**
         * Gets the item's line width.
         * @returns the item's line width.
         */
        get_line_width(): number;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple,
         * typically in their update() or get_requested_area() methods.
         *
         * It calculates the bounds of the current path, using the item's style
         * settings, and stores the results in the given #GooCanvasBounds struct.
         *
         * The returned bounds contains the bounding box of the path in device space,
         * converted to user space coordinates. To calculate the bounds completely in
         * user space, use cairo_identity_matrix() to temporarily reset the current
         * transformation matrix to the identity matrix.
         * @param cr a cairo context.
         * @param bounds the #GooCanvasBounds struct to store the resulting bounding box.
         */
        get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple.
         *
         * It paints the current path, using the item's style settings.
         * @param cr a cairo context.
         */
        paint_path(cr: cairo.Context): void;
        /**
         * This function should be called by subclasses of #GooCanvasItemSimple
         * in their set_model() method.
         * @param model the model that @item will view.
         */
        set_model(model: CanvasItemModel): void;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple,
         * typically in their update() or get_requested_area() methods.
         *
         * It converts the item's bounds to a bounding box in the canvas (device)
         * coordinate space.
         * @param cr a cairo context.
         * @param bounds the bounds of the item, in the item's coordinate space.
         */
        user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void;
        /**
         * This function is intended to be used by subclasses of #GooCanvasItemSimple,
         * typically in their get_requested_area() method.
         *
         * It converts the item's bounds to a bounding box in its parent's coordinate
         * space. If the item has no transformation matrix set then no conversion is
         * needed.
         * @param cr a cairo context.
         * @param bounds the bounds of the item, in the item's coordinate space.
         */
        user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void;
    }

    module CanvasPath {
        // Constructor properties interface
    }

    /**
     * GooCanvasPath represents a path item, which is a series of one or more
     * lines, bezier curves, or elliptical arcs.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * #GooCanvasPath uses the same path specification strings as the Scalable
     * Vector Graphics (SVG) path element. For details see the
     * <ulink url="http://www.w3.org/Graphics/SVG/">SVG specification</ulink>.
     *
     * To create a #GooCanvasPath use goo_canvas_path_new().
     *
     * To get or set the properties of an existing #GooCanvasPath, use
     * g_object_get() and g_object_set().
     */
    class CanvasPath extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasPath

        /**
         * The sequence of path commands, specified as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        data: string;
        height: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasPath

        path_data: CanvasPathData;
    }

    module CanvasPathModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasPathModel represents a model for path items, which are a series of
     * one or more lines, bezier curves, or elliptical arcs.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * #GooCanvasPathModel uses the same path specification strings as the Scalable
     * Vector Graphics (SVG) path element. For details see the
     * <ulink url="http://www.w3.org/Graphics/SVG/">SVG specification</ulink>.
     *
     * To create a #GooCanvasPathModel use goo_canvas_path_model_new().
     *
     * To get or set the properties of an existing #GooCanvasPathModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the path you must connect
     * to the signal handlers of the corresponding #GooCanvasPath objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasPathModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasPathModel

        data: string;
        height: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasPathModel

        parent_object: CanvasItemModelSimple;
        path_data: CanvasPathData;
    }

    module CanvasPolyline {
        // Constructor properties interface
    }

    /**
     * GooCanvasPolyline represents a polyline item, which is a series of one or
     * more lines, with optional arrows at either end.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * To create a #GooCanvasPolyline use goo_canvas_polyline_new(), or
     * goo_canvas_polyline_new_line() for a simple line between two points.
     *
     * To get or set the properties of an existing #GooCanvasPolyline, use
     * g_object_get() and g_object_set().
     */
    class CanvasPolyline extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasPolyline

        arrow_length: number;
        arrowLength: number;
        arrow_tip_length: number;
        arrowTipLength: number;
        arrow_width: number;
        arrowWidth: number;
        close_path: boolean;
        closePath: boolean;
        end_arrow: boolean;
        endArrow: boolean;
        height: number;
        points: CanvasPoints;
        start_arrow: boolean;
        startArrow: boolean;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasPolyline

        polyline_data: CanvasPolylineData;
    }

    module CanvasPolylineModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasPolylineModel represents a model for polyline items, which are a
     * series of one or more lines, with optional arrows at either end.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasPolylineModel use goo_canvas_polyline_model_new(), or
     * goo_canvas_polyline_model_new_line() for a simple line between two points.
     *
     * To get or set the properties of an existing #GooCanvasPolylineModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the polyline you must connect
     * to the signal handlers of the corresponding #GooCanvasPolyline objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasPolylineModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasPolylineModel

        arrow_length: number;
        arrowLength: number;
        arrow_tip_length: number;
        arrowTipLength: number;
        arrow_width: number;
        arrowWidth: number;
        close_path: boolean;
        closePath: boolean;
        end_arrow: boolean;
        endArrow: boolean;
        height: number;
        points: CanvasPoints;
        start_arrow: boolean;
        startArrow: boolean;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasPolylineModel

        parent_object: CanvasItemModelSimple;
        polyline_data: CanvasPolylineData;
    }

    module CanvasRect {
        // Constructor properties interface
    }

    /**
     * GooCanvasRect represents a rectangle item.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * To create a #GooCanvasRect use goo_canvas_rect_new().
     *
     * To get or set the properties of an existing #GooCanvasRect, use
     * g_object_get() and g_object_set().
     */
    class CanvasRect extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasRect

        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasRect

        rect_data: CanvasRectData;
    }

    module CanvasRectModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasRectModel represents a model for rectangle items.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "stroke-color", "fill-color" and "line-width".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasRectModel use goo_canvas_rect_model_new().
     *
     * To get or set the properties of an existing #GooCanvasRectModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the rectangle you must connect
     * to the signal handlers of the corresponding #GooCanvasRect objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasRectModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasRectModel

        height: number;
        radius_x: number;
        radiusX: number;
        radius_y: number;
        radiusY: number;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasRectModel

        parent_object: CanvasItemModelSimple;
        rect_data: CanvasRectData;
    }

    module CanvasStyle {
        // Constructor properties interface
    }

    /**
     * #GooCanvasStyle provides support for cascading style properties for canvas
     * items. It is intended to be used when implementing new canvas items.
     *
     * <note><para>
     * 	The cascading styles canvas feature may be removed in a future version
     *      of GooCanvas.
     * </para></note>
     *
     * Style properties are identified by a unique #GQuark, and contain
     * arbitrary data stored in a #GValue.
     *
     * #GooCanvasStyle also provides a few convenience functions such as
     * goo_canvas_style_set_stroke_options() and
     * goo_canvas_style_set_fill_options() which efficiently apply an item's
     * standard style properties to the given cairo_t.
     */
    class CanvasStyle extends GObject.Object {
        // Own fields of GooCanvas-2.0.CanvasStyle

        properties: any[];

        // Constructors of GooCanvas-2.0.CanvasStyle

        static ['new'](): CanvasStyle;

        // Owm methods of GooCanvas-2.0.CanvasStyle

        /**
         * Copies the given #GooCanvasStyle, by copying all of its properties.
         * Though the parent of the new style is left unset.
         * @returns a copy of the given #GooCanvasStyle.
         */
        copy(): CanvasStyle;
        /**
         * Gets the parent of the style.
         * @returns the parent of the given style, or %NULL.
         */
        get_parent(): CanvasStyle;
        /**
         * Gets the value of a property.
         *
         * This searches though all the #GooCanvasStyle's own list of property settings
         * and also all ancestor #GooCanvasStyle objects.
         *
         * Note that it returns a pointer to the internal #GValue setting, which should
         * not be changed.
         * @param property_id the property identifier.
         * @returns the property value, or %NULL if it isn't set.
         */
        get_property(property_id: GLib.Quark): GObject.Value;
        /**
         * Sets the standard cairo fill options using the given style.
         * @param cr a cairo context.
         * @returns %TRUE if a paint source is set, or %FALSE if the fill should be skipped.
         */
        set_fill_options(cr: cairo.Context): boolean;
        /**
         * Sets the parent of the style.
         * @param parent the new parent.
         */
        set_parent(parent: CanvasStyle): void;
        /**
         * Sets a property in the style, replacing any current setting.
         *
         * Note that this will override the property setting in ancestor
         * #GooCanvasStyle objects.
         * @param property_id the property identifier.
         * @param value the value of the property.
         */
        set_property(property_id: GLib.Quark, value: GObject.Value): void;
        /**
         * Sets the standard cairo stroke options using the given style.
         * @param cr a cairo context.
         * @returns %TRUE if a paint source is set, or %FALSE if the stroke should be skipped.
         */
        set_stroke_options(cr: cairo.Context): boolean;
    }

    module CanvasTable {
        // Constructor properties interface
    }

    /**
     * #GooCanvasTable is a table container used to lay out other canvas items.
     * It is used in a similar way to how the GtkTable widget is used to lay out
     * GTK+ widgets.
     *
     * Items are added to the table using the normal methods, then
     * goo_canvas_item_set_child_properties() is used to specify how each child
     * item is to be positioned within the table (i.e. which row and column it is
     * in, how much padding it should have and whether it should expand or
     * shrink).
     *
     * #GooCanvasTable is a subclass of #GooCanvasItemSimple and so
     * inherits all of the style properties such as "stroke-color", "fill-color"
     * and "line-width". Setting a style property on a #GooCanvasTable will affect
     * all children of the #GooCanvasTable (unless the children override the
     * property setting).
     *
     * #GooCanvasTable implements the #GooCanvasItem interface, so you can use
     * the #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate(), and the properties such as "visibility" and
     * "pointer-events".
     *
     * To create a #GooCanvasTable use goo_canvas_table_new().
     *
     * To get or set the properties of an existing #GooCanvasTable, use
     * g_object_get() and g_object_set().
     */
    class CanvasTable extends CanvasGroup {
        // Own properties of GooCanvas-2.0.CanvasTable

        column_spacing: number;
        columnSpacing: number;
        homogeneous_columns: boolean;
        homogeneousColumns: boolean;
        homogeneous_rows: boolean;
        homogeneousRows: boolean;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        row_spacing: number;
        rowSpacing: number;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        x_border_spacing: number;
        xBorderSpacing: number;
        y_border_spacing: number;
        yBorderSpacing: number;
    }

    module CanvasTableModel {
        // Constructor properties interface
    }

    /**
     * #GooCanvasTableModel is a model for a table container used to lay out other
     * canvas items. It is used in a similar way to how the GtkTable widget is used
     * to lay out GTK+ widgets.
     *
     * Item models are added to the table using the normal methods, then
     * goo_canvas_item_model_set_child_properties() is used to specify how each
     * child item is to be positioned within the table (i.e. which row and column
     * it is in, how much padding it should have and whether it should expand or
     * shrink).
     *
     * #GooCanvasTableModel is a subclass of #GooCanvasItemModelSimple and so
     * inherits all of the style properties such as "stroke-color", "fill-color"
     * and "line-width". Setting a style property on a #GooCanvasTableModel will
     * affect all children of the #GooCanvasTableModel (unless the children
     * override the property setting).
     *
     * #GooCanvasTableModel implements the #GooCanvasItemModel interface, so you
     * can use the #GooCanvasItemModel functions such as
     * goo_canvas_item_model_raise() and goo_canvas_item_rotate(), and the
     * properties such as "visibility" and "pointer-events".
     *
     * To create a #GooCanvasTableModel use goo_canvas_table_model_new().
     *
     * To get or set the properties of an existing #GooCanvasTableModel, use
     * g_object_get() and g_object_set().
     */
    class CanvasTableModel extends CanvasGroupModel {
        // Own properties of GooCanvas-2.0.CanvasTableModel

        column_spacing: number;
        columnSpacing: number;
        homogeneous_columns: boolean;
        homogeneousColumns: boolean;
        homogeneous_rows: boolean;
        homogeneousRows: boolean;
        horz_grid_line_width: number;
        horzGridLineWidth: number;
        row_spacing: number;
        rowSpacing: number;
        vert_grid_line_width: number;
        vertGridLineWidth: number;
        x_border_spacing: number;
        xBorderSpacing: number;
        y_border_spacing: number;
        yBorderSpacing: number;

        // Own fields of GooCanvas-2.0.CanvasTableModel

        parent_object: CanvasGroupModel;
    }

    module CanvasText {
        // Constructor properties interface
    }

    /**
     * GooCanvasText represents a text item.
     *
     * It is a subclass of #GooCanvasItemSimple and so inherits all of the style
     * properties such as "fill-color".
     *
     * It also implements the #GooCanvasItem interface, so you can use the
     * #GooCanvasItem functions such as goo_canvas_item_raise() and
     * goo_canvas_item_rotate().
     *
     * The #GooCanvasText:width and #GooCanvasText:height properties specify the
     * area of the item. If it exceeds that area because there is too much text,
     * it is clipped. The properties can be set to -1 to disable clipping.
     *
     * To create a #GooCanvasText use goo_canvas_text_new().
     *
     * To get or set the properties of an existing #GooCanvasText, use
     * g_object_get() and g_object_set().
     */
    class CanvasText extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasText

        alignment: Pango.Alignment;
        anchor: CanvasAnchorType;
        ellipsize: Pango.EllipsizeMode;
        height: number;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
        width: number;
        wrap: Pango.WrapMode;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasText

        text_data: CanvasTextData;
        layout_width: number;

        // Owm methods of GooCanvas-2.0.CanvasText

        /**
         * Gets the natural extents of the text, in the text item's coordinate space.
         *
         * The final extents of the text may be different, if the text item is placed
         * in a layout container such as #GooCanvasTable.
         */
        get_natural_extents(): void;
    }

    module CanvasTextModel {
        // Constructor properties interface
    }

    /**
     * GooCanvasTextModel represents a model for text items.
     *
     * It is a subclass of #GooCanvasItemModelSimple and so inherits all of the
     * style properties such as "fill-color".
     *
     * It also implements the #GooCanvasItemModel interface, so you can use the
     * #GooCanvasItemModel functions such as goo_canvas_item_model_raise() and
     * goo_canvas_item_model_rotate().
     *
     * To create a #GooCanvasTextModel use goo_canvas_text_model_new().
     *
     * To get or set the properties of an existing #GooCanvasTextModel, use
     * g_object_get() and g_object_set().
     *
     * To respond to events such as mouse clicks on the text item you must connect
     * to the signal handlers of the corresponding #GooCanvasText objects.
     * (See goo_canvas_get_item() and #GooCanvas::item-created.)
     */
    class CanvasTextModel extends CanvasItemModelSimple {
        // Own properties of GooCanvas-2.0.CanvasTextModel

        alignment: Pango.Alignment;
        anchor: CanvasAnchorType;
        ellipsize: Pango.EllipsizeMode;
        height: number;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
        width: number;
        wrap: Pango.WrapMode;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasTextModel

        parent_object: CanvasItemModelSimple;
        text_data: CanvasTextData;
    }

    module CanvasWidget {
        // Constructor properties interface
    }

    /**
     * GooCanvasWidget provides support for placing any GtkWidget in the canvas.
     *
     * The #GooCanvasWidget:width and #GooCanvasWidget:height properties specify
     * the widget's size. If either of them is -1, then the requested size of the
     * widget is used instead, which is the default for both width and height.
     *
     * Note that there are a number of limitations in the use of #GooCanvasWidget:
     *
     * <itemizedlist><listitem><para>
     * It doesn't support any transformation besides simple translation.
     * This means you can't scale a canvas with a #GooCanvasWidget in it.
     * </para></listitem><listitem><para>
     * It doesn't support layering, so you can't place other items beneath
     * or above the #GooCanvasWidget.
     * </para></listitem><listitem><para>
     * It doesn't support rendering of widgets to a given cairo_t, which
     * means you can't output the widget to a pdf or postscript file.
     * </para></listitem><listitem><para>
     * It doesn't have a model/view variant like the other standard items,
     * so it can only be used in a simple canvas without a model.
     * </para></listitem><listitem><para>
     * It can't be made a static item.
     * </para></listitem></itemizedlist>
     */
    class CanvasWidget extends CanvasItemSimple {
        // Own properties of GooCanvas-2.0.CanvasWidget

        anchor: CanvasAnchorType;
        height: number;
        widget: Gtk.Widget;
        width: number;
        x: number;
        y: number;

        // Own fields of GooCanvas-2.0.CanvasWidget

        parent_object: CanvasItemSimple;
    }

    module CanvasWidgetAccessibleFactory {
        // Constructor properties interface
    }

    class CanvasWidgetAccessibleFactory extends Atk.ObjectFactory {}

    /**
     * #GooCanvasBounds represents the bounding box of an item in the canvas.
     */
    class CanvasBounds {
        // Own fields of GooCanvas-2.0.CanvasBounds

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors of GooCanvas-2.0.CanvasBounds

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
    }

    /**
     * The #GooCanvasClass-struct struct contains one virtual method that
     * subclasses may override.
     */
    class CanvasClass {}

    class CanvasEllipseClass {}

    class CanvasEllipseData {
        // Own fields of GooCanvas-2.0.CanvasEllipseData

        center_x: number;
        center_y: number;
        radius_x: number;
        radius_y: number;

        // Constructors of GooCanvas-2.0.CanvasEllipseData

        constructor(
            properties?: Partial<{
                center_x: number;
                center_y: number;
                radius_x: number;
                radius_y: number;
            }>,
        );
    }

    class CanvasEllipseModelClass {}

    class CanvasGridClass {}

    class CanvasGridData {
        // Own fields of GooCanvas-2.0.CanvasGridData

        x: number;
        y: number;
        width: number;
        height: number;
        x_step: number;
        y_step: number;
        x_offset: number;
        y_offset: number;
        horz_grid_line_width: number;
        vert_grid_line_width: number;
        border_width: number;
        show_horz_grid_lines: number;
        show_vert_grid_lines: number;
        vert_grid_lines_on_top: number;
    }

    class CanvasGridModelClass {}

    class CanvasGroupClass {}

    class CanvasGroupModelClass {}

    class CanvasImageClass {}

    class CanvasImageData {
        // Own fields of GooCanvas-2.0.CanvasImageData

        x: number;
        y: number;
        width: number;
        height: number;
    }

    class CanvasImageModelClass {}

    /**
     * #GooCanvasItemIFace holds the virtual methods that make up the
     * #GooCanvasItem interface.
     *
     * Simple canvas items only need to implement the get_parent(), set_parent(),
     * get_bounds(), get_items_at(), update() and paint() methods (and also
     * get_requested_area() and allocate_area() if they are going to be used
     * inside a layout container like #GooCanvasTable).
     *
     * Items that support transforms should also implement get_transform() and
     * set_transform(). Items that support styles should implement get_style()
     * and set_style().
     *
     * Container items must implement get_canvas(), set_canvas(),
     * get_n_children(), get_child() and request_update(). Containers that support
     * dynamic changes to their children should implement add_child(),
     * move_child() and remove_child(). Layout containers like #GooCanvasTable
     * may implement get_child_property(), set_child_property() and
     * get_transform_for_child().
     */
    class CanvasItemIface {}

    /**
     * #GooCanvasItemModelIFace holds the virtual methods that make up the
     * #GooCanvasItemModel interface.
     *
     * Simple item models only need to implement the get_parent(), set_parent()
     * and create_item() methods.
     *
     * Items that support transforms should also implement get_transform() and
     * set_transform(). Items that support styles should implement get_style()
     * and set_style().
     *
     * Container items must implement get_n_children() and get_child().
     * Containers that support dynamic changes to their children should implement
     * add_child(), move_child() and remove_child().
     * Layout containers like #GooCanvasTable may implement
     * get_child_property() and set_child_property().
     */
    class CanvasItemModelIface {}

    class CanvasItemModelSimpleClass {}

    /**
     * The #GooCanvasItemSimpleClass-struct struct contains several methods that
     * subclasses can override.
     *
     * Simple items need only implement the create_path() method. More complex
     * items must override the update(), paint() and is_item_at() methods instead.
     */
    class CanvasItemSimpleClass {}

    /**
     * This is the data common to both the model and view classes.
     */
    class CanvasItemSimpleData {
        // Own fields of GooCanvas-2.0.CanvasItemSimpleData

        style: CanvasStyle;
        clip_path_commands: any[];
        tooltip: string;
        visibility_threshold: number;
        visibility: number;
        pointer_events: number;
        can_focus: number;
        own_style: number;
        clip_fill_rule: number;
        is_static: number;
    }

    /**
     * #GooCanvasLineDash specifies a dash pattern to be used when drawing items.
     */
    class CanvasLineDash {
        // Own fields of GooCanvas-2.0.CanvasLineDash

        ref_count: number;
        num_dashes: number;
        dashes: number;
        dash_offset: number;

        // Constructors of GooCanvas-2.0.CanvasLineDash

        constructor(
            properties?: Partial<{
                ref_count: number;
                num_dashes: number;
                dashes: number;
                dash_offset: number;
            }>,
        );

        static newv(dashes: number[]): CanvasLineDash;

        // Owm methods of GooCanvas-2.0.CanvasLineDash

        /**
         * Increments the reference count of the dash pattern.
         * @returns the dash pattern.
         */
        ref(): CanvasLineDash;
        /**
         * Sets the start offset into the dash pattern.
         * @param dash_offset the start offset into the dash pattern.
         */
        set_offset(dash_offset: number): void;
        /**
         * Decrements the reference count of the dash pattern. If it falls to 0
         * it is freed.
         */
        unref(): void;
    }

    class CanvasPathClass {}

    class CanvasPathData {
        // Own fields of GooCanvas-2.0.CanvasPathData

        path_commands: any[];

        // Constructors of GooCanvas-2.0.CanvasPathData

        constructor(
            properties?: Partial<{
                path_commands: any[];
            }>,
        );
    }

    class CanvasPathModelClass {}

    /**
     * #GooCairoPoints represents an array of points.
     */
    class CanvasPoints {
        // Own fields of GooCanvas-2.0.CanvasPoints

        coords: number;
        num_points: number;
        ref_count: number;

        // Constructors of GooCanvas-2.0.CanvasPoints

        constructor(
            properties?: Partial<{
                coords: number;
                num_points: number;
                ref_count: number;
            }>,
        );

        static ['new'](num_points: number): CanvasPoints;

        // Owm methods of GooCanvas-2.0.CanvasPoints

        /**
         * Gets the coordinates of a point in the #GooCanvasPoints struct.
         * @param idx index of point to get.
         */
        get_point(idx: number): void;
        /**
         * Increments the reference count of the given #GooCanvasPoints struct.
         * @returns the #GooCanvasPoints struct.
         */
        ref(): CanvasPoints;
        /**
         * Sets the coordinates of a point in the #GooCanvasPoints struct.
         * @param idx index of point to set.
         * @param x x value to set point coordinate to.
         * @param y y value to set point coordinate to.
         */
        set_point(idx: number, x: number, y: number): void;
        /**
         * Decrements the reference count of the given #GooCanvasPoints struct,
         * freeing it if the reference count falls to zero.
         */
        unref(): void;
    }

    class CanvasPolylineArrowData {
        // Own fields of GooCanvas-2.0.CanvasPolylineArrowData

        arrow_width: number;
        arrow_length: number;
        arrow_tip_length: number;
        line_start: number[];
        line_end: number[];
        start_arrow_coords: number[];
        end_arrow_coords: number[];

        // Constructors of GooCanvas-2.0.CanvasPolylineArrowData

        constructor(
            properties?: Partial<{
                arrow_width: number;
                arrow_length: number;
                arrow_tip_length: number;
                line_start: number[];
                line_end: number[];
                start_arrow_coords: number[];
                end_arrow_coords: number[];
            }>,
        );
    }

    class CanvasPolylineClass {}

    class CanvasPolylineData {
        // Own fields of GooCanvas-2.0.CanvasPolylineData

        coords: number;
        arrow_data: CanvasPolylineArrowData;
        num_points: number;
        close_path: number;
        start_arrow: number;
        end_arrow: number;
        reconfigure_arrows: number;

        // Constructors of GooCanvas-2.0.CanvasPolylineData

        constructor(
            properties?: Partial<{
                coords: number;
                num_points: number;
                close_path: number;
                start_arrow: number;
                end_arrow: number;
                reconfigure_arrows: number;
            }>,
        );
    }

    class CanvasPolylineModelClass {}

    class CanvasRectClass {}

    class CanvasRectData {
        // Own fields of GooCanvas-2.0.CanvasRectData

        x: number;
        y: number;
        width: number;
        height: number;
        radius_x: number;
        radius_y: number;

        // Constructors of GooCanvas-2.0.CanvasRectData

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
                radius_x: number;
                radius_y: number;
            }>,
        );
    }

    class CanvasRectModelClass {}

    class CanvasStyleClass {}

    /**
     * #GooCanvasStyleProperty represents a property setting.
     */
    class CanvasStyleProperty {
        // Own fields of GooCanvas-2.0.CanvasStyleProperty

        id: GLib.Quark;
    }

    class CanvasTableClass {}

    class CanvasTableData {
        // Own fields of GooCanvas-2.0.CanvasTableData

        width: number;
        height: number;
        dimensions: CanvasTableDimension[];
        border_width: number;
        children: any[];
    }

    class CanvasTableDimension {
        // Own fields of GooCanvas-2.0.CanvasTableDimension

        size: number;
        default_spacing: number;
        spacings: number;
        homogeneous: number;

        // Constructors of GooCanvas-2.0.CanvasTableDimension

        constructor(
            properties?: Partial<{
                size: number;
                default_spacing: number;
                spacings: number;
                homogeneous: number;
            }>,
        );
    }

    class CanvasTableLayoutData {}

    class CanvasTableModelClass {}

    class CanvasTextClass {}

    class CanvasTextData {
        // Own fields of GooCanvas-2.0.CanvasTextData

        text: string;
        x: number;
        y: number;
        width: number;
        use_markup: number;
        anchor: number;
        alignment: number;
        ellipsize: number;
        wrap: number;

        // Constructors of GooCanvas-2.0.CanvasTextData

        constructor(
            properties?: Partial<{
                text: string;
                x: number;
                y: number;
                width: number;
                use_markup: number;
                anchor: number;
                alignment: number;
                ellipsize: number;
                wrap: number;
            }>,
        );
    }

    class CanvasTextModelClass {}

    class CanvasWidgetClass {}

    /**
     * GooCanvasPathCommand holds the data for each command in the path.
     *
     * The `relative` flag specifies that the coordinates for the command are
     * relative to the current point. Otherwise they are assumed to be absolute
     * coordinates.
     */
    class CanvasPathCommand {}

    interface CanvasItem {
        // Own properties of GooCanvas-2.0.CanvasItem

        can_focus: boolean;
        canFocus: boolean;
        description: string;
        parent: CanvasItem;
        pointer_events: CanvasPointerEvents;
        pointerEvents: CanvasPointerEvents;
        title: string;
        /**
         * The tooltip to display for the item, or %NULL to display no tooltip.
         *
         * Note that this property has no effect unless the
         * #GtkWidget:has-tooltip property is set to %TRUE on the #GooCanvas
         * containing this item.
         */
        tooltip: string;
        transform: CairoMatrix;
        visibility: CanvasItemVisibility;
        visibility_threshold: number;
        visibilityThreshold: number;

        // Owm methods of GooCanvas-2.0.CanvasItem

        /**
         * Adds a child item to a container item at the given stack position.
         * @param child the item to add.
         * @param position the position of the item, or -1 to place it last (at the top of  the stacking order).
         */
        add_child(child: CanvasItem, position: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It allocates an area to a child #GooCanvasItem.
         *
         * Note that the parent layout item will use a transform to move each of its
         * children for the layout, so there is no need for the child item to
         * reposition itself. It only needs to recalculate its device bounds.
         *
         * To help recalculate the item's device bounds, the `x_offset` and `y_offset`
         * of the child item's allocated position from its requested position are
         * provided. Simple items can just add these to their bounds.
         * @param cr a cairo context.
         * @param requested_area the area that the item originally requested, in the  parent's coordinate space.
         * @param allocated_area the area that the item has been allocated, in the parent's  coordinate space.
         * @param x_offset the x offset of the allocated area from the requested area in  the device coordinate space.
         * @param y_offset the y offset of the allocated area from the requested area in  the device coordinate space.
         */
        allocate_area(
            cr: cairo.Context,
            requested_area: CanvasBounds,
            allocated_area: CanvasBounds,
            x_offset: number,
            y_offset: number,
        ): void;
        /**
         * Animates an item from its current position to the given offsets, scale
         * and rotation.
         * @param x the final x coordinate.
         * @param y the final y coordinate.
         * @param scale the final scale.
         * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
         * @param absolute if the @x, @y, @scale and @degrees values are absolute, or  relative to the current transform. Note that absolute animations only work  if the item currently has a simple transform. If the item has a shear or  some other complicated transform it may result in strange animations.
         * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
         * @param step_time the time between each animation step, in milliseconds.
         * @param type specifies what happens when the animation finishes.
         */
        animate(
            x: number,
            y: number,
            scale: number,
            degrees: number,
            absolute: boolean,
            duration: number,
            step_time: number,
            type: CanvasAnimateType,
        ): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items.
         *
         * It updates the canvas immediately, if an update is scheduled.
         * This ensures that all item bounds are up-to-date.
         */
        ensure_updated(): void;
        /**
         * Attempts to find the given child item with the container's stack.
         * @param child the child item to find.
         * @returns the position of the given @child item, or -1 if it isn't found.
         */
        find_child(child: CanvasItem): number;
        /**
         * Gets the bounds of the item.
         *
         * Note that the bounds includes the entire fill and stroke extents of the
         * item, whether they are painted or not.
         */
        get_bounds(): void;
        /**
         * Returns the #GooCanvas containing the given #GooCanvasItem.
         * @returns the #GooCanvas.
         */
        get_canvas(): Canvas;
        /**
         * Gets the child item at the given stack position.
         * @param child_num the position of a child in the container's stack.
         * @returns the child item at the given stack position, or  %NULL if @child_num is out of range.
         */
        get_child(child_num: number): CanvasItem;
        /**
         * Gets a child property of `child`.
         * @param child a child #GooCanvasItem.
         * @param property_name the name of the child property to get.
         * @param value a location to return the value.
         */
        get_child_property(child: CanvasItem, property_name: string, value: GObject.Value): void;
        /**
         * Returns %TRUE if the item is static. Static items do not move or change
         * size when the canvas is scrolled or the scale changes.
         * @returns %TRUE if the item is static.
         */
        get_is_static(): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It gets the items at the given point.
         * @param x the x coordinate of the point.
         * @param y the y coordinate of the point.
         * @param cr a cairo contect.
         * @param is_pointer_event %TRUE if the "pointer-events" properties of items should  be used to determine which parts of the item are tested.
         * @param parent_is_visible %TRUE if the parent item is visible (which  implies that all ancestors are also visible).
         * @param found_items the list of items found  so far.
         * @returns the  @found_items list, with any more found items  added onto the start of the list, leaving the top item first.
         */
        get_items_at(
            x: number,
            y: number,
            cr: cairo.Context,
            is_pointer_event: boolean,
            parent_is_visible: boolean,
            found_items: CanvasItem[],
        ): CanvasItem[];
        /**
         * Gets the model of the given canvas item.
         * @returns the item's model, or %NULL if it has no model.
         */
        get_model(): CanvasItemModel;
        /**
         * Gets the number of children of the container.
         * @returns the number of children.
         */
        get_n_children(): number;
        /**
         * Gets the parent of the given item.
         * @returns the parent item, or %NULL if the item has no parent.
         */
        get_parent(): CanvasItem;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested area of a child item.
         * @param cr a cairo context.
         * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space.
         * @returns %TRUE if the item should be allocated space.
         */
        get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested area of a child item, assuming it is allocated the
         * given width. This is useful for text items whose requested height may change
         * depending on the allocated width.
         * @param cr a cairo context.
         * @param width the allocated width.
         * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space. If %FALSE is returned, this is undefined.
         * @returns %TRUE if the item's requested area changes due to the new allocated width.
         */
        get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested height of a child item, assuming it is allocated the
         * given width. This is useful for text items whose requested height may change
         * depending on the allocated width.
         * @param cr a cairo context.
         * @param width the width that the item may be allocated.
         * @returns the requested height of the item, given the allocated width,  or %-1 if the item doesn't support this method or its height doesn't  change when allocated different widths.
         */
        get_requested_height(cr: cairo.Context, width: number): number;
        /**
         * This function can be used to get the position, scale and rotation of an
         * item, providing that the item has a simple transformation matrix
         * (e.g. set with goo_canvas_item_set_simple_transform(), or using a
         * combination of simple translate, scale and rotate operations). If the item
         * has a complex transformation matrix the results will be incorrect.
         * @returns %TRUE if a transform is set.
         */
        get_simple_transform(): boolean;
        /**
         * Gets the item's style. If the item doesn't have its own style it will return
         * its parent's style.
         * @returns the item's style.
         */
        get_style(): CanvasStyle;
        /**
         * Gets the transformation matrix of an item.
         * @returns %TRUE if a transform is set.
         */
        get_transform(): boolean;
        /**
         * Gets the transformation matrix of an item combined with any special
         * transform needed for the given child. These special transforms are used
         * by layout items such as #GooCanvasTable.
         * @param child a child of @item.
         * @returns %TRUE if a transform is set.
         */
        get_transform_for_child(child: CanvasItem): boolean;
        /**
         * Tests to see if the given item is a container.
         * @returns %TRUE if the item is a container.
         */
        is_container(): boolean;
        /**
         * Checks if the item is visible.
         *
         * This entails checking the item's own visibility setting, as well as those
         * of its ancestors.
         *
         * Note that the item may be scrolled off the screen and so may not
         * be actually visible to the user.
         * @returns %TRUE if the item is visible.
         */
        is_visible(): boolean;
        /**
         * Lowers an item in the stacking order.
         * @param below the item to lower @item below, or %NULL to lower @item to the  bottom of the stack.
         */
        lower(below?: CanvasItem | null): void;
        /**
         * Moves a child item to a new stack position within the container.
         * @param old_position the current position of the child item.
         * @param new_position the new position of the child item.
         */
        move_child(old_position: number, new_position: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It paints the item and all children if they intersect the given bounds.
         *
         * Note that the `scale` argument may be different to the current scale in the
         * #GooCanvasItem, e.g. when the canvas is being printed.
         * @param cr a cairo context.
         * @param bounds the bounds that need to be repainted, in device space.
         * @param scale the scale to use to determine whether an item should be painted.  See #GooCanvasItem:visibility-threshold.
         */
        paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;
        /**
         * Raises an item in the stacking order.
         * @param above the item to raise @item above, or %NULL to raise @item to the top  of the stack.
         */
        raise(above?: CanvasItem | null): void;
        /**
         * Removes an item from its parent. If the item is in a canvas it will be
         * removed.
         *
         * This would normally also result in the item being freed.
         */
        remove(): void;
        /**
         * Removes the child item at the given position.
         * @param child_num the position of the child item to remove.
         */
        remove_child(child_num: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items.
         *
         * It requests that an update of the item is scheduled. It will be performed
         * as soon as the application is idle, and before the canvas is redrawn.
         */
        request_update(): void;
        /**
         * Rotates the item's coordinate system by the given amount, about the given
         * origin.
         * @param degrees the clockwise angle of rotation.
         * @param cx the x coordinate of the origin of the rotation.
         * @param cy the y coordinate of the origin of the rotation.
         */
        rotate(degrees: number, cx: number, cy: number): void;
        /**
         * Scales the item's coordinate system by the given amounts.
         * @param sx the amount to scale the horizontal axis.
         * @param sy the amount to scale the vertical axis.
         */
        scale(sx: number, sy: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It sets the canvas of the item.
         * @param canvas a #GooCanvas
         */
        set_canvas(canvas: Canvas): void;
        /**
         * Sets a child property of `child`.
         * @param child a child #GooCanvasItem.
         * @param property_name the name of the child property to set.
         * @param value the value to set the property to.
         */
        set_child_property(child: CanvasItem, property_name: string, value: GObject.Value): void;
        /**
         * Notifies the item that it is static. Static items do not move or change
         * size when the canvas is scrolled or the scale changes.
         *
         * Container items such as #GooCanvasGroup should call this function when
         * children are added, to notify children whether they are static or not.
         * Containers should also pass on any changes in their own status to children.
         * @param is_static if the item is static.
         */
        set_is_static(is_static: boolean): void;
        /**
         * Sets the model of the given canvas item.
         * @param model a #GooCanvasItemModel.
         */
        set_model(model: CanvasItemModel): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items (specifically container items such as #GooCanvasGroup).
         * It sets the parent of the child item.
         *
         * <note><para>
         * This function cannot be used to add an item to a group
         * or to change the parent of an item.
         * To do that use the #GooCanvasItem:parent property.
         * </para></note>
         * @param parent the new parent item.
         */
        set_parent(parent: CanvasItem): void;
        /**
         * A convenience function to set the item's transformation matrix.
         * @param x the x coordinate of the origin of the item's coordinate space.
         * @param y the y coordinate of the origin of the item's coordinate space.
         * @param scale the scale of the item.
         * @param rotation the clockwise rotation of the item, in degrees.
         */
        set_simple_transform(x: number, y: number, scale: number, rotation: number): void;
        /**
         * Sets the item's style, by copying the properties from the given style.
         * @param style a style.
         */
        set_style(style: CanvasStyle): void;
        /**
         * Sets the transformation matrix of an item.
         * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
         */
        set_transform(transform?: cairo.Matrix | null): void;
        /**
         * Skews the item's coordinate system along the x axis by the given amount,
         * about the given origin.
         * @param degrees the skew angle.
         * @param cx the x coordinate of the origin of the skew transform.
         * @param cy the y coordinate of the origin of the skew transform.
         */
        skew_x(degrees: number, cx: number, cy: number): void;
        /**
         * Skews the item's coordinate system along the y axis by the given amount,
         * about the given origin.
         * @param degrees the skew angle.
         * @param cx the x coordinate of the origin of the skew transform.
         * @param cy the y coordinate of the origin of the skew transform.
         */
        skew_y(degrees: number, cx: number, cy: number): void;
        /**
         * Stops any current animation for the given item, leaving it at its current
         * position.
         */
        stop_animation(): void;
        /**
         * Translates the origin of the item's coordinate system by the given amounts.
         * @param tx the amount to move the origin in the horizontal direction.
         * @param ty the amount to move the origin in the vertical direction.
         */
        translate(tx: number, ty: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * Updates the item, if needed, and any children.
         * @param entire_tree if the entire subtree should be updated.
         * @param cr a cairo context.
         * @param bounds a #GooCanvasBounds to return the new bounds in.
         */
        update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;

        // Own virtual methods of GooCanvas-2.0.CanvasItem

        /**
         * Adds a child item to a container item at the given stack position.
         * @param child the item to add.
         * @param position the position of the item, or -1 to place it last (at the top of  the stacking order).
         */
        vfunc_add_child(child: CanvasItem, position: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It allocates an area to a child #GooCanvasItem.
         *
         * Note that the parent layout item will use a transform to move each of its
         * children for the layout, so there is no need for the child item to
         * reposition itself. It only needs to recalculate its device bounds.
         *
         * To help recalculate the item's device bounds, the `x_offset` and `y_offset`
         * of the child item's allocated position from its requested position are
         * provided. Simple items can just add these to their bounds.
         * @param cr a cairo context.
         * @param requested_area the area that the item originally requested, in the  parent's coordinate space.
         * @param allocated_area the area that the item has been allocated, in the parent's  coordinate space.
         * @param x_offset the x offset of the allocated area from the requested area in  the device coordinate space.
         * @param y_offset the y offset of the allocated area from the requested area in  the device coordinate space.
         */
        vfunc_allocate_area(
            cr: cairo.Context,
            requested_area: CanvasBounds,
            allocated_area: CanvasBounds,
            x_offset: number,
            y_offset: number,
        ): void;
        vfunc_animation_finished(stopped: boolean): void;
        vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean;
        vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean;
        vfunc_child_notify(pspec: GObject.ParamSpec): void;
        vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;
        vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean;
        vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean;
        /**
         * Gets the bounds of the item.
         *
         * Note that the bounds includes the entire fill and stroke extents of the
         * item, whether they are painted or not.
         */
        vfunc_get_bounds(): void;
        /**
         * Returns the #GooCanvas containing the given #GooCanvasItem.
         */
        vfunc_get_canvas(): Canvas;
        /**
         * Gets the child item at the given stack position.
         * @param child_num the position of a child in the container's stack.
         */
        vfunc_get_child(child_num: number): CanvasItem;
        vfunc_get_child_property(
            child: CanvasItem,
            property_id: number,
            value: GObject.Value,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * Returns %TRUE if the item is static. Static items do not move or change
         * size when the canvas is scrolled or the scale changes.
         */
        vfunc_get_is_static(): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It gets the items at the given point.
         * @param x the x coordinate of the point.
         * @param y the y coordinate of the point.
         * @param cr a cairo contect.
         * @param is_pointer_event %TRUE if the "pointer-events" properties of items should  be used to determine which parts of the item are tested.
         * @param parent_is_visible %TRUE if the parent item is visible (which  implies that all ancestors are also visible).
         * @param found_items the list of items found  so far.
         */
        vfunc_get_items_at(
            x: number,
            y: number,
            cr: cairo.Context,
            is_pointer_event: boolean,
            parent_is_visible: boolean,
            found_items: CanvasItem[],
        ): CanvasItem[];
        /**
         * Gets the model of the given canvas item.
         */
        vfunc_get_model(): CanvasItemModel;
        /**
         * Gets the number of children of the container.
         */
        vfunc_get_n_children(): number;
        /**
         * Gets the parent of the given item.
         */
        vfunc_get_parent(): CanvasItem;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested area of a child item.
         * @param cr a cairo context.
         * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space.
         */
        vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested area of a child item, assuming it is allocated the
         * given width. This is useful for text items whose requested height may change
         * depending on the allocated width.
         * @param cr a cairo context.
         * @param width the allocated width.
         * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space. If %FALSE is returned, this is undefined.
         */
        vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically layout items such as #GooCanvasTable.
         *
         * It gets the requested height of a child item, assuming it is allocated the
         * given width. This is useful for text items whose requested height may change
         * depending on the allocated width.
         * @param cr a cairo context.
         * @param width the width that the item may be allocated.
         */
        vfunc_get_requested_height(cr: cairo.Context, width: number): number;
        /**
         * Gets the item's style. If the item doesn't have its own style it will return
         * its parent's style.
         */
        vfunc_get_style(): CanvasStyle;
        /**
         * Gets the transformation matrix of an item.
         */
        vfunc_get_transform(): boolean;
        /**
         * Gets the transformation matrix of an item combined with any special
         * transform needed for the given child. These special transforms are used
         * by layout items such as #GooCanvasTable.
         * @param child a child of @item.
         */
        vfunc_get_transform_for_child(child: CanvasItem): boolean;
        vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean;
        /**
         * Checks if the item is visible.
         *
         * This entails checking the item's own visibility setting, as well as those
         * of its ancestors.
         *
         * Note that the item may be scrolled off the screen and so may not
         * be actually visible to the user.
         */
        vfunc_is_visible(): boolean;
        vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean;
        vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean;
        vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean;
        vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean;
        /**
         * Moves a child item to a new stack position within the container.
         * @param old_position the current position of the child item.
         * @param new_position the new position of the child item.
         */
        vfunc_move_child(old_position: number, new_position: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It paints the item and all children if they intersect the given bounds.
         *
         * Note that the `scale` argument may be different to the current scale in the
         * #GooCanvasItem, e.g. when the canvas is being printed.
         * @param cr a cairo context.
         * @param bounds the bounds that need to be repainted, in device space.
         * @param scale the scale to use to determine whether an item should be painted.  See #GooCanvasItem:visibility-threshold.
         */
        vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void;
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Removes the child item at the given position.
         * @param child_num the position of the child item to remove.
         */
        vfunc_remove_child(child_num: number): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items.
         *
         * It requests that an update of the item is scheduled. It will be performed
         * as soon as the application is idle, and before the canvas is redrawn.
         */
        vfunc_request_update(): void;
        vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * It sets the canvas of the item.
         * @param canvas a #GooCanvas
         */
        vfunc_set_canvas(canvas: Canvas): void;
        vfunc_set_child_property(
            child: CanvasItem,
            property_id: number,
            value: GObject.Value,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * Notifies the item that it is static. Static items do not move or change
         * size when the canvas is scrolled or the scale changes.
         *
         * Container items such as #GooCanvasGroup should call this function when
         * children are added, to notify children whether they are static or not.
         * Containers should also pass on any changes in their own status to children.
         * @param is_static if the item is static.
         */
        vfunc_set_is_static(is_static: boolean): void;
        /**
         * Sets the model of the given canvas item.
         * @param model a #GooCanvasItemModel.
         */
        vfunc_set_model(model: CanvasItemModel): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items (specifically container items such as #GooCanvasGroup).
         * It sets the parent of the child item.
         *
         * <note><para>
         * This function cannot be used to add an item to a group
         * or to change the parent of an item.
         * To do that use the #GooCanvasItem:parent property.
         * </para></note>
         * @param parent the new parent item.
         */
        vfunc_set_parent(parent: CanvasItem): void;
        /**
         * Sets the item's style, by copying the properties from the given style.
         * @param style a style.
         */
        vfunc_set_style(style: CanvasStyle): void;
        /**
         * Sets the transformation matrix of an item.
         * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
         */
        vfunc_set_transform(transform?: cairo.Matrix | null): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * items, specifically container items such as #GooCanvasGroup.
         *
         * Updates the item, if needed, and any children.
         * @param entire_tree if the entire subtree should be updated.
         * @param cr a cairo context.
         * @param bounds a #GooCanvasBounds to return the new bounds in.
         */
        vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void;
    }

    interface CanvasItemModel {
        // Own properties of GooCanvas-2.0.CanvasItemModel

        can_focus: boolean;
        canFocus: boolean;
        description: string;
        parent: CanvasItemModel;
        pointer_events: CanvasPointerEvents;
        pointerEvents: CanvasPointerEvents;
        title: string;
        tooltip: string;
        transform: CairoMatrix;
        visibility: CanvasItemVisibility;
        visibility_threshold: number;
        visibilityThreshold: number;

        // Owm methods of GooCanvas-2.0.CanvasItemModel

        /**
         * Adds a child at the given stack position.
         * @param child the child to add.
         * @param position the position of the child, or -1 to place it last (at the top of  the stacking order).
         */
        add_child(child: CanvasItemModel, position: number): void;
        /**
         * Animates a model from its current position to the given offsets, scale
         * and rotation.
         * @param x the final x coordinate.
         * @param y the final y coordinate.
         * @param scale the final scale.
         * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
         * @param absolute if the @x, @y, @scale and @degrees values are absolute, or  relative to the current transform. Note that absolute animations only work  if the model currently has a simple transform. If the model has a shear or  some other complicated transform it may result in strange animations.
         * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
         * @param step_time the time between each animation step, in milliseconds.
         * @param type specifies what happens when the animation finishes.
         */
        animate(
            x: number,
            y: number,
            scale: number,
            degrees: number,
            absolute: boolean,
            duration: number,
            step_time: number,
            type: CanvasAnimateType,
        ): void;
        /**
         * Attempts to find the given child with the container's stack.
         * @param child the child to find.
         * @returns the position of the given @child, or -1 if it isn't found.
         */
        find_child(child: CanvasItemModel): number;
        /**
         * Gets the child at the given stack position.
         * @param child_num the position of a child in the container's stack.
         * @returns the child at the given stack position, or %NULL  if @child_num is out of range.
         */
        get_child(child_num: number): CanvasItemModel;
        /**
         * Gets a child property of `child`.
         * @param child a child #GooCanvasItemModel.
         * @param property_name the name of the child property to get.
         * @param value a location to return the value.
         */
        get_child_property(child: CanvasItemModel, property_name: string, value: GObject.Value): void;
        /**
         * Gets the number of children of the container.
         * @returns the number of children.
         */
        get_n_children(): number;
        /**
         * Gets the parent of the given model.
         * @returns the parent model, or %NULL if the model has no parent.
         */
        get_parent(): CanvasItemModel;
        /**
         * This function can be used to get the position, scale and rotation of an
         * item model, providing that the model has a simple transformation matrix
         * (e.g. set with goo_canvas_item_model_set_simple_transform(), or using a
         * combination of simple translate, scale and rotate operations). If the model
         * has a complex transformation matrix the results will be incorrect.
         * @param x returns the x coordinate of the origin of the model's coordinate space.
         * @param y returns the y coordinate of the origin of the model's coordinate space.
         * @param scale returns the scale of the model.
         * @param rotation returns the clockwise rotation of the model, in degrees (0-360).
         * @returns %TRUE if a transform is set.
         */
        get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean;
        /**
         * Gets the model's style. If the model doesn't have its own style it will
         * return its parent's style.
         * @returns the model's style.
         */
        get_style(): CanvasStyle;
        /**
         * Gets the transformation matrix of an item model.
         * @param transform the place to store the transform.
         * @returns %TRUE if a transform is set.
         */
        get_transform(transform: cairo.Matrix): boolean;
        /**
         * Tests to see if the given item model is a container.
         * @returns %TRUE if the item model is a container.
         */
        is_container(): boolean;
        /**
         * Lowers a model in the stacking order.
         * @param below the item model to lower @model below, or %NULL to lower @model to the  bottom of the stack.
         */
        lower(below?: CanvasItemModel | null): void;
        /**
         * Moves a child to a new stack position.
         * @param old_position the current position of the child.
         * @param new_position the new position of the child.
         */
        move_child(old_position: number, new_position: number): void;
        /**
         * Raises a model in the stacking order.
         * @param above the item model to raise @model above, or %NULL to raise @model to the top  of the stack.
         */
        raise(above?: CanvasItemModel | null): void;
        /**
         * Removes a model from its parent. If the model is in a canvas it will be
         * removed.
         *
         * This would normally also result in the model being freed.
         */
        remove(): void;
        /**
         * Removes the child at the given position.
         * @param child_num the position of the child to remove.
         */
        remove_child(child_num: number): void;
        /**
         * Rotates the model's coordinate system by the given amount, about the given
         * origin.
         * @param degrees the clockwise angle of rotation.
         * @param cx the x coordinate of the origin of the rotation.
         * @param cy the y coordinate of the origin of the rotation.
         */
        rotate(degrees: number, cx: number, cy: number): void;
        /**
         * Scales the model's coordinate system by the given amounts.
         * @param sx the amount to scale the horizontal axis.
         * @param sy the amount to scale the vertical axis.
         */
        scale(sx: number, sy: number): void;
        /**
         * Sets a child property of `child`.
         * @param child a child #GooCanvasItemModel.
         * @param property_name the name of the child property to set.
         * @param value the value to set the property to.
         */
        set_child_property(child: CanvasItemModel, property_name: string, value: GObject.Value): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * item models (specifically container models such as #GooCanvasGroupModel).
         * It sets the parent of the child model.
         *
         * <note><para>
         * This function cannot be used to add a model to a group
         * or to change the parent of a model.
         * To do that use the #GooCanvasItemModel:parent property.
         * </para></note>
         * @param parent the new parent item model.
         */
        set_parent(parent: CanvasItemModel): void;
        /**
         * A convenience function to set the item model's transformation matrix.
         * @param x the x coordinate of the origin of the model's coordinate space.
         * @param y the y coordinate of the origin of the model's coordinate space.
         * @param scale the scale of the model.
         * @param rotation the clockwise rotation of the model, in degrees.
         */
        set_simple_transform(x: number, y: number, scale: number, rotation: number): void;
        /**
         * Sets the model's style, by copying the properties from the given style.
         * @param style a style.
         */
        set_style(style: CanvasStyle): void;
        /**
         * Sets the transformation matrix of an item model.
         * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
         */
        set_transform(transform?: cairo.Matrix | null): void;
        /**
         * Skews the model's coordinate system along the x axis by the given amount,
         * about the given origin.
         * @param degrees the skew angle.
         * @param cx the x coordinate of the origin of the skew transform.
         * @param cy the y coordinate of the origin of the skew transform.
         */
        skew_x(degrees: number, cx: number, cy: number): void;
        /**
         * Skews the model's coordinate system along the y axis by the given amount,
         * about the given origin.
         * @param degrees the skew angle.
         * @param cx the x coordinate of the origin of the skew transform.
         * @param cy the y coordinate of the origin of the skew transform.
         */
        skew_y(degrees: number, cx: number, cy: number): void;
        /**
         * Stops any current animation for the given model, leaving it at its current
         * position.
         */
        stop_animation(): void;
        /**
         * Translates the origin of the model's coordinate system by the given amounts.
         * @param tx the amount to move the origin in the horizontal direction.
         * @param ty the amount to move the origin in the vertical direction.
         */
        translate(tx: number, ty: number): void;

        // Own virtual methods of GooCanvas-2.0.CanvasItemModel

        /**
         * Adds a child at the given stack position.
         * @param child the child to add.
         * @param position the position of the child, or -1 to place it last (at the top of  the stacking order).
         */
        vfunc_add_child(child: CanvasItemModel, position: number): void;
        vfunc_animation_finished(stopped: boolean): void;
        vfunc_changed(recompute_bounds: boolean): void;
        vfunc_child_added(child_num: number): void;
        vfunc_child_moved(old_child_num: number, new_child_num: number): void;
        vfunc_child_notify(pspec: GObject.ParamSpec): void;
        vfunc_child_removed(child_num: number): void;
        /**
         * Gets the child at the given stack position.
         * @param child_num the position of a child in the container's stack.
         */
        vfunc_get_child(child_num: number): CanvasItemModel;
        vfunc_get_child_property(
            child: CanvasItemModel,
            property_id: number,
            value: GObject.Value,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * Gets the number of children of the container.
         */
        vfunc_get_n_children(): number;
        /**
         * Gets the parent of the given model.
         */
        vfunc_get_parent(): CanvasItemModel;
        /**
         * Gets the model's style. If the model doesn't have its own style it will
         * return its parent's style.
         */
        vfunc_get_style(): CanvasStyle;
        /**
         * Gets the transformation matrix of an item model.
         * @param transform the place to store the transform.
         */
        vfunc_get_transform(transform: cairo.Matrix): boolean;
        /**
         * Moves a child to a new stack position.
         * @param old_position the current position of the child.
         * @param new_position the new position of the child.
         */
        vfunc_move_child(old_position: number, new_position: number): void;
        /**
         * Removes the child at the given position.
         * @param child_num the position of the child to remove.
         */
        vfunc_remove_child(child_num: number): void;
        vfunc_set_child_property(
            child: CanvasItemModel,
            property_id: number,
            value: GObject.Value,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * This function is only intended to be used when implementing new canvas
         * item models (specifically container models such as #GooCanvasGroupModel).
         * It sets the parent of the child model.
         *
         * <note><para>
         * This function cannot be used to add a model to a group
         * or to change the parent of a model.
         * To do that use the #GooCanvasItemModel:parent property.
         * </para></note>
         * @param parent the new parent item model.
         */
        vfunc_set_parent(parent: CanvasItemModel): void;
        /**
         * Sets the model's style, by copying the properties from the given style.
         * @param style a style.
         */
        vfunc_set_style(style: CanvasStyle): void;
        /**
         * Sets the transformation matrix of an item model.
         * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
         */
        vfunc_set_transform(transform?: cairo.Matrix | null): void;
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

export default GooCanvas;
// END
