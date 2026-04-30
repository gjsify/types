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

export namespace Gdl {
    /**
     * Gdl-3
     */

    /**
     * @gir-type Enum
     */
    export namespace DockBarStyle {
        export const $gtype: GObject.GType<DockBarStyle>;
    }

    /**
     * Used to customize the appearance of a {@link Gdl.DockBar}.
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace DockPlacement {
        export const $gtype: GObject.GType<DockPlacement>;
    }

    /**
     * Described the docking position.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace SwitcherStyle {
        export const $gtype: GObject.GType<SwitcherStyle>;
    }

    /**
     * Used to customize the appearance of the tabs in {@link Gdl.DockNotebook}.
     * @gir-type Enum
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
     * {@link Gdl.DockObject}.flags.
     * @deprecated since 3.6: Use a private flag instead
     */
    const DOCK_OBJECT_FLAGS_SHIFT: number;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function marshal_VOID__OBJECT_ENUM_BOXED(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any | null,
        marshal_data: any | null,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function marshal_VOID__OBJECT_INT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any | null,
        marshal_data: any | null,
    ): void;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function marshal_VOID__UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint: any | null,
        marshal_data: any | null,
    ): void;
    /**
     * @gir-type Flags
     */
    export namespace DockItemBehavior {
        export const $gtype: GObject.GType<DockItemBehavior>;
    }

    /**
     * Described the behaviour of a doc item. The item can have multiple flags set.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace DockItemFlags {
        export const $gtype: GObject.GType<DockItemFlags>;
    }

    /**
     * Status flag of a GdlDockItem. Don't use unless you derive a widget from GdlDockItem
     * @gir-type Flags
     * @deprecated since 3.6: Use your own private data instead.
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
     * @gir-type Flags
     */
    export namespace DockObjectFlags {
        export const $gtype: GObject.GType<DockObjectFlags>;
    }

    /**
     * Described the state of a {@link Gdl.DockObject}.
     *
     * Since 3.6: These flags are available using access function, like
     * `gdl_dock_object_is_automatic()` or `gdl_dock_object_is_closed()`.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace DockParamFlags {
        export const $gtype: GObject.GType<DockParamFlags>;
    }

    /**
     * Used to flag additional characteristics to GObject properties used in dock
     * object.
     * @gir-type Flags
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

    namespace Dock {
        // Signal signatures
        interface SignalSignatures extends DockObject.SignalSignatures {
            /**
             * Signals that the layout has changed, one or more widgets have been moved,
             * added or removed.
             * @signal
             * @run-last
             */
            'layout-changed': () => void;
            'notify::default-title': (pspec: GObject.ParamSpec) => void;
            'notify::floating': (pspec: GObject.ParamSpec) => void;
            'notify::floatx': (pspec: GObject.ParamSpec) => void;
            'notify::floaty': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends DockObject.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            default_title: string;
            defaultTitle: string;
            floating: boolean;
            floatx: number;
            floaty: number;
            height: number;
            skip_taskbar: boolean;
            skipTaskbar: boolean;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Dock extends DockObject implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Dock>;

        // Properties

        /**
         * @default null
         */
        get default_title(): string;
        set default_title(val: string);
        /**
         * @default null
         */
        get defaultTitle(): string;
        set defaultTitle(val: string);
        /**
         * @construct-only
         * @default false
         */
        get floating(): boolean;
        /**
         * @default 0
         */
        get floatx(): number;
        set floatx(val: number);
        /**
         * @default 0
         */
        get floaty(): number;
        set floaty(val: number);
        /**
         * @default -1
         */
        get height(): number;
        set height(val: number);
        /**
         * Whether or not to prevent a floating dock window from appearing in the
         * taskbar. Note that this only affects floating windows that are created
         * after this flag is set; existing windows are not affected.  Usually,
         * this property is used when you create the dock.
         * @since 3.6
         * @default true
         */
        get skip_taskbar(): boolean;
        set skip_taskbar(val: boolean);
        /**
         * Whether or not to prevent a floating dock window from appearing in the
         * taskbar. Note that this only affects floating windows that are created
         * after this flag is set; existing windows are not affected.  Usually,
         * this property is used when you create the dock.
         * @since 3.6
         * @default true
         */
        get skipTaskbar(): boolean;
        set skipTaskbar(val: boolean);
        /**
         * @default -1
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dock.SignalSignatures;

        // Fields

        object: DockObject;

        // Constructors

        constructor(properties?: Partial<Dock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dock;

        // Signals

        /** @signal */
        connect<K extends keyof Dock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_layout_changed(): void;

        // Methods

        /**
         * Dock an item as a floating item. It creates a new window containing a new
         * dock widget sharing the same master where the item is docked.
         * @param item A {@link Gdl.DockItem} widget
         * @param x X coordinate of the floating item
         * @param y Y coordinate of the floating item
         * @param width width of the floating item
         * @param height height of the floating item
         */
        add_floating_item(item: DockItem, x: number, y: number, width: number, height: number): void;
        /**
         * Dock in `dock`, the widget `item` at the position defined by `placement`. The
         * function takes care of finding the right parent widget eventually creating
         * it if needed.
         * @param item A {@link Gdl.DockItem} widget
         * @param placement A position for the widget
         */
        add_item(item: DockItem, placement: DockPlacement): void;
        /**
         * Looks for an {@link Gdl.DockItem} widget bound to the master of the dock item. It
         * does not search only in the children of this particular dock widget.
         * @param name An item name
         * @returns A {@link Gdl.DockItem} widget or `null`
         */
        get_item_by_name(name: string): DockItem;
        /**
         * Returns a list of all item bound to the master of the dock, not only
         * the children of this particular dock widget.
         * @returns A list of {@link Gdl.DockItem}. The list should be freedwith `g_list_free()`, but the item still belong to the master.
         */
        get_named_items(): DockObject[];
        /**
         * Looks for an {@link Gdl.DockPlaceholder} object bound to the master of the dock item.
         * It does not search only in the children of this particular dock widget.
         * @param name An item name
         * @returns A {@link Gdl.DockPlaceholder} object or `null`
         */
        get_placeholder_by_name(name: string): DockPlaceholder;
        /**
         * Get the first child of the {@link Gdl.DockObject}.
         * @returns A {@link Gdl.DockObject} or `null`.
         */
        get_root(): DockObject | null;
        /**
         * Hide the preview window used to materialize the dock target.
         */
        hide_preview(): void;
        /**
         * Create a new dock widget having the same master than `original`.
         * @param floating `true` to create a floating dock
         * @returns A new {@link Gdl.Dock} widget
         */
        new_from(floating: boolean): Gtk.Widget;
        /**
         * Sets whether or not a floating dock window should be prevented from
         * appearing in the system taskbar.
         * @param skip `true` if floating docks should be prevented from appearing in the taskbar
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

    namespace DockBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::dockbar-style': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            dockbar_style: DockBarStyle;
            dockbarStyle: DockBarStyle;
            master: GObject.Object;
        }
    }

    /**
     * @gir-type Class
     */
    class DockBar extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DockBar>;

        // Properties

        /**
         * @default Gdl.DockBarStyle.BOTH
         */
        get dockbar_style(): DockBarStyle;
        set dockbar_style(val: DockBarStyle);
        /**
         * @default Gdl.DockBarStyle.BOTH
         */
        get dockbarStyle(): DockBarStyle;
        set dockbarStyle(val: DockBarStyle);
        /**
         * The {@link Gdl.DockMaster} object attached to the dockbar.
         */
        get master(): GObject.Object;
        set master(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DockBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](master: GObject.Object | null): DockBar;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DockBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the orientation of the `dockbar`.
         * @returns the orientation of the `docbar`
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Retrieves the style of the `dockbar`.
         * @returns the style of the `docbar`
         */
        get_style(): DockBarStyle;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_style
        get_style(...args: never[]): any;
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
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.set_style
        set_style(...args: never[]): any;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
    }

    namespace DockItem {
        // Signal signatures
        interface SignalSignatures extends DockObject.SignalSignatures {
            /**
             * Signals that this dock has been deselected in a switcher.
             * @signal
             * @run-first
             */
            deselected: () => void;
            /**
             * Signals that the dock item has begun to be dragged.
             * @signal
             * @run-first
             */
            'dock-drag-begin': () => void;
            /**
             * Signals that the dock item dragging has ended.
             * @signal
             * @run-first
             */
            'dock-drag-end': (arg0: boolean) => void;
            /**
             * Signals that a dock item dragging motion event has occured.
             * @signal
             * @run-first
             */
            'dock-drag-motion': (arg0: Gdk.Device, arg1: number, arg2: number) => void;
            /**
             * The ::move-focus-child signal is emitted when a change of focus is
             * requested for the child widget of a dock item.  The `dir` parameter
             * specifies the direction in which focus is to be shifted.
             * @signal
             * @since 3.3.2
             * @action
             * @run-last
             */
            'move-focus-child': (arg0: Gtk.DirectionType) => void;
            /**
             * Signals that this dock has been selected from a switcher.
             * @signal
             * @run-first
             */
            selected: () => void;
            'notify::behavior': (pspec: GObject.ParamSpec) => void;
            'notify::closed': (pspec: GObject.ParamSpec) => void;
            'notify::iconified': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-height': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-width': (pspec: GObject.ParamSpec) => void;
            'notify::resize': (pspec: GObject.ParamSpec) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends DockObject.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            behavior: DockItemBehavior;
            closed: boolean;
            iconified: boolean;
            locked: boolean;
            orientation: Gtk.Orientation;
            preferred_height: number;
            preferredHeight: number;
            preferred_width: number;
            preferredWidth: number;
            resize: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class DockItem extends DockObject implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockItem>;

        // Properties

        /**
         * @default Gdl.DockItemBehavior.NORMAL
         */
        get behavior(): DockItemBehavior;
        set behavior(val: DockItemBehavior);
        /**
         * If set, the dock item is closed.
         * @since 3.6
         * @default false
         */
        get closed(): boolean;
        set closed(val: boolean);
        /**
         * If set, the dock item is hidden but it has a corresponding icon in the
         * dock bar allowing to show it again.
         * @since 3.6
         * @default false
         */
        get iconified(): boolean;
        set iconified(val: boolean);
        /**
         * @default false
         */
        get locked(): boolean;
        set locked(val: boolean);
        /**
         * The orientation of the docking item. If the orientation is set to
         * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
         * the top of the edge of item (if it is not hidden). If the
         * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
         * widget will be shown down the left edge of the item (even if the
         * widget text direction is set to RTL).
         * @default Gtk.Orientation.VERTICAL
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * @default -1
         */
        get preferred_height(): number;
        set preferred_height(val: number);
        /**
         * @default -1
         */
        get preferredHeight(): number;
        set preferredHeight(val: number);
        /**
         * @default -1
         */
        get preferred_width(): number;
        set preferred_width(val: number);
        /**
         * @default -1
         */
        get preferredWidth(): number;
        set preferredWidth(val: number);
        /**
         * @default true
         */
        get resize(): boolean;
        set resize(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockItem.SignalSignatures;

        // Fields

        object: DockObject;

        // Constructors

        constructor(properties?: Partial<DockItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, long_name: string, behavior: DockItemBehavior): DockItem;

        static new_with_pixbuf_icon(
            name: string,
            long_name: string,
            pixbuf_icon: GdkPixbuf.Pixbuf,
            behavior: DockItemBehavior,
        ): DockItem;

        static new_with_stock(name: string, long_name: string, stock_id: string, behavior: DockItemBehavior): DockItem;

        // Signals

        /** @signal */
        connect<K extends keyof DockItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param has_grip `true` is the dock item has a grip
         */
        static set_has_grip(has_grip: boolean): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_dock_drag_begin(): void;
        /**
         * @param cancelled
         * @virtual
         */
        vfunc_dock_drag_end(cancelled: boolean): void;
        /**
         * @param device
         * @param x
         * @param y
         * @virtual
         */
        vfunc_dock_drag_motion(device: Gdk.Device, x: number, y: number): void;
        /**
         * @param direction
         * @virtual
         */
        vfunc_move_focus_child(direction: Gtk.DirectionType): void;
        /**
         * This function sets the layout of the dock item.
         * @param orientation The orientation to set the item to. If the orientation is set to #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along the top of the edge of item (if it is not hidden). If the orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip widget will be shown down the left edge of the item (even if the widget text direction is set to RTL).
         * @virtual
         */
        vfunc_set_orientation(orientation: Gtk.Orientation): void;

        // Methods

        /**
         * Binds this dock item to a new dock master.
         * @param dock The {@link Gdl.Dock} widget to bind it to. Note that this widget must be a type of {@link Gdl.Dock}.
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
         * Gets the child of the {@link Gdl.DockItem}, or `null` if the item contains
         * no child widget. The returned widget does not have a reference
         * added, so you do not need to unref it.
         * @returns pointer to child of the {@link Gdl.DockItem}
         */
        get_child(): Gtk.Widget;
        /**
         * Gets the size and the position of the drag window in pixels.
         * @param rect A pointer to a {@link Gdk.Rectangle} that will receive the drag position
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
         * only visible when the "switcher-style" property of the {@link Gdl.DockMaster}
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
         * Checks whether a given {@link Gdl.DockItem} is closed. It can be only hidden or
         * detached.
         * @returns `true` if the dock item is closed.
         */
        is_closed(): boolean;
        /**
         * Checks whether a given {@link Gdl.DockItem} is iconified.
         * @returns `true` if the dock item is iconified.
         */
        is_iconified(): boolean;
        /**
         * Checks whether a given {@link Gdl.DockItem} is a placeholder created by the
         * {@link Gdl.DockLayout} object and does not contain a child.
         * @returns `true` if the dock item is a placeholder
         */
        is_placeholder(): boolean;
        /**
         * This function locks the dock item. When locked the dock item cannot
         * be dragged around and it doesn't show a grip.
         */
        lock(): void;
        /**
         * This function emits the deselected signal. It is used by {@link Gdl.Switcher}
         * to let clients know that this item has been deselected.
         */
        notify_deselected(): void;
        /**
         * This function emits the selected signal. It is to be used by {@link Gdl.Switcher}
         * to let clients know that this item has been switched to.
         */
        notify_selected(): void;
        /**
         * Checks whether a given {@link Gdl.DockItem} or its child widget has focus.
         * This check is performed recursively on child widgets.
         * @returns `true` if the dock item or its child widget has focus; `false` otherwise.
         */
        or_child_has_focus(): boolean;
        /**
         * Gets the preferred size of the dock item in pixels.
         * @param req A pointer to a {@link Gtk.Requisition} into which the preferred size will be written.
         */
        preferred_size(req: Gtk.Requisition): void;
        /**
         * This function sets the behavior of the dock item.
         * @param behavior Behavior flags to turn on
         * @param clear Whether to clear state before turning on `flags`
         */
        set_behavior_flags(behavior: DockItemBehavior, clear: boolean): void;
        /**
         * Set a new child for the {@link Gdl.DockItem}. This child is different from the
         * children using the {@link Gtk.Container} interface. It is a private child reserved
         * for the widget implementation.
         *
         * If a child is already present, it will be replaced. If `widget` is `null` the
         * child will be removed.
         * @param child a {@link Gtk.Widget}
         */
        set_child(child: Gtk.Widget | null): void;
        /**
         * This method has only an effect when you add you dock_item with
         * GDL_DOCK_ITEM_BEH_NEVER_FLOATING. In this case you have to assign
         * it a default position.*
         *
         * Deprecated 3.6: This function is doing nothing now.
         * @param reference The GdlDockObject which is the default dock for `item`
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
         * of the {@link Gdl.DockMaster} is set to #GDL_SWITCHER_STYLE_TABS
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

    namespace DockItemButtonImage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
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
                Gtk.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockItemButtonImage extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockItemButtonImage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockItemButtonImage.SignalSignatures;

        // Fields

        image_type: DockItemButtonImageType;

        // Constructors

        constructor(properties?: Partial<DockItemButtonImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](image_type: DockItemButtonImageType): DockItemButtonImage;

        // Signals

        /** @signal */
        connect<K extends keyof DockItemButtonImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItemButtonImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockItemButtonImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItemButtonImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockItemButtonImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockItemButtonImage.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: any | null): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        /**
         * Constructs a child of `buildable` with the name `name`.
         *
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data: any | null,
        ): void;
        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, GLib.MarkupParser, any];
        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Gets the name of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }

    namespace DockItemGrip {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
                Gtk.Container.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            item: DockItem;
        }
    }

    /**
     * @gir-type Class
     */
    class DockItemGrip extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockItemGrip>;

        // Properties

        /**
         * @construct-only
         */
        set item(val: DockItem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockItemGrip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DockItemGrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](item: DockItem): DockItemGrip;

        // Signals

        /** @signal */
        connect<K extends keyof DockItemGrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItemGrip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockItemGrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockItemGrip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockItemGrip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockItemGrip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return `true` if the grip window has reveived the event.
         * @param event A {@link Gdk.Event}
         * @returns `true` if the grip has received the event
         */
        has_event(event: Gdk.Event): boolean;
        /**
         * This function hides the dock item's grip widget handle hatching.
         */
        hide_handle(): void;
        /**
         * Change the cursor when a drag operation is started.
         * @param in_drag `true` if a drag operation is started
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

    namespace DockLayout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dirty': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dirty: boolean;
            master: GObject.Object;
        }
    }

    /**
     * The GdlDockLayout struct contains only private fields
     * and should not be directly accessed.
     * @gir-type Class
     */
    class DockLayout extends GObject.Object {
        static $gtype: GObject.GType<DockLayout>;

        // Properties

        /**
         * @read-only
         * @default false
         */
        get dirty(): boolean;
        get master(): GObject.Object;
        set master(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockLayout.SignalSignatures;

        // Fields

        g_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DockLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](master: GObject.Object): DockLayout;

        // Signals

        /** @signal */
        connect<K extends keyof DockLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attach the `layout` to the `master` and delete the reference to
         * the master that the layout attached previously.
         *
         * Deprecated 3.6: Use `gdl_dock_layout_set_master()` instead.
         * @param master The master object to which the layout will be attached
         */
        attach(master: DockMaster): void;
        /**
         * Deletes the layout with the given name from the memory.
         * This will set {@link Gdl.DockLayout.dirty} to `true`.
         * @param name The name of the layout to delete.
         */
        delete_layout(name: string): void;
        /**
         * Get the list of layout names including or not the default layout.
         * @param include_default `true` to include the default layout.
         * @returns a {@link GLib.List} list  holding the layout names. You must first free each element in the list  with `g_free()`, then free the list itself with `g_list_free()`.
         */
        get_layouts(include_default: boolean): string[];
        /**
         * Retrieves the master of the object.
         * @returns a {@link Gdl.DockMaster} object
         */
        get_master<T = GObject.Object>(): T;
        /**
         * Checks whether the XML tree in memory is different from the file where the layout was saved.
         * @returns `true` is the layout in the memory is different from the file, else `false`.
         */
        is_dirty(): boolean;
        /**
         * Loads the layout from file with the given `filename`.
         * This will set {@link Gdl.DockLayout.dirty} to `false`.
         * @param filename The name of the file to load.
         * @returns `true` if `layout` successfully loaded else `false`
         */
        load_from_file(filename: string): boolean;
        /**
         * Loads the layout with the given name from the memory.
         * This will set {@link Gdl.DockLayout.dirty} to `true`.
         *
         * See also `gdl_dock_layout_load_from_file()`
         * @param name The name of the layout to load or `null` for a default layout name.
         * @returns `true` if layout successfully loaded else `false`
         */
        load_layout(name: string | null): boolean;
        /**
         * Saves the `layout` with the given name to the memory.
         * This will set {@link Gdl.DockLayout.dirty} to `true`.
         *
         * See also `gdl_dock_layout_save_to_file()`.
         * @param name The name of the layout to save or `null` for a default layout name.
         */
        save_layout(name: string | null): void;
        /**
         * This function saves the current layout in XML format to
         * the file with the given `filename`.
         * @param filename Name of the file we want to save in layout
         * @returns `true` if `layout` successfuly save to the file, otherwise `false`.
         */
        save_to_file(filename: string): boolean;
        /**
         * Attach the `layout` to the `master` and delete the reference to
         * the master that the layout attached previously. Instead of setting `master`
         * directly with the master object, it is possible to use a {@link Gdl.DockObject}, in
         * this case the layout will be attached to the same master than the dock
         * object.
         * @param master The master object to which the layout will be attached
         */
        set_master(master: GObject.Object): void;
    }

    namespace DockMaster {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signals that the layout has changed, one or more widgets have been moved,
             * added or removed.
             * @signal
             * @run-last
             */
            'layout-changed': () => void;
            'notify::default-title': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::switcher-style': (pspec: GObject.ParamSpec) => void;
            'notify::tab-pos': (pspec: GObject.ParamSpec) => void;
            'notify::tab-reorderable': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_title: string;
            defaultTitle: string;
            locked: number;
            switcher_style: SwitcherStyle;
            switcherStyle: SwitcherStyle;
            tab_pos: Gtk.PositionType;
            tabPos: Gtk.PositionType;
            tab_reorderable: boolean;
            tabReorderable: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class DockMaster extends GObject.Object {
        static $gtype: GObject.GType<DockMaster>;

        // Properties

        /**
         * @default null
         */
        get default_title(): string;
        set default_title(val: string);
        /**
         * @default null
         */
        get defaultTitle(): string;
        set defaultTitle(val: string);
        /**
         * @default 0
         */
        get locked(): number;
        set locked(val: number);
        /**
         * @default Gdl.SwitcherStyle.BOTH
         */
        get switcher_style(): SwitcherStyle;
        set switcher_style(val: SwitcherStyle);
        /**
         * @default Gdl.SwitcherStyle.BOTH
         */
        get switcherStyle(): SwitcherStyle;
        set switcherStyle(val: SwitcherStyle);
        /**
         * @default Gtk.PositionType.BOTTOM
         */
        get tab_pos(): Gtk.PositionType;
        set tab_pos(val: Gtk.PositionType);
        /**
         * @default Gtk.PositionType.BOTTOM
         */
        get tabPos(): Gtk.PositionType;
        set tabPos(val: Gtk.PositionType);
        /**
         * @default false
         */
        get tab_reorderable(): boolean;
        set tab_reorderable(val: boolean);
        /**
         * @default false
         */
        get tabReorderable(): boolean;
        set tabReorderable(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockMaster.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DockMaster.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DockMaster.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockMaster.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockMaster.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockMaster.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockMaster.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockMaster.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_layout_changed(): void;

        // Methods

        /**
         * Add a new dock widget to the master.
         * @param object a {@link Gdl.DockObject}
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
         * @param include_controller `true` to include the controller
         * @param _function the function to call with each element's data
         */
        foreach_toplevel(include_controller: boolean, _function: GLib.Func): void;
        /**
         * Retrieves the {@link Gdl.DockObject} acting as the controller.
         * @returns A {@link Gdl.DockObject}.
         */
        get_controller(): DockObject;
        /**
         * Return an unique translated dock name.
         * @returns a new translated name. The string has to be freed with `g_free()`.
         */
        get_dock_name(): string;
        /**
         * Looks for a {@link Gdl.DockObject} named `nick_name`.
         * @param nick_name the name of the dock widget.
         * @returns A {@link Gdl.DockObject} named `nick_name` or `null` if it does not exist.
         */
        get_object(nick_name: string): DockObject | null;
        /**
         * Remove one dock widget from the master.
         * @param object a {@link Gdl.DockObject}
         */
        remove(object: DockObject): void;
        /**
         * Set a new controller. The controller must be a top level {@link Gdl.DockObject}.
         * @param new_controller a {@link Gdl.DockObject}
         */
        set_controller(new_controller: DockObject): void;
    }

    namespace DockNotebook {
        // Signal signatures
        interface SignalSignatures extends DockItem.SignalSignatures {
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::behavior': (pspec: GObject.ParamSpec) => void;
            'notify::closed': (pspec: GObject.ParamSpec) => void;
            'notify::iconified': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-height': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-width': (pspec: GObject.ParamSpec) => void;
            'notify::resize': (pspec: GObject.ParamSpec) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends DockItem.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            page: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DockNotebook extends DockItem implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockNotebook>;

        // Properties

        /**
         * @default -1
         */
        get page(): number;
        set page(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockNotebook.SignalSignatures;

        // Fields

        item: DockItem;

        // Constructors

        constructor(properties?: Partial<DockNotebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DockNotebook;

        // Signals

        /** @signal */
        connect<K extends keyof DockNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockNotebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockNotebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockNotebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockNotebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DockObject {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            /**
             * Signals that the {@link Gdl.DockObject} is detached.
             * @signal
             * @run-last
             */
            detach: (arg0: boolean) => void;
            /**
             * Signals that the {@link Gdl.DockObject} has been docked.
             * @signal
             * @run-first
             */
            dock: (arg0: DockObject, arg1: DockPlacement, arg2: GObject.Value | null) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
                Gtk.Container.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            long_name: string;
            longName: string;
            master: DockMaster;
            name: string;
            pixbuf_icon: any;
            pixbufIcon: any;
            stock_id: string;
            stockId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DockObject extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockObject>;

        // Properties

        /**
         * A long descriptive name.
         * @default null
         */
        get long_name(): string;
        set long_name(val: string);
        /**
         * A long descriptive name.
         * @default null
         */
        get longName(): string;
        set longName(val: string);
        /**
         * The master which manages all the objects in a dock ring
         */
        get master(): DockMaster;
        set master(val: DockMaster);
        /**
         * The object name.  If the object is manual the name can be used
         * to recall the object from any other object in the ring
         * @construct-only
         * @default null
         */
        get name(): string;
        /**
         * A GdkPixbuf to use for the icon of the dock object.
         * @since 3.3.2
         */
        get pixbuf_icon(): any;
        set pixbuf_icon(val: any);
        /**
         * A GdkPixbuf to use for the icon of the dock object.
         * @since 3.3.2
         */
        get pixbufIcon(): any;
        set pixbufIcon(val: any);
        /**
         * A stock id to use for the icon of the dock object.
         * @default null
         */
        get stock_id(): string;
        set stock_id(val: string);
        /**
         * A stock id to use for the icon of the dock object.
         * @default null
         */
        get stockId(): string;
        set stockId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockObject.SignalSignatures;

        // Fields

        container: Gtk.Container;
        deprecated_flags: DockObjectFlags;
        deprecated_master: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DockObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DockObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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
        /**
         * @param is_compound `true` is the dock object contains other objects
         */
        static set_is_compound(is_compound: boolean): void;

        // Virtual methods

        /**
         * This function returns information about placement of a child dock
         * object inside another dock object.  The function returns `true` if
         * `child` is effectively a child of `object`.  `placement` should
         * normally be initially setup to {@link Gdl.DockPlacement.NONE}.  If it's set to some
         * other value, this function will not touch the stored value if the
         * specified placement is "compatible" with the actual placement of
         * the child.
         *
         * `placement` can be `null`, in which case the function simply tells if
         * `child` is attached to `object`.
         * @param child the child of the `object` we want the placement for
         * @param placement where to return the placement information
         * @virtual
         */
        vfunc_child_placement(child: DockObject, placement: DockPlacement | null): boolean;
        /**
         * Dissociate a dock object from its parent, including or not its children.
         * @param recursive `true` to detach children
         * @virtual
         */
        vfunc_detach(recursive: boolean): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param requestor The widget to dock
         * @param position The position for the child
         * @param other_data Optional data giving additional information depending on the dock object.
         * @virtual
         */
        vfunc_dock(requestor: DockObject, position: DockPlacement, other_data: GObject.Value | null): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param x X coordinate
         * @param y Y coordinate
         * @param request A {@link Gdl.DockRequest} with information about the docking position
         * @virtual
         */
        vfunc_dock_request(x: number, y: number, request: DockRequest): boolean;
        /**
         * Presents the GDL object to the user. By example, this will select the
         * corresponding page if the object is in a notebook. If `child` is missing,
         * only the `object` will be show.
         * @param child The child widget to present or `null`
         * @virtual
         */
        vfunc_present(child: DockObject | null): void;
        /**
         * Remove a compound object if it is not longer useful to hold the child. The
         * object has to be removed and the child reattached to the parent.
         * @virtual
         */
        vfunc_reduce(): void;
        /**
         * Move the `child` widget at another place.
         * @param child The child widget to reorder
         * @param new_position New position for the child
         * @param other_data Optional data giving additional information depending on the dock object.
         * @virtual
         */
        vfunc_reorder(child: DockObject, new_position: DockPlacement, other_data: GObject.Value | null): boolean;

        // Methods

        /**
         * Add a link between a {@link Gdl.DockObject} and a master. It is normally not used
         * directly because it is automatically called when a new object is docked.
         * @param master A {@link Gdl.DockMaster}
         */
        bind(master: GObject.Object): void;
        /**
         * This function returns information about placement of a child dock
         * object inside another dock object.  The function returns `true` if
         * `child` is effectively a child of `object`.  `placement` should
         * normally be initially setup to {@link Gdl.DockPlacement.NONE}.  If it's set to some
         * other value, this function will not touch the stored value if the
         * specified placement is "compatible" with the actual placement of
         * the child.
         *
         * `placement` can be `null`, in which case the function simply tells if
         * `child` is attached to `object`.
         * @param child the child of the `object` we want the placement for
         * @param placement where to return the placement information
         * @returns `true` if `child` is a child of `object`.
         */
        child_placement(child: DockObject, placement: DockPlacement | null): boolean;
        /**
         * Dissociate a dock object from its parent, including or not its children.
         * @param recursive `true` to detach children
         */
        detach(recursive: boolean): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param requestor The widget to dock
         * @param position The position for the child
         * @param other_data Optional data giving additional information depending on the dock object.
         */
        dock(requestor: DockObject, position: DockPlacement, other_data: GObject.Value | null): void;
        /**
         * Dock a dock widget in `object` at the defined position.
         * @param x X coordinate
         * @param y Y coordinate
         * @param request A {@link Gdl.DockRequest} with information about the docking position
         * @returns `true` if `object` has been docked.
         */
        dock_request(x: number, y: number, request: DockRequest): boolean;
        /**
         * Temporarily freezes a dock object, any call to reduce on the object has no
         * immediate effect. If `gdl_dock_object_freeze()` has been called more than once,
         * `gdl_dock_object_thaw()` must be called an equal number of times.
         */
        freeze(): void;
        /**
         * Retrieves the controller of the object.
         * @returns a {@link Gdl.DockObject} object
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
         * @returns a {@link Gdl.DockMaster} object
         */
        get_master<T = GObject.Object>(): T;
        /**
         * Retrieves the name of the object. This name is used to identify the object.
         * @returns the name of the object.
         */
        get_name(): string;
        /**
         * Returns a parent {@link Gdl.DockObject} if it exists.
         * @returns a {@link Gdl.DockObject} or `null` if such object does not exist.
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
         * Get the top level {@link Gdl.Dock} widget of `object` or `null` if cannot be found.
         * @returns A {@link Gdl.Dock} or `null`.
         */
        get_toplevel(): Dock | null;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_toplevel
        get_toplevel(...args: never[]): any;
        /**
         * Determine if an object is managed by the dock master, such object is
         * destroyed automatically when it is not needed anymore.
         * @returns `true` if the object is managed automatically by the dock master.
         */
        is_automatic(): boolean;
        /**
         * Check if the object is bound to a master.
         * @returns `true` if `object` has a master
         */
        is_bound(): boolean;
        /**
         * Checks whether a given {@link Gdl.DockObject} is closed. It can be only hidden and
         * still in the widget hierarchy or detached.
         * @returns `true` if the dock object is closed.
         */
        is_closed(): boolean;
        /**
         * Check if an object is a compound object, accepting children widget or not.
         * @returns `true` if `object` is a compound object.
         */
        is_compound(): boolean;
        /**
         * Determine if an object is frozen and is not removed immediately from the
         * widget hierarchy when it is reduced.
         * @returns `true` if the object is frozen.
         */
        is_frozen(): boolean;
        /**
         * Emits the {@link Gdl.DockMaster.SignalSignatures.layout_changed | Gdl.DockMaster::layout-changed} signal on the master of the object
         * if existing.
         */
        layout_changed_notify(): void;
        /**
         * Presents the GDL object to the user. By example, this will select the
         * corresponding page if the object is in a notebook. If `child` is missing,
         * only the `object` will be show.
         * @param child The child widget to present or `null`
         */
        present(child: DockObject | null): void;
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
         * @returns `true` if `child` has been moved
         */
        reorder(child: DockObject, new_position: DockPlacement, other_data: GObject.Value | null): boolean;
        /**
         * Set the long name of the object. This name is an human readable string
         * which can be displayed in the user interface.
         * @param name a name for the object
         */
        set_long_name(name: string): void;
        /**
         * A {@link Gdl.DockObject} is managed by default by the dock master, use this function
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
         * Set a icon for a dock object using a {@link GdkPixbuf.Pixbuf}.
         * @param icon a icon or `null`
         */
        set_pixbuf(icon: GdkPixbuf.Pixbuf | null): void;
        /**
         * Set an icon for the dock object using a stock id.
         * @param stock_id a stock id
         */
        set_stock_id(stock_id: string): void;
        /**
         * Thaws a dock object frozen with `gdl_dock_object_freeze()`.
         * Any pending reduce calls are made, maybe leading to the destruction of
         * the object.
         */
        thaw(): void;
        /**
         * This removes the link between an dock object and its master.
         */
        unbind(): void;
    }

    namespace DockPaned {
        // Signal signatures
        interface SignalSignatures extends DockItem.SignalSignatures {
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::behavior': (pspec: GObject.ParamSpec) => void;
            'notify::closed': (pspec: GObject.ParamSpec) => void;
            'notify::iconified': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-height': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-width': (pspec: GObject.ParamSpec) => void;
            'notify::resize': (pspec: GObject.ParamSpec) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends DockItem.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            position: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DockPaned extends DockItem implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockPaned>;

        // Properties

        /**
         * @default 0
         */
        get position(): number;
        set position(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockPaned.SignalSignatures;

        // Fields

        dock_item: DockItem;

        // Constructors

        constructor(properties?: Partial<DockPaned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation): DockPaned;
        // Conflicted with Gdl.DockItem.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DockPaned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockPaned.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockPaned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockPaned.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockPaned.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockPaned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DockParam {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class DockParam {
        static $gtype: GObject.GType<DockParam>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DockParam.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockParam.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockParam.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockParam.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockParam.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockParam.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DockPlaceholder {
        // Signal signatures
        interface SignalSignatures extends DockObject.SignalSignatures {
            'notify::floating': (pspec: GObject.ParamSpec) => void;
            'notify::floatx': (pspec: GObject.ParamSpec) => void;
            'notify::floaty': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::host': (pspec: GObject.ParamSpec) => void;
            'notify::next-placement': (pspec: GObject.ParamSpec) => void;
            'notify::sticky': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::long-name': (pspec: GObject.ParamSpec) => void;
            'notify::master': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-icon': (pspec: GObject.ParamSpec) => void;
            'notify::stock-id': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends DockObject.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            floating: boolean;
            floatx: number;
            floaty: number;
            height: number;
            host: DockObject;
            next_placement: DockPlacement;
            nextPlacement: DockPlacement;
            sticky: boolean;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DockPlaceholder extends DockObject implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockPlaceholder>;

        // Properties

        /**
         * @construct-only
         * @default false
         */
        get floating(): boolean;
        /**
         * @construct-only
         * @default -1
         */
        get floatx(): number;
        /**
         * @construct-only
         * @default -1
         */
        get floaty(): number;
        /**
         * @default -1
         */
        get height(): number;
        set height(val: number);
        get host(): DockObject;
        set host(val: DockObject);
        /**
         * @default Gdl.DockPlacement.CENTER
         */
        get next_placement(): DockPlacement;
        set next_placement(val: DockPlacement);
        /**
         * @default Gdl.DockPlacement.CENTER
         */
        get nextPlacement(): DockPlacement;
        set nextPlacement(val: DockPlacement);
        /**
         * @construct-only
         * @default false
         */
        get sticky(): boolean;
        /**
         * @default -1
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockPlaceholder.SignalSignatures;

        // Fields

        object: DockObject;

        // Constructors

        constructor(properties?: Partial<DockPlaceholder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder;

        // Signals

        /** @signal */
        connect<K extends keyof DockPlaceholder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockPlaceholder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockPlaceholder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockPlaceholder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockPlaceholder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockPlaceholder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Move the placeholder to the position of `object`.
         * @param object A new {@link Gdl.DockObject}
         */
        attach(object: DockObject): void;
    }

    namespace DockTablabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * This signal is emitted when the user clicks on the label.
             * @signal
             * @run-last
             */
            'button-pressed-handle': (arg0: Gdk.Event) => void;
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            item: DockItem;
        }
    }

    /**
     * @gir-type Class
     */
    class DockTablabel extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockTablabel>;

        // Properties

        get item(): DockItem;
        set item(val: DockItem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockTablabel.SignalSignatures;

        // Fields

        drag_handle_size: number;
        event_window: Gdk.Window;
        active: boolean;
        pre_drag: boolean;

        // Constructors

        constructor(properties?: Partial<DockTablabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](item: DockItem): DockTablabel;

        // Signals

        /** @signal */
        connect<K extends keyof DockTablabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockTablabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DockTablabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DockTablabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DockTablabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DockTablabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param event
         * @virtual
         */
        vfunc_button_pressed_handle(event: Gdk.EventButton): void;

        // Methods

        /**
         * Set the widget in "activated" state.
         */
        activate(): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;
        /**
         * Set the widget in "deactivated" state.
         */
        deactivate(): void;
    }

    namespace PreviewWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
                Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    /**
     * The GdlDockLayout struct contains only private fields
     * and should not be directly accessed.
     * @gir-type Class
     */
    class PreviewWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreviewWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreviewWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviewWindow;

        // Signals

        /** @signal */
        connect<K extends keyof PreviewWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreviewWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreviewWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviewWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Update the size and position of the preview window. This function is
         * called on drag_motion event to update the representation of the docking site
         * in real time.
         * @param rect the new position and size of the window
         */
        update(rect: Gdk.Rectangle): void;
    }

    namespace Switcher {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            'notify::switcher-style': (pspec: GObject.ParamSpec) => void;
            'notify::tab-pos': (pspec: GObject.ParamSpec) => void;
            'notify::tab-reorderable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-popup': (pspec: GObject.ParamSpec) => void;
            'notify::group-name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::scrollable': (pspec: GObject.ParamSpec) => void;
            'notify::show-border': (pspec: GObject.ParamSpec) => void;
            'notify::show-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
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
                Gtk.Notebook.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            switcher_style: SwitcherStyle;
            switcherStyle: SwitcherStyle;
            tab_pos: Gtk.PositionType;
            tabPos: Gtk.PositionType;
            tab_reorderable: boolean;
            tabReorderable: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Switcher extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Switcher>;

        // Properties

        /**
         * @default Gdl.SwitcherStyle.BOTH
         */
        get switcher_style(): SwitcherStyle;
        set switcher_style(val: SwitcherStyle);
        /**
         * @default Gdl.SwitcherStyle.BOTH
         */
        get switcherStyle(): SwitcherStyle;
        set switcherStyle(val: SwitcherStyle);
        /**
         * @default Gtk.PositionType.BOTTOM
         */
        get tab_pos(): Gtk.PositionType;
        set tab_pos(val: Gtk.PositionType);
        /**
         * @default Gtk.PositionType.BOTTOM
         */
        get tabPos(): Gtk.PositionType;
        set tabPos(val: Gtk.PositionType);
        /**
         * @default false
         */
        get tab_reorderable(): boolean;
        set tab_reorderable(val: boolean);
        /**
         * @default false
         */
        get tabReorderable(): boolean;
        set tabReorderable(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Switcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Switcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Switcher;

        // Signals

        /** @signal */
        connect<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Switcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Switcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Switcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a page to a {@link Gdl.Switcher}.  A button is created in the switcher, with its
         * icon taken preferentially from the `stock_id` parameter.  If this parameter is
         * `null`, then the `pixbuf_icon` parameter is used.  Failing that, the
         * `GTK_STOCK_NEW` stock icon is used.  The text label for the button is specified
         * using the `label` parameter.  If it is `null` then a default incrementally
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
        /**
         * @param args
         */
        // Conflicted with Gtk.Notebook.insert_page
        insert_page(...args: never[]): any;
    }

    /**
     * @gir-type Alias
     */
    type DockBarClass = typeof DockBar;
    /**
     * @gir-type Struct
     */
    abstract class DockBarPrivate {
        static $gtype: GObject.GType<DockBarPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockClass = typeof Dock;
    /**
     * @gir-type Alias
     */
    type DockItemButtonImageClass = typeof DockItemButtonImage;
    /**
     * @gir-type Alias
     */
    type DockItemClass = typeof DockItem;
    /**
     * @gir-type Struct
     */
    abstract class DockItemClassPrivate {
        static $gtype: GObject.GType<DockItemClassPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockItemGripClass = typeof DockItemGrip;
    /**
     * @gir-type Struct
     */
    abstract class DockItemGripPrivate {
        static $gtype: GObject.GType<DockItemGripPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DockItemPrivate {
        static $gtype: GObject.GType<DockItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockLayoutClass = typeof DockLayout;
    /**
     * @gir-type Struct
     */
    abstract class DockLayoutPrivate {
        static $gtype: GObject.GType<DockLayoutPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockMasterClass = typeof DockMaster;
    /**
     * @gir-type Struct
     */
    abstract class DockMasterPrivate {
        static $gtype: GObject.GType<DockMasterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockNotebookClass = typeof DockNotebook;
    /**
     * @gir-type Struct
     */
    abstract class DockNotebookClassPrivate {
        static $gtype: GObject.GType<DockNotebookClassPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DockNotebookPrivate {
        static $gtype: GObject.GType<DockNotebookPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockObjectClass = typeof DockObject;
    /**
     * @gir-type Struct
     */
    abstract class DockObjectClassPrivate {
        static $gtype: GObject.GType<DockObjectClassPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DockObjectPrivate {
        static $gtype: GObject.GType<DockObjectPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockPanedClass = typeof DockPaned;
    /**
     * @gir-type Struct
     */
    abstract class DockPanedPrivate {
        static $gtype: GObject.GType<DockPanedPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DockPlaceholderClass = typeof DockPlaceholder;
    /**
     * @gir-type Struct
     */
    abstract class DockPlaceholderPrivate {
        static $gtype: GObject.GType<DockPlaceholderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DockPrivate {
        static $gtype: GObject.GType<DockPrivate>;
    }

    /**
     * Full docking information.
     * @gir-type Struct
     */
    class DockRequest {
        static $gtype: GObject.GType<DockRequest>;

        // Fields

        applicant: DockObject;
        target: DockObject;
        position: DockPlacement;
        rect: cairo.RectangleInt;
    }

    /**
     * @gir-type Alias
     */
    type DockTablabelClass = typeof DockTablabel;
    /**
     * @gir-type Alias
     */
    type PreviewWindowClass = typeof PreviewWindow;
    /**
     * @gir-type Alias
     */
    type SwitcherClass = typeof Switcher;
    /**
     * @gir-type Struct
     */
    abstract class SwitcherClassPrivate {
        static $gtype: GObject.GType<SwitcherClassPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class SwitcherPrivate {
        static $gtype: GObject.GType<SwitcherPrivate>;
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

export default Gdl;

// END
