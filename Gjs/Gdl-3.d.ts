// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdl-3
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
/**
 * Described the behaviour of a doc item. The item can have multiple flags set.
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
const DOCK_MASTER_PROPERTY: string
const DOCK_NAME_PROPERTY: string
/**
 * Minimum shift count to be used for user defined flags, to be stored in
 * #GdlDockObject.flags.
 */
const DOCK_OBJECT_FLAGS_SHIFT: number
function marshal_VOID__OBJECT_ENUM_BOXED(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function marshal_VOID__OBJECT_INT_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
function marshal_VOID__UINT_UINT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
interface Dock_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, DockObject_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.Dock

    default_title?: string | null
    floating?: boolean | null
    floatx?: number | null
    floaty?: number | null
    height?: number | null
    /**
     * Whether or not to prevent a floating dock window from appearing in the
     * taskbar. Note that this only affects floating windows that are created
     * after this flag is set; existing windows are not affected.  Usually,
     * this property is used when you create the dock.
     */
    skip_taskbar?: boolean | null
    width?: number | null
}

/**
 * Signal callback interface for `layout-changed`
 */
interface Dock_LayoutChangedSignalCallback {
    ($obj: Dock): void
}

interface Dock extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.Dock

    default_title: string
    readonly floating: boolean
    floatx: number
    floaty: number
    height: number
    /**
     * Whether or not to prevent a floating dock window from appearing in the
     * taskbar. Note that this only affects floating windows that are created
     * after this flag is set; existing windows are not affected.  Usually,
     * this property is used when you create the dock.
     */
    skip_taskbar: boolean
    width: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.Dock

    object: DockObject
    priv: DockPrivate

    // Owm methods of Gdl-3.Gdl.Dock

    /**
     * Dock an item as a floating item. It creates a new window containing a new
     * dock widget sharing the same master where the item is docked.
     * @param item A #GdlDockItem widget
     * @param x X coordinate of the floating item
     * @param y Y coordinate of the floating item
     * @param width width of the floating item
     * @param height height of the floating item
     */
    add_floating_item(item: DockItem, x: number, y: number, width: number, height: number): void
    /**
     * Dock in `dock,` the widget `item` at the position defined by `placement`. The
     * function takes care of finding the right parent widget eventually creating
     * it if needed.
     * @param item A #GdlDockItem widget
     * @param placement A position for the widget
     */
    add_item(item: DockItem, placement: DockPlacement): void
    /**
     * Looks for an #GdlDockItem widget bound to the master of the dock item. It
     * does not search only in the children of this particular dock widget.
     * @param name An item name
     */
    get_item_by_name(name: string): DockItem
    /**
     * Returns a list of all item bound to the master of the dock, not only
     * the children of this particular dock widget.
     */
    get_named_items(): DockObject[]
    /**
     * Looks for an #GdlDockPlaceholder object bound to the master of the dock item.
     * It does not search only in the children of this particular dock widget.
     * @param name An item name
     */
    get_placeholder_by_name(name: string): DockPlaceholder
    /**
     * Get the first child of the #GdlDockObject.
     */
    get_root(): DockObject | null
    /**
     * Hide the preview window used to materialize the dock target.
     */
    hide_preview(): void
    /**
     * Create a new dock widget having the same master than `original`.
     * @param floating %TRUE to create a floating dock
     */
    new_from(floating: boolean): Gtk.Widget
    /**
     * Sets whether or not a floating dock window should be prevented from
     * appearing in the system taskbar.
     * @param skip %TRUE if floating docks should be prevented from appearing in the taskbar
     */
    set_skip_taskbar(skip: boolean): void
    /**
     * Show a preview window used to materialize the dock target.
     * @param rect The position and the size of the preview window
     */
    show_preview(rect: Gdk.Rectangle): void
    /**
     * Show a preview window used to materialize the dock target.
     * @param rect The position and the size of the preview window
     */
    xor_rect(rect: Gdk.Rectangle): void
    /**
     * Hide the preview window used to materialize the dock target.
     */
    xor_rect_hide(): void

    // Conflicting methods

    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Gdl-3.Gdl.Dock

    vfunc_layout_changed(): void

    // Own signals of Gdl-3.Gdl.Dock

    connect(sigName: "layout-changed", callback: Dock_LayoutChangedSignalCallback): number
    connect_after(sigName: "layout-changed", callback: Dock_LayoutChangedSignalCallback): number
    emit(sigName: "layout-changed", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.Dock

    connect(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-title", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floating", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floatx", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floaty", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Dock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dock extends DockObject {

    // Own properties of Gdl-3.Gdl.Dock

    static name: string
    static $gtype: GObject.GType<Dock>

    // Constructors of Gdl-3.Gdl.Dock

    constructor(config?: Dock_ConstructProps) 
    /**
     * Create a new dock.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new dock.
     * @constructor 
     */
    static new(): Dock
    _init(config?: Dock_ConstructProps): void
}

interface DockBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockBar

    dockbar_style?: DockBarStyle | null
    /**
     * The #GdlDockMaster object attached to the dockbar.
     */
    master?: GObject.Object | null
}

interface DockBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdl-3.Gdl.DockBar

    dockbar_style: DockBarStyle
    /**
     * The #GdlDockMaster object attached to the dockbar.
     */
    master: GObject.Object

    // Own fields of Gdl-3.Gdl.DockBar

    parent: Gtk.Box

    // Owm methods of Gdl-3.Gdl.DockBar

    /**
     * Retrieves the orientation of the `dockbar`.
     */
    get_orientation(): Gtk.Orientation
    /**
     * Retrieves the style of the `dockbar`.
     */
    get_style(): DockBarStyle

    // Overloads of get_style

    /**
     * Simply an accessor function that returns `widget->`style.
     */
    get_style(): Gtk.Style
    get_style(...args: any[]): any
    get_style(...args: any[]): DockBarStyle | Gtk.Style | any
    /**
     * Set the orientation of the `dockbar`.
     * @param orientation the new orientation
     */
    set_orientation(orientation: Gtk.Orientation): void
    /**
     * Set the style of the `dockbar`.
     * @param style the new style
     */
    set_style(style: DockBarStyle): void

    // Overloads of set_style

    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    set_style(style: Gtk.Style | null): void
    set_style(...args: any[]): any
    set_style(args_or_style: any[] | Gtk.Style | null): void | any

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.DockBar

    connect(sigName: "notify::dockbar-style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dockbar-style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dockbar-style", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DockBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockBar extends Gtk.Box {

    // Own properties of Gdl-3.Gdl.DockBar

    static name: string
    static $gtype: GObject.GType<DockBar>

    // Constructors of Gdl-3.Gdl.DockBar

    constructor(config?: DockBar_ConstructProps) 
    /**
     * Creates a new GDL dock bar. If a #GdlDockObject is used, the dock bar will
     * be associated with the master of this object.
     * @constructor 
     * @param master The associated #GdlDockMaster or #GdlDockObject object
     */
    constructor(master: GObject.Object | null) 
    /**
     * Creates a new GDL dock bar. If a #GdlDockObject is used, the dock bar will
     * be associated with the master of this object.
     * @constructor 
     * @param master The associated #GdlDockMaster or #GdlDockObject object
     */
    static new(master: GObject.Object | null): DockBar

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DockBar_ConstructProps): void
}

interface DockItem_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, DockObject_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockItem

    behavior?: DockItemBehavior | null
    /**
     * If set, the dock item is closed.
     */
    closed?: boolean | null
    /**
     * If set, the dock item is hidden but it has a corresponding icon in the
     * dock bar allowing to show it again.
     */
    iconified?: boolean | null
    locked?: boolean | null
    /**
     * The orientation of the docking item. If the orientation is set to
     * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
     * the top of the edge of item (if it is not hidden). If the
     * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
     * widget will be shown down the left edge of the item (even if the
     * widget text direction is set to RTL).
     */
    orientation?: Gtk.Orientation | null
    preferred_height?: number | null
    preferred_width?: number | null
    resize?: boolean | null
}

/**
 * Signal callback interface for `deselected`
 */
interface DockItem_DeselectedSignalCallback {
    ($obj: DockItem): void
}

/**
 * Signal callback interface for `dock-drag-begin`
 */
interface DockItem_DockDragBeginSignalCallback {
    ($obj: DockItem): void
}

/**
 * Signal callback interface for `dock-drag-end`
 */
interface DockItem_DockDragEndSignalCallback {
    ($obj: DockItem, cancel: boolean): void
}

/**
 * Signal callback interface for `dock-drag-motion`
 */
interface DockItem_DockDragMotionSignalCallback {
    ($obj: DockItem, device: Gdk.Device, x: number, y: number): void
}

/**
 * Signal callback interface for `move-focus-child`
 */
interface DockItem_MoveFocusChildSignalCallback {
    ($obj: DockItem, dir: Gtk.DirectionType): void
}

/**
 * Signal callback interface for `selected`
 */
interface DockItem_SelectedSignalCallback {
    ($obj: DockItem): void
}

interface DockItem extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockItem

    behavior: DockItemBehavior
    /**
     * If set, the dock item is closed.
     */
    closed: boolean
    /**
     * If set, the dock item is hidden but it has a corresponding icon in the
     * dock bar allowing to show it again.
     */
    iconified: boolean
    locked: boolean
    /**
     * The orientation of the docking item. If the orientation is set to
     * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
     * the top of the edge of item (if it is not hidden). If the
     * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
     * widget will be shown down the left edge of the item (even if the
     * widget text direction is set to RTL).
     */
    orientation: Gtk.Orientation
    preferred_height: number
    preferred_width: number
    resize: boolean

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockItem

    object: DockObject

    // Owm methods of Gdl-3.Gdl.DockItem

    /**
     * Binds this dock item to a new dock master.
     * @param dock The #GdlDock widget to bind it to. Note that this widget must be a type of #GdlDock.
     */
    bind(dock: Gtk.Widget): void

    // Overloads of bind

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    bind(...args: any[]): any
    bind(args_or_master: any[] | GObject.Object): void | any
    /**
     * Relocates a dock item to a new location relative to another dock item.
     * @param target The dock item that will be used as the point of reference.
     * @param position The position to dock #item, relative to #target.
     * @param docking_param This value is unused, and will be ignored.
     */
    dock_to(target: DockItem | null, position: DockPlacement, docking_param: number): void
    /**
     * Retrieves the behavior of the item.
     */
    get_behavior_flags(): DockItemBehavior
    /**
     * Gets the child of the #GdlDockItem, or %NULL if the item contains
     * no child widget. The returned widget does not have a reference
     * added, so you do not need to unref it.
     */
    get_child(): Gtk.Widget
    /**
     * Gets the size and the position of the drag window in pixels.
     * @param rect A pointer to a #GdkRectangle that will receive the drag position
     */
    get_drag_area(rect: Gdk.Rectangle): void
    /**
     * This function returns the dock item's grip label widget.
     */
    get_grip(): Gtk.Widget | null
    /**
     * Retrieves the orientation of the object.
     */
    get_orientation(): Gtk.Orientation
    /**
     * Gets the current tab label widget. Note that this label widget is
     * only visible when the "switcher-style" property of the #GdlDockMaster
     * is set to #GDL_SWITCHER_STYLE_TABS
     */
    get_tablabel(): Gtk.Widget
    /**
     * This function hides the dock item's grip widget.
     */
    hide_grip(): void
    /**
     * This function hides the dock item. Since version 3.6, when dock items
     * are hidden they are not removed from the layout.
     * 
     * The dock item close button causes the panel to be hidden.
     */
    hide_item(): void
    /**
     * This function iconifies the dock item. When dock items are iconified
     * they are hidden, and appear only as icons in dock bars.
     * 
     * The dock item iconify button causes the panel to be iconified.
     */
    iconify_item(): void
    /**
     * Checks whether a given #GdlDockItem is closed. It can be only hidden or
     * detached.
     */
    is_closed(): boolean
    /**
     * Checks whether a given #GdlDockItem is iconified.
     */
    is_iconified(): boolean
    /**
     * Checks whether a given #GdlDockItem is a placeholder created by the
     * #GdlDockLayout object and does not contain a child.
     */
    is_placeholder(): boolean
    /**
     * This function locks the dock item. When locked the dock item cannot
     * be dragged around and it doesn't show a grip.
     */
    lock(): void
    /**
     * This function emits the deselected signal. It is used by #GdlSwitcher
     * to let clients know that this item has been deselected.
     */
    notify_deselected(): void
    /**
     * This function emits the selected signal. It is to be used by #GdlSwitcher
     * to let clients know that this item has been switched to.
     */
    notify_selected(): void
    /**
     * Checks whether a given #GdlDockItem or its child widget has focus.
     * This check is performed recursively on child widgets.
     */
    or_child_has_focus(): boolean
    /**
     * Gets the preferred size of the dock item in pixels.
     * @param req A pointer to a #GtkRequisition into which the preferred size will be written.
     */
    preferred_size(req: Gtk.Requisition): void
    /**
     * This function sets the behavior of the dock item.
     * @param behavior Behavior flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    set_behavior_flags(behavior: DockItemBehavior, clear: boolean): void
    /**
     * Set a new child for the #GdlDockItem. This child is different from the
     * children using the #GtkContainer interface. It is a private child reserved
     * for the widget implementation.
     * 
     * If a child is already present, it will be replaced. If `widget` is %NULL the
     * child will be removed.
     * @param child a #GtkWidget
     */
    set_child(child: Gtk.Widget | null): void
    /**
     * This method has only an effect when you add you dock_item with
     * GDL_DOCK_ITEM_BEH_NEVER_FLOATING. In this case you have to assign
     * it a default position.*
     * 
     * Deprecated 3.6: This function is doing nothing now.
     * @param reference The GdlDockObject which is the default dock for `item`
     */
    set_default_position(reference: DockObject): void
    /**
     * This function sets the layout of the dock item.
     * @param orientation The orientation to set the item to. If the orientation is set to #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along the top of the edge of item (if it is not hidden). If the orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip widget will be shown down the left edge of the item (even if the widget text direction is set to RTL).
     */
    set_orientation(orientation: Gtk.Orientation): void
    /**
     * Replaces the current tab label widget with another widget. Note that
     * this label widget is only visible when the "switcher-style" property
     * of the #GdlDockMaster is set to #GDL_SWITCHER_STYLE_TABS
     * @param tablabel The widget that will become the tab label.
     */
    set_tablabel(tablabel: Gtk.Widget): void
    /**
     * This function shows the dock item's grip widget.
     */
    show_grip(): void
    /**
     * This function shows the dock item. When dock items are shown, they
     * are displayed in their normal layout position.
     */
    show_item(): void
    /**
     * Unbinds this dock item from it's dock master.
     */
    unbind(): void
    /**
     * This function unlocks the dock item. When unlocked the dock item can
     * be dragged around and can show a grip.
     */
    unlock(): void
    /**
     * This function sets the behavior of the dock item.
     * @param behavior Behavior flags to turn off
     */
    unset_behavior_flags(behavior: DockItemBehavior): void

    // Conflicting methods

    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Gdl-3.Gdl.DockItem

    vfunc_dock_drag_begin(): void
    vfunc_dock_drag_end(cancelled: boolean): void
    vfunc_dock_drag_motion(device: Gdk.Device, x: number, y: number): void
    vfunc_move_focus_child(direction: Gtk.DirectionType): void
    /**
     * This function sets the layout of the dock item.
     * @virtual 
     * @param orientation The orientation to set the item to. If the orientation is set to #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along the top of the edge of item (if it is not hidden). If the orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip widget will be shown down the left edge of the item (even if the widget text direction is set to RTL).
     */
    vfunc_set_orientation(orientation: Gtk.Orientation): void

    // Own signals of Gdl-3.Gdl.DockItem

    connect(sigName: "deselected", callback: DockItem_DeselectedSignalCallback): number
    connect_after(sigName: "deselected", callback: DockItem_DeselectedSignalCallback): number
    emit(sigName: "deselected", ...args: any[]): void
    connect(sigName: "dock-drag-begin", callback: DockItem_DockDragBeginSignalCallback): number
    connect_after(sigName: "dock-drag-begin", callback: DockItem_DockDragBeginSignalCallback): number
    emit(sigName: "dock-drag-begin", ...args: any[]): void
    connect(sigName: "dock-drag-end", callback: DockItem_DockDragEndSignalCallback): number
    connect_after(sigName: "dock-drag-end", callback: DockItem_DockDragEndSignalCallback): number
    emit(sigName: "dock-drag-end", cancel: boolean, ...args: any[]): void
    connect(sigName: "dock-drag-motion", callback: DockItem_DockDragMotionSignalCallback): number
    connect_after(sigName: "dock-drag-motion", callback: DockItem_DockDragMotionSignalCallback): number
    emit(sigName: "dock-drag-motion", device: Gdk.Device, x: number, y: number, ...args: any[]): void
    connect(sigName: "move-focus-child", callback: DockItem_MoveFocusChildSignalCallback): number
    connect_after(sigName: "move-focus-child", callback: DockItem_MoveFocusChildSignalCallback): number
    emit(sigName: "move-focus-child", dir: Gtk.DirectionType, ...args: any[]): void
    connect(sigName: "selected", callback: DockItem_SelectedSignalCallback): number
    connect_after(sigName: "selected", callback: DockItem_SelectedSignalCallback): number
    emit(sigName: "selected", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockItem

    connect(sigName: "notify::behavior", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::behavior", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iconified", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-height", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-width", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockItem extends DockObject {

    // Own properties of Gdl-3.Gdl.DockItem

    static name: string
    static $gtype: GObject.GType<DockItem>

    // Constructors of Gdl-3.Gdl.DockItem

    constructor(config?: DockItem_ConstructProps) 
    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    constructor(name: string, long_name: string, behavior: DockItemBehavior) 
    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, long_name: string, behavior: DockItemBehavior): DockItem
    /**
     * Creates a new dock item grip widget with a given pixbuf icon.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param pixbuf_icon Pixbuf icon for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new_with_pixbuf_icon(name: string, long_name: string, pixbuf_icon: GdkPixbuf.Pixbuf, behavior: DockItemBehavior): DockItem
    /**
     * Creates a new dock item grip widget with a given stock id.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param stock_id Stock icon for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new_with_stock(name: string, long_name: string, stock_id: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockItem_ConstructProps): void
    /**
     * Define in the corresponding kind of dock item has a grip. Even if an item
     * has a grip it can be hidden.
     * @param has_grip %TRUE is the dock item has a grip
     */
    static set_has_grip(item_class: DockItem | Function | GObject.GType, has_grip: boolean): void
}

interface DockItemButtonImage_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Widget_ConstructProps {
}

interface DockItemButtonImage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.DockItemButtonImage

    parent: Gtk.Widget
    image_type: DockItemButtonImageType

    // Class property signals of Gdl-3.Gdl.DockItemButtonImage

    connect(sigName: "notify::app-paintable", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockItemButtonImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockItemButtonImage extends Gtk.Widget {

    // Own properties of Gdl-3.Gdl.DockItemButtonImage

    static name: string
    static $gtype: GObject.GType<DockItemButtonImage>

    // Constructors of Gdl-3.Gdl.DockItemButtonImage

    constructor(config?: DockItemButtonImage_ConstructProps) 
    /**
     * Creates a new GDL dock button image object.
     * @constructor 
     * @param image_type Specifies what type of image the widget should display
     */
    constructor(image_type: DockItemButtonImageType) 
    /**
     * Creates a new GDL dock button image object.
     * @constructor 
     * @param image_type Specifies what type of image the widget should display
     */
    static new(image_type: DockItemButtonImageType): DockItemButtonImage
    _init(config?: DockItemButtonImage_ConstructProps): void
}

interface DockItemGrip_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Container_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockItemGrip

    item?: DockItem | null
}

interface DockItemGrip extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockItemGrip

    readonly item: DockItem

    // Own fields of Gdl-3.Gdl.DockItemGrip

    parent: Gtk.Container
    priv: DockItemGripPrivate

    // Owm methods of Gdl-3.Gdl.DockItemGrip

    /**
     * Return %TRUE if the grip window has reveived the event.
     * @param event A #GdkEvent
     */
    has_event(event: Gdk.Event): boolean
    /**
     * This function hides the dock item's grip widget handle hatching.
     */
    hide_handle(): void
    /**
     * Change the cursor when a drag operation is started.
     * @param in_drag %TRUE if a drag operation is started
     */
    set_cursor(in_drag: boolean): void
    /**
     * Replaces the current label widget with another widget.
     * @param label The widget that will become the label.
     */
    set_label(label: Gtk.Widget): void
    /**
     * This function shows the dock item's grip widget handle hatching.
     */
    show_handle(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.DockItemGrip

    connect(sigName: "notify::item", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockItemGrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockItemGrip extends Gtk.Container {

    // Own properties of Gdl-3.Gdl.DockItemGrip

    static name: string
    static $gtype: GObject.GType<DockItemGrip>

    // Constructors of Gdl-3.Gdl.DockItemGrip

    constructor(config?: DockItemGrip_ConstructProps) 
    /**
     * Creates a new GDL dock item grip object.
     * @constructor 
     * @param item The dock item that will "own" this grip widget.
     */
    constructor(item: DockItem) 
    /**
     * Creates a new GDL dock item grip object.
     * @constructor 
     * @param item The dock item that will "own" this grip widget.
     */
    static new(item: DockItem): DockItemGrip
    _init(config?: DockItemGrip_ConstructProps): void
}

interface DockLayout_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockLayout

    master?: GObject.Object | null
}

interface DockLayout {

    // Own properties of Gdl-3.Gdl.DockLayout

    readonly dirty: boolean
    master: GObject.Object

    // Own fields of Gdl-3.Gdl.DockLayout

    g_object: GObject.Object

    // Owm methods of Gdl-3.Gdl.DockLayout

    /**
     * Attach the `layout` to the `master` and delete the reference to
     * the master that the layout attached previously.
     * 
     * Deprecated 3.6: Use gdl_dock_layout_set_master() instead.
     * @param master The master object to which the layout will be attached
     */
    attach(master: DockMaster): void
    /**
     * Deletes the layout with the given name from the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * @param name The name of the layout to delete.
     */
    delete_layout(name: string): void
    /**
     * Get the list of layout names including or not the default layout.
     * @param include_default %TRUE to include the default layout.
     */
    get_layouts(include_default: boolean): string[]
    /**
     * Retrieves the master of the object.
     */
    get_master(): GObject.Object
    /**
     * Checks whether the XML tree in memory is different from the file where the layout was saved.
     */
    is_dirty(): boolean
    /**
     * Loads the layout from file with the given `filename`.
     * This will set #GdlDockLayout:dirty to %FALSE.
     * @param filename The name of the file to load.
     */
    load_from_file(filename: string): boolean
    /**
     * Loads the layout with the given name from the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * 
     * See also gdl_dock_layout_load_from_file()
     * @param name The name of the layout to load or %NULL for a default layout name.
     */
    load_layout(name: string | null): boolean
    /**
     * Saves the `layout` with the given name to the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * 
     * See also gdl_dock_layout_save_to_file().
     * @param name The name of the layout to save or %NULL for a default layout name.
     */
    save_layout(name: string | null): void
    /**
     * This function saves the current layout in XML format to
     * the file with the given `filename`.
     * @param filename Name of the file we want to save in layout
     */
    save_to_file(filename: string): boolean
    /**
     * Attach the `layout` to the `master` and delete the reference to
     * the master that the layout attached previously. Instead of setting `master`
     * directly with the master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @param master The master object to which the layout will be attached
     */
    set_master(master: GObject.Object): void

    // Class property signals of Gdl-3.Gdl.DockLayout

    connect(sigName: "notify::dirty", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The GdlDockLayout struct contains only private fields
 * and should not be directly accessed.
 * @class 
 */
class DockLayout extends GObject.Object {

    // Own properties of Gdl-3.Gdl.DockLayout

    static name: string
    static $gtype: GObject.GType<DockLayout>

    // Constructors of Gdl-3.Gdl.DockLayout

    constructor(config?: DockLayout_ConstructProps) 
    /**
     * Creates a new #GdlDockLayout. Instead of setting `master`
     * directly with a master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @constructor 
     * @param master A master or a dock object to which the layout will be attached.
     */
    constructor(master: GObject.Object) 
    /**
     * Creates a new #GdlDockLayout. Instead of setting `master`
     * directly with a master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @constructor 
     * @param master A master or a dock object to which the layout will be attached.
     */
    static new(master: GObject.Object): DockLayout
    _init(config?: DockLayout_ConstructProps): void
}

interface DockMaster_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockMaster

    default_title?: string | null
    locked?: number | null
    switcher_style?: SwitcherStyle | null
    tab_pos?: Gtk.PositionType | null
    tab_reorderable?: boolean | null
}

/**
 * Signal callback interface for `layout-changed`
 */
interface DockMaster_LayoutChangedSignalCallback {
    ($obj: DockMaster): void
}

interface DockMaster {

    // Own properties of Gdl-3.Gdl.DockMaster

    default_title: string
    locked: number
    switcher_style: SwitcherStyle
    tab_pos: Gtk.PositionType
    tab_reorderable: boolean

    // Own fields of Gdl-3.Gdl.DockMaster

    object: GObject.Object
    priv: DockMasterPrivate

    // Owm methods of Gdl-3.Gdl.DockMaster

    /**
     * Add a new dock widget to the master.
     * @param object a #GdlDockObject
     */
    add(object: DockObject): void
    /**
     * Call `function` on each dock widget of the master.
     * @param function_ the function to call with each element's data
     */
    foreach(function_: GLib.Func): void
    /**
     * Call `function` on each top level dock widget of the master, including or not
     * the controller.
     * @param include_controller %TRUE to include the controller
     * @param function_ the function to call with each element's data
     */
    foreach_toplevel(include_controller: boolean, function_: GLib.Func): void
    /**
     * Retrieves the #GdlDockObject acting as the controller.
     */
    get_controller(): DockObject
    /**
     * Return an unique translated dock name.
     */
    get_dock_name(): string
    /**
     * Looks for a #GdlDockObject named `nick_name`.
     * @param nick_name the name of the dock widget.
     */
    get_object(nick_name: string): DockObject | null
    /**
     * Remove one dock widget from the master.
     * @param object a #GdlDockObject
     */
    remove(object: DockObject): void
    /**
     * Set a new controller. The controller must be a top level #GdlDockObject.
     * @param new_controller a #GdlDockObject
     */
    set_controller(new_controller: DockObject): void

    // Own virtual methods of Gdl-3.Gdl.DockMaster

    vfunc_layout_changed(): void

    // Own signals of Gdl-3.Gdl.DockMaster

    connect(sigName: "layout-changed", callback: DockMaster_LayoutChangedSignalCallback): number
    connect_after(sigName: "layout-changed", callback: DockMaster_LayoutChangedSignalCallback): number
    emit(sigName: "layout-changed", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockMaster

    connect(sigName: "notify::default-title", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-title", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::switcher-style", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switcher-style", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::switcher-style", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::tab-reorderable", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-reorderable", callback: (($obj: DockMaster, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-reorderable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockMaster extends GObject.Object {

    // Own properties of Gdl-3.Gdl.DockMaster

    static name: string
    static $gtype: GObject.GType<DockMaster>

    // Constructors of Gdl-3.Gdl.DockMaster

    constructor(config?: DockMaster_ConstructProps) 
    _init(config?: DockMaster_ConstructProps): void
}

interface DockNotebook_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, DockItem_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockNotebook

    page?: number | null
}

interface DockNotebook extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockNotebook

    page: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockNotebook

    item: DockItem
    priv: DockNotebookPrivate

    // Conflicting methods

    bind(...args: any[]): any
    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.DockNotebook

    connect(sigName: "notify::page", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::behavior", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::behavior", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iconified", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-height", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-width", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockNotebook extends DockItem {

    // Own properties of Gdl-3.Gdl.DockNotebook

    static name: string
    static $gtype: GObject.GType<DockNotebook>

    // Constructors of Gdl-3.Gdl.DockNotebook

    constructor(config?: DockNotebook_ConstructProps) 
    /**
     * Creates a new manual #GdlDockNotebook widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new manual #GdlDockNotebook widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     */
    static new(): DockNotebook

    // Overloads of new

    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, long_name: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockNotebook_ConstructProps): void
}

interface DockObject_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Container_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockObject

    /**
     * A long descriptive name.
     */
    long_name?: string | null
    /**
     * The master which manages all the objects in a dock ring
     */
    master?: DockMaster | null
    /**
     * The object name.  If the object is manual the name can be used
     * to recall the object from any other object in the ring
     */
    name?: string | null
    /**
     * A GdkPixbuf to use for the icon of the dock object.
     */
    pixbuf_icon?: object | null
    /**
     * A stock id to use for the icon of the dock object.
     */
    stock_id?: string | null
}

/**
 * Signal callback interface for `detach`
 */
interface DockObject_DetachSignalCallback {
    ($obj: DockObject, recursive: boolean): void
}

/**
 * Signal callback interface for `dock`
 */
interface DockObject_DockSignalCallback {
    ($obj: DockObject, requestor: DockObject, position: DockPlacement, other_data: any | null): void
}

interface DockObject extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockObject

    /**
     * A long descriptive name.
     */
    long_name: string
    /**
     * The master which manages all the objects in a dock ring
     */
    master: DockMaster
    /**
     * The object name.  If the object is manual the name can be used
     * to recall the object from any other object in the ring
     */
    readonly name: string
    /**
     * A GdkPixbuf to use for the icon of the dock object.
     */
    pixbuf_icon: object
    /**
     * A stock id to use for the icon of the dock object.
     */
    stock_id: string

    // Own fields of Gdl-3.Gdl.DockObject

    container: Gtk.Container
    deprecated_flags: DockObjectFlags
    deprecated_master: GObject.Object

    // Owm methods of Gdl-3.Gdl.DockObject

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
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
     * @param child the child of the `object` we want the placement for
     * @param placement where to return the placement information
     */
    child_placement(child: DockObject, placement: DockPlacement | null): boolean
    /**
     * Dissociate a dock object from its parent, including or not its children.
     * @param recursive %TRUE to detach children
     */
    detach(recursive: boolean): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @param requestor The widget to dock
     * @param position The position for the child
     * @param other_data Optional data giving additional information depending on the dock object.
     */
    dock(requestor: DockObject, position: DockPlacement, other_data: any | null): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @param x X coordinate
     * @param y Y coordinate
     * @param request A #GdlDockRequest with information about the docking position
     */
    dock_request(x: number, y: number, request: DockRequest): boolean
    /**
     * Temporarily freezes a dock object, any call to reduce on the object has no
     * immediate effect. If gdl_dock_object_freeze() has been called more than once,
     * gdl_dock_object_thaw() must be called an equal number of times.
     */
    freeze(): void
    /**
     * Retrieves the controller of the object.
     */
    get_controller(): DockObject
    /**
     * Retrieves the long name of the object. This name is an human readable string
     * which can be displayed in the user interface.
     */
    get_long_name(): string
    /**
     * Retrieves the master of the object.
     */
    get_master(): GObject.Object
    /**
     * Retrieves the name of the object. This name is used to identify the object.
     */
    get_name(): string
    /**
     * Returns a parent #GdlDockObject if it exists.
     */
    get_parent_object(): DockObject | null
    /**
     * Retrieves a pixbuf used as the dock object icon.
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Retrieves the a stock id used as the object icon.
     */
    get_stock_id(): string
    /**
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    get_toplevel(): Dock | null

    // Overloads of get_toplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    get_toplevel(): Gtk.Widget
    get_toplevel(...args: any[]): any
    get_toplevel(...args: any[]): Dock | null | Gtk.Widget | any
    /**
     * Determine if an object is managed by the dock master, such object is
     * destroyed automatically when it is not needed anymore.
     */
    is_automatic(): boolean
    /**
     * Check if the object is bound to a master.
     */
    is_bound(): boolean
    /**
     * Checks whether a given #GdlDockObject is closed. It can be only hidden and
     * still in the widget hierarchy or detached.
     */
    is_closed(): boolean
    /**
     * Check if an object is a compound object, accepting children widget or not.
     */
    is_compound(): boolean
    /**
     * Determine if an object is frozen and is not removed immediately from the
     * widget hierarchy when it is reduced.
     */
    is_frozen(): boolean
    /**
     * Emits the #GdlDockMaster::layout-changed signal on the master of the object
     * if existing.
     */
    layout_changed_notify(): void
    /**
     * Presents the GDL object to the user. By example, this will select the
     * corresponding page if the object is in a notebook. If `child` is missing,
     * only the `object` will be show.
     * @param child The child widget to present or %NULL
     */
    present(child: DockObject | null): void
    /**
     * Remove a compound object if it is not longer useful to hold the child. The
     * object has to be removed and the child reattached to the parent.
     */
    reduce(): void
    /**
     * Move the `child` widget at another place.
     * @param child The child widget to reorder
     * @param new_position New position for the child
     * @param other_data Optional data giving additional information depending on the dock object.
     */
    reorder(child: DockObject, new_position: DockPlacement, other_data: any | null): boolean
    /**
     * Set the long name of the object. This name is an human readable string
     * which can be displayed in the user interface.
     * @param name a name for the object
     */
    set_long_name(name: string): void
    /**
     * A #GdlDockObject is managed by default by the dock master, use this function
     * to make it a manual object if you want to manage the destruction of the
     * object.
     */
    set_manual(): void
    /**
     * Set the name of the object used to identify it.
     * @param name a name for the object
     */
    set_name(name: string): void
    /**
     * Set a icon for a dock object using a #GdkPixbuf.
     * @param icon a icon or %NULL
     */
    set_pixbuf(icon: GdkPixbuf.Pixbuf | null): void
    /**
     * Set an icon for the dock object using a stock id.
     * @param stock_id a stock id
     */
    set_stock_id(stock_id: string): void
    /**
     * Thaws a dock object frozen with gdl_dock_object_freeze().
     * Any pending reduce calls are made, maybe leading to the destruction of
     * the object.
     */
    thaw(): void
    /**
     * This removes the link between an dock object and its master.
     */
    unbind(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdl-3.Gdl.DockObject

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
     * @virtual 
     * @param child the child of the `object` we want the placement for
     * @param placement where to return the placement information
     */
    vfunc_child_placement(child: DockObject, placement: DockPlacement | null): boolean
    /**
     * Dissociate a dock object from its parent, including or not its children.
     * @virtual 
     * @param recursive %TRUE to detach children
     */
    vfunc_detach(recursive: boolean): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @virtual 
     * @param requestor The widget to dock
     * @param position The position for the child
     * @param other_data Optional data giving additional information depending on the dock object.
     */
    vfunc_dock(requestor: DockObject, position: DockPlacement, other_data: any | null): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @virtual 
     * @param x X coordinate
     * @param y Y coordinate
     * @param request A #GdlDockRequest with information about the docking position
     */
    vfunc_dock_request(x: number, y: number, request: DockRequest): boolean
    /**
     * Presents the GDL object to the user. By example, this will select the
     * corresponding page if the object is in a notebook. If `child` is missing,
     * only the `object` will be show.
     * @virtual 
     * @param child The child widget to present or %NULL
     */
    vfunc_present(child: DockObject | null): void
    /**
     * Remove a compound object if it is not longer useful to hold the child. The
     * object has to be removed and the child reattached to the parent.
     * @virtual 
     */
    vfunc_reduce(): void
    /**
     * Move the `child` widget at another place.
     * @virtual 
     * @param child The child widget to reorder
     * @param new_position New position for the child
     * @param other_data Optional data giving additional information depending on the dock object.
     */
    vfunc_reorder(child: DockObject, new_position: DockPlacement, other_data: any | null): boolean

    // Own signals of Gdl-3.Gdl.DockObject

    connect(sigName: "detach", callback: DockObject_DetachSignalCallback): number
    connect_after(sigName: "detach", callback: DockObject_DetachSignalCallback): number
    emit(sigName: "detach", recursive: boolean, ...args: any[]): void
    connect(sigName: "dock", callback: DockObject_DockSignalCallback): number
    connect_after(sigName: "dock", callback: DockObject_DockSignalCallback): number
    emit(sigName: "dock", requestor: DockObject, position: DockPlacement, other_data: any | null, ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockObject

    connect(sigName: "notify::long-name", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockObject extends Gtk.Container {

    // Own properties of Gdl-3.Gdl.DockObject

    static name: string
    static $gtype: GObject.GType<DockObject>

    // Constructors of Gdl-3.Gdl.DockObject

    constructor(config?: DockObject_ConstructProps) 
    _init(config?: DockObject_ConstructProps): void
    /**
     * Finds the nickname for a given type
     * @param type The type for which to find the nickname
     */
    static nick_from_type(type: GObject.GType): string
    /**
     * Assigns an object type to a given nickname.  If the nickname already exists,
     * then it reassigns it to a new object type.
     * @param nick The nickname for the object type
     * @param type The object type
     */
    static set_type_for_nick(nick: string, type: GObject.GType): GObject.GType
    /**
     * Finds the object type assigned to a given nickname.
     * @param nick The nickname for the object type
     */
    static type_from_nick(nick: string): GObject.GType
}

interface DockPaned_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, DockItem_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockPaned

    position?: number | null
}

interface DockPaned extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockPaned

    position: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockPaned

    dock_item: DockItem
    priv: DockPanedPrivate

    // Conflicting methods

    bind(...args: any[]): any
    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.DockPaned

    connect(sigName: "notify::position", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::behavior", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::behavior", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iconified", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-height", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-width", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockPaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockPaned extends DockItem {

    // Own properties of Gdl-3.Gdl.DockPaned

    static name: string
    static $gtype: GObject.GType<DockPaned>

    // Constructors of Gdl-3.Gdl.DockPaned

    constructor(config?: DockPaned_ConstructProps) 
    /**
     * Creates a new manual #GdlDockPaned widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     * @param orientation the pane's orientation.
     */
    constructor(orientation: Gtk.Orientation) 
    /**
     * Creates a new manual #GdlDockPaned widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     * @param orientation the pane's orientation.
     */
    static new(orientation: Gtk.Orientation): DockPaned

    // Overloads of new

    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param long_name Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, long_name: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockPaned_ConstructProps): void
}

interface DockParam {
}

class DockParam {

    // Own properties of Gdl-3.Gdl.DockParam

    static name: string
}

interface DockPlaceholder_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, DockObject_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockPlaceholder

    floating?: boolean | null
    floatx?: number | null
    floaty?: number | null
    height?: number | null
    host?: DockObject | null
    next_placement?: DockPlacement | null
    sticky?: boolean | null
    width?: number | null
}

interface DockPlaceholder extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockPlaceholder

    readonly floating: boolean
    readonly floatx: number
    readonly floaty: number
    height: number
    host: DockObject
    next_placement: DockPlacement
    readonly sticky: boolean
    width: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockPlaceholder

    object: DockObject
    priv: DockPlaceholderPrivate

    // Owm methods of Gdl-3.Gdl.DockPlaceholder

    /**
     * Move the placeholder to the position of `object`.
     * @param object A new #GdlDockObject
     */
    attach(object: DockObject): void

    // Conflicting methods

    get_toplevel(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.DockPlaceholder

    connect(sigName: "notify::floating", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floating", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floatx", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::floaty", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::next-placement", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-placement", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-placement", ...args: any[]): void
    connect(sigName: "notify::sticky", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sticky", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sticky", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-name", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-icon", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockPlaceholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockPlaceholder extends DockObject {

    // Own properties of Gdl-3.Gdl.DockPlaceholder

    static name: string
    static $gtype: GObject.GType<DockPlaceholder>

    // Constructors of Gdl-3.Gdl.DockPlaceholder

    constructor(config?: DockPlaceholder_ConstructProps) 
    /**
     * Creates a new dock placeholder at `object` place. This is a kind of marker
     * allowing you to dock new items later at this place. It is not completely
     * working though.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param object Corresponding #GdlDockObject
     * @param position The position to dock a new item in `object`
     * @param sticky %TRUE if the placeholder move with the `object`
     */
    constructor(name: string, object: DockObject, position: DockPlacement, sticky: boolean) 
    /**
     * Creates a new dock placeholder at `object` place. This is a kind of marker
     * allowing you to dock new items later at this place. It is not completely
     * working though.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param object Corresponding #GdlDockObject
     * @param position The position to dock a new item in `object`
     * @param sticky %TRUE if the placeholder move with the `object`
     */
    static new(name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder
    _init(config?: DockPlaceholder_ConstructProps): void
}

interface DockTablabel_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Bin_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.DockTablabel

    item?: DockItem | null
}

/**
 * Signal callback interface for `button-pressed-handle`
 */
interface DockTablabel_ButtonPressedHandleSignalCallback {
    ($obj: DockTablabel, event: Gdk.Event): void
}

interface DockTablabel extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.DockTablabel

    parent: Gtk.Bin
    drag_handle_size: number
    item: Gtk.Widget
    event_window: Gdk.Window
    active: boolean
    drag_start_event: Gdk.EventButton
    pre_drag: boolean

    // Owm methods of Gdl-3.Gdl.DockTablabel

    /**
     * Set the widget in "activated" state.
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    activate(...args: any[]): any
    activate(...args: any[]): void | boolean | any
    /**
     * Set the widget in "deactivated" state.
     */
    deactivate(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdl-3.Gdl.DockTablabel

    vfunc_button_pressed_handle(event: Gdk.EventButton): void

    // Own signals of Gdl-3.Gdl.DockTablabel

    connect(sigName: "button-pressed-handle", callback: DockTablabel_ButtonPressedHandleSignalCallback): number
    connect_after(sigName: "button-pressed-handle", callback: DockTablabel_ButtonPressedHandleSignalCallback): number
    emit(sigName: "button-pressed-handle", event: Gdk.Event, ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockTablabel

    connect(sigName: "notify::border-width", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DockTablabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DockTablabel extends Gtk.Bin {

    // Own properties of Gdl-3.Gdl.DockTablabel

    static name: string
    static $gtype: GObject.GType<DockTablabel>

    // Constructors of Gdl-3.Gdl.DockTablabel

    constructor(config?: DockTablabel_ConstructProps) 
    /**
     * Creates a new GDL tab label widget.
     * @constructor 
     * @param item The dock item that associated with this label widget.
     */
    constructor(item: DockItem) 
    /**
     * Creates a new GDL tab label widget.
     * @constructor 
     * @param item The dock item that associated with this label widget.
     */
    static new(item: DockItem): DockTablabel
    _init(config?: DockTablabel_ConstructProps): void
}

interface PreviewWindow_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Window_ConstructProps {
}

interface PreviewWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.PreviewWindow

    parent_instance: Gtk.Window

    // Owm methods of Gdl-3.Gdl.PreviewWindow

    /**
     * Update the size and position of the preview window. This function is
     * called on drag_motion event to update the representation of the docking site
     * in real time.
     * @param rect the new position and size of the window
     */
    update(rect: Gdk.Rectangle): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.PreviewWindow

    connect(sigName: "notify::accept-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PreviewWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The GdlDockLayout struct contains only private fields
 * and should not be directly accessed.
 * @class 
 */
class PreviewWindow extends Gtk.Window {

    // Own properties of Gdl-3.Gdl.PreviewWindow

    static name: string
    static $gtype: GObject.GType<PreviewWindow>

    // Constructors of Gdl-3.Gdl.PreviewWindow

    constructor(config?: PreviewWindow_ConstructProps) 
    /**
     * Creates a new #GdlPreviewWindow
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdlPreviewWindow
     * @constructor 
     */
    static new(): PreviewWindow

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: PreviewWindow_ConstructProps): void
}

interface Switcher_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Notebook_ConstructProps {

    // Own constructor properties of Gdl-3.Gdl.Switcher

    switcher_style?: SwitcherStyle | null
    tab_pos?: Gtk.PositionType | null
    tab_reorderable?: boolean | null
}

interface Switcher extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.Switcher

    switcher_style: SwitcherStyle
    tab_pos: Gtk.PositionType
    tab_reorderable: boolean

    // Own fields of Gdl-3.Gdl.Switcher

    parent: Gtk.Notebook
    priv: SwitcherPrivate

    // Owm methods of Gdl-3.Gdl.Switcher

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
     */
    insert_page(page: Gtk.Widget, tab_widget?: Gtk.Widget, label?: string, tooltips?: string, stock_id?: string, pixbuf_icon?: GdkPixbuf.Pixbuf, position?: number): number

    // Overloads of insert_page

    /**
     * Insert a page into `notebook` at the given position.
     * @param child the #GtkWidget to use as the contents of the page
     * @param tab_label the #GtkWidget to be used as the label     for the page, or %NULL to use the default label, “page N”
     * @param position the index (starting at 0) at which to insert the page,     or -1 to append the page after all other pages
     */
    insert_page(child: Gtk.Widget, tab_label?: Gtk.Widget | null, position?: number): number
    insert_page(...args: any[]): any
    insert_page(args_or_child: any[] | Gtk.Widget, tab_label?: Gtk.Widget | null, position?: number): number | any

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdl-3.Gdl.Switcher

    connect(sigName: "notify::switcher-style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switcher-style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::switcher-style", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::tab-reorderable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-reorderable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-reorderable", ...args: any[]): void
    connect(sigName: "notify::enable-popup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Switcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Switcher extends Gtk.Notebook {

    // Own properties of Gdl-3.Gdl.Switcher

    static name: string
    static $gtype: GObject.GType<Switcher>

    // Constructors of Gdl-3.Gdl.Switcher

    constructor(config?: Switcher_ConstructProps) 
    /**
     * Creates a new notebook widget with no pages.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new notebook widget with no pages.
     * @constructor 
     */
    static new(): Switcher
    _init(config?: Switcher_ConstructProps): void
}

interface DockBarClass {

    // Own fields of Gdl-3.Gdl.DockBarClass

    parent_class: Gtk.BoxClass
}

abstract class DockBarClass {

    // Own properties of Gdl-3.Gdl.DockBarClass

    static name: string
}

interface DockBarPrivate {
}

class DockBarPrivate {

    // Own properties of Gdl-3.Gdl.DockBarPrivate

    static name: string
}

interface DockClass {

    // Own fields of Gdl-3.Gdl.DockClass

    layout_changed: (dock: Dock) => void
}

abstract class DockClass {

    // Own properties of Gdl-3.Gdl.DockClass

    static name: string
}

interface DockItemButtonImageClass {

    // Own fields of Gdl-3.Gdl.DockItemButtonImageClass

    parent_class: Gtk.WidgetClass
}

abstract class DockItemButtonImageClass {

    // Own properties of Gdl-3.Gdl.DockItemButtonImageClass

    static name: string
}

interface DockItemClass {

    // Own fields of Gdl-3.Gdl.DockItemClass

    parent_class: DockObjectClass
    priv: DockItemClassPrivate
    set_orientation: (item: DockItem, orientation: Gtk.Orientation) => void
    dock_drag_begin: (item: DockItem) => void
    dock_drag_motion: (item: DockItem, device: Gdk.Device, x: number, y: number) => void
    dock_drag_end: (item: DockItem, cancelled: boolean) => void
    move_focus_child: (item: DockItem, direction: Gtk.DirectionType) => void
}

abstract class DockItemClass {

    // Own properties of Gdl-3.Gdl.DockItemClass

    static name: string

    // Owm static methods of Gdl-3.Gdl.DockItemClass

    /**
     * Define in the corresponding kind of dock item has a grip. Even if an item
     * has a grip it can be hidden.
     * @param has_grip %TRUE is the dock item has a grip
     */
    static set_has_grip(item_class: DockItem | Function | GObject.GType, has_grip: boolean): void
}

interface DockItemClassPrivate {
}

class DockItemClassPrivate {

    // Own properties of Gdl-3.Gdl.DockItemClassPrivate

    static name: string
}

interface DockItemGripClass {

    // Own fields of Gdl-3.Gdl.DockItemGripClass

    parent_class: Gtk.ContainerClass
}

abstract class DockItemGripClass {

    // Own properties of Gdl-3.Gdl.DockItemGripClass

    static name: string
}

interface DockItemGripPrivate {
}

class DockItemGripPrivate {

    // Own properties of Gdl-3.Gdl.DockItemGripPrivate

    static name: string
}

interface DockItemPrivate {
}

class DockItemPrivate {

    // Own properties of Gdl-3.Gdl.DockItemPrivate

    static name: string
}

interface DockLayoutClass {

    // Own fields of Gdl-3.Gdl.DockLayoutClass

    g_object_class: GObject.ObjectClass
}

abstract class DockLayoutClass {

    // Own properties of Gdl-3.Gdl.DockLayoutClass

    static name: string
}

interface DockLayoutPrivate {
}

class DockLayoutPrivate {

    // Own properties of Gdl-3.Gdl.DockLayoutPrivate

    static name: string
}

interface DockMasterClass {

    // Own fields of Gdl-3.Gdl.DockMasterClass

    parent_class: GObject.ObjectClass
    layout_changed: (master: DockMaster) => void
}

abstract class DockMasterClass {

    // Own properties of Gdl-3.Gdl.DockMasterClass

    static name: string
}

interface DockMasterPrivate {
}

class DockMasterPrivate {

    // Own properties of Gdl-3.Gdl.DockMasterPrivate

    static name: string
}

interface DockNotebookClass {

    // Own fields of Gdl-3.Gdl.DockNotebookClass

    parent_class: DockItemClass
    priv: DockNotebookClassPrivate
}

abstract class DockNotebookClass {

    // Own properties of Gdl-3.Gdl.DockNotebookClass

    static name: string
}

interface DockNotebookClassPrivate {
}

class DockNotebookClassPrivate {

    // Own properties of Gdl-3.Gdl.DockNotebookClassPrivate

    static name: string
}

interface DockNotebookPrivate {
}

class DockNotebookPrivate {

    // Own properties of Gdl-3.Gdl.DockNotebookPrivate

    static name: string
}

interface DockObjectClass {

    // Own fields of Gdl-3.Gdl.DockObjectClass

    parent_class: Gtk.ContainerClass
    priv: DockObjectClassPrivate
    detach: (object: DockObject, recursive: boolean) => void
    reduce: (object: DockObject) => void
    dock_request: (object: DockObject, x: number, y: number, request: DockRequest) => boolean
    dock: (object: DockObject, requestor: DockObject, position: DockPlacement, other_data: any | null) => void
    reorder: (object: DockObject, child: DockObject, new_position: DockPlacement, other_data: any | null) => boolean
    present: (object: DockObject, child: DockObject | null) => void
    child_placement: (object: DockObject, child: DockObject, placement: DockPlacement | null) => boolean

    // Owm methods of Gdl-3.Gdl.DockObjectClass

    /**
     * Define in the corresponding kind of dock object can contains children.
     * @param is_compound %TRUE is the dock object contains other objects
     */
    set_is_compound(object_class: DockObject | Function | GObject.GType, is_compound: boolean): void
}

abstract class DockObjectClass {

    // Own properties of Gdl-3.Gdl.DockObjectClass

    static name: string
}

interface DockObjectClassPrivate {
}

class DockObjectClassPrivate {

    // Own properties of Gdl-3.Gdl.DockObjectClassPrivate

    static name: string
}

interface DockObjectPrivate {
}

class DockObjectPrivate {

    // Own properties of Gdl-3.Gdl.DockObjectPrivate

    static name: string
}

interface DockPanedClass {

    // Own fields of Gdl-3.Gdl.DockPanedClass

    parent_class: DockItemClass
}

abstract class DockPanedClass {

    // Own properties of Gdl-3.Gdl.DockPanedClass

    static name: string
}

interface DockPanedPrivate {
}

class DockPanedPrivate {

    // Own properties of Gdl-3.Gdl.DockPanedPrivate

    static name: string
}

interface DockPlaceholderClass {

    // Own fields of Gdl-3.Gdl.DockPlaceholderClass

    parent_class: DockObjectClass
}

abstract class DockPlaceholderClass {

    // Own properties of Gdl-3.Gdl.DockPlaceholderClass

    static name: string
}

interface DockPlaceholderPrivate {
}

class DockPlaceholderPrivate {

    // Own properties of Gdl-3.Gdl.DockPlaceholderPrivate

    static name: string
}

interface DockPrivate {
}

class DockPrivate {

    // Own properties of Gdl-3.Gdl.DockPrivate

    static name: string
}

interface DockRequest {

    // Own fields of Gdl-3.Gdl.DockRequest

    /**
     * A #GdlDockObject to dock
     * @field 
     */
    applicant: DockObject
    /**
     * The #GdlDockObject target
     * @field 
     */
    target: DockObject
    /**
     * how to dock `applicant` in `target`
     * @field 
     */
    position: DockPlacement
    /**
     * Precise position
     * @field 
     */
    rect: cairo.RectangleInt
    /**
     * Additional information
     * @field 
     */
    extra: any
}

/**
 * Full docking information.
 * @record 
 */
class DockRequest {

    // Own properties of Gdl-3.Gdl.DockRequest

    static name: string
}

interface DockTablabelClass {

    // Own fields of Gdl-3.Gdl.DockTablabelClass

    parent_class: Gtk.BinClass
    button_pressed_handle: (tablabel: DockTablabel, event: Gdk.EventButton) => void
}

abstract class DockTablabelClass {

    // Own properties of Gdl-3.Gdl.DockTablabelClass

    static name: string
}

interface PreviewWindowClass {

    // Own fields of Gdl-3.Gdl.PreviewWindowClass

    parent_class: Gtk.WindowClass
}

abstract class PreviewWindowClass {

    // Own properties of Gdl-3.Gdl.PreviewWindowClass

    static name: string
}

interface SwitcherClass {

    // Own fields of Gdl-3.Gdl.SwitcherClass

    parent_class: Gtk.NotebookClass
    priv: SwitcherClassPrivate
}

abstract class SwitcherClass {

    // Own properties of Gdl-3.Gdl.SwitcherClass

    static name: string
}

interface SwitcherClassPrivate {
}

class SwitcherClassPrivate {

    // Own properties of Gdl-3.Gdl.SwitcherClassPrivate

    static name: string
}

interface SwitcherPrivate {
}

class SwitcherPrivate {

    // Own properties of Gdl-3.Gdl.SwitcherPrivate

    static name: string
}

}
export default Gdl;