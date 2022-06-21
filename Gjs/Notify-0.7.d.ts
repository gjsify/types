// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Notify-0.7
 */

import type * as Gjs from './Gjs';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Notify {

/**
 * The urgency level of the notification.
 */
enum Urgency {
    /**
     * Low urgency. Used for unimportant notifications.
     */
    LOW,
    /**
     * Normal urgency. Used for most standard notifications.
     */
    NORMAL,
    /**
     * Critical urgency. Used for very important notifications.
     */
    CRITICAL,
}
/**
 * The default expiration time on a notification.
 */
const EXPIRES_DEFAULT: number
/**
 * The notification never expires. It stays open until closed by the calling API
 * or the user.
 */
const EXPIRES_NEVER: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
/**
 * Gets the application name registered.
 */
function get_app_name(): string
/**
 * Synchronously queries the server for its capabilities and returns them in a #GList.
 */
function get_server_caps(): string[]
/**
 * Synchronously queries the server for its information, specifically, the name, vendor,
 * server version, and the version of the notifications specification that it
 * is compliant with.
 */
function get_server_info(): [ /* returnType */ boolean, /* ret_name */ string, /* ret_vendor */ string, /* ret_version */ string, /* ret_spec_version */ string ]
/**
 * Initialized libnotify. This must be called before any other functions.
 * @param app_name The name of the application initializing libnotify.
 */
function init(app_name: string): boolean
/**
 * Gets whether or not libnotify is initialized.
 */
function is_initted(): boolean
/**
 * Sets the application name.
 * @param app_name The name of the application
 */
function set_app_name(app_name: string): void
/**
 * Uninitialized libnotify.
 * 
 * This should be called when the program no longer needs libnotify for
 * the rest of its lifecycle, typically just before exitting.
 */
function uninit(): void
/**
 * An action callback function.
 * @callback 
 * @param notification 
 * @param action 
 */
interface ActionCallback {
    (notification: Notification, action: string): void
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Notify-0.7.Notify.Notification

    app_name?: string | null
    body?: string | null
    icon_name?: string | null
    id?: number | null
    summary?: string | null
}

/**
 * Signal callback interface for `closed`
 */
interface Notification_ClosedSignalCallback {
    ($obj: Notification): void
}

interface Notification {

    // Own properties of Notify-0.7.Notify.Notification

    app_name: string
    body: string
    readonly closed_reason: number
    icon_name: string
    id: number
    summary: string

    // Owm methods of Notify-0.7.Notify.Notification

    /**
     * Adds an action to a notification. When the action is invoked, the
     * specified callback function will be called, along with the value passed
     * to `user_data`.
     * @param action The action ID.
     * @param label The human-readable action label.
     * @param callback The action's callback function.
     */
    add_action(action: string, label: string, callback: ActionCallback): void
    /**
     * Clears all actions from the notification.
     */
    clear_actions(): void
    /**
     * Clears all hints from the notification.
     */
    clear_hints(): void
    /**
     * Synchronously tells the notification server to hide the notification on the screen.
     */
    close(): boolean
    /**
     * Returns the closed reason code for the notification. This is valid only
     * after the "closed" signal is emitted.
     */
    get_closed_reason(): number
    /**
     * Sets the application name for the notification. If this function is
     * not called or if `app_name` is %NULL, the application name will be
     * set from the value used in notify_init() or overridden with
     * notify_set_app_name().
     * @param app_name the localised application name
     */
    set_app_name(app_name: string): void
    /**
     * Sets the category of this notification. This can be used by the
     * notification server to filter or display the data in a certain way.
     * @param category The category.
     */
    set_category(category: string): void
    /**
     * Sets a hint for `key` with value `value`. If `value` is %NULL,
     * a previously set hint for `key` is unset.
     * 
     * If `value` is floating, it is consumed.
     * @param key the hint key
     * @param value the hint value, or %NULL to unset the hint
     */
    set_hint(key: string, value: GLib.Variant | null): void
    /**
     * Sets a hint with a byte value.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_byte(key: string, value: number): void
    /**
     * Sets a hint with a byte array value. The length of `value` must be passed
     * as `len`.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_byte_array(key: string, value: Uint8Array): void
    /**
     * Sets a hint with a double value.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_double(key: string, value: number): void
    /**
     * Sets a hint with a 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_int32(key: string, value: number): void
    /**
     * Sets a hint with a string value.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_string(key: string, value: string): void
    /**
     * Sets a hint with an unsigned 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    set_hint_uint32(key: string, value: number): void
    /**
     * Sets the icon in the notification from a #GdkPixbuf.
     * @param icon The icon.
     */
    set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void
    /**
     * Sets the image in the notification from a #GdkPixbuf.
     * @param pixbuf The image.
     */
    set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the timeout of the notification. To set the default time, pass
     * %NOTIFY_EXPIRES_DEFAULT as `timeout`. To set the notification to never
     * expire, pass %NOTIFY_EXPIRES_NEVER.
     * 
     * Note that the timeout may be ignored by the server.
     * @param timeout The timeout in milliseconds.
     */
    set_timeout(timeout: number): void
    /**
     * Sets the urgency level of this notification.
     * 
     * See: #NotifyUrgency
     * @param urgency The urgency level.
     */
    set_urgency(urgency: Urgency): void
    /**
     * Tells the notification server to display the notification on the screen.
     */
    show(): boolean
    /**
     * Updates the notification text and icon. This won't send the update out
     * and display it on the screen. For that, you will need to call
     * notify_notification_show().
     * @param summary The new required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    update(summary: string, body: string | null, icon: string | null): boolean

    // Own virtual methods of Notify-0.7.Notify.Notification

    vfunc_closed(): void

    // Own signals of Notify-0.7.Notify.Notification

    connect(sigName: "closed", callback: Notification_ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Notification_ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Notify-0.7.Notify.Notification

    connect(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-name", ...args: any[]): void
    connect(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed-reason", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Notification extends GObject.Object {

    // Own properties of Notify-0.7.Notify.Notification

    static name: string
    static $gtype: GObject.GType<Notification>

    // Constructors of Notify-0.7.Notify.Notification

    constructor(config?: Notification_ConstructProps) 
    /**
     * Creates a new #NotifyNotification. The summary text is required, but
     * all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    constructor(summary: string, body: string | null, icon: string | null) 
    /**
     * Creates a new #NotifyNotification. The summary text is required, but
     * all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    static new(summary: string, body: string | null, icon: string | null): Notification
    _init(config?: Notification_ConstructProps): void
}

interface NotificationClass {

    // Own fields of Notify-0.7.Notify.NotificationClass

    parent_class: GObject.ObjectClass
    closed: (notification: Notification) => void
}

abstract class NotificationClass {

    // Own properties of Notify-0.7.Notify.NotificationClass

    static name: string
}

interface NotificationPrivate {
}

class NotificationPrivate {

    // Own properties of Notify-0.7.Notify.NotificationPrivate

    static name: string
}

}
export default Notify;