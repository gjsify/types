
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbusmenugtk-0.4-ambient.d.ts';
import './dbusmenugtk-0.4-import.d.ts';
/**
 * DbusmenuGtk-0.4
 */

import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
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
import type Dbusmenu from '@girs/dbusmenu-0.4';

export namespace DbusmenuGtk {

const GTK_MENUITEM_H__: number
/**
 * The Dbusmenu GTK parser adds cached items on the various
 * menu items throughout the tree.  Sometimes it can be useful
 * to get that cached item to use directly.  This function
 * will retrieve it for you.
 * @param widget A #GtkMenuItem that may have a cached #DbusmenuMenuitem from the parser
 * @returns A pointer to the cached item or NULL if it isn't there.
 */
function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem
/**
 * Goes through the GTK structures and turns them into the appropraite
 * Dbusmenu structures along with setting up all the relationships
 * between the objects.  It also stores the dbusmenu items as a cache
 * on the GTK items so that they'll be reused if necissary.
 * @param widget A #GtkMenuItem or #GtkMenuShell to turn into a #DbusmenuMenuitem
 * @returns A dbusmenu item representing the menu structure
 */
function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem
/**
 * This function looks on the menu item for a property by the
 * name of `property`.  If one exists it tries to turn it into
 * a #GdkPixbuf.  It assumes that the property is a base64 encoded
 * PNG file like the one created by #dbusmenu_menuite_property_set_image.
 * @param menuitem The #DbusmenuMenuitem to look for the property on
 * @param property The name of the property to look for.
 * @returns A pixbuf or #NULL to signal error.
 */
function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string | null): GdkPixbuf.Pixbuf
/**
 * This function gets a GTK shortcut as a key and a mask
 * for use to set the accelerators.
 * @param menuitem The #DbusmenuMenuitem to get the shortcut off
 */
function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [ /* key */ number, /* modifier */ Gdk.ModifierType ]
/**
 * This function takes the pixbuf that is stored in `data` and
 * turns it into a base64 encoded PNG so that it can be placed
 * onto a standard #DbusmenuMenuitem property.
 * @param menuitem The #DbusmenuMenuitem to set the property on.
 * @param property Name of the property to set.
 * @param data The image to place on the property.
 * @returns Whether the function was able to set the property 	or not.
 */
function menuitem_property_set_image(menuitem: Dbusmenu.Menuitem, property: string | null, data: GdkPixbuf.Pixbuf): boolean
/**
 * Takes the modifer described by `key` and `modifier` and places that into
 * the format sending across Dbus for shortcuts.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param key The keycode of the key to send
 * @param modifier A bitmask of modifiers used to activate the item
 * @returns Whether it was successful at setting the property.
 */
function menuitem_property_set_shortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean
/**
 * Takes the shortcut that is installed on a menu item and calls
 * #dbusmenu_menuitem_property_set_shortcut with it.  It also sets
 * up listeners to watch it change.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param gmi A menu item to steal the shortcut off of
 * @returns Whether it was successful at setting the property.
 */
function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean
/**
 * This function takes a GTK shortcut string as defined in
 * #gtk_accelerator_parse and turns that into the information
 * required to send it over DBusmenu.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param shortcut String describing the shortcut
 * @returns Whether it was successful at setting the property.
 */
function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string | null): boolean
module Client {

    // Constructor properties interface

    interface ConstructorProperties extends Dbusmenu.Client.ConstructorProperties {
    }

}

interface Client {

    // Owm methods of DbusmenuGtk-0.4.DbusmenuGtk.Client

    /**
     * Gets the accel group for this client.
     * @returns Either a valid group or #NULL on error or 	none set.
     */
    get_accel_group(): Gtk.AccelGroup
    /**
     * This grabs the #GtkMenuItem that is associated with the
     * #DbusmenuMenuitem.
     * @param item #DbusmenuMenuitem to get associated #GtkMenuItem on.
     * @returns The #GtkMenuItem that can be played with.
     */
    menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem
    /**
     * This grabs the submenu associated with the menuitem.
     * @param item #DbusmenuMenuitem to get associated #GtkMenu on.
     * @returns The #GtkMenu if there is one.
     */
    menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu
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
    newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void
    /**
     * Sets the acceleration group for the menu items with accelerators
     * on this client.
     * @param agroup The new acceleration group
     */
    set_accel_group(agroup: Gtk.AccelGroup): void

    // Class property signals of DbusmenuGtk-0.4.DbusmenuGtk.Client

    connect(sigName: "notify::dbus-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-object", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-object", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-object", ...args: any[]): void
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-events", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A subclass of #DbusmenuClient to add functionality with regarding
 * building GTK items out of the abstract tree.
 * @class 
 */
class Client extends Dbusmenu.Client {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of DbusmenuGtk-0.4.DbusmenuGtk.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new #DbusmenuGtkClient object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbus_name Name of the #DbusmenuServer on DBus
     * @param dbus_object Name of the object on the #DbusmenuServer
     * @returns A new #DbusmenuGtkClient sync'd with a server
     */
    constructor(dbus_name: string | null, dbus_object: string | null) 
    /**
     * Creates a new #DbusmenuGtkClient object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbus_name Name of the #DbusmenuServer on DBus
     * @param dbus_object Name of the object on the #DbusmenuServer
     * @returns A new #DbusmenuGtkClient sync'd with a server
     */
    static new(dbus_name: string | null, dbus_object: string | null): Client

    // Overloads of new

    /**
     * This function creates a new client that connects to a specific
     * server on DBus.  That server is at a specific location sharing
     * a known object.  The interface is assumed by the code to be
     * the DBus menu interface.  The newly created client will start
     * sending out events as it syncs up with the server.
     * @constructor 
     * @param name The DBus name for the server to connect to
     * @param object The object on the server to monitor
     * @returns A brand new #DbusmenuClient
     */
    static new(name: string | null, object: string | null): Dbusmenu.Client
    _init(config?: Client.ConstructorProperties): void
}

module Menu {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Menu.ConstructorProperties {

        // Own constructor properties of DbusmenuGtk-0.4.DbusmenuGtk.Menu

        dbus_name?: string | null
        dbus_object?: string | null
        dbusName?: string | null
        dbusObject?: string | null
    }

}

interface Menu extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    readonly dbus_name: string | null
    readonly dbusName: string | null
    readonly dbus_object: string | null
    readonly dbusObject: string | null

    // Own fields of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    parent: Gtk.Menu & Gtk.Widget
    priv: MenuPrivate

    // Owm methods of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    /**
     * An accessor for the client that this menu is using to
     * communicate with the server.
     * @returns A valid #DbusmenuGtkClient or NULL on error.
     */
    get_client(): Client

    // Conflicting methods

    /**
     * Sets an accelerator path for this menu from which accelerator paths
     * for its immediate children, its menu items, can be constructed.
     * The main purpose of this function is to spare the programmer the
     * inconvenience of having to call gtk_menu_item_set_accel_path() on
     * each menu item that should support runtime user changable accelerators.
     * Instead, by just calling gtk_menu_set_accel_path() on their parent,
     * each menu item of this menu, that contains a label describing its purpose,
     * automatically gets an accel path assigned. For example, a menu containing
     * menu items "New" and "Exit", will, after
     * <literal>gtk_menu_set_accel_path (menu, "&lt;Gnumeric-Sheet&gt;/File");</literal>
     * has been called, assign its items the accel paths:
     * <literal>"&lt;Gnumeric-Sheet&gt;/File/New"</literal> and <literal>"&lt;Gnumeric-Sheet&gt;/File/Exit"</literal>.
     * Assigning accel paths to menu items then enables the user to change
     * their accelerators at runtime. More details about accelerator paths
     * and their default setups can be found at gtk_accel_map_add_entry().
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accel_path a valid accelerator path
     */
    set_accel_path(accel_path: string | null): void

    // Overloads of set_accel_path

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
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void
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
    set_accel_path(accel_path: string | null, accel_group: Gtk.AccelGroup | null): void

    // Class property signals of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    connect(sigName: "notify::dbus-name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-object", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-object", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-object", ...args: any[]): void
    connect(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-group", ...args: any[]): void
    connect(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attach-widget", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserve-toggle-size", ...args: any[]): void
    connect(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-state", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::take-focus", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::extension-events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extension-events", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::user-data", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GtkMenu that is built using an abstract tree built from
 * a #DbusmenuGtkClient.
 * @class 
 */
class Menu extends Gtk.Menu {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    static name: string
    static $gtype: GObject.GType<Menu>

    // Constructors of DbusmenuGtk-0.4.DbusmenuGtk.Menu

    constructor(config?: Menu.ConstructorProperties) 
    /**
     * Creates a new #DbusmenuGtkMenu object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbus_name Name of the #DbusmenuServer on DBus
     * @param dbus_object Name of the object on the #DbusmenuServer
     * @returns A new #DbusmenuGtkMenu sync'd with a server
     */
    constructor(dbus_name: string | null, dbus_object: string | null) 
    /**
     * Creates a new #DbusmenuGtkMenu object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbus_name Name of the #DbusmenuServer on DBus
     * @param dbus_object Name of the object on the #DbusmenuServer
     * @returns A new #DbusmenuGtkMenu sync'd with a server
     */
    static new(dbus_name: string | null, dbus_object: string | null): Menu

    // Overloads of new

    static new(): Gtk.Menu
    _init(config?: Menu.ConstructorProperties): void
}

interface ClientClass {

    // Own fields of DbusmenuGtk-0.4.DbusmenuGtk.ClientClass

    /**
     * #GtkMenuClass
     * @field 
     */
    parent_class: Dbusmenu.ClientClass
    root_changed: (newroot: Dbusmenu.Menuitem) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
}

/**
 * Functions and signal slots for using a #DbusmenuGtkClient
 * @record 
 */
abstract class ClientClass {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.ClientPrivate

    static name: string
}

interface MenuClass {

    // Own fields of DbusmenuGtk-0.4.DbusmenuGtk.MenuClass

    /**
     * #GtkMenuClass
     * @field 
     */
    parent_class: Gtk.MenuClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
}

/**
 * All of the subclassable functions and signal slots for a
 * #DbusmenuGtkMenu.
 * @record 
 */
abstract class MenuClass {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.MenuClass

    static name: string
}

interface MenuPrivate {
}

class MenuPrivate {

    // Own properties of DbusmenuGtk-0.4.DbusmenuGtk.MenuPrivate

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

export default DbusmenuGtk;
// END