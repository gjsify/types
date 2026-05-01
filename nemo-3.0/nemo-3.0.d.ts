
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

export namespace Nemo {

    /**
     * Nemo-3.0
     */


    /**
     * @gir-type Enum
     */
    enum OperationResult {
        /**
         * Returned if the call succeeded, and the extension is done
         *  with the request.
         */
        COMPLETE,
        /**
         * Returned if the call failed.
         */
        FAILED,
        /**
         * Returned if the extension has begun an async operation.
         *  For C extensions, if this is returned, the extension must set the handle parameter.
         *  For python extensions, handle is already filled, and unique, and can be used for
         *  identifying purposes within the extension.  In either case, the extension must call
         *  the callback closure when the operation is complete (complete_invoke.)
         */
        IN_PROGRESS,
    }


    /**
     * @param location the location to create the file info for
     * @returns a {@link Nemo.FileInfo}
     */
    function file_info_create(location: Gio.File): FileInfo;

    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Nemo.FileInfo}
     */
    function file_info_create_for_uri(uri: string): FileInfo;

    /**
     * @param files the files to copy
     * @returns a copy of `files`.  Use `nemo_file_info_list_free` to free the list and unref its contents.
     */
    function file_info_list_copy(files: FileInfo[]): FileInfo[];

    /**
     * @param files a list created with   `nemo_file_info_list_copy`
     */
    function file_info_list_free(files: FileInfo[]): void;

    /**
     * @param location the location to lookup the file info for
     * @returns a {@link Nemo.FileInfo}
     */
    function file_info_lookup(location: Gio.File): FileInfo;

    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Nemo.FileInfo}
     */
    function file_info_lookup_for_uri(uri: string): FileInfo;

    function get_resource(): Gio.Resource;

    /**
     * @param update_complete 
     * @param provider 
     * @param handle 
     * @param result 
     */
    function info_provider_update_complete_invoke(update_complete: GObject.Closure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void;

    /**
     * @param module 
     */
    function module_initialize(module: GObject.TypeModule): void;

    /**
     * @param types 
     * @param num_types 
     */
    function module_list_types(types: GObject.GType, num_types: number): void;

    function module_shutdown(): void;

    /**
     * @gir-type Callback
     */
    interface InfoProviderUpdateComplete {
        (provider: InfoProvider, handle: OperationHandle, result: OperationResult): void;
    }

    namespace Column {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::attribute": (pspec: GObject.ParamSpec) => void;
            "notify::attribute-q": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attribute: string;
            attribute_q: number;
            attributeQ: number;
            description: string;
            ellipsize: Pango.EllipsizeMode;
            label: string;
            name: string;
            width_chars: number;
            widthChars: number;
            xalign: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Column extends GObject.Object {
        static $gtype: GObject.GType<Column>;

        // Properties
        /**
         * @default null
         */
        get attribute(): string;
        set attribute(val: string);

        /**
         * @read-only
         * @default 0
         */
        get attribute_q(): number;

        /**
         * @read-only
         * @default 0
         */
        get attributeQ(): number;

        /**
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * @default Pango.EllipsizeMode.NONE
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * @default -1
         */
        get width_chars(): number;
        set width_chars(val: number);

        /**
         * @default -1
         */
        get widthChars(): number;
        set widthChars(val: number);

        /**
         * @default 0
         */
        get xalign(): number;
        set xalign(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Column.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Column.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, attribute: string, label: string, description: string): Column;

        // Signals
        /** @signal */
        connect<K extends keyof Column.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Column.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Column.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Column.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new column
         * @param name identifier of the column
         * @param attribute the file attribute to be displayed in the column
         * @param label the user-visible label for the column
         * @param description a user-visible description of the column
         * @param width_chars the default width of the column (-1 for auto-calc)
         * @param ellipsize PangoEllipsizeMode to set when truncating column
         */
        static new2(name: string, attribute: string, label: string, description: string, width_chars: number, ellipsize: Pango.EllipsizeMode): Column;
    }


    namespace DesktopPreferences {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DesktopPreferences extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DesktopPreferences>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DesktopPreferences.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DesktopPreferences.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DesktopPreferences;

        // Signals
        /** @signal */
        connect<K extends keyof DesktopPreferences.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopPreferences.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DesktopPreferences.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesktopPreferences.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DesktopPreferences.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DesktopPreferences.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Menu extends GObject.Object {
        static $gtype: GObject.GType<Menu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menu.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Menu;

        // Signals
        /** @signal */
        connect<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Menu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param item 
         */
        append_item(item: MenuItem): void;

        /**
         * @returns the provided {@link Nemo.MenuItem} list
         */
        get_items(): MenuItem[];
    }


    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            activate: () => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::menu": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::separator": (pspec: GObject.ParamSpec) => void;
            "notify::tip": (pspec: GObject.ParamSpec) => void;
            "notify::widget-a": (pspec: GObject.ParamSpec) => void;
            "notify::widget-b": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string;
            label: string;
            menu: Menu;
            name: string;
            priority: boolean;
            sensitive: boolean;
            separator: boolean;
            tip: string;
            widget_a: Gtk.Widget;
            widgetA: Gtk.Widget;
            widget_b: Gtk.Widget;
            widgetB: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuItem extends GObject.Object {
        static $gtype: GObject.GType<MenuItem>;

        // Properties
        /**
         * @default null
         */
        get icon(): string;
        set icon(val: string);

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        get menu(): Menu;
        set menu(val: Menu);

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * @default true
         */
        get priority(): boolean;
        set priority(val: boolean);

        /**
         * @default true
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);

        /**
         * @default false
         */
        get separator(): boolean;
        set separator(val: boolean);

        /**
         * @default null
         */
        get tip(): string;
        set tip(val: string);

        get widget_a(): Gtk.Widget;
        set widget_a(val: Gtk.Widget);

        get widgetA(): Gtk.Widget;
        set widgetA(val: Gtk.Widget);

        get widget_b(): Gtk.Widget;
        set widget_b(val: Gtk.Widget);

        get widgetB(): Gtk.Widget;
        set widgetB(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, label: string, tip: string, icon: string): MenuItem;

        static new_separator(name: string): MenuItem;

        static new_widget(name: string, widget_a: Gtk.Widget, widget_b: Gtk.Widget): MenuItem;

        // Signals
        /** @signal */
        connect<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param item_list a list of {@link Nemo.MenuItem}
         */
        static list_free(item_list: MenuItem[]): void;

        // Methods
        /**
         * emits the activate signal.
         */
        activate(): void;

        /**
         * Attachs a menu to the given {@link Nemo.MenuItem}.
         * @param menu pointer to a {@link Nemo.Menu} to attach to the button
         */
        set_submenu(menu: Menu): void;

        /**
         * Sets the custom widget A for this {@link Nemo.MenuItem}
         * @param widget pointer to a {@link Gtk.Widget} use in place of text
         */
        set_widget_a(widget: Gtk.Widget): void;

        /**
         * Sets the custom widget B for this {@link Nemo.MenuItem}
         * @param widget pointer to a {@link Gtk.Widget} use in place of text
         */
        set_widget_b(widget: Gtk.Widget): void;
    }


    namespace PropertyPage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: Gtk.Widget;
            name: string;
            page: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class PropertyPage extends GObject.Object {
        static $gtype: GObject.GType<PropertyPage>;

        // Properties
        get label(): Gtk.Widget;
        set label(val: Gtk.Widget);

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        get page(): Gtk.Widget;
        set page(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertyPage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PropertyPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage;

        // Signals
        /** @signal */
        connect<K extends keyof PropertyPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PropertyPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PropertyPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropertyPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SimpleButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class SimpleButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<SimpleButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SimpleButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SimpleButton;

        static new_from_file(path: string, icon_size: number): SimpleButton;

        static new_from_icon_name(icon_name: string, icon_size: number): SimpleButton;

        // Conflicted with Gtk.Button.new_from_icon_name
        static new_from_icon_name(...args: never[]): any;

        static new_from_stock(stock_id: string, icon_size: number): SimpleButton;

        // Conflicted with Gtk.Button.new_from_stock
        static new_from_stock(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SimpleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimpleButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimpleButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    /**
     * @gir-type Alias
     */
    type ColumnClass = typeof Column;

    /**
     * @gir-type Struct
     */
    class ColumnProviderInterface {
        static $gtype: GObject.GType<ColumnProviderInterface>;
    }


    /**
     * @gir-type Alias
     */
    type DesktopPreferencesClass = typeof DesktopPreferences;

    /**
     * @gir-type Struct
     */
    abstract class File {
        static $gtype: GObject.GType<File>;
    }


    /**
     * @gir-type Alias
     */
    type FileInfoInterface = typeof FileInfo;

    /**
     * @gir-type Struct
     */
    class InfoProviderInterface {
        static $gtype: GObject.GType<InfoProviderInterface>;
    }


    /**
     * @gir-type Struct
     */
    class LocationWidgetProviderInterface {
        static $gtype: GObject.GType<LocationWidgetProviderInterface>;
    }


    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;

    /**
     * @gir-type Alias
     */
    type MenuItemClass = typeof MenuItem;

    /**
     * @gir-type Struct
     */
    class MenuProviderInterface {
        static $gtype: GObject.GType<MenuProviderInterface>;
    }


    /**
     * @gir-type Struct
     */
    class NameAndDescProviderInterface {
        static $gtype: GObject.GType<NameAndDescProviderInterface>;
    }


    /**
     * Handle for asynchronous interfaces.  These are opaque handles that must
     * be unique within an extension object.  These are returned by operations
     * that return NEMO_OPERATION_IN_PROGRESS.
     * 
     * For python extensions, the handle is a dummy struct created by the nemo
     * python bindings on the extension's behalf.  It can be used as a unique
     * key for a dict, for instance, for keeping track of multiple operations
     * at once.
     * @gir-type Struct
     */
    abstract class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;
    }


    /**
     * @gir-type Alias
     */
    type PropertyPageClass = typeof PropertyPage;

    /**
     * @gir-type Struct
     */
    class PropertyPageProviderInterface {
        static $gtype: GObject.GType<PropertyPageProviderInterface>;
    }


    /**
     * @gir-type Alias
     */
    type SimpleButtonClass = typeof SimpleButton;

    namespace ColumnProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface ColumnProviderNamespace {
        $gtype: GObject.GType<ColumnProvider>;
        prototype: ColumnProvider;
    }
    /**
     * @gir-type Interface
     */
    interface ColumnProvider extends GObject.Object {

        // Methods
        /**
         * @returns the provided {@link Nemo.Column} objects
         */
        get_columns(): Column[];
    }


    export const ColumnProvider: ColumnProviderNamespace & {
        new (): ColumnProvider; // This allows `obj instanceof ColumnProvider`
    };

    namespace FileInfo {
        /**
         * Interface for implementing FileInfo.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param emblem_name 
             * @virtual
             */
            vfunc_add_emblem(emblem_name: string): void;

            /**
             * @param attribute_name 
             * @param value 
             * @virtual
             */
            vfunc_add_string_attribute(attribute_name: string, value: string): void;

            /**
             * @virtual
             */
            vfunc_can_write(): boolean;

            /**
             * @virtual
             */
            vfunc_get_activation_uri(): string;

            /**
             * @virtual
             */
            vfunc_get_file_type(): Gio.FileType;

            /**
             * @virtual
             */
            vfunc_get_location(): Gio.File;

            /**
             * @virtual
             */
            vfunc_get_mime_type(): string;

            /**
             * @virtual
             */
            vfunc_get_mount(): (Gio.Mount | null);

            /**
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * @virtual
             */
            vfunc_get_parent_info(): (FileInfo | null);

            /**
             * @virtual
             */
            vfunc_get_parent_location(): (Gio.File | null);

            /**
             * @virtual
             */
            vfunc_get_parent_uri(): string;

            /**
             * @param attribute_name 
             * @virtual
             */
            vfunc_get_string_attribute(attribute_name: string): string;

            /**
             * @virtual
             */
            vfunc_get_uri(): string;

            /**
             * @virtual
             */
            vfunc_get_uri_scheme(): string;

            /**
             * Notifies nemo to re-run info provider extensions on the given file.
             * 
             * This is useful if you have an extension that listens or responds to some external
             * interface for changes to local file metadata (such as a cloud drive changing file emblems.)
             * 
             * When a change such as this occurs, call this on the file in question, and nemo will
             * schedule a call to extension->update_file_info to update its own internal metadata.
             * 
             * NOTE: This does *not* need to be called on the tail end of a update_full/update_complete
             * asynchronous extension.  Prior to Nemo 3.6 this was indeed the case, however, due to a
             * recursion issue in nemo-directory-async.c (see nemo 9e67417f8f09.)
             * @virtual
             */
            vfunc_invalidate_extension_info(): void;

            /**
             * @virtual
             */
            vfunc_is_directory(): boolean;

            /**
             * @virtual
             */
            vfunc_is_gone(): boolean;

            /**
             * @param mime_Type 
             * @virtual
             */
            vfunc_is_mime_type(mime_Type: string): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface FileInfoNamespace {
        $gtype: GObject.GType<FileInfo>;
        prototype: FileInfo;
        /**
        * @param location the location to create the file info for
        */
        create(location: Gio.File): FileInfo;
        /**
        * @param uri the URI to lookup the file info for
        */
        create_for_uri(uri: string): FileInfo;
        /**
        * @param files the files to copy
        */
        list_copy(files: FileInfo[]): FileInfo[];
        /**
        * @param files a list created with   `nemo_file_info_list_copy`
        */
        list_free(files: FileInfo[]): void;
        /**
        * @param location the location to lookup the file info for
        */
        lookup(location: Gio.File): FileInfo;
        /**
        * @param uri the URI to lookup the file info for
        */
        lookup_for_uri(uri: string): FileInfo;
    }
    /**
     * @gir-type Interface
     */
    interface FileInfo extends GObject.Object, FileInfo.Interface {

        // Methods
        /**
         * @param emblem_name 
         */
        add_emblem(emblem_name: string): void;

        /**
         * @param attribute_name 
         * @param value 
         */
        add_string_attribute(attribute_name: string, value: string): void;

        can_write(): boolean;

        get_activation_uri(): string;

        get_file_type(): Gio.FileType;

        /**
         * @returns a {@link Gio.File} for the location of `file`
         */
        get_location(): Gio.File;

        get_mime_type(): string;

        /**
         * @returns a {@link Gio.Mount} for the mount of `file`,   or `null` if `file` has no mount
         */
        get_mount(): (Gio.Mount | null);

        get_name(): string;

        /**
         * @returns a {@link Nemo.FileInfo} for the parent of `file`,   or `null` if `file` has no parent
         */
        get_parent_info(): (FileInfo | null);

        /**
         * @returns a {@link Gio.File} for the parent location of `file`,   or `null` if `file` has no parent
         */
        get_parent_location(): (Gio.File | null);

        get_parent_uri(): string;

        /**
         * @param attribute_name 
         */
        get_string_attribute(attribute_name: string): string;

        get_uri(): string;

        get_uri_scheme(): string;

        /**
         * Notifies nemo to re-run info provider extensions on the given file.
         * 
         * This is useful if you have an extension that listens or responds to some external
         * interface for changes to local file metadata (such as a cloud drive changing file emblems.)
         * 
         * When a change such as this occurs, call this on the file in question, and nemo will
         * schedule a call to extension->update_file_info to update its own internal metadata.
         * 
         * NOTE: This does *not* need to be called on the tail end of a update_full/update_complete
         * asynchronous extension.  Prior to Nemo 3.6 this was indeed the case, however, due to a
         * recursion issue in nemo-directory-async.c (see nemo 9e67417f8f09.)
         */
        invalidate_extension_info(): void;

        is_directory(): boolean;

        is_gone(): boolean;

        /**
         * @param mime_type 
         */
        is_mime_type(mime_type: string): boolean;
    }


    export const FileInfo: FileInfoNamespace & {
        new (): FileInfo; // This allows `obj instanceof FileInfo`
    };

    namespace InfoProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface InfoProviderNamespace {
        $gtype: GObject.GType<InfoProvider>;
        prototype: InfoProvider;
        /**
        * @param update_complete 
        * @param provider 
        * @param handle 
        * @param result 
        */
        update_complete_invoke(update_complete: GObject.Closure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void;
    }
    /**
     * @gir-type Interface
     */
    interface InfoProvider extends GObject.Object {

        // Methods
        /**
         * @param handle 
         */
        cancel_update(handle: OperationHandle): void;

        /**
         * @param file 
         * @param update_complete 
         * @param handle 
         */
        update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
    }


    export const InfoProvider: InfoProviderNamespace & {
        new (): InfoProvider; // This allows `obj instanceof InfoProvider`
    };

    namespace LocationWidgetProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface LocationWidgetProviderNamespace {
        $gtype: GObject.GType<LocationWidgetProvider>;
        prototype: LocationWidgetProvider;
    }
    /**
     * @gir-type Interface
     */
    interface LocationWidgetProvider extends GObject.Object {

        // Methods
        /**
         * @param uri the URI of the location
         * @param window parent {@link Gtk.Window}
         * @returns the location widget for `provider` at `uri`
         */
        get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
    }


    export const LocationWidgetProvider: LocationWidgetProviderNamespace & {
        new (): LocationWidgetProvider; // This allows `obj instanceof LocationWidgetProvider`
    };

    namespace MenuProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    /**
     * @gir-type Interface
     */
    interface MenuProvider extends GObject.Object {

        // Methods
        emit_items_updated_signal(): void;

        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param current_folder the folder for which background items are requested
         * @returns the provided list of {@link Nemo.MenuItem}
         */
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];

        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param files a list of {@link Nemo.FileInfo}
         * @returns the provided list of {@link Nemo.MenuItem}
         */
        get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[];
    }


    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; // This allows `obj instanceof MenuProvider`
    };

    namespace NameAndDescProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface NameAndDescProviderNamespace {
        $gtype: GObject.GType<NameAndDescProvider>;
        prototype: NameAndDescProvider;
    }
    /**
     * @gir-type Interface
     */
    interface NameAndDescProvider extends GObject.Object {

        // Methods
        /**
         * @returns a list of name:::desc strings.  Optionally, the name of a path executable can be appended as a third component of the list ('name:::desc:::foo-bar-preferences')
         */
        get_name_and_desc(): number[];
    }


    export const NameAndDescProvider: NameAndDescProviderNamespace & {
        new (): NameAndDescProvider; // This allows `obj instanceof NameAndDescProvider`
    };

    namespace PropertyPageProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface PropertyPageProviderNamespace {
        $gtype: GObject.GType<PropertyPageProvider>;
        prototype: PropertyPageProvider;
    }
    /**
     * @gir-type Interface
     */
    interface PropertyPageProvider extends GObject.Object {

        // Methods
        /**
         * This function is called by Nemo when it wants property page
         * items from the extension.
         * 
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a {@link GLib.List} of {@link Nemo.FileInfo}
         * @returns A {@link GLib.List} of allocated {@link Nemo.PropertyPage} items.
         */
        get_pages(files: FileInfo[]): PropertyPage[];
    }


    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; // This allows `obj instanceof PropertyPageProvider`
    };

    /**
     * @gir-type Alias
     */
    type ColumnProviderIface = ColumnProviderInterface;

    /**
     * @gir-type Alias
     */
    type InfoProviderIface = InfoProviderInterface;

    /**
     * @gir-type Alias
     */
    type LocationWidgetProviderIface = LocationWidgetProviderInterface;

    /**
     * @gir-type Alias
     */
    type MenuProviderIface = MenuProviderInterface;

    /**
     * @gir-type Alias
     */
    type NameAndDescProviderIface = NameAndDescProviderInterface;

    /**
     * @gir-type Alias
     */
    type PropertyPageProviderIface = PropertyPageProviderInterface;

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

export default Nemo;

// END
