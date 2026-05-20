
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
import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
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
import type Dbusmenu from '@girs/dbusmenu-0.4';

export namespace DbusmenuGtk {

    /**
     * DbusmenuGtk-0.4
     */


    const GTK_MENUITEM_H__: number;

    /**
     * The Dbusmenu GTK parser adds cached items on the various
     * menu items throughout the tree.  Sometimes it can be useful
     * to get that cached item to use directly.  This function
     * will retrieve it for you.
     * @param widget A {@link Gtk.MenuItem} that may have a cached {@link Dbusmenu.Menuitem} from the parser
     * @returns A pointer to the cached item or NULL if it isn't there.
     */
    function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem;

    /**
     * Goes through the GTK structures and turns them into the appropraite
     * Dbusmenu structures along with setting up all the relationships
     * between the objects.  It also stores the dbusmenu items as a cache
     * on the GTK items so that they'll be reused if necissary.
     * @param widget A {@link Gtk.MenuItem} or {@link Gtk.MenuShell} to turn into a {@link Dbusmenu.Menuitem}
     * @returns A dbusmenu item representing the menu structure
     */
    function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem;

    /**
     * This function looks on the menu item for a property by the
     * name of `property`.  If one exists it tries to turn it into
     * a {@link GdkPixbuf.Pixbuf}.  It assumes that the property is a base64 encoded
     * PNG file like the one created by `dbusmenu_menuite_property_set_image`.
     * @param menuitem The {@link Dbusmenu.Menuitem} to look for the property on
     * @param property The name of the property to look for.
     * @returns A pixbuf or `NULL` to signal error.
     */
    function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf;

    /**
     * This function gets a GTK shortcut as a key and a mask
     * for use to set the accelerators.
     * @param menuitem The {@link Dbusmenu.Menuitem} to get the shortcut off
     */
    function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [number, Gdk.ModifierType];

    /**
     * This function takes the pixbuf that is stored in `data` and
     * turns it into a base64 encoded PNG so that it can be placed
     * onto a standard {@link Dbusmenu.Menuitem} property.
     * @param menuitem The {@link Dbusmenu.Menuitem} to set the property on.
     * @param property Name of the property to set.
     * @param data The image to place on the property.
     * @returns Whether the function was able to set the property 	or not.
     */
    function menuitem_property_set_image(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean;

    /**
     * Takes the modifer described by `key` and `modifier` and places that into
     * the format sending across Dbus for shortcuts.
     * @param menuitem The {@link Dbusmenu.Menuitem} to set the shortcut on
     * @param key The keycode of the key to send
     * @param modifier A bitmask of modifiers used to activate the item
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean;

    /**
     * Takes the shortcut that is installed on a menu item and calls
     * `dbusmenu_menuitem_property_set_shortcut` with it.  It also sets
     * up listeners to watch it change.
     * @param menuitem The {@link Dbusmenu.Menuitem} to set the shortcut on
     * @param gmi A menu item to steal the shortcut off of
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean;

    /**
     * This function takes a GTK shortcut string as defined in
     * `gtk_accelerator_parse` and turns that into the information
     * required to send it over DBusmenu.
     * @param menuitem The {@link Dbusmenu.Menuitem} to set the shortcut on
     * @param shortcut String describing the shortcut
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean;

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends Dbusmenu.Client.SignalSignatures {
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::group-events": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dbusmenu.Client.ConstructorProps {}
    }

    /**
     * A subclass of {@link Dbusmenu.Client} to add functionality with regarding
     * building GTK items out of the abstract tree.
     * @gir-type Class
     */
    class Client extends Dbusmenu.Client {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_name: string, dbus_object: string): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the accel group for this client.
         * @returns Either a valid group or `NULL` on error or 	none set.
         */
        get_accel_group(): Gtk.AccelGroup;

        /**
         * This grabs the {@link Gtk.MenuItem} that is associated with the
         * {@link Dbusmenu.Menuitem}.
         * @param item {@link Dbusmenu.Menuitem} to get associated {@link Gtk.MenuItem} on.
         * @returns The {@link Gtk.MenuItem} that can be played with.
         */
        menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem;

        /**
         * This grabs the submenu associated with the menuitem.
         * @param item {@link Dbusmenu.Menuitem} to get associated {@link Gtk.Menu} on.
         * @returns The {@link Gtk.Menu} if there is one.
         */
        menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu;

        /**
         * This function provides some of the basic connectivity for being in
         * the GTK world.  Things like visibility and sensitivity of the item are
         * handled here so that the subclasses don't have to.  If you're building
         * your on GTK menu item you can use this function to apply those basic
         * attributes so that you don't have to deal with them either.
         * 
         * This also handles passing the "activate" signal back to the
         * {@link Dbusmenu.Menuitem} side of thing.
         * @param item The {@link Dbusmenu.Menuitem} to attach the GTK-isms to
         * @param gmi A {@link Gtk.MenuItem} representing the GTK world's view of this menuitem
         * @param parent The parent {@link Dbusmenu.Menuitem}
         */
        newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void;

        /**
         * Sets the acceleration group for the menu items with accelerators
         * on this client.
         * @param agroup The new acceleration group
         */
        set_accel_group(agroup: Gtk.AccelGroup): void;
    }


    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::accel-group": (pspec: GObject.ParamSpec) => void;
            "notify::accel-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::attach-widget": (pspec: GObject.ParamSpec) => void;
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
            "notify::reserve-toggle-size": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-state": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::take-focus": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::extension-events": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::user-data": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_object: string;
            dbusObject: string;
        }
    }

    /**
     * A {@link Gtk.Menu} that is built using an abstract tree built from
     * a {@link DbusmenuGtk.Client}.
     * @gir-type Class
     */
    class Menu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Menu>;

        // Properties
        /**
         * @construct-only
         */
        get dbus_name(): string;

        /**
         * @construct-only
         */
        get dbusName(): string;

        /**
         * @construct-only
         */
        get dbus_object(): string;

        /**
         * @construct-only
         */
        get dbusObject(): string;

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

        static ["new"](dbus_name: string, dbus_object: string): Menu;

        // Conflicted with Gtk.Menu.new
        static ["new"](...args: never[]): any;

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
         * An accessor for the client that this menu is using to
         * communicate with the server.
         * @returns A valid {@link DbusmenuGtk.Client} or NULL on error.
         */
        get_client(): Client;

        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): null;

        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         * 
         * If the object already had an association with that name,
         * the old association will be destroyed.
         * 
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data: null): void;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;

    /**
     * @gir-type Struct
     */
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
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

export default DbusmenuGtk;

// END
