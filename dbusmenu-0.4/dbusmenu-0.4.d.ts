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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Dbusmenu {
    /**
     * Dbusmenu-0.4
     */

    /**
     * Tracks how the menus should be presented to the user.
     * @gir-type Enum
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
     * @gir-type Enum
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
     * String to access property {@link Dbusmenu.Client.dbus_name}
     */
    const CLIENT_PROP_DBUS_NAME: string;
    /**
     * String to access property {@link Dbusmenu.Client.dbus_object}
     */
    const CLIENT_PROP_DBUS_OBJECT: string;
    /**
     * String to access property {@link Dbusmenu.Client.group_events}
     */
    const CLIENT_PROP_GROUP_EVENTS: string;
    /**
     * String to access property {@link Dbusmenu.Client.status}
     */
    const CLIENT_PROP_STATUS: string;
    /**
     * String to access property {@link Dbusmenu.Client.text_direction}
     */
    const CLIENT_PROP_TEXT_DIRECTION: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.event_result | Dbusmenu.Client::event-result}
     */
    const CLIENT_SIGNAL_EVENT_RESULT: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.icon_theme_dirs_changed | Dbusmenu.Client::icon-theme-dirs-changed}
     */
    const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.item_activate | Dbusmenu.Client::item-activate}
     */
    const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.layout_updated | Dbusmenu.Client::layout-updated}
     */
    const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.new_menuitem | Dbusmenu.Client::new-menuitem}
     */
    const CLIENT_SIGNAL_NEW_MENUITEM: string;
    /**
     * String to attach to signal {@link Dbusmenu.Client.SignalSignatures.root_changed | Dbusmenu.Client::root-changed}
     */
    const CLIENT_SIGNAL_ROOT_CHANGED: string;
    /**
     * Used to set the 'type' property on a menu item to create
     * a standard menu item.
     */
    const CLIENT_TYPES_DEFAULT: string;
    /**
     * Used to set the 'type' property on a menu item to create
     * an image menu item.  Deprecated as standard menu items now
     * support images as well.
     */
    const CLIENT_TYPES_IMAGE: string;
    /**
     * Used to set the 'type' property on a menu item to create
     * a separator menu item.
     */
    const CLIENT_TYPES_SEPARATOR: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_CHILD_DISPLAY to have the
     * subitems displayed as a submenu.
     */
    const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
     * item displayed in a way that conveys it's giving an alert
     * to the user.
     */
    const MENUITEM_DISPOSITION_ALERT: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
     * item displayed in a way that conveys it's giving additional
     * information to the user.
     */
    const MENUITEM_DISPOSITION_INFORMATIVE: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
     * item displayed in the normal manner.  Default value.
     */
    const MENUITEM_DISPOSITION_NORMAL: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
     * item displayed in a way that conveys it's giving a warning
     * to the user.
     */
    const MENUITEM_DISPOSITION_WARNING: string;
    /**
     * String for the event identifier when a menu item is clicked
     * on by the user.
     */
    const MENUITEM_EVENT_ACTIVATED: string;
    /**
     * String for the event identifier when a menu is closed and
     * displayed to the user.  Only valid for items that contain
     * submenus.
     */
    const MENUITEM_EVENT_CLOSED: string;
    /**
     * String for the event identifier when a menu is opened and
     * displayed to the user.  Only valid for items that contain
     * submenus.
     */
    const MENUITEM_EVENT_OPENED: string;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
     * toggle item is undecided.
     */
    const MENUITEM_ICON_NAME_BLANK: string;
    /**
     * {@link Dbusmenu.Menuitem} property used to provide a textual description of any
     * information that the icon may convey. The contents of this property are
     * passed through to assistive technologies such as the Orca screen reader.
     * The contents of this property will not be visible in the menu item. If
     * this property is set, Orca will use this property instead of the label
     * property.
     */
    const MENUITEM_PROP_ACCESSIBLE_DESC: string;
    /**
     * {@link Dbusmenu.Menuitem} property that tells how the children of this menuitem
     * should be displayed.  Most likely this will be unset or of the value
     * #DBUSMENU_MENUITEM_CHILD_DISPLAY_SUBMENU.  Type: #G_VARIANT_TYPE_STRING
     */
    const MENUITEM_PROP_CHILD_DISPLAY: string;
    /**
     * {@link Dbusmenu.Menuitem} property to tell what type of information that the
     * menu item is displaying to the user.  Type: #G_VARIANT_TYPE_STRING
     */
    const MENUITEM_PROP_DISPOSITION: string;
    /**
     * {@link Dbusmenu.Menuitem} property used to represent whether the menuitem
     * is clickable or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
     */
    const MENUITEM_PROP_ENABLED: string;
    /**
     * {@link Dbusmenu.Menuitem} property that is the raw data of a custom icon
     * used in the application.  Type: #G_VARIANT_TYPE_VARIANT
     *
     * It is recommended that this is not set directly but instead the
     * libdbusmenu-gtk library is used with the function `dbusmenu_menuitem_property_set_image()`
     */
    const MENUITEM_PROP_ICON_DATA: string;
    /**
     * {@link Dbusmenu.Menuitem} property that is the name of the icon under the
     * Freedesktop.org icon naming spec.  Type: #G_VARIANT_TYPE_STRING
     */
    const MENUITEM_PROP_ICON_NAME: string;
    /**
     * {@link Dbusmenu.Menuitem} property used for the text on the menu item.
     */
    const MENUITEM_PROP_LABEL: string;
    /**
     * {@link Dbusmenu.Menuitem} property that is the entries that represent a shortcut
     * to activate the menuitem.  It is an array of arrays of strings.
     *
     * It is recommended that this is not set directly but instead the
     * libdbusmenu-gtk library is used with the function `dbusmenu_menuitem_property_set_shortcut()`
     */
    const MENUITEM_PROP_SHORTCUT: string;
    /**
     * {@link Dbusmenu.Menuitem} property that says what state a toggle entry should
     * be shown as the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_STATE_UNCHECKED
     * #DBUSMENU_MENUITEM_TOGGLE_STATE_CHECKED or #DBUSMENU_MENUITEM_TOGGLE_STATUE_UNKNOWN.
     */
    const MENUITEM_PROP_TOGGLE_STATE: string;
    /**
     * {@link Dbusmenu.Menuitem} property that says what type of toggle entry should
     * be shown in the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_CHECK
     * or #DBUSMENU_MENUITEM_TOGGLE_RADIO.  Type: #G_VARIANT_TYPE_STRING
     */
    const MENUITEM_PROP_TOGGLE_TYPE: string;
    /**
     * {@link Dbusmenu.Menuitem} property used to represent what type of menuitem
     * this object represents.  Type: #G_VARIANT_TYPE_STRING.
     */
    const MENUITEM_PROP_TYPE: string;
    /**
     * {@link Dbusmenu.Menuitem} property used to represent whether the menuitem
     * should be shown or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
     */
    const MENUITEM_PROP_VISIBLE: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
     * alternate key.
     */
    const MENUITEM_SHORTCUT_ALT: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
     * control key.
     */
    const MENUITEM_SHORTCUT_CONTROL: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
     * shift key.
     */
    const MENUITEM_SHORTCUT_SHIFT: string;
    /**
     * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
     * super key.
     */
    const MENUITEM_SHORTCUT_SUPER: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.about_to_show | Dbusmenu.Server::about-to-show}
     */
    const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.child_added | Dbusmenu.Server::child-added}
     */
    const MENUITEM_SIGNAL_CHILD_ADDED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.child_moved | Dbusmenu.Server::child-moved}
     */
    const MENUITEM_SIGNAL_CHILD_MOVED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.child_removed | Dbusmenu.Server::child-removed}
     */
    const MENUITEM_SIGNAL_CHILD_REMOVED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.event | Dbusmenu.Server::event}
     */
    const MENUITEM_SIGNAL_EVENT: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.item_activated | Dbusmenu.Server::item-activated}
     */
    const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.property_changed | Dbusmenu.Server::property-changed}
     */
    const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.realized | Dbusmenu.Server::realized}
     */
    const MENUITEM_SIGNAL_REALIZED: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.show_to_user | Dbusmenu.Server::show-to-user}
     */
    const MENUITEM_SIGNAL_SHOW_TO_USER: string;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
     * check mark item.
     */
    const MENUITEM_TOGGLE_CHECK: string;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
     * radio item.
     */
    const MENUITEM_TOGGLE_RADIO: string;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
     * toggle item is filled.
     */
    const MENUITEM_TOGGLE_STATE_CHECKED: number;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
     * toggle item is empty.
     */
    const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
    /**
     * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
     * toggle item is undecided.
     */
    const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
    /**
     * String to access property {@link Dbusmenu.Server.dbus_object}
     */
    const SERVER_PROP_DBUS_OBJECT: string;
    /**
     * String to access property {@link Dbusmenu.Server.root_node}
     */
    const SERVER_PROP_ROOT_NODE: string;
    /**
     * String to access property {@link Dbusmenu.Server.status}
     */
    const SERVER_PROP_STATUS: string;
    /**
     * String to access property {@link Dbusmenu.Server.text_direction}
     */
    const SERVER_PROP_TEXT_DIRECTION: string;
    /**
     * String to access property {@link Dbusmenu.Server.version}
     */
    const SERVER_PROP_VERSION: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.item_property_updated | Dbusmenu.Server::item-property-updated}
     */
    const SERVER_SIGNAL_ID_PROP_UPDATE: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.item_updated | Dbusmenu.Server::item-updated}
     */
    const SERVER_SIGNAL_ID_UPDATE: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.item_activation_requested | Dbusmenu.Server::item-activation-requested}
     */
    const SERVER_SIGNAL_ITEM_ACTIVATION: string;
    /**
     * String to attach to signal {@link Dbusmenu.Server.SignalSignatures.layout_updated | Dbusmenu.Server::layout-updated}
     */
    const SERVER_SIGNAL_LAYOUT_UPDATED: string;
    /**
     * @gir-type Callback
     */
    interface ClientTypeHandler {
        (newitem: Menuitem, parent: Menuitem, client: Client): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface menuitem_about_to_show_cb {
        (mi: Menuitem): void;
    }
    /**
     * @gir-type Callback
     */
    interface menuitem_buildvariant_slot_t {
        (mi: Menuitem, properties?: string | null): GLib.Variant;
    }
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'event-result': (
                arg0: GObject.Object,
                arg1: string,
                arg2: GLib.Variant,
                arg3: number,
                arg4: any | null,
            ) => void;
            /**
             * Signaled when the theme directories are changed by the server.
             * @signal
             */
            'icon-theme-dirs-changed': (arg0: any | null) => void;
            /**
             * Signaled when the server wants to activate an item in
             * 		order to display the menu.
             * @signal
             */
            'item-activate': (arg0: GObject.Object, arg1: number) => void;
            /**
             * @signal
             */
            'layout-updated': () => void;
            /**
             * Signaled when the client creates a new menuitem.  This
             * 		doesn't mean that it's placed anywhere.  The parent that
             * 		it's applied to will signal {@link Dbusmenu.Menuitem.SignalSignatures.child_added | Dbusmenu.Menuitem::child-added}
             * 		when it gets parented.
             * @signal
             */
            'new-menuitem': (arg0: GObject.Object) => void;
            /**
             * The layout has changed in a way that can not be
             * 		represented by the individual items changing as the
             * 		root of this client has changed.
             * @signal
             */
            'root-changed': (arg0: GObject.Object) => void;
            'notify::dbus-name': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-object': (pspec: GObject.ParamSpec) => void;
            'notify::group-events': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_object: string;
            dbusObject: string;
            group_events: boolean;
            groupEvents: boolean;
        }
    }

    /**
     * The client for a {@link Dbusmenu.Server} creating a shared
     * 	object set of {@link Dbusmenu.Menuitem} objects.
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        get dbus_name(): string;
        get dbusName(): string;
        get dbus_object(): string;
        get dbusObject(): string;
        get group_events(): boolean;
        set group_events(val: boolean);
        get groupEvents(): boolean;
        set groupEvents(val: boolean);

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

        static ['new'](name: string, object: string): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function connects into the type handling of the {@link Dbusmenu.Client}.
         * Every new menuitem that comes in immediately gets asked for its
         * properties.  When we get those properties we check the 'type'
         * property and look to see if it matches a handler that is known
         * by the client.  If so, the `newfunc` function is executed on that
         * {@link Dbusmenu.Menuitem}.  If not, then the DbusmenuClient::new-menuitem
         * signal is sent.
         *
         * In the future the known types will be sent to the server so that it
         * can make choices about the menu item types availble.
         * @param type A text string that will be matched with the 'type'     property on incoming menu items
         * @param newfunc The function that will be executed with those new     items when they come in.
         * @returns If registering the new type was successful.
         */
        add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;
        /**
         * This function connects into the type handling of the {@link Dbusmenu.Client}.
         * Every new menuitem that comes in immediately gets asked for its
         * properties.  When we get those properties we check the 'type'
         * property and look to see if it matches a handler that is known
         * by the client.  If so, the `newfunc` function is executed on that
         * {@link Dbusmenu.Menuitem}.  If not, then the DbusmenuClient::new-menuitem
         * signal is sent.
         *
         * In the future the known types will be sent to the server so that it
         * can make choices about the menu item types availble.
         * @param type A text string that will be matched with the 'type'     property on incoming menu items
         * @param newfunc The function that will be executed with those new     items when they come in.
         * @returns If registering the new type was successful.
         */
        add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean;
        /**
         * Gets the stored and exported icon paths from the client.
         * @returns A NULL-terminated list of icon paths with   memory managed by the client.  Duplicate if you want   to keep them.
         */
        get_icon_paths(): string[];
        /**
         * Grabs the root node for the specified client `client`.  This
         * function may block.  It will block if there is currently a
         * call to update the layout, it will block on that layout
         * updated and then return the newly updated layout.  Chances
         * are that this update is in the queue for the mainloop as
         * it would have been requested some time ago, but in theory
         * it could block longer.
         * @returns A {@link Dbusmenu.Menuitem} representing the root of 	menu on the server.  If there is no server or there is 	an error receiving its layout it'll return `NULL`.
         */
        get_root(): Menuitem;
        /**
         * Gets the recommended current status that the server
         * 	is exporting for the menus.  In situtations where the
         * 	value is #DBUSMENU_STATUS_NOTICE it is recommended that
         * 	the client show the menus to the user an a more noticible
         * 	way.
         *
         * 	Return value: Status being exported.
         */
        get_status(): Status;
        /**
         * Gets the text direction that the server is exporting.  If
         * 	the server is not exporting a direction then the value
         * 	#DBUSMENU_TEXT_DIRECTION_NONE will be returned.
         *
         * 	Return value: Text direction being exported.
         */
        get_text_direction(): TextDirection;
    }

    namespace Menuitem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the submenu for this item
             * 		is about to be shown
             * @signal
             */
            'about-to-show': () => boolean | void;
            /**
             * Signaled when the child menuitem has been added to
             * 		the parent.
             * @signal
             */
            'child-added': (arg0: GObject.Object, arg1: number) => void;
            /**
             * Signaled when the child menuitem has had its location
             * 		in the list change.
             * @signal
             */
            'child-moved': (arg0: GObject.Object, arg1: number, arg2: number) => void;
            /**
             * Signaled when the child menuitem has been requested to
             * 		be removed from the parent.  This signal is called when
             * 		it has been removed from the list but not yet had
             * 		`g_object_unref` called on it.
             * @signal
             */
            'child-removed': (arg0: GObject.Object) => void;
            /**
             * Emitted when an event is passed through.  The event is signalled
             * 		after handle_event is called.
             * @signal
             */
            event: (arg0: string, arg1: GLib.Variant, arg2: number) => boolean | void;
            /**
             * Emitted on the objects on the server side when
             * 		they are signaled on the client side.
             * @signal
             */
            'item-activated': (arg0: number) => void;
            /**
             * Emitted everytime a property on a menuitem is either
             * 		updated or added.
             * @signal
             */
            'property-changed': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * Emitted when the initial request for properties
             * 		is complete on the item.  If there is a type
             * 		handler configured for the "type" parameter
             * 		that will be executed before this is signaled.
             * @signal
             */
            realized: () => void;
            /**
             * Signaled when the application would like the visualization
             * 		of this menu item shown to the user.  This usually requires
             * 		going over the bus to get it done.
             * @signal
             */
            'show-to-user': (arg0: number) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            /**
             * Emitted when an event is passed through.  The event is signalled
             * 		after handle_event is called.
             * @signal
             */
            'event::id': (arg0: string, arg1: GLib.Variant, arg2: number) => boolean | void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
        }
    }

    /**
     * This is the {@link GObject.Object} based object that represents a menu
     * item.  It gets created the same on both the client and
     * the server side and libdbusmenu-glib does the work of making
     * this object model appear on both sides of DBus.  Simple
     * really, though through updates and people coming on and off
     * the bus it can lead to lots of fun complex scenarios.
     * @gir-type Class
     */
    class Menuitem extends GObject.Object {
        static $gtype: GObject.GType<Menuitem>;

        // Properties

        get id(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menuitem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Menuitem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Menuitem;

        static new_with_id(id: number): Menuitem;

        // Signals

        /** @signal */
        connect<K extends keyof Menuitem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menuitem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Menuitem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menuitem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Menuitem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Menuitem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param position
         * @virtual
         */
        vfunc_child_added(position: number): void;
        /**
         * @param newpos
         * @param oldpos
         * @virtual
         */
        vfunc_child_moved(newpos: number, oldpos: number): void;
        /**
         * @virtual
         */
        vfunc_child_removed(): void;
        /**
         * This function is called to create an event.  It is likely
         * to be overrided by subclasses.  The default menu item
         * will respond to the activate signal and do:
         *
         * Emits the {@link Dbusmenu.Menuitem.SignalSignatures.item_activate | Dbusmenu.Menuitem::item-activate} signal on this
         * menu item.  Called by server objects when they get the
         * appropriate DBus signals from the client.
         *
         * If you subclass this function you should really think
         * about calling the parent function unless you have a good
         * reason not to.
         * @param name The name of the signal
         * @param variant A value that could be set for the event
         * @param timestamp The timestamp of when the event happened
         * @virtual
         */
        vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
        /**
         * @param timestamp
         * @param cb_data
         * @virtual
         */
        vfunc_show_to_user(timestamp: number, cb_data?: any | null): void;

        // Methods

        /**
         * Puts `child` in the list of children for `mi` at the location
         * specified in `position`.  If there is not enough entires available
         * then `child` will be placed at the end of the list.
         * @param child The {@link Dbusmenu.Menuitem} to make a child of `mi`.
         * @param position Where in `mi` object's list of chidren `child` should be placed.
         * @returns Whether `child` was added successfully.
         */
        child_add_position(child: Menuitem, position: number): boolean;
        /**
         * This function adds `child` to the list of children on `mi` at
         * the end of that list.
         * @param child The `DbusmenMenuitem` that will be a child
         * @returns Whether the child has been added successfully.
         */
        child_append(child: Menuitem): boolean;
        /**
         * This function removes `child` from the children list of `mi`.  It does
         * not call `g_object_unref` on `child`.
         * @param child The child {@link Dbusmenu.Menuitem} that you want to no longer     be a child of `mi`.
         * @returns If we were able to delete `child`.
         */
        child_delete(child: Menuitem): boolean;
        /**
         * Search the children of `mi` to find one with the ID of `id`.
         * If it doesn't exist then we return `NULL`.
         * @param id The ID of the child that we're looking for.
         * @returns The menu item with the ID `id` or `NULL` if it    can't be found.
         */
        child_find(id: number): Menuitem;
        /**
         * This function adds `child` to the list of children on `mi` at
         * the beginning of that list.
         * @param child The `DbusmenMenuitem` that will be a child
         * @returns Whether the child has been added successfully.
         */
        child_prepend(child: Menuitem): boolean;
        /**
         * This function moves a child on the list of children.  It is
         * for a child that is already in the list, but simply needs a
         * new location.
         * @param child The {@link Dbusmenu.Menuitem} that is a child needing to be moved
         * @param position The position in the list to place it in
         * @returns Whether the move was successful.
         */
        child_reorder(child: Menuitem, position: number): boolean;
        /**
         * This function searchs the whole tree of children that
         * are attached to `mi`.  This could be quite a few nodes, all
         * the way down the tree.  It is a depth first search.
         * @param id ID of the {@link Dbusmenu.Menuitem} to search for
         * @returns The {@link Dbusmenu.Menuitem} with the ID of `id` 	or `NULL` if there isn't such a menu item in the tree 	represented by `mi`.
         */
        find_id(id: number): Menuitem;
        /**
         * This calls the function `func` on this menu item and all
         * of the children of this item.  And their children.  And
         * their children.  And... you get the point.  It will get
         * called on the whole tree.
         * @param func Function to call on every node in the tree
         * @param data User data to pass to the function
         */
        foreach(func?: any | null, data?: any | null): void;
        /**
         * Returns simply the list of children that this menu item
         * has.  The list is valid until another child related function
         * is called, where it might be changed.
         * @returns A {@link GLib.List} of pointers to {@link Dbusmenu.Menuitem} objects.
         */
        get_children(): Menuitem[];
        /**
         * Gets the unique ID for `mi`.
         * @returns The ID of the `mi`.
         */
        get_id(): number;
        /**
         * This function looks up the parent of `mi`
         * @returns The parent of this menu item
         */
        get_parent(): Menuitem;
        /**
         * This function returns the position of the menu item `mi`
         * in the children of `parent`.  It will return zero if the
         * menu item can't be found.
         * @param parent The {@link Dbusmenu.Menuitem} who's children contain `mi`
         * @returns The position of `mi` in the children of `parent`.
         */
        get_position(parent: Menuitem): number;
        /**
         * This function is very similar to `dbusmenu_menuitem_get_position`
         * except that it only counts in the children that have been realized.
         * @param parent The {@link Dbusmenu.Menuitem} who's children contain `mi`
         * @returns The position of `mi` in the realized children of `parent`.
         */
        get_position_realized(parent: Menuitem): number;
        /**
         * This function returns the internal value of whether this is a
         * root node or not.
         * @returns `TRUE` if this is a root node
         */
        get_root(): boolean;
        /**
         * This function is called to create an event.  It is likely
         * to be overrided by subclasses.  The default menu item
         * will respond to the activate signal and do:
         *
         * Emits the {@link Dbusmenu.Menuitem.SignalSignatures.item_activate | Dbusmenu.Menuitem::item-activate} signal on this
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
        handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
        /**
         * This function takes the properties of a {@link Dbusmenu.Menuitem}
         * and puts them into a {@link GLib.HashTable} that is referenced by the
         * key of a string and has the value of a string.  The hash
         * table may not have any entries if there aren't any or there
         * is an error in processing.  It is the caller's responsibility
         * to destroy the created {@link GLib.HashTable}.
         * @returns A brand new {@link GLib.HashTable} that contains all of    theroperties that are on this {@link Dbusmenu.Menuitem} `mi`.
         */
        properties_copy(): GLib.HashTable<any, any>;
        /**
         * This functiong gets a list of the names of all the properties
         * that are set on this menu item.  This data on the list is owned
         * by the menuitem but the list is not and should be freed using
         * `g_list_free()` when the calling function is done with it.
         * @returns A list of strings or NULL if there are none.
         */
        properties_list(): string[];
        /**
         * Checkes to see if a particular property exists on `mi` and
         * returns `TRUE` if so.
         * @param property The property to look for.
         * @returns A boolean checking to see if the property is available
         */
        property_exist(property: string): boolean;
        /**
         * Look up a property on `mi` and return the value of it if
         * it exits.  `NULL` will be returned if the property doesn't
         * exist.
         * @param property The property to grab.
         * @returns A string with the value of the property 	that shouldn't be free'd.  Or `NULL` if the property 	is not set or is not a string.
         */
        property_get(property: string): string;
        /**
         * Look up a property on `mi` and return the value of it if
         * it exits.  Returns `FALSE` if the property doesn't exist.
         * @param property The property to grab.
         * @returns The value of the property or `FALSE`.
         */
        property_get_bool(property: string): boolean;
        /**
         * Look up a property on `mi` and return the value of it if
         * it exits.  `NULL` will be returned if the property doesn't
         * exist.
         * @param property The property to grab.
         * @returns A byte array with the 	value of the property that shouldn't be free'd.  Or `NULL` if the property 	is not set or is not a byte array.
         */
        property_get_byte_array(property: string): Uint8Array;
        /**
         * Look up a property on `mi` and return the value of it if
         * it exits.  Returns zero if the property doesn't exist.
         * @param property The property to grab.
         * @returns The value of the property or zero.
         */
        property_get_int(property: string): number;
        /**
         * Look up a property on `mi` and return the value of it if
         * it exits.  `NULL` will be returned if the property doesn't
         * exist.
         * @param property The property to grab.
         * @returns A GVariant for the property.
         */
        property_get_variant(property: string): GLib.Variant;
        /**
         * Removes a property from the menuitem.
         * @param property The property to look for.
         */
        property_remove(property: string): void;
        /**
         * Takes the pair of `property` and `value` and places them as a
         * property on `mi`.  If a property already exists by that name,
         * then the value is set to the new value.  If not, the property
         * is added.  If the value is changed or the property was previously
         * unset then the signal {@link Dbusmenu.Menuitem.SignalSignatures.prop_changed | Dbusmenu.Menuitem::prop-changed} will be
         * emitted by this function.
         * @param property Name of the property to set.
         * @param value The value of the property.
         * @returns A boolean representing if the property value was set.
         */
        property_set(property: string, value: string): boolean;
        /**
         * Takes a boolean `value` and sets it on `property` as a
         * property on `mi`.  If a property already exists by that name,
         * then the value is set to the new value.  If not, the property
         * is added.  If the value is changed or the property was previously
         * unset then the signal {@link Dbusmenu.Menuitem.SignalSignatures.prop_changed | Dbusmenu.Menuitem::prop-changed} will be
         * emitted by this function.
         * @param property Name of the property to set.
         * @param value The value of the property.
         * @returns A boolean representing if the property value was set.
         */
        property_set_bool(property: string, value: boolean): boolean;
        /**
         * Takes a byte array `value` and sets it on `property` as a
         * property on `mi`.  If a property already exists by that name,
         * then the value is set to the new value.  If not, the property
         * is added.  If the value is changed or the property was previously
         * unset then the signal {@link Dbusmenu.Menuitem.SignalSignatures.prop_changed | Dbusmenu.Menuitem::prop-changed} will be
         * emitted by this function.
         * @param property Name of the property to set.
         * @param value The byte array.
         * @param nelements The number of elements in the byte array.
         * @returns A boolean representing if the property value was set.
         */
        property_set_byte_array(property: string, value: number, nelements: number): boolean;
        /**
         * Takes a boolean `value` and sets it on `property` as a
         * property on `mi`.  If a property already exists by that name,
         * then the value is set to the new value.  If not, the property
         * is added.  If the value is changed or the property was previously
         * unset then the signal {@link Dbusmenu.Menuitem.SignalSignatures.prop_changed | Dbusmenu.Menuitem::prop-changed} will be
         * emitted by this function.
         * @param property Name of the property to set.
         * @param value The value of the property.
         * @returns A boolean representing if the property value was set.
         */
        property_set_int(property: string, value: number): boolean;
        /**
         * Takes the pair of `property` and `value` and places them as a
         * property on `mi`.  If a property already exists by that name,
         * then the value is set to the new value.  If not, the property
         * is added.  If the value is changed or the property was previously
         * unset then the signal {@link Dbusmenu.Menuitem.SignalSignatures.prop_changed | Dbusmenu.Menuitem::prop-changed} will be
         * emitted by this function.
         * @param property Name of the property to set.
         * @param value The value of the property.
         * @returns A boolean representing if the property value was set.
         */
        property_set_variant(property: string, value: GLib.Variant): boolean;
        /**
         * This function is used to send the even that the submenu
         * of this item is about to be shown.  Callers to this event
         * should delay showing the menu until their callback is
         * called if possible.
         * @param cb Callback to call when the call has returned.
         * @param cb_data Data to pass to the callback.
         */
        send_about_to_show(cb?: any | null, cb_data?: any | null): void;
        /**
         * Sets the parent of `mi` to `parent`. If `mi` already
         * has a parent, then this call will fail. The parent will
         * be set automatically when using the usual methods to add a
         * child menuitem, so this function should not normally be
         * called directly
         * @param parent The new parent {@link Dbusmenu.Menuitem}
         * @returns Whether the parent was set successfully
         */
        set_parent(parent: Menuitem): boolean;
        /**
         * This function sets the internal value of whether this is a
         * root node or not.
         * @param root Whether `mi` is a root node or not
         */
        set_root(root: boolean): void;
        /**
         * Signals that this menu item should be shown to the user.  If this is
         * server side the server will then take it and send it over the
         * bus.
         * @param timestamp The time that the user requested it to be shown
         */
        show_to_user(timestamp: number): void;
        /**
         * While the name sounds devious that's exactly what this function
         * does.  It takes the list of children from the `mi` and clears the
         * internal list.  The calling function is now in charge of the ref's
         * on the children it has taken.  A lot of responsibility involved
         * in taking children.
         * @returns A {@link GLib.List} of pointers to {@link Dbusmenu.Menuitem} objects.
         */
        take_children(): Menuitem[];
        /**
         * Unparents the menu item `mi`. If `mi` doesn't have a
         * parent, then this call will fail. The menuitem will
         * be unparented automatically when using the usual methods
         * to delete a child menuitem, so this function should not
         * normally be called directly
         * @returns Whether the menu item was unparented successfully
         */
        unparent(): boolean;
    }

    namespace MenuitemProxy {
        // Signal signatures
        interface SignalSignatures extends Menuitem.SignalSignatures {
            'notify::menu-item': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Menuitem.ConstructorProps {
            menu_item: Menuitem;
            menuItem: Menuitem;
        }
    }

    /**
     * Public instance data for a {@link Dbusmenu.MenuitemProxy}.
     * @gir-type Class
     */
    class MenuitemProxy extends Menuitem {
        static $gtype: GObject.GType<MenuitemProxy>;

        // Properties

        get menu_item(): Menuitem;
        get menuItem(): Menuitem;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuitemProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuitemProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mi: Menuitem): MenuitemProxy;
        // Conflicted with Dbusmenu.Menuitem.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof MenuitemProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuitemProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuitemProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuitemProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuitemProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuitemProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Accesses the private variable of which {@link Dbusmenu.Menuitem}
         * we are doing the proxying for.
         * @returns A {@link Dbusmenu.Menuitem} object or a `NULL` if we 	don't have one or there is an error.
         */
        get_wrapped(): Menuitem;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This is signaled when a menuitem under this server
             * 		sends its activate signal.
             * @signal
             */
            'item-activation-requested': (arg0: number, arg1: number) => void;
            /**
             * @signal
             */
            'item-property-updated': (arg0: number, arg1: string, arg2: GLib.Variant) => void;
            /**
             * @signal
             */
            'item-updated': (arg0: number) => void;
            /**
             * This signal is emitted any time the layout of the
             * 		menuitems under this server is changed.
             * @signal
             */
            'layout-updated': (arg0: number, arg1: number) => void;
            'notify::dbus-object': (pspec: GObject.ParamSpec) => void;
            'notify::root-node': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dbus_object: string;
            dbusObject: string;
            root_node: Menuitem;
            rootNode: Menuitem;
            version: number;
        }
    }

    /**
     * A server which represents a sharing of a set of
     * 	`DbusmenuMenuitems` across DBus to a {@link Dbusmenu.Client}.
     * @gir-type Class
     */
    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        // Properties

        get dbus_object(): string;
        get dbusObject(): string;
        get root_node(): Menuitem;
        set root_node(val: Menuitem);
        get rootNode(): Menuitem;
        set rootNode(val: Menuitem);
        get version(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Server.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](object: string): Server;

        // Signals

        /** @signal */
        connect<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Server.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the stored and exported icon paths from the server.
         * @returns A NULL-terminated list of icon paths with   memory managed by the server.  Duplicate if you want   to keep them.
         */
        get_icon_paths(): string[];
        /**
         * Gets the current statust hat the server is sending out over
         * 	DBus.
         *
         * 	Return value: The current status the server is sending
         */
        get_status(): Status;
        /**
         * Returns the value of the text direction that is being exported
         * 	over DBus for this server.  It should relate to the direction
         * 	of the labels and other text fields that are being exported by
         * 	this server.
         *
         * 	Return value: Text direction exported for this server.
         */
        get_text_direction(): TextDirection;
        /**
         * Sets the icon paths for the server.  This will replace previously
         * 	set icon theme paths.
         * @param icon_paths
         */
        set_icon_paths(icon_paths: string[]): void;
        /**
         * This function contains all of the {@link GObject.Value} wrapping
         * 	required to set the property {@link Dbusmenu.Server.root_node}
         * 	on the server `self`.
         * @param root The new root {@link Dbusmenu.Menuitem} tree
         */
        set_root(root: Menuitem): void;
        /**
         * Changes the status of the server.
         * @param status Status value to set on the server
         */
        set_status(status: Status | null): void;
        /**
         * Sets the text direction that should be exported over DBus for
         * 	this server.  If the value is set to #DBUSMENU_TEXT_DIRECTION_NONE
         * 	the default detection will be used for setting the value and
         * 	exported over DBus.
         * @param dir Direction of the text
         */
        set_text_direction(dir: TextDirection | null): void;
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
    type MenuitemClass = typeof Menuitem;
    /**
     * These are the little secrets that we don't want getting
     * 	out of data that we have.  They can still be gotten using
     * 	accessor functions, but are protected appropriately.
     * @gir-type Struct
     */
    abstract class MenuitemPrivate {
        static $gtype: GObject.GType<MenuitemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MenuitemProxyClass = typeof MenuitemProxy;
    /**
     * @gir-type Struct
     */
    abstract class MenuitemProxyPrivate {
        static $gtype: GObject.GType<MenuitemProxyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;
    /**
     * @gir-type Struct
     */
    abstract class ServerPrivate {
        static $gtype: GObject.GType<ServerPrivate>;
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

export default Dbusmenu;

// END
