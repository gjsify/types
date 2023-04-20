
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GooCanvas-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
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
function cairoMatrixCopy(matrix: cairo.Matrix): cairo.Matrix
function cairoMatrixFree(matrix: cairo.Matrix): void
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It finds a child property of a canvas item class by name.
 * @param iclass a #GObjectClass
 * @param propertyName the name of the child property to find
 * @returns the #GParamSpec of the  child property or %NULL if @class has no child property with that name.
 */
function canvasItemClassFindChildProperty(iclass: GObject.ObjectClass, propertyName: string | null): GObject.ParamSpec
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It installs a child property on a canvas item class.
 * @param iclass a #GObjectClass
 * @param propertyId the id for the property
 * @param pspec the #GParamSpec for the property
 */
function canvasItemClassInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
/**
 * This function is only intended to be used when implementing new canvas
 * items, specifically layout container items such as #GooCanvasTable.
 * 
 * It returns all child properties of a canvas item class.
 * @param iclass a #GObjectClass
 * @returns a newly allocated  array of #GParamSpec*. The array must be freed with g_free().
 */
function canvasItemClassListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
/**
 * This function is only intended to be used when implementing new canvas
 * item models, specifically layout container item models such as
 * #GooCanvasTableModel.
 * 
 * It finds a child property of a canvas item class by name.
 * @param mclass a #GObjectClass
 * @param propertyName the name of the child property to find
 * @returns The #GParamSpec of the child  property or %NULL if @class has no child property with that name.
 */
function canvasItemModelClassFindChildProperty(mclass: GObject.ObjectClass, propertyName: string | null): GObject.ParamSpec
/**
 * This function is only intended to be used when implementing new canvas
 * item models, specifically layout container item models such as
 * #GooCanvasTableModel.
 * 
 * It installs a child property on a canvas item class.
 * @param mclass a #GObjectClass
 * @param propertyId the id for the property
 * @param pspec the #GParamSpec for the property
 */
function canvasItemModelClassInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
/**
 * This function is only intended to be used when implementing new canvas
 * item models, specifically layout container item models such as
 * #GooCanvasTableModel.
 * 
 * It returns all child properties of a canvas item class.
 * @param mclass a #GObjectClass
 * @returns   a newly allocated array of #GParamSpec*. The array must be freed with g_free().
 */
function canvasItemModelClassListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
module CanvasItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-finished`
     */
    interface AnimationFinishedSignalCallback {
        (stopped: boolean): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    interface ButtonPressEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventButton): boolean
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    interface ButtonReleaseEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventButton): boolean
    }

    /**
     * Signal callback interface for `child-notify`
     */
    interface ChildNotifySignalCallback {
        (pspec: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `enter-notify-event`
     */
    interface EnterNotifyEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventCrossing): boolean
    }

    /**
     * Signal callback interface for `focus-in-event`
     */
    interface FocusInEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventFocus): boolean
    }

    /**
     * Signal callback interface for `focus-out-event`
     */
    interface FocusOutEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventFocus): boolean
    }

    /**
     * Signal callback interface for `grab-broken-event`
     */
    interface GrabBrokenEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventGrabBroken): boolean
    }

    /**
     * Signal callback interface for `key-press-event`
     */
    interface KeyPressEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventKey): boolean
    }

    /**
     * Signal callback interface for `key-release-event`
     */
    interface KeyReleaseEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventKey): boolean
    }

    /**
     * Signal callback interface for `leave-notify-event`
     */
    interface LeaveNotifyEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventCrossing): boolean
    }

    /**
     * Signal callback interface for `motion-notify-event`
     */
    interface MotionNotifyEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventMotion): boolean
    }

    /**
     * Signal callback interface for `query-tooltip`
     */
    interface QueryTooltipSignalCallback {
        (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): boolean
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    interface ScrollEventSignalCallback {
        (targetItem: CanvasItem, event: Gdk.EventScroll): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItem

        canFocus?: boolean | null
        description?: string | null
        parent?: CanvasItem | null
        pointerEvents?: CanvasPointerEvents | null
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
        visibilityThreshold?: number | null
    }

}

interface CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItem

    canFocus: boolean
    description: string | null
    parent: CanvasItem
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
    visibilityThreshold: number
    __gtype__: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItem

    // Has conflict: addChild(child: CanvasItem, position: number): void
    // Has conflict: allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    /**
     * Animates an item from its current position to the given offsets, scale
     * and rotation.
     * @param x the final x coordinate.
     * @param y the final y coordinate.
     * @param scale the final scale.
     * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
     * @param absolute if the `x,` `y,` `scale` and `degrees` values are absolute, or  relative to the current transform. Note that absolute animations only work  if the item currently has a simple transform. If the item has a shear or  some other complicated transform it may result in strange animations.
     * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
     * @param stepTime the time between each animation step, in milliseconds.
     * @param type specifies what happens when the animation finishes.
     */
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It updates the canvas immediately, if an update is scheduled.
     * This ensures that all item bounds are up-to-date.
     */
    ensureUpdated(): void
    /**
     * Attempts to find the given child item with the container's stack.
     * @param child the child item to find.
     * @returns the position of the given @child item, or -1 if it isn't found.
     */
    findChild(child: CanvasItem): number
    // Has conflict: getBounds(): /* bounds */ CanvasBounds
    // Has conflict: getCanvas(): Canvas
    // Has conflict: getChild(childNum: number): CanvasItem
    // Has conflict: getChildProperty(child: CanvasItem, propertyName: string | null, value: any): void
    // Has conflict: getIsStatic(): boolean
    // Has conflict: getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    // Has conflict: getModel(): CanvasItemModel
    // Has conflict: getNChildren(): number
    // Has conflict: getParent(): CanvasItem
    // Has conflict: getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    // Has conflict: getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    // Has conflict: getRequestedHeight(cr: cairo.Context, width: number): number
    /**
     * This function can be used to get the position, scale and rotation of an
     * item, providing that the item has a simple transformation matrix
     * (e.g. set with goo_canvas_item_set_simple_transform(), or using a
     * combination of simple translate, scale and rotate operations). If the item
     * has a complex transformation matrix the results will be incorrect.
     * @returns %TRUE if a transform is set.
     */
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    // Has conflict: getStyle(): CanvasStyle
    // Has conflict: getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    // Has conflict: getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    /**
     * Tests to see if the given item is a container.
     * @returns %TRUE if the item is a container.
     */
    isContainer(): boolean
    // Has conflict: isVisible(): boolean
    /**
     * Lowers an item in the stacking order.
     * @param below the item to lower `item` below, or %NULL to lower `item` to the  bottom of the stack.
     */
    lower(below: CanvasItem | null): void
    // Has conflict: moveChild(oldPosition: number, newPosition: number): void
    // Has conflict: paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
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
    // Has conflict: removeChild(childNum: number): void
    // Has conflict: requestUpdate(): void
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
    // Has conflict: setCanvas(canvas: Canvas): void
    // Has conflict: setChildProperty(child: CanvasItem, propertyName: string | null, value: any): void
    // Has conflict: setIsStatic(isStatic: boolean): void
    // Has conflict: setModel(model: CanvasItemModel): void
    // Has conflict: setParent(parent: CanvasItem): void
    /**
     * A convenience function to set the item's transformation matrix.
     * @param x the x coordinate of the origin of the item's coordinate space.
     * @param y the y coordinate of the origin of the item's coordinate space.
     * @param scale the scale of the item.
     * @param rotation the clockwise rotation of the item, in degrees.
     */
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    // Has conflict: setStyle(style: CanvasStyle): void
    // Has conflict: setTransform(transform: cairo.Matrix | null): void
    /**
     * Skews the item's coordinate system along the x axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skewX(degrees: number, cx: number, cy: number): void
    /**
     * Skews the item's coordinate system along the y axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skewY(degrees: number, cx: number, cy: number): void
    /**
     * Stops any current animation for the given item, leaving it at its current
     * position.
     */
    stopAnimation(): void
    /**
     * Translates the origin of the item's coordinate system by the given amounts.
     * @param tx the amount to move the origin in the horizontal direction.
     * @param ty the amount to move the origin in the vertical direction.
     */
    translate(tx: number, ty: number): void
    // Has conflict: update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.CanvasItem

    /**
     * Adds a child item to a container item at the given stack position.
     * @virtual 
     * @param child the item to add.
     * @param position the position of the item, or -1 to place it last (at the top of  the stacking order).
     */
    addChild(child: CanvasItem, position: number): void
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
     * @param requestedArea the area that the item originally requested, in the  parent's coordinate space.
     * @param allocatedArea the area that the item has been allocated, in the parent's  coordinate space.
     * @param xOffset the x offset of the allocated area from the requested area in  the device coordinate space.
     * @param yOffset the y offset of the allocated area from the requested area in  the device coordinate space.
     */
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animationFinished(stopped: boolean): void
    buttonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    buttonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    childNotify(pspec: GObject.ParamSpec): void
    enterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    focusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    focusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    /**
     * Gets the bounds of the item.
     * 
     * Note that the bounds includes the entire fill and stroke extents of the
     * item, whether they are painted or not.
     * @virtual 
     */
    getBounds(): /* bounds */ CanvasBounds
    /**
     * Returns the #GooCanvas containing the given #GooCanvasItem.
     * @virtual 
     * @returns the #GooCanvas.
     */
    getCanvas(): Canvas
    /**
     * Gets the child item at the given stack position.
     * @virtual 
     * @param childNum the position of a child in the container's stack.
     * @returns the child item at the given stack position, or  %NULL if @child_num is out of range.
     */
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Returns %TRUE if the item is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * @virtual 
     * @returns %TRUE if the item is static.
     */
    getIsStatic(): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It gets the items at the given point.
     * @virtual 
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point.
     * @param cr a cairo contect.
     * @param isPointerEvent %TRUE if the "pointer-events" properties of items should  be used to determine which parts of the item are tested.
     * @param parentIsVisible %TRUE if the parent item is visible (which  implies that all ancestors are also visible).
     * @param foundItems the list of items found  so far.
     * @returns the  @found_items list, with any more found items  added onto the start of the list, leaving the top item first.
     */
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    /**
     * Gets the model of the given canvas item.
     * @virtual 
     * @returns the item's model, or %NULL if it has no model.
     */
    getModel(): CanvasItemModel
    /**
     * Gets the number of children of the container.
     * @virtual 
     * @returns the number of children.
     */
    getNChildren(): number
    /**
     * Gets the parent of the given item.
     * @virtual 
     * @returns the parent item, or %NULL if the item has no parent.
     */
    getParent(): CanvasItem
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout items such as #GooCanvasTable.
     * 
     * It gets the requested area of a child item.
     * @virtual 
     * @param cr a cairo context.
     * @param requestedArea a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space.
     * @returns %TRUE if the item should be allocated space.
     */
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
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
     * @param requestedArea a #GooCanvasBounds to return the requested area in, in the  parent's coordinate space. If %FALSE is returned, this is undefined.
     * @returns %TRUE if the item's requested area changes due to the new allocated width.
     */
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
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
    getRequestedHeight(cr: cairo.Context, width: number): number
    /**
     * Gets the item's style. If the item doesn't have its own style it will return
     * its parent's style.
     * @virtual 
     * @returns the item's style.
     */
    getStyle(): CanvasStyle
    /**
     * Gets the transformation matrix of an item.
     * @virtual 
     * @returns %TRUE if a transform is set.
     */
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    /**
     * Gets the transformation matrix of an item combined with any special
     * transform needed for the given child. These special transforms are used
     * by layout items such as #GooCanvasTable.
     * @virtual 
     * @param child a child of `item`.
     * @returns %TRUE if a transform is set.
     */
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    grabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
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
    isVisible(): boolean
    keyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    keyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    leaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    motionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    /**
     * Moves a child item to a new stack position within the container.
     * @virtual 
     * @param oldPosition the current position of the child item.
     * @param newPosition the new position of the child item.
     */
    moveChild(oldPosition: number, newPosition: number): void
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
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    queryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Removes the child item at the given position.
     * @virtual 
     * @param childNum the position of the child item to remove.
     */
    removeChild(childNum: number): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It requests that an update of the item is scheduled. It will be performed
     * as soon as the application is idle, and before the canvas is redrawn.
     * @virtual 
     */
    requestUpdate(): void
    scrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * It sets the canvas of the item.
     * @virtual 
     * @param canvas a #GooCanvas
     */
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Notifies the item that it is static. Static items do not move or change
     * size when the canvas is scrolled or the scale changes.
     * 
     * Container items such as #GooCanvasGroup should call this function when
     * children are added, to notify children whether they are static or not.
     * Containers should also pass on any changes in their own status to children.
     * @virtual 
     * @param isStatic if the item is static.
     */
    setIsStatic(isStatic: boolean): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
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
    setParent(parent: CanvasItem): void
    /**
     * Sets the item's style, by copying the properties from the given style.
     * @virtual 
     * @param style a style.
     */
    setStyle(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item.
     * @virtual 
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    setTransform(transform: cairo.Matrix | null): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically container items such as #GooCanvasGroup.
     * 
     * Updates the item, if needed, and any children.
     * @virtual 
     * @param entireTree if the entire subtree should be updated.
     * @param cr a cairo context.
     * @param bounds a #GooCanvasBounds to return the new bounds in.
     */
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void

    // Own signals of GooCanvas-3.0.GooCanvas.CanvasItem

    connect(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback): number
    on(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: CanvasItem.AnimationFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "animation-finished", ...args: any[]): void
    connect(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback): number
    on(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: CanvasItem.ButtonPressEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton, ...args: any[]): void
    connect(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback): number
    on(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: CanvasItem.ButtonReleaseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton, ...args: any[]): void
    connect(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback): number
    on(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: CanvasItem.ChildNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-notify", ...args: any[]): void
    connect(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback): number
    on(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: CanvasItem.EnterNotifyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing, ...args: any[]): void
    connect(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback): number
    on(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: CanvasItem.FocusInEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus, ...args: any[]): void
    connect(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback): number
    on(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: CanvasItem.FocusOutEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus, ...args: any[]): void
    connect(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback): number
    on(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: CanvasItem.GrabBrokenEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken, ...args: any[]): void
    connect(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback): number
    on(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: CanvasItem.KeyPressEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey, ...args: any[]): void
    connect(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback): number
    on(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: CanvasItem.KeyReleaseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey, ...args: any[]): void
    connect(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback): number
    on(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: CanvasItem.LeaveNotifyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing, ...args: any[]): void
    connect(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback): number
    on(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: CanvasItem.MotionNotifyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion, ...args: any[]): void
    connect(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback): number
    on(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: CanvasItem.QueryTooltipSignalCallback): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip, ...args: any[]): void
    connect(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback): number
    on(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: CanvasItem.ScrollEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll, ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItem

    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
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
}

/**
 * #GooCanvasItem defines the interface that canvas items must implement,
 * and contains methods for operating on canvas items.
 * @interface 
 */
class CanvasItem extends GObject.Object {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItem

    static name: string

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItem

    constructor(config?: CanvasItem.ConstructorProperties) 
    _init(config?: CanvasItem.ConstructorProperties): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It finds a child property of a canvas item class by name.
     * @param iclass a #GObjectClass
     * @param propertyName the name of the child property to find
     * @returns the #GParamSpec of the  child property or %NULL if @class has no child property with that name.
     */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string | null): GObject.ParamSpec
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It installs a child property on a canvas item class.
     * @param iclass a #GObjectClass
     * @param propertyId the id for the property
     * @param pspec the #GParamSpec for the property
     */
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items, specifically layout container items such as #GooCanvasTable.
     * 
     * It returns all child properties of a canvas item class.
     * @param iclass a #GObjectClass
     * @returns a newly allocated  array of #GParamSpec*. The array must be freed with g_free().
     */
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
}

module CanvasItemModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-finished`
     */
    interface AnimationFinishedSignalCallback {
        (stopped: boolean): void
    }

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (recomputeBounds: boolean): void
    }

    /**
     * Signal callback interface for `child-added`
     */
    interface ChildAddedSignalCallback {
        (childNum: number): void
    }

    /**
     * Signal callback interface for `child-moved`
     */
    interface ChildMovedSignalCallback {
        (oldChildNum: number, newChildNum: number): void
    }

    /**
     * Signal callback interface for `child-notify`
     */
    interface ChildNotifySignalCallback {
        (pspec: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    interface ChildRemovedSignalCallback {
        (childNum: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemModel

        canFocus?: boolean | null
        description?: string | null
        parent?: CanvasItemModel | null
        pointerEvents?: CanvasPointerEvents | null
        title?: string | null
        tooltip?: string | null
        transform?: any | null
        visibility?: CanvasItemVisibility | null
        visibilityThreshold?: number | null
    }

}

interface CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModel

    canFocus: boolean
    description: string | null
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string | null
    tooltip: string | null
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    __gtype__: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItemModel

    // Has conflict: addChild(child: CanvasItemModel, position: number): void
    /**
     * Animates a model from its current position to the given offsets, scale
     * and rotation.
     * @param x the final x coordinate.
     * @param y the final y coordinate.
     * @param scale the final scale.
     * @param degrees the final rotation. This can be negative to rotate anticlockwise,  and can also be greater than 360 to rotate a number of times.
     * @param absolute if the `x,` `y,` `scale` and `degrees` values are absolute, or  relative to the current transform. Note that absolute animations only work  if the model currently has a simple transform. If the model has a shear or  some other complicated transform it may result in strange animations.
     * @param duration the duration of the animation, in milliseconds (1/1000ths of a  second).
     * @param stepTime the time between each animation step, in milliseconds.
     * @param type specifies what happens when the animation finishes.
     */
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    /**
     * Attempts to find the given child with the container's stack.
     * @param child the child to find.
     * @returns the position of the given @child, or -1 if it isn't found.
     */
    findChild(child: CanvasItemModel): number
    // Has conflict: getChild(childNum: number): CanvasItemModel
    // Has conflict: getChildProperty(child: CanvasItemModel, propertyName: string | null, value: any): void
    // Has conflict: getNChildren(): number
    // Has conflict: getParent(): CanvasItemModel
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
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    // Has conflict: getStyle(): CanvasStyle
    // Has conflict: getTransform(transform: cairo.Matrix): boolean
    /**
     * Tests to see if the given item model is a container.
     * @returns %TRUE if the item model is a container.
     */
    isContainer(): boolean
    /**
     * Lowers a model in the stacking order.
     * @param below the item model to lower `model` below, or %NULL to lower `model` to the  bottom of the stack.
     */
    lower(below: CanvasItemModel | null): void
    // Has conflict: moveChild(oldPosition: number, newPosition: number): void
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
    // Has conflict: removeChild(childNum: number): void
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
    // Has conflict: setChildProperty(child: CanvasItemModel, propertyName: string | null, value: any): void
    // Has conflict: setParent(parent: CanvasItemModel): void
    /**
     * A convenience function to set the item model's transformation matrix.
     * @param x the x coordinate of the origin of the model's coordinate space.
     * @param y the y coordinate of the origin of the model's coordinate space.
     * @param scale the scale of the model.
     * @param rotation the clockwise rotation of the model, in degrees.
     */
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    // Has conflict: setStyle(style: CanvasStyle): void
    // Has conflict: setTransform(transform: cairo.Matrix | null): void
    /**
     * Skews the model's coordinate system along the x axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skewX(degrees: number, cx: number, cy: number): void
    /**
     * Skews the model's coordinate system along the y axis by the given amount,
     * about the given origin.
     * @param degrees the skew angle.
     * @param cx the x coordinate of the origin of the skew transform.
     * @param cy the y coordinate of the origin of the skew transform.
     */
    skewY(degrees: number, cx: number, cy: number): void
    /**
     * Stops any current animation for the given model, leaving it at its current
     * position.
     */
    stopAnimation(): void
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
    addChild(child: CanvasItemModel, position: number): void
    animationFinished(stopped: boolean): void
    changed(recomputeBounds: boolean): void
    childAdded(childNum: number): void
    childMoved(oldChildNum: number, newChildNum: number): void
    childNotify(pspec: GObject.ParamSpec): void
    childRemoved(childNum: number): void
    /**
     * Gets the child at the given stack position.
     * @virtual 
     * @param childNum the position of a child in the container's stack.
     * @returns the child at the given stack position, or %NULL  if @child_num is out of range.
     */
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Gets the number of children of the container.
     * @virtual 
     * @returns the number of children.
     */
    getNChildren(): number
    /**
     * Gets the parent of the given model.
     * @virtual 
     * @returns the parent model, or %NULL if the model has no parent.
     */
    getParent(): CanvasItemModel
    /**
     * Gets the model's style. If the model doesn't have its own style it will
     * return its parent's style.
     * @virtual 
     * @returns the model's style.
     */
    getStyle(): CanvasStyle
    /**
     * Gets the transformation matrix of an item model.
     * @virtual 
     * @param transform the place to store the transform.
     * @returns %TRUE if a transform is set.
     */
    getTransform(transform: cairo.Matrix): boolean
    /**
     * Moves a child to a new stack position.
     * @virtual 
     * @param oldPosition the current position of the child.
     * @param newPosition the new position of the child.
     */
    moveChild(oldPosition: number, newPosition: number): void
    /**
     * Removes the child at the given position.
     * @virtual 
     * @param childNum the position of the child to remove.
     */
    removeChild(childNum: number): void
    setChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
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
    setParent(parent: CanvasItemModel): void
    /**
     * Sets the model's style, by copying the properties from the given style.
     * @virtual 
     * @param style a style.
     */
    setStyle(style: CanvasStyle): void
    /**
     * Sets the transformation matrix of an item model.
     * @virtual 
     * @param transform the new transformation matrix, or %NULL to reset the  transformation to the identity matrix.
     */
    setTransform(transform: cairo.Matrix | null): void

    // Own signals of GooCanvas-3.0.GooCanvas.CanvasItemModel

    connect(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback): number
    on(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: CanvasItemModel.AnimationFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "animation-finished", ...args: any[]): void
    connect(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback): number
    on(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: CanvasItemModel.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: CanvasItemModel.ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback): number
    on(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: CanvasItemModel.ChildMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-moved", newChildNum: number, ...args: any[]): void
    connect(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback): number
    on(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: CanvasItemModel.ChildNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-notify", ...args: any[]): void
    connect(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: CanvasItemModel.ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemModel

    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
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
     * @param propertyName the name of the child property to find
     * @returns The #GParamSpec of the child  property or %NULL if @class has no child property with that name.
     */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string | null): GObject.ParamSpec
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     * 
     * It installs a child property on a canvas item class.
     * @param mclass a #GObjectClass
     * @param propertyId the id for the property
     * @param pspec the #GParamSpec for the property
     */
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    /**
     * This function is only intended to be used when implementing new canvas
     * item models, specifically layout container item models such as
     * #GooCanvasTableModel.
     * 
     * It returns all child properties of a canvas item class.
     * @param mclass a #GObjectClass
     * @returns   a newly allocated array of #GParamSpec*. The array must be freed with g_free().
     */
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
}

module Canvas {

    // Signal callback interfaces

    /**
     * Signal callback interface for `item-created`
     */
    interface ItemCreatedSignalCallback {
        (item: CanvasItem, model: CanvasItemModel): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.Canvas

        anchor?: CanvasAnchorType | null
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
        scale?: number | null
        scaleX?: number | null
        scaleY?: number | null
        units?: Gtk.Unit | null
        x1?: number | null
        x2?: number | null
        y1?: number | null
        y2?: number | null
    }

}

interface Canvas extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GooCanvas-3.0.GooCanvas.Canvas

    backgroundColor: string | null
    /**
     * The color to use for the canvas background, specified as a GdkRGBA.
     */
    backgroundColorGdkRgba: Gdk.RGBA
    backgroundColorRgb: number
    x1: number
    x2: number
    y1: number
    y2: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.Canvas

    container: Gtk.Container
    rootItemModel: CanvasItemModel
    rootItem: CanvasItem
    bounds: CanvasBounds
    scaleX: number
    scaleY: number
    scale: number
    anchor: CanvasAnchorType
    idleId: number
    needUpdate: number
    needEntireSubtreeUpdate: number
    integerLayout: number
    automaticBounds: number
    boundsFromOrigin: number
    clearBackground: number
    redrawWhenScrolled: number
    beforeInitialDraw: number
    hscrollPolicy: any
    vscrollPolicy: any
    boundsPadding: number
    pointerItem: CanvasItem
    pointerGrabItem: CanvasItem
    pointerGrabInitialItem: CanvasItem
    pointerGrabButton: number
    focusedItem: CanvasItem
    keyboardGrabItem: CanvasItem
    crossingEvent: Gdk.EventCrossing
    canvasWindow: Gdk.Window
    canvasXOffset: number
    canvasYOffset: number
    hadjustment: Gtk.Adjustment
    vadjustment: Gtk.Adjustment
    freezeCount: number
    tmpWindow: Gdk.Window
    modelToItem: GLib.HashTable
    units: Gtk.Unit
    resolutionX: number
    resolutionY: number
    deviceToPixelsX: number
    deviceToPixelsY: number
    widgetItems: any[]

    // Owm methods of GooCanvas-3.0.GooCanvas.Canvas

    /**
     * Converts the given bounds in the canvas coordinate space to a bounding box
     * in item space. This is useful in the item paint() methods to convert the
     * bounds to be painted to the item's coordinate space.
     * @param item a #GooCanvasItem.
     * @param bounds the bounds in canvas coordinate space, to be converted.
     */
    convertBoundsToItemSpace(item: CanvasItem, bounds: CanvasBounds): void
    /**
     * Converts a coordinate from the given item's coordinate space to the canvas
     * coordinate space, applying all transformation matrices including the
     * item's own transformation matrix, if it has one.
     * @param item a #GooCanvasItem.
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convertFromItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
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
    convertFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from the canvas coordinate space to the given
     * item's coordinate space, applying all transformation matrices including the
     * item's own transformation matrix, if it has one.
     * @param item a #GooCanvasItem.
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convertToItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
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
    convertToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from pixels to the canvas's units,
     * ignoring scaling and ignoring the coordinate space specified
     * in the call to goo_canvas_set_bounds().
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convertUnitsFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Converts a coordinate from the canvas's units to pixels,
     * ignoring scaling and ignoring the coordinate space specified
     * in the call to goo_canvas_set_bounds().
     * @param x a pointer to the x coordinate to convert.
     * @param y a pointer to the y coordinate to convert.
     */
    convertUnitsToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * Creates a cairo context, initialized with the default canvas settings.
     * Note that this context should not be used for drawing. It should only be
     * used for calculating bounds of items.
     * @returns a new cairo context. It should be freed with cairo_destroy().
     */
    createCairoContext(): cairo.Context
    // Has conflict: createItem(model: CanvasItemModel): CanvasItem
    /**
     * Gets the bounds of the canvas, in canvas units.
     * 
     * By default, canvas units are pixels, though the #GooCanvas:units property
     * can be used to change the units to points, inches or millimeters.
     */
    getBounds(): [ /* left */ number, /* top */ number, /* right */ number, /* bottom */ number ]
    /**
     * Gets the default line width, which depends on the current units setting.
     * @returns the default line width of the canvas.
     */
    getDefaultLineWidth(): number
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
    getItem(model: CanvasItemModel): CanvasItem
    /**
     * Gets the item at the given point.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point
     * @param isPointerEvent %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
     * @returns the item found at the given point, or %NULL if no  item was found.
     */
    getItemAt(x: number, y: number, isPointerEvent: boolean): CanvasItem
    /**
     * Gets all items at the given point.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point
     * @param isPointerEvent %TRUE if the "pointer-events" property of  items should be used to determine which parts of the item are tested.
     * @returns a list of  items found at the given point, with the top item at the start of the list,  or %NULL if no items were found. The list must be freed with g_list_free().
     */
    getItemsAt(x: number, y: number, isPointerEvent: boolean): CanvasItem[]
    /**
     * Gets a list of items inside or outside a given area.
     * @param area the area to compare with each item's bounds.
     * @param insideArea %TRUE if items inside `area` should be returned, or %FALSE if  items outside `area` should be returned.
     * @param allowOverlaps %TRUE if items which are partly inside and partly outside  should be returned.
     * @param includeContainers %TRUE if containers should be checked as well as  normal items.
     * @returns a list of  items in the given area, or %NULL if no items are found.  The list should be freed with g_list_free().
     */
    getItemsInArea(area: CanvasBounds, insideArea: boolean, allowOverlaps: boolean, includeContainers: boolean): CanvasItem[]
    /**
     * Gets the root item of the canvas, usually a #GooCanvasGroup.
     * @returns the root item, or %NULL if there is no root item.
     */
    getRootItem(): CanvasItem
    /**
     * Gets the root item model of the canvas.
     * @returns the root item model, or %NULL if there is no root item model.
     */
    getRootItemModel(): CanvasItemModel
    /**
     * Gets the current scale of the canvas.
     * 
     * The scale specifies the magnification factor of the canvas, e.g. if an item
     * has a width of 2 pixels and the scale is set to 3, it will be displayed with
     * a width of 2 x 3 = 6 pixels.
     * @returns the current scale setting.
     */
    getScale(): number
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
    getStaticRootItem(): CanvasItem
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
    getStaticRootItemModel(): CanvasItemModel
    /**
     * Grabs the keyboard focus for the given item.
     * @param item the item to grab the focus.
     */
    grabFocus(item: CanvasItem): void

    // Overloads of grabFocus

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
     * @virtual 
     */
    grabFocus(): void
    /**
     * Attempts to grab the keyboard for the given item.
     * @param item the item to grab the keyboard for.
     * @param ownerEvents %TRUE if keyboard events for this application will be  reported normally, or %FALSE if all keyboard events will be reported with  respect to the grab item.
     * @param time the time of the event that lead to the keyboard grab. This should  come from the relevant #GdkEvent.
     * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
     */
    keyboardGrab(item: CanvasItem, ownerEvents: boolean, time: number): Gdk.GrabStatus
    /**
     * Ungrabs the keyboard, if the given item has the keyboard grab.
     * @param item the item that has the keyboard grab.
     * @param time the time of the event that lead to the keyboard ungrab. This should  come from the relevant #GdkEvent.
     */
    keyboardUngrab(item: CanvasItem, time: number): void
    /**
     * Attempts to grab the pointer for the given item.
     * @param item the item to grab the pointer for.
     * @param eventMask the events to receive during the grab.
     * @param cursor the cursor to display during the grab, or NULL.
     * @param time the time of the event that lead to the pointer grab. This should  come from the relevant #GdkEvent.
     * @returns %GDK_GRAB_SUCCESS if the grab succeeded.
     */
    pointerGrab(item: CanvasItem, eventMask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    /**
     * Ungrabs the pointer, if the given item has the pointer grab.
     * @param item the item that has the grab.
     * @param time the time of the event that lead to the pointer ungrab. This should  come from the relevant #GdkEvent.
     */
    pointerUngrab(item: CanvasItem, time: number): void
    /**
     * This function should only be used by #GooCanvasWidget and subclass
     * implementations.
     * 
     * It registers a widget item with the canvas, so that the canvas can do the
     * necessary actions to move and resize the widget as needed.
     * @param witem a #GooCanvasWidget item.
     */
    registerWidgetItem(witem: CanvasWidget): void
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
     * @param isStatic if the item is static.
     */
    requestItemRedraw(bounds: CanvasBounds, isStatic: boolean): void
    /**
     * This function is only intended to be used by subclasses of #GooCanvas or
     * #GooCanvasItem implementations.
     * 
     * Requests that the given bounds be redrawn. The bounds must be in the canvas
     * coordinate space.
     * @param bounds the bounds to redraw, in device space.
     */
    requestRedraw(bounds: CanvasBounds): void
    /**
     * This function is only intended to be used by subclasses of #GooCanvas or
     * #GooCanvasItem implementations.
     * 
     * It schedules an update of the #GooCanvas. This will be performed in
     * the idle loop, after all pending events have been handled, but before
     * the canvas has been repainted.
     */
    requestUpdate(): void
    /**
     * Scrolls the canvas, placing the given point as close to the top-left of
     * the view as possible.
     * @param left the x coordinate to scroll to.
     * @param top the y coordinate to scroll to.
     */
    scrollTo(left: number, top: number): void
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
    setBounds(left: number, top: number, right: number, bottom: number): void
    /**
     * Sets the root item of the canvas. Any existing canvas items are removed.
     * @param item the root canvas item.
     */
    setRootItem(item: CanvasItem): void
    /**
     * Sets the root item model of the canvas.
     * 
     * A hierarchy of canvas items will be created, corresponding to the hierarchy
     * of items in the model. Any current canvas items will be removed.
     * @param model a #GooCanvasItemModel.
     */
    setRootItemModel(model: CanvasItemModel): void
    /**
     * Sets the scale of the canvas.
     * 
     * The scale specifies the magnification factor of the canvas, e.g. if an item
     * has a width of 2 pixels and the scale is set to 3, it will be displayed with
     * a width of 2 x 3 = 6 pixels.
     * @param scale the new scale setting.
     */
    setScale(scale: number): void
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
    setStaticRootItem(item: CanvasItem): void
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
    setStaticRootItemModel(model: CanvasItemModel): void
    /**
     * This function is only intended to be used when implementing new canvas
     * items.
     * 
     * It should be called in the finalize method of #GooCanvasItem
     * objects, to remove the canvas item from the #GooCanvas's hash table.
     * @param model the item model whose canvas item is being finalized.
     */
    unregisterItem(model: CanvasItemModel): void
    /**
     * This function should only be used by #GooCanvasWidget and subclass
     * implementations.
     * 
     * It unregisters a widget item from the canvas, when the item is no longer in
     * the canvas.
     * @param witem a #GooCanvasWidget item.
     */
    unregisterWidgetItem(witem: CanvasWidget): void
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
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

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
    createItem(model: CanvasItemModel): CanvasItem
    itemCreated(item: CanvasItem, model: CanvasItemModel): void

    // Own signals of GooCanvas-3.0.GooCanvas.Canvas

    connect(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback): number
    on(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-created", callback: Canvas.ItemCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "item-created", model: CanvasItemModel, ...args: any[]): void

    // Class property signals of GooCanvas-3.0.GooCanvas.Canvas

    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-rgb", ...args: any[]): void
    connect(sigName: "notify::x1", callback: (...args: any[]) => void): number
    on(sigName: "notify::x1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x1", ...args: any[]): void
    connect(sigName: "notify::x2", callback: (...args: any[]) => void): number
    on(sigName: "notify::x2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x2", ...args: any[]): void
    connect(sigName: "notify::y1", callback: (...args: any[]) => void): number
    on(sigName: "notify::y1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y1", ...args: any[]): void
    connect(sigName: "notify::y2", callback: (...args: any[]) => void): number
    on(sigName: "notify::y2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y2", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static createPath(commands: CanvasPathCommand[], cr: cairo.Context): void
    static marshalBOOLEANBOXED(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
    static marshalBOOLEANDOUBLEDOUBLEBOOLEANOBJECT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
    static marshalBOOLEANOBJECTBOXED(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
    static marshalVOIDINTINT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
    static marshalVOIDOBJECTOBJECT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
    /**
     * Parses the given SVG path specification string.
     * @param pathData the sequence of path commands, specified as a string using the  same syntax as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable  Vector Graphics (SVG)</ulink> path element.
     * @returns a #GArray of #GooCanvasPathCommand elements.
     */
    static parsePathData(pathData: string | null): CanvasPathCommand[]
}

module CanvasAccessibleFactory {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ObjectFactory.ConstructorProperties {
    }

}

interface CanvasAccessibleFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    __gtype__: number

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

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
}

class CanvasAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    static name: string

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasAccessibleFactory

    constructor(config?: CanvasAccessibleFactory.ConstructorProperties) 
    _init(config?: CanvasAccessibleFactory.ConstructorProperties): void
}

module CanvasEllipse {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasEllipse

        centerX?: number | null
        centerY?: number | null
        height?: number | null
        radiusX?: number | null
        radiusY?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasEllipse extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipse

    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipse

    parentObject: CanvasItemSimple
    ellipseData: CanvasEllipseData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasEllipse

    connect(sigName: "notify::center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::center-x", ...args: any[]): void
    connect(sigName: "notify::center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::center-y", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasEllipse

    constructor(config?: CanvasEllipse.ConstructorProperties) 
    _init(config?: CanvasEllipse.ConstructorProperties): void
}

module CanvasEllipseModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

        centerX?: number | null
        centerY?: number | null
        height?: number | null
        radiusX?: number | null
        radiusY?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasEllipseModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    parentObject: any
    ellipseData: CanvasEllipseData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    connect(sigName: "notify::center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::center-x", ...args: any[]): void
    connect(sigName: "notify::center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::center-y", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasEllipseModel

    constructor(config?: CanvasEllipseModel.ConstructorProperties) 
    _init(config?: CanvasEllipseModel.ConstructorProperties): void
}

module CanvasGrid {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGrid

        borderColor?: string | null
        /**
         * The color to use for the border, specified as a GdkRGBA.
         */
        borderColorGdkRgba?: Gdk.RGBA | null
        borderColorRgba?: number | null
        borderPattern?: any | null
        borderPixbuf?: GdkPixbuf.Pixbuf | null
        borderWidth?: number | null
        height?: number | null
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
        width?: number | null
        x?: number | null
        xOffset?: number | null
        xStep?: number | null
        y?: number | null
        yOffset?: number | null
        yStep?: number | null
    }

}

interface CanvasGrid extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGrid

    borderColor: string | null
    /**
     * The color to use for the border, specified as a GdkRGBA.
     */
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string | null
    /**
     * The color to use for the horizontal grid lines, specified as a GdkRGBA.
     */
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string | null
    /**
     * The color to use for the vertical grid lines, specified as a GdkRGBA.
     */
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGrid

    parentObject: CanvasItemSimple
    gridData: CanvasGridData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGrid

    connect(sigName: "notify::border-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color", ...args: any[]): void
    connect(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color-rgba", ...args: any[]): void
    connect(sigName: "notify::border-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-pattern", ...args: any[]): void
    connect(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-pixbuf", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-horz-grid-lines", ...args: any[]): void
    connect(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-vert-grid-lines", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-lines-on-top", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-offset", ...args: any[]): void
    connect(sigName: "notify::x-step", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-step", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-offset", ...args: any[]): void
    connect(sigName: "notify::y-step", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-step", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasGrid

    constructor(config?: CanvasGrid.ConstructorProperties) 
    _init(config?: CanvasGrid.ConstructorProperties): void
}

module CanvasGridModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasGridModel

        borderColor?: string | null
        borderColorGdkRgba?: Gdk.RGBA | null
        borderColorRgba?: number | null
        borderPattern?: any | null
        borderPixbuf?: GdkPixbuf.Pixbuf | null
        borderWidth?: number | null
        height?: number | null
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
        width?: number | null
        x?: number | null
        xOffset?: number | null
        xStep?: number | null
        y?: number | null
        yOffset?: number | null
        yStep?: number | null
    }

}

interface CanvasGridModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridModel

    borderColor: string | null
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string | null
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string | null
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridModel

    parentObject: any
    gridData: CanvasGridData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGridModel

    connect(sigName: "notify::border-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color", ...args: any[]): void
    connect(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-color-rgba", ...args: any[]): void
    connect(sigName: "notify::border-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-pattern", ...args: any[]): void
    connect(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-pixbuf", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-horz-grid-lines", ...args: any[]): void
    connect(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-vert-grid-lines", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-color-rgba", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-pattern", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-pixbuf", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-lines-on-top", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-offset", ...args: any[]): void
    connect(sigName: "notify::x-step", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-step", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-offset", ...args: any[]): void
    connect(sigName: "notify::y-step", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-step", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroup

    parentObject: CanvasItemSimple
    items: any[]

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGroup

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    parentObject: any
    children: any[]

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasGroupModel

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
        scaleToFit?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasImage extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImage

    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImage

    parentObject: CanvasItemSimple
    imageData: CanvasImageData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasImage

    connect(sigName: "notify::alpha", callback: (...args: any[]) => void): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alpha", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-to-fit", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
        scaleToFit?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasImageModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageModel

    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageModel

    parentObject: any
    imageData: CanvasImageData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasImageModel

    connect(sigName: "notify::alpha", callback: (...args: any[]) => void): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alpha", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-to-fit", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    __gtype__: number

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

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
}

class CanvasItemAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    static name: string

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemAccessibleFactory

    constructor(config?: CanvasItemAccessibleFactory.ConstructorProperties) 
    _init(config?: CanvasItemAccessibleFactory.ConstructorProperties): void
}

module CanvasItemModelSimple {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

        antialias?: CairoAntialias | null
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
        font?: string | null
        fontDesc?: Pango.FontDescription | null
        hintMetrics?: CairoHintMetrics | null
        lineCap?: CairoLineCap | null
        lineDash?: CanvasLineDash | null
        lineJoin?: CairoLineJoin | null
        lineJoinMiterLimit?: number | null
        lineWidth?: number | null
        operator?: CairoOperator | null
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
    clipFillRule: CairoFillRule
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clipPath: string | null
    fillColor: string | null
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string | null
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string | null
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    parentObject: GObject.Object
    /**
     * the parent model.
     * @field 
     */
    parent: CanvasItemModel
    /**
     * data used by the canvas item for viewing the model.
     * @field 
     */
    simpleData: CanvasItemSimpleData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple

    constructor(config?: CanvasItemModelSimple.ConstructorProperties) 
    _init(config?: CanvasItemModelSimple.ConstructorProperties): void
}

module CanvasItemSimple {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple

        antialias?: CairoAntialias | null
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
        font?: string | null
        fontDesc?: Pango.FontDescription | null
        hintMetrics?: CairoHintMetrics | null
        lineCap?: CairoLineCap | null
        lineDash?: CanvasLineDash | null
        lineJoin?: CairoLineJoin | null
        lineJoinMiterLimit?: number | null
        lineWidth?: number | null
        operator?: CairoOperator | null
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
    clipFillRule: CairoFillRule
    /**
     * The sequence of commands describing the clip path of the item, specified
     * as a string using the same syntax
     * as in the <ulink url="http://www.w3.org/Graphics/SVG/">Scalable Vector
     * Graphics (SVG)</ulink> path element.
     */
    clipPath: string | null
    fillColor: string | null
    /**
     * The color to use to paint the interior of the item, specified as a GdkRGBA. To disable painting set the 'fill-pattern' property to NULL.
     */
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string | null
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string | null
    /**
     * The color to use for the item's perimeter, specified as a GdkRGBA. To disable painting set the 'stroke-pattern' property to NULL.
     */
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    __gtype__: number

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
    simpleData: CanvasItemSimpleData
    /**
     * the bounds of the item, in device space.
     * @field 
     */
    bounds: CanvasBounds
    /**
     * if the item needs to recompute its bounds and redraw.
     * @field 
     */
    needUpdate: number
    /**
     * if all descendants need to be updated.
     * @field 
     */
    needEntireSubtreeUpdate: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple.
     * 
     * It is used as a callback for the "changed" signal of the item models.
     * It requests an update or redraw of the item as appropriate.
     * @param recomputeBounds if the item's bounds need to be recomputed.
     */
    changed(recomputeBounds: boolean): void
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple.
     * 
     * It checks if the given point is in the current path, using the item's
     * style settings.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point.
     * @param cr a cairo context.
     * @param pointerEvents specifies which parts of the path to check.
     * @returns %TRUE if the given point is in the current path.
     */
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple,
     * typically in their update() or get_requested_area() methods.
     * 
     * It ensures that the item's style is setup correctly. If the item has its
     * own #GooCanvasStyle it makes sure the parent is set correctly. If it
     * doesn't have its own style it uses the parent item's style.
     */
    checkStyle(): void
    /**
     * Gets the item's line width.
     * @returns the item's line width.
     */
    getLineWidth(): number
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
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple.
     * 
     * It paints the current path, using the item's style settings.
     * @param cr a cairo context.
     */
    paintPath(cr: cairo.Context): void
    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * This function is intended to be used by subclasses of #GooCanvasItemSimple,
     * typically in their update() or get_requested_area() methods.
     * 
     * It converts the item's bounds to a bounding box in the canvas (device)
     * coordinate space.
     * @param cr a cairo context.
     * @param bounds the bounds of the item, in the item's coordinate space.
     */
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
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
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void

    // Own virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    simpleCreatePath(cr: cairo.Context): void
    simpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    simplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    simpleUpdate(cr: cairo.Context): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasItemSimple

    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPath

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    pathData: CanvasPathData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPath

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathModel

    parentObject: any
    pathData: CanvasPathData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPathModel

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPathModel

    constructor(config?: CanvasPathModel.ConstructorProperties) 
    _init(config?: CanvasPathModel.ConstructorProperties): void
}

module CanvasPolyline {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPolyline

        arrowLength?: number | null
        arrowTipLength?: number | null
        arrowWidth?: number | null
        closePath?: boolean | null
        endArrow?: boolean | null
        height?: number | null
        points?: CanvasPoints | null
        startArrow?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasPolyline extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolyline

    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolyline

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    polylineData: CanvasPolylineData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPolyline

    connect(sigName: "notify::arrow-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-length", ...args: any[]): void
    connect(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-tip-length", ...args: any[]): void
    connect(sigName: "notify::arrow-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-width", ...args: any[]): void
    connect(sigName: "notify::close-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-path", ...args: any[]): void
    connect(sigName: "notify::end-arrow", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-arrow", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::points", callback: (...args: any[]) => void): number
    on(sigName: "notify::points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::points", ...args: any[]): void
    connect(sigName: "notify::start-arrow", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-arrow", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPolyline

    constructor(config?: CanvasPolyline.ConstructorProperties) 
    _init(config?: CanvasPolyline.ConstructorProperties): void
}

module CanvasPolylineModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

        arrowLength?: number | null
        arrowTipLength?: number | null
        arrowWidth?: number | null
        closePath?: boolean | null
        endArrow?: boolean | null
        height?: number | null
        points?: CanvasPoints | null
        startArrow?: boolean | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasPolylineModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    parentObject: any
    polylineData: CanvasPolylineData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    connect(sigName: "notify::arrow-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-length", ...args: any[]): void
    connect(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-tip-length", ...args: any[]): void
    connect(sigName: "notify::arrow-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-width", ...args: any[]): void
    connect(sigName: "notify::close-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-path", ...args: any[]): void
    connect(sigName: "notify::end-arrow", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-arrow", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::points", callback: (...args: any[]) => void): number
    on(sigName: "notify::points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::points", ...args: any[]): void
    connect(sigName: "notify::start-arrow", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-arrow", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasPolylineModel

    constructor(config?: CanvasPolylineModel.ConstructorProperties) 
    _init(config?: CanvasPolylineModel.ConstructorProperties): void
}

module CanvasRect {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItem.ConstructorProperties, CanvasItemSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasRect

        height?: number | null
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
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasRect extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRect

    height: number
    radiusBottomLeftX: number
    radiusBottomLeftY: number
    radiusBottomRightX: number
    radiusBottomRightY: number
    radiusTopLeftX: number
    radiusTopLeftY: number
    radiusTopRightX: number
    radiusTopRightY: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRect

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    rectData: CanvasRectData

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasRect

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasRect

    constructor(config?: CanvasRect.ConstructorProperties) 
    _init(config?: CanvasRect.ConstructorProperties): void
}

module CanvasRectModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasItemModelSimple.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasRectModel

        height?: number | null
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
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasRectModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectModel

    height: number
    radiusBottomLeftX: number
    radiusBottomLeftY: number
    radiusBottomRightX: number
    radiusBottomRightY: number
    radiusTopLeftX: number
    radiusTopLeftY: number
    radiusTopRightX: number
    radiusTopRightY: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectModel

    parentObject: any
    rectData: CanvasRectData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasRectModel

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-left-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-left-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-right-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-bottom-right-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-bottom-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-left-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-left-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-left-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-left-y", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-right-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-right-x", ...args: any[]): void
    connect(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-top-right-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-top-right-y", ...args: any[]): void
    connect(sigName: "notify::radius-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-x", ...args: any[]): void
    connect(sigName: "notify::radius-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::radius-y", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasStyle

    __gtype__: number

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
    getParent(): CanvasStyle
    /**
     * Gets the value of a property.
     * 
     * This searches though all the #GooCanvasStyle's own list of property settings
     * and also all ancestor #GooCanvasStyle objects.
     * 
     * Note that it returns a pointer to the internal #GValue setting, which should
     * not be changed.
     * @param propertyId the property identifier.
     * @returns the property value, or %NULL if it isn't set.
     */
    getProperty(propertyId: GLib.Quark): any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Sets the standard cairo fill options using the given style.
     * @param cr a cairo context.
     * @returns %TRUE if a paint source is set, or %FALSE if the fill should be skipped.
     */
    setFillOptions(cr: cairo.Context): boolean
    /**
     * Sets the parent of the style.
     * @param parent the new parent.
     */
    setParent(parent: CanvasStyle): void
    /**
     * Sets a property in the style, replacing any current setting.
     * 
     * Note that this will override the property setting in ancestor
     * #GooCanvasStyle objects.
     * @param propertyId the property identifier.
     * @param value the value of the property.
     */
    setProperty(propertyId: GLib.Quark, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets the standard cairo stroke options using the given style.
     * @param cr a cairo context.
     * @returns %TRUE if a paint source is set, or %FALSE if the stroke should be skipped.
     */
    setStrokeOptions(cr: cairo.Context): boolean

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasStyle

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

    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTable

    parent: CanvasGroup & CanvasItem & CanvasItem
    tableData: CanvasTableData

    // Conflicting methods

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTable

    connect(sigName: "notify::column-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous-columns", ...args: any[]): void
    connect(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous-rows", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-border-spacing", ...args: any[]): void
    connect(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-border-spacing", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Constructors of GooCanvas-3.0.GooCanvas.CanvasTable

    constructor(config?: CanvasTable.ConstructorProperties) 
    _init(config?: CanvasTable.ConstructorProperties): void
}

module CanvasTableModel {

    // Constructor properties interface

    interface ConstructorProperties extends CanvasItemModel.ConstructorProperties, CanvasGroupModel.ConstructorProperties {

        // Own constructor properties of GooCanvas-3.0.GooCanvas.CanvasTableModel

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

    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableModel

    parentObject: any
    tableData: CanvasTableData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTableModel

    connect(sigName: "notify::column-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous-columns", ...args: any[]): void
    connect(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homogeneous-rows", ...args: any[]): void
    connect(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horz-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vert-grid-line-width", ...args: any[]): void
    connect(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-border-spacing", ...args: any[]): void
    connect(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-border-spacing", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
        useMarkup?: boolean | null
        width?: number | null
        wrap?: Pango.WrapMode | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasText extends CanvasItem {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasText

    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string | null
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasText

    parent: CanvasItemSimple & CanvasItem & CanvasItem
    textData: CanvasTextData
    layoutWidth: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasText

    /**
     * Gets the natural extents of the text, in the text item's coordinate space.
     * 
     * The final extents of the text may be different, if the text item is placed
     * in a layout container such as #GooCanvasTable.
     */
    getNaturalExtents(): [ /* inkRect */ Pango.Rectangle, /* logicalRect */ Pango.Rectangle ]

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasText

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::anchor", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (...args: any[]) => void): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
        useMarkup?: boolean | null
        width?: number | null
        wrap?: Pango.WrapMode | null
        x?: number | null
        y?: number | null
    }

}

interface CanvasTextModel extends CanvasItemModel {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextModel

    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string | null
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextModel

    parentObject: any
    textData: CanvasTextData

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasTextModel

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::anchor", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (...args: any[]) => void): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidget

    __gtype__: number

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasWidget

    parentObject: CanvasItemSimple
    widget: Gtk.Widget
    x: number
    y: number
    width: number
    height: number
    anchor: CanvasAnchorType

    // Conflicting methods

    /**
     * This function should be called by subclasses of #GooCanvasItemSimple
     * in their set_model() method.
     * @param model the model that `item` will view.
     */
    setModel(model: CanvasItemModel): void

    // Overloads of setModel

    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void
    /**
     * Sets the model of the given canvas item.
     * @virtual 
     * @param model a #GooCanvasItemModel.
     */
    setModel(model: CanvasItemModel): void

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasWidget

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::antialias", callback: (...args: any[]) => void): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::antialias", ...args: any[]): void
    connect(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-fill-rule", ...args: any[]): void
    connect(sigName: "notify::clip-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-path", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color-rgba", ...args: any[]): void
    connect(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pattern", ...args: any[]): void
    connect(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-pixbuf", ...args: any[]): void
    connect(sigName: "notify::fill-rule", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-rule", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-metrics", ...args: any[]): void
    connect(sigName: "notify::line-cap", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-cap", ...args: any[]): void
    connect(sigName: "notify::line-dash", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-dash", ...args: any[]): void
    connect(sigName: "notify::line-join", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join", ...args: any[]): void
    connect(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-join-miter-limit", ...args: any[]): void
    connect(sigName: "notify::line-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::line-width", ...args: any[]): void
    connect(sigName: "notify::operator", callback: (...args: any[]) => void): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operator", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-gdk-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color-rgba", ...args: any[]): void
    connect(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pattern", ...args: any[]): void
    connect(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-pixbuf", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pointer-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pointer-events", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visibility-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

    __gtype__: number

    // Class property signals of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

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
}

class CanvasWidgetAccessibleFactory extends Atk.ObjectFactory {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasWidgetAccessibleFactory

    static name: string

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

    createItem: (canvas: Canvas, model: CanvasItemModel) => CanvasItem
    itemCreated: (canvas: Canvas, item: CanvasItem, model: CanvasItemModel) => void
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

    parentClass: CanvasItemSimpleClass
}

abstract class CanvasEllipseClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseClass

    static name: string
}

interface CanvasEllipseData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseData

    centerX: number
    centerY: number
    radiusX: number
    radiusY: number
}

class CanvasEllipseData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseData

    static name: string
}

interface CanvasEllipseModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModelClass

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasEllipseModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModelClass

    static name: string
}

interface CanvasGridClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridClass

    parentClass: CanvasItemSimpleClass
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
    xStep: number
    yStep: number
    xOffset: number
    yOffset: number
    horzGridLineWidth: number
    vertGridLineWidth: number
    horzGridLinePattern: cairo.Pattern
    vertGridLinePattern: cairo.Pattern
    borderWidth: number
    borderPattern: cairo.Pattern
    showHorzGridLines: number
    showVertGridLines: number
    vertGridLinesOnTop: number
}

class CanvasGridData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridData

    static name: string
}

interface CanvasGridModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGridModelClass

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasGridModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGridModelClass

    static name: string
}

interface CanvasGroupClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupClass

    parentClass: CanvasItemSimpleClass
}

abstract class CanvasGroupClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupClass

    static name: string
}

interface CanvasGroupModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasGroupModelClass

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasGroupModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasGroupModelClass

    static name: string
}

interface CanvasImageClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasImageClass

    parentClass: CanvasItemSimpleClass
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

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasImageModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasImageModelClass

    static name: string
}

interface CanvasItemIface {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemIface

    getCanvas: (item: CanvasItem) => Canvas
    setCanvas: (item: CanvasItem, canvas: Canvas) => void
    getNChildren: (item: CanvasItem) => number
    getChild: (item: CanvasItem, childNum: number) => CanvasItem
    requestUpdate: (item: CanvasItem) => void
    addChild: (item: CanvasItem, child: CanvasItem, position: number) => void
    moveChild: (item: CanvasItem, oldPosition: number, newPosition: number) => void
    removeChild: (item: CanvasItem, childNum: number) => void
    getChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    setChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    getTransformForChild: (item: CanvasItem, child: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getParent: (item: CanvasItem) => CanvasItem
    setParent: (item: CanvasItem, parent: CanvasItem) => void
    getBounds: (item: CanvasItem) => /* bounds */ CanvasBounds
    getItemsAt: (item: CanvasItem, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]) => CanvasItem[]
    update: (item: CanvasItem, entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds) => void
    paint: (item: CanvasItem, cr: cairo.Context, bounds: CanvasBounds, scale: number) => void
    getRequestedArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds) => boolean
    allocateArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number) => void
    getTransform: (item: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    setTransform: (item: CanvasItem, transform: cairo.Matrix | null) => void
    getStyle: (item: CanvasItem) => CanvasStyle
    setStyle: (item: CanvasItem, style: CanvasStyle) => void
    isVisible: (item: CanvasItem) => boolean
    getRequestedHeight: (item: CanvasItem, cr: cairo.Context, width: number) => number
    getModel: (item: CanvasItem) => CanvasItemModel
    setModel: (item: CanvasItem, model: CanvasItemModel) => void
    enterNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    leaveNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    motionNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventMotion) => boolean
    buttonPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    buttonReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    focusInEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    focusOutEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    keyPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    keyReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    grabBrokenEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventGrabBroken) => boolean
    childNotify: (item: CanvasItem, pspec: GObject.ParamSpec) => void
    queryTooltip: (item: CanvasItem, x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip) => boolean
    getIsStatic: (item: CanvasItem) => boolean
    setIsStatic: (item: CanvasItem, isStatic: boolean) => void
    animationFinished: (item: CanvasItem, stopped: boolean) => void
    scrollEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventScroll) => boolean
    getRequestedAreaForWidth: (item: CanvasItem, cr: cairo.Context, width: number, requestedArea: CanvasBounds) => boolean
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

    getNChildren: (model: CanvasItemModel) => number
    getChild: (model: CanvasItemModel, childNum: number) => CanvasItemModel
    addChild: (model: CanvasItemModel, child: CanvasItemModel, position: number) => void
    moveChild: (model: CanvasItemModel, oldPosition: number, newPosition: number) => void
    removeChild: (model: CanvasItemModel, childNum: number) => void
    getChildProperty: (model: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    setChildProperty: (item: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    getParent: (model: CanvasItemModel) => CanvasItemModel
    setParent: (model: CanvasItemModel, parent: CanvasItemModel) => void
    getTransform: (model: CanvasItemModel, transform: cairo.Matrix) => boolean
    setTransform: (model: CanvasItemModel, transform: cairo.Matrix | null) => void
    getStyle: (model: CanvasItemModel) => CanvasStyle
    setStyle: (model: CanvasItemModel, style: CanvasStyle) => void
    childAdded: (model: CanvasItemModel, childNum: number) => void
    childMoved: (model: CanvasItemModel, oldChildNum: number, newChildNum: number) => void
    childRemoved: (model: CanvasItemModel, childNum: number) => void
    changed: (model: CanvasItemModel, recomputeBounds: boolean) => void
    childNotify: (model: CanvasItemModel, pspec: GObject.ParamSpec) => void
    animationFinished: (model: CanvasItemModel, stopped: boolean) => void
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

    parentClass: GObject.ObjectClass
}

abstract class CanvasItemModelSimpleClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimpleClass

    static name: string
}

interface CanvasItemSimpleClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasItemSimpleClass

    simpleCreatePath: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simpleUpdate: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simplePaint: (simple: CanvasItemSimple, cr: cairo.Context, bounds: CanvasBounds) => void
    simpleIsItemAt: (simple: CanvasItemSimple, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean) => boolean
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
    clipPathCommands: any[]
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
    visibilityThreshold: number
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
    pointerEvents: number
    /**
     * if the item can take the keyboard focus.
     * @field 
     */
    canFocus: number
    /**
     * if the item has its own style, rather than using its parent's.
     * @field 
     */
    ownStyle: number
    /**
     * the #cairo_fill_rule_t setting specifying the fill rule
     *  used for the clip path.
     * @field 
     */
    clipFillRule: number
    /**
     * if the item is static.
     * @field 
     */
    isStatic: number
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
    refCount: number
    /**
     * the number of dashes and gaps between them.
     * @field 
     */
    numDashes: number
    /**
     * the sizes of each dash and gap.
     * @field 
     */
    dashes: number
    /**
     * the start offset into the dash pattern.
     * @field 
     */
    dashOffset: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasLineDash

    /**
     * Increments the reference count of the dash pattern.
     * @returns the dash pattern.
     */
    ref(): CanvasLineDash
    /**
     * Sets the start offset into the dash pattern.
     * @param dashOffset the start offset into the dash pattern.
     */
    setOffset(dashOffset: number): void
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

    parentClass: CanvasItemSimpleClass
}

abstract class CanvasPathClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathClass

    static name: string
}

interface CanvasPathData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathData

    pathCommands: any[]
}

class CanvasPathData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPathData

    static name: string
}

interface CanvasPathModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPathModelClass

    parentClass: CanvasItemModelSimpleClass
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
    numPoints: number
    /**
     * the reference count of the struct.
     * @field 
     */
    refCount: number

    // Owm methods of GooCanvas-3.0.GooCanvas.CanvasPoints

    /**
     * Gets the coordinates of a point in the #GooCanvasPoints struct.
     * @param idx index of point to get.
     */
    getPoint(idx: number): [ /* x */ number, /* y */ number ]
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
    setPoint(idx: number, x: number, y: number): void
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
     * @param numPoints the number of points to create space for.
     * @returns a new #GooCanvasPoints struct.
     */
    constructor(numPoints: number) 
    /**
     * Creates a new #GooCanvasPoints struct with space for the given number of
     * points. It should be freed with goo_canvas_points_unref().
     * @constructor 
     * @param numPoints the number of points to create space for.
     * @returns a new #GooCanvasPoints struct.
     */
    static new(numPoints: number): CanvasPoints
}

interface CanvasPolylineArrowData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineArrowData

    arrowWidth: number
    arrowLength: number
    arrowTipLength: number
    lineStart: number[]
    lineEnd: number[]
    startArrowCoords: number[]
    endArrowCoords: number[]
}

class CanvasPolylineArrowData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineArrowData

    static name: string
}

interface CanvasPolylineClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineClass

    parentClass: CanvasItemSimpleClass
}

abstract class CanvasPolylineClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineClass

    static name: string
}

interface CanvasPolylineData {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineData

    coords: number
    arrowData: CanvasPolylineArrowData
    numPoints: number
    closePath: number
    startArrow: number
    endArrow: number
    reconfigureArrows: number
}

class CanvasPolylineData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineData

    static name: string
}

interface CanvasPolylineModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModelClass

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasPolylineModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModelClass

    static name: string
}

interface CanvasRectClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectClass

    parentClass: CanvasItemSimpleClass
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
    radiusX: number
    radiusY: number
    radiusTopLeftX: number
    radiusTopLeftY: number
    radiusTopRightX: number
    radiusTopRightY: number
    radiusBottomRightX: number
    radiusBottomRightY: number
    radiusBottomLeftX: number
    radiusBottomLeftY: number
}

class CanvasRectData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectData

    static name: string
}

interface CanvasRectModelClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasRectModelClass

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasRectModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasRectModelClass

    static name: string
}

interface CanvasStyleClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasStyleClass

    parentClass: GObject.ObjectClass
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

    parentClass: CanvasGroupClass
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
    borderWidth: number
    children: any[]
    layoutData: CanvasTableLayoutData
}

class CanvasTableData {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableData

    static name: string
}

interface CanvasTableDimension {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTableDimension

    size: number
    defaultSpacing: number
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

    parentClass: CanvasGroupModelClass
}

abstract class CanvasTableModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTableModelClass

    static name: string
}

interface CanvasTextClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasTextClass

    parentClass: CanvasItemSimpleClass
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
    useMarkup: number
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

    parentClass: CanvasItemModelSimpleClass
}

abstract class CanvasTextModelClass {

    // Own properties of GooCanvas-3.0.GooCanvas.CanvasTextModelClass

    static name: string
}

interface CanvasWidgetClass {

    // Own fields of GooCanvas-3.0.GooCanvas.CanvasWidgetClass

    parentClass: CanvasItemSimpleClass
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

}

export default GooCanvas;