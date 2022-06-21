// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dbusmenu-0.4
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Dbusmenu {

/**
 * Tracks how the menus should be presented to the user.
 */
enum Status {
    /**
     * Everything is normal
     */
    NORMAL,
    /**
     * The menus should be shown at a higher priority
     */
    NOTICE,
}
/**
 * The direction of text that the strings that this server
 * 	will be sending strings as.
 */
enum TextDirection {
    /**
     * Unspecified text direction
     */
    NONE,
    /**
     * Left-to-right text direction
     */
    LTR,
    /**
     * Right-to-left text direction
     */
    RTL,
}
/**
 * String to access property #DbusmenuClient:dbus-name
 */
const CLIENT_PROP_DBUS_NAME: string
/**
 * String to access property #DbusmenuClient:dbus-object
 */
const CLIENT_PROP_DBUS_OBJECT: string
/**
 * String to access property #DbusmenuClient:group-events
 */
const CLIENT_PROP_GROUP_EVENTS: string
/**
 * String to access property #DbusmenuClient:status
 */
const CLIENT_PROP_STATUS: string
/**
 * String to access property #DbusmenuClient:text-direction
 */
const CLIENT_PROP_TEXT_DIRECTION: string
/**
 * String to attach to signal #DbusmenuClient::event-result
 */
const CLIENT_SIGNAL_EVENT_RESULT: string
/**
 * String to attach to signal #DbusmenuClient::icon-theme-dirs-changed
 */
const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string
/**
 * String to attach to signal #DbusmenuClient::item-activate
 */
const CLIENT_SIGNAL_ITEM_ACTIVATE: string
/**
 * String to attach to signal #DbusmenuClient::layout-updated
 */
const CLIENT_SIGNAL_LAYOUT_UPDATED: string
/**
 * String to attach to signal #DbusmenuClient::new-menuitem
 */
const CLIENT_SIGNAL_NEW_MENUITEM: string
/**
 * String to attach to signal #DbusmenuClient::root-changed
 */
const CLIENT_SIGNAL_ROOT_CHANGED: string
/**
 * Used to set the 'type' property on a menu item to create
 * a standard menu item.
 */
const CLIENT_TYPES_DEFAULT: string
/**
 * Used to set the 'type' property on a menu item to create
 * an image menu item.  Deprecated as standard menu items now
 * support images as well.
 */
const CLIENT_TYPES_IMAGE: string
/**
 * Used to set the 'type' property on a menu item to create
 * a separator menu item.
 */
const CLIENT_TYPES_SEPARATOR: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_CHILD_DISPLAY to have the
 * subitems displayed as a submenu.
 */
const MENUITEM_CHILD_DISPLAY_SUBMENU: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving an alert
 * to the user.
 */
const MENUITEM_DISPOSITION_ALERT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving additional
 * information to the user.
 */
const MENUITEM_DISPOSITION_INFORMATIVE: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in the normal manner.  Default value.
 */
const MENUITEM_DISPOSITION_NORMAL: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving a warning
 * to the user.
 */
const MENUITEM_DISPOSITION_WARNING: string
/**
 * String for the event identifier when a menu item is clicked
 * on by the user.
 */
const MENUITEM_EVENT_ACTIVATED: string
/**
 * String for the event identifier when a menu is closed and
 * displayed to the user.  Only valid for items that contain
 * submenus.
 */
const MENUITEM_EVENT_CLOSED: string
/**
 * String for the event identifier when a menu is opened and
 * displayed to the user.  Only valid for items that contain
 * submenus.
 */
const MENUITEM_EVENT_OPENED: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is undecided.
 */
const MENUITEM_ICON_NAME_BLANK: string
/**
 * #DbusmenuMenuitem property used to provide a textual description of any
 * information that the icon may convey. The contents of this property are
 * passed through to assistive technologies such as the Orca screen reader.
 * The contents of this property will not be visible in the menu item. If
 * this property is set, Orca will use this property instead of the label
 * property.
 */
const MENUITEM_PROP_ACCESSIBLE_DESC: string
/**
 * #DbusmenuMenuitem property that tells how the children of this menuitem
 * should be displayed.  Most likely this will be unset or of the value
 * #DBUSMENU_MENUITEM_CHILD_DISPLAY_SUBMENU.  Type: #G_VARIANT_TYPE_STRING
 */
const MENUITEM_PROP_CHILD_DISPLAY: string
/**
 * #DbusmenuMenuitem property to tell what type of information that the
 * menu item is displaying to the user.  Type: #G_VARIANT_TYPE_STRING
 */
const MENUITEM_PROP_DISPOSITION: string
/**
 * #DbusmenuMenuitem property used to represent whether the menuitem
 * is clickable or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
 */
const MENUITEM_PROP_ENABLED: string
/**
 * #DbusmenuMenuitem property that is the raw data of a custom icon
 * used in the application.  Type: #G_VARIANT_TYPE_VARIANT
 * 
 * It is recommended that this is not set directly but instead the
 * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_image()
 */
const MENUITEM_PROP_ICON_DATA: string
/**
 * #DbusmenuMenuitem property that is the name of the icon under the
 * Freedesktop.org icon naming spec.  Type: #G_VARIANT_TYPE_STRING
 */
const MENUITEM_PROP_ICON_NAME: string
/**
 * #DbusmenuMenuitem property used for the text on the menu item.
 */
const MENUITEM_PROP_LABEL: string
/**
 * #DbusmenuMenuitem property that is the entries that represent a shortcut
 * to activate the menuitem.  It is an array of arrays of strings.
 * 
 * It is recommended that this is not set directly but instead the
 * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_shortcut()
 */
const MENUITEM_PROP_SHORTCUT: string
/**
 * #DbusmenuMenuitem property that says what state a toggle entry should
 * be shown as the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_STATE_UNCHECKED
 * #DBUSMENU_MENUITEM_TOGGLE_STATE_CHECKED or #DBUSMENU_MENUITEM_TOGGLE_STATUE_UNKNOWN.
 */
const MENUITEM_PROP_TOGGLE_STATE: string
/**
 * #DbusmenuMenuitem property that says what type of toggle entry should
 * be shown in the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_CHECK
 * or #DBUSMENU_MENUITEM_TOGGLE_RADIO.  Type: #G_VARIANT_TYPE_STRING
 */
const MENUITEM_PROP_TOGGLE_TYPE: string
/**
 * #DbusmenuMenuitem property used to represent what type of menuitem
 * this object represents.  Type: #G_VARIANT_TYPE_STRING.
 */
const MENUITEM_PROP_TYPE: string
/**
 * #DbusmenuMenuitem property used to represent whether the menuitem
 * should be shown or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
 */
const MENUITEM_PROP_VISIBLE: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * alternate key.
 */
const MENUITEM_SHORTCUT_ALT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * control key.
 */
const MENUITEM_SHORTCUT_CONTROL: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * shift key.
 */
const MENUITEM_SHORTCUT_SHIFT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * super key.
 */
const MENUITEM_SHORTCUT_SUPER: string
/**
 * String to attach to signal #DbusmenuServer::about-to-show
 */
const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string
/**
 * String to attach to signal #DbusmenuServer::child-added
 */
const MENUITEM_SIGNAL_CHILD_ADDED: string
/**
 * String to attach to signal #DbusmenuServer::child-moved
 */
const MENUITEM_SIGNAL_CHILD_MOVED: string
/**
 * String to attach to signal #DbusmenuServer::child-removed
 */
const MENUITEM_SIGNAL_CHILD_REMOVED: string
/**
 * String to attach to signal #DbusmenuServer::event
 */
const MENUITEM_SIGNAL_EVENT: string
/**
 * String to attach to signal #DbusmenuServer::item-activated
 */
const MENUITEM_SIGNAL_ITEM_ACTIVATED: string
/**
 * String to attach to signal #DbusmenuServer::property-changed
 */
const MENUITEM_SIGNAL_PROPERTY_CHANGED: string
/**
 * String to attach to signal #DbusmenuServer::realized
 */
const MENUITEM_SIGNAL_REALIZED: string
/**
 * String to attach to signal #DbusmenuServer::show-to-user
 */
const MENUITEM_SIGNAL_SHOW_TO_USER: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
 * check mark item.
 */
const MENUITEM_TOGGLE_CHECK: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
 * radio item.
 */
const MENUITEM_TOGGLE_RADIO: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is filled.
 */
const MENUITEM_TOGGLE_STATE_CHECKED: number
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is empty.
 */
const MENUITEM_TOGGLE_STATE_UNCHECKED: number
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is undecided.
 */
const MENUITEM_TOGGLE_STATE_UNKNOWN: number
/**
 * String to access property #DbusmenuServer:dbus-object
 */
const SERVER_PROP_DBUS_OBJECT: string
/**
 * String to access property #DbusmenuServer:root-node
 */
const SERVER_PROP_ROOT_NODE: string
/**
 * String to access property #DbusmenuServer:status
 */
const SERVER_PROP_STATUS: string
/**
 * String to access property #DbusmenuServer:text-direction
 */
const SERVER_PROP_TEXT_DIRECTION: string
/**
 * String to access property #DbusmenuServer:version
 */
const SERVER_PROP_VERSION: string
/**
 * String to attach to signal #DbusmenuServer::item-property-updated
 */
const SERVER_SIGNAL_ID_PROP_UPDATE: string
/**
 * String to attach to signal #DbusmenuServer::item-updated
 */
const SERVER_SIGNAL_ID_UPDATE: string
/**
 * String to attach to signal #DbusmenuServer::item-activation-requested
 */
const SERVER_SIGNAL_ITEM_ACTIVATION: string
/**
 * String to attach to signal #DbusmenuServer::layout-updated
 */
const SERVER_SIGNAL_LAYOUT_UPDATED: string
/**
 * The type handler is called when a dbusmenu item is created
 * 	with a matching type as setup in #dbusmenu_client_add_type_handler
 * 
 * 	Return value: #TRUE if the type has been handled.  #FALSE if this
 * 		function was somehow unable to handle it.
 * @callback 
 * @param newitem The #DbusmenuMenuitem that was created
 * @param parent The parent of `newitem` or #NULL if none
 * @param client A pointer to the #DbusmenuClient
 */
interface ClientTypeHandler {
    (newitem: Menuitem, parent: Menuitem, client: Client): boolean
}
/**
 * Callback prototype for a callback that is called when the
 * menu should be shown.
 * @callback 
 * @param mi Menu item that should be shown
 */
interface menuitem_about_to_show_cb {
    (mi: Menuitem): void
}
/**
 * This is the function that is called to represent this menu item
 * as a variant.  Should call its own children.
 * @callback 
 * @param mi Menu item that should be built from
 * @param properties A list of properties that should be the only ones in the resulting variant structure
 */
interface menuitem_buildvariant_slot_t {
    (mi: Menuitem, properties: string | null): GLib.Variant
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Dbusmenu-0.4.Dbusmenu.Client

    dbus_name?: string | null
    dbus_object?: string | null
    group_events?: boolean | null
}

/**
 * Signal callback interface for `event-result`
 */
interface Client_EventResultSignalCallback {
    ($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3: object | null): void
}

/**
 * Signal callback interface for `icon-theme-dirs-changed`
 */
interface Client_IconThemeDirsChangedSignalCallback {
    ($obj: Client, arg1: object | null): void
}

/**
 * Signal callback interface for `item-activate`
 */
interface Client_ItemActivateSignalCallback {
    ($obj: Client, arg1: GObject.Object, arg2: number): void
}

/**
 * Signal callback interface for `layout-updated`
 */
interface Client_LayoutUpdatedSignalCallback {
    ($obj: Client): void
}

/**
 * Signal callback interface for `new-menuitem`
 */
interface Client_NewMenuitemSignalCallback {
    ($obj: Client, arg1: GObject.Object): void
}

/**
 * Signal callback interface for `root-changed`
 */
interface Client_RootChangedSignalCallback {
    ($obj: Client, arg1: GObject.Object): void
}

interface Client {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Client

    readonly dbus_name: string
    readonly dbus_object: string
    group_events: boolean

    // Owm methods of Dbusmenu-0.4.Dbusmenu.Client

    /**
     * This function connects into the type handling of the #DbusmenuClient.
     * Every new menuitem that comes in immediately gets asked for its
     * properties.  When we get those properties we check the 'type'
     * property and look to see if it matches a handler that is known
     * by the client.  If so, the `newfunc` function is executed on that
     * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
     * signal is sent.
     * 
     * In the future the known types will be sent to the server so that it
     * can make choices about the menu item types availble.
     * @param type A text string that will be matched with the 'type'     property on incoming menu items
     * @param newfunc The function that will be executed with those new     items when they come in.
     */
    add_type_handler(type: string, newfunc: ClientTypeHandler): boolean
    /**
     * This function connects into the type handling of the #DbusmenuClient.
     * Every new menuitem that comes in immediately gets asked for its
     * properties.  When we get those properties we check the 'type'
     * property and look to see if it matches a handler that is known
     * by the client.  If so, the `newfunc` function is executed on that
     * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
     * signal is sent.
     * 
     * In the future the known types will be sent to the server so that it
     * can make choices about the menu item types availble.
     * @param type A text string that will be matched with the 'type'     property on incoming menu items
     * @param newfunc The function that will be executed with those new     items when they come in.
     */
    add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean
    /**
     * Gets the stored and exported icon paths from the client.
     */
    get_icon_paths(): string[]
    /**
     * Grabs the root node for the specified client `client`.  This
     * function may block.  It will block if there is currently a
     * call to update the layout, it will block on that layout
     * updated and then return the newly updated layout.  Chances
     * are that this update is in the queue for the mainloop as
     * it would have been requested some time ago, but in theory
     * it could block longer.
     */
    get_root(): Menuitem
    /**
     * Gets the recommended current status that the server
     * 	is exporting for the menus.  In situtations where the
     * 	value is #DBUSMENU_STATUS_NOTICE it is recommended that
     * 	the client show the menus to the user an a more noticible
     * 	way.
     * 
     * 	Return value: Status being exported.
     */
    get_status(): Status
    /**
     * Gets the text direction that the server is exporting.  If
     * 	the server is not exporting a direction then the value
     * 	#DBUSMENU_TEXT_DIRECTION_NONE will be returned.
     * 
     * 	Return value: Text direction being exported.
     */
    get_text_direction(): TextDirection

    // Own signals of Dbusmenu-0.4.Dbusmenu.Client

    connect(sigName: "event-result", callback: Client_EventResultSignalCallback): number
    connect_after(sigName: "event-result", callback: Client_EventResultSignalCallback): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3: object | null, ...args: any[]): void
    connect(sigName: "icon-theme-dirs-changed", callback: Client_IconThemeDirsChangedSignalCallback): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: Client_IconThemeDirsChangedSignalCallback): number
    emit(sigName: "icon-theme-dirs-changed", arg1: object | null, ...args: any[]): void
    connect(sigName: "item-activate", callback: Client_ItemActivateSignalCallback): number
    connect_after(sigName: "item-activate", callback: Client_ItemActivateSignalCallback): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number, ...args: any[]): void
    connect(sigName: "layout-updated", callback: Client_LayoutUpdatedSignalCallback): number
    connect_after(sigName: "layout-updated", callback: Client_LayoutUpdatedSignalCallback): number
    emit(sigName: "layout-updated", ...args: any[]): void
    connect(sigName: "new-menuitem", callback: Client_NewMenuitemSignalCallback): number
    connect_after(sigName: "new-menuitem", callback: Client_NewMenuitemSignalCallback): number
    emit(sigName: "new-menuitem", arg1: GObject.Object, ...args: any[]): void
    connect(sigName: "root-changed", callback: Client_RootChangedSignalCallback): number
    connect_after(sigName: "root-changed", callback: Client_RootChangedSignalCallback): number
    emit(sigName: "root-changed", arg1: GObject.Object, ...args: any[]): void

    // Class property signals of Dbusmenu-0.4.Dbusmenu.Client

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
 * The client for a #DbusmenuServer creating a shared
 * 	object set of #DbusmenuMenuitem objects.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Dbusmenu-0.4.Dbusmenu.Client

    constructor(config?: Client_ConstructProps) 
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
    constructor(name: string, object: string) 
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
    static new(name: string, object: string): Client
    _init(config?: Client_ConstructProps): void
}

interface Menuitem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Dbusmenu-0.4.Dbusmenu.Menuitem

    id?: number | null
}

/**
 * Signal callback interface for `about-to-show`
 */
interface Menuitem_AboutToShowSignalCallback {
    ($obj: Menuitem): boolean
}

/**
 * Signal callback interface for `child-added`
 */
interface Menuitem_ChildAddedSignalCallback {
    ($obj: Menuitem, arg1: GObject.Object, arg2: number): void
}

/**
 * Signal callback interface for `child-moved`
 */
interface Menuitem_ChildMovedSignalCallback {
    ($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface Menuitem_ChildRemovedSignalCallback {
    ($obj: Menuitem, arg1: GObject.Object): void
}

/**
 * Signal callback interface for `event`
 */
interface Menuitem_EventSignalCallback {
    ($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number): boolean
}

/**
 * Signal callback interface for `item-activated`
 */
interface Menuitem_ItemActivatedSignalCallback {
    ($obj: Menuitem, arg1: number): void
}

/**
 * Signal callback interface for `property-changed`
 */
interface Menuitem_PropertyChangedSignalCallback {
    ($obj: Menuitem, arg1: string, arg2: GLib.Variant): void
}

/**
 * Signal callback interface for `realized`
 */
interface Menuitem_RealizedSignalCallback {
    ($obj: Menuitem): void
}

/**
 * Signal callback interface for `show-to-user`
 */
interface Menuitem_ShowToUserSignalCallback {
    ($obj: Menuitem, arg1: number): void
}

interface Menuitem {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Menuitem

    readonly id: number

    // Own fields of Dbusmenu-0.4.Dbusmenu.Menuitem

    /**
     * Parent object
     * @field 
     */
    parent: GObject.Object
    /**
     * Private data
     * @field 
     */
    priv: MenuitemPrivate

    // Owm methods of Dbusmenu-0.4.Dbusmenu.Menuitem

    /**
     * Puts `child` in the list of children for `mi` at the location
     * specified in `position`.  If there is not enough entires available
     * then `child` will be placed at the end of the list.
     * @param child The #DbusmenuMenuitem to make a child of `mi`.
     * @param position Where in `mi` object's list of chidren `child` should be placed.
     */
    child_add_position(child: Menuitem, position: number): boolean
    /**
     * This function adds `child` to the list of children on `mi` at
     * the end of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_append(child: Menuitem): boolean
    /**
     * This function removes `child` from the children list of `mi`.  It does
     * not call #g_object_unref on `child`.
     * @param child The child #DbusmenuMenuitem that you want to no longer     be a child of `mi`.
     */
    child_delete(child: Menuitem): boolean
    /**
     * Search the children of `mi` to find one with the ID of `id`.
     * If it doesn't exist then we return #NULL.
     * @param id The ID of the child that we're looking for.
     */
    child_find(id: number): Menuitem
    /**
     * This function adds `child` to the list of children on `mi` at
     * the beginning of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_prepend(child: Menuitem): boolean
    /**
     * This function moves a child on the list of children.  It is
     * for a child that is already in the list, but simply needs a
     * new location.
     * @param child The #DbusmenuMenuitem that is a child needing to be moved
     * @param position The position in the list to place it in
     */
    child_reorder(child: Menuitem, position: number): boolean
    /**
     * This function searchs the whole tree of children that
     * are attached to `mi`.  This could be quite a few nodes, all
     * the way down the tree.  It is a depth first search.
     * @param id ID of the #DbusmenuMenuitem to search for
     */
    find_id(id: number): Menuitem
    /**
     * This calls the function `func` on this menu item and all
     * of the children of this item.  And their children.  And
     * their children.  And... you get the point.  It will get
     * called on the whole tree.
     * @param func Function to call on every node in the tree
     * @param data User data to pass to the function
     */
    foreach(func: object | null, data: object | null): void
    /**
     * Returns simply the list of children that this menu item
     * has.  The list is valid until another child related function
     * is called, where it might be changed.
     */
    get_children(): Menuitem[]
    /**
     * Gets the unique ID for `mi`.
     */
    get_id(): number
    /**
     * This function looks up the parent of `mi`
     */
    get_parent(): Menuitem
    /**
     * This function returns the position of the menu item `mi`
     * in the children of `parent`.  It will return zero if the
     * menu item can't be found.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position(parent: Menuitem): number
    /**
     * This function is very similar to #dbusmenu_menuitem_get_position
     * except that it only counts in the children that have been realized.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position_realized(parent: Menuitem): number
    /**
     * This function returns the internal value of whether this is a
     * root node or not.
     */
    get_root(): boolean
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    /**
     * This function takes the properties of a #DbusmenuMenuitem
     * and puts them into a #GHashTable that is referenced by the
     * key of a string and has the value of a string.  The hash
     * table may not have any entries if there aren't any or there
     * is an error in processing.  It is the caller's responsibility
     * to destroy the created #GHashTable.
     */
    properties_copy(): GLib.HashTable
    /**
     * This functiong gets a list of the names of all the properties
     * that are set on this menu item.  This data on the list is owned
     * by the menuitem but the list is not and should be freed using
     * g_list_free() when the calling function is done with it.
     */
    properties_list(): string[]
    /**
     * Checkes to see if a particular property exists on `mi` and
     * returns #TRUE if so.
     * @param property The property to look for.
     */
    property_exist(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get(property: string): string
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns #FALSE if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_bool(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_byte_array(property: string): Uint8Array
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns zero if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_int(property: string): number
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_variant(property: string): GLib.Variant
    /**
     * Removes a property from the menuitem.
     * @param property The property to look for.
     */
    property_remove(property: string): void
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set(property: string, value: string): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_bool(property: string, value: boolean): boolean
    /**
     * Takes a byte array `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The byte array.
     * @param nelements The number of elements in the byte array.
     */
    property_set_byte_array(property: string, value: number, nelements: number): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_int(property: string, value: number): boolean
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_variant(property: string, value: GLib.Variant): boolean
    /**
     * This function is used to send the even that the submenu
     * of this item is about to be shown.  Callers to this event
     * should delay showing the menu until their callback is
     * called if possible.
     * @param cb Callback to call when the call has returned.
     * @param cb_data Data to pass to the callback.
     */
    send_about_to_show(cb: object | null, cb_data: object | null): void
    /**
     * Sets the parent of `mi` to `parent`. If `mi` already
     * has a parent, then this call will fail. The parent will
     * be set automatically when using the usual methods to add a
     * child menuitem, so this function should not normally be
     * called directly
     * @param parent The new parent #DbusmenuMenuitem
     */
    set_parent(parent: Menuitem): boolean
    /**
     * This function sets the internal value of whether this is a
     * root node or not.
     * @param root Whether `mi` is a root node or not
     */
    set_root(root: boolean): void
    /**
     * Signals that this menu item should be shown to the user.  If this is
     * server side the server will then take it and send it over the
     * bus.
     * @param timestamp The time that the user requested it to be shown
     */
    show_to_user(timestamp: number): void
    /**
     * While the name sounds devious that's exactly what this function
     * does.  It takes the list of children from the `mi` and clears the
     * internal list.  The calling function is now in charge of the ref's
     * on the children it has taken.  A lot of responsibility involved
     * in taking children.
     */
    take_children(): Menuitem[]
    /**
     * Unparents the menu item `mi`. If `mi` doesn't have a
     * parent, then this call will fail. The menuitem will
     * be unparented automatically when using the usual methods
     * to delete a child menuitem, so this function should not
     * normally be called directly
     */
    unparent(): boolean

    // Own virtual methods of Dbusmenu-0.4.Dbusmenu.Menuitem

    vfunc_child_added(position: number): void
    vfunc_child_moved(newpos: number, oldpos: number): void
    vfunc_child_removed(): void
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @virtual 
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    vfunc_show_to_user(timestamp: number, cb_data: object | null): void

    // Own signals of Dbusmenu-0.4.Dbusmenu.Menuitem

    connect(sigName: "about-to-show", callback: Menuitem_AboutToShowSignalCallback): number
    connect_after(sigName: "about-to-show", callback: Menuitem_AboutToShowSignalCallback): number
    emit(sigName: "about-to-show", ...args: any[]): void
    connect(sigName: "child-added", callback: Menuitem_ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: Menuitem_ChildAddedSignalCallback): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number, ...args: any[]): void
    connect(sigName: "child-moved", callback: Menuitem_ChildMovedSignalCallback): number
    connect_after(sigName: "child-moved", callback: Menuitem_ChildMovedSignalCallback): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number, ...args: any[]): void
    connect(sigName: "child-removed", callback: Menuitem_ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: Menuitem_ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", arg1: GObject.Object, ...args: any[]): void
    connect(sigName: "event", callback: Menuitem_EventSignalCallback): number
    connect_after(sigName: "event", callback: Menuitem_EventSignalCallback): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number, ...args: any[]): void
    connect(sigName: "item-activated", callback: Menuitem_ItemActivatedSignalCallback): number
    connect_after(sigName: "item-activated", callback: Menuitem_ItemActivatedSignalCallback): number
    emit(sigName: "item-activated", arg1: number, ...args: any[]): void
    connect(sigName: "property-changed", callback: Menuitem_PropertyChangedSignalCallback): number
    connect_after(sigName: "property-changed", callback: Menuitem_PropertyChangedSignalCallback): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant, ...args: any[]): void
    connect(sigName: "realized", callback: Menuitem_RealizedSignalCallback): number
    connect_after(sigName: "realized", callback: Menuitem_RealizedSignalCallback): number
    emit(sigName: "realized", ...args: any[]): void
    connect(sigName: "show-to-user", callback: Menuitem_ShowToUserSignalCallback): number
    connect_after(sigName: "show-to-user", callback: Menuitem_ShowToUserSignalCallback): number
    emit(sigName: "show-to-user", arg1: number, ...args: any[]): void

    // Class property signals of Dbusmenu-0.4.Dbusmenu.Menuitem

    connect(sigName: "notify::id", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the #GObject based object that represents a menu
 * item.  It gets created the same on both the client and
 * the server side and libdbusmenu-glib does the work of making
 * this object model appear on both sides of DBus.  Simple
 * really, though through updates and people coming on and off
 * the bus it can lead to lots of fun complex scenarios.
 * @class 
 */
class Menuitem extends GObject.Object {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Menuitem

    static name: string
    static $gtype: GObject.GType<Menuitem>

    // Constructors of Dbusmenu-0.4.Dbusmenu.Menuitem

    constructor(config?: Menuitem_ConstructProps) 
    /**
     * Create a new #DbusmenuMenuitem with all default values.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #DbusmenuMenuitem with all default values.
     * @constructor 
     */
    static new(): Menuitem
    /**
     * This creates a blank #DbusmenuMenuitem with a specific ID.
     * @constructor 
     * @param id ID to use for this menuitem
     */
    static new_with_id(id: number): Menuitem
    _init(config?: Menuitem_ConstructProps): void
}

interface MenuitemProxy_ConstructProps extends Menuitem_ConstructProps {

    // Own constructor properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    menu_item?: Menuitem | null
}

interface MenuitemProxy {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    readonly menu_item: Menuitem

    // Owm methods of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    /**
     * Accesses the private variable of which #DbusmenuMenuitem
     * we are doing the proxying for.
     */
    get_wrapped(): Menuitem

    // Class property signals of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    connect(sigName: "notify::menu-item", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-item", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-item", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Public instance data for a #DbusmenuMenuitemProxy.
 * @class 
 */
class MenuitemProxy extends Menuitem {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    static name: string
    static $gtype: GObject.GType<MenuitemProxy>

    // Constructors of Dbusmenu-0.4.Dbusmenu.MenuitemProxy

    constructor(config?: MenuitemProxy_ConstructProps) 
    /**
     * Builds a new #DbusmenuMenuitemProxy object that proxies
     * all of the values for `mi`.
     * @constructor 
     * @param mi The #DbusmenuMenuitem to proxy
     */
    constructor(mi: Menuitem) 
    /**
     * Builds a new #DbusmenuMenuitemProxy object that proxies
     * all of the values for `mi`.
     * @constructor 
     * @param mi The #DbusmenuMenuitem to proxy
     */
    static new(mi: Menuitem): MenuitemProxy

    // Overloads of new

    /**
     * Create a new #DbusmenuMenuitem with all default values.
     * @constructor 
     */
    static new(): Menuitem
    _init(config?: MenuitemProxy_ConstructProps): void
}

interface Server_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Dbusmenu-0.4.Dbusmenu.Server

    dbus_object?: string | null
    root_node?: Menuitem | null
}

/**
 * Signal callback interface for `item-activation-requested`
 */
interface Server_ItemActivationRequestedSignalCallback {
    ($obj: Server, arg1: number, arg2: number): void
}

/**
 * Signal callback interface for `item-property-updated`
 */
interface Server_ItemPropertyUpdatedSignalCallback {
    ($obj: Server, object: number, p0: string, p1: GLib.Variant): void
}

/**
 * Signal callback interface for `item-updated`
 */
interface Server_ItemUpdatedSignalCallback {
    ($obj: Server, object: number): void
}

/**
 * Signal callback interface for `layout-updated`
 */
interface Server_LayoutUpdatedSignalCallback {
    ($obj: Server, arg1: number, arg2: number): void
}

interface Server {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Server

    readonly dbus_object: string
    root_node: Menuitem
    readonly version: number

    // Owm methods of Dbusmenu-0.4.Dbusmenu.Server

    /**
     * Gets the stored and exported icon paths from the server.
     */
    get_icon_paths(): string[]
    /**
     * Gets the current statust hat the server is sending out over
     * 	DBus.
     * 
     * 	Return value: The current status the server is sending
     */
    get_status(): Status
    /**
     * Returns the value of the text direction that is being exported
     * 	over DBus for this server.  It should relate to the direction
     * 	of the labels and other text fields that are being exported by
     * 	this server.
     * 
     * 	Return value: Text direction exported for this server.
     */
    get_text_direction(): TextDirection
    /**
     * Sets the icon paths for the server.  This will replace previously
     * 	set icon theme paths.
     * @param icon_paths 
     */
    set_icon_paths(icon_paths: string[]): void
    /**
     * This function contains all of the #GValue wrapping
     * 	required to set the property #DbusmenuServer:root-node
     * 	on the server `self`.
     * @param root The new root #DbusmenuMenuitem tree
     */
    set_root(root: Menuitem): void
    /**
     * Changes the status of the server.
     * @param status Status value to set on the server
     */
    set_status(status: Status): void
    /**
     * Sets the text direction that should be exported over DBus for
     * 	this server.  If the value is set to #DBUSMENU_TEXT_DIRECTION_NONE
     * 	the default detection will be used for setting the value and
     * 	exported over DBus.
     * @param dir Direction of the text
     */
    set_text_direction(dir: TextDirection): void

    // Own signals of Dbusmenu-0.4.Dbusmenu.Server

    connect(sigName: "item-activation-requested", callback: Server_ItemActivationRequestedSignalCallback): number
    connect_after(sigName: "item-activation-requested", callback: Server_ItemActivationRequestedSignalCallback): number
    emit(sigName: "item-activation-requested", arg1: number, arg2: number, ...args: any[]): void
    connect(sigName: "item-property-updated", callback: Server_ItemPropertyUpdatedSignalCallback): number
    connect_after(sigName: "item-property-updated", callback: Server_ItemPropertyUpdatedSignalCallback): number
    emit(sigName: "item-property-updated", object: number, p0: string, p1: GLib.Variant, ...args: any[]): void
    connect(sigName: "item-updated", callback: Server_ItemUpdatedSignalCallback): number
    connect_after(sigName: "item-updated", callback: Server_ItemUpdatedSignalCallback): number
    emit(sigName: "item-updated", object: number, ...args: any[]): void
    connect(sigName: "layout-updated", callback: Server_LayoutUpdatedSignalCallback): number
    connect_after(sigName: "layout-updated", callback: Server_LayoutUpdatedSignalCallback): number
    emit(sigName: "layout-updated", arg1: number, arg2: number, ...args: any[]): void

    // Class property signals of Dbusmenu-0.4.Dbusmenu.Server

    connect(sigName: "notify::dbus-object", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-object", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-object", ...args: any[]): void
    connect(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-node", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A server which represents a sharing of a set of
 * 	#DbusmenuMenuitems across DBus to a #DbusmenuClient.
 * @class 
 */
class Server extends GObject.Object {

    // Own properties of Dbusmenu-0.4.Dbusmenu.Server

    static name: string
    static $gtype: GObject.GType<Server>

    // Constructors of Dbusmenu-0.4.Dbusmenu.Server

    constructor(config?: Server_ConstructProps) 
    /**
     * Creates a new #DbusmenuServer object with a specific object
     * 	path on DBus.  If `object` is set to NULL the default object
     * 	name of "/com/canonical/dbusmenu" will be used.
     * 
     * 	Return value: A brand new #DbusmenuServer
     * @constructor 
     * @param object The object name to show for this menu structure 		on DBus.  May be NULL.
     */
    constructor(object: string) 
    /**
     * Creates a new #DbusmenuServer object with a specific object
     * 	path on DBus.  If `object` is set to NULL the default object
     * 	name of "/com/canonical/dbusmenu" will be used.
     * 
     * 	Return value: A brand new #DbusmenuServer
     * @constructor 
     * @param object The object name to show for this menu structure 		on DBus.  May be NULL.
     */
    static new(object: string): Server
    _init(config?: Server_ConstructProps): void
}

interface ClientClass {

    // Own fields of Dbusmenu-0.4.Dbusmenu.ClientClass

    /**
     * #GObjectClass
     * @field 
     */
    parent_class: GObject.ObjectClass
    layout_updated: () => void
    root_changed: (newroot: Menuitem) => void
    new_menuitem: (newitem: Menuitem) => void
    item_activate: (item: Menuitem, timestamp: number) => void
    event_result: (item: Menuitem, event: string, data: GLib.Variant, timestamp: number, error: GLib.Error) => void
    icon_theme_dirs: (item: Menuitem, theme_dirs: object, error: GLib.Error) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
}

/**
 * A simple class that takes all of the information from a
 * 	#DbusmenuServer over DBus and makes the same set of
 * 	#DbusmenuMenuitem objects appear on the other side.
 * @record 
 */
abstract class ClientClass {

    // Own properties of Dbusmenu-0.4.Dbusmenu.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of Dbusmenu-0.4.Dbusmenu.ClientPrivate

    static name: string
}

interface MenuitemClass {

    // Own fields of Dbusmenu-0.4.Dbusmenu.MenuitemClass

    /**
     * Functions and signals from our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
    property_changed: (property: string, value: GLib.Variant) => void
    item_activated: (timestamp: number) => void
    child_added: (child: Menuitem, position: number) => void
    child_removed: (child: Menuitem) => void
    child_moved: (child: Menuitem, newpos: number, oldpos: number) => void
    realized: () => void
    handle_event: (mi: Menuitem, name: string, variant: GLib.Variant, timestamp: number) => void
    show_to_user: (mi: Menuitem, timestamp: number, cb_data: object | null) => void
    about_to_show: () => boolean
    event: (name: string, value: GLib.Variant, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
}

/**
 * Functions and signals that every menuitem should know something
 * about.
 * @record 
 */
abstract class MenuitemClass {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemClass

    static name: string
}

interface MenuitemPrivate {
}

/**
 * These are the little secrets that we don't want getting
 * 	out of data that we have.  They can still be gotten using
 * 	accessor functions, but are protected appropriately.
 * @record 
 */
class MenuitemPrivate {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemPrivate

    static name: string
}

interface MenuitemProxyClass {

    // Own fields of Dbusmenu-0.4.Dbusmenu.MenuitemProxyClass

    /**
     * The Class of #DbusmeneMenuitem
     * @field 
     */
    parent_class: MenuitemClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
}

/**
 * Functions and signal slots for #DbusmenuMenuitemProxy.
 * @record 
 */
abstract class MenuitemProxyClass {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxyClass

    static name: string
}

interface MenuitemProxyPrivate {
}

class MenuitemProxyPrivate {

    // Own properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxyPrivate

    static name: string
}

interface ServerClass {

    // Own fields of Dbusmenu-0.4.Dbusmenu.ServerClass

    /**
     * #GObjectClass
     * @field 
     */
    parent_class: GObject.ObjectClass
    id_prop_update: (id: number, property: string, value: string) => void
    id_update: (id: number) => void
    layout_updated: (revision: number) => void
    item_activation: (id: number, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
}

/**
 * The class implementing the virtual functions for #DbusmenuServer.
 * @record 
 */
abstract class ServerClass {

    // Own properties of Dbusmenu-0.4.Dbusmenu.ServerClass

    static name: string
}

interface ServerPrivate {
}

class ServerPrivate {

    // Own properties of Dbusmenu-0.4.Dbusmenu.ServerPrivate

    static name: string
}

}
export default Dbusmenu;