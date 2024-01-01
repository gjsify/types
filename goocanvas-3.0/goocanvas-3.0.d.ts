
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './goocanvas-3.0-ambient.d.ts';
import './goocanvas-3.0-import.d.ts';
/**
 * GooCanvas-3.0
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
/**
 * Specifies when an item receives pointer events such as mouse clicks.
 * @bitfield 
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
const CANVAS_POLYLINE_NUM_ARROW_POINTS: number
function cairo_matrix_copy(matrix: cairo.Matrix): cairo.Matrix
function cairo_matrix_free(matrix: cairo.Matrix): void
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It finds a child property of a canvas item class by name.
 * @param iclass a #GObjectClass
 * @param property_name the name of the child property to find
 * @returns the #GParamSpec of the  child property or %NULL if @class has no child property with that name.
 */
function canvas_item_class_find_child_property(iclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It installs a child property on a canvas item class.
 * @param iclass a #GObjectClass
 * @param property_id the id for the property
 * @param pspec the #GParamSpec for the property
 */
function canvas_item_class_install_child_property(iclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It returns all child properties of a canvas item class.
 * @param iclass a #GObjectClass
 * @returns a newly allocated  array of #GParamSpec*. The array must be freed with g_free().
 */
function canvas_item_class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
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
function canvas_item_model_class_find_child_property(mclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
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
function canvas_item_model_class_install_child_property(mclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
/**
 * This function is only intended to be used when implementing new canvas
 * item models, specifically layout container item models such as
 * #GooCanvasTableModel.
 * 
 * It returns all child properties of a canvas item class.
 * @param mclass a #GObjectClass
 * @returns   a newly allocated array of #GParamSpec*. The array must be freed with g_free().
 */
function canvas_item_model_class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
module CanvasItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-finished`
     */
    interface AnimationFinishedSignalCallback {
        ($obj: CanvasItem, stopped: boolean): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    interface ButtonPressEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton): boolean
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    interface ButtonReleaseEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton): boolean
    }

    /**
     * Signal callback interface for `child-notify`
     */
    interface ChildNotifySignalCallback {
        ($obj: CanvasItem, pspec: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `enter-notify-event`
     */
    interface EnterNotifyEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing): boolean
    }

    /**
     * Signal callback interface for `focus-in-event`
     */
    interface FocusInEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus): boolean
    }

    /**
     * Signal callback interface for `focus-out-event`
     */
    interface FocusOutEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus): boolean
    }

    /**
     * Signal callback interface for `grab-broken-event`
     */
    interface GrabBrokenEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventGrabBroken): boolean
    }

    /**
     * Signal callback interface for `key-press-event`
     */
    interface KeyPressEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey): boolean
    }

    /**
     * Signal callback interface for `key-release-event`
     */
    interface KeyReleaseEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey): boolean
    }

    /**
     * Signal callback interface for `leave-notify-event`
     */
    interface LeaveNotifyEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing): boolean
    }

    /**
     * Signal callback interface for `motion-notify-event`
     */
    interface MotionNotifyEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventMotion): boolean
    }

    /**
     * Signal callback interface for `query-tooltip`
     */
    interface QueryTooltipSignalCallback {
        ($obj: CanvasItem, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): boolean
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    interface ScrollEventSignalCallback {
        ($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventScroll): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItem

        can_focus?: boolean | null
        description?: string | null
        parent?: CanvasItem | null
        pointer_events?: CanvasPointerEvents | null
        title?: string | null
        /**
         * The tooltip to display for the item, or %NULL to display no tooltip.
         * 
         * Note that this property has no effect unless the
         * #GtkWidget:has-tooltip property is set to %TRUE on the #GooCanvas
         * containing this item.
         */
        tooltip?: string | null
        transform?: any | null
        visibility?: CanvasItemVisibility | null
        visibility_threshold?: number | null
        canFocus?: boolean | null
        pointerEvents?: CanvasPointerEvents | null
        visibilityThreshold?: number | null
    }

}

interface CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItem

    can_focus: boolean
    canFocus: boolean
    description: string | null
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    pointerEvents: CanvasPointerEvents
    title: string | null
    /**
     * The tooltip to display for the item, or %NULL to display no tooltip.
     * 
     * Note that this property has no effect unless the
     * #GtkWidget:has-tooltip property is set to %TRUE on the #GooCanvas
     * containing this item.
     */
    tooltip: string | null
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    visibilityThreshold: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItem

    /**
     * Adds a child item to a container item at the given stack position.
     * @param child the item to add.
     * @param position the position of the item, or -1 to place it last (at the top of  the stacking order).
     */
    add_child(child: CanvasItem, position: number): void
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
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    /**
     * Animates an item from its current position to the given offsets, scale
     * and rotation.
     * @param x the final x coordinate.
     * @param y the final y coordinate.
     * @param scale the final scale.
     * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
     * @param absolute if the `x,` `y,` `scale` and `degrees` values are absolute, or  relative to the current transform. Note that absolute animations only work  if the item currently has a simple transform. If the item has a shear or  some other complicated transform it may result in strange animations.
     * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
     * @param step_time the time between each animation step, in milliseconds.
     * @param type specifies what happens when the animation finishes.
     */
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It updates the canvas immediately, if an update is scheduled.
     * This ensures that all item bounds are up-to-date.
     */
    ensure_updated(): void
    /**
     * Attempts to find the given child item with the container's stack.
     * @param child the child item to find.
     * @returns the position of the given @child item, or -1 if it isn't found.
     */
    find_child(child: CanvasItem): number
    /**
     * Gets the bounds of the item.
     * 
     * Note that the bounds includes the entire fill and stroke extents of the
     * item, whether they are painted or not.
     */
    get_bounds(): /* bounds */ CanvasBounds
    /**
     * Returns the #GooCanvas containing the given #GooCanvasItem.
     * @returns the #GooCanvas.
     */
    get_canvas(): Canvas
    /**
     * Gets the child item at the given stack position.
     * @param child_num the position of a child in the container's stack.
     * @returns the child item at the given stack position, or  %NULL if @child_num is out of range.
     */
    get_child(child_num: number): CanvasItem
    /**
     * Gets a child property of `child`.
     * @param child a child #GooCanvasItem.
     * @param property_name the name of the child property to get.
     * @param value a location to return the value.
     */
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    /**
     * Returns %TRUE if the item is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * @returns %TRUE if the item is static.
     */
    get_is_static(): boolean
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
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    /**
     * Gets the model of the given canvas item.
     * @returns the item's model, or %NULL if it has no model.
     */
    get_model(): CanvasItemModel
    /**
     * Gets the number of children of the container.
     * @returns the number of children.
     */
    get_n_children(): number
    /**
     * Gets the parent of the given item.
     * @returns the parent item, or %NULL if the item has no parent.
     */
    get_parent(): CanvasItem
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout items such as #GooCanvasTable.
     * 
     * It gets the requested area of a child item.
     * @param cr a cairo context.
     * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space.
     * @returns %TRUE if the item should be allocated space.
     */
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
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
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
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
    get_requested_height(cr: cairo.Context, width: number): number
    /**
     * This function can be used to get the position, scale and rotation of an
     * item, providing that the item has a simple transformation matrix
     * (e.g. set with goo_canvas_item_set_simple_transform(), or using a
     * combination of simple translate, scale and rotate operations). If the item
     * has a complex transformation matrix the results will be incorrect.
     * @returns %TRUE if a transform is set.
     */
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    /**
     * Gets the item's style. If the item doesn't have its own style it will return
     * its parent's style.
     * @returns the item's style.
     */
    get_style(): CanvasStyle
    /**
     * Gets the transformation matrix of an item.
     * @returns %TRUE if a transform is set.
     */
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    /**
     * Gets the transformation matrix of an item combined with any special
     * transform needed for the given child. These special transforms are used
     * by layout items such as #GooCanvasTable.
     * @param child a child of `item`.
     * @returns %TRUE if a transform is set.
     */
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    /**
     * Tests to see if the given item is a container.
     * @returns %TRUE if the item is a container.
     */
    is_container(): boolean
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
    is_visible(): boolean
    /**
     * Lowers an item in the stacking order.
     * @param below the item to lower `item` below, or %NULL to lower `item` to the  bottom of the stack.
     */
    lower(below: CanvasItem | null): void
    /**
     * Moves a child item to a new stack position within the container.
     * @param old_position the current position of the child item.
     * @param new_position the new position of the child item.
     */
    move_child(old_position: number, new_position: number): void
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
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    /**
     * Raises an item in the stacking order.
     * @param above the item to raise `item` above, or %NULL to raise `item` to the top  of the stack.
     */
    raise(above: CanvasItem | null): void
    /**
     * Removes an item from its parent. If the item is in a canvas it will be
     * removed.
     * 
     * This would normally also result in the item being freed.
     */
    remove(): void
    /**
     * Removes the child item at the given position.
     * @param child_num the position of the child item to remove.
     */
    remove_child(child_num: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It requests that an update of the item is scheduled. It will be performed
     * as soon as the application is idle, and before the canvas is redrawn.
     */
    request_update(): void
    /**
     * Rotates the item's coordinate system by the given amount, about the given
     * origin.
     * @param degrees the clockwise angle of rotation.
     * @param cx the x coordinate of the origin of the rotation.
     * @param cy the y coordinate of the origin of the rotation.
     */
    rotate(degrees: number, cx: number, cy: number): void
    /**
     * Scales the item's coordinate system by the given amounts.
     * @param sx the amount to scale the horizontal axis.
     * @param sy the amount to scale the vertical axis.
     */
    scale(sx: number, sy: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It sets the canvas of the item.
     * @param canvas a #GooCanvas
     */
    set_canvas(canvas: Canvas): void
    /**
     * Sets a child property of `child`.
     * @param child a child #GooCanvasItem.
     * @param property_name the name of the child property to set.
     * @param value the value to set the property to.
     */
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    /**
     * Notifies the item that it is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * 
     * Container items such as #GooCanvasGroup should call this function when
     * children are added, to notify children whether they are static or not.
     * Containers should also pass on any changes in their own status to children.
     * @param is_static if the item is static.
     */
    set_is_static(is_static: boolean): void
    /**
     * Sets the model of the given canvas item.
     * @param model a #GooCanvasItemModel.
     */
    set_model(model: CanvasItemModel): void
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
    set_parent(parent: CanvasItem): void
    /**
     * A convenience function to set the item's transformation matrix.
     * @param x the x coordinate of the origin of the item's coordinate space.
     * @param y the y coordinate of the origin of the item's coordinate space.
     * @param scale the scale of the item.
     * @param rotation the clockwise rotation of the item, in degrees.
     */
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    /**
     * Sets the item's style, by copying the properties from the given style.
     * @param style a style.
     */
    set_style(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item.
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    set_transform(transform: cairo.Matrix | null): void
    /**
     * Skews the item's coordinate system along the x axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skew_x(degrees: number, cx: number, cy: number): void
    /**
     * Skews the item's coordinate system along the y axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skew_y(degrees: number, cx: number, cy: number): void
    /**
     * Stops any current animation for the given item, leaving it at its current
     * position.
     */
    stop_animation(): void
    /**
     * Translates the origin of the item's coordinate system by the given amounts.
     * @param tx the amount to move the origin in the horizontal direction.
     * @param ty the amount to move the origin in the vertical direction.
     */
    translate(tx: number, ty: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * Updates the item, if needed, and any children.
     * @param entire_tree if the entire subtree should be updated.
     * @param cr a cairo context.
     * @param bounds a #GooCanvasBounds to return the new bounds in.
     */
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.CanvasItem

    /**
     * Adds a child item to a container item at the given stack position.
     * @virtual 
     * @param child the item to add.
     * @param position the position of the item, or -1 to place it last (at the top of  the stacking order).
     */
    vfunc_add_child(child: CanvasItem, position: number): void
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
     * @virtual 
     * @param cr a cairo context.
     * @param requested_area the area that the item originally requested, in the  parent's coordinate space.
     * @param allocated_area the area that the item has been allocated, in the parent's  coordinate space.
     * @param x_offset the x offset of the allocated area from the requested area in  the device coordinate space.
     * @param y_offset the y offset of the allocated area from the requested area in  the device coordinate space.
     */
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    /**
     * Gets the bounds of the item.
     * 
     * Note that the bounds includes the entire fill and stroke extents of the
     * item, whether they are painted or not.
     * @virtual 
     */
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    /**
     * Returns the #GooCanvas containing the given #GooCanvasItem.
     * @virtual 
     * @returns the #GooCanvas.
     */
    vfunc_get_canvas(): Canvas
    /**
     * Gets the child item at the given stack position.
     * @virtual 
     * @param child_num the position of a child in the container's stack.
     * @returns the child item at the given stack position, or  %NULL if @child_num is out of range.
     */
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Returns %TRUE if the item is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * @virtual 
     * @returns %TRUE if the item is static.
     */
    vfunc_get_is_static(): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It gets the items at the given point.
     * @virtual 
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point.
     * @param cr a cairo contect.
     * @param is_pointer_event %TRUE if the "pointer-events" properties of items should  be used to determine which parts of the item are tested.
     * @param parent_is_visible %TRUE if the parent item is visible (which  implies that all ancestors are also visible).
     * @param found_items the list of items found  so far.
     * @returns the  @found_items list, with any more found items  added onto the start of the list, leaving the top item first.
     */
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    /**
     * Gets the model of the given canvas item.
     * @virtual 
     * @returns the item's model, or %NULL if it has no model.
     */
    vfunc_get_model(): CanvasItemModel
    /**
     * Gets the number of children of the container.
     * @virtual 
     * @returns the number of children.
     */
    vfunc_get_n_children(): number
    /**
     * Gets the parent of the given item.
     * @virtual 
     * @returns the parent item, or %NULL if the item has no parent.
     */
    vfunc_get_parent(): CanvasItem
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout items such as #GooCanvasTable.
     * 
     * It gets the requested area of a child item.
     * @virtual 
     * @param cr a cairo context.
     * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space.
     * @returns %TRUE if the item should be allocated space.
     */
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout items such as #GooCanvasTable.
     * 
     * It gets the requested area of a child item, assuming it is allocated the
     * given width. This is useful for text items whose requested height may change
     * depending on the allocated width.
     * @virtual 
     * @param cr a cairo context.
     * @param width the allocated width.
     * @param requested_area a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space. If %FALSE is returned, this is undefined.
     * @returns %TRUE if the item's requested area changes due to the new allocated width.
     */
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout items such as #GooCanvasTable.
     * 
     * It gets the requested height of a child item, assuming it is allocated the
     * given width. This is useful for text items whose requested height may change
     * depending on the allocated width.
     * @virtual 
     * @param cr a cairo context.
     * @param width the width that the item may be allocated.
     * @returns the requested height of the item, given the allocated width,  or %-1 if the item doesn't support this method or its height doesn't  change when allocated different widths.
     */
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    /**
     * Gets the item's style. If the item doesn't have its own style it will return
     * its parent's style.
     * @virtual 
     * @returns the item's style.
     */
    vfunc_get_style(): CanvasStyle
    /**
     * Gets the transformation matrix of an item.
     * @virtual 
     * @returns %TRUE if a transform is set.
     */
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    /**
     * Gets the transformation matrix of an item combined with any special
     * transform needed for the given child. These special transforms are used
     * by layout items such as #GooCanvasTable.
     * @virtual 
     * @param child a child of `item`.
     * @returns %TRUE if a transform is set.
     */
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    /**
     * Checks if the item is visible.
     * 
     * This entails checking the item's own visibility setting, as well as those
     * of its ancestors.
     * 
     * Note that the item may be scrolled off the screen and so may not
     * be actually visible to the user.
     * @virtual 
     * @returns %TRUE if the item is visible.
     */
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    /**
     * Moves a child item to a new stack position within the container.
     * @virtual 
     * @param old_position the current position of the child item.
     * @param new_position the new position of the child item.
     */
    vfunc_move_child(old_position: number, new_position: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It paints the item and all children if they intersect the given bounds.
     * 
     * Note that the `scale` argument may be different to the current scale in the
     * #GooCanvasItem, e.g. when the canvas is being printed.
     * @virtual 
     * @param cr a cairo context.
     * @param bounds the bounds that need to be repainted, in device space.
     * @param scale the scale to use to determine whether an item should be painted.  See #GooCanvasItem:visibility-threshold.
     */
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Removes the child item at the given position.
     * @virtual 
     * @param child_num the position of the child item to remove.
     */
    vfunc_remove_child(child_num: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It requests that an update of the item is scheduled. It will be performed
     * as soon as the application is idle, and before the canvas is redrawn.
     * @virtual 
     */
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It sets the canvas of the item.
     * @virtual 
     * @param canvas a #GooCanvas
     */
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Notifies the item that it is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * 
     * Container items such as #GooCanvasGroup should call this function when
     * children are added, to notify children whether they are static or not.
     * Containers should also pass on any changes in their own status to children.
     * @virtual 
     * @param is_static if the item is static.
     */
    vfunc_set_is_static(is_static: boolean): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    vfunc_set_model(model: CanvasItemModel): void
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
     * @virtual 
     * @param parent the new parent item.
     */
    vfunc_set_parent(parent: CanvasItem): void
    /**
     * Sets the item's style, by copying the properties from the given style.
     * @virtual 
     * @param style a style.
     */
    vfunc_set_style(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item.
     * @virtual 
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    vfunc_set_transform(transform: cairo.Matrix | null): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * Updates the item, if needed, and any children.
     * @virtual 
     * @param entire_tree if the entire subtree should be updated.
     * @param cr a cairo context.
     * @param bounds a #GooCanvasBounds to return the new bounds in.
     */
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void

    // Own signals of GooCanvas-3.0.GooCanvas.CanvasItem

    connect(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback): number
    connect_after(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback): number
    emit(sigName: "animation-finished", stopped: boolean, ...args: any[]): void
    connect(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback): number
    connect_after(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton, ...args: any[]): void
    connect(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback): number
    connect_after(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton, ...args: any[]): void
    connect(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback): number
    connect_after(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback): number
    connect_after(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing, ...args: any[]): void
    connect(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback): number
    connect_after(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus, ...args: any[]): void
    connect(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback): number
    connect_after(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus, ...args: any[]): void
    connect(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback): number
    connect_after(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken, ...args: any[]): void
    connect(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback): number
    connect_after(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey, ...args: any[]): void
    connect(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback): number
    connect_after(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey, ...args: any[]): void
    connect(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback): number
    connect_after(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing, ...args: any[]): void
    connect(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback): number
    connect_after(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion, ...args: any[]): void
    connect(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback): number
    connect_after(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip, ...args: any[]): void
    connect(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback): number
    connect_after(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll, ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItem

    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GooCanvasItem defines the interface that canvas items must implement,
 * and contains methods for operating on canvas items.
 * @interface 
 */
class CanvasItem extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItem

    static name: string
    static $gtype: GObject.GType<CanvasItem>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItem

    constructor(config?: CanvasItem.ConstructorProperties) 
    _init(config?: CanvasItem.ConstructorProperties): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It finds a child property of a canvas item class by name.
     * @param iclass a #GObjectClass
     * @param property_name the name of the child property to find
     * @returns the #GParamSpec of the  child property or %NULL if @class has no child property with that name.
     */
    static class_find_child_property(iclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It installs a child property on a canvas item class.
     * @param iclass a #GObjectClass
     * @param property_id the id for the property
     * @param pspec the #GParamSpec for the property
     */
    static class_install_child_property(iclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It returns all child properties of a canvas item class.
     * @param iclass a #GObjectClass
     * @returns a newly allocated  array of #GParamSpec*. The array must be freed with g_free().
     */
    static class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
}

module CanvasItemModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-finished`
     */
    interface AnimationFinishedSignalCallback {
        ($obj: CanvasItemModel, stopped: boolean): void
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: CanvasItemModel, recompute_bounds: boolean): void
    }

    /**
     * Signal callback interface for `child-added`
     */
    interface ChildAddedSignalCallback {
        ($obj: CanvasItemModel, child_num: number): void
    }

    /**
     * Signal callback interface for `child-moved`
     */
    interface ChildMovedSignalCallback {
        ($obj: CanvasItemModel, old_child_num: number, new_child_num: number): void
    }

    /**
     * Signal callback interface for `child-notify`
     */
    interface ChildNotifySignalCallback {
        ($obj: CanvasItemModel, pspec: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    interface ChildRemovedSignalCallback {
        ($obj: CanvasItemModel, child_num: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemModel

        can_focus?: boolean | null
        description?: string | null
        parent?: CanvasItemModel | null
        pointer_events?: CanvasPointerEvents | null
        title?: string | null
        tooltip?: string | null
        transform?: any | null
        visibility?: CanvasItemVisibility | null
        visibility_threshold?: number | null
        canFocus?: boolean | null
        pointerEvents?: CanvasPointerEvents | null
        visibilityThreshold?: number | null
    }

}

interface CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModel

    can_focus: boolean
    canFocus: boolean
    description: string | null
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    pointerEvents: CanvasPointerEvents
    title: string | null
    tooltip: string | null
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    visibilityThreshold: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItemModel

    /**
     * Adds a child at the given stack position.
     * @param child the child to add.
     * @param position the position of the child, or -1 to place it last (at the top of  the stacking order).
     */
    add_child(child: CanvasItemModel, position: number): void
    /**
     * Animates a model from its current position to the given offsets, scale
     * and rotation.
     * @param x the final x coordinate.
     * @param y the final y coordinate.
     * @param scale the final scale.
     * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
     * @param absolute if the `x,` `y,` `scale` and `degrees` values are absolute, or  relative to the current transform. Note that absolute animations only work  if the model currently has a simple transform. If the model has a shear or  some other complicated transform it may result in strange animations.
     * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
     * @param step_time the time between each animation step, in milliseconds.
     * @param type specifies what happens when the animation finishes.
     */
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    /**
     * Attempts to find the given child with the container's stack.
     * @param child the child to find.
     * @returns the position of the given @child, or -1 if it isn't found.
     */
    find_child(child: CanvasItemModel): number
    /**
     * Gets the child at the given stack position.
     * @param child_num the position of a child in the container's stack.
     * @returns the child at the given stack position, or %NULL  if @child_num is out of range.
     */
    get_child(child_num: number): CanvasItemModel
    /**
     * Gets a child property of `child`.
     * @param child a child #GooCanvasItemModel.
     * @param property_name the name of the child property to get.
     * @param value a location to return the value.
     */
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    /**
     * Gets the number of children of the container.
     * @returns the number of children.
     */
    get_n_children(): number
    /**
     * Gets the parent of the given model.
     * @returns the parent model, or %NULL if the model has no parent.
     */
    get_parent(): CanvasItemModel
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
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    /**
     * Gets the model's style. If the model doesn't have its own style it will
     * return its parent's style.
     * @returns the model's style.
     */
    get_style(): CanvasStyle
    /**
     * Gets the transformation matrix of an item model.
     * @param transform the place to store the transform.
     * @returns %TRUE if a transform is set.
     */
    get_transform(transform: cairo.Matrix): boolean
    /**
     * Tests to see if the given item model is a container.
     * @returns %TRUE if the item model is a container.
     */
    is_container(): boolean
    /**
     * Lowers a model in the stacking order.
     * @param below the item model to lower `model` below, or %NULL to lower `model` to the  bottom of the stack.
     */
    lower(below: CanvasItemModel | null): void
    /**
     * Moves a child to a new stack position.
     * @param old_position the current position of the child.
     * @param new_position the new position of the child.
     */
    move_child(old_position: number, new_position: number): void
    /**
     * Raises a model in the stacking order.
     * @param above the item model to raise `model` above, or %NULL to raise `model` to the top  of the stack.
     */
    raise(above: CanvasItemModel | null): void
    /**
     * Removes a model from its parent. If the model is in a canvas it will be
     * removed.
     * 
     * This would normally also result in the model being freed.
     */
    remove(): void
    /**
     * Removes the child at the given position.
     * @param child_num the position of the child to remove.
     */
    remove_child(child_num: number): void
    /**
     * Rotates the model's coordinate system by the given amount, about the given
     * origin.
     * @param degrees the clockwise angle of rotation.
     * @param cx the x coordinate of the origin of the rotation.
     * @param cy the y coordinate of the origin of the rotation.
     */
    rotate(degrees: number, cx: number, cy: number): void
    /**
     * Scales the model's coordinate system by the given amounts.
     * @param sx the amount to scale the horizontal axis.
     * @param sy the amount to scale the vertical axis.
     */
    scale(sx: number, sy: number): void
    /**
     * Sets a child property of `child`.
     * @param child a child #GooCanvasItemModel.
     * @param property_name the name of the child property to set.
     * @param value the value to set the property to.
     */
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
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
    set_parent(parent: CanvasItemModel): void
    /**
     * A convenience function to set the item model's transformation matrix.
     * @param x the x coordinate of the origin of the model's coordinate space.
     * @param y the y coordinate of the origin of the model's coordinate space.
     * @param scale the scale of the model.
     * @param rotation the clockwise rotation of the model, in degrees.
     */
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    /**
     * Sets the model's style, by copying the properties from the given style.
     * @param style a style.
     */
    set_style(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item model.
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    set_transform(transform: cairo.Matrix | null): void
    /**
     * Skews the model's coordinate system along the x axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skew_x(degrees: number, cx: number, cy: number): void
    /**
     * Skews the model's coordinate system along the y axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skew_y(degrees: number, cx: number, cy: number): void
    /**
     * Stops any current animation for the given model, leaving it at its current
     * position.
     */
    stop_animation(): void
    /**
     * Translates the origin of the model's coordinate system by the given amounts.
     * @param tx the amount to move the origin in the horizontal direction.
     * @param ty the amount to move the origin in the vertical direction.
     */
    translate(tx: number, ty: number): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModel

    /**
     * Adds a child at the given stack position.
     * @virtual 
     * @param child the child to add.
     * @param position the position of the child, or -1 to place it last (at the top of  the stacking order).
     */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    /**
     * Gets the child at the given stack position.
     * @virtual 
     * @param child_num the position of a child in the container's stack.
     * @returns the child at the given stack position, or %NULL  if @child_num is out of range.
     */
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Gets the number of children of the container.
     * @virtual 
     * @returns the number of children.
     */
    vfunc_get_n_children(): number
    /**
     * Gets the parent of the given model.
     * @virtual 
     * @returns the parent model, or %NULL if the model has no parent.
     */
    vfunc_get_parent(): CanvasItemModel
    /**
     * Gets the model's style. If the model doesn't have its own style it will
     * return its parent's style.
     * @virtual 
     * @returns the model's style.
     */
    vfunc_get_style(): CanvasStyle
    /**
     * Gets the transformation matrix of an item model.
     * @virtual 
     * @param transform the place to store the transform.
     * @returns %TRUE if a transform is set.
     */
    vfunc_get_transform(transform: cairo.Matrix): boolean
    /**
     * Moves a child to a new stack position.
     * @virtual 
     * @param old_position the current position of the child.
     * @param new_position the new position of the child.
     */
    vfunc_move_child(old_position: number, new_position: number): void
    /**
     * Removes the child at the given position.
     * @virtual 
     * @param child_num the position of the child to remove.
     */
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     * @virtual 
     * @param parent the new parent item model.
     */
    vfunc_set_parent(parent: CanvasItemModel): void
    /**
     * Sets the model's style, by copying the properties from the given style.
     * @virtual 
     * @param style a style.
     */
    vfunc_set_style(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item model.
     * @virtual 
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    vfunc_set_transform(transform: cairo.Matrix | null): void

    // Own signals of GooCanvas-3.0.GooCanvas.CanvasItemModel

    connect(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback): number
    connect_after(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback): number
    emit(sigName: "animation-finished", stopped: boolean, ...args: any[]): void
    connect(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback): number
    emit(sigName: "changed", recompute_bounds: boolean, ...args: any[]): void
    connect(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback): number
    emit(sigName: "child-added", child_num: number, ...args: any[]): void
    connect(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback): number
    connect_after(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number, ...args: any[]): void
    connect(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback): number
    connect_after(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", child_num: number, ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemModel

    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GooCanvasItemModel defines the interface that models for canvas items must
 * implement, and contains methods for operating on canvas item models.
 * 
 * <note><para>
 * 	The Model/View canvas feature may be removed in a future version of
 * 	GooCanvas.
 * </para></note>
 * @interface 
 */
class CanvasItemModel extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModel

    static name: string
    static $gtype: GObject.GType<CanvasItemModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemModel

    constructor(config?: CanvasItemModel.ConstructorProperties) 
    _init(config?: CanvasItemModel.ConstructorProperties): void
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
    static class_find_child_property(mclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
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
    static class_install_child_property(mclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     * 
     * It returns all child properties of a canvas item class.
     * @param mclass a #GObjectClass
     * @returns   a newly allocated array of #GParamSpec*. The array must be freed with g_free().
     */
    static class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
}

module Canvas {

    // Signal callback interfaces

    /**
     * Signal callback interface for `item-created`
     */
    interface ItemCreatedSignalCallback {
        ($obj: Canvas, item: CanvasItem, model: CanvasItemModel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.Canvas

        anchor?: CanvasAnchorType | null
        automatic_bounds?: boolean | null
        background_color?: string | null
        /**
         * The color to use for the canvas background, specified as a GdkRGBA.
         */
        background_color_gdk_rgba?: Gdk.RGBA | null
        background_color_rgb?: number | null
        bounds_from_origin?: boolean | null
        bounds_padding?: number | null
        clear_background?: boolean | null
        integer_layout?: boolean | null
        redraw_when_scrolled?: boolean | null
        resolution_x?: number | null
        resolution_y?: number | null
        scale?: number | null
        scale_x?: number | null
        scale_y?: number | null
        units?: Gtk.Unit | null
        x1?: number | null
        x2?: number | null
        y1?: number | null
        y2?: number | null
        automaticBounds?: boolean | null
        backgroundColor?: string | null
        /**
         * The color to use for the canvas background, specified as a GdkRGBA.
         */
        backgroundColorGdkRgba?: Gdk.RGBA | null
        backgroundColorRgb?: number | null
        boundsFromOrigin?: boolean | null
        boundsPadding?: number | null
        clearBackground?: boolean | null
        integerLayout?: boolean | null
        redrawWhenScrolled?: boolean | null
        resolutionX?: number | null
        resolutionY?: number | null
        scaleX?: number | null
        scaleY?: number | null
    }

}

interface Canvas extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GooCanvas-3.0.GooCanvas.Canvas

    automaticBounds: boolean
    background_color: string | null
    backgroundColor: string | null
    /**
     * The color to use for the canvas background, specified as a GdkRGBA.
     */
    background_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use for the canvas background, specified as a GdkRGBA.
     */
    backgroundColorGdkRgba: Gdk.RGBA
    background_color_rgb: number
    backgroundColorRgb: number
    boundsFromOrigin: boolean
    boundsPadding: number
    clearBackground: boolean
    integerLayout: boolean
    redrawWhenScrolled: boolean
    resolutionX: number
    resolutionY: number
    scaleX: number
    scaleY: number
    x1: number
    x2: number
    y1: number
    y2: number

    // Own fields of GooCanvas-3.0.GooCanvas.Canvas

    container: Gtk.Container
    root_item_model: CanvasItemModel
    root_item: CanvasItem
    bounds: CanvasBounds
    scale_x: number
    scale_y: number
    scale: number
    anchor: CanvasAnchorType
    idle_id: number
    need_update: number
    need_entire_subtree_update: number
    integer_layout: number
    automatic_bounds: number
    bounds_from_origin: number
    clear_background: number
    redraw_when_scrolled: number
    before_initial_draw: number
    hscroll_policy: any
    vscroll_policy: any
    bounds_padding: number
    pointer_item: CanvasItem
    pointer_grab_item: CanvasItem
    pointer_grab_initial_item: CanvasItem
    pointer_grab_button: number
    focused_item: CanvasItem
    keyboard_grab_item: CanvasItem
    crossing_event: Gdk.EventCrossing
    canvas_window: Gdk.Window
    canvas_x_offset: number
    canvas_y_offset: number
    hadjustment: Gtk.Adjustment
    vadjustment: Gtk.Adjustment
    freeze_count: number
    tmp_window: Gdk.Window
    model_to_item: GLib.HashTable
    units: Gtk.Unit
    resolution_x: number
    resolution_y: number
    device_to_pixels_x: number
    device_to_pixels_y: number
    widget_items: any[]

    // Owm methods of GooCanvas-3.0.GooCanvas.Canvas

    /**
     * Converts the given bounds in the canvas coordinate space to a bounding box
     * in item space. This is useful in the item paint() methods to convert the
     * bounds to be painted to the item's coordinate space.
     * @param item a #GooCanvasItem.
     * @param bounds the bounds in canvas coordinate space, to be converted.
     */
    convert_bounds_to_item_space(item: CanvasItem, bounds: CanvasBounds): void
    /**
     * Converts a coordinate from the given item's coordinate space to the canvas
     * coordinate space, applying all transformation matrices including the
     * item's own transformation matrix, if it has one.
     * @param item a #GooCanvasItem.
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convert_from_item_space(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
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
    convert_from_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from the canvas coordinate space to the given
     * item's coordinate space, applying all transformation matrices including the
     * item's own transformation matrix, if it has one.
     * @param item a #GooCanvasItem.
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convert_to_item_space(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
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
    convert_to_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from pixels to the canvas's units,
     * ignoring scaling and ignoring the coordinate space specified
     * in the call to goo_canvas_set_bounds().
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convert_units_from_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from the canvas's units to pixels,
     * ignoring scaling and ignoring the coordinate space specified
     * in the call to goo_canvas_set_bounds().
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convert_units_to_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Creates a cairo context, initialized with the default canvas settings.
     * Note that this context should not be used for drawing. It should only be
     * used for calculating bounds of items.
     * @returns a new cairo context. It should be freed with cairo_destroy().
     */
    create_cairo_context(): cairo.Context
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
    create_item(model: CanvasItemModel): CanvasItem
    /**
     * Gets the bounds of the canvas, in canvas units.
     * 
     * By default, canvas units are pixels, though the #GooCanvas:units property
     * can be used to change the units to points, inches or millimeters.
     */
    get_bounds(): [ /* left */ number, /* top */ number, /* right */ number, /* bottom */ number ]
    /**
     * Gets the default line width, which depends on the current units setting.
     * @returns the default line width of the canvas.
     */
    get_default_line_width(): number
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
    get_item(model: CanvasItemModel): CanvasItem
    /**
     * Gets the item at the given point.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point
     * @param is_pointer_event %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
     * @returns the item found at the given point, or %NULL if no  item was found.
     */
    get_item_at(x: number, y: number, is_pointer_event: boolean): CanvasItem
    /**
     * Gets all items at the given point.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point
     * @param is_pointer_event %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
     * @returns a list of  items found at the given point, with the top item at the start of the list,  or %NULL if no items were found. The list must be freed with g_list_free().
     */
    get_items_at(x: number, y: number, is_pointer_event: boolean): CanvasItem[]
    /**
     * Gets a list of items inside or outside a given area.
     * @param area the area to compare with each item's bounds.
     * @param inside_area %TRUE if items inside `area` should be returned, or %FALSE if  items outside `area` should be returned.
     * @param allow_overlaps %TRUE if items which are partly inside and partly outside  should be returned.
     * @param include_containers %TRUE if containers should be checked as well as  normal items.
     * @returns a list of  items in the given area, or %NULL if no items are found.  The list should be freed with g_list_free().
     */
    get_items_in_area(area: CanvasBounds, inside_area: boolean, allow_overlaps: boolean, include_containers: boolean): CanvasItem[]
    /**
     * Gets the root item of the canvas, usually a #GooCanvasGroup.
     * @returns the root item, or %NULL if there is no root item.
     */
    get_root_item(): CanvasItem
    /**
     * Gets the root item model of the canvas.
     * @returns the root item model, or %NULL if there is no root item model.
     */
    get_root_item_model(): CanvasItemModel
    /**
     * Gets the current scale of the canvas.
     * 
     * The scale specifies the magnification factor of the canvas, e.g. if an item
     * has a width of 2 pixels and the scale is set to 3, it will be displayed with
     * a width of 2 x 3 = 6 pixels.
     * @returns the current scale setting.
     */
    get_scale(): number
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
    get_static_root_item(): CanvasItem
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
    get_static_root_item_model(): CanvasItemModel
    /**
     * Grabs the keyboard focus for the given item.
     * @param item the item to grab the focus.
     */
    grab_focus(item: CanvasItem): void

    // Overloads of grab_focus

    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won’t work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    grab_focus(): void
    /**
     * Attempts to grab the keyboard for the given item.
     * @param item the item to grab the keyboard for.
     * @param owner_events %TRUE if keyboard events for this application will be  reported normally, or %FALSE if all keyboard events will be reported with  respect to the grab item.
     * @param time the time of the event that lead to the keyboard grab. This should  come from the relevant #GdkEvent.
     * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
     */
    keyboard_grab(item: CanvasItem, owner_events: boolean, time: number): Gdk.GrabStatus
    /**
     * Ungrabs the keyboard, if the given item has the keyboard grab.
     * @param item the item that has the keyboard grab.
     * @param time the time of the event that lead to the keyboard ungrab. This should  come from the relevant #GdkEvent.
     */
    keyboard_ungrab(item: CanvasItem, time: number): void
    /**
     * Attempts to grab the pointer for the given item.
     * @param item the item to grab the pointer for.
     * @param event_mask the events to receive during the grab.
     * @param cursor the cursor to display during the grab, or NULL.
     * @param time the time of the event that lead to the pointer grab. This should  come from the relevant #GdkEvent.
     * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
     */
    pointer_grab(item: CanvasItem, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    /**
     * Ungrabs the pointer, if the given item has the pointer grab.
     * @param item the item that has the grab.
     * @param time the time of the event that lead to the pointer ungrab. This should  come from the relevant #GdkEvent.
     */
    pointer_ungrab(item: CanvasItem, time: number): void
    /**
     * This function should only be used by #GooCanvasWidget and subclass
     * implementations.
     * 
     * It registers a widget item with the canvas, so that the canvas can do the
     * necessary actions to move and resize the widget as needed.
     * @param witem a #GooCanvasWidget item.
     */
    register_widget_item(witem: CanvasWidget): void
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
    render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void
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
    request_item_redraw(bounds: CanvasBounds, is_static: boolean): void
    /**
     * This function is only intended to be used by subclasses of #GooCanvas or
     * #GooCanvasItem implementations.
     * 
     * Requests that the given bounds be redrawn. The bounds must be in the canvas
     * coordinate space.
     * @param bounds the bounds to redraw, in device space.
     */
    request_redraw(bounds: CanvasBounds): void
    /**
     * This function is only intended to be used by subclasses of #GooCanvas or
     * #GooCanvasItem implementations.
     * 
     * It schedules an update of the #GooCanvas. This will be performed in
     * the idle loop, after all pending events have been handled, but before
     * the canvas has been repainted.
     */
    request_update(): void
    /**
     * Scrolls the canvas, placing the given point as close to the top-left of
     * the view as possible.
     * @param left the x coordinate to scroll to.
     * @param top the y coordinate to scroll to.
     */
    scroll_to(left: number, top: number): void
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
    set_bounds(left: number, top: number, right: number, bottom: number): void
    /**
     * Sets the root item of the canvas. Any existing canvas items are removed.
     * @param item the root canvas item.
     */
    set_root_item(item: CanvasItem): void
    /**
     * Sets the root item model of the canvas.
     * 
     * A hierarchy of canvas items will be created, corresponding to the hierarchy
     * of items in the model. Any current canvas items will be removed.
     * @param model a #GooCanvasItemModel.
     */
    set_root_item_model(model: CanvasItemModel): void
    /**
     * Sets the scale of the canvas.
     * 
     * The scale specifies the magnification factor of the canvas, e.g. if an item
     * has a width of 2 pixels and the scale is set to 3, it will be displayed with
     * a width of 2 x 3 = 6 pixels.
     * @param scale the new scale setting.
     */
    set_scale(scale: number): void
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
    set_static_root_item(item: CanvasItem): void
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
    set_static_root_item_model(model: CanvasItemModel): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It should be called in the finalize method of #GooCanvasItem
     * objects, to remove the canvas item from the #GooCanvas's hash table.
     * @param model the item model whose canvas item is being finalized.
     */
    unregister_item(model: CanvasItemModel): void
    /**
     * This function should only be used by #GooCanvasWidget and subclass
     * implementations.
     * 
     * It unregisters a widget item from the canvas, when the item is no longer in
     * the canvas.
     * @param witem a #GooCanvasWidget item.
     */
    unregister_widget_item(witem: CanvasWidget): void
    /**
     * This function is only intended to be used by subclasses of #GooCanvas or
     * #GooCanvasItem implementations.
     * 
     * It updates any items that need updating.
     * 
     * If the bounds of items change, they will request a redraw of the old and
     * new bounds so the display is updated correctly.
     */
    update(): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.Canvas

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
     * @virtual 
     * @param model the item model to create a canvas item for.
     * @returns a new canvas item.
     */
    vfunc_create_item(model: CanvasItemModel): CanvasItem
    vfunc_item_created(item: CanvasItem, model: CanvasItemModel): void

    // Own signals of GooCanvas-3.0.GooCanvas.Canvas

    connect(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback): number
    connect_after(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback): number
    emit(sigName: "item-created", item: CanvasItem, model: CanvasItemModel, ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.Canvas

    connect(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-bounds", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-rgb", ...args: any[]): void
    connect(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bounds-from-origin", ...args: any[]): void
    connect(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bounds-padding", ...args: any[]): void
    connect(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clear-background", ...args: any[]): void
    connect(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::integer-layout", ...args: any[]): void
    connect(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::redraw-when-scrolled", ...args: any[]): void
    connect(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-x", ...args: any[]): void
    connect(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-y", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x1", ...args: any[]): void
    connect(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x2", ...args: any[]): void
    connect(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y1", ...args: any[]): void
    connect(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y2", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class Canvas extends Gtk.Container {

    // Own properties of GooCanvas-3.0.GooCanvas.Canvas

    static name: string
    static $gtype: GObject.GType<Canvas>

    // Constructors of GooCanvas-3.0.GooCanvas.Canvas

    constructor(config?: Canvas.ConstructorProperties) 
    /**
     * Creates a new #GooCanvas widget.
     * 
     * A #GooCanvasGroup is created automatically as the root item of the canvas,
     * though this can be overriden with goo_canvas_set_root_item() or
     * goo_canvas_set_root_item_model().
     * @constructor 
     * @returns a new #GooCanvas widget.
     */
    constructor() 
    /**
     * Creates a new #GooCanvas widget.
     * 
     * A #GooCanvasGroup is created automatically as the root item of the canvas,
     * though this can be overriden with goo_canvas_set_root_item() or
     * goo_canvas_set_root_item_model().
     * @constructor 
     * @returns a new #GooCanvas widget.
     */
    static new(): Canvas
    _init(config?: Canvas.ConstructorProperties): void
    /**
     * Creates the path specified by the given #GooCanvasPathCommand array.
     * @param commands an array of  #GooCanvasPathCommand.
     * @param cr a cairo context.
     */
    static create_path(commands: CanvasPathCommand[], cr: cairo.Context): void
    static marshal_BOOLEAN__BOXED(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
    static marshal_BOOLEAN__DOUBLE_DOUBLE_BOOLEAN_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
    static marshal_BOOLEAN__OBJECT_BOXED(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
    static marshal_VOID__INT_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
    static marshal_VOID__OBJECT_OBJECT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
    /**
     * Parses the given SVG path specification string.
     * @param path_data the sequence of path commands, specified as a string using the  same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable  Vector Graphics (SVG)</ulink> path element.
     * @returns a #GArray of #GooCanvasPathCommand elements.
     */
    static parse_path_data(path_data: string): CanvasPathCommand[]
}

module CanvasAccessibleFactory {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
    }

}

interface CanvasAccessibleFactory {

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CanvasAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    static name: string
    static $gtype: GObject.GType<CanvasAccessibleFactory>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    constructor(config?: CanvasAccessibleFactory.ConstructorProperties) 
    _init(config?: CanvasAccessibleFactory.ConstructorProperties): void
}

module CanvasEllipse {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasEllipse

        center_x?: number | null
        center_y?: number | null
        height?: number | null
        radius_x?: number | null
        radius_y?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
        centerX?: number | null
        centerY?: number | null
        radiusX?: number | null
        radiusY?: number | null
    }

}

interface CanvasEllipse extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipse

    center_x: number
    centerX: number
    center_y: number
    centerY: number
    height: number
    radius_x: number
    radiusX: number
    radius_y: number
    radiusY: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipse

    parent_object: CanvasItemSimple
    ellipse_data: CanvasEllipseData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasEllipse

    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::center-x", ...args: any[]): void
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::center-y", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasEllipse extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipse

    static name: string
    static $gtype: GObject.GType<CanvasEllipse>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasEllipse

    constructor(config?: CanvasEllipse.ConstructorProperties) 
    _init(config?: CanvasEllipse.ConstructorProperties): void
}

module CanvasEllipseModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

        center_x?: number | null
        center_y?: number | null
        height?: number | null
        radius_x?: number | null
        radius_y?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
        centerX?: number | null
        centerY?: number | null
        radiusX?: number | null
        radiusY?: number | null
    }

}

interface CanvasEllipseModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    center_x: number
    centerX: number
    center_y: number
    centerY: number
    height: number
    radius_x: number
    radiusX: number
    radius_y: number
    radiusY: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    parent_object: any
    ellipse_data: CanvasEllipseData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::center-x", ...args: any[]): void
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::center-y", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasEllipseModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    static name: string
    static $gtype: GObject.GType<CanvasEllipseModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    constructor(config?: CanvasEllipseModel.ConstructorProperties) 
    _init(config?: CanvasEllipseModel.ConstructorProperties): void
}

module CanvasGrid {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGrid

        border_color?: string | null
        /**
         * The color to use for the border, specified as a GdkRGBA.
         */
        border_color_gdk_rgba?: Gdk.RGBA | null
        border_color_rgba?: number | null
        border_pattern?: any | null
        border_pixbuf?: GdkPixbuf.Pixbuf | null
        border_width?: number | null
        height?: number | null
        horz_grid_line_color?: string | null
        /**
         * The color to use for the horizontal grid lines, specified as a GdkRGBA.
         */
        horz_grid_line_color_gdk_rgba?: Gdk.RGBA | null
        horz_grid_line_color_rgba?: number | null
        horz_grid_line_pattern?: any | null
        horz_grid_line_pixbuf?: GdkPixbuf.Pixbuf | null
        horz_grid_line_width?: number | null
        show_horz_grid_lines?: boolean | null
        show_vert_grid_lines?: boolean | null
        vert_grid_line_color?: string | null
        /**
         * The color to use for the vertical grid lines, specified as a GdkRGBA.
         */
        vert_grid_line_color_gdk_rgba?: Gdk.RGBA | null
        vert_grid_line_color_rgba?: number | null
        vert_grid_line_pattern?: any | null
        vert_grid_line_pixbuf?: GdkPixbuf.Pixbuf | null
        vert_grid_line_width?: number | null
        vert_grid_lines_on_top?: boolean | null
        width?: number | null
        x?: number | null
        x_offset?: number | null
        x_step?: number | null
        y?: number | null
        y_offset?: number | null
        y_step?: number | null
        borderColor?: string | null
        /**
         * The color to use for the border, specified as a GdkRGBA.
         */
        borderColorGdkRgba?: Gdk.RGBA | null
        borderColorRgba?: number | null
        borderPattern?: any | null
        borderPixbuf?: GdkPixbuf.Pixbuf | null
        borderWidth?: number | null
        horzGridLineColor?: string | null
        /**
         * The color to use for the horizontal grid lines, specified as a GdkRGBA.
         */
        horzGridLineColorGdkRgba?: Gdk.RGBA | null
        horzGridLineColorRgba?: number | null
        horzGridLinePattern?: any | null
        horzGridLinePixbuf?: GdkPixbuf.Pixbuf | null
        horzGridLineWidth?: number | null
        showHorzGridLines?: boolean | null
        showVertGridLines?: boolean | null
        vertGridLineColor?: string | null
        /**
         * The color to use for the vertical grid lines, specified as a GdkRGBA.
         */
        vertGridLineColorGdkRgba?: Gdk.RGBA | null
        vertGridLineColorRgba?: number | null
        vertGridLinePattern?: any | null
        vertGridLinePixbuf?: GdkPixbuf.Pixbuf | null
        vertGridLineWidth?: number | null
        vertGridLinesOnTop?: boolean | null
        xOffset?: number | null
        xStep?: number | null
        yOffset?: number | null
        yStep?: number | null
    }

}

interface CanvasGrid extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGrid

    border_color: string | null
    borderColor: string | null
    /**
     * The color to use for the border, specified as a GdkRGBA.
     */
    border_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use for the border, specified as a GdkRGBA.
     */
    borderColorGdkRgba: Gdk.RGBA
    border_color_rgba: number
    borderColorRgba: number
    border_pattern: any
    borderPattern: any
    border_pixbuf: GdkPixbuf.Pixbuf
    borderPixbuf: GdkPixbuf.Pixbuf
    border_width: number
    borderWidth: number
    height: number
    horz_grid_line_color: string | null
    horzGridLineColor: string | null
    /**
     * The color to use for the horizontal grid lines, specified as a GdkRGBA.
     */
    horz_grid_line_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use for the horizontal grid lines, specified as a GdkRGBA.
     */
    horzGridLineColorGdkRgba: Gdk.RGBA
    horz_grid_line_color_rgba: number
    horzGridLineColorRgba: number
    horz_grid_line_pattern: any
    horzGridLinePattern: any
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horz_grid_line_width: number
    horzGridLineWidth: number
    show_horz_grid_lines: boolean
    showHorzGridLines: boolean
    show_vert_grid_lines: boolean
    showVertGridLines: boolean
    vert_grid_line_color: string | null
    vertGridLineColor: string | null
    /**
     * The color to use for the vertical grid lines, specified as a GdkRGBA.
     */
    vert_grid_line_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use for the vertical grid lines, specified as a GdkRGBA.
     */
    vertGridLineColorGdkRgba: Gdk.RGBA
    vert_grid_line_color_rgba: number
    vertGridLineColorRgba: number
    vert_grid_line_pattern: any
    vertGridLinePattern: any
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vert_grid_line_width: number
    vertGridLineWidth: number
    vert_grid_lines_on_top: boolean
    vertGridLinesOnTop: boolean
    width: number
    x: number
    x_offset: number
    xOffset: number
    x_step: number
    xStep: number
    y: number
    y_offset: number
    yOffset: number
    y_step: number
    yStep: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGrid

    parent_object: CanvasItemSimple
    grid_data: CanvasGridData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGrid

    connect(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color", ...args: any[]): void
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color-rgba", ...args: any[]): void
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-pattern", ...args: any[]): void
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-pixbuf", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-horz-grid-lines", ...args: any[]): void
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-vert-grid-lines", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-lines-on-top", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-offset", ...args: any[]): void
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-step", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-offset", ...args: any[]): void
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-step", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasGrid extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGrid

    static name: string
    static $gtype: GObject.GType<CanvasGrid>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasGrid

    constructor(config?: CanvasGrid.ConstructorProperties) 
    _init(config?: CanvasGrid.ConstructorProperties): void
}

module CanvasGridModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGridModel

        border_color?: string | null
        border_color_gdk_rgba?: Gdk.RGBA | null
        border_color_rgba?: number | null
        border_pattern?: any | null
        border_pixbuf?: GdkPixbuf.Pixbuf | null
        border_width?: number | null
        height?: number | null
        horz_grid_line_color?: string | null
        horz_grid_line_color_gdk_rgba?: Gdk.RGBA | null
        horz_grid_line_color_rgba?: number | null
        horz_grid_line_pattern?: any | null
        horz_grid_line_pixbuf?: GdkPixbuf.Pixbuf | null
        horz_grid_line_width?: number | null
        show_horz_grid_lines?: boolean | null
        show_vert_grid_lines?: boolean | null
        vert_grid_line_color?: string | null
        vert_grid_line_color_gdk_rgba?: Gdk.RGBA | null
        vert_grid_line_color_rgba?: number | null
        vert_grid_line_pattern?: any | null
        vert_grid_line_pixbuf?: GdkPixbuf.Pixbuf | null
        vert_grid_line_width?: number | null
        vert_grid_lines_on_top?: boolean | null
        width?: number | null
        x?: number | null
        x_offset?: number | null
        x_step?: number | null
        y?: number | null
        y_offset?: number | null
        y_step?: number | null
        borderColor?: string | null
        borderColorGdkRgba?: Gdk.RGBA | null
        borderColorRgba?: number | null
        borderPattern?: any | null
        borderPixbuf?: GdkPixbuf.Pixbuf | null
        borderWidth?: number | null
        horzGridLineColor?: string | null
        horzGridLineColorGdkRgba?: Gdk.RGBA | null
        horzGridLineColorRgba?: number | null
        horzGridLinePattern?: any | null
        horzGridLinePixbuf?: GdkPixbuf.Pixbuf | null
        horzGridLineWidth?: number | null
        showHorzGridLines?: boolean | null
        showVertGridLines?: boolean | null
        vertGridLineColor?: string | null
        vertGridLineColorGdkRgba?: Gdk.RGBA | null
        vertGridLineColorRgba?: number | null
        vertGridLinePattern?: any | null
        vertGridLinePixbuf?: GdkPixbuf.Pixbuf | null
        vertGridLineWidth?: number | null
        vertGridLinesOnTop?: boolean | null
        xOffset?: number | null
        xStep?: number | null
        yOffset?: number | null
        yStep?: number | null
    }

}

interface CanvasGridModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridModel

    border_color: string | null
    borderColor: string | null
    border_color_gdk_rgba: Gdk.RGBA
    borderColorGdkRgba: Gdk.RGBA
    border_color_rgba: number
    borderColorRgba: number
    border_pattern: any
    borderPattern: any
    border_pixbuf: GdkPixbuf.Pixbuf
    borderPixbuf: GdkPixbuf.Pixbuf
    border_width: number
    borderWidth: number
    height: number
    horz_grid_line_color: string | null
    horzGridLineColor: string | null
    horz_grid_line_color_gdk_rgba: Gdk.RGBA
    horzGridLineColorGdkRgba: Gdk.RGBA
    horz_grid_line_color_rgba: number
    horzGridLineColorRgba: number
    horz_grid_line_pattern: any
    horzGridLinePattern: any
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horz_grid_line_width: number
    horzGridLineWidth: number
    show_horz_grid_lines: boolean
    showHorzGridLines: boolean
    show_vert_grid_lines: boolean
    showVertGridLines: boolean
    vert_grid_line_color: string | null
    vertGridLineColor: string | null
    vert_grid_line_color_gdk_rgba: Gdk.RGBA
    vertGridLineColorGdkRgba: Gdk.RGBA
    vert_grid_line_color_rgba: number
    vertGridLineColorRgba: number
    vert_grid_line_pattern: any
    vertGridLinePattern: any
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vert_grid_line_width: number
    vertGridLineWidth: number
    vert_grid_lines_on_top: boolean
    vertGridLinesOnTop: boolean
    width: number
    x: number
    x_offset: number
    xOffset: number
    x_step: number
    xStep: number
    y: number
    y_offset: number
    yOffset: number
    y_step: number
    yStep: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridModel

    parent_object: any
    grid_data: CanvasGridData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGridModel

    connect(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color", ...args: any[]): void
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-color-rgba", ...args: any[]): void
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-pattern", ...args: any[]): void
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-pixbuf", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-horz-grid-lines", ...args: any[]): void
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-vert-grid-lines", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-lines-on-top", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-offset", ...args: any[]): void
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-step", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-offset", ...args: any[]): void
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-step", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasGridModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridModel

    static name: string
    static $gtype: GObject.GType<CanvasGridModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasGridModel

    constructor(config?: CanvasGridModel.ConstructorProperties) 
    _init(config?: CanvasGridModel.ConstructorProperties): void
}

module CanvasGroup {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGroup

        height?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasGroup extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroup

    height: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroup

    parent_object: CanvasItemSimple
    items: any[]

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGroup

    connect(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasGroup extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroup

    static name: string
    static $gtype: GObject.GType<CanvasGroup>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasGroup

    constructor(config?: CanvasGroup.ConstructorProperties) 
    _init(config?: CanvasGroup.ConstructorProperties): void
}

module CanvasGroupModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGroupModel

        height?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasGroupModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    height: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    parent_object: any
    children: any[]

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    connect(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasGroupModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    static name: string
    static $gtype: GObject.GType<CanvasGroupModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    constructor(config?: CanvasGroupModel.ConstructorProperties) 
    _init(config?: CanvasGroupModel.ConstructorProperties): void
}

module CanvasImage {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasImage

        alpha?: number | null
        height?: number | null
        pattern?: any | null
        pixbuf?: GdkPixbuf.Pixbuf | null
        scale_to_fit?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
        scaleToFit?: boolean | null
    }

}

interface CanvasImage extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImage

    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scale_to_fit: boolean
    scaleToFit: boolean
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImage

    parent_object: CanvasItemSimple
    image_data: CanvasImageData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasImage

    connect(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alpha", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-to-fit", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasImage extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImage

    static name: string
    static $gtype: GObject.GType<CanvasImage>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasImage

    constructor(config?: CanvasImage.ConstructorProperties) 
    _init(config?: CanvasImage.ConstructorProperties): void
}

module CanvasImageModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasImageModel

        alpha?: number | null
        height?: number | null
        pattern?: any | null
        pixbuf?: GdkPixbuf.Pixbuf | null
        scale_to_fit?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
        scaleToFit?: boolean | null
    }

}

interface CanvasImageModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageModel

    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scale_to_fit: boolean
    scaleToFit: boolean
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageModel

    parent_object: any
    image_data: CanvasImageData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasImageModel

    connect(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alpha", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-to-fit", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasImageModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageModel

    static name: string
    static $gtype: GObject.GType<CanvasImageModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasImageModel

    constructor(config?: CanvasImageModel.ConstructorProperties) 
    _init(config?: CanvasImageModel.ConstructorProperties): void
}

module CanvasItemAccessibleFactory {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
    }

}

interface CanvasItemAccessibleFactory {

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CanvasItemAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    static name: string
    static $gtype: GObject.GType<CanvasItemAccessibleFactory>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    constructor(config?: CanvasItemAccessibleFactory.ConstructorProperties) 
    _init(config?: CanvasItemAccessibleFactory.ConstructorProperties): void
}

module CanvasItemModelSimple {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

        antialias?: CairoAntialias | null
        clip_fill_rule?: CairoFillRule | null
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clip_path?: string | null
        fill_color?: string | null
        fill_color_gdk_rgba?: Gdk.RGBA | null
        fill_color_rgba?: number | null
        fill_pattern?: any | null
        fill_pixbuf?: GdkPixbuf.Pixbuf | null
        fill_rule?: CairoFillRule | null
        font?: string | null
        font_desc?: Pango.FontDescription | null
        hint_metrics?: CairoHintMetrics | null
        line_cap?: CairoLineCap | null
        line_dash?: CanvasLineDash | null
        line_join?: CairoLineJoin | null
        line_join_miter_limit?: number | null
        line_width?: number | null
        operator?: CairoOperator | null
        stroke_color?: string | null
        stroke_color_gdk_rgba?: Gdk.RGBA | null
        stroke_color_rgba?: number | null
        stroke_pattern?: any | null
        stroke_pixbuf?: GdkPixbuf.Pixbuf | null
        clipFillRule?: CairoFillRule | null
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clipPath?: string | null
        fillColor?: string | null
        fillColorGdkRgba?: Gdk.RGBA | null
        fillColorRgba?: number | null
        fillPattern?: any | null
        fillPixbuf?: GdkPixbuf.Pixbuf | null
        fillRule?: CairoFillRule | null
        fontDesc?: Pango.FontDescription | null
        hintMetrics?: CairoHintMetrics | null
        lineCap?: CairoLineCap | null
        lineDash?: CanvasLineDash | null
        lineJoin?: CairoLineJoin | null
        lineJoinMiterLimit?: number | null
        lineWidth?: number | null
        strokeColor?: string | null
        strokeColorGdkRgba?: Gdk.RGBA | null
        strokeColorRgba?: number | null
        strokePattern?: any | null
        strokePixbuf?: GdkPixbuf.Pixbuf | null
    }

}

interface CanvasItemModelSimple extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clipFillRule: CairoFillRule
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clip_path: string | null
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clipPath: string | null
    fill_color: string | null
    fillColor: string | null
    fill_color_gdk_rgba: Gdk.RGBA
    fillColorGdkRgba: Gdk.RGBA
    fill_color_rgba: number
    fillColorRgba: number
    fill_pattern: any
    fillPattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fillPixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    fillRule: CairoFillRule
    font: string | null
    font_desc: Pango.FontDescription
    fontDesc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    hintMetrics: CairoHintMetrics
    line_cap: CairoLineCap
    lineCap: CairoLineCap
    line_dash: CanvasLineDash
    lineDash: CanvasLineDash
    line_join: CairoLineJoin
    lineJoin: CairoLineJoin
    line_join_miter_limit: number
    lineJoinMiterLimit: number
    line_width: number
    lineWidth: number
    operator: CairoOperator
    stroke_color: string | null
    strokeColor: string | null
    stroke_color_gdk_rgba: Gdk.RGBA
    strokeColorGdkRgba: Gdk.RGBA
    stroke_color_rgba: number
    strokeColorRgba: number
    stroke_pattern: any
    strokePattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    strokePixbuf: GdkPixbuf.Pixbuf

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    parent_object: GObject.Object
    /**
     * the parent model.
     * @field 
     */
    parent: CanvasItemModel
    /**
     * data used by the canvas item for viewing the model.
     * @field 
     */
    simple_data: CanvasItemSimpleData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasItemModelSimple extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    static name: string
    static $gtype: GObject.GType<CanvasItemModelSimple>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    constructor(config?: CanvasItemModelSimple.ConstructorProperties) 
    _init(config?: CanvasItemModelSimple.ConstructorProperties): void
}

module CanvasItemSimple {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple

        antialias?: CairoAntialias | null
        clip_fill_rule?: CairoFillRule | null
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clip_path?: string | null
        fill_color?: string | null
        /**
         * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
         */
        fill_color_gdk_rgba?: Gdk.RGBA | null
        fill_color_rgba?: number | null
        fill_pattern?: any | null
        fill_pixbuf?: GdkPixbuf.Pixbuf | null
        fill_rule?: CairoFillRule | null
        font?: string | null
        font_desc?: Pango.FontDescription | null
        hint_metrics?: CairoHintMetrics | null
        line_cap?: CairoLineCap | null
        line_dash?: CanvasLineDash | null
        line_join?: CairoLineJoin | null
        line_join_miter_limit?: number | null
        line_width?: number | null
        operator?: CairoOperator | null
        stroke_color?: string | null
        /**
         * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
         */
        stroke_color_gdk_rgba?: Gdk.RGBA | null
        stroke_color_rgba?: number | null
        stroke_pattern?: any | null
        stroke_pixbuf?: GdkPixbuf.Pixbuf | null
        clipFillRule?: CairoFillRule | null
        /**
         * The sequence of commands describing the clip path of the item, specified
         * as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        clipPath?: string | null
        fillColor?: string | null
        /**
         * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
         */
        fillColorGdkRgba?: Gdk.RGBA | null
        fillColorRgba?: number | null
        fillPattern?: any | null
        fillPixbuf?: GdkPixbuf.Pixbuf | null
        fillRule?: CairoFillRule | null
        fontDesc?: Pango.FontDescription | null
        hintMetrics?: CairoHintMetrics | null
        lineCap?: CairoLineCap | null
        lineDash?: CanvasLineDash | null
        lineJoin?: CairoLineJoin | null
        lineJoinMiterLimit?: number | null
        lineWidth?: number | null
        strokeColor?: string | null
        /**
         * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
         */
        strokeColorGdkRgba?: Gdk.RGBA | null
        strokeColorRgba?: number | null
        strokePattern?: any | null
        strokePixbuf?: GdkPixbuf.Pixbuf | null
    }

}

interface CanvasItemSimple extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clipFillRule: CairoFillRule
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clip_path: string | null
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clipPath: string | null
    fill_color: string | null
    fillColor: string | null
    /**
     * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
     */
    fill_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
     */
    fillColorGdkRgba: Gdk.RGBA
    fill_color_rgba: number
    fillColorRgba: number
    fill_pattern: any
    fillPattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fillPixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    fillRule: CairoFillRule
    font: string | null
    font_desc: Pango.FontDescription
    fontDesc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    hintMetrics: CairoHintMetrics
    line_cap: CairoLineCap
    lineCap: CairoLineCap
    line_dash: CanvasLineDash
    lineDash: CanvasLineDash
    line_join: CairoLineJoin
    lineJoin: CairoLineJoin
    line_join_miter_limit: number
    lineJoinMiterLimit: number
    line_width: number
    lineWidth: number
    operator: CairoOperator
    stroke_color: string | null
    strokeColor: string | null
    /**
     * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
     */
    stroke_color_gdk_rgba: Gdk.RGBA
    /**
     * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
     */
    strokeColorGdkRgba: Gdk.RGBA
    stroke_color_rgba: number
    strokeColorRgba: number
    stroke_pattern: any
    strokePattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    strokePixbuf: GdkPixbuf.Pixbuf

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    /**
     * the canvas.
     * @field 
     */
    canvas: Canvas
    /**
     * the parent item.
     * @field 
     */
    parent: CanvasItem
    /**
     * the item's model, if it has one.
     * @field 
     */
    model: CanvasItemModelSimple
    /**
     * data that is common to both the model and view classes. If
     *  the canvas item has a model, this will point to the model's
     *  #GooCanvasItemSimpleData, otherwise the canvas item will have its own
     *  #GooCanvasItemSimpleData.
     * @field 
     */
    simple_data: CanvasItemSimpleData
    /**
     * the bounds of the item, in device space.
     * @field 
     */
    bounds: CanvasBounds
    /**
     * if the item needs to recompute its bounds and redraw.
     * @field 
     */
    need_update: number
    /**
     * if all descendants need to be updated.
     * @field 
     */
    need_entire_subtree_update: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple.
     * 
     * It is used as a callback for the "changed" signal of the item models.
     * It requests an update or redraw of the item as appropriate.
     * @param recompute_bounds if the item's bounds need to be recomputed.
     */
    changed(recompute_bounds: boolean): void
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
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple,
     * typically in their update() or get_requested_area() methods.
     * 
     * It ensures that the item's style is setup correctly. If the item has its
     * own #GooCanvasStyle it makes sure the parent is set correctly. If it
     * doesn't have its own style it uses the parent item's style.
     */
    check_style(): void
    /**
     * Gets the item's line width.
     * @returns the item's line width.
     */
    get_line_width(): number
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
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple.
     * 
     * It paints the current path, using the item's style settings.
     * @param cr a cairo context.
     */
    paint_path(cr: cairo.Context): void
    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    set_model(model: CanvasItemModel): void
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple,
     * typically in their update() or get_requested_area() methods.
     * 
     * It converts the item's bounds to a bounding box in the canvas (device)
     * coordinate space.
     * @param cr a cairo context.
     * @param bounds the bounds of the item, in the item's coordinate space.
     */
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
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
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasItemSimple extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    static name: string
    static $gtype: GObject.GType<CanvasItemSimple>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    constructor(config?: CanvasItemSimple.ConstructorProperties) 
    _init(config?: CanvasItemSimple.ConstructorProperties): void
}

module CanvasPath {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPath

        /**
         * The sequence of path commands, specified as a string using the same syntax
         * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
         * Graphics (SVG)</ulink> path element.
         */
        data?: string | null
        height?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasPath extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPath

    /**
     * The sequence of path commands, specified as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    data: string | null
    height: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPath

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    path_data: CanvasPathData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPath

    connect(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasPath extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPath

    static name: string
    static $gtype: GObject.GType<CanvasPath>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPath

    constructor(config?: CanvasPath.ConstructorProperties) 
    _init(config?: CanvasPath.ConstructorProperties): void
}

module CanvasPathModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPathModel

        data?: string | null
        height?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasPathModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathModel

    data: string | null
    height: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathModel

    parent_object: any
    path_data: CanvasPathData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPathModel

    connect(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasPathModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathModel

    static name: string
    static $gtype: GObject.GType<CanvasPathModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPathModel

    constructor(config?: CanvasPathModel.ConstructorProperties) 
    _init(config?: CanvasPathModel.ConstructorProperties): void
}

module CanvasPolyline {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPolyline

        arrow_length?: number | null
        arrow_tip_length?: number | null
        arrow_width?: number | null
        close_path?: boolean | null
        end_arrow?: boolean | null
        height?: number | null
        points?: CanvasPoints | null
        start_arrow?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
        arrowLength?: number | null
        arrowTipLength?: number | null
        arrowWidth?: number | null
        closePath?: boolean | null
        endArrow?: boolean | null
        startArrow?: boolean | null
    }

}

interface CanvasPolyline extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolyline

    arrow_length: number
    arrowLength: number
    arrow_tip_length: number
    arrowTipLength: number
    arrow_width: number
    arrowWidth: number
    close_path: boolean
    closePath: boolean
    end_arrow: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    start_arrow: boolean
    startArrow: boolean
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolyline

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    polyline_data: CanvasPolylineData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPolyline

    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-length", ...args: any[]): void
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-tip-length", ...args: any[]): void
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-width", ...args: any[]): void
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-path", ...args: any[]): void
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-arrow", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::points", ...args: any[]): void
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-arrow", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasPolyline extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolyline

    static name: string
    static $gtype: GObject.GType<CanvasPolyline>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPolyline

    constructor(config?: CanvasPolyline.ConstructorProperties) 
    _init(config?: CanvasPolyline.ConstructorProperties): void
}

module CanvasPolylineModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

        arrow_length?: number | null
        arrow_tip_length?: number | null
        arrow_width?: number | null
        close_path?: boolean | null
        end_arrow?: boolean | null
        height?: number | null
        points?: CanvasPoints | null
        start_arrow?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
        arrowLength?: number | null
        arrowTipLength?: number | null
        arrowWidth?: number | null
        closePath?: boolean | null
        endArrow?: boolean | null
        startArrow?: boolean | null
    }

}

interface CanvasPolylineModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    arrow_length: number
    arrowLength: number
    arrow_tip_length: number
    arrowTipLength: number
    arrow_width: number
    arrowWidth: number
    close_path: boolean
    closePath: boolean
    end_arrow: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    start_arrow: boolean
    startArrow: boolean
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    parent_object: any
    polyline_data: CanvasPolylineData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-length", ...args: any[]): void
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-tip-length", ...args: any[]): void
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-width", ...args: any[]): void
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-path", ...args: any[]): void
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-arrow", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::points", ...args: any[]): void
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-arrow", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasPolylineModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    static name: string
    static $gtype: GObject.GType<CanvasPolylineModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    constructor(config?: CanvasPolylineModel.ConstructorProperties) 
    _init(config?: CanvasPolylineModel.ConstructorProperties): void
}

module CanvasRect {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasRect

        height?: number | null
        radius_bottom_left_x?: number | null
        radius_bottom_left_y?: number | null
        radius_bottom_right_x?: number | null
        radius_bottom_right_y?: number | null
        radius_top_left_x?: number | null
        radius_top_left_y?: number | null
        radius_top_right_x?: number | null
        radius_top_right_y?: number | null
        radius_x?: number | null
        radius_y?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
        radiusBottomLeftX?: number | null
        radiusBottomLeftY?: number | null
        radiusBottomRightX?: number | null
        radiusBottomRightY?: number | null
        radiusTopLeftX?: number | null
        radiusTopLeftY?: number | null
        radiusTopRightX?: number | null
        radiusTopRightY?: number | null
        radiusX?: number | null
        radiusY?: number | null
    }

}

interface CanvasRect extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRect

    height: number
    radius_bottom_left_x: number
    radiusBottomLeftX: number
    radius_bottom_left_y: number
    radiusBottomLeftY: number
    radius_bottom_right_x: number
    radiusBottomRightX: number
    radius_bottom_right_y: number
    radiusBottomRightY: number
    radius_top_left_x: number
    radiusTopLeftX: number
    radius_top_left_y: number
    radiusTopLeftY: number
    radius_top_right_x: number
    radiusTopRightX: number
    radius_top_right_y: number
    radiusTopRightY: number
    radius_x: number
    radiusX: number
    radius_y: number
    radiusY: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRect

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    rect_data: CanvasRectData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasRect

    connect(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasRect extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRect

    static name: string
    static $gtype: GObject.GType<CanvasRect>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasRect

    constructor(config?: CanvasRect.ConstructorProperties) 
    _init(config?: CanvasRect.ConstructorProperties): void
}

module CanvasRectModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasRectModel

        height?: number | null
        radius_bottom_left_x?: number | null
        radius_bottom_left_y?: number | null
        radius_bottom_right_x?: number | null
        radius_bottom_right_y?: number | null
        radius_top_left_x?: number | null
        radius_top_left_y?: number | null
        radius_top_right_x?: number | null
        radius_top_right_y?: number | null
        radius_x?: number | null
        radius_y?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
        radiusBottomLeftX?: number | null
        radiusBottomLeftY?: number | null
        radiusBottomRightX?: number | null
        radiusBottomRightY?: number | null
        radiusTopLeftX?: number | null
        radiusTopLeftY?: number | null
        radiusTopRightX?: number | null
        radiusTopRightY?: number | null
        radiusX?: number | null
        radiusY?: number | null
    }

}

interface CanvasRectModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectModel

    height: number
    radius_bottom_left_x: number
    radiusBottomLeftX: number
    radius_bottom_left_y: number
    radiusBottomLeftY: number
    radius_bottom_right_x: number
    radiusBottomRightX: number
    radius_bottom_right_y: number
    radiusBottomRightY: number
    radius_top_left_x: number
    radiusTopLeftX: number
    radius_top_left_y: number
    radiusTopLeftY: number
    radius_top_right_x: number
    radiusTopRightX: number
    radius_top_right_y: number
    radiusTopRightY: number
    radius_x: number
    radiusX: number
    radius_y: number
    radiusY: number
    width: number
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectModel

    parent_object: any
    rect_data: CanvasRectData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasRectModel

    connect(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-bottom-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-top-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasRectModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectModel

    static name: string
    static $gtype: GObject.GType<CanvasRectModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasRectModel

    constructor(config?: CanvasRectModel.ConstructorProperties) 
    _init(config?: CanvasRectModel.ConstructorProperties): void
}

module CanvasStyle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CanvasStyle {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasStyle

    /**
     * the parent style.
     * @field 
     */
    parent: CanvasStyle
    /**
     * an array of #GooCanvasStyleProperty property settings.
     * @field 
     */
    properties: any[]

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasStyle

    /**
     * Copies the given #GooCanvasStyle, by copying all of its properties.
     * Though the parent of the new style is left unset.
     * @returns a copy of the given #GooCanvasStyle.
     */
    copy(): CanvasStyle
    /**
     * Gets the parent of the style.
     * @returns the parent of the given style, or %NULL.
     */
    get_parent(): CanvasStyle
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
    get_property(property_id: GLib.Quark): any

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Sets the standard cairo fill options using the given style.
     * @param cr a cairo context.
     * @returns %TRUE if a paint source is set, or %FALSE if the fill should be skipped.
     */
    set_fill_options(cr: cairo.Context): boolean
    /**
     * Sets the parent of the style.
     * @param parent the new parent.
     */
    set_parent(parent: CanvasStyle): void
    /**
     * Sets a property in the style, replacing any current setting.
     * 
     * Note that this will override the property setting in ancestor
     * #GooCanvasStyle objects.
     * @param property_id the property identifier.
     * @param value the value of the property.
     */
    set_property(property_id: GLib.Quark, value: any): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Sets the standard cairo stroke options using the given style.
     * @param cr a cairo context.
     * @returns %TRUE if a paint source is set, or %FALSE if the stroke should be skipped.
     */
    set_stroke_options(cr: cairo.Context): boolean

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasStyle

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasStyle extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasStyle

    static name: string
    static $gtype: GObject.GType<CanvasStyle>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasStyle

    constructor(config?: CanvasStyle.ConstructorProperties) 
    /**
     * Creates a new #GooCanvasStyle.
     * @constructor 
     * @returns a new #GooCanvasStyle.
     */
    constructor() 
    /**
     * Creates a new #GooCanvasStyle.
     * @constructor 
     * @returns a new #GooCanvasStyle.
     */
    static new(): CanvasStyle
    _init(config?: CanvasStyle.ConstructorProperties): void
}

module CanvasTable {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasGroup.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasTable

        column_spacing?: number | null
        homogeneous_columns?: boolean | null
        homogeneous_rows?: boolean | null
        horz_grid_line_width?: number | null
        row_spacing?: number | null
        vert_grid_line_width?: number | null
        x_border_spacing?: number | null
        y_border_spacing?: number | null
        columnSpacing?: number | null
        homogeneousColumns?: boolean | null
        homogeneousRows?: boolean | null
        horzGridLineWidth?: number | null
        rowSpacing?: number | null
        vertGridLineWidth?: number | null
        xBorderSpacing?: number | null
        yBorderSpacing?: number | null
    }

}

interface CanvasTable extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTable

    column_spacing: number
    columnSpacing: number
    homogeneous_columns: boolean
    homogeneousColumns: boolean
    homogeneous_rows: boolean
    homogeneousRows: boolean
    horz_grid_line_width: number
    horzGridLineWidth: number
    row_spacing: number
    rowSpacing: number
    vert_grid_line_width: number
    vertGridLineWidth: number
    x_border_spacing: number
    xBorderSpacing: number
    y_border_spacing: number
    yBorderSpacing: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTable

    parent: CanvasGroup & CanvasItem & CanvasItem
    table_data: CanvasTableData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTable

    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous-columns", ...args: any[]): void
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous-rows", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-border-spacing", ...args: any[]): void
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-border-spacing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasTable extends CanvasGroup {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTable

    static name: string
    static $gtype: GObject.GType<CanvasTable>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasTable

    constructor(config?: CanvasTable.ConstructorProperties) 
    _init(config?: CanvasTable.ConstructorProperties): void
}

module CanvasTableModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasGroupModel.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasTableModel

        column_spacing?: number | null
        homogeneous_columns?: boolean | null
        homogeneous_rows?: boolean | null
        horz_grid_line_width?: number | null
        row_spacing?: number | null
        vert_grid_line_width?: number | null
        x_border_spacing?: number | null
        y_border_spacing?: number | null
        columnSpacing?: number | null
        homogeneousColumns?: boolean | null
        homogeneousRows?: boolean | null
        horzGridLineWidth?: number | null
        rowSpacing?: number | null
        vertGridLineWidth?: number | null
        xBorderSpacing?: number | null
        yBorderSpacing?: number | null
    }

}

interface CanvasTableModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableModel

    column_spacing: number
    columnSpacing: number
    homogeneous_columns: boolean
    homogeneousColumns: boolean
    homogeneous_rows: boolean
    homogeneousRows: boolean
    horz_grid_line_width: number
    horzGridLineWidth: number
    row_spacing: number
    rowSpacing: number
    vert_grid_line_width: number
    vertGridLineWidth: number
    x_border_spacing: number
    xBorderSpacing: number
    y_border_spacing: number
    yBorderSpacing: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableModel

    parent_object: any
    table_data: CanvasTableData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTableModel

    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous-columns", ...args: any[]): void
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous-rows", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-border-spacing", ...args: any[]): void
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-border-spacing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasTableModel extends CanvasGroupModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableModel

    static name: string
    static $gtype: GObject.GType<CanvasTableModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasTableModel

    constructor(config?: CanvasTableModel.ConstructorProperties) 
    _init(config?: CanvasTableModel.ConstructorProperties): void
}

module CanvasText {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasText

        alignment?: Pango.Alignment | null
        anchor?: CanvasAnchorType | null
        ellipsize?: Pango.EllipsizeMode | null
        height?: number | null
        text?: string | null
        use_markup?: boolean | null
        width?: number | null
        wrap?: Pango.WrapMode | null
        x?: number | null
        y?: number | null
        useMarkup?: boolean | null
    }

}

interface CanvasText extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasText

    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string | null
    use_markup: boolean
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasText

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    text_data: CanvasTextData
    layout_width: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasText

    /**
     * Gets the natural extents of the text, in the text item's coordinate space.
     * 
     * The final extents of the text may be different, if the text item is placed
     * in a layout container such as #GooCanvasTable.
     */
    get_natural_extents(): [ /* ink_rect */ Pango.Rectangle, /* logical_rect */ Pango.Rectangle ]

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasText

    connect(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasText extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasText

    static name: string
    static $gtype: GObject.GType<CanvasText>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasText

    constructor(config?: CanvasText.ConstructorProperties) 
    _init(config?: CanvasText.ConstructorProperties): void
}

module CanvasTextModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasTextModel

        alignment?: Pango.Alignment | null
        anchor?: CanvasAnchorType | null
        ellipsize?: Pango.EllipsizeMode | null
        height?: number | null
        text?: string | null
        use_markup?: boolean | null
        width?: number | null
        wrap?: Pango.WrapMode | null
        x?: number | null
        y?: number | null
        useMarkup?: boolean | null
    }

}

interface CanvasTextModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextModel

    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string | null
    use_markup: boolean
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextModel

    parent_object: any
    text_data: CanvasTextData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTextModel

    connect(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasTextModel extends CanvasItemModelSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextModel

    static name: string
    static $gtype: GObject.GType<CanvasTextModel>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasTextModel

    constructor(config?: CanvasTextModel.ConstructorProperties) 
    _init(config?: CanvasTextModel.ConstructorProperties): void
}

module CanvasWidget {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasWidget

        anchor?: CanvasAnchorType | null
        height?: number | null
        widget?: Gtk.Widget | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasWidget extends CanvasItem {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasWidget

    parent_object: CanvasItemSimple
    widget: Gtk.Widget
    x: number
    y: number
    width: number
    height: number
    anchor: CanvasAnchorType

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasWidget

    connect(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class CanvasWidget extends CanvasItemSimple {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidget

    static name: string
    static $gtype: GObject.GType<CanvasWidget>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasWidget

    constructor(config?: CanvasWidget.ConstructorProperties) 
    _init(config?: CanvasWidget.ConstructorProperties): void
}

module CanvasWidgetAccessibleFactory {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
    }

}

interface CanvasWidgetAccessibleFactory {

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CanvasWidgetAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

    static name: string
    static $gtype: GObject.GType<CanvasWidgetAccessibleFactory>

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

    constructor(config?: CanvasWidgetAccessibleFactory.ConstructorProperties) 
    _init(config?: CanvasWidgetAccessibleFactory.ConstructorProperties): void
}

interface CanvasBounds {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasBounds

    /**
     * the left edge.
     * @field 
     */
    x1: number
    /**
     * the top edge.
     * @field 
     */
    y1: number
    /**
     * the right edge.
     * @field 
     */
    x2: number
    /**
     * the bottom edge.
     * @field 
     */
    y2: number
}

/**
 * #GooCanvasBounds represents the bounding box of an item in the canvas.
 * @record 
 */
class CanvasBounds {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasBounds

    static name: string
}

interface CanvasClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasClass

    create_item: (canvas: Canvas, model: CanvasItemModel) => CanvasItem
    item_created: (canvas: Canvas, item: CanvasItem, model: CanvasItemModel) => void
}

/**
 * The #GooCanvasClass-struct struct contains one virtual method that
 * subclasses may override.
 * @record 
 */
abstract class CanvasClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasClass

    static name: string
}

interface CanvasEllipseClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasEllipseClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseClass

    static name: string
}

interface CanvasEllipseData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseData

    center_x: number
    center_y: number
    radius_x: number
    radius_y: number
}

class CanvasEllipseData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseData

    static name: string
}

interface CanvasEllipseModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasEllipseModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModelClass

    static name: string
}

interface CanvasGridClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasGridClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridClass

    static name: string
}

interface CanvasGridData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridData

    x: number
    y: number
    width: number
    height: number
    x_step: number
    y_step: number
    x_offset: number
    y_offset: number
    horz_grid_line_width: number
    vert_grid_line_width: number
    horz_grid_line_pattern: cairo.Pattern
    vert_grid_line_pattern: cairo.Pattern
    border_width: number
    border_pattern: cairo.Pattern
    show_horz_grid_lines: number
    show_vert_grid_lines: number
    vert_grid_lines_on_top: number
}

class CanvasGridData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridData

    static name: string
}

interface CanvasGridModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasGridModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridModelClass

    static name: string
}

interface CanvasGroupClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasGroupClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupClass

    static name: string
}

interface CanvasGroupModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasGroupModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupModelClass

    static name: string
}

interface CanvasImageClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasImageClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageClass

    static name: string
}

interface CanvasImageData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageData

    pattern: cairo.Pattern
    x: number
    y: number
    width: number
    height: number
}

class CanvasImageData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageData

    static name: string
}

interface CanvasImageModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasImageModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageModelClass

    static name: string
}

interface CanvasItemIface {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemIface

    get_canvas: (item: CanvasItem) => Canvas
    set_canvas: (item: CanvasItem, canvas: Canvas) => void
    get_n_children: (item: CanvasItem) => number
    get_child: (item: CanvasItem, child_num: number) => CanvasItem
    request_update: (item: CanvasItem) => void
    add_child: (item: CanvasItem, child: CanvasItem, position: number) => void
    move_child: (item: CanvasItem, old_position: number, new_position: number) => void
    remove_child: (item: CanvasItem, child_num: number) => void
    get_child_property: (item: CanvasItem, child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    set_child_property: (item: CanvasItem, child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    get_transform_for_child: (item: CanvasItem, child: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_parent: (item: CanvasItem) => CanvasItem
    set_parent: (item: CanvasItem, parent: CanvasItem) => void
    get_bounds: (item: CanvasItem) => /* bounds */ CanvasBounds
    get_items_at: (item: CanvasItem, x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]) => CanvasItem[]
    update: (item: CanvasItem, entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds) => void
    paint: (item: CanvasItem, cr: cairo.Context, bounds: CanvasBounds, scale: number) => void
    get_requested_area: (item: CanvasItem, cr: cairo.Context, requested_area: CanvasBounds) => boolean
    allocate_area: (item: CanvasItem, cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number) => void
    get_transform: (item: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    set_transform: (item: CanvasItem, transform: cairo.Matrix | null) => void
    get_style: (item: CanvasItem) => CanvasStyle
    set_style: (item: CanvasItem, style: CanvasStyle) => void
    is_visible: (item: CanvasItem) => boolean
    get_requested_height: (item: CanvasItem, cr: cairo.Context, width: number) => number
    get_model: (item: CanvasItem) => CanvasItemModel
    set_model: (item: CanvasItem, model: CanvasItemModel) => void
    enter_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    leave_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    motion_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventMotion) => boolean
    button_press_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    button_release_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    focus_in_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    focus_out_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    key_press_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    key_release_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    grab_broken_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventGrabBroken) => boolean
    child_notify: (item: CanvasItem, pspec: GObject.ParamSpec) => void
    query_tooltip: (item: CanvasItem, x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip) => boolean
    get_is_static: (item: CanvasItem) => boolean
    set_is_static: (item: CanvasItem, is_static: boolean) => void
    animation_finished: (item: CanvasItem, stopped: boolean) => void
    scroll_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventScroll) => boolean
    get_requested_area_for_width: (item: CanvasItem, cr: cairo.Context, width: number, requested_area: CanvasBounds) => boolean
}

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
 * @record 
 */
abstract class CanvasItemIface {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemIface

    static name: string
}

interface CanvasItemModelIface {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemModelIface

    get_n_children: (model: CanvasItemModel) => number
    get_child: (model: CanvasItemModel, child_num: number) => CanvasItemModel
    add_child: (model: CanvasItemModel, child: CanvasItemModel, position: number) => void
    move_child: (model: CanvasItemModel, old_position: number, new_position: number) => void
    remove_child: (model: CanvasItemModel, child_num: number) => void
    get_child_property: (model: CanvasItemModel, child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    set_child_property: (item: CanvasItemModel, child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    get_parent: (model: CanvasItemModel) => CanvasItemModel
    set_parent: (model: CanvasItemModel, parent: CanvasItemModel) => void
    get_transform: (model: CanvasItemModel, transform: cairo.Matrix) => boolean
    set_transform: (model: CanvasItemModel, transform: cairo.Matrix | null) => void
    get_style: (model: CanvasItemModel) => CanvasStyle
    set_style: (model: CanvasItemModel, style: CanvasStyle) => void
    child_added: (model: CanvasItemModel, child_num: number) => void
    child_moved: (model: CanvasItemModel, old_child_num: number, new_child_num: number) => void
    child_removed: (model: CanvasItemModel, child_num: number) => void
    changed: (model: CanvasItemModel, recompute_bounds: boolean) => void
    child_notify: (model: CanvasItemModel, pspec: GObject.ParamSpec) => void
    animation_finished: (model: CanvasItemModel, stopped: boolean) => void
}

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
 * @record 
 */
abstract class CanvasItemModelIface {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModelIface

    static name: string
}

interface CanvasItemModelSimpleClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimpleClass

    parent_class: GObject.ObjectClass
}

abstract class CanvasItemModelSimpleClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimpleClass

    static name: string
}

interface CanvasItemSimpleClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemSimpleClass

    simple_create_path: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simple_update: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simple_paint: (simple: CanvasItemSimple, cr: cairo.Context, bounds: CanvasBounds) => void
    simple_is_item_at: (simple: CanvasItemSimple, x: number, y: number, cr: cairo.Context, is_pointer_event: boolean) => boolean
}

/**
 * The #GooCanvasItemSimpleClass-struct struct contains several methods that
 * subclasses can override.
 * 
 * Simple items need only implement the create_path() method. More complex
 * items must override the update(), paint() and is_item_at() methods instead.
 * @record 
 */
abstract class CanvasItemSimpleClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemSimpleClass

    static name: string
}

interface CanvasItemSimpleData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemSimpleData

    /**
     * the style to draw with.
     * @field 
     */
    style: CanvasStyle
    /**
     * the transformation matrix of the item, or %NULL.
     * @field 
     */
    transform: cairo.Matrix
    /**
     * an array of #GooCanvasPathCommand specifying the clip
     *  path of the item, or %NULL.
     * @field 
     */
    clip_path_commands: any[]
    /**
     * the item's tooltip.
     * @field 
     */
    tooltip: string | null
    /**
     * the threshold scale setting at which to show the item
     *  (if the `visibility` setting is set to %VISIBLE_ABOVE_THRESHOLD).
     * @field 
     */
    visibility_threshold: number
    /**
     * the #GooCanvasItemVisibility setting specifying whether the
     *  item is visible, invisible, or visible above a given canvas scale setting.
     * @field 
     */
    visibility: number
    /**
     * the #GooCanvasPointerEvents setting specifying the events
     *  the item should receive.
     * @field 
     */
    pointer_events: number
    /**
     * if the item can take the keyboard focus.
     * @field 
     */
    can_focus: number
    /**
     * if the item has its own style, rather than using its parent's.
     * @field 
     */
    own_style: number
    /**
     * the #cairo_fill_rule_t setting specifying the fill rule
     *  used for the clip path.
     * @field 
     */
    clip_fill_rule: number
    /**
     * if the item is static.
     * @field 
     */
    is_static: number
}

/**
 * This is the data common to both the model and view classes.
 * @record 
 */
class CanvasItemSimpleData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemSimpleData

    static name: string
}

interface CanvasLineDash {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasLineDash

    /**
     * the reference count of the struct.
     * @field 
     */
    ref_count: number
    /**
     * the number of dashes and gaps between them.
     * @field 
     */
    num_dashes: number
    /**
     * the sizes of each dash and gap.
     * @field 
     */
    dashes: number
    /**
     * the start offset into the dash pattern.
     * @field 
     */
    dash_offset: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasLineDash

    /**
     * Increments the reference count of the dash pattern.
     * @returns the dash pattern.
     */
    ref(): CanvasLineDash
    /**
     * Sets the start offset into the dash pattern.
     * @param dash_offset the start offset into the dash pattern.
     */
    set_offset(dash_offset: number): void
    /**
     * Decrements the reference count of the dash pattern. If it falls to 0
     * it is freed.
     */
    unref(): void
}

/**
 * #GooCanvasLineDash specifies a dash pattern to be used when drawing items.
 * @record 
 */
class CanvasLineDash {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasLineDash

    static name: string

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasLineDash

    /**
     * Creates a new dash pattern.  Takes ownership of the `dashes` vector.
     * @constructor 
     * @param dashes a g_new-allocated vector of doubles, the length of each dash and gap.
     * @returns a new dash pattern.
     */
    static newv(dashes: number[]): CanvasLineDash
}

interface CanvasPathClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasPathClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathClass

    static name: string
}

interface CanvasPathData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathData

    path_commands: any[]
}

class CanvasPathData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathData

    static name: string
}

interface CanvasPathModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasPathModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathModelClass

    static name: string
}

interface CanvasPoints {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPoints

    /**
     * the coordinates of the points, in pairs.
     * @field 
     */
    coords: number
    /**
     * the number of points.
     * @field 
     */
    num_points: number
    /**
     * the reference count of the struct.
     * @field 
     */
    ref_count: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasPoints

    /**
     * Gets the coordinates of a point in the #GooCanvasPoints struct.
     * @param idx index of point to get.
     */
    get_point(idx: number): [ /* x */ number, /* y */ number ]
    /**
     * Increments the reference count of the given #GooCanvasPoints struct.
     * @returns the #GooCanvasPoints struct.
     */
    ref(): CanvasPoints
    /**
     * Sets the coordinates of a point in the #GooCanvasPoints struct.
     * @param idx index of point to set.
     * @param x x value to set point coordinate to.
     * @param y y value to set point coordinate to.
     */
    set_point(idx: number, x: number, y: number): void
    /**
     * Decrements the reference count of the given #GooCanvasPoints struct,
     * freeing it if the reference count falls to zero.
     */
    unref(): void
}

/**
 * #GooCairoPoints represents an array of points.
 * @record 
 */
class CanvasPoints {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPoints

    static name: string

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPoints

    /**
     * Creates a new #GooCanvasPoints struct with space for the given number of
     * points. It should be freed with goo_canvas_points_unref().
     * @constructor 
     * @param num_points the number of points to create space for.
     * @returns a new #GooCanvasPoints struct.
     */
    constructor(num_points: number) 
    /**
     * Creates a new #GooCanvasPoints struct with space for the given number of
     * points. It should be freed with goo_canvas_points_unref().
     * @constructor 
     * @param num_points the number of points to create space for.
     * @returns a new #GooCanvasPoints struct.
     */
    static new(num_points: number): CanvasPoints
}

interface CanvasPolylineArrowData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineArrowData

    arrow_width: number
    arrow_length: number
    arrow_tip_length: number
    line_start: number[]
    line_end: number[]
    start_arrow_coords: number[]
    end_arrow_coords: number[]
}

class CanvasPolylineArrowData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineArrowData

    static name: string
}

interface CanvasPolylineClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasPolylineClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineClass

    static name: string
}

interface CanvasPolylineData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineData

    coords: number
    arrow_data: CanvasPolylineArrowData
    num_points: number
    close_path: number
    start_arrow: number
    end_arrow: number
    reconfigure_arrows: number
}

class CanvasPolylineData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineData

    static name: string
}

interface CanvasPolylineModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasPolylineModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModelClass

    static name: string
}

interface CanvasRectClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasRectClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectClass

    static name: string
}

interface CanvasRectData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectData

    x: number
    y: number
    width: number
    height: number
    radius_x: number
    radius_y: number
    radius_top_left_x: number
    radius_top_left_y: number
    radius_top_right_x: number
    radius_top_right_y: number
    radius_bottom_right_x: number
    radius_bottom_right_y: number
    radius_bottom_left_x: number
    radius_bottom_left_y: number
}

class CanvasRectData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectData

    static name: string
}

interface CanvasRectModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasRectModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectModelClass

    static name: string
}

interface CanvasStyleClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasStyleClass

    parent_class: GObject.ObjectClass
}

abstract class CanvasStyleClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasStyleClass

    static name: string
}

interface CanvasStyleProperty {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasStyleProperty

    /**
     * the unique property identifier.
     * @field 
     */
    id: GLib.Quark
    /**
     * the value of the property.
     * @field 
     */
    value: any
}

/**
 * #GooCanvasStyleProperty represents a property setting.
 * @record 
 */
class CanvasStyleProperty {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasStyleProperty

    static name: string
}

interface CanvasTableClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableClass

    parent_class: CanvasGroupClass
}

abstract class CanvasTableClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableClass

    static name: string
}

interface CanvasTableData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableData

    width: number
    height: number
    dimensions: CanvasTableDimension[]
    border_width: number
    children: any[]
    layout_data: CanvasTableLayoutData
}

class CanvasTableData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableData

    static name: string
}

interface CanvasTableDimension {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableDimension

    size: number
    default_spacing: number
    spacings: number
    homogeneous: number
}

class CanvasTableDimension {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableDimension

    static name: string
}

interface CanvasTableLayoutData {
}

class CanvasTableLayoutData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableLayoutData

    static name: string
}

interface CanvasTableModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableModelClass

    parent_class: CanvasGroupModelClass
}

abstract class CanvasTableModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableModelClass

    static name: string
}

interface CanvasTextClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasTextClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextClass

    static name: string
}

interface CanvasTextData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextData

    text: string | null
    x: number
    y: number
    width: number
    use_markup: number
    anchor: number
    alignment: number
    ellipsize: number
    wrap: number
}

class CanvasTextData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextData

    static name: string
}

interface CanvasTextModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextModelClass

    parent_class: CanvasItemModelSimpleClass
}

abstract class CanvasTextModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextModelClass

    static name: string
}

interface CanvasWidgetClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasWidgetClass

    parent_class: CanvasItemSimpleClass
}

abstract class CanvasWidgetClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidgetClass

    static name: string
}

interface CanvasPathCommand {
}

/**
 * GooCanvasPathCommand holds the data for each command in the path.
 * 
 * The `relative` flag specifies that the coordinates for the command are
 * relative to the current point. Otherwise they are assumed to be absolute
 * coordinates.
 * @union 
 */
class CanvasPathCommand {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathCommand

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GooCanvas;
// END