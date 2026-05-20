
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
import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace PeasGtk {

    /**
     * PeasGtk-1.0
     */


    namespace PluginManager {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::engine": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            engine: Peas.Engine;
            view: PluginManagerView;
        }
    }

    /**
     * The {@link PeasGtk.PluginManager} structure contains only private data
     * and should only be accessed using the provided API.
     * @gir-type Class
     */
    class PluginManager extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PluginManager>;

        // Properties
        /**
         * The {@link Peas.Engine} this manager is attached to.
         * @construct-only
         */
        get engine(): Peas.Engine;

        /**
         * The {@link PluginManagerView} shown in the {@link PeasGtk.PluginManager}.
         * @construct-only
         */
        get view(): PluginManagerView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginManager.SignalSignatures;

        // Fields
        box: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<PluginManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](engine: Peas.Engine | null): PluginManager;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PluginManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PluginManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PluginManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PluginManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the {@link PluginManagerView} of `pm`.
         * @returns the {@link Gtk.TreeView} of `pm`.
         */
        get_view(): Gtk.Widget;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace PluginManagerView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            /**
             * Emitted before showing the context menu of the view.
             * 
             * If you need to add items to the context menu,
             * connect to this signal and add your menuitems to the `menu`.
             * @signal
             * @run-last
             */
            "populate-popup": (arg0: Gtk.Menu) => void;
            "notify::engine": (pspec: GObject.ParamSpec) => void;
            "notify::show-builtin": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            engine: Peas.Engine;
            show_builtin: boolean;
            showBuiltin: boolean;
        }
    }

    /**
     * The {@link PeasGtk.PluginManagerView} structure contains only private data
     * and should only be accessed using the provided API.
     * @gir-type Class
     */
    class PluginManagerView extends Gtk.TreeView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<PluginManagerView>;

        // Properties
        /**
         * @construct-only
         */
        get engine(): Peas.Engine;

        /**
         * If builtin plugins should be shown.
         * @deprecated since 1.2: Use hidden plugins instead.
         * @default false
         */
        get show_builtin(): boolean;
        set show_builtin(val: boolean);

        /**
         * If builtin plugins should be shown.
         * @deprecated since 1.2: Use hidden plugins instead.
         * @default false
         */
        get showBuiltin(): boolean;
        set showBuiltin(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginManagerView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PluginManagerView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](engine: Peas.Engine | null): PluginManagerView;

        // Conflicted with Gtk.TreeView.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PluginManagerView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManagerView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PluginManagerView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginManagerView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PluginManagerView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PluginManagerView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param menu 
         * @virtual
         */
        vfunc_populate_popup(menu: Gtk.Menu): void;

        // Methods
        /**
         * Returns the currently selected plugin, or `null` if a plugin is not selected.
         * @returns the selected plugin.
         */
        get_selected_plugin(): Peas.PluginInfo | null;

        /**
         * Returns if builtin plugins should be shown.
         * @returns if builtin plugins should be shown.
         */
        get_show_builtin(): boolean;

        /**
         * Selects the given plugin.
         * @param info A {@link Peas.PluginInfo}.
         */
        set_selected_plugin(info: Peas.PluginInfo): void;

        /**
         * Sets if builtin plugins should be shown.
         * @param show_builtin If builtin plugins should be shown.
         */
        set_show_builtin(show_builtin: boolean): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    /**
     * @gir-type Alias
     */
    type ConfigurableInterface = typeof Configurable;

    /**
     * @gir-type Alias
     */
    type PluginManagerClass = typeof PluginManager;

    /**
     * @gir-type Struct
     */
    abstract class PluginManagerPrivate {
        static $gtype: GObject.GType<PluginManagerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PluginManagerViewClass = typeof PluginManagerView;

    /**
     * @gir-type Struct
     */
    abstract class PluginManagerViewPrivate {
        static $gtype: GObject.GType<PluginManagerViewPrivate>;
    }


    namespace Configurable {
        /**
         * Interface for implementing Configurable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Creates the configure widget for the plugin.
             * 
             * The returned widget should allow configuring all the relevant aspects of the
             * plugin, and should allow instant-apply, as promoted by the Gnome Human
             * Interface Guidelines.
             * 
             * {@link PluginManager} will embed the returned widget into a dialog box,
             * but you shouldn't take this behaviour for granted as other implementations
             * of a plugin manager UI might do otherwise.
             * 
             * This method should always return a valid {@link Gtk.Widget} instance, never `null`.
             * @virtual
             */
            vfunc_create_configure_widget(): Gtk.Widget;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConfigurableNamespace {
        $gtype: GObject.GType<Configurable>;
        prototype: Configurable;
    }
    /**
     * Interface for configurable plugins.
     * @gir-type Interface
     */
    interface Configurable extends GObject.Object, Configurable.Interface {

        // Methods
        /**
         * Creates the configure widget for the plugin.
         * 
         * The returned widget should allow configuring all the relevant aspects of the
         * plugin, and should allow instant-apply, as promoted by the Gnome Human
         * Interface Guidelines.
         * 
         * {@link PluginManager} will embed the returned widget into a dialog box,
         * but you shouldn't take this behaviour for granted as other implementations
         * of a plugin manager UI might do otherwise.
         * 
         * This method should always return a valid {@link Gtk.Widget} instance, never `null`.
         * @returns A {@link Gtk.Widget} used for configuration.
         */
        create_configure_widget(): Gtk.Widget;
    }


    export const Configurable: ConfigurableNamespace & {
        new (): Configurable; // This allows `obj instanceof Configurable`
    };

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

export default PeasGtk;

// END
