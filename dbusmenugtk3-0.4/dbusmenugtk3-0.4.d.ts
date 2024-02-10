/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbusmenugtk3-0.4-ambient.d.ts';
import './dbusmenugtk3-0.4-import.d.ts';
/**
 * DbusmenuGtk3-0.4
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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';

export namespace DbusmenuGtk3 {
    const GTK_MENUITEM_H__: number;
    /**
     * The Dbusmenu GTK parser adds cached items on the various
     * menu items throughout the tree.  Sometimes it can be useful
     * to get that cached item to use directly.  This function
     * will retrieve it for you.
     * @param widget A #GtkMenuItem that may have a cached #DbusmenuMenuitem from the parser
     * @returns A pointer to the cached item or NULL if it isn't there.
     */
    function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem;
    /**
     * Goes through the GTK structures and turns them into the appropraite
     * Dbusmenu structures along with setting up all the relationships
     * between the objects.  It also stores the dbusmenu items as a cache
     * on the GTK items so that they'll be reused if necissary.
     * @param widget A #GtkMenuItem or #GtkMenuShell to turn into a #DbusmenuMenuitem
     * @returns A dbusmenu item representing the menu structure
     */
    function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem;
    /**
     * This function looks on the menu item for a property by the
     * name of `property`.  If one exists it tries to turn it into
     * a #GdkPixbuf.  It assumes that the property is a base64 encoded
     * PNG file like the one created by #dbusmenu_menuite_property_set_image.
     * @param menuitem The #DbusmenuMenuitem to look for the property on
     * @param property The name of the property to look for.
     * @returns A pixbuf or #NULL to signal error.
     */
    function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf;
    /**
     * This function gets a GTK shortcut as a key and a mask
     * for use to set the accelerators.
     * @param menuitem The #DbusmenuMenuitem to get the shortcut off
     */
    function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): void;
    /**
     * This function takes the pixbuf that is stored in `data` and
     * turns it into a base64 encoded PNG so that it can be placed
     * onto a standard #DbusmenuMenuitem property.
     * @param menuitem The #DbusmenuMenuitem to set the property on.
     * @param property Name of the property to set.
     * @param data The image to place on the property.
     * @returns Whether the function was able to set the property 	or not.
     */
    function menuitem_property_set_image(
        menuitem: Dbusmenu.Menuitem,
        property: string,
        data: GdkPixbuf.Pixbuf,
    ): boolean;
    /**
     * Takes the modifer described by `key` and `modifier` and places that into
     * the format sending across Dbus for shortcuts.
     * @param menuitem The #DbusmenuMenuitem to set the shortcut on
     * @param key The keycode of the key to send
     * @param modifier A bitmask of modifiers used to activate the item
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut(
        menuitem: Dbusmenu.Menuitem,
        key: number,
        modifier: Gdk.ModifierType,
    ): boolean;
    /**
     * Takes the shortcut that is installed on a menu item and calls
     * #dbusmenu_menuitem_property_set_shortcut with it.  It also sets
     * up listeners to watch it change.
     * @param menuitem The #DbusmenuMenuitem to set the shortcut on
     * @param gmi A menu item to steal the shortcut off of
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean;
    /**
     * This function takes a GTK shortcut string as defined in
     * #gtk_accelerator_parse and turns that into the information
     * required to send it over DBusmenu.
     * @param menuitem The #DbusmenuMenuitem to set the shortcut on
     * @param shortcut String describing the shortcut
     * @returns Whether it was successful at setting the property.
     */
    function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean;
    module Client {
        // Constructor properties interface
    }

    /**
     * A subclass of #DbusmenuClient to add functionality with regarding
     * building GTK items out of the abstract tree.
     */
    class Client extends Dbusmenu.Client {
        // Constructors of DbusmenuGtk3-0.4.Client

        static ['new'](dbus_name: string, dbus_object: string): Client;

        // Owm methods of DbusmenuGtk3-0.4.Client

        /**
         * Gets the accel group for this client.
         * @returns Either a valid group or #NULL on error or 	none set.
         */
        get_accel_group(): Gtk.AccelGroup;
        /**
         * This grabs the #GtkMenuItem that is associated with the
         * #DbusmenuMenuitem.
         * @param item #DbusmenuMenuitem to get associated #GtkMenuItem on.
         * @returns The #GtkMenuItem that can be played with.
         */
        menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem;
        /**
         * This grabs the submenu associated with the menuitem.
         * @param item #DbusmenuMenuitem to get associated #GtkMenu on.
         * @returns The #GtkMenu if there is one.
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
         * #DbusmenuMenuitem side of thing.
         * @param item The #DbusmenuMenuitem to attach the GTK-isms to
         * @param gmi A #GtkMenuItem representing the GTK world's view of this menuitem
         * @param parent The parent #DbusmenuMenuitem
         */
        newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void;
        /**
         * Sets the acceleration group for the menu items with accelerators
         * on this client.
         * @param agroup The new acceleration group
         */
        set_accel_group(agroup: Gtk.AccelGroup): void;
    }

    module Menu {
        // Constructor properties interface
    }

    /**
     * A #GtkMenu that is built using an abstract tree built from
     * a #DbusmenuGtkClient.
     */
    class Menu extends Gtk.Menu {
        // Own properties of DbusmenuGtk3-0.4.Menu

        dbus_name: string;
        dbusName: string;
        dbus_object: string;
        dbusObject: string;

        // Constructors of DbusmenuGtk3-0.4.Menu

        static ['new'](dbus_name: string, dbus_object: string): Menu;

        // Owm methods of DbusmenuGtk3-0.4.Menu

        /**
         * An accessor for the client that this menu is using to
         * communicate with the server.
         * @returns A valid #DbusmenuGtkClient or NULL on error.
         */
        get_client(): Client;
    }

    /**
     * Functions and signal slots for using a #DbusmenuGtkClient
     */
    class ClientClass {}

    class ClientPrivate {}

    /**
     * All of the subclassable functions and signal slots for a
     * #DbusmenuGtkMenu.
     */
    class MenuClass {}

    class MenuPrivate {}

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

export default DbusmenuGtk3;
// END
