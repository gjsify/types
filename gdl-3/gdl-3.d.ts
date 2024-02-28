/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdl-3-ambient.d.ts';
import './gdl-3-import.d.ts';
/**
 * Gdl-3
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

export namespace Gdl {
    /**
     * Used to customize the appearance of a #GdlDockBar.
     */
    enum DockBarStyle {
        /**
         * Buttons display only icons in the dockbar.
         */
        ICONS,
        /**
         * Buttons display only text labels in the dockbar.
         */
        TEXT,
        /**
         * Buttons display text and icons in the dockbar.
         */
        BOTH,
        /**
         * identical to `GDL_DOCK_BAR_BOTH`.
         */
        AUTO,
    }
    /**
     * Define the image displayed.
     */
    enum DockItemButtonImageType {
        /**
         * Display a small cross
         */
        CLOSE,
        /**
         * Display a small triangle
         */
        ICONIFY,
    }
    /**
     * Described the docking position.
     */
    enum DockPlacement {
        /**
         * No position defined
         */
        NONE,
        /**
         * Dock object on the top
         */
        TOP,
        /**
         * Dock object on the bottom
         */
        BOTTOM,
        /**
         * Dock object on the right
         */
        RIGHT,
        /**
         * Dock object on the left
         */
        LEFT,
        /**
         * Dock object on top of the other
         */
        CENTER,
        /**
         * Dock object in its own window
         */
        FLOATING,
    }
    /**
     * Used to customize the appearance of the tabs in #GdlDockNotebook.
     */
    enum SwitcherStyle {
        /**
         * Tabs display only text labels.
         */
        TEXT,
        /**
         * Tabs display only icons.
         */
        ICON,
        /**
         * Tabs display text and icons.
         */
        BOTH,
        /**
         * Same as `GDL_SWITCHER_STYLE_BOTH`.
         */
        TOOLBAR,
        /**
         * Tabs display like notebook tabs.
         */
        TABS,
        /**
         * Do not display tabs.
         */
        NONE,
    }
    const DOCK_MASTER_PROPERTY: string;
    const DOCK_NAME_PROPERTY: string;
    /**
     * Minimum shift count to be used for user defined flags, to be stored in
     * #GdlDockObject.flags.
     */
    const DOCK_OBJECT_FLAGS_SHIFT: number;
    function marshal_VOID__OBJECT_ENUM_BOXED(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function marshal_VOID__OBJECT_INT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function marshal_VOID__UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Described the behaviour of a doc item. The item can have multiple flags set.
     */
    enum DockItemBehavior {
        /**
         * Normal dock item
         */
        NORMAL,
        /**
         * item cannot be undocked
         */
        NEVER_FLOATING,
        /**
         * item cannot be docked vertically
         */
        NEVER_VERTICAL,
        /**
         * item cannot be docked horizontally
         */
        NEVER_HORIZONTAL,
        /**
         * item is locked, it cannot be moved around
         */
        LOCKED,
        /**
         * item cannot be docked at top
         */
        CANT_DOCK_TOP,
        /**
         * item cannot be docked at bottom
         */
        CANT_DOCK_BOTTOM,
        /**
         * item cannot be docked left
         */
        CANT_DOCK_LEFT,
        /**
         * item cannot be docked right
         */
        CANT_DOCK_RIGHT,
        /**
         * item cannot be docked at center
         */
        CANT_DOCK_CENTER,
        /**
         * item cannot be closed
         */
        CANT_CLOSE,
        /**
         * item cannot be iconified
         */
        CANT_ICONIFY,
        /**
         * item doesn't have a grip
         */
        NO_GRIP,
    }
    /**
     * Status flag of a GdlDockItem. Don't use unless you derive a widget from GdlDockItem
     */
    enum DockItemFlags {
        /**
         * item is in a drag operation
         */
        IN_DRAG,
        /**
         * item is in a predrag operation
         */
        IN_PREDRAG,
        /**
         * item is iconified
         */
        ICONIFIED,
        /**
         * indicates the user has started an action on the dock item
         */
        USER_ACTION,
    }
    /**
     * Described the state of a #GdlDockObject.
     *
     * Since 3.6: These flags are available using access function, like
     * gdl_dock_object_is_automatic() or gdl_dock_object_is_closed().
     */
    enum DockObjectFlags {
        /**
         * Object is created and destroyed by the master, not the user
         */
        AUTOMATIC,
        /**
         * Object has a parent
         */
        ATTACHED,
        /**
         * Object is currently part of a rearrangement
         */
        IN_REFLOW,
        /**
         * Object will be removed
         */
        IN_DETACH,
    }
    /**
     * Used to flag additional characteristics to GObject properties used in dock
     * object.
     */
    enum DockParamFlags {
        /**
         * The parameter is to be exported for later layout rebuilding
         */
        EXPORT,
        /**
         * The parameter must be set after adding the children objects
         */
        AFTER,
    }
    module Dock {
        // Signal callback interfaces

        interface LayoutChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Dock extends DockObject {
        // Own properties of Gdl-3.Dock

        default_title: string;
        defaultTitle: string;
        floating: boolean;
        floatx: number;
        floaty: number;
        height: number;
        /**
         * Whether or not to prevent a floating dock window from appearing in the
         * taskbar. Note that this only affects floating windows that are created
         * after this flag is set; existing windows are not affected.  Usually,
         * this property is used when you create the dock.
         */
        skip_taskbar: boolean;
        /**
         * Whether or not to prevent a floating dock window from appearing in the
         * taskbar. Note that this only affects floating windows that are created
         * after this flag is set; existing windows are not affected.  Usually,
         * this property is used when you create the dock.
         */
        skipTaskbar: boolean;
        width: number;

        // Own fields of Gdl-3.Dock

        object: DockObject;

        // Constructors of Gdl-3.Dock

        static ['new'](): Dock;

        // Owm methods of Gdl-3.Dock

        /**
         * Dock an item as a floating item. It creates a new window containing a new
         * dock widget sharing the same master where the item is docked.
         * @param item A #GdlDockItem widget
         * @param x X coordinate of the floating item
         * @param y Y coordinate of the floating item
         * @param width width of the floating item
         * @param height height of the floating item
         */
        add_floating_item(item: DockItem, x: number, y: number, width: number, height: number): void;
        /**
         * Dock in `dock,` the widget `item` at the position defined by `placement`. The
         * function takes care of finding the right parent widget eventually creating
         * it if needed.
         * @param item A #GdlDockItem widget
         * @param placement A position for the widget
         */
        add_item(item: DockItem, placement: DockPlacement): void;
        /**
         * Looks for an #GdlDockItem widget bound to the master of the dock item. It
         * does not search only in the children of this particular dock widget.
         * @param name An item name
         * @returns A #GdlDockItem widget or %NULL
         */
        get_item_by_name(name: string): DockItem;
        /**
         * Returns a list of all item bound to the master of the dock, not only
         * the children of this particular dock widget.
         * @returns A list of #GdlDockItem. The list should be freedwith g_list_free(), but the item still belong to the master.
         */
        get_named_items(): DockObject[];
        /**
         * Looks for an #GdlDockPlaceholder object bound to the master of the dock item.
         * It does not search only in the children of this particular dock widget.
         * @param name An item name
         * @returns A #GdlDockPlaceholder object or %NULL
         */
        get_placeholder_by_name(name: string): DockPlaceholder;
        /**
         * Get the first child of the #GdlDockObject.
         * @returns A #GdlDockObject or %NULL.
         */
        get_root(): DockObject | null;
        /**
         * Hide the preview window used to materialize the dock target.
         */
        hide_preview(): void;
        /**
         * Create a new dock widget having the same master than `original`.
         * @param floating %TRUE to create a floating dock
         * @returns A new #GdlDock widget
         */
        new_from(floating: boolean): Gtk.Widget;
        /**
         * Sets whether or not a floating dock window should be prevented from
         * appearing in the system taskbar.
         * @param skip %TRUE if floating docks should be prevented from appearing in the taskbar
         */
        set_skip_taskbar(skip: boolean): void;
        /**
         * Show a preview window used to materialize the dock target.
         * @param rect The position and the size of the preview window
         */
        show_preview(rect: Gdk.Rectangle): void;
        /**
         * Show a preview window used to materialize the dock target.
         * @param rect The position and the size of the preview window
         */
        xor_rect(rect: Gdk.Rectangle): void;
        /**
         * Hide the preview window used to materialize the dock target.
         */
        xor_rect_hide(): void;
    }

    module DockBar {
        // Constructor properties interface
    }

    class DockBar extends Gtk.Box {
        // Own properties of Gdl-3.DockBar

        dockbar_style: DockBarStyle;
        dockbarStyle: DockBarStyle;
        /**
         * The #GdlDockMaster object attached to the dockbar.
         */
        master: GObject.Object;

        // Constructors of Gdl-3.DockBar

        static ['new'](master?: GObject.Object | null): DockBar;

        // Owm methods of Gdl-3.DockBar

        /**
         * Retrieves the orientation of the `dockbar`.
         * @returns the orientation of the @docbar
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Retrieves the style of the `dockbar`.
         * @returns the style of the @docbar
         */
        get_style(): DockBarStyle;
        /**
         * Set the orientation of the `dockbar`.
         * @param orientation the new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Set the style of the `dockbar`.
         * @param style the new style
         */
        set_style(style: DockBarStyle): void;
    }

    module DockItem {
        // Signal callback interfaces

        interface Deselected {
            (): void;
        }

        interface DockDragBegin {
            (): void;
        }

        interface DockDragEnd {
            (cancel: boolean): void;
        }

        interface DockDragMotion {
            (device: Gdk.Device, x: number, y: number): void;
        }

        interface MoveFocusChild {
            (dir: Gtk.DirectionType): void;
        }

        interface Selected {
            (): void;
        }

        // Constructor properties interface
    }

    class DockItem extends DockObject {
        // Own properties of Gdl-3.DockItem

        behavior: DockItemBehavior;
        /**
         * If set, the dock item is closed.
         */
        closed: boolean;
        /**
         * If set, the dock item is hidden but it has a corresponding icon in the
         * dock bar allowing to show it again.
         */
        iconified: boolean;
        locked: boolean;
        /**
         * The orientation of the docking item. If the orientation is set to
         * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
         * the top of the edge of item (if it is not hidden). If the
         * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
         * widget will be shown down the left edge of the item (even if the
         * widget text direction is set to RTL).
         */
        orientation: Gtk.Orientation;
        preferred_height: number;
        preferredHeight: number;
        preferred_width: number;
        preferredWidth: number;
        resize: boolean;

        // Own fields of Gdl-3.DockItem

        object: DockObject;

        // Constructors of Gdl-3.DockItem

        static ['new'](name: string, long_name: string, behavior: DockItemBehavior): DockItem;

        static new_with_pixbuf_icon(
            name: string,
            long_name: string,
            pixbuf_icon: GdkPixbuf.Pixbuf,
            behavior: DockItemBehavior,
        ): DockItem;

        static new_with_stock(name: string, long_name: string, stock_id: string, behavior: DockItemBehavior): DockItem;

        // Owm methods of Gdl-3.DockItem

        static set_has_grip(has_grip: boolean): void;

        // Owm methods of Gdl-3.DockItem

        /**
         * Binds this dock item to a new dock master.
         * @param dock The #GdlDock widget to bind it to. Note that this widget must be a type of #GdlDock.
         */
        bind(dock: Gtk.Widget): void;
        /**
         * Relocates a dock item to a new location relative to another dock item.
         * @param target The dock item that will be used as the point of reference.
         * @param position The position to dock #item, relative to #target.
         * @param docking_param This value is unused, and will be ignored.
         */
        dock_to(target: DockItem | null, position: DockPlacement, docking_param: number): void;
        /**
         * Retrieves the behavior of the item.
         * @returns the behavior of the item.
         */
        get_behavior_flags(): DockItemBehavior;
        /**
         * Gets the child of the #GdlDockItem, or %NULL if the item contains
         * no child widget. The returned widget does not have a reference
         * added, so you do not need to unref it.
         * @returns pointer to child of the #GdlDockItem
         */
        get_child(): Gtk.Widget;
        /**
         * Gets the size and the position of the drag window in pixels.
         * @param rect A pointer to a #GdkRectangle that will receive the drag position
         */
        get_drag_area(rect: Gdk.Rectangle): void;
        /**
         * This function returns the dock item's grip label widget.
         * @returns Returns the current label widget.
         */
        get_grip(): Gtk.Widget | null;
        /**
         * Retrieves the orientation of the object.
         * @returns the orientation of the object.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Gets the current tab label widget. Note that this label widget is
         * only visible when the "switcher-style" property of the #GdlDockMaster
         * is set to #GDL_SWITCHER_STYLE_TABS
         * @returns Returns the tab label widget.
         */
        get_tablabel(): Gtk.Widget;
        /**
         * This function hides the dock item's grip widget.
         */
        hide_grip(): void;
        /**
         * This function hides the dock item. Since version 3.6, when dock items
         * are hidden they are not removed from the layout.
         *
         * The dock item close button causes the panel to be hidden.
         */
        hide_item(): void;
        /**
         * This function iconifies the dock item. When dock items are iconified
         * they are hidden, and appear only as icons in dock bars.
         *
         * The dock item iconify button causes the panel to be iconified.
         */
        iconify_item(): void;
        /**
         * Checks whether a given #GdlDockItem is closed. It can be only hidden or
         * detached.
         * @returns %TRUE if the dock item is closed.
         */
        is_closed(): boolean;
        /**
         * Checks whether a given #GdlDockItem is iconified.
         * @returns %TRUE if the dock item is iconified.
         */
        is_iconified(): boolean;
        /**
         * Checks whether a given #GdlDockItem is a placeholder created by the
         * #GdlDockLayout object and does not contain a child.
         * @returns %TRUE if the dock item is a placeholder
         */
        is_placeholder(): boolean;
        /**
         * This function locks the dock item. When locked the dock item cannot
         * be dragged around and it doesn't show a grip.
         */
        lock(): void;
        /**
         * This function emits the deselected signal. It is used by #GdlSwitcher
         * to let clients know that this item has been deselected.
         */
        notify_deselected(): void;
        /**
         * This function emits the selected signal. It is to be used by #GdlSwitcher
         * to let clients know that this item has been switched to.
         */
        notify_selected(): void;
        /**
         * Checks whether a given #GdlDockItem or its child widget has focus.
         * This check is performed recursively on child widgets.
         * @returns %TRUE if the dock item or its child widget has focus; %FALSE otherwise.
         */
        or_child_has_focus(): boolean;
        /**
         * Gets the preferred size of the dock item in pixels.
         * @param req A pointer to a #GtkRequisition into which the preferred size will be written.
         */
        preferred_size(req: Gtk.Requisition): void;
        /**
         * This function sets the behavior of the dock item.
         * @param behavior Behavior flags to turn on
         * @param clear Whether to clear state before turning on @flags
         */
        set_behavior_flags(behavior: DockItemBehavior, clear: boolean): void;
        /**
         * Set a new child for the #GdlDockItem. This child is different from the
         * children using the #GtkContainer interface. It is a private child reserved
         * for the widget implementation.
         *
         * If a child is already present, it will be replaced. If `widget` is %NULL the
         * child will be removed.
         * @param child a #GtkWidget
         */
        set_child(child?: Gtk.Widget | null): void;
        /**
         * This method has only an effect when you add you dock_item with
         * GDL_DOCK_ITEM_BEH_NEVER_FLOATING. In this case you have to assign
         * it a default position.*
         *
         * Deprecated 3.6: This function is doing nothing now.
         * @param reference The GdlDockObject which is the default dock for @item
         */
        set_default_position(reference: DockObject): void;
        /**
         * This function sets the layout of the dock item.
         * @param orientation The orientation to set the item to. If the orientation is set to #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along the top of the edge of item (if it is not hidden). If the orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip widget will be shown down the left edge of the item (even if the widget text direction is set to RTL).
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Replaces the current tab label widget with another widget. Note that
         * this label widget is only visible when the "switcher-style" property
         * of the #GdlDockMaster is set to #GDL_SWITCHER_STYLE_TABS
         * @param tablabel The widget that will become the tab label.
         */
        set_tablabel(tablabel: Gtk.Widget): void;
        /**
         * This function shows the dock item's grip widget.
         */
        show_grip(): void;
        /**
         * This function shows the dock item. When dock items are shown, they
         * are displayed in their normal layout position.
         */
        show_item(): void;
        /**
         * Unbinds this dock item from it's dock master.
         */
        unbind(): void;
        /**
         * This function unlocks the dock item. When unlocked the dock item can
         * be dragged around and can show a grip.
         */
        unlock(): void;
        /**
         * This function sets the behavior of the dock item.
         * @param behavior Behavior flags to turn off
         */
        unset_behavior_flags(behavior: DockItemBehavior): void;
    }

    module DockItemButtonImage {
        // Constructor properties interface
    }

    class DockItemButtonImage extends Gtk.Widget {
        // Own fields of Gdl-3.DockItemButtonImage

        image_type: DockItemButtonImageType;

        // Constructors of Gdl-3.DockItemButtonImage

        static ['new'](image_type: DockItemButtonImageType): DockItemButtonImage;
    }

    module DockItemGrip {
        // Constructor properties interface
    }

    class DockItemGrip extends Gtk.Container {
        // Own properties of Gdl-3.DockItemGrip

        item: DockItem;

        // Constructors of Gdl-3.DockItemGrip

        static ['new'](item: DockItem): DockItemGrip;

        // Owm methods of Gdl-3.DockItemGrip

        /**
         * Return %TRUE if the grip window has reveived the event.
         * @param event A #GdkEvent
         * @returns %TRUE if the grip has received the event
         */
        has_event(event: Gdk.Event): boolean;
        /**
         * This function hides the dock item's grip widget handle hatching.
         */
        hide_handle(): void;
        /**
         * Change the cursor when a drag operation is started.
         * @param in_drag %TRUE if a drag operation is started
         */
        set_cursor(in_drag: boolean): void;
        /**
         * Replaces the current label widget with another widget.
         * @param label The widget that will become the label.
         */
        set_label(label: Gtk.Widget): void;
        /**
         * This function shows the dock item's grip widget handle hatching.
         */
        show_handle(): void;
    }

    module DockLayout {
        // Constructor properties interface
    }

    /**
     * The GdlDockLayout struct contains only private fields
     * and should not be directly accessed.
     */
    class DockLayout extends GObject.Object {
        // Own properties of Gdl-3.DockLayout

        readonly dirty: boolean;
        master: GObject.Object;

        // Own fields of Gdl-3.DockLayout

        g_object: GObject.Object;

        // Constructors of Gdl-3.DockLayout

        static ['new'](master: GObject.Object): DockLayout;

        // Owm methods of Gdl-3.DockLayout

        /**
         * Attach the `layout` to the `master` and delete the reference to
         * the master that the layout attached previously.
         *
         * Deprecated 3.6: Use gdl_dock_layout_set_master() instead.
         * @param master The master object to which the layout will be attached
         */
        attach(master: DockMaster): void;
        /**
         * Deletes the layout with the given name from the memory.
         * This will set #GdlDockLayout:dirty to %TRUE.
         * @param name The name of the layout to delete.
         */
        delete_layout(name: string): void;
        /**
         * Get the list of layout names including or not the default layout.
         * @param include_default %TRUE to include the default layout.
         * @returns a #GList list  holding the layout names. You must first free each element in the list  with g_free(), then free the list itself with g_list_free().
         */
        get_layouts(include_default: boolean): string[];
        /**
         * Retrieves the master of the object.
         * @returns a #GdlDockMaster object
         */
        get_master<T = GObject.Object>(): T;
        /**
         * Checks whether the XML tree in memory is different from the file where the layout was saved.
         * @returns %TRUE is the layout in the memory is different from the file, else %FALSE.
         */
        is_dirty(): boolean;
        /**
         * Loads the layout from file with the given `filename`.
         * This will set #GdlDockLayout:dirty to %FALSE.
         * @param filename The name of the file to load.
         * @returns %TRUE if @layout successfully loaded else %FALSE
         */
        load_from_file(filename: string): boolean;
        /**
         * Loads the layout with the given name from the memory.
         * This will set #GdlDockLayout:dirty to %TRUE.
         *
         * See also gdl_dock_layout_load_from_file()
         * @param name The name of the layout to load or %NULL for a default layout name.
         * @returns %TRUE if layout successfully loaded else %FALSE
         */
        load_layout(name?: string | null): boolean;
        /**
         * Saves the `layout` with the given name to the memory.
         * This will set #GdlDockLayout:dirty to %TRUE.
         *
         * See also gdl_dock_layout_save_to_file().
         * @param name The name of the layout to save or %NULL for a default layout name.
         */
        save_layout(name?: string | null): void;
        /**
         * This function saves the current layout in XML format to
         * the file with the given `filename`.
         * @param filename Name of the file we want to save in layout
         * @returns %TRUE if @layout successfuly save to the file, otherwise %FALSE.
         */
        save_to_file(filename: string): boolean;
        /**
         * Attach the `layout` to the `master` and delete the reference to
         * the master that the layout attached previously. Instead of setting `master`
         * directly with the master object, it is possible to use a #GdlDockObject, in
         * this case the layout will be attached to the same master than the dock
         * object.
         * @param master The master object to which the layout will be attached
         */
        set_master(master: GObject.Object): void;
    }

    module DockMaster {
        // Signal callback interfaces

        interface LayoutChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class DockMaster extends GObject.Object {
        // Own properties of Gdl-3.DockMaster

        default_title: string;
        defaultTitle: string;
        locked: number;
        switcher_style: SwitcherStyle;
        switcherStyle: SwitcherStyle;
        tab_pos: Gtk.PositionType;
        tabPos: Gtk.PositionType;
        tab_reorderable: boolean;
        tabReorderable: boolean;

        // Own fields of Gdl-3.DockMaster

        object: GObject.Object;

        // Owm methods of Gdl-3.DockMaster

        /**
         * Add a new dock widget to the master.
         * @param object a #GdlDockObject
         */
        add(object: DockObject): void;
        /**
         * Call `function` on each dock widget of the master.
         * @param _function the function to call with each element's data
         */
        foreach(_function: GLib.Func): void;
        /**
         * Call `function` on each top level dock widget of the master, including or not
         * the controller.
         * @param include_controller %TRUE to include the controller
         * @param _function the function to call with each element's data
         */
        foreach_toplevel(include_controller: boolean, _function: GLib.Func): void;
        /**
         * Retrieves the #GdlDockObject acting as the controller.
         * @returns A #GdlDockObject.
         */
        get_controller(): DockObject;
        /**
         * Return an unique translated dock name.
         * @returns a new translated name. The string has to be freed with g_free().
         */
        get_dock_name(): string;
        /**
         * Looks for a #GdlDockObject named `nick_name`.
         * @param nick_name the name of the dock widget.
         * @returns A #GdlDockObject named @nick_name or %NULL if it does not exist.
         */
        get_object(nick_name: string): DockObject | null;
        /**
         * Remove one dock widget from the master.
         * @param object a #GdlDockObject
         */
        remove(object: DockObject): void;
        /**
         * Set a new controller. The controller must be a top level #GdlDockObject.
         * @param new_controller a #GdlDockObject
         */
        set_controller(new_controller: DockObject): void;
    }

    module DockNotebook {
        // Constructor properties interface
    }

    class DockNotebook extends DockItem {
        // Own properties of Gdl-3.DockNotebook

        page: number;

        // Own fields of Gdl-3.DockNotebook

        item: DockItem;

        // Constructors of Gdl-3.DockNotebook

        static ['new'](): DockNotebook;
    }

    module DockObject {
        // Signal callback interfaces

        interface Detach {
            (recursive: boolean): void;
        }

        interface Dock {
            (requestor: DockObject, position: DockPlacement, other_data?: GObject.Value | null): void;
        }

        // Constructor properties interface
    }

    class DockObject extends Gtk.Container {
        // Own properties of Gdl-3.DockObject

        /**
         * A long descriptive name.
         */
        long_name: string;
        /**
         * A long descriptive name.
         */
        longName: string;
        /**
         * The master which manages all the objects in a dock ring
         */
        master: DockMaster;
        /**
         * The object name.  If the object is manual the name can be used
         * to recall the object from any other object in the ring
         */
        name: string;
        /**
         * A GdkPixbuf to use for the icon of the dock object.
         */
        pixbuf_icon: any;
        /**
         * A GdkPixbuf to use for the icon of the dock object.
         */
        pixbufIcon: any;
        /**
         * A stock id to use for the icon of the dock object.
         */
        stock_id: string;
        /**
         * A stock id to use for the icon of the dock object.
         */
        stockId: string;

        // Own fields of Gdl-3.DockObject

        container: Gtk.Container;
        deprecated_flags: DockObjectFlags;
        deprecated_master: GObject.Object;

        // Owm methods of Gdl-3.DockObject

        /**
         * Finds the nickname for a given type
         * @param type The type for which to find the nickname
         */
        static nick_from_type(type: GObject.GType): string;
        /**
         * Assigns an object type to a given nickname.  If the nickname already exists,
         * then it reassigns it to a new object type.
         * @param nick The nickname for the object type
         * @param type The object type
         */
        static set_type_for_nick(nick: string, type: GObject.GType): GObject.GType;
        /**
         * Finds the object type assigned to a given nickname.
         * @param nick The nickname for the object type
         */
        static type_from_nick(nick: string): GObject.GType;
        static set_is_compound(is_compound: boolean): void;

        // Owm methods of Gdl-3.DockObject

        /**
         * Add a link between a #GdlDockObject and a master. It is normally not used
         * directly because it is automatically called when a new object is docked.
         * @param master A #GdlDockMaster
         */
        bind(master: GObject.Object): void;
        /**
         * This function returns information about placement of a child dock
         * object inside another dock object.  The function returns %TRUE if
         * `child` is effectively a child of `object`.  `placement` should
         * normally be initially setup to %GDL_DOCK_NONE.  If it's set to some
         * other value, this function will not touch the stored value if the
         * specified placement is "compatible" with the actual placement of
         * the child.
         *
         * `placement` can be %NULL, in which case the function simply tells if
         * `child` is attached to `object`.
         * @param child the child of the @object we want the placement for
         * @param placement where to return the placement information
         * @returns %TRUE if @child is a child of @object.
         */
        child_placement(child: DockObject, placement?: DockPlacement | null): boolean;
        /**
         * Dissociate a dock object from its parent, including or not its children.
         * @param recursive %TRUE to detach children
         */
        detach(recursive: boolean): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param requestor The widget to dock
         * @param position The position for the child
         * @param other_data Optional data giving additional information depending on the dock object.
         */
        dock(requestor: DockObject, position: DockPlacement, other_data?: GObject.Value | null): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param x X coordinate
         * @param y Y coordinate
         * @param request A #GdlDockRequest with information about the docking position
         * @returns %TRUE if @object has been docked.
         */
        dock_request(x: number, y: number, request: DockRequest): boolean;
        /**
         * Temporarily freezes a dock object, any call to reduce on the object has no
         * immediate effect. If gdl_dock_object_freeze() has been called more than once,
         * gdl_dock_object_thaw() must be called an equal number of times.
         */
        freeze(): void;
        /**
         * Retrieves the controller of the object.
         * @returns a #GdlDockObject object
         */
        get_controller(): DockObject;
        /**
         * Retrieves the long name of the object. This name is an human readable string
         * which can be displayed in the user interface.
         * @returns the name of the object.
         */
        get_long_name(): string;
        /**
         * Retrieves the master of the object.
         * @returns a #GdlDockMaster object
         */
        get_master<T = GObject.Object>(): T;
        /**
         * Retrieves the name of the object. This name is used to identify the object.
         * @returns the name of the object.
         */
        get_name(): string;
        /**
         * Returns a parent #GdlDockObject if it exists.
         * @returns a #GdlDockObject or %NULL if such object does not exist.
         */
        get_parent_object(): DockObject | null;
        /**
         * Retrieves a pixbuf used as the dock object icon.
         * @returns icon for dock object
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Retrieves the a stock id used as the object icon.
         * @returns A stock id corresponding to the object icon.
         */
        get_stock_id(): string;
        /**
         * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
         * @returns A #GdlDock or %NULL.
         */
        get_toplevel(): Dock | null;
        /**
         * Determine if an object is managed by the dock master, such object is
         * destroyed automatically when it is not needed anymore.
         * @returns %TRUE if the object is managed automatically by the dock master.
         */
        is_automatic(): boolean;
        /**
         * Check if the object is bound to a master.
         * @returns %TRUE if @object has a master
         */
        is_bound(): boolean;
        /**
         * Checks whether a given #GdlDockObject is closed. It can be only hidden and
         * still in the widget hierarchy or detached.
         * @returns %TRUE if the dock object is closed.
         */
        is_closed(): boolean;
        /**
         * Check if an object is a compound object, accepting children widget or not.
         * @returns %TRUE if @object is a compound object.
         */
        is_compound(): boolean;
        /**
         * Determine if an object is frozen and is not removed immediately from the
         * widget hierarchy when it is reduced.
         * @returns %TRUE if the object is frozen.
         */
        is_frozen(): boolean;
        /**
         * Emits the #GdlDockMaster::layout-changed signal on the master of the object
         * if existing.
         */
        layout_changed_notify(): void;
        /**
         * Presents the GDL object to the user. By example, this will select the
         * corresponding page if the object is in a notebook. If `child` is missing,
         * only the `object` will be show.
         * @param child The child widget to present or %NULL
         */
        present(child?: DockObject | null): void;
        /**
         * Remove a compound object if it is not longer useful to hold the child. The
         * object has to be removed and the child reattached to the parent.
         */
        reduce(): void;
        /**
         * Move the `child` widget at another place.
         * @param child The child widget to reorder
         * @param new_position New position for the child
         * @param other_data Optional data giving additional information depending on the dock object.
         * @returns %TRUE if @child has been moved
         */
        reorder(child: DockObject, new_position: DockPlacement, other_data?: GObject.Value | null): boolean;
        /**
         * Set the long name of the object. This name is an human readable string
         * which can be displayed in the user interface.
         * @param name a name for the object
         */
        set_long_name(name: string): void;
        /**
         * A #GdlDockObject is managed by default by the dock master, use this function
         * to make it a manual object if you want to manage the destruction of the
         * object.
         */
        set_manual(): void;
        /**
         * Set the name of the object used to identify it.
         * @param name a name for the object
         */
        set_name(name: string): void;
        /**
         * Set a icon for a dock object using a #GdkPixbuf.
         * @param icon a icon or %NULL
         */
        set_pixbuf(icon?: GdkPixbuf.Pixbuf | null): void;
        /**
         * Set an icon for the dock object using a stock id.
         * @param stock_id a stock id
         */
        set_stock_id(stock_id: string): void;
        /**
         * Thaws a dock object frozen with gdl_dock_object_freeze().
         * Any pending reduce calls are made, maybe leading to the destruction of
         * the object.
         */
        thaw(): void;
        /**
         * This removes the link between an dock object and its master.
         */
        unbind(): void;
    }

    module DockPaned {
        // Constructor properties interface
    }

    class DockPaned extends DockItem {
        // Own properties of Gdl-3.DockPaned

        position: number;

        // Own fields of Gdl-3.DockPaned

        dock_item: DockItem;

        // Constructors of Gdl-3.DockPaned

        static ['new'](orientation: Gtk.Orientation): DockPaned;
    }

    class DockParam {}

    module DockPlaceholder {
        // Constructor properties interface
    }

    class DockPlaceholder extends DockObject {
        // Own properties of Gdl-3.DockPlaceholder

        floating: boolean;
        floatx: number;
        floaty: number;
        height: number;
        host: DockObject;
        next_placement: DockPlacement;
        nextPlacement: DockPlacement;
        sticky: boolean;
        width: number;

        // Own fields of Gdl-3.DockPlaceholder

        object: DockObject;

        // Constructors of Gdl-3.DockPlaceholder

        static ['new'](name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder;

        // Owm methods of Gdl-3.DockPlaceholder

        /**
         * Move the placeholder to the position of `object`.
         * @param object A new #GdlDockObject
         */
        attach(object: DockObject): void;
    }

    module DockTablabel {
        // Signal callback interfaces

        interface ButtonPressedHandle {
            (event: Gdk.Event): void;
        }

        // Constructor properties interface
    }

    class DockTablabel extends Gtk.Bin {
        // Own properties of Gdl-3.DockTablabel

        item: DockItem;

        // Own fields of Gdl-3.DockTablabel

        drag_handle_size: number;
        event_window: any;
        active: boolean;
        drag_start_event: any;
        pre_drag: boolean;

        // Constructors of Gdl-3.DockTablabel

        static ['new'](item: DockItem): DockTablabel;

        // Owm methods of Gdl-3.DockTablabel

        /**
         * Set the widget in "activated" state.
         */
        activate(): void;
        /**
         * Set the widget in "deactivated" state.
         */
        deactivate(): void;
    }

    module PreviewWindow {
        // Constructor properties interface
    }

    /**
     * The GdlDockLayout struct contains only private fields
     * and should not be directly accessed.
     */
    class PreviewWindow extends Gtk.Window {
        // Constructors of Gdl-3.PreviewWindow

        static ['new'](): PreviewWindow;

        // Owm methods of Gdl-3.PreviewWindow

        /**
         * Update the size and position of the preview window. This function is
         * called on drag_motion event to update the representation of the docking site
         * in real time.
         * @param rect the new position and size of the window
         */
        update(rect: Gdk.Rectangle): void;
    }

    module Switcher {
        // Constructor properties interface
    }

    class Switcher extends Gtk.Notebook {
        // Own properties of Gdl-3.Switcher

        switcher_style: SwitcherStyle;
        switcherStyle: SwitcherStyle;
        tab_pos: Gtk.PositionType;
        tabPos: Gtk.PositionType;
        tab_reorderable: boolean;
        tabReorderable: boolean;

        // Constructors of Gdl-3.Switcher

        static ['new'](): Switcher;

        // Owm methods of Gdl-3.Switcher

        /**
         * Adds a page to a #GdlSwitcher.  A button is created in the switcher, with its
         * icon taken preferentially from the `stock_id` parameter.  If this parameter is
         * %NULL, then the `pixbuf_icon` parameter is used.  Failing that, the
         * %GTK_STOCK_NEW stock icon is used.  The text label for the button is specified
         * using the `label` parameter.  If it is %NULL then a default incrementally
         * numbered label is used instead.
         * @param page The page to add to the switcher
         * @param tab_widget The  to add to the switcher
         * @param label The label text for the button
         * @param tooltips The tooltip for the button
         * @param stock_id The stock ID for the button icon
         * @param pixbuf_icon The pixbuf to use for the button icon
         * @param position The position at which to create the page
         * @returns The index (starting from 0) of the appended page in the notebook, or -1 if function fails
         */
        insert_page(
            page: Gtk.Widget,
            tab_widget: Gtk.Widget,
            label: string,
            tooltips: string,
            stock_id: string,
            pixbuf_icon: GdkPixbuf.Pixbuf,
            position: number,
        ): number;
    }

    class DockBarClass {}

    class DockBarPrivate {}

    class DockClass {}

    class DockItemButtonImageClass {}

    class DockItemClass {
        // Owm methods of Gdl-3.DockItemClass

        /**
         * Define in the corresponding kind of dock item has a grip. Even if an item
         * has a grip it can be hidden.
         * @param has_grip %TRUE is the dock item has a grip
         */
        set_has_grip(has_grip: boolean): void;
    }

    class DockItemClassPrivate {}

    class DockItemGripClass {}

    class DockItemGripPrivate {}

    class DockItemPrivate {}

    class DockLayoutClass {}

    class DockLayoutPrivate {}

    class DockMasterClass {}

    class DockMasterPrivate {}

    class DockNotebookClass {}

    class DockNotebookClassPrivate {}

    class DockNotebookPrivate {}

    class DockObjectClass {
        // Owm methods of Gdl-3.DockObjectClass

        /**
         * Define in the corresponding kind of dock object can contains children.
         * @param is_compound %TRUE is the dock object contains other objects
         */
        set_is_compound(is_compound: boolean): void;
    }

    class DockObjectClassPrivate {}

    class DockObjectPrivate {}

    class DockPanedClass {}

    class DockPanedPrivate {}

    class DockPlaceholderClass {}

    class DockPlaceholderPrivate {}

    class DockPrivate {}

    /**
     * Full docking information.
     */
    class DockRequest {
        // Own fields of Gdl-3.DockRequest

        applicant: DockObject;
        target: DockObject;
        position: DockPlacement;
        rect: cairo.RectangleInt;
    }

    class DockTablabelClass {}

    class PreviewWindowClass {}

    class SwitcherClass {}

    class SwitcherClassPrivate {}

    class SwitcherPrivate {}

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

export default Gdl;
// END
