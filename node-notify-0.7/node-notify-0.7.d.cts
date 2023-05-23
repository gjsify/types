
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-notify-0.7-import.d.ts';
    
/**
 * Notify-0.7
 */

import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * The reason for which the notification has been closed.
 */
export enum ClosedReason {
    /**
     * Notification not closed.
     */
    UNSET,
    /**
     * Timeout has expired.
     */
    EXPIRED,
    /**
     * It has been dismissed by the user.
     */
    DISMISSED,
    /**
     * It has been closed by a call to
     *   [method`NotifyNotification`.close].
     */
    API_REQUEST,
    /**
     * Closed by undefined/reserved reasons.
     */
    UNDEFIEND,
}
/**
 * The urgency level of the notification.
 */
export enum Urgency {
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
export const EXPIRES_DEFAULT: number
/**
 * The notification never expires.
 * 
 * It stays open until closed by the calling API or the user.
 */
export const EXPIRES_NEVER: number
/**
 * Adwaita major version component (e.g. 1 if the version is 1.2.3).
 */
export const VERSION_MAJOR: number
/**
 * Adwaita micro version component (e.g. 3 if the version is 1.2.3).
 */
export const VERSION_MICRO: number
/**
 * Adwaita minor version component (e.g. 2 if the version is 1.2.3).
 */
export const VERSION_MINOR: number
/**
 * Gets the application name registered.
 * @returns The registered application name, passed to [func@init].
 */
export function getAppName(): string | null
/**
 * Queries the server capabilities.
 * 
 * Synchronously queries the server for its capabilities and returns them in a
 * list.
 * @returns a list of server capability strings.
 */
export function getServerCaps(): string[]
/**
 * Queries the server for information.
 * 
 * Synchronously queries the server for its information, specifically, the name,
 * vendor, server version, and the version of the notifications specification
 * that it is compliant with.
 * @returns %TRUE if successful, and the variables passed will be set, %FALSE   on error. The returned strings must be freed with g_free
 */
export function getServerInfo(): [ /* returnType */ boolean, /* retName */ string | null, /* retVendor */ string | null, /* retVersion */ string | null, /* retSpecVersion */ string | null ]
/**
 * Initialized libnotify. This must be called before any other functions.
 * 
 * Starting from 0.8, if the provided `app_name` is %NULL, libnotify will
 * try to figure it out from the running application.
 * Before it was not allowed, and was causing libnotify not to be initialized.
 * @param appName The name of the application initializing libnotify.
 * @returns %TRUE if successful, or %FALSE on error.
 */
export function init(appName: string | null): boolean
/**
 * Gets whether or not libnotify is initialized.
 * @returns %TRUE if libnotify is initialized, or %FALSE otherwise.
 */
export function isInitted(): boolean
/**
 * Sets the application name.
 * @param appName The name of the application
 */
export function setAppName(appName: string | null): void
/**
 * Uninitializes libnotify.
 * 
 * This should be called when the program no longer needs libnotify for
 * the rest of its lifecycle, typically just before exitting.
 */
export function uninit(): void
/**
 * An action callback function.
 * @callback 
 * @param notification a #NotifyActionCallback notification
 * @param action The activated action name
 */
export interface ActionCallback {
    (notification: Notification, action: string | null): void
}
export module Notification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Notify-0.7.Notify.Notification

        /**
         * The name of the application for the notification.
         */
        appName?: string | null
        /**
         * The body of the notification.
         */
        body?: string | null
        /**
         * The icon-name of the icon to be displayed on the notification.
         */
        iconName?: string | null
        /**
         * The Id of the notification.
         */
        id?: number | null
        /**
         * The summary of the notification.
         */
        summary?: string | null
    }

}

export interface Notification {

    // Own properties of Notify-0.7.Notify.Notification

    /**
     * The name of the application for the notification.
     */
    appName: string | null
    /**
     * The body of the notification.
     */
    body: string | null
    /**
     * The closed reason of the notification.
     * 
     * See [signal`Notification:`:closed].
     */
    readonly closedReason: number
    /**
     * The icon-name of the icon to be displayed on the notification.
     */
    iconName: string | null
    /**
     * The Id of the notification.
     */
    id: number
    /**
     * The summary of the notification.
     */
    summary: string | null
    __gtype__: number

    // Owm methods of Notify-0.7.Notify.Notification

    /**
     * Adds an action to a notification.
     * 
     * When the action is invoked, the specified callback function will be called,
     * along with the value passed to `user_data`.
     * @param action The action ID.
     * @param label The human-readable action label.
     * @param callback The action's callback function.
     */
    addAction(action: string | null, label: string | null, callback: ActionCallback): void
    /**
     * Clears all actions from the notification.
     */
    clearActions(): void
    /**
     * Clears all hints from the notification.
     */
    clearHints(): void
    /**
     * Synchronously tells the notification server to hide the notification on the screen.
     * @returns %TRUE on success, or %FALSE on error with @error filled in
     */
    close(): boolean
    /**
     * Gets the activation token of the notification.
     * 
     * If an an action is currently being activated, return the activation token.
     * This function is intended to be used in a [callback`ActionCallback]` to get
     * the activation token for the activated action, if the notification daemon
     * supports it.
     * @returns The current activation token, or %NULL if none
     */
    getActivationToken(): string | null
    /**
     * Returns the closed reason code for the notification.
     * 
     * This is valid only after the [signal`Notification:`:closed] signal is emitted.
     * 
     * Since version 0.8.0 the returned value is of type [enum`ClosedReason]`.
     * @returns An integer representing the closed reason code   (Since 0.8.0 it's also a [enum@ClosedReason]).
     */
    getClosedReason(): number
    /**
     * Sets the application name for the notification.
     * 
     * If this function is not called or if `app_name` is %NULL, the application name
     * will be set from the value used in [func`init]` or overridden with
     * [func`set_app_name]`.
     * @param appName the localised application name
     */
    setAppName(appName: string | null): void
    /**
     * Sets the category of this notification.
     * 
     * This can be used by the notification server to filter or display the data in
     * a certain way.
     * @param category The category.
     */
    setCategory(category: string | null): void
    /**
     * Sets a hint for `key` with value `value`.
     * 
     * If `value` is %NULL, a previously set hint for `key` is unset.
     * 
     * If `value` is floating, it is consumed.
     * @param key the hint key
     * @param value the hint value
     */
    setHint(key: string | null, value: GLib.Variant | null): void
    /**
     * Sets a hint with a byte value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintByte(key: string | null, value: number): void
    /**
     * Sets a hint with a byte array value.
     * 
     * The length of `value` must be passed as `len`.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintByteArray(key: string | null, value: Uint8Array): void
    /**
     * Sets a hint with a double value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintDouble(key: string | null, value: number): void
    /**
     * Sets a hint with a 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintInt32(key: string | null, value: number): void
    /**
     * Sets a hint with a string value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintString(key: string | null, value: string | null): void
    /**
     * Sets a hint with an unsigned 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintUint32(key: string | null, value: number): void
    /**
     * Sets the icon in the notification from a #GdkPixbuf.
     * @param icon The icon.
     */
    setIconFromPixbuf(icon: GdkPixbuf.Pixbuf): void
    /**
     * Sets the image in the notification from a [class`GdkPixbuf`.Pixbuf].
     * @param pixbuf The image.
     */
    setImageFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the timeout of the notification.
     * 
     * To set the default time, pass %NOTIFY_EXPIRES_DEFAULT as `timeout`. To set the
     * notification to never expire, pass %NOTIFY_EXPIRES_NEVER.
     * 
     * Note that the timeout may be ignored by the server.
     * @param timeout The timeout in milliseconds.
     */
    setTimeout(timeout: number): void
    /**
     * Sets the urgency level of this notification.
     * @param urgency The urgency level.
     */
    setUrgency(urgency: Urgency): void
    /**
     * Tells the notification server to display the notification on the screen.
     * @returns %TRUE if successful. On error, this will return %FALSE and set   @error.
     */
    show(): boolean
    /**
     * Updates the notification text and icon.
     * 
     * This won't send the update out and display it on the screen. For that, you
     * will need to call [method`Notification`.show].
     * @param summary The new required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     * @returns %TRUE, unless an invalid parameter was passed.
     */
    update(summary: string | null, body: string | null, icon: string | null): boolean

    // Own virtual methods of Notify-0.7.Notify.Notification

    closed(): void

    // Own signals of Notify-0.7.Notify.Notification

    connect(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    on(sigName: "closed", callback: Notification.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Notification.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Notification.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Notify-0.7.Notify.Notification

    connect(sigName: "notify::app-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-name", ...args: any[]): void
    connect(sigName: "notify::body", callback: (...args: any[]) => void): number
    on(sigName: "notify::body", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::closed-reason", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed-reason", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A passive pop-up notification.
 * 
 * #NotifyNotification represents a passive pop-up notification. It can
 * contain summary text, body text, and an icon, as well as hints specifying
 * how the notification should be presented. The notification is rendered
 * by a notification daemon, and may present the notification in any number
 * of ways. As such, there is a clear separation of content and presentation,
 * and this API enforces that.
 * @class 
 */
export class Notification extends GObject.Object {

    // Own properties of Notify-0.7.Notify.Notification

    static name: string

    // Constructors of Notify-0.7.Notify.Notification

    constructor(config?: Notification.ConstructorProperties) 
    /**
     * Creates a new #NotifyNotification.
     * 
     * The summary text is required, but all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     * @returns The new #NotifyNotification.
     */
    constructor(summary: string | null, body: string | null, icon: string | null) 
    /**
     * Creates a new #NotifyNotification.
     * 
     * The summary text is required, but all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     * @returns The new #NotifyNotification.
     */
    static new(summary: string | null, body: string | null, icon: string | null): Notification
    _init(config?: Notification.ConstructorProperties): void
}

export interface NotificationClass {

    // Own fields of Notify-0.7.Notify.NotificationClass

    parentClass: GObject.ObjectClass
    closed: (notification: Notification) => void
}

export abstract class NotificationClass {

    // Own properties of Notify-0.7.Notify.NotificationClass

    static name: string
}

export interface NotificationPrivate {
}

export class NotificationPrivate {

    // Own properties of Notify-0.7.Notify.NotificationPrivate

    static name: string
}

// END