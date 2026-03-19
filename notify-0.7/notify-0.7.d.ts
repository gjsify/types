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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Notify {
    /**
     * Notify-0.7
     */

    export namespace ClosedReason {
        export const $gtype: GObject.GType<ClosedReason>;
    }

    /**
     * @gir-type Enum
     * @since 0.8.0
     */
    enum ClosedReason {
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
         *   {@link NotifyNotification.close}.
         */
        API_REQUEST,
        /**
         * Closed by undefined/reserved reasons.
         */
        UNDEFINED,
        /**
         * Closed by undefined/reserved reasons.
         */
        UNDEFIEND,
    }

    export namespace Urgency {
        export const $gtype: GObject.GType<Urgency>;
    }

    /**
     * The urgency level of the notification.
     * @gir-type Enum
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
    const EXPIRES_DEFAULT: number;
    /**
     * The notification never expires.
     *
     * It stays open until closed by the calling API or the user.
     */
    const EXPIRES_NEVER: number;
    /**
     * When set, a server that has the "action-icons" capability will attempt to
     * interpret any action identifier as a named icon. The localized display name
     * will be used to annotate the icon for accessibility purposes. The icon name
     * should be compliant with the Freedesktop.org Icon Naming Specification.
     *
     * Requires server supporting specification version >= 1.2.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_BOOLEAN} (`b`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_ACTION_ICONS: string;
    /**
     * The type of notification this is.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_CATEGORY: string;
    /**
     * This specifies the name of the desktop filename representing the calling
     * program. This should be the same as the prefix used for the application's
     * .desktop file. An example would be "rhythmbox" from "rhythmbox.desktop". This
     * can be used by the daemon to retrieve the correct icon for the application,
     * for logging purposes, etc.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_DESKTOP_ENTRY: string;
    /**
     * This is a raw data image format which describes the width,
     * height, rowstride, has alpha, bits per sample, channels and image data
     * respectively.
     *
     * Requires server supporting specification version >= 1.2
     *
     * {@link GLib.VariantType}: `(iiibiiay)`
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_IMAGE_DATA: string;
    /**
     * This is a raw data image format which describes the width,
     * height, rowstride, has alpha, bits per sample, channels and image data
     * respectively.
     *
     * Requires server supporting specification version >= 1.1
     *
     * {@link GLib.VariantType}: `(iiibiiay)`
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_IMAGE_DATA_LEGACY: string;
    /**
     * Alternative way to define the notification image.
     *
     * Requires server supporting specification version >= 1.2.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_IMAGE_PATH: string;
    /**
     * Alternative way to define the notification image.
     *
     * Requires server supporting specification version >= 1.1.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_IMAGE_PATH_LEGACY: string;
    /**
     * When set the server will not automatically remove the notification when an
     * action has been invoked. The notification will remain resident in the server
     * until it is explicitly removed by the user or by the sender. This hint is
     * likely only useful when the server has the "persistence" capability.
     *
     * Requires server supporting specification version >= 1.2.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_BOOLEAN} (`b`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_RESIDENT: string;
    /**
     * The path to a sound file to play when the notification pops up.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_SOUND_FILE: string;
    /**
     * A themeable named sound from the freedesktop.org sound naming specification
     * to play when the notification pops up. Similar to icon-name, only for sounds.
     * An example would be "message-new-instant".
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_STRING} (`s`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_SOUND_NAME: string;
    /**
     * Causes the server to suppress playing any sounds, if it has that ability.
     * This is usually set when the client itself is going to play its own sound.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_BOOLEAN} (`b`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_SUPPRESS_SOUND: string;
    /**
     * When set the server will treat the notification as transient and by-pass the
     * server's persistence capability, if it should exist.
     *
     * Requires server supporting specification version >= 1.2.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_BOOLEAN} (`b`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_TRANSIENT: string;
    /**
     * The urgency level.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_BYTE} (`y`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_URGENCY: string;
    /**
     * Specifies the X location on the screen that the notification should point to.
     * The "y" hint must also be specified.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_INT32} (`i`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_X: string;
    /**
     * Specifies the Y location on the screen that the notification should point to.
     * The "x" hint must also be specified.
     *
     * Hint {@link GLib.VariantType}: {@link GLib.VARIANT_TYPE_INT32} (`i`).
     * @since 0.8.8
     */
    const NOTIFICATION_HINT_Y: string;
    /**
     * Notify major version component (e.g. 1 if the version is 1.2.3).
     */
    const VERSION_MAJOR: number;
    /**
     * Notify micro version component (e.g. 3 if the version is 1.2.3).
     */
    const VERSION_MICRO: number;
    /**
     * Notify minor version component (e.g. 2 if the version is 1.2.3).
     */
    const VERSION_MINOR: number;
    /**
     * Gets the application icon registered.
     * @returns The registered application icon, set via {@link set_app_icon}.
     * @since 0.8.4
     */
    function get_app_icon(): string;
    /**
     * Gets the application name registered.
     * @returns The registered application name, passed to {@link init}.
     */
    function get_app_name(): string;
    /**
     * Queries the server capabilities.
     *
     * Synchronously queries the server for its capabilities and returns them in a
     * list.
     * @returns a list of server capability strings.
     */
    function get_server_caps(): string[];
    /**
     * Queries the server for information.
     *
     * Synchronously queries the server for its information, specifically, the name,
     * vendor, server version, and the version of the notifications specification
     * that it is compliant with.
     * @returns `true` if successful, and the variables passed will be set, `false`   on error. The returned strings must be freed with g_free
     */
    function get_server_info(): [boolean, string, string, string, string];
    /**
     * Initialized libnotify. This must be called before any other functions.
     *
     * Starting from 0.8, if the provided `app_name` is `null`, libnotify will
     * try to figure it out from the running application.
     * Before it was not allowed, and was causing libnotify not to be initialized.
     * @param app_name The name of the application initializing libnotify.
     * @returns `true` if successful, or `false` on error.
     */
    function init(app_name?: string | null): boolean;
    /**
     * Gets whether or not libnotify is initialized.
     * @returns `true` if libnotify is initialized, or `false` otherwise.
     */
    function is_initted(): boolean;
    /**
     * Sets the application icon.
     * @param app_icon The optional icon theme icon name or filename.
     * @since 0.8.4
     */
    function set_app_icon(app_icon?: string | null): void;
    /**
     * Sets the application name.
     * @param app_name The name of the application
     */
    function set_app_name(app_name: string): void;
    /**
     * Uninitializes libnotify.
     *
     * This should be called when the program no longer needs libnotify for
     * the rest of its lifecycle, typically just before exitting.
     */
    function uninit(): void;
    /**
     * @gir-type Callback
     */
    interface ActionCallback {
        (notification: Notification, action: string): void;
    }
    namespace Notification {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the notification is closed.
             *
             * Note that when a {@link Notify.Notification} is used in a sandboxed
             * environment where XDG Desktop Notification Portal is implicitly used,
             * the signal `Notify.Notification::closed` is only emitted when
             * the notification is closed in response to an user action response.
             *
             * NO signal will be emitted if the user or the daemon dismissed the
             * notification for any other reason.
             * @signal
             */
            closed: () => void;
            'notify::app-icon': (pspec: GObject.ParamSpec) => void;
            'notify::app-name': (pspec: GObject.ParamSpec) => void;
            'notify::body': (pspec: GObject.ParamSpec) => void;
            'notify::closed-reason': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_icon: string;
            appIcon: string;
            app_name: string;
            appName: string;
            body: string;
            closed_reason: number;
            closedReason: number;
            icon_name: string;
            iconName: string;
            id: number;
            summary: string;
        }
    }

    /**
     * A passive pop-up notification.
     *
     * {@link Notify.Notification} represents a passive pop-up notification. It can
     * contain summary text, body text, and an icon, as well as hints specifying
     * how the notification should be presented. The notification is rendered
     * by a notification daemon, and may present the notification in any number
     * of ways. As such, there is a clear separation of content and presentation,
     * and this API enforces that.
     * @gir-type Class
     */
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;

        // Properties

        /**
         * The icon of the application for the notification.
         * @since 0.8.4
         */
        get app_icon(): string;
        set app_icon(val: string);
        /**
         * The icon of the application for the notification.
         * @since 0.8.4
         */
        get appIcon(): string;
        set appIcon(val: string);
        /**
         * The name of the application for the notification.
         * @since 0.7.3
         */
        get app_name(): string;
        set app_name(val: string);
        /**
         * The name of the application for the notification.
         * @since 0.7.3
         */
        get appName(): string;
        set appName(val: string);
        /**
         * The body of the notification.
         */
        get body(): string;
        set body(val: string);
        /**
         * The closed reason of the notification.
         *
         * See `Notify.Notification::closed`.
         */
        get closed_reason(): number;
        /**
         * The closed reason of the notification.
         *
         * See `Notify.Notification::closed`.
         */
        get closedReason(): number;
        /**
         * The icon-name of the icon to be displayed on the notification.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The icon-name of the icon to be displayed on the notification.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * The Id of the notification.
         */
        get id(): number;
        set id(val: number);
        /**
         * The summary of the notification.
         */
        get summary(): string;
        set summary(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notification.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](summary: string, body?: string | null, icon?: string | null): Notification;

        // Signals

        /** @signal */
        connect<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notification.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_closed(): void;

        // Methods

        /**
         * Adds an action to a notification.
         *
         * When the action is invoked, the specified callback function will be called,
         * along with the value passed to `user_data`.
         * @param action The action ID.
         * @param label The human-readable action label.
         * @param callback The action's callback function.
         */
        add_action(action: string, label: string, callback: ActionCallback): void;
        /**
         * Clears all actions from the notification.
         */
        clear_actions(): void;
        /**
         * Clears all hints from the notification.
         */
        clear_hints(): void;
        /**
         * Synchronously tells the notification server to hide the notification on the screen.
         * @returns `true` on success, or `false` on error with `error` filled in
         */
        close(): boolean;
        /**
         * Gets an application launch context for the notification action
         * activation.
         *
         * If an an action is currently being activated, gets a
         * a {@link Gio.AppLaunchContext} that can be used to launch applications using
         * the current activation token (see {@link Notification.get_activation_token}).
         *
         * This function is intended to be used in a {@link ActionCallback} to get
         * the launch context for the activated action, if the notification daemon
         * supports it.
         * @returns The {@link Gio.AppLaunchContext} for  the current activation token, or `null` if unset
         */
        get_activation_app_launch_context(): Gio.AppLaunchContext | null;
        /**
         * Gets the activation token of the notification.
         *
         * If an an action is currently being activated, return the activation token.
         * This function is intended to be used in a {@link ActionCallback} to get
         * the activation token for the activated action, if the notification daemon
         * supports it.
         * @returns The current activation token, or `null` if none
         */
        get_activation_token(): string | null;
        /**
         * Returns the closed reason code for the notification.
         *
         * This is valid only after the `Notify.Notification::closed` signal is emitted.
         *
         * Since version 0.8.0 the returned value is of type {@link ClosedReason}.
         * @returns An integer representing the closed reason code   (Since 0.8.0 it's also a {@link ClosedReason}).
         */
        get_closed_reason(): number;
        /**
         * Sets the application icon for the notification.
         *
         * If this function is not called or if `app_icon` is `null`, the application icon
         * will be set from the value set via {@link set_app_icon}.
         * @param app_icon The optional icon theme icon name or filename.
         */
        set_app_icon(app_icon?: string | null): void;
        /**
         * Sets the application name for the notification.
         *
         * If this function is not called or if `app_name` is `null`, the application name
         * will be set from the value used in {@link init} or overridden with
         * {@link set_app_name}.
         * @param app_name the localised application name
         */
        set_app_name(app_name?: string | null): void;
        /**
         * Sets the category of this notification.
         *
         * This can be used by the notification server to filter or display the data in
         * a certain way.
         * @param category The category.
         */
        set_category(category: string): void;
        /**
         * Sets a hint for `key` with value `value`.
         *
         * If `value` is `null`, a previously set hint for `key` is unset.
         *
         * If `value` is floating, it is consumed.
         * @param key the hint key
         * @param value the hint value
         */
        set_hint(key: string, value?: GLib.Variant | null): void;
        /**
         * Sets a hint with a byte value.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_byte(key: string, value: number): void;
        /**
         * Sets a hint with a byte array value.
         *
         * The length of `value` must be passed as `len`.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_byte_array(key: string, value: Uint8Array | string): void;
        /**
         * Sets a hint with a double value.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_double(key: string, value: number): void;
        /**
         * Sets a hint with a 32-bit integer value.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_int32(key: string, value: number): void;
        /**
         * Sets a hint with a string value.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_string(key: string, value: string): void;
        /**
         * Sets a hint with an unsigned 32-bit integer value.
         * @param key The hint.
         * @param value The hint's value.
         */
        set_hint_uint32(key: string, value: number): void;
        /**
         * Sets the icon in the notification from a {@link GdkPixbuf.Pixbuf}.
         * @param icon The icon.
         */
        set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void;
        /**
         * Sets the image in the notification from a {@link GdkPixbuf.Pixbuf}.
         * @param pixbuf The image.
         */
        set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Sets the timeout of the notification.
         *
         * To set the default time, pass `NOTIFY_EXPIRES_DEFAULT` as `timeout`. To set the
         * notification to never expire, pass `NOTIFY_EXPIRES_NEVER`.
         *
         * Note that the timeout may be ignored by the server.
         * @param timeout The timeout in milliseconds.
         */
        set_timeout(timeout: number): void;
        /**
         * Sets the urgency level of this notification.
         * @param urgency The urgency level.
         */
        set_urgency(urgency: Urgency | null): void;
        /**
         * Tells the notification server to display the notification on the screen.
         * @returns `true` if successful. On error, this will return `false` and set   `error`.
         */
        show(): boolean;
        /**
         * Updates the notification text and icon.
         *
         * This won't send the update out and display it on the screen. For that, you
         * will need to call {@link Notification.show}.
         * @param summary The new required summary text.
         * @param body The optional body text.
         * @param icon The optional icon theme icon name or filename.
         * @returns `true`, unless an invalid parameter was passed.
         */
        update(summary: string, body?: string | null, icon?: string | null): boolean;
    }

    /**
     * @gir-type Alias
     */
    type NotificationClass = typeof Notification;
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

export default Notify;

// END
