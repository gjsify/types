// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DbusmenuGtk3-0.4
 */

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
import type Dbusmenu from './Dbusmenu-0.4';

export namespace DbusmenuGtk3 {

const GTK_MENUITEM_H__: number
/**
 * The Dbusmenu GTK parser adds cached items on the various
 * menu items throughout the tree.  Sometimes it can be useful
 * to get that cached item to use directly.  This function
 * will retrieve it for you.
 * @param widget A #GtkMenuItem that may have a cached #DbusmenuMenuitem from the parser
 */
function gtkParseGetCachedItem(widget: Gtk.Widget): Dbusmenu.Menuitem
/**
 * Goes through the GTK structures and turns them into the appropraite
 * Dbusmenu structures along with setting up all the relationships
 * between the objects.  It also stores the dbusmenu items as a cache
 * on the GTK items so that they'll be reused if necissary.
 * @param widget A #GtkMenuItem or #GtkMenuShell to turn into a #DbusmenuMenuitem
 */
function gtkParseMenuStructure(widget: Gtk.Widget): Dbusmenu.Menuitem
/**
 * This function looks on the menu item for a property by the
 * name of `property`.  If one exists it tries to turn it into
 * a #GdkPixbuf.  It assumes that the property is a base64 encoded
 * PNG file like the one created by #dbusmenu_menuite_property_set_image.
 * @param menuitem The #DbusmenuMenuitem to look for the property on
 * @param property The name of the property to look for.
 */
function menuitemPropertyGetImage(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf
/**
 * This function gets a GTK shortcut as a key and a mask
 * for use to set the accelerators.
 * @param menuitem The #DbusmenuMenuitem to get the shortcut off
 */
function menuitemPropertyGetShortcut(menuitem: Dbusmenu.Menuitem): [ /* key */ number, /* modifier */ Gdk.ModifierType ]
/**
 * This function takes the pixbuf that is stored in `data` and
 * turns it into a base64 encoded PNG so that it can be placed
 * onto a standard #DbusmenuMenuitem property.
 * @param menuitem The #DbusmenuMenuitem to set the property on.
 * @param property Name of the property to set.
 * @param data The image to place on the property.
 */
function menuitemPropertySetImage(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean
/**
 * Takes the modifer described by `key` and `modifier` and places that into
 * the format sending across Dbus for shortcuts.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param key The keycode of the key to send
 * @param modifier A bitmask of modifiers used to activate the item
 */
function menuitemPropertySetShortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean
/**
 * Takes the shortcut that is installed on a menu item and calls
 * #dbusmenu_menuitem_property_set_shortcut with it.  It also sets
 * up listeners to watch it change.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param gmi A menu item to steal the shortcut off of
 */
function menuitemPropertySetShortcutMenuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean
/**
 * This function takes a GTK shortcut string as defined in
 * #gtk_accelerator_parse and turns that into the information
 * required to send it over DBusmenu.
 * @param menuitem The #DbusmenuMenuitem to set the shortcut on
 * @param shortcut String describing the shortcut
 */
function menuitemPropertySetShortcutString(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean
interface Client_ConstructProps extends Dbusmenu.Client_ConstructProps {
}

interface Client {

    // Owm methods of DbusmenuGtk3-0.4.DbusmenuGtk3.Client

    /**
     * Gets the accel group for this client.
     */
    getAccelGroup(): Gtk.AccelGroup
    /**
     * This grabs the #GtkMenuItem that is associated with the
     * #DbusmenuMenuitem.
     * @param item #DbusmenuMenuitem to get associated #GtkMenuItem on.
     */
    menuitemGet(item: Dbusmenu.Menuitem): Gtk.MenuItem
    /**
     * This grabs the submenu associated with the menuitem.
     * @param item #DbusmenuMenuitem to get associated #GtkMenu on.
     */
    menuitemGetSubmenu(item: Dbusmenu.Menuitem): Gtk.Menu
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
    newitemBase(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void
    /**
     * Sets the acceleration group for the menu items with accelerators
     * on this client.
     * @param agroup The new acceleration group
     */
    setAccelGroup(agroup: Gtk.AccelGroup): void

    // Class property signals of DbusmenuGtk3-0.4.DbusmenuGtk3.Client

    connect(sigName: "notify::dbus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-object", ...args: any[]): void
    connect(sigName: "notify::group-events", callback: (...args: any[]) => void): number
    on(sigName: "notify::group-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::group-events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::group-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::group-events", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A subclass of #DbusmenuClient to add functionality with regarding
 * building GTK items out of the abstract tree.
 * @class 
 */
class Client extends Dbusmenu.Client {

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of DbusmenuGtk3-0.4.DbusmenuGtk3.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Creates a new #DbusmenuGtkClient object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbusName Name of the #DbusmenuServer on DBus
     * @param dbusObject Name of the object on the #DbusmenuServer
     */
    constructor(dbusName: string, dbusObject: string) 
    /**
     * Creates a new #DbusmenuGtkClient object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbusName Name of the #DbusmenuServer on DBus
     * @param dbusObject Name of the object on the #DbusmenuServer
     */
    static new(dbusName: string, dbusObject: string): Client

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
     */
    static new(name: string, object: string): Dbusmenu.Client
    _init(config?: Client_ConstructProps): void
}

interface Menu_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Menu_ConstructProps {

    // Own constructor properties of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    dbusName?: string | null
    dbusObject?: string | null
}

interface Menu extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    readonly dbusName: string
    readonly dbusObject: string

    // Own fields of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    parent: Gtk.Menu
    priv: MenuPrivate

    // Owm methods of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    /**
     * An accessor for the client that this menu is using to
     * communicate with the server.
     */
    getClient(): Client

    // Conflicting methods

    setAccelPath(...args: any[]): any
    childNotify(...args: any[]): any

    // Class property signals of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    connect(sigName: "notify::dbus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-object", ...args: any[]): void
    connect(sigName: "notify::accel-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::accel-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accel-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accel-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accel-group", ...args: any[]): void
    connect(sigName: "notify::accel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::anchor-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-hints", ...args: any[]): void
    connect(sigName: "notify::attach-widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::attach-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attach-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attach-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attach-widget", ...args: any[]): void
    connect(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-type-hint", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void): number
    on(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rect-anchor-dx", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void): number
    on(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rect-anchor-dy", ...args: any[]): void
    connect(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reserve-toggle-size", ...args: any[]): void
    connect(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::tearoff-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tearoff-state", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): number
    on(sigName: "notify::tearoff-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::take-focus", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GtkMenu that is built using an abstract tree built from
 * a #DbusmenuGtkClient.
 * @class 
 */
class Menu extends Gtk.Menu {

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    static name: string
    static $gtype: GObject.GType<Menu>

    // Constructors of DbusmenuGtk3-0.4.DbusmenuGtk3.Menu

    constructor(config?: Menu_ConstructProps) 
    /**
     * Creates a new #DbusmenuGtkMenu object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbusName Name of the #DbusmenuServer on DBus
     * @param dbusObject Name of the object on the #DbusmenuServer
     */
    constructor(dbusName: string, dbusObject: string) 
    /**
     * Creates a new #DbusmenuGtkMenu object and creates a #DbusmenuClient
     * that connects across DBus to a #DbusmenuServer.
     * @constructor 
     * @param dbusName Name of the #DbusmenuServer on DBus
     * @param dbusObject Name of the object on the #DbusmenuServer
     */
    static new(dbusName: string, dbusObject: string): Menu

    // Overloads of new

    /**
     * Creates a new #GtkMenu
     * @constructor 
     */
    static new(): Gtk.Menu
    _init(config?: Menu_ConstructProps): void
}

interface ClientClass {

    // Own fields of DbusmenuGtk3-0.4.DbusmenuGtk3.ClientClass

    /**
     * #GtkMenuClass
     * @field 
     */
    parentClass: Dbusmenu.ClientClass
    rootChanged: (newroot: Dbusmenu.Menuitem) => void
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

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.ClientPrivate

    static name: string
}

interface MenuClass {

    // Own fields of DbusmenuGtk3-0.4.DbusmenuGtk3.MenuClass

    /**
     * #GtkMenuClass
     * @field 
     */
    parentClass: Gtk.MenuClass
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

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.MenuClass

    static name: string
}

interface MenuPrivate {
}

class MenuPrivate {

    // Own properties of DbusmenuGtk3-0.4.DbusmenuGtk3.MenuPrivate

    static name: string
}

}
export default DbusmenuGtk3;