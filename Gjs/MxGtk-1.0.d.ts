/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * MxGtk-1.0
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-2.0';
import type Gdk from './Gdk-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace MxGtk {

interface Frame_ConstructProps extends Gtk.Frame_ConstructProps {
}
class Frame {
    /* Properties of Gtk-2.0.Gtk.Frame */
    label: string
    shadow: Gtk.ShadowType
    /* Properties of Gtk-2.0.Gtk.Container */
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-2.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    /**
     * Whether or not the widget is double buffered.
     */
    double_buffered: boolean
    events: Gdk.EventMask
    extension_events: Gdk.ExtensionMode
    has_default: boolean
    has_focus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    has_tooltip: boolean
    height_request: number
    is_focus: boolean
    no_show_all: boolean
    receives_default: boolean
    sensitive: boolean
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     */
    tooltip_text: string
    visible: boolean
    width_request: number
    /* Properties of Gtk-2.0.Gtk.Object */
    user_data: object
    /* Fields of Gtk-2.0.Gtk.Frame */
    bin: Gtk.Bin
    label_widget: Gtk.Widget
    shadow_type: number
    label_xalign: number
    label_yalign: number
    child_allocation: Gtk.Allocation
    /* Fields of Gtk-2.0.Gtk.Bin */
    container: Gtk.Container
    child: Gtk.Widget
    /* Fields of Gtk-2.0.Gtk.Container */
    widget: Gtk.Widget
    focus_child: Gtk.Widget
    border_width: number
    /* Fields of Gtk-2.0.Gtk.Widget */
    object: Gtk.Object
    private_flags: number
    state: number
    saved_state: number
    name: string
    style: Gtk.Style
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    window: Gdk.Window
    parent: Gtk.Widget
    /* Fields of Gtk-2.0.Gtk.Object */
    parent_instance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-2.0.Gtk.Frame */
    /**
     * If the frame's label widget is a #GtkLabel, returns the
     * text in the label widget. (The frame will have a #GtkLabel
     * for the label widget if a non-%NULL argument was passed
     * to gtk_frame_new().)
     */
    get_label(): string
    /**
     * Retrieves the X and Y alignment of the frame's label. See
     * gtk_frame_set_label_align().
     */
    get_label_align(): [ /* xalign */ number | null, /* yalign */ number | null ]
    /**
     * Retrieves the label widget for the frame. See
     * gtk_frame_set_label_widget().
     */
    get_label_widget(): Gtk.Widget
    /**
     * Retrieves the shadow type of the frame. See
     * gtk_frame_set_shadow_type().
     */
    get_shadow_type(): Gtk.ShadowType
    /**
     * Sets the text of the label. If `label` is %NULL,
     * the current label is removed.
     * @param label the text to use as the label of the frame
     */
    set_label(label?: string | null): void
    /**
     * Sets the alignment of the frame widget's label. The
     * default values for a newly created frame are 0.0 and 0.5.
     * @param xalign The position of the label along the top edge   of the widget. A value of 0.0 represents left alignment;   1.0 represents right alignment.
     * @param yalign The y alignment of the label. A value of 0.0 aligns under   the frame; 1.0 aligns above the frame. If the values are exactly   0.0 or 1.0 the gap in the frame won't be painted because the label   will be completely above or below the frame.
     */
    set_label_align(xalign: number, yalign: number): void
    /**
     * Sets the label widget for the frame. This is the widget that
     * will appear embedded in the top edge of the frame as a
     * title.
     * @param label_widget the new label widget
     */
    set_label_widget(label_widget: Gtk.Widget): void
    /**
     * Sets the shadow type for `frame`.
     * @param type the new #GtkShadowType
     */
    set_shadow_type(type: Gtk.ShadowType): void
    /* Methods of Gtk-2.0.Gtk.Bin */
    /**
     * Gets the child of the #GtkBin, or %NULL if the bin contains
     * no child widget. The returned widget does not have a reference
     * added, so you do not need to unref it.
     */
    get_child(): Gtk.Widget
    /* Methods of Gtk-2.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkTable, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_table_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can't place the same widget inside two different containers.
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    check_resize(): void
    /**
     * Gets the value of a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to get
     * @param value a location to return the value
     */
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Sets a child property for `child` and `container`.
     * @param child a widget which is a child of `container`
     * @param property_name the name of the property to set
     * @param value the value to set the property to
     */
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    child_type(): GObject.Type
    /**
     * Invokes `callback` on each non-internal child of `container`. See
     * gtk_container_forall() for details on what constitutes an
     * "internal" child.  Most applications should use
     * gtk_container_foreach(), rather than gtk_container_forall().
     * @param callback a callback
     */
    foreach(callback: Gtk.Callback): void
    /**
     * Retrieves the border width of the container. See
     * gtk_container_set_border_width().
     */
    get_border_width(): number
    /**
     * Returns the container's non-internal children. See
     * gtk_container_forall() for details on what constitutes an "internal" child.
     */
    get_children(): Gtk.Widget[]
    /**
     * Retrieves the focus chain of the container, if one has been
     * set explicitly. If no focus chain has been explicitly
     * set, GTK+ computes the focus chain based on the positions
     * of the children. In that case, GTK+ stores %NULL in
     * `focusable_widgets` and returns %FALSE.
     */
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    /**
     * Returns the current focus child widget inside `container`. This is not the
     * currently focused widget. That can be obtained by calling
     * gtk_window_get_focus().
     */
    get_focus_child(): Gtk.Widget
    /**
     * Retrieves the horizontal focus adjustment for the container. See
     * gtk_container_set_focus_hadjustment ().
     */
    get_focus_hadjustment(): Gtk.Adjustment
    /**
     * Retrieves the vertical focus adjustment for the container. See
     * gtk_container_set_focus_vadjustment().
     */
    get_focus_vadjustment(): Gtk.Adjustment
    /**
     * Returns the resize mode for the container. See
     * gtk_container_set_resize_mode ().
     */
    get_resize_mode(): Gtk.ResizeMode
    /**
     * When a container receives an expose event, it must send synthetic
     * expose events to all children that don't have their own #GdkWindows.
     * This function provides a convenient way of doing this. A container,
     * when it receives an expose event, calls gtk_container_propagate_expose()
     * once for each child, passing in the event the container received.
     * 
     * gtk_container_propagate_expose() takes care of deciding whether
     * an expose event needs to be sent to the child, intersecting
     * the event's area with the child area, and sending the event.
     * 
     * In most cases, a container can simply either simply inherit the
     * #GtkWidget::expose implementation from #GtkContainer, or, do some drawing
     * and then chain to the ::expose implementation from #GtkContainer.
     * 
     * Note that the ::expose-event signal has been replaced by a ::draw
     * signal in GTK+ 3, and consequently, gtk_container_propagate_expose()
     * has been replaced by gtk_container_propagate_draw().
     * The <link linkend="http://library.gnome.org/devel/gtk3/3.0/gtk-migrating-2-to-3.html">GTK+ 3 migration guide</link>
     * for hints on how to port from ::expose-event to ::draw.
     * @param child a child of `container`
     * @param event a expose event sent to container
     */
    propagate_expose(child: Gtk.Widget, event: Gdk.EventExpose): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it while it's not inside
     * a container, using g_object_ref(). If you don't want to use `widget`
     * again it's usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    resize_children(): void
    /**
     * Sets the border width of the container.
     * 
     * The border width of a container is the amount of space to leave
     * around the outside of the container. The only exception to this is
     * #GtkWindow; because toplevel windows can't leave space outside,
     * they leave the space inside. The border is added on all sides of
     * the container. To add space to only one side, one approach is to
     * create a #GtkAlignment widget, call gtk_widget_set_size_request()
     * to give it a size, and place it on the side of the container as
     * a spacer.
     * @param border_width amount of blank space to leave <emphasis>outside</emphasis>   the container. Valid values are in the range 0-65535 pixels.
     */
    set_border_width(border_width: number): void
    /**
     * Sets a focus chain, overriding the one computed automatically by GTK+.
     * 
     * In principle each widget in the chain should be a descendant of the
     * container, but this is not enforced by this method, since it's allowed
     * to set the focus chain before you pack the widgets, or have a widget
     * in the chain that isn't always packed. The necessary checks are done
     * when the focus chain is actually traversed.
     * @param focusable_widgets      the new focus chain
     */
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manualy set the focus to a specific widget.
     * @param child a #GtkWidget, or %NULL
     */
    set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a child
     * of the container is focused, the adjustment is scrolled to show that
     * widget. This function sets the horizontal alignment.
     * See gtk_scrolled_window_get_hadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_vadjustment() for setting
     * the vertical adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus is   moved among the descendents of `container`
     */
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Hooks up an adjustment to focus handling in a container, so when a
     * child of the container is focused, the adjustment is scrolled to
     * show that widget. This function sets the vertical alignment. See
     * gtk_scrolled_window_get_vadjustment() for a typical way of obtaining
     * the adjustment and gtk_container_set_focus_hadjustment() for setting
     * the horizontal adjustment.
     * 
     * The adjustments have to be in pixel units and in the same coordinate
     * system as the allocation for immediate children of the container.
     * @param adjustment an adjustment which should be adjusted when the focus   is moved among the descendents of `container`
     */
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    /**
     * Sets the `reallocate_redraws` flag of the container to the given value.
     * 
     * Containers requesting reallocation redraws get automatically
     * redrawn if any of their children changed allocation.
     * @param needs_redraws the new value for the container's `reallocate_redraws` flag
     */
    set_reallocate_redraws(needs_redraws: boolean): void
    /**
     * Sets the resize mode for the container.
     * 
     * The resize mode of a container determines whether a resize request
     * will be passed to the container's parent, queued for later execution
     * or executed immediately.
     * @param resize_mode the new resize mode
     */
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    /**
     * Removes a focus chain explicitly set with gtk_container_set_focus_chain().
     */
    unset_focus_chain(): void
    /* Methods of Gtk-2.0.Gtk.Widget */
    /**
     * For widgets that can be "activated" (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget's toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_RUN_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accel_signal widget signal to emit on accelerator activation
     * @param accel_group accel group for this widget, added to its toplevel
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() for details.
     * @param events an event mask, see #GdkEventMask
     */
    add_events(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn't overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    can_activate_accel(signal_id: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you'd use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don't modify the current focus location.
     * 
     * This function replaces gtk_container_focus() from GTK+ 1.2.
     * It was necessary to check that the child was visible, sensitive,
     * and focusable before calling gtk_container_focus().
     * gtk_widget_child_focus() returns %FALSE if the widget is not
     * currently in a focusable state, so there's no need for those checks.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * <link linkend="child-properties">child property</link> `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * @param child_property the name of a child property installed on the                  class of `widget<`!-- -->'s parent
     */
    child_notify(child_property: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget's type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget. See also gtk_widget_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, in order to
     * notify the layout of changes to the base direction or font of this
     * widget, you must call pango_layout_context_changed() in response to
     * the #GtkWidget::style-set and #GtkWidget::direction-changed signals
     * for the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    create_pango_layout(text: string): Pango.Layout
    /**
     * Destroys a widget. Equivalent to gtk_object_destroy(), except that
     * you don't have to cast the widget to #GtkObject. When a widget is
     * destroyed, it will break any references it holds to other objects.
     * If the widget is inside a container, the widget will be removed
     * from the container. If the widget is a toplevel (derived from
     * #GtkWindow), it will be removed from the list of toplevels, and the
     * reference GTK+ holds to it will be removed. Removing a
     * widget from its container or the list of toplevels results in the
     * widget being finalized, unless you've added additional references
     * to the widget with g_object_ref().
     * 
     * In most cases, only toplevel widgets (windows) require explicit
     * destruction, because when you destroy a toplevel its children will
     * be destroyed as well.
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It's intended to be used as a callback connected to the
     * "destroy" signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widget_pointer address of a variable that contains `widget`
     */
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    /**
     * In GTK+ 1.2, this function would immediately render the
     * region `area` of a widget, by invoking the virtual draw method of a
     * widget. In GTK+ 2.0, the draw method is gone, and instead
     * gtk_widget_draw() simply invalidates the specified region of the
     * widget, then updates the invalid region of the widget immediately.
     * Usually you don't want to update the region immediately for
     * performance reasons, so in general gtk_widget_queue_draw_area() is
     * a better choice if you want to draw a region of a widget.
     * @param area area to draw
     */
    draw(area: Gdk.Rectangle): void
    /**
     * Ensures that `widget` has a style (`widget->`style). Not a very useful
     * function; most of the time, if you want the style, the widget is
     * realized, and realized widgets are guaranteed to have a style
     * already.
     */
    ensure_style(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    error_bell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don't use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don't synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freeze_child_notify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If no accessibility library is loaded (i.e. no ATK implementation library is
     * loaded via <envar>GTK_MODULES</envar> or via another application library,
     * such as libgnome), then this #AtkObject instance may be a no-op. Likewise,
     * if no class-specific #AtkObject implementation is available for the widget
     * instance in question, it will inherit an #AtkObject implementation from the
     * first ancestor class for which such an implementation is defined.
     * 
     * The documentation of the <ulink url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the widget's allocation.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * <literal>gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)</literal> gets
     * the first #GtkBox that's an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::expose-event handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    get_app_paintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    get_can_default(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    get_can_focus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the "size_request" method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     * @param requisition a #GtkRequisition to be filled in
     */
    get_child_requisition(requisition: Gtk.Requisition): void
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Gets the colormap that will be used to render `widget`. No reference will
     * be added to the returned colormap; it should not be unreferenced.
     */
    get_colormap(): Gdk.Colormap
    /**
     * Obtains the composite name of a widget.
     */
    get_composite_name(): string
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    get_double_buffered(): boolean
    /**
     * Returns the event mask for the widget (a bitfield containing flags
     * from the #GdkEventMask enumeration). These are the events that the widget
     * will receive.
     */
    get_events(): number
    /**
     * Retrieves the extension events the widget will receive; see
     * gdk_input_set_extension_events().
     */
    get_extension_events(): Gdk.ExtensionMode
    /**
     * Returns the current value of the has-tooltip property.  See
     * GtkWidget:has-tooltip for more information.
     */
    get_has_tooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    get_has_window(): boolean
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    get_modifier_style(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    get_name(): string
    /**
     * Returns the current value of the GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all() and
     * gtk_widget_hide_all() will affect this widget.
     */
    get_no_show_all(): boolean
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget's attributes.
     * 
     * If you create and keep a #PangoLayout using this context, you must
     * deal with changes to the context by calling pango_layout_context_changed()
     * on the layout in response to the #GtkWidget::style-set and
     * #GtkWidget::direction-changed signals for the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    get_parent(): Gtk.Widget
    /**
     * Gets `widget'`s parent window.
     */
    get_parent_window(): Gdk.Window
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that are not
     * #GTK_NO_WINDOW widgets, and are relative to `widget->`allocation.x,
     * `widget->`allocation.y for widgets that are #GTK_NO_WINDOW widgets.
     */
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is alyways treated as default widget
     * withing its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    get_receives_default(): boolean
    /**
     * Retrieves the widget's requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget's requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    get_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    get_root_window(): Gdk.Window
    /**
     * Get the #GdkScreen from the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow
     * at the top.
     * 
     * In general, you should only create screen specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_screen(): Gdk.Screen
    /**
     * Returns the widget's sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget's sensitivity. See gtk_widget_is_sensitive().
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings (global property
     * settings, RC file information, etc) used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used intead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually use, call gtk_widget_size_request() instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget's state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_markup(): string
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_text(): string
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    get_tooltip_window(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * <literal>gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)</literal>
     * would return
     * %NULL if `widget` wasn't inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and check if the %TOPLEVEL flags
     * is set on the result.
     * |[
     *  GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *  if (gtk_widget_is_toplevel (toplevel))
     *    {
     *      /&ast; Perform action on toplevel. &ast;/
     *    }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    /**
     * Determines whether the widget is visible. Note that this doesn't
     * take into account whether the widget's parent is also visible
     * or the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    get_visible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the widget's window if it is realized, %NULL otherwise
     */
    get_window(): Gdk.Window
    /**
     * Causes `widget` to become the default widget. `widget` must have the
     * %GTK_CAN_DEFAULT flag set; typically you have to set this flag
     * yourself by calling <literal>gtk_widget_set_can_default (`widget,`
     * %TRUE)</literal>. The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them.
     */
    grab_default(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won't work.
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
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    has_grab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    has_rc_style(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    has_screen(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Recursively hides a widget and any child widgets.
     */
    hide_all(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hide_on_delete(): boolean
    /**
     * Sets an input shape for this widget's GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_mask() for more information.
     * @param shape_mask shape to be added, or %NULL to remove an existing shape
     * @param offset_x X position of shape mask with respect to `window`
     * @param offset_y Y position of shape mask with respect to `window`
     */
    input_shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    /**
     * Computes the intersection of a `widget'`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you're only
     * interested in whether there was an intersection.
     * @param area a rectangle
     * @param intersection rectangle to store intersection of `widget` and `area`
     */
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget'`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    is_composited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Returns the widget's effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensntive
     */
    is_sensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget. Currently only
     * #GtkWindow and #GtkInvisible are toplevel widgets. Toplevel
     * widgets have no parent widget.
     */
    is_toplevel(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is Ok and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget's toplevel.
     * 
     * The default ::keynav-failed handler returns %TRUE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType, it looks at the
     * #GtkSettings:gtk-keynav-cursor-only setting and returns %FALSE
     * if the setting is %TRUE. This way the entire user interface
     * becomes cursor-navigatable on input devices such as mobile phones
     * which only have cursor keys but no tab key.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    list_accel_closures(): Function[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is a the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * <emphasis>must</emphasis> call <literal>g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)</literal> first, and then unref all the
     * widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn't already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * 
     * The default handler for this signal activates the `widget` if
     * `group_cycling` is %FALSE, and just grabs the focus if `group_cycling`
     * is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * Note that "no window" widgets (which have the %GTK_NO_WINDOW flag set)
     * draw on their parent container's window and thus may not draw any
     * background themselves. This is the case for e.g. #GtkLabel. To modify
     * the background of such widgets, you have to set the base color on their
     * parent; if you want to set the background of a rectangular area around
     * a label, try placing the label in a #GtkEventBox widget and setting
     * the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_base().
     */
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * All other style values are left untouched. See also
     * gtk_widget_modify_style().
     * 
     * Note that "no window" widgets (which have the %GTK_NO_WINDOW flag set)
     * draw on their parent container's window and thus may not draw any
     * background themselves. This is the case for e.g. #GtkLabel. To modify
     * the background of such widgets, you have to set the background color
     * on their parent; if you want to set the background of a rectangular
     * area around a label, try placing the label in a #GtkEventBox widget
     * and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_bg().
     */
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * #GtkWidget:cursor-color and #GtkWidget:secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not need to be           allocated), or %NULL to undo the effect of previous calls to           of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does not need to be             allocated), or %NULL to undo the effect of previous calls to             of gtk_widget_modify_cursor().
     */
    modify_cursor(primary: Gdk.Color, secondary: Gdk.Color): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * All other style values are left untouched. See also
     * gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_fg().
     */
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.  All other style values are left
     * untouched. See also gtk_widget_modify_style().
     * @param font_desc the font description to use, or %NULL to undo   the effect of previous calls to gtk_widget_modify_font().
     */
    modify_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget. Modifications made using this
     * technique take precedence over style values set via an RC file,
     * however, they will be overriden if a style is explicitely set on
     * the widget using gtk_widget_set_style(). The #GtkRcStyle structure
     * is designed so each field can either be set or unset, so it is
     * possible, using this function, to modify some style values and
     * leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle holding the style modifications
     */
    modify_style(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.  All other
     * style values are left untouched. The text color is the foreground
     * color used along with the base color (see gtk_widget_modify_base())
     * for widgets such as #GtkEntry and #GtkTextView. See also
     * gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_text().
     */
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. "GtkButton") or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget'`s name instead of starting with the name
     * of `widget'`s outermost ancestor.
     */
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * This function does the same as gtk_widget_queue_draw().
     */
    queue_clear(): void
    /**
     * This function is no longer different from
     * gtk_widget_queue_draw_area(), though it once was. Now it just calls
     * gtk_widget_queue_draw_area(). Originally
     * gtk_widget_queue_clear_area() would force a redraw of the
     * background for %GTK_NO_WINDOW widgets, and
     * gtk_widget_queue_draw_area() would not. Now both functions ensure
     * the background will be redrawn.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_clear_area(x: number, y: number, width: number, height: number): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queue_draw(): void
    /**
     * Invalidates the rectangular area of `widget` defined by `x,` `y,`
     * `width` and `height` by calling gdk_window_invalidate_rect() on the
     * widget's window and all its child windows. Once the main loop
     * becomes idle (after the current batch of events has been processed,
     * roughly), the window will receive expose events for the union of
     * all regions that have been invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it, or
     * gdk_window_invalidate_rect() directly, to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * 
     * Frequently you can just call gdk_window_invalidate_rect() or
     * gdk_window_invalidate_region() instead of this function. Those
     * functions will invalidate only a single window, instead of the
     * widget and all its children.
     * 
     * The advantage of adding to the invalidated region compared to
     * simply drawing immediately is efficiency; using an invalid region
     * ensures that you only have to redraw one time.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_draw_area(x: number, y: number, width: number, height: number): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there's enough space for the new text.
     */
    queue_resize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queue_resize_no_redraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget's parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget's parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn't very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * GtkWidget::expose-event. Or simply g_signal_connect () to the
     * GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accel_group accel group for this widget
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     */
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemnic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * A convenience function that uses the theme engine and RC file
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU. `detail` should be a string that
     * identifies the widget or code doing the rendering, so that
     * theme engines can special-case rendering for that widget or code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size. A size of (GtkIconSize)-1 means     render at the size of the source and don't scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param new_parent a #GtkContainer to move the widget into
     */
    reparent(new_parent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    reset_rc_styles(): void
    /**
     * Recursively resets the shape on this widget and its descendants.
     */
    reset_shapes(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event signals on a widget. This function is not
     * normally used directly. The only time it is used is when
     * propagating an expose event to a child %NO_WINDOW widget, and
     * that is normally done using gtk_container_propagate_expose().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    send_expose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it's not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * |[
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    send_focus_change(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren't using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path path used to look up the accelerator
     * @param accel_group a #GtkAccelGroup.
     */
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget's allocation.  This should not be used
     * directly, but from within a widget's size_allocate method.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    set_allocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::expose-event handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * If this is not suitable (e.g. because you want to make a transparent
     * window using an RGBA visual), you can work around this by doing:
     * |[
     *  gtk_widget_realize (window);
     *  gdk_window_set_back_pixmap (window->window, NULL, FALSE);
     *  gtk_widget_show (window);
     * ```
     * 
     * @param app_paintable %TRUE if the application will paint on the widget
     */
    set_app_paintable(app_paintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * "default".
     * @param can_default whether or not `widget` can be a default widget.
     */
    set_can_default(can_default: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param can_focus whether or not `widget` can own the input focus.
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param is_visible if %TRUE, `widget` should be mapped along with its parent.
     */
    set_child_visible(is_visible: boolean): void
    /**
     * Sets the colormap for the widget to the given value. Widget must not
     * have been previously realized. This probably should only be used
     * from an <function>init()</function> function (i.e. from the constructor
     * for the widget).
     * @param colormap a colormap
     */
    set_colormap(colormap: Gdk.Colormap): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    set_composite_name(name: string): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitely
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. "Double buffered" simply means that
     * gdk_window_begin_paint_region() and gdk_window_end_paint() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_paint() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_paint() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don't see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don't flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_paint()).
     * @param double_buffered %TRUE to double-buffer a widget
     */
    set_double_buffered(double_buffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget's functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can't be used with #GTK_NO_WINDOW widgets;
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param events event mask
     */
    set_events(events: number): void
    /**
     * Sets the extension events mask to `mode`. See #GdkExtensionMode
     * and gdk_input_set_extension_events().
     * @param mode bitfield of extension events to receive
     */
    set_extension_events(mode: Gdk.ExtensionMode): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * GtkWidget:has-tooltip for more information.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL "window" pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it's actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in GtkWidget::realize() must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param has_window whether or not `widget` has a window.
     */
    set_has_window(has_window: boolean): void
    /**
     * Marks the widget as being realized.
     * 
     * This function should only ever be called in a derived widget's
     * "map" or "unmap" implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    set_mapped(mapped: boolean): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * gtkrc file. You can apply a style to widgets with a particular name
     * in the gtkrc file. See the documentation for gtkrc files (on the
     * same page as the docs for #GtkRcStyle).
     * 
     * Note that widget names are separated by periods in paths (see
     * gtk_widget_path()), so names with embedded periods may cause confusion.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() and gtk_widget_hide_all() will affect
     * this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param no_show_all the new value for the "no-show-all" property
     */
    set_no_show_all(no_show_all: boolean): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * @param parent_window the new parent window.
     */
    set_parent_window(parent_window: Gdk.Window): void
    /**
     * Marks the widget as being realized.
     * 
     * This function should only ever be called in a derived widget's
     * "realize" or "unrealize" implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    set_realized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * "default".
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for %NO_WINDOW widgets setting this flag to %FALSE turns
     * off all allocation on resizing: the widget will not even redraw if
     * its position changes; this is to allow containers that don't draw
     * anything to avoid excess invalidations. If you set this flag on a
     * %NO_WINDOW widget that <emphasis>does</emphasis> draw on `widget->`window,
     * you are responsible for invalidating both the old and new allocation
     * of the widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    /**
     * For widgets that support scrolling, sets the scroll adjustments and
     * returns %TRUE.  For widgets that don't support scrolling, does
     * nothing and returns %FALSE. Widgets that don't support scrolling
     * can be scrolled by placing them in a #GtkViewport, which does
     * support scrolling.
     * @param hadjustment an adjustment for horizontal scrolling, or %NULL
     * @param vadjustment an adjustment for vertical scrolling, or %NULL
     */
    set_scroll_adjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are "grayed out" and the
     * user can't interact with them. Insensitive widgets are known as
     * "inactive", "disabled", or "ghosted" in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget's size
     * request will be `width` by `height`. You can use this function to
     * force a widget to be either larger or smaller than it normally
     * would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * 
     * The size request of a widget is the smallest size a widget can
     * accept while still functioning well and drawing itself correctly.
     * However in some strange cases a widget may be allocated less than
     * its requested size, and in many cases a widget may be allocated more
     * space than it requested.
     * 
     * If the size request in a given direction is -1 (unset), then
     * the "natural" size request of the widget will be used instead.
     * 
     * Widgets can't actually be allocated a size less than 1 by 1, but
     * you can pass 0,0 to this function to mean "as small as possible."
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    set_state(state: Gtk.StateType): void
    /**
     * Sets the #GtkStyle for a widget (`widget->`style). You probably don't
     * want to use this function; it interacts badly with themes, because
     * themes work by replacing the #GtkStyle. Instead, use
     * gtk_widget_modify_style().
     * @param style a #GtkStyle, or %NULL to remove the effect of a previous         gtk_widget_set_style() and go back to the default style
     */
    set_style(style?: Gtk.Style | null): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * 
     * This function will take care of setting GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the GtkWidget::query-tooltip signal.
     * 
     * See also the GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the GtkWidget::query-tooltip signal.
     * 
     * See also the GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text: string): void
    /**
     * Replaces the default, usually yellow, window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * 
     * If the custom window should have the default theming it needs to
     * have the name "gtk-tooltip", see gtk_widget_set_name().
     * @param custom_window a #GtkWindow, or %NULL
     */
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    /**
     * Sets the position of a widget. The funny "u" in the name comes from
     * the "user position" hint specified by the X Window System, and
     * exists for legacy reasons. This function doesn't work if a widget
     * is inside a container; it's only really useful on #GtkWindow.
     * 
     * Don't use this function to center dialogs over the main application
     * window; most window managers will do the centering on your behalf
     * if you call gtk_window_set_transient_for(), and it's really not
     * possible to get the centering to work correctly in all cases from
     * application code. But if you insist, use gtk_window_set_position()
     * to set #GTK_WIN_POS_CENTER_ON_PARENT, don't do the centering
     * manually.
     * 
     * Note that although `x` and `y` can be individually unset, the position
     * is not honoured unless both `x` and `y` are set.
     * @param x x position; -1 to unset x; -2 to leave x unchanged
     * @param y y position; -1 to unset y; -2 to leave y unchanged
     */
    set_uposition(x: number, y: number): void
    /**
     * Sets the minimum size of a widget; that is, the widget's size
     * request will be `width` by `height`. You can use this function to
     * force a widget to be either larger or smaller than it is. The
     * strange "usize" name dates from the early days of GTK+, and derives
     * from X Window System terminology. In many cases,
     * gtk_window_set_default_size() is a better choice for toplevel
     * windows than this function; setting the default size will still
     * allow users to shrink the window. Setting the usize will force them
     * to leave the window at least as large as the usize. When dealing
     * with window sizes, gtk_window_set_geometry_hints() can be a useful
     * function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * @param width minimum width, or -1 to unset
     * @param height minimum height, or -1 to unset
     */
    set_usize(width: number, height: number): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn't mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Sets a widget's window. This function should only be used in a
     * widget's GtkWidget::realize() implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget's init() function.
     * @param window a #GdkWindow
     */
    set_window(window: Gdk.Window): void
    /**
     * Sets a shape for this widget's GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_mask()
     * for more information.
     * @param shape_mask shape to be added, or %NULL to remove an existing shape
     * @param offset_x X position of shape mask with respect to `window`
     * @param offset_y Y position of shape mask with respect to `window`
     */
    shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    /**
     * Flags a widget to be displayed. Any widget that isn't shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it's easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    show_all(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    show_now(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * @param allocation position and size to be allocated to `widget`
     */
    size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     * 
     * See also gtk_widget_get_child_requisition().
     * @param requisition a #GtkRequisition to be filled in
     */
    size_request(requisition: Gtk.Requisition): void
    /**
     * This function attaches the widget's #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * <programlisting>
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * </programlisting>
     * 
     * and should only ever be called in a derived widget's "realize"
     * implementation which does not chain up to its parent class'
     * "realize" implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    style_attach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param property_name the name of a style property
     * @param value location to return the property value
     */
    style_get_property(property_name: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thaw_child_notify(): void
    /**
     * Translate coordinates relative to `src_widget'`s allocation to coordinates
     * relative to `dest_widget'`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param dest_widget a #GtkWidget
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    trigger_tooltip_query(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it's currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Inverse of gtk_widget_ref(). Equivalent to g_object_unref().
     */
    unref(): void
    /* Methods of Gtk-2.0.Gtk.Object */
    get_data(key: string): object | null
    get_data_by_id(data_id: GLib.Quark): object | null
    get_user_data(): object | null
    remove_data(key: string): void
    remove_data_by_id(data_id: GLib.Quark): void
    remove_no_notify(key: string): void
    remove_no_notify_by_id(key_id: GLib.Quark): void
    set_data(key: string, data?: object | null): void
    set_data_by_id(data_id: GLib.Quark, data?: object | null): void
    set_data_by_id_full(data_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    set_data_full(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    set_user_data(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gtk-2.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a "constructor" has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under &lt;child&gt;.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    set_name(name: string): void
    /* Virtual methods of MxGtk-1.0.MxGtk.Frame */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a "constructor" has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under &lt;child&gt;.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-2.0.Gtk.Frame */
    vfunc_compute_child_allocation(allocation: Gtk.Allocation): void
    /* Virtual methods of Gtk-2.0.Gtk.Container */
    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkTable, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_table_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can't place the same widget inside two different containers.
     * @param widget a widget to be placed inside `container`
     */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    /**
     * Returns the type of the children supported by the container.
     * 
     * Note that this may return %G_TYPE_NONE to indicate that no more
     * children can be added, e.g. for a #GtkPaned which already has two
     * children.
     */
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it while it's not inside
     * a container, using g_object_ref(). If you don't want to use `widget`
     * again it's usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Sets, or unsets if `child` is %NULL, the focused child of `container`.
     * 
     * This function emits the GtkContainer::set_focus_child signal of
     * `container`. Implementations of #GtkContainer can override the
     * default behaviour by overriding the class closure of this signal.
     * 
     * This is function is mostly meant to be used by widgets. Applications can use
     * gtk_widget_grab_focus() to manualy set the focus to a specific widget.
     * @param widget 
     */
    vfunc_set_focus_child(widget: Gtk.Widget): void
    /* Virtual methods of Gtk-2.0.Gtk.Widget */
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn't overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    vfunc_can_activate_accel(signal_id: number): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * <link linkend="child-properties">child property</link> `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * @param pspec 
     */
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_client_event(event: Gdk.EventClient): boolean
    vfunc_composited_changed(): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don't use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don't synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_expose_event(event: Gdk.EventExpose): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If no accessibility library is loaded (i.e. no ATK implementation library is
     * loaded via <envar>GTK_MODULES</envar> or via another application library,
     * such as libgnome), then this #AtkObject instance may be a no-op. Likewise,
     * if no class-specific #AtkObject implementation is available for the widget
     * instance in question, it will inherit an #AtkObject implementation from the
     * first ancestor class for which such an implementation is defined.
     * 
     * The documentation of the <ulink url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and their uses.
     */
    vfunc_get_accessible(): Atk.Object
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won't work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    vfunc_hide(): void
    /**
     * Recursively hides a widget and any child widgets.
     */
    vfunc_hide_all(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn't already.
     */
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * 
     * The default handler for this signal activates the `widget` if
     * `group_cycling` is %FALSE, and just grabs the focus if `group_cycling`
     * is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_no_expose_event(event: Gdk.EventAny): boolean
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget's parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget's parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn't very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * GtkWidget::expose-event. Or simply g_signal_connect () to the
     * GtkWidget::realize signal.
     */
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    /**
     * Flags a widget to be displayed. Any widget that isn't shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it's easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * @param allocation position and size to be allocated to `widget`
     */
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     * 
     * See also gtk_widget_get_child_requisition().
     * @param requisition a #GtkRequisition to be filled in
     */
    vfunc_size_request(requisition: Gtk.Requisition): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_style_set(previous_style: Gtk.Style): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it's currently mapped.
     */
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk-2.0.Gtk.Object */
    vfunc_destroy(): void
    vfunc_get_arg(arg: Gtk.Arg, arg_id: number): void
    vfunc_set_arg(arg: Gtk.Arg, arg_id: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-2.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-2.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signal_id the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: (($obj: Frame, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Frame, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    /**
     * The ::child-notify signal is emitted for each
     * <link linkend="child-properties">child property</link>  that has
     * changed on an object. The signal's detail holds the property name.
     * @param pspec the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    /**
     * The ::client-event will be emitted when the `widget'`s window
     * receives a message (via a ClientMessage event) from another
     * application.
     * @param event the #GdkEventClient which triggered   this signal.
     */
    connect(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widget<`!-- -->s screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: Frame, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Frame, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with gtk_drag_source_set_icon().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-begin", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-data-delete", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param drag_context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: (($obj: Frame, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Frame, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and <emphasis>not</emphasis> finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on whether
     * the data was processed successfully.
     * 
     * The handler may inspect and modify `drag_context->`action before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as shown in the
     * following example:
     * |[
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *drag_context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       if (drag_context->action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     *           
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     *             
     *           if (response == GTK_RESPONSE_YES)
     *             drag_context->action = GDK_ACTION_MOVE;
     *           else
     *             drag_context->action = GDK_ACTION_COPY;
     *          }
     *          
     *       gtk_drag_finish (drag_context, TRUE, FALSE, time);
     *       return;
     *     }
     *       
     *    gtk_drag_finish (drag_context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param drag_context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param drag_context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-end", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DND
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param drag_context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: (($obj: Frame, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Frame, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", drag_context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight()
     * @param drag_context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: (($obj: Frame, drag_context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Frame, drag_context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", drag_context: Gdk.DragContext, time: number): void
    /**
     * The drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you cannot not pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * |[
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkAtom target;
     *  
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     *  
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     *  
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status = context->suggested_action;
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     *  
     *   return TRUE;
     * }
     *   
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     *   
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     *      
     *     /&ast; We are getting this data due to a request in drag_motion,
     *      * rather than due to a request in drag_drop, so we are just
     *      * supposed to call gdk_drag_status (), not actually paste in
     *      * the data.
     *      &ast;/
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context, private_data->suggested_action, time);
     *    }
     *   else
     *    {
     *      /&ast; accept the drop &ast;/
     *    }
     * }
     * ```
     * 
     * @param drag_context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    /**
     * The ::expose-event signal is emitted when an area of a previously
     * obscured #GdkWindow is made visible and needs to be redrawn.
     * #GTK_NO_WINDOW widgets will get a synthesized event from their parent
     * widget.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_EXPOSURE_MASK mask.
     * 
     * Note that the ::expose-event signal has been replaced by a ::draw
     * signal in GTK+ 3. The <link linkend="http://library.gnome.org/devel/gtk3/3.0/gtk-migrating-2-to-3.html">GTK+ 3 migration guide</link>
     * for hints on how to port from ::expose-event to ::draw.
     * @param event the #GdkEventExpose which triggered   this signal.
     */
    connect(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    connect(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    connect(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param was_grabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: (($obj: Frame, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Frame, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Frame) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * <firstterm>anchored</firstterm> when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previous_toplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: (($obj: Frame, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Frame, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "map", callback: (($obj: Frame) => void)): number
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::no-expose-event will be emitted when the `widget'`s window is
     * drawn as a copy of another #GdkDrawable (with gdk_draw_drawable() or
     * gdk_window_copy_area()) which was completely unobscured. If the source
     * window was partially obscured #GdkEventExpose events will be generated
     * for those areas.
     * @param event the #GdkEventNoExpose which triggered   this signal.
     */
    connect(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param old_parent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: (($obj: Frame, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Frame, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See <xref linkend="checklist-popup-menu"/>
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the #GtkSettings:gtk-tooltip-timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget->`window
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget->`window
     * @param keyboard_mode %TRUE if the tooltip was trigged using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Frame) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previous_screen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: (($obj: Frame, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Frame, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    connect(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "show", callback: (($obj: Frame) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Frame, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Frame, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    connect(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * @param previous_style the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: (($obj: Frame, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Frame, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "unmap", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Frame) => void)): number
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s window
     * is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of Gtk-2.0.Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Frame) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Frame_ConstructProps)
    _init (config?: Frame_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Frame
    /* Function overloads */
    static new(label: string): Frame
    static $gtype: GObject.Type
}
interface LightSwitch_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    /* Constructor properties of MxGtk-1.0.MxGtk.LightSwitch */
    active?: boolean
}
class LightSwitch {
    /* Properties of MxGtk-1.0.MxGtk.LightSwitch */
    active: boolean
    /* Properties of Gtk-2.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    /**
     * Whether or not the widget is double buffered.
     */
    double_buffered: boolean
    events: Gdk.EventMask
    extension_events: Gdk.ExtensionMode
    has_default: boolean
    has_focus: boolean
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using #GtkWidget::query-tooltip to determine
     * whether it will provide a tooltip or not.
     * 
     * Note that setting this property to %TRUE for the first time will change
     * the event masks of the GdkWindows of this widget to include leave-notify
     * and motion-notify events.  This cannot and will not be undone when the
     * property is set to %FALSE again.
     */
    has_tooltip: boolean
    height_request: number
    is_focus: boolean
    no_show_all: boolean
    receives_default: boolean
    sensitive: boolean
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * Also see gtk_tooltip_set_markup().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see gtk_tooltip_set_text().
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
     * will automatically be set to %TRUE and there will be taken care of
     * #GtkWidget::query-tooltip in the default signal handler.
     */
    tooltip_text: string
    visible: boolean
    width_request: number
    /* Properties of Gtk-2.0.Gtk.Object */
    user_data: object
    /* Fields of Gtk-2.0.Gtk.DrawingArea */
    widget: Gtk.Widget
    draw_data: object
    /* Fields of Gtk-2.0.Gtk.Widget */
    object: Gtk.Object
    private_flags: number
    state: number
    saved_state: number
    name: string
    style: Gtk.Style
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    window: Gdk.Window
    parent: Gtk.Widget
    /* Fields of Gtk-2.0.Gtk.Object */
    parent_instance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of MxGtk-1.0.MxGtk.LightSwitch */
    /**
     * Get the value of the "active" property
     */
    get_active(): boolean
    /**
     * Set the value of the "active" property
     * @param active #TRUE to set the switch to its ON state
     */
    set_active(active: boolean): void
    /* Methods of Gtk-2.0.Gtk.DrawingArea */
    size(width: number, height: number): void
    /* Methods of Gtk-2.0.Gtk.Widget */
    /**
     * For widgets that can be "activated" (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Installs an accelerator for this `widget` in `accel_group` that causes
     * `accel_signal` to be emitted if the accelerator is activated.
     * The `accel_group` needs to be added to the widget's toplevel via
     * gtk_window_add_accel_group(), and the signal must be of type %G_RUN_ACTION.
     * Accelerators added through this function are not user changeable during
     * runtime. If you want to support accelerators that can be changed by the
     * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
     * gtk_menu_item_set_accel_path() instead.
     * @param accel_signal widget signal to emit on accelerator activation
     * @param accel_group accel group for this widget, added to its toplevel
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
     */
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    /**
     * Adds the events in the bitfield `events` to the event mask for
     * `widget`. See gtk_widget_set_events() for details.
     * @param events an event mask, see #GdkEventMask
     */
    add_events(events: number): void
    /**
     * Adds a widget to the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well, by using a connection
     * to the #GtkWidget::destroy signal or a weak notifier.
     * @param label a #GtkWidget that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn't overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    can_activate_accel(signal_id: number): boolean
    /**
     * This function is used by custom widget implementations; if you're
     * writing an app, you'd use gtk_widget_grab_focus() to move the focus
     * to a particular widget, and gtk_container_set_focus_chain() to
     * change the focus tab order. So you may want to investigate those
     * functions instead.
     * 
     * gtk_widget_child_focus() is called by containers as the user moves
     * around the window using keyboard shortcuts. `direction` indicates
     * what kind of motion is taking place (up, down, left, right, tab
     * forward, tab backward). gtk_widget_child_focus() emits the
     * #GtkWidget::focus signal; widgets override the default handler
     * for this signal in order to implement appropriate focus behavior.
     * 
     * The default ::focus handler for a widget should return %TRUE if
     * moving in `direction` left the focus on a focusable location inside
     * that widget, and %FALSE if moving in `direction` moved the focus
     * outside the widget. If returning %TRUE, widgets normally
     * call gtk_widget_grab_focus() to place the focus accordingly;
     * if returning %FALSE, they don't modify the current focus location.
     * 
     * This function replaces gtk_container_focus() from GTK+ 1.2.
     * It was necessary to check that the child was visible, sensitive,
     * and focusable before calling gtk_container_focus().
     * gtk_widget_child_focus() returns %FALSE if the widget is not
     * currently in a focusable state, so there's no need for those checks.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * <link linkend="child-properties">child property</link> `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * @param child_property the name of a child property installed on the                  class of `widget<`!-- -->'s parent
     */
    child_notify(child_property: string): void
    /**
     * Same as gtk_widget_path(), but always uses the name of a widget's type,
     * never uses a custom name set with gtk_widget_set_name().
     */
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * Creates a new #PangoContext with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget. See also gtk_widget_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a #PangoLayout created in this way around, in order to
     * notify the layout of changes to the base direction or font of this
     * widget, you must call pango_layout_context_changed() in response to
     * the #GtkWidget::style-set and #GtkWidget::direction-changed signals
     * for the widget.
     * @param text text to set on the layout (can be %NULL)
     */
    create_pango_layout(text: string): Pango.Layout
    /**
     * Destroys a widget. Equivalent to gtk_object_destroy(), except that
     * you don't have to cast the widget to #GtkObject. When a widget is
     * destroyed, it will break any references it holds to other objects.
     * If the widget is inside a container, the widget will be removed
     * from the container. If the widget is a toplevel (derived from
     * #GtkWindow), it will be removed from the list of toplevels, and the
     * reference GTK+ holds to it will be removed. Removing a
     * widget from its container or the list of toplevels results in the
     * widget being finalized, unless you've added additional references
     * to the widget with g_object_ref().
     * 
     * In most cases, only toplevel widgets (windows) require explicit
     * destruction, because when you destroy a toplevel its children will
     * be destroyed as well.
     */
    destroy(): void
    /**
     * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
     * %NULL.  It's intended to be used as a callback connected to the
     * "destroy" signal of a widget. You connect gtk_widget_destroyed()
     * as a signal handler, and pass the address of your widget variable
     * as user data. Then when the widget is destroyed, the variable will
     * be set to %NULL. Useful for example to avoid multiple copies
     * of the same dialog.
     * @param widget_pointer address of a variable that contains `widget`
     */
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    /**
     * In GTK+ 1.2, this function would immediately render the
     * region `area` of a widget, by invoking the virtual draw method of a
     * widget. In GTK+ 2.0, the draw method is gone, and instead
     * gtk_widget_draw() simply invalidates the specified region of the
     * widget, then updates the invalid region of the widget immediately.
     * Usually you don't want to update the region immediately for
     * performance reasons, so in general gtk_widget_queue_draw_area() is
     * a better choice if you want to draw a region of a widget.
     * @param area area to draw
     */
    draw(area: Gdk.Rectangle): void
    /**
     * Ensures that `widget` has a style (`widget->`style). Not a very useful
     * function; most of the time, if you want the style, the widget is
     * realized, and realized widgets are guaranteed to have a style
     * already.
     */
    ensure_style(): void
    /**
     * Notifies the user about an input-related error on this widget.
     * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
     * gdk_window_beep(), otherwise it does nothing.
     * 
     * Note that the effect of gdk_window_beep() can be configured in many
     * ways, depending on the windowing backend and the desktop environment
     * or window manager that is used.
     */
    error_bell(): void
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don't use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don't synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    event(event: Gdk.Event): boolean
    /**
     * Stops emission of #GtkWidget::child-notify signals on `widget`. The
     * signals are queued until gtk_widget_thaw_child_notify() is called
     * on `widget`.
     * 
     * This is the analogue of g_object_freeze_notify() for child properties.
     */
    freeze_child_notify(): void
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If no accessibility library is loaded (i.e. no ATK implementation library is
     * loaded via <envar>GTK_MODULES</envar> or via another application library,
     * such as libgnome), then this #AtkObject instance may be a no-op. Likewise,
     * if no class-specific #AtkObject implementation is available for the widget
     * instance in question, it will inherit an #AtkObject implementation from the
     * first ancestor class for which such an implementation is defined.
     * 
     * The documentation of the <ulink url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the widget's allocation.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`. For example,
     * <literal>gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)</literal> gets
     * the first #GtkBox that's an ancestor of `widget`. No reference will be
     * added to the returned widget; it should not be unreferenced. See note
     * about checking for a toplevel #GtkWindow in the docs for
     * gtk_widget_get_toplevel().
     * 
     * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget
    /**
     * Determines whether the application intends to draw on the widget in
     * an #GtkWidget::expose-event handler.
     * 
     * See gtk_widget_set_app_paintable()
     */
    get_app_paintable(): boolean
    /**
     * Determines whether `widget` can be a default widget. See
     * gtk_widget_set_can_default().
     */
    get_can_default(): boolean
    /**
     * Determines whether `widget` can own the input focus. See
     * gtk_widget_set_can_focus().
     */
    get_can_focus(): boolean
    /**
     * This function is only for use in widget implementations. Obtains
     * `widget->`requisition, unless someone has forced a particular
     * geometry on the widget (e.g. with gtk_widget_set_size_request()),
     * in which case it returns that geometry instead of the widget's
     * requisition.
     * 
     * This function differs from gtk_widget_size_request() in that
     * it retrieves the last size request value from `widget->`requisition,
     * while gtk_widget_size_request() actually calls the "size_request" method
     * on `widget` to compute the size request and fill in `widget->`requisition,
     * and only then returns `widget->`requisition.
     * 
     * Because this function does not call the "size_request" method, it
     * can only be used when you know that `widget->`requisition is
     * up-to-date, that is, gtk_widget_size_request() has been called
     * since the last time a resize was queued. In general, only container
     * implementations have this information; applications should use
     * gtk_widget_size_request().
     * @param requisition a #GtkRequisition to be filled in
     */
    get_child_requisition(requisition: Gtk.Requisition): void
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Returns the clipboard object for the given selection to
     * be used with `widget`. `widget` must have a #GdkDisplay
     * associated with it, so must be attached to a toplevel
     * window.
     * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
     */
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    /**
     * Gets the colormap that will be used to render `widget`. No reference will
     * be added to the returned colormap; it should not be unreferenced.
     */
    get_colormap(): Gdk.Colormap
    /**
     * Obtains the composite name of a widget.
     */
    get_composite_name(): string
    /**
     * Gets the reading direction for a particular widget. See
     * gtk_widget_set_direction().
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the #GdkDisplay for the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the widget is double buffered.
     * 
     * See gtk_widget_set_double_buffered()
     */
    get_double_buffered(): boolean
    /**
     * Returns the event mask for the widget (a bitfield containing flags
     * from the #GdkEventMask enumeration). These are the events that the widget
     * will receive.
     */
    get_events(): number
    /**
     * Retrieves the extension events the widget will receive; see
     * gdk_input_set_extension_events().
     */
    get_extension_events(): Gdk.ExtensionMode
    /**
     * Returns the current value of the has-tooltip property.  See
     * GtkWidget:has-tooltip for more information.
     */
    get_has_tooltip(): boolean
    /**
     * Determines whether `widget` has a #GdkWindow of its own. See
     * gtk_widget_set_has_window().
     */
    get_has_window(): boolean
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Returns the current modifier style for the widget. (As set by
     * gtk_widget_modify_style().) If no style has previously set, a new
     * #GtkRcStyle will be created with all values unset, and set as the
     * modifier style for the widget. If you make changes to this rc
     * style, you must call gtk_widget_modify_style(), passing in the
     * returned rc style, to make sure that your changes take effect.
     * 
     * Caution: passing the style back to gtk_widget_modify_style() will
     * normally end up destroying it, because gtk_widget_modify_style() copies
     * the passed-in style and sets the copy as the new modifier style,
     * thus dropping any reference to the old modifier style. Add a reference
     * to the modifier style if you want to keep it alive.
     */
    get_modifier_style(): Gtk.RcStyle
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    get_name(): string
    /**
     * Returns the current value of the GtkWidget:no-show-all property,
     * which determines whether calls to gtk_widget_show_all() and
     * gtk_widget_hide_all() will affect this widget.
     */
    get_no_show_all(): boolean
    /**
     * Gets a #PangoContext with the appropriate font map, font description,
     * and base direction for this widget. Unlike the context returned
     * by gtk_widget_create_pango_context(), this context is owned by
     * the widget (it can be used until the screen for the widget changes
     * or the widget is removed from its toplevel), and will be updated to
     * match any changes to the widget's attributes.
     * 
     * If you create and keep a #PangoLayout using this context, you must
     * deal with changes to the context by calling pango_layout_context_changed()
     * on the layout in response to the #GtkWidget::style-set and
     * #GtkWidget::direction-changed signals for the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent container of `widget`.
     */
    get_parent(): Gtk.Widget
    /**
     * Gets `widget'`s parent window.
     */
    get_parent_window(): Gdk.Window
    /**
     * Obtains the location of the mouse pointer in widget coordinates.
     * Widget coordinates are a bit odd; for historical reasons, they are
     * defined as `widget->`window coordinates for widgets that are not
     * #GTK_NO_WINDOW widgets, and are relative to `widget->`allocation.x,
     * `widget->`allocation.y for widgets that are #GTK_NO_WINDOW widgets.
     */
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is alyways treated as default widget
     * withing its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_set_receives_default().
     */
    get_receives_default(): boolean
    /**
     * Retrieves the widget's requisition.
     * 
     * This function should only be used by widget implementations in
     * order to figure whether the widget's requisition has actually
     * changed after some internal state change (so that they can call
     * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
     * 
     * Normally, gtk_widget_size_request() should be used.
     */
    get_requisition(): /* requisition */ Gtk.Requisition
    /**
     * Get the root window where this widget is located. This function can
     * only be called after the widget has been added to a widget
     * hierarchy with #GtkWindow at the top.
     * 
     * The root window is useful for such purposes as creating a popup
     * #GdkWindow associated with the window. In general, you should only
     * create display specific resources when a widget has been realized,
     * and you should free those resources when the widget is unrealized.
     */
    get_root_window(): Gdk.Window
    /**
     * Get the #GdkScreen from the toplevel window associated with
     * this widget. This function can only be called after the widget
     * has been added to a widget hierarchy with a #GtkWindow
     * at the top.
     * 
     * In general, you should only create screen specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_screen(): Gdk.Screen
    /**
     * Returns the widget's sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget's sensitivity. See gtk_widget_is_sensitive().
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings (global property
     * settings, RC file information, etc) used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    get_settings(): Gtk.Settings
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request(). A value of -1 stored in `width` or
     * `height` indicates that that dimension has not been set explicitly
     * and the natural requisition of the widget will be used intead. See
     * gtk_widget_set_size_request(). To get the size a widget will
     * actually use, call gtk_widget_size_request() instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget's state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_markup(): string
    /**
     * Gets the contents of the tooltip for `widget`.
     */
    get_tooltip_text(): string
    /**
     * Returns the #GtkWindow of the current tooltip. This can be the
     * GtkWindow created by default, or the custom tooltip window set
     * using gtk_widget_set_tooltip_window().
     */
    get_tooltip_window(): Gtk.Window
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * <literal>gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)</literal>
     * would return
     * %NULL if `widget` wasn't inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and check if the %TOPLEVEL flags
     * is set on the result.
     * |[
     *  GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *  if (gtk_widget_is_toplevel (toplevel))
     *    {
     *      /&ast; Perform action on toplevel. &ast;/
     *    }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    /**
     * Determines whether the widget is visible. Note that this doesn't
     * take into account whether the widget's parent is also visible
     * or the widget is obscured in any way.
     * 
     * See gtk_widget_set_visible().
     */
    get_visible(): boolean
    /**
     * Gets the visual that will be used to render `widget`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the widget's window if it is realized, %NULL otherwise
     */
    get_window(): Gdk.Window
    /**
     * Causes `widget` to become the default widget. `widget` must have the
     * %GTK_CAN_DEFAULT flag set; typically you have to set this flag
     * yourself by calling <literal>gtk_widget_set_can_default (`widget,`
     * %TRUE)</literal>. The default widget is activated when
     * the user presses Enter in a window. Default widgets must be
     * activatable, that is, gtk_widget_activate() should affect them.
     */
    grab_default(): void
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won't work.
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
     * Determines whether the widget is currently grabbing events, so it
     * is the only widget receiving input events (keyboard and mouse).
     * 
     * See also gtk_grab_add().
     */
    has_grab(): boolean
    /**
     * Determines if the widget style has been looked up through the rc mechanism.
     */
    has_rc_style(): boolean
    /**
     * Checks whether there is a #GdkScreen is associated with
     * this widget. All toplevel widgets have an associated
     * screen, and all widgets added into a hierarchy with a toplevel
     * window at the top.
     */
    has_screen(): boolean
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    hide(): void
    /**
     * Recursively hides a widget and any child widgets.
     */
    hide_all(): void
    /**
     * Utility function; intended to be connected to the #GtkWidget::delete-event
     * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
     * argument, then returns %TRUE. If connected to ::delete-event, the
     * result is that clicking the close button for a window (on the
     * window frame, top right corner usually) will hide but not destroy
     * the window. By default, GTK+ destroys windows when ::delete-event
     * is received.
     */
    hide_on_delete(): boolean
    /**
     * Sets an input shape for this widget's GDK window. This allows for
     * windows which react to mouse click in a nonrectangular region, see
     * gdk_window_input_shape_combine_mask() for more information.
     * @param shape_mask shape to be added, or %NULL to remove an existing shape
     * @param offset_x X position of shape mask with respect to `window`
     * @param offset_y Y position of shape mask with respect to `window`
     */
    input_shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    /**
     * Computes the intersection of a `widget'`s area and `area,` storing
     * the intersection in `intersection,` and returns %TRUE if there was
     * an intersection.  `intersection` may be %NULL if you're only
     * interested in whether there was an intersection.
     * @param area a rectangle
     * @param intersection rectangle to store intersection of `widget` and `area`
     */
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GtkWidget
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Whether `widget` can rely on having its alpha channel
     * drawn correctly. On X11 this function returns whether a
     * compositing manager is running for `widget'`s screen.
     * 
     * Please note that the semantics of this call will change
     * in the future if used on a widget that has a composited
     * window in its hierarchy (as set by gdk_window_set_composited()).
     */
    is_composited(): boolean
    /**
     * Determines whether `widget` can be drawn to. A widget can be drawn
     * to if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Returns the widget's effective sensitivity, which means
     * it is sensitive itself and also its parent widget is sensntive
     */
    is_sensitive(): boolean
    /**
     * Determines whether `widget` is a toplevel widget. Currently only
     * #GtkWindow and #GtkInvisible are toplevel widgets. Toplevel
     * widgets have no parent widget.
     */
    is_toplevel(): boolean
    /**
     * This function should be called whenever keyboard navigation within
     * a single widget hits a boundary. The function emits the
     * #GtkWidget::keynav-failed signal on the widget and its return
     * value should be interpreted in a way similar to the return value of
     * gtk_widget_child_focus():
     * 
     * When %TRUE is returned, stay in the widget, the failed keyboard
     * navigation is Ok and/or there is nowhere we can/should move the
     * focus to.
     * 
     * When %FALSE is returned, the caller should continue with keyboard
     * navigation outside the widget, e.g. by calling
     * gtk_widget_child_focus() on the widget's toplevel.
     * 
     * The default ::keynav-failed handler returns %TRUE for
     * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
     * values of #GtkDirectionType, it looks at the
     * #GtkSettings:gtk-keynav-cursor-only setting and returns %FALSE
     * if the setting is %TRUE. This way the entire user interface
     * becomes cursor-navigatable on input devices such as mobile phones
     * which only have cursor keys but no tab key.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * gtk_widget_error_bell() to notify the user of the failed keyboard
     * navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * #GtkEntry widgets where the user should be able to navigate the
     * entire row with the cursor keys, as e.g. known from user interfaces
     * that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Lists the closures used by `widget` for accelerator group connections
     * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
     * The closures can be used to monitor accelerator changes on `widget,`
     * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
     * #GtkAccelGroup of a closure which can be found out with
     * gtk_accel_group_from_accel_closure().
     */
    list_accel_closures(): Function[]
    /**
     * Returns a newly allocated list of the widgets, normally labels, for
     * which this widget is a the target of a mnemonic (see for example,
     * gtk_label_set_mnemonic_widget()).
     * 
     * The widgets in the list are not individually referenced. If you
     * want to iterate through the list and perform actions involving
     * callbacks that might destroy the widgets, you
     * <emphasis>must</emphasis> call <literal>g_list_foreach (result,
     * (GFunc)g_object_ref, NULL)</literal> first, and then unref all the
     * widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn't already.
     */
    map(): void
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * 
     * The default handler for this signal activates the `widget` if
     * `group_cycling` is %FALSE, and just grabs the focus if `group_cycling`
     * is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Sets the base color for a widget in a particular state.
     * All other style values are left untouched. The base color
     * is the background color used along with the text color
     * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
     * and #GtkTextView. See also gtk_widget_modify_style().
     * 
     * Note that "no window" widgets (which have the %GTK_NO_WINDOW flag set)
     * draw on their parent container's window and thus may not draw any
     * background themselves. This is the case for e.g. #GtkLabel. To modify
     * the background of such widgets, you have to set the base color on their
     * parent; if you want to set the background of a rectangular area around
     * a label, try placing the label in a #GtkEventBox widget and setting
     * the base color on that.
     * @param state the state for which to set the base color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_base().
     */
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the background color for a widget in a particular state.
     * All other style values are left untouched. See also
     * gtk_widget_modify_style().
     * 
     * Note that "no window" widgets (which have the %GTK_NO_WINDOW flag set)
     * draw on their parent container's window and thus may not draw any
     * background themselves. This is the case for e.g. #GtkLabel. To modify
     * the background of such widgets, you have to set the background color
     * on their parent; if you want to set the background of a rectangular
     * area around a label, try placing the label in a #GtkEventBox widget
     * and setting the background color on that.
     * @param state the state for which to set the background color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_bg().
     */
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the cursor color to use in a widget, overriding the
     * #GtkWidget:cursor-color and #GtkWidget:secondary-cursor-color
     * style properties. All other style values are left untouched.
     * See also gtk_widget_modify_style().
     * @param primary the color to use for primary cursor (does not need to be           allocated), or %NULL to undo the effect of previous calls to           of gtk_widget_modify_cursor().
     * @param secondary the color to use for secondary cursor (does not need to be             allocated), or %NULL to undo the effect of previous calls to             of gtk_widget_modify_cursor().
     */
    modify_cursor(primary: Gdk.Color, secondary: Gdk.Color): void
    /**
     * Sets the foreground color for a widget in a particular state.
     * All other style values are left untouched. See also
     * gtk_widget_modify_style().
     * @param state the state for which to set the foreground color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_fg().
     */
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Sets the font to use for a widget.  All other style values are left
     * untouched. See also gtk_widget_modify_style().
     * @param font_desc the font description to use, or %NULL to undo   the effect of previous calls to gtk_widget_modify_font().
     */
    modify_font(font_desc?: Pango.FontDescription | null): void
    /**
     * Modifies style values on the widget. Modifications made using this
     * technique take precedence over style values set via an RC file,
     * however, they will be overriden if a style is explicitely set on
     * the widget using gtk_widget_set_style(). The #GtkRcStyle structure
     * is designed so each field can either be set or unset, so it is
     * possible, using this function, to modify some style values and
     * leave the others unchanged.
     * 
     * Note that modifications made with this function are not cumulative
     * with previous calls to gtk_widget_modify_style() or with such
     * functions as gtk_widget_modify_fg(). If you wish to retain
     * previous values, you must first call gtk_widget_get_modifier_style(),
     * make your modifications to the returned style, then call
     * gtk_widget_modify_style() with that style. On the other hand,
     * if you first call gtk_widget_modify_style(), subsequent calls
     * to such functions gtk_widget_modify_fg() will have a cumulative
     * effect with the initial modifications.
     * @param style the #GtkRcStyle holding the style modifications
     */
    modify_style(style: Gtk.RcStyle): void
    /**
     * Sets the text color for a widget in a particular state.  All other
     * style values are left untouched. The text color is the foreground
     * color used along with the base color (see gtk_widget_modify_base())
     * for widgets such as #GtkEntry and #GtkTextView. See also
     * gtk_widget_modify_style().
     * @param state the state for which to set the text color
     * @param color the color to assign (does not need to be allocated),         or %NULL to undo the effect of previous calls to         of gtk_widget_modify_text().
     */
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    /**
     * Obtains the full path to `widget`. The path is simply the name of a
     * widget and all its parents in the container hierarchy, separated by
     * periods. The name of a widget comes from
     * gtk_widget_get_name(). Paths are used to apply styles to a widget
     * in gtkrc configuration files. Widget names are the type of the
     * widget by default (e.g. "GtkButton") or can be set to an
     * application-specific value with gtk_widget_set_name(). By setting
     * the name of a widget, you allow users or theme authors to apply
     * styles to that specific widget in their gtkrc
     * file. `path_reversed_p` fills in the path in reverse order,
     * i.e. starting with `widget'`s name instead of starting with the name
     * of `widget'`s outermost ancestor.
     */
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    /**
     * This function does the same as gtk_widget_queue_draw().
     */
    queue_clear(): void
    /**
     * This function is no longer different from
     * gtk_widget_queue_draw_area(), though it once was. Now it just calls
     * gtk_widget_queue_draw_area(). Originally
     * gtk_widget_queue_clear_area() would force a redraw of the
     * background for %GTK_NO_WINDOW widgets, and
     * gtk_widget_queue_draw_area() would not. Now both functions ensure
     * the background will be redrawn.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_clear_area(x: number, y: number, width: number, height: number): void
    /**
     * Equivalent to calling gtk_widget_queue_draw_area() for the
     * entire area of a widget.
     */
    queue_draw(): void
    /**
     * Invalidates the rectangular area of `widget` defined by `x,` `y,`
     * `width` and `height` by calling gdk_window_invalidate_rect() on the
     * widget's window and all its child windows. Once the main loop
     * becomes idle (after the current batch of events has been processed,
     * roughly), the window will receive expose events for the union of
     * all regions that have been invalidated.
     * 
     * Normally you would only use this function in widget
     * implementations. You might also use it, or
     * gdk_window_invalidate_rect() directly, to schedule a redraw of a
     * #GtkDrawingArea or some portion thereof.
     * 
     * Frequently you can just call gdk_window_invalidate_rect() or
     * gdk_window_invalidate_region() instead of this function. Those
     * functions will invalidate only a single window, instead of the
     * widget and all its children.
     * 
     * The advantage of adding to the invalidated region compared to
     * simply drawing immediately is efficiency; using an invalid region
     * ensures that you only have to redraw one time.
     * @param x x coordinate of upper-left corner of rectangle to redraw
     * @param y y coordinate of upper-left corner of rectangle to redraw
     * @param width width of region to draw
     * @param height height of region to draw
     */
    queue_draw_area(x: number, y: number, width: number, height: number): void
    /**
     * This function is only for use in widget implementations.
     * Flags a widget to have its size renegotiated; should
     * be called when a widget for some reason has a new size request.
     * For example, when you change the text in a #GtkLabel, #GtkLabel
     * queues a resize to ensure there's enough space for the new text.
     */
    queue_resize(): void
    /**
     * This function works like gtk_widget_queue_resize(),
     * except that the widget is not invalidated.
     */
    queue_resize_no_redraw(): void
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget's parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget's parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn't very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * GtkWidget::expose-event. Or simply g_signal_connect () to the
     * GtkWidget::realize signal.
     */
    realize(): void
    /**
     * Removes an accelerator from `widget,` previously installed with
     * gtk_widget_add_accelerator().
     * @param accel_group accel group for this widget
     * @param accel_key GDK keyval of the accelerator
     * @param accel_mods modifier key combination of the accelerator
     */
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    /**
     * Removes a widget from the list of mnemonic labels for
     * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
     * must have previously been added to the list with
     * gtk_widget_add_mnemonic_label().
     * @param label a #GtkWidget that was previously set as a mnemnic label for         `widget` with gtk_widget_add_mnemonic_label().
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * A convenience function that uses the theme engine and RC file
     * settings for `widget` to look up `stock_id` and render it to
     * a pixbuf. `stock_id` should be a stock icon ID such as
     * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
     * such as #GTK_ICON_SIZE_MENU. `detail` should be a string that
     * identifies the widget or code doing the rendering, so that
     * theme engines can special-case rendering for that widget or code.
     * 
     * The pixels in the returned #GdkPixbuf are shared with the rest of
     * the application and should not be modified. The pixbuf should be freed
     * after use with g_object_unref().
     * @param stock_id a stock ID
     * @param size a stock size. A size of (GtkIconSize)-1 means     render at the size of the source and don't scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
     * @param detail render detail to pass to theme engine
     */
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    /**
     * Moves a widget from one #GtkContainer to another, handling reference
     * count issues to avoid destroying the widget.
     * @param new_parent a #GtkContainer to move the widget into
     */
    reparent(new_parent: Gtk.Widget): void
    /**
     * Reset the styles of `widget` and all descendents, so when
     * they are looked up again, they get the correct values
     * for the currently loaded RC file settings.
     * 
     * This function is not useful for applications.
     */
    reset_rc_styles(): void
    /**
     * Recursively resets the shape on this widget and its descendants.
     */
    reset_shapes(): void
    /**
     * Very rarely-used function. This function is used to emit
     * an expose event signals on a widget. This function is not
     * normally used directly. The only time it is used is when
     * propagating an expose event to a child %NO_WINDOW widget, and
     * that is normally done using gtk_container_propagate_expose().
     * 
     * If you want to force an area of a window to be redrawn,
     * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
     * To cause the redraw to be done immediately, follow that call
     * with a call to gdk_window_process_updates().
     * @param event a expose #GdkEvent
     */
    send_expose(event: Gdk.Event): number
    /**
     * Sends the focus change `event` to `widget`
     * 
     * This function is not meant to be used by applications. The only time it
     * should be used is when it is necessary for a #GtkWidget to assign focus
     * to a widget that is semantically owned by the first widget even though
     * it's not a direct child - for instance, a search entry in a floating
     * window similar to the quick search in #GtkTreeView.
     * 
     * An example of its usage is:
     * 
     * |[
     *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
     * 
     *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
     *   fevent->focus_change.in = TRUE;
     *   fevent->focus_change.window = gtk_widget_get_window (widget);
     *   if (fevent->focus_change.window != NULL)
     *     g_object_ref (fevent->focus_change.window);
     * 
     *   gtk_widget_send_focus_change (widget, fevent);
     * 
     *   gdk_event_free (event);
     * ```
     * 
     * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
     */
    send_focus_change(event: Gdk.Event): boolean
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren't using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path path used to look up the accelerator
     * @param accel_group a #GtkAccelGroup.
     */
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    /**
     * Sets the widget's allocation.  This should not be used
     * directly, but from within a widget's size_allocate method.
     * @param allocation a pointer to a #GtkAllocation to copy from
     */
    set_allocation(allocation: Gtk.Allocation): void
    /**
     * Sets whether the application intends to draw on the widget in
     * an #GtkWidget::expose-event handler.
     * 
     * This is a hint to the widget and does not affect the behavior of
     * the GTK+ core; many widgets ignore this flag entirely. For widgets
     * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
     * the effect is to suppress default themed drawing of the widget's
     * background. (Children of the widget will still be drawn.) The application
     * is then entirely responsible for drawing the widget background.
     * 
     * Note that the background is still drawn when the widget is mapped.
     * If this is not suitable (e.g. because you want to make a transparent
     * window using an RGBA visual), you can work around this by doing:
     * |[
     *  gtk_widget_realize (window);
     *  gdk_window_set_back_pixmap (window->window, NULL, FALSE);
     *  gtk_widget_show (window);
     * ```
     * 
     * @param app_paintable %TRUE if the application will paint on the widget
     */
    set_app_paintable(app_paintable: boolean): void
    /**
     * Specifies whether `widget` can be a default widget. See
     * gtk_widget_grab_default() for details about the meaning of
     * "default".
     * @param can_default whether or not `widget` can be a default widget.
     */
    set_can_default(can_default: boolean): void
    /**
     * Specifies whether `widget` can own the input focus. See
     * gtk_widget_grab_focus() for actually setting the input focus on a
     * widget.
     * @param can_focus whether or not `widget` can own the input focus.
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its when its parent
     * is mapped and `widget` has been shown with gtk_widget_show().
     * 
     * The child visibility can be set for widget before it is added to
     * a container with gtk_widget_set_parent(), to avoid mapping
     * children unnecessary before immediately unmapping them. However
     * it will be reset to its default state of %TRUE when the widget
     * is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations and
     * never should be called by an application.
     * @param is_visible if %TRUE, `widget` should be mapped along with its parent.
     */
    set_child_visible(is_visible: boolean): void
    /**
     * Sets the colormap for the widget to the given value. Widget must not
     * have been previously realized. This probably should only be used
     * from an <function>init()</function> function (i.e. from the constructor
     * for the widget).
     * @param colormap a colormap
     */
    set_colormap(colormap: Gdk.Colormap): void
    /**
     * Sets a widgets composite name. The widget must be
     * a composite child of its parent; see gtk_widget_push_composite_child().
     * @param name the name to set
     */
    set_composite_name(name: string): void
    /**
     * Sets the reading direction on a particular widget. This direction
     * controls the primary direction for widgets containing text,
     * and also the direction in which the children of a container are
     * packed. The ability to set the direction is present in order
     * so that correct localization into languages with right-to-left
     * reading directions can be done. Generally, applications will
     * let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitely
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by gtk_widget_set_default_direction() will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Widgets are double buffered by default; you can use this function
     * to turn off the buffering. "Double buffered" simply means that
     * gdk_window_begin_paint_region() and gdk_window_end_paint() are called
     * automatically around expose events sent to the
     * widget. gdk_window_begin_paint() diverts all drawing to a widget's
     * window to an offscreen buffer, and gdk_window_end_paint() draws the
     * buffer to the screen. The result is that users see the window
     * update in one smooth step, and don't see individual graphics
     * primitives being rendered.
     * 
     * In very simple terms, double buffered widgets don't flicker,
     * so you would only use this function to turn off double buffering
     * if you had special needs and really knew what you were doing.
     * 
     * Note: if you turn off double-buffering, you have to handle
     * expose events, since even the clearing to the background color or
     * pixmap will not happen automatically (as it is done in
     * gdk_window_begin_paint()).
     * @param double_buffered %TRUE to double-buffer a widget
     */
    set_double_buffered(double_buffered: boolean): void
    /**
     * Sets the event mask (see #GdkEventMask) for a widget. The event
     * mask determines which events a widget will receive. Keep in mind
     * that different widgets have different default event masks, and by
     * changing the event mask you may disrupt a widget's functionality,
     * so be careful. This function must be called while a widget is
     * unrealized. Consider gtk_widget_add_events() for widgets that are
     * already realized, or if you want to preserve the existing event
     * mask. This function can't be used with #GTK_NO_WINDOW widgets;
     * to get events on those widgets, place them inside a #GtkEventBox
     * and receive events on the event box.
     * @param events event mask
     */
    set_events(events: number): void
    /**
     * Sets the extension events mask to `mode`. See #GdkExtensionMode
     * and gdk_input_set_extension_events().
     * @param mode bitfield of extension events to receive
     */
    set_extension_events(mode: Gdk.ExtensionMode): void
    /**
     * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
     * GtkWidget:has-tooltip for more information.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Specifies whether `widget` has a #GdkWindow of its own. Note that
     * all realized widgets have a non-%NULL "window" pointer
     * (gtk_widget_get_window() never returns a %NULL window when a widget
     * is realized), but for many of them it's actually the #GdkWindow of
     * one of its parent widgets. Widgets that do not create a %window for
     * themselves in GtkWidget::realize() must announce this by
     * calling this function with `has_window` = %FALSE.
     * 
     * This function should only be called by widget implementations,
     * and they should call it in their init() function.
     * @param has_window whether or not `widget` has a window.
     */
    set_has_window(has_window: boolean): void
    /**
     * Marks the widget as being realized.
     * 
     * This function should only ever be called in a derived widget's
     * "map" or "unmap" implementation.
     * @param mapped %TRUE to mark the widget as mapped
     */
    set_mapped(mapped: boolean): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * gtkrc file. You can apply a style to widgets with a particular name
     * in the gtkrc file. See the documentation for gtkrc files (on the
     * same page as the docs for #GtkRcStyle).
     * 
     * Note that widget names are separated by periods in paths (see
     * gtk_widget_path()), so names with embedded periods may cause confusion.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Sets the #GtkWidget:no-show-all property, which determines whether
     * calls to gtk_widget_show_all() and gtk_widget_hide_all() will affect
     * this widget.
     * 
     * This is mostly for use in constructing widget hierarchies with externally
     * controlled visibility, see #GtkUIManager.
     * @param no_show_all the new value for the "no-show-all" property
     */
    set_no_show_all(no_show_all: boolean): void
    /**
     * This function is useful only when implementing subclasses of
     * #GtkContainer.
     * Sets the container as the parent of `widget,` and takes care of
     * some details such as updating the state and style of the child
     * to reflect its new location. The opposite function is
     * gtk_widget_unparent().
     * @param parent parent container
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Sets a non default parent window for `widget`.
     * @param parent_window the new parent window.
     */
    set_parent_window(parent_window: Gdk.Window): void
    /**
     * Marks the widget as being realized.
     * 
     * This function should only ever be called in a derived widget's
     * "realize" or "unrealize" implementation.
     * @param realized %TRUE to mark the widget as realized
     */
    set_realized(realized: boolean): void
    /**
     * Specifies whether `widget` will be treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See gtk_widget_grab_default() for details about the meaning of
     * "default".
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets whether the entire widget is queued for drawing when its size
     * allocation changes. By default, this setting is %TRUE and
     * the entire widget is redrawn on every size change. If your widget
     * leaves the upper left unchanged when made bigger, turning this
     * setting off will improve performance.
     * 
     * Note that for %NO_WINDOW widgets setting this flag to %FALSE turns
     * off all allocation on resizing: the widget will not even redraw if
     * its position changes; this is to allow containers that don't draw
     * anything to avoid excess invalidations. If you set this flag on a
     * %NO_WINDOW widget that <emphasis>does</emphasis> draw on `widget->`window,
     * you are responsible for invalidating both the old and new allocation
     * of the widget when the widget is moved and responsible for invalidating
     * regions newly when the widget increases size.
     * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
     */
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    /**
     * For widgets that support scrolling, sets the scroll adjustments and
     * returns %TRUE.  For widgets that don't support scrolling, does
     * nothing and returns %FALSE. Widgets that don't support scrolling
     * can be scrolled by placing them in a #GtkViewport, which does
     * support scrolling.
     * @param hadjustment an adjustment for horizontal scrolling, or %NULL
     * @param vadjustment an adjustment for vertical scrolling, or %NULL
     */
    set_scroll_adjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are "grayed out" and the
     * user can't interact with them. Insensitive widgets are known as
     * "inactive", "disabled", or "ghosted" in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget; that is, the widget's size
     * request will be `width` by `height`. You can use this function to
     * force a widget to be either larger or smaller than it normally
     * would be.
     * 
     * In most cases, gtk_window_set_default_size() is a better choice for
     * toplevel windows than this function; setting the default size will
     * still allow users to shrink the window. Setting the size request
     * will force them to leave the window at least as large as the size
     * request. When dealing with window sizes,
     * gtk_window_set_geometry_hints() can be a useful function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * 
     * The size request of a widget is the smallest size a widget can
     * accept while still functioning well and drawing itself correctly.
     * However in some strange cases a widget may be allocated less than
     * its requested size, and in many cases a widget may be allocated more
     * space than it requested.
     * 
     * If the size request in a given direction is -1 (unset), then
     * the "natural" size request of the widget will be used instead.
     * 
     * Widgets can't actually be allocated a size less than 1 by 1, but
     * you can pass 0,0 to this function to mean "as small as possible."
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * This function is for use in widget implementations. Sets the state
     * of a widget (insensitive, prelighted, etc.) Usually you should set
     * the state using wrapper functions such as gtk_widget_set_sensitive().
     * @param state new state for `widget`
     */
    set_state(state: Gtk.StateType): void
    /**
     * Sets the #GtkStyle for a widget (`widget->`style). You probably don't
     * want to use this function; it interacts badly with themes, because
     * themes work by replacing the #GtkStyle. Instead, use
     * gtk_widget_modify_style().
     * @param style a #GtkStyle, or %NULL to remove the effect of a previous         gtk_widget_set_style() and go back to the default style
     */
    set_style(style?: Gtk.Style | null): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked up with
     *  the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * 
     * This function will take care of setting GtkWidget:has-tooltip to %TRUE
     * and of the default handler for the GtkWidget::query-tooltip signal.
     * 
     * See also the GtkWidget:tooltip-markup property and
     * gtk_tooltip_set_markup().
     * @param markup the contents of the tooltip for `widget,` or %NULL
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip. This function will take
     * care of setting GtkWidget:has-tooltip to %TRUE and of the default
     * handler for the GtkWidget::query-tooltip signal.
     * 
     * See also the GtkWidget:tooltip-text property and gtk_tooltip_set_text().
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text: string): void
    /**
     * Replaces the default, usually yellow, window used for displaying
     * tooltips with `custom_window`. GTK+ will take care of showing and
     * hiding `custom_window` at the right moment, to behave likewise as
     * the default tooltip window. If `custom_window` is %NULL, the default
     * tooltip window will be used.
     * 
     * If the custom window should have the default theming it needs to
     * have the name "gtk-tooltip", see gtk_widget_set_name().
     * @param custom_window a #GtkWindow, or %NULL
     */
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    /**
     * Sets the position of a widget. The funny "u" in the name comes from
     * the "user position" hint specified by the X Window System, and
     * exists for legacy reasons. This function doesn't work if a widget
     * is inside a container; it's only really useful on #GtkWindow.
     * 
     * Don't use this function to center dialogs over the main application
     * window; most window managers will do the centering on your behalf
     * if you call gtk_window_set_transient_for(), and it's really not
     * possible to get the centering to work correctly in all cases from
     * application code. But if you insist, use gtk_window_set_position()
     * to set #GTK_WIN_POS_CENTER_ON_PARENT, don't do the centering
     * manually.
     * 
     * Note that although `x` and `y` can be individually unset, the position
     * is not honoured unless both `x` and `y` are set.
     * @param x x position; -1 to unset x; -2 to leave x unchanged
     * @param y y position; -1 to unset y; -2 to leave y unchanged
     */
    set_uposition(x: number, y: number): void
    /**
     * Sets the minimum size of a widget; that is, the widget's size
     * request will be `width` by `height`. You can use this function to
     * force a widget to be either larger or smaller than it is. The
     * strange "usize" name dates from the early days of GTK+, and derives
     * from X Window System terminology. In many cases,
     * gtk_window_set_default_size() is a better choice for toplevel
     * windows than this function; setting the default size will still
     * allow users to shrink the window. Setting the usize will force them
     * to leave the window at least as large as the usize. When dealing
     * with window sizes, gtk_window_set_geometry_hints() can be a useful
     * function as well.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * @param width minimum width, or -1 to unset
     * @param height minimum height, or -1 to unset
     */
    set_usize(width: number, height: number): void
    /**
     * Sets the visibility state of `widget`. Note that setting this to
     * %TRUE doesn't mean the widget is actually viewable, see
     * gtk_widget_get_visible().
     * 
     * This function simply calls gtk_widget_show() or gtk_widget_hide()
     * but is nicer to use when the visibility of the widget depends on
     * some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Sets a widget's window. This function should only be used in a
     * widget's GtkWidget::realize() implementation. The %window passed is
     * usually either new window created with gdk_window_new(), or the
     * window of its parent widget as returned by
     * gtk_widget_get_parent_window().
     * 
     * Widgets must indicate whether they will create their own #GdkWindow
     * by calling gtk_widget_set_has_window(). This is usually done in the
     * widget's init() function.
     * @param window a #GdkWindow
     */
    set_window(window: Gdk.Window): void
    /**
     * Sets a shape for this widget's GDK window. This allows for
     * transparent windows etc., see gdk_window_shape_combine_mask()
     * for more information.
     * @param shape_mask shape to be added, or %NULL to remove an existing shape
     * @param offset_x X position of shape mask with respect to `window`
     * @param offset_y Y position of shape mask with respect to `window`
     */
    shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    /**
     * Flags a widget to be displayed. Any widget that isn't shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it's easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    show_all(): void
    /**
     * Shows a widget. If the widget is an unmapped toplevel widget
     * (i.e. a #GtkWindow that has not yet been shown), enter the main
     * loop and wait for the window to actually be mapped. Be careful;
     * because the main loop is running, anything can happen during
     * this function.
     */
    show_now(): void
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * @param allocation position and size to be allocated to `widget`
     */
    size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     * 
     * See also gtk_widget_get_child_requisition().
     * @param requisition a #GtkRequisition to be filled in
     */
    size_request(requisition: Gtk.Requisition): void
    /**
     * This function attaches the widget's #GtkStyle to the widget's
     * #GdkWindow. It is a replacement for
     * 
     * <programlisting>
     * widget->style = gtk_style_attach (widget->style, widget->window);
     * </programlisting>
     * 
     * and should only ever be called in a derived widget's "realize"
     * implementation which does not chain up to its parent class'
     * "realize" implementation, because one of the parent classes
     * (finally #GtkWidget) would attach the style itself.
     */
    style_attach(): void
    /**
     * Gets the value of a style property of `widget`.
     * @param property_name the name of a style property
     * @param value location to return the property value
     */
    style_get_property(property_name: string, value: any): void
    /**
     * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
     * This causes all queued #GtkWidget::child-notify signals on `widget` to be
     * emitted.
     */
    thaw_child_notify(): void
    /**
     * Translate coordinates relative to `src_widget'`s allocation to coordinates
     * relative to `dest_widget'`s allocations. In order to perform this
     * operation, both widgets must be realized, and must share a common
     * toplevel.
     * @param dest_widget a #GtkWidget
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    /**
     * Triggers a tooltip query on the display where the toplevel of `widget`
     * is located. See gtk_tooltip_trigger_tooltip_query() for more
     * information.
     */
    trigger_tooltip_query(): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it's currently mapped.
     */
    unmap(): void
    /**
     * This function is only for use in widget implementations.
     * Should be called by implementations of the remove method
     * on #GtkContainer, to dissociate a child from the container.
     */
    unparent(): void
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    unrealize(): void
    /**
     * Inverse of gtk_widget_ref(). Equivalent to g_object_unref().
     */
    unref(): void
    /* Methods of Gtk-2.0.Gtk.Object */
    get_data(key: string): object | null
    get_data_by_id(data_id: GLib.Quark): object | null
    get_user_data(): object | null
    remove_data(key: string): void
    remove_data_by_id(data_id: GLib.Quark): void
    remove_no_notify(key: string): void
    remove_no_notify_by_id(key_id: GLib.Quark): void
    set_data(key: string, data?: object | null): void
    set_data_by_id(data_id: GLib.Quark, data?: object | null): void
    set_data_by_id_full(data_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    set_data_full(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    set_user_data(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gtk-2.0.Gtk.Buildable */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a "constructor" has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under &lt;child&gt;.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Called when the builder finishes the parsing of a
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    set_name(name: string): void
    /* Virtual methods of MxGtk-1.0.MxGtk.LightSwitch */
    vfunc_switch_flipped(state: boolean): void
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a #GtkBuilder
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Constructs a child of `buildable` with the name `name`.
     * 
     * #GtkBuilder calls this function if a "constructor" has been
     * specified in the UI definition.
     * @param builder #GtkBuilder used to construct this object
     * @param name name of child to construct
     */
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    /**
     * This is similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a #GtkBuilder
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called at the end of each custom element handled by
     * the buildable.
     * @param builder #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * This is called for each unknown element under &lt;child&gt;.
     * @param builder a #GtkBuilder used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    /**
     * Get the internal child called `childname` of the `buildable` object.
     * @param builder a #GtkBuilder
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
     * used to construct the `buildable`.
     */
    vfunc_get_name(): string
    /**
     * Called when the builder finishes the parsing of a
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>.
     * Note that this will be called once for each time
     * gtk_builder_add_from_file() or gtk_builder_add_from_string()
     * is called on a builder.
     * @param builder a #GtkBuilder
     */
    vfunc_parser_finished(builder: Gtk.Builder): void
    /**
     * Sets the property name `name` to `value` on the `buildable` object.
     * @param builder a #GtkBuilder
     * @param name name of property
     * @param value value of property
     */
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /**
     * Sets the name of the `buildable` object.
     * @param name name to set
     */
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-2.0.Gtk.Widget */
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This is done by emitting the #GtkWidget::can-activate-accel
     * signal on `widget;` if the signal isn't overridden by a
     * handler or in a derived widget, then the default check is
     * that the widget must be sensitive, and the widget and all
     * its ancestors mapped.
     * @param signal_id the ID of a signal installed on `widget`
     */
    vfunc_can_activate_accel(signal_id: number): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * <link linkend="child-properties">child property</link> `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * @param pspec 
     */
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_client_event(event: Gdk.EventClient): boolean
    vfunc_composited_changed(): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * Rarely-used function. This function is used to emit
     * the event signals on a widget (those signals should never
     * be emitted without using this function to do so).
     * If you want to synthesize an event though, don't use this function;
     * instead, use gtk_main_do_event() so the event will behave as if
     * it were in the event queue. Don't synthesize expose events; instead,
     * use gdk_window_invalidate_rect() to invalidate a region of the
     * window.
     * @param event a #GdkEvent
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_expose_event(event: Gdk.EventExpose): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    /**
     * Returns the accessible object that describes the widget to an
     * assistive technology.
     * 
     * If no accessibility library is loaded (i.e. no ATK implementation library is
     * loaded via <envar>GTK_MODULES</envar> or via another application library,
     * such as libgnome), then this #AtkObject instance may be a no-op. Likewise,
     * if no class-specific #AtkObject implementation is available for the widget
     * instance in question, it will inherit an #AtkObject implementation from the
     * first ancestor class for which such an implementation is defined.
     * 
     * The documentation of the <ulink url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and their uses.
     */
    vfunc_get_accessible(): Atk.Object
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    /**
     * Causes `widget` to have the keyboard focus for the #GtkWindow it's
     * inside. `widget` must be a focusable widget, such as a #GtkEntry;
     * something like #GtkFrame won't work.
     * 
     * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
     * gtk_widget_set_can_focus() to modify that flag.
     * 
     * The widget also needs to be realized and mapped. This is indicated by the
     * related signals. Grabbing the focus immediately after creating the widget
     * will likely fail and cause critical warnings.
     */
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    /**
     * Reverses the effects of gtk_widget_show(), causing the widget to be
     * hidden (invisible to the user).
     */
    vfunc_hide(): void
    /**
     * Recursively hides a widget and any child widgets.
     */
    vfunc_hide_all(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be mapped if it isn't already.
     */
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * 
     * The default handler for this signal activates the `widget` if
     * `group_cycling` is %FALSE, and just grabs the focus if `group_cycling`
     * is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_no_expose_event(event: Gdk.EventAny): boolean
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Creates the GDK (windowing system) resources associated with a
     * widget.  For example, `widget->`window will be created when a widget
     * is realized.  Normally realization happens implicitly; if you show
     * a widget and all its parent containers, then the widget will be
     * realized and mapped automatically.
     * 
     * Realizing a widget requires all
     * the widget's parent widgets to be realized; calling
     * gtk_widget_realize() realizes the widget's parents in addition to
     * `widget` itself. If a widget is not yet inside a toplevel window
     * when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn't very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * GtkWidget::expose-event. Or simply g_signal_connect () to the
     * GtkWidget::realize signal.
     */
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    /**
     * Flags a widget to be displayed. Any widget that isn't shown will
     * not appear on the screen. If you want to show all the widgets in a
     * container, it's easier to call gtk_widget_show_all() on the
     * container, instead of individually showing the widgets.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    /**
     * Recursively shows a widget, and any child widgets (if the widget is
     * a container).
     */
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    /**
     * This function is only used by #GtkContainer subclasses, to assign a size
     * and position to their child widgets.
     * @param allocation position and size to be allocated to `widget`
     */
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    /**
     * This function is typically used when implementing a #GtkContainer
     * subclass.  Obtains the preferred size of a widget. The container
     * uses this information to arrange its child widgets and decide what
     * size allocations to give them with gtk_widget_size_allocate().
     * 
     * You can also call this function from an application, with some
     * caveats. Most notably, getting a size request requires the widget
     * to be associated with a screen, because font information may be
     * needed. Multihead-aware applications should keep this in mind.
     * 
     * Also remember that the size request is not necessarily the size
     * a widget will actually be allocated.
     * 
     * See also gtk_widget_get_child_requisition().
     * @param requisition a #GtkRequisition to be filled in
     */
    vfunc_size_request(requisition: Gtk.Requisition): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_style_set(previous_style: Gtk.Style): void
    /**
     * This function is only for use in widget implementations. Causes
     * a widget to be unmapped if it's currently mapped.
     */
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    /**
     * This function is only useful in widget implementations.
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget, such as `widget->`window).
     */
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk-2.0.Gtk.Object */
    vfunc_destroy(): void
    vfunc_get_arg(arg: Gtk.Arg, arg_id: number): void
    vfunc_set_arg(arg: Gtk.Arg, arg_id: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of MxGtk-1.0.MxGtk.LightSwitch */
    connect(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    connect_after(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    emit(sigName: "switch-flipped", object: boolean): void
    /* Signals of Gtk-2.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "accel-closures-changed"): void
    /**
     * The ::button-press-event signal will be emitted when a button
     * (typically from a mouse) is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    /**
     * The ::button-release-event signal will be emitted when a button
     * (typically from a mouse) is released.
     * 
     * To receive this signal, the #GdkWindow associated to the
     * widget needs to enable the #GDK_BUTTON_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventButton which triggered   this signal.
     */
    connect(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    /**
     * Determines whether an accelerator that activates the signal
     * identified by `signal_id` can currently be activated.
     * This signal is present to allow applications and derived
     * widgets to override the default #GtkWidget handling
     * for determining whether an accelerator can be activated.
     * @param signal_id the ID of a signal installed on `widget`
     */
    connect(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    /**
     * The ::child-notify signal is emitted for each
     * <link linkend="child-properties">child property</link>  that has
     * changed on an object. The signal's detail holds the property name.
     * @param pspec the #GParamSpec of the changed child property
     */
    connect(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    /**
     * The ::client-event will be emitted when the `widget'`s window
     * receives a message (via a ClientMessage event) from another
     * application.
     * @param event the #GdkEventClient which triggered   this signal.
     */
    connect(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of `widget<`!-- -->s screen changes.
     * See gdk_screen_is_composited().
     */
    connect(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::configure-event signal will be emitted when the size, position or
     * stacking of the `widget'`s window has changed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventConfigure which triggered   this signal.
     */
    connect(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    /**
     * Emitted when a redirected window belonging to `widget` gets drawn into.
     * The region/area members of the event shows what area of the redirected
     * drawable was drawn into.
     * @param event the #GdkEventExpose event
     */
    connect(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    /**
     * The ::delete-event signal is emitted if a user requests that
     * a toplevel window is closed. The default handler for this signal
     * destroys the window. Connecting gtk_widget_hide_on_delete() to
     * this signal will cause the window to be hidden instead, so that
     * it can later be shown again without reconstructing it.
     * @param event the event which triggered this signal
     */
    connect(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    /**
     * The ::destroy-event signal is emitted when a #GdkWindow is destroyed.
     * You rarely get this signal, because most widgets disconnect themselves
     * from their window before they destroy it, so no widget owns the
     * window at destroy time.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the event which triggered this signal
     */
    connect(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    /**
     * The ::direction-changed signal is emitted when the text direction
     * of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: LightSwitch, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: LightSwitch, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * The ::drag-begin signal is emitted on the drag source when a drag is
     * started. A typical reason to connect to this signal is to set up a
     * custom drag icon with gtk_drag_source_set_icon().
     * 
     * Note that some widgets set up a drag icon in the default handler of
     * this signal, so you may have to use g_signal_connect_after() to
     * override what the default handler did.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-begin", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-data-delete signal is emitted on the drag source when a drag
     * with the action %GDK_ACTION_MOVE is successfully completed. The signal
     * handler is responsible for deleting the data that has been dropped. What
     * "delete" means depends on the context of the drag operation.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-data-delete", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-data-get signal is emitted on the drag source when the drop
     * site requests the data which is dragged. It is the responsibility of
     * the signal handler to fill `data` with the data in the format which
     * is indicated by `info`. See gtk_selection_data_set() and
     * gtk_selection_data_set_text().
     * @param drag_context the drag context
     * @param data the #GtkSelectionData to be filled with the dragged data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was requested
     */
    connect(sigName: "drag-data-get", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-data-received signal is emitted on the drop site when the
     * dragged data has been received. If the data was received in order to
     * determine whether the drop will be accepted, the handler is expected
     * to call gdk_drag_status() and <emphasis>not</emphasis> finish the drag.
     * If the data was received in response to a #GtkWidget::drag-drop signal
     * (and this is the last target to be received), the handler for this
     * signal is expected to process the received data and then call
     * gtk_drag_finish(), setting the `success` parameter depending on whether
     * the data was processed successfully.
     * 
     * The handler may inspect and modify `drag_context->`action before calling
     * gtk_drag_finish(), e.g. to implement %GDK_ACTION_ASK as shown in the
     * following example:
     * |[
     * void
     * drag_data_received (GtkWidget          *widget,
     *                     GdkDragContext     *drag_context,
     *                     gint                x,
     *                     gint                y,
     *                     GtkSelectionData   *data,
     *                     guint               info,
     *                     guint               time)
     * {
     *   if ((data->length >= 0) && (data->format == 8))
     *     {
     *       if (drag_context->action == GDK_ACTION_ASK)
     *         {
     *           GtkWidget *dialog;
     *           gint response;
     *           
     *           dialog = gtk_message_dialog_new (NULL,
     *                                            GTK_DIALOG_MODAL |
     *                                            GTK_DIALOG_DESTROY_WITH_PARENT,
     *                                            GTK_MESSAGE_INFO,
     *                                            GTK_BUTTONS_YES_NO,
     *                                            "Move the data ?\n");
     *           response = gtk_dialog_run (GTK_DIALOG (dialog));
     *           gtk_widget_destroy (dialog);
     *             
     *           if (response == GTK_RESPONSE_YES)
     *             drag_context->action = GDK_ACTION_MOVE;
     *           else
     *             drag_context->action = GDK_ACTION_COPY;
     *          }
     *          
     *       gtk_drag_finish (drag_context, TRUE, FALSE, time);
     *       return;
     *     }
     *       
     *    gtk_drag_finish (drag_context, FALSE, FALSE, time);
     *  }
     * ```
     * 
     * @param drag_context the drag context
     * @param x where the drop happened
     * @param y where the drop happened
     * @param data the received data
     * @param info the info that has been registered with the target in the        #GtkTargetList
     * @param time the timestamp at which the data was received
     */
    connect(sigName: "drag-data-received", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    /**
     * The ::drag-drop signal is emitted on the drop site when the user drops
     * the data onto the widget. The signal handler must determine whether
     * the cursor position is in a drop zone or not. If it is not in a drop
     * zone, it returns %FALSE and no further processing is necessary.
     * Otherwise, the handler returns %TRUE. In this case, the handler must
     * ensure that gtk_drag_finish() is called to let the source know that
     * the drop is done. The call to gtk_drag_finish() can be done either
     * directly or in a #GtkWidget::drag-data-received handler which gets
     * triggered by calling gtk_drag_get_data() to receive the data for one
     * or more of the supported targets.
     * @param drag_context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-drop", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::drag-end signal is emitted on the drag source when a drag is
     * finished.  A typical reason to connect to this signal is to undo
     * things done in #GtkWidget::drag-begin.
     * @param drag_context the drag context
     */
    connect(sigName: "drag-end", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", drag_context: Gdk.DragContext): void
    /**
     * The ::drag-failed signal is emitted on the drag source when a drag has
     * failed. The signal handler may hook custom code to handle a failed DND
     * operation based on the type of error, it returns %TRUE is the failure has
     * been already handled (not showing the default "drag operation failed"
     * animation), otherwise it returns %FALSE.
     * @param drag_context the drag context
     * @param result the result of the drag operation
     */
    connect(sigName: "drag-failed", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", drag_context: Gdk.DragContext, result: Gtk.DragResult): void
    /**
     * The ::drag-leave signal is emitted on the drop site when the cursor
     * leaves the widget. A typical reason to connect to this signal is to
     * undo things done in #GtkWidget::drag-motion, e.g. undo highlighting
     * with gtk_drag_unhighlight()
     * @param drag_context the drag context
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-leave", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", drag_context: Gdk.DragContext, time: number): void
    /**
     * The drag-motion signal is emitted on the drop site when the user
     * moves the cursor over the widget during a drag. The signal handler
     * must determine whether the cursor position is in a drop zone or not.
     * If it is not in a drop zone, it returns %FALSE and no further processing
     * is necessary. Otherwise, the handler returns %TRUE. In this case, the
     * handler is responsible for providing the necessary information for
     * displaying feedback to the user, by calling gdk_drag_status().
     * 
     * If the decision whether the drop will be accepted or rejected can't be
     * made based solely on the cursor position and the type of the data, the
     * handler may inspect the dragged data by calling gtk_drag_get_data() and
     * defer the gdk_drag_status() call to the #GtkWidget::drag-data-received
     * handler. Note that you cannot not pass #GTK_DEST_DEFAULT_DROP,
     * #GTK_DEST_DEFAULT_MOTION or #GTK_DEST_DEFAULT_ALL to gtk_drag_dest_set()
     * when using the drag-motion signal that way.
     * 
     * Also note that there is no drag-enter signal. The drag receiver has to
     * keep track of whether he has received any drag-motion signals since the
     * last #GtkWidget::drag-leave and if not, treat the drag-motion signal as
     * an "enter" signal. Upon an "enter", the handler will typically highlight
     * the drop site with gtk_drag_highlight().
     * |[
     * static void
     * drag_motion (GtkWidget *widget,
     *              GdkDragContext *context,
     *              gint x,
     *              gint y,
     *              guint time)
     * {
     *   GdkAtom target;
     *  
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     *  
     *   if (!private_data->drag_highlight)
     *    {
     *      private_data->drag_highlight = 1;
     *      gtk_drag_highlight (widget);
     *    }
     *  
     *   target = gtk_drag_dest_find_target (widget, context, NULL);
     *   if (target == GDK_NONE)
     *     gdk_drag_status (context, 0, time);
     *   else
     *    {
     *      private_data->pending_status = context->suggested_action;
     *      gtk_drag_get_data (widget, context, target, time);
     *    }
     *  
     *   return TRUE;
     * }
     *   
     * static void
     * drag_data_received (GtkWidget        *widget,
     *                     GdkDragContext   *context,
     *                     gint              x,
     *                     gint              y,
     *                     GtkSelectionData *selection_data,
     *                     guint             info,
     *                     guint             time)
     * {
     *   PrivateData *private_data = GET_PRIVATE_DATA (widget);
     *   
     *   if (private_data->suggested_action)
     *    {
     *      private_data->suggested_action = 0;
     *      
     *     /&ast; We are getting this data due to a request in drag_motion,
     *      * rather than due to a request in drag_drop, so we are just
     *      * supposed to call gdk_drag_status (), not actually paste in
     *      * the data.
     *      &ast;/
     *      str = gtk_selection_data_get_text (selection_data);
     *      if (!data_is_acceptable (str))
     *        gdk_drag_status (context, 0, time);
     *      else
     *        gdk_drag_status (context, private_data->suggested_action, time);
     *    }
     *   else
     *    {
     *      /&ast; accept the drop &ast;/
     *    }
     * }
     * ```
     * 
     * @param drag_context the drag context
     * @param x the x coordinate of the current cursor position
     * @param y the y coordinate of the current cursor position
     * @param time the timestamp of the motion event
     */
    connect(sigName: "drag-motion", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    /**
     * The ::enter-notify-event will be emitted when the pointer enters
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_ENTER_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    /**
     * The GTK+ main loop will emit three signals for each GDK event delivered
     * to a widget: one generic ::event signal, another, more specific,
     * signal that matches the type of event delivered (e.g.
     * #GtkWidget::key-press-event) and finally a generic
     * #GtkWidget::event-after signal.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * After the emission of the #GtkWidget::event signal and (optionally)
     * the second more specific signal, ::event-after will be emitted
     * regardless of the previous two signals handlers return values.
     * @param event the #GdkEvent which triggered this signal
     */
    connect(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    /**
     * The ::expose-event signal is emitted when an area of a previously
     * obscured #GdkWindow is made visible and needs to be redrawn.
     * #GTK_NO_WINDOW widgets will get a synthesized event from their parent
     * widget.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_EXPOSURE_MASK mask.
     * 
     * Note that the ::expose-event signal has been replaced by a ::draw
     * signal in GTK+ 3. The <link linkend="http://library.gnome.org/devel/gtk3/3.0/gtk-migrating-2-to-3.html">GTK+ 3 migration guide</link>
     * for hints on how to port from ::expose-event to ::draw.
     * @param event the #GdkEventExpose which triggered   this signal.
     */
    connect(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    connect(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    /**
     * The ::focus-in-event signal will be emitted when the keyboard focus
     * enters the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered   this signal.
     */
    connect(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    /**
     * The ::focus-out-event signal will be emitted when the keyboard focus
     * leaves the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_FOCUS_CHANGE_MASK mask.
     * @param event the #GdkEventFocus which triggered this   signal.
     */
    connect(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    /**
     * Emitted when a pointer or keyboard grab on a window belonging
     * to `widget` gets broken.
     * 
     * On X11, this happens when the grab window becomes unviewable
     * (i.e. it or one of its ancestors is unmapped), or if the same
     * application grabs the pointer or keyboard again.
     * @param event the #GdkEventGrabBroken event
     */
    connect(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    connect(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "grab-focus"): void
    /**
     * The ::grab-notify signal is emitted when a widget becomes
     * shadowed by a GTK+ grab (not a pointer or keyboard grab) on
     * another widget, or when it becomes unshadowed due to a grab
     * being removed.
     * 
     * A widget is shadowed by a gtk_grab_add() when the topmost
     * grab widget in the grab stack of its window group is not
     * its ancestor.
     * @param was_grabbed %FALSE if the widget becomes shadowed, %TRUE               if it becomes unshadowed
     */
    connect(sigName: "grab-notify", callback: (($obj: LightSwitch, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: LightSwitch, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::hierarchy-changed signal is emitted when the
     * anchored state of a widget changes. A widget is
     * <firstterm>anchored</firstterm> when its toplevel
     * ancestor is a #GtkWindow. This signal is emitted when
     * a widget changes from un-anchored to anchored or vice-versa.
     * @param previous_toplevel the previous toplevel ancestor, or %NULL   if the widget was previously unanchored
     */
    connect(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    /**
     * The ::key-press-event signal is emitted when a key is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    /**
     * The ::key-release-event signal is emitted when a key is pressed.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_KEY_RELEASE_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventKey which triggered this signal.
     */
    connect(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    /**
     * Gets emitted if keyboard navigation fails.
     * See gtk_widget_keynav_failed() for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * The ::leave-notify-event will be emitted when the pointer leaves
     * the `widget'`s window.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_LEAVE_NOTIFY_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventCrossing which triggered   this signal.
     */
    connect(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "map"): void
    /**
     * The ::map-event signal will be emitted when the `widget'`s window is
     * mapped. A window is mapped when it becomes visible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal.
     */
    connect(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    /**
     * The ::motion-notify-event signal is emitted when the pointer moves
     * over the widget's #GdkWindow.
     * 
     * To receive this signal, the #GdkWindow associated to the widget
     * needs to enable the #GDK_POINTER_MOTION_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventMotion which triggered   this signal.
     */
    connect(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * The ::no-expose-event will be emitted when the `widget'`s window is
     * drawn as a copy of another #GdkDrawable (with gdk_draw_drawable() or
     * gdk_window_copy_area()) which was completely unobscured. If the source
     * window was partially obscured #GdkEventExpose events will be generated
     * for those areas.
     * @param event the #GdkEventNoExpose which triggered   this signal.
     */
    connect(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    /**
     * The ::parent-set signal is emitted when a new parent
     * has been set on a widget.
     * @param old_parent the previous parent, or %NULL if the widget   just got its initial parent.
     */
    connect(sigName: "parent-set", callback: (($obj: LightSwitch, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: LightSwitch, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    /**
     * This signal gets emitted whenever a widget should pop up a context
     * menu. This usually happens through the standard key binding mechanism;
     * by pressing a certain key while a widget is focused, the user can cause
     * the widget to pop up a menu.  For example, the #GtkEntry widget creates
     * a menu with clipboard commands. See <xref linkend="checklist-popup-menu"/>
     * for an example of how to use this signal.
     */
    connect(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    emit(sigName: "popup-menu"): void
    /**
     * The ::property-notify-event signal will be emitted when a property on
     * the `widget'`s window has been changed or deleted.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROPERTY_CHANGE_MASK mask.
     * @param event the #GdkEventProperty which triggered   this signal.
     */
    connect(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_IN_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    /**
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_PROXIMITY_OUT_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventProximity which triggered   this signal.
     */
    connect(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    /**
     * Emitted when #GtkWidget:has-tooltip is %TRUE and the #GtkSettings:gtk-tooltip-timeout
     * has expired with the cursor hovering "above" `widget;` or emitted when `widget` got
     * focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has     been emitted, relative to `widget->`window
     * @param y the y coordinate of the cursor position where the request has     been emitted, relative to `widget->`window
     * @param keyboard_mode %TRUE if the tooltip was trigged using the keyboard
     * @param tooltip a #GtkTooltip
     */
    connect(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::screen-changed signal gets emitted when the
     * screen of a widget has changed.
     * @param previous_screen the previous screen, or %NULL if the   widget was not associated with a screen before
     */
    connect(sigName: "screen-changed", callback: (($obj: LightSwitch, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: LightSwitch, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    /**
     * The ::scroll-event signal is emitted when a button in the 4 to 7
     * range is pressed. Wheel mice are usually configured to generate
     * button press events for buttons 4 and 5 when the wheel is turned.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_BUTTON_PRESS_MASK mask.
     * 
     * This signal will be sent to the grab widget if there is one.
     * @param event the #GdkEventScroll which triggered   this signal.
     */
    connect(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    /**
     * The ::selection-clear-event signal will be emitted when the
     * the `widget'`s window has lost ownership of a selection.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    connect(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    /**
     * The ::selection-request-event signal will be emitted when
     * another client requests ownership of the selection owned by
     * the `widget'`s window.
     * @param event the #GdkEventSelection which triggered   this signal.
     */
    connect(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: LightSwitch, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: LightSwitch, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    connect(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    /**
     * The ::state-changed signal is emitted when the widget state changes.
     * See gtk_widget_get_state().
     * @param state the previous state
     */
    connect(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    /**
     * The ::style-set signal is emitted when a new style has been set
     * on a widget. Note that style-modifying functions like
     * gtk_widget_modify_base() also cause this signal to be emitted.
     * @param previous_style the previous style, or %NULL if the widget   just got its initial style
     */
    connect(sigName: "style-set", callback: (($obj: LightSwitch, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: LightSwitch, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unmap"): void
    /**
     * The ::unmap-event signal will be emitted when the `widget'`s window is
     * unmapped. A window is unmapped when it becomes invisible on the screen.
     * 
     * To receive this signal, the #GdkWindow associated to the widget needs
     * to enable the #GDK_STRUCTURE_MASK mask. GDK will enable this mask
     * automatically for all new windows.
     * @param event the #GdkEventAny which triggered this signal
     */
    connect(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unrealize"): void
    /**
     * The ::visibility-notify-event will be emitted when the `widget'`s window
     * is obscured or unobscured.
     * 
     * To receive this signal the #GdkWindow associated to the widget needs
     * to enable the #GDK_VISIBILITY_NOTIFY_MASK mask.
     * @param event the #GdkEventVisibility which   triggered this signal.
     */
    connect(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    /**
     * The ::window-state-event will be emitted when the state of the
     * toplevel window associated to the `widget` changes.
     * 
     * To receive this signal the #GdkWindow associated to the widget
     * needs to enable the #GDK_STRUCTURE_MASK mask. GDK will enable
     * this mask automatically for all new windows.
     * @param event the #GdkEventWindowState which   triggered this signal.
     */
    connect(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of Gtk-2.0.Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LightSwitch_ConstructProps)
    _init (config?: LightSwitch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LightSwitch
    static $gtype: GObject.Type
}
abstract class FrameClass {
    /* Fields of MxGtk-1.0.MxGtk.FrameClass */
    parent_class: Gtk.FrameClass
    static name: string
}
abstract class LightSwitchClass {
    /* Fields of MxGtk-1.0.MxGtk.LightSwitchClass */
    parent_class: Gtk.DrawingAreaClass
    switch_flipped: (lightswitch: LightSwitch, state: boolean) => void
    static name: string
}
}
export default MxGtk;