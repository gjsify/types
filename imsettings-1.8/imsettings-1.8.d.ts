/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace IMSettings {
    /**
     * IMSettings-1.8
     */

    /**
     * Error codes used in imsettings.
     */
    enum Error {
        /**
         * unknown error happened.
         */
        UNKNOWN,
        /**
         * misconfigured.
         */
        CONFIGURATION_ERROR,
        /**
         * the Input Method in request doesn't found.
         */
        IM_NOT_FOUND,
        /**
         * the Input Method isn't managed by imsettings.
         */
        UNABLE_TO_TRACK_IM,
        /**
         * Out of memory occured.
         */
        OOM,
        /**
         * current desktop isn't targeted by Input Method.
         */
        NOT_TARGETED_DESKTOP,
    }
    /**
     * The global configuration filename.
     */
    const GLOBAL_XINPUT_CONF: string;
    /**
     * An interface name for imsettings used in DBus.
     */
    const INTERFACE_DBUS: string;
    /**
     * The configuration filename used for "disabled".
     * The real filename would be %IMSETTINGS_NONE_CONF + something specified
     * with --xinput-suffix build option that the default value is ".conf".
     */
    const NONE_CONF: string;
    /**
     * A path name for imsettings used in DBus.
     */
    const PATH_DBUS: string;
    /**
     * A service name for imsettings used in DBus.
     */
    const SERVICE_DBUS: string;
    /**
     * A DBus API version in imsettings.
     */
    const SETTINGS_API_VERSION: number;
    /**
     * The user configuration filename.
     */
    const USER_XINPUT_CONF: string;
    /**
     * The configuration filename used for XIM.
     * The real filename would be %IMSETTINGS_XIM_CONF + something specified
     * with --xinput-suffix build option that the default value is ".conf".
     */
    const XIM_CONF: string;
    /**
     * An interface name for imsettings-xim XIM server used in DBus.
     */
    const XIM_INTERFACE_DBUS: string;
    /**
     * A path name for imsettings-xim XIM server used in DBus.
     */
    const XIM_PATH_DBUS: string;
    /**
     * A service name for imsettings-xim XIM server used in DBus.
     */
    const XIM_SERVICE_DBUS: string;
    function g_error_quark(): GLib.Quark;
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the minimal
     * interface that imsettings conforms to.
     *
     * See the #GDBusProxy:g-interface-info property for more details.
     * @returns a #GDBusInterfaceInfo or %NULL.  Do not unref the returned object, it is owned by an instance of #GDBusProxy.
     */
    function get_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Check if current environment are supposed to work with imsettings.
     * @returns %TRUE if imsettings is enabled, otherwise %FALSE.
     */
    function is_enabled(): boolean;
    module Client {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            desktop: string;
            locale: string;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Own properties of IMSettings.Client

        get desktop(): string;
        set desktop(val: string);
        get locale(): string;
        set locale(val: string);

        // Constructors of IMSettings.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](locale: string): Client;

        // Own methods of IMSettings.Client

        /**
         * Check if X Display can be open or not.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='CanXDisplayOpen'&gt;
         *       &lt;arg type='b' name='ret' direction'out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns if supported, returns %TRUE otherwise %FALSE.
         */
        can_x_display_open(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the result of the request from
         * imsettings_client_can_x_display_open_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns if the operation is successfully done, returns %TRUE          otherwise %FALSE
         */
        can_x_display_open_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request asking if current desktop is supported or not asynchronously
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        can_x_display_open_start(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Obtains the Input Method information that is currently running on.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetActiveVariant'&gt;
         *       &lt;arg type='a{sv}' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #IMSettingsInfo for active Input Method. if not, %NULL then.
         */
        get_active_im_info(cancellable?: Gio.Cancellable | null): Info;
        /**
         * Obtains current desktop information in `client`.
         * @returns a reference to the desktop name in @client. it shouldn't be freed          in applications.
         */
        get_desktop(): string;
        /**
         * A convenient function to get #IMSettingsInfo from the result of
         * imsettings_client_get_info_variant().
         * @param module an Input Method name to obtain the information.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #IMSettingsInfo or %NULL.
         */
        get_info_object(module: string, cancellable?: Gio.Cancellable | null): Info;
        /**
         * Obtains the information for the specific Input Method in `module`.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetInfoVariant'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='name' direction='in' /&gt;
         *       &lt;arg type='a{sv}' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module an Input Method name to obtain the information.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #GVariant that can converts to #IMSettingsInfo through          imsettings_info_new(). otherwise %NULL.
         */
        get_info_variant(module: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
        /**
         * Obtains the result of the request from
         * imsettings_client_get_info_variant_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns a #GVariant that can converts to #IMSettingsInfo through          imsettings_info_new(). otherwise %NULL.
         */
        get_info_variant_finish(result: Gio.AsyncResult): GLib.Variant;
        /**
         * Request obtaining asynchronously the Input Method information for `module`.
         * @param module an Input Method name to obtain the information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        get_info_variant_start(
            module: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Obtains all of the Input Method information available on the system.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetInfoVariants'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='a{sv}' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #GVariant contains some pairs of an Input Method name and          a #GVariant that can converts to #IMSettingsInfo through          imsettings_info_new(). otherwise %NULL.
         */
        get_info_variants(cancellable?: Gio.Cancellable | null): GLib.Variant;
        /**
         * Obtains the result of the request from
         * imsettings_client_get_info_variants_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns a #GVariant contains some pairs of an Input Method name and          a #GVariant that can converts to #IMSettingsInfo through          imsettings_info_new(). otherwise %NULL.
         */
        get_info_variants_finish(result: Gio.AsyncResult): any | null;
        /**
         * Request obtaining asynchronously all of the Input Method information
         * available on the system.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        get_info_variants_start(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Obtains current locale information in `client`.
         * @returns a reference to the locale string in @client. it shouldn't be freed          in applications.
         */
        get_locale(): string;
        /**
         * Obtains current Input Method settings in the backend modules.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='DumpModuleSettings'&gt;
         *       &lt;arg type='a{ss}' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #GVariant that contains some pairs of the module name and          the Input Method name.
         */
        get_module_settings(cancellable?: Gio.Cancellable | null): GLib.Variant;
        /**
         * Obtains an Input Method name that currently is active for the system-wide.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetSystemIM'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='ret' direction='out'&gt;
         *         &lt;annotation name='org.freedesktop.DBus.GLib.Const' value='' /&gt;
         *       &lt;/arg&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns an Input Method name or %NULL.
         */
        get_system_im(cancellable?: Gio.Cancellable | null): string;
        /**
         * Obtains the result of the request from
         * imsettings_client_get_system_im_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns an Input Method name or %NULL.
         */
        get_system_im_finish(result: Gio.AsyncResult): string;
        /**
         * Request obtaining asynchronously an input method name that currently is
         * active for the system-wide.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        get_system_im_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Obtains an Input Method name that currently is active for the user.
         * If one doesn't have the user xinputrc on their home, this simply returns the same
         * value to what imsettings_client_get_system_im() returns.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetUserIM'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='ret' direction='out'&gt;
         *         &lt;annotation name='org.freedesktop.DBus.GLib.Const' value='' /&gt;
         *       &lt;/arg&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns an Input Method name or %NULL.
         */
        get_user_im(cancellable?: Gio.Cancellable | null): string;
        /**
         * Obtains the result of the request from
         * imsettings_client_get_user_im_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns an Input Method name or %NULL.
         */
        get_user_im_finish(result: Gio.AsyncResult): string;
        /**
         * Request obtaining asynchronously an input method name that currently is
         * active for the user.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        get_user_im_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Obtains the version information of imsettings-daemon running.
         * This is expected to invoke at first if the return value is same to
         * %IMSETTINGS_SETTINGS_API_VERSION. otherwise it may not works as expected
         * due to the changes of the implementation between imsettings-daemon and
         * client APIs.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='GetVersion'&gt;
         *       &lt;arg type='u' name='version' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns a version number.
         */
        get_version(cancellable?: Gio.Cancellable | null): number;
        /**
         * Checks whether `module` is the system default or not.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='IsSystemDefault'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='imname' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module an Input Method name to ask.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if it is, otherwise %FALSE.
         */
        im_is_system_default(module: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Checks whether `module` is the user default or not.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='IsUserDefault'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='imname' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module an Input Method name to ask.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if it is, otherwise %FALSE.
         */
        im_is_user_default(module: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Checks whether `module` is the Input Method for XIM only or not.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='IsXIM'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='imname' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module an Input Method name to ask.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if it is, otherwise %FALSE.
         */
        im_is_xim(module: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Check if IMSettings is supposed to be taken any acttions.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='IsActionNeeded'&gt;
         *       &lt;arg type='s' name='desktop' direction='in' /&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='module' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction'out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module
         * @param cancellable a #GCancellable or %NULL.
         * @returns if any actions needed, returns %TRUE otherwise %FALSE.
         */
        is_action_needed(module: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the result of the request from
         * imsettings_client_is_action_needed_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns if the operation is successfully done, returns %TRUE          otherwise %FALSE
         */
        is_action_needed_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request asking if IMSettings is supposed to be taken any actions
         * @param module
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        is_action_needed_start(
            module: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Check if current desktop is supported by IMSettings or not.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='IsSupportedDesktop'&gt;
         *       &lt;arg type='s' name='desktop' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction'out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param cancellable a #GCancellable or %NULL.
         * @returns if supported, returns %TRUE otherwise %FALSE.
         */
        is_supported_desktop(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the result of the request from
         * imsettings_client_is_supported_desktop_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns if the operation is successfully done, returns %TRUE          otherwise %FALSE
         */
        is_supported_desktop_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request asking if current desktop is supported or not asynchronously
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        is_supported_desktop_start(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Check whether the process is running.
         * @returns %TRUE if imsettings-daemon is running. otherwise %FALSE.
         */
        ping(): boolean;
        /**
         * Reloads imsettings-daemon.
         *
         * Note that `send_signal` option is for the backward compatibility.
         * imsettings-daemon doesn't do anything since %IMSETTINGS_SETTINGS_API_VERSION
         * is 4. so you will get the expected behavior with:
         *
         *
         * ```
         *   int api_version;
         *
         *   if ((api_version = imsettings_client_get_version(client)) != IMSETTINGS_SETTINGS_API_VERSION) {
         *       imsettings_client_reload(client, api_version < 4, NULL, &error);
         *   }
         * ```
         *
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;signal name='Reload'&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/signal&gt;
         *     &lt;method name='StopService'&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param send_signal %TRUE to send a signal instead of invoking a method.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if the operation is successfully done, otherwise %FALSE.
         */
        reload(send_signal: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Update the desktop name in `client` to `desktop`. if `desktop` is %NULL,
         * the desktop detection will be done in the server side.
         * @param desktop a current desktop name going to operate.
         * @returns %TRUE if successfully updated, otherwise %FALSE.
         */
        set_desktop(desktop: string): boolean;
        /**
         * Update the locale information in `client` with `locale`.
         * @param locale a locale to obtain information for or to give it for Input Method.          or %NULL if you want to pass current locale.
         * @returns %TRUE if successfully updated, otherwise %FALSE.
         */
        set_locale(locale: string): boolean;
        /**
         * Changes the Input Method to `module`.
         *
         * You could access through DBus API instead:
         *
         *
         * ```
         *   &lt;interface name='com.redhat.imsettings'&gt;
         *     &lt;method name='SwitchIM'&gt;
         *       &lt;arg type='s' name='lang' direction='in' /&gt;
         *       &lt;arg type='s' name='module' direction='in' /&gt;
         *       &lt;arg type='b' name='update_xinputrc' direction='in' /&gt;
         *       &lt;arg type='b' name='ret' direction='out' /&gt;
         *     &lt;/method&gt;
         *   &lt;/interface&gt;
         * ```
         *
         * @param module an Input Method name changing to, or %NULL to disable          the Input Method.
         * @param update_xinputrc %TRUE to update the user xinputrc, otherwise %FALSE.
         * @param cancellable a #GCancellable or %NULL.
         * @returns if the operation is successfully done, returns %TRUE          otherwise %FALSE.
         */
        switch_im(module: string, update_xinputrc: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the result of the request from
         * imsettings_client_switch_im_start().
         * @param result a #GAsyncResult pushed through #GAsyncReadyCallback.
         * @returns if the operation is successfully done, returns %TRUE          otherwise %FALSE.
         */
        switch_im_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request changing asynchronously the Input Method to `module`.
         * @param module an Input Method name changing to, or %NULL to disable          the Input Method.
         * @param update_xinputrc %TRUE to update the user xinputrc, otherwise %FALSE.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback.
         */
        switch_im_start(
            module: string,
            update_xinputrc: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
    }

    module Info {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;

        // Constructors of IMSettings.Info

        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameters: GLib.Variant): Info;

        // Own static methods of IMSettings.Info

        /**
         * Generates a #GVariant from the content of `filename`.
         * This API is mainly used in imsettings-daemon and not supposed to
         * be used in any applications.
         * @param filename a filename to the xinput configuration file.
         * @param language a locale being desired to work on.
         */
        static variant_new(filename: string, language: string): GLib.Variant;
        /**
         * Generates a #GVariant from the content of `filename`.
         * This API is mainly used in imsettings-daemon and not supposed to
         * be used in any applications.
         * @param filename a filename to the xinput configuration file.
         * @param language a locale being desired to work on.
         * @param desktop a desktop name.
         */
        static variant_new_with_desktop(filename: string, language: string, desktop: string): GLib.Variant;

        // Own methods of IMSettings.Info

        /**
         * Compares two #IMSettingsInfo instance.
         * This function would simply compares the result of the real value in
         * the xinput configuration file. so the result of
         * imsettings_info_is_script(), imsettings_info_get_language(),
         * imsettings_info_get_filename(), imsettings_info_is_xim()
         * imsettings_info_get_im_name() and imsettings_info_get_sub_im_name()
         * will be ignored.
         * @param info2 a #IMSettingsInfo to compare with @i1.
         * @returns %TRUE if @i1 and @i2 match, otherwise %FALSE.
         */
        compare(info2: Info): boolean;
        /**
         * Obtains the arguments of the auxiliary program.
         *
         * This gives you same value of %AUXILIARY_ARGS parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_aux_args(): string;
        /**
         * Obtains the auxiliary program name, which will be invoked by imsettings-daemon
         * with the arguments from imsettings_info_get_aux_args().
         *
         * This gives you same value of %AUXILIARY_PROGRAM parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_aux_program(): string;
        /**
         * Obtains the xinput configuration filename.
         * @returns a string. this shouldn't be freed.
         */
        get_filename(): string;
        /**
         * Obtains the GTK+ immodule name. this is same value of %GTK_IM_MODULE
         * parameter in the xinput configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_gtkimm(): string;
        /**
         * Obtains the icon filename for the Input Method.
         *
         * This gives you same value of %ICON parameter in the xinput
         * configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_icon_file(): string;
        /**
         * Obtains the Input Method name. this is same value of %SHORT_DESC
         * if it doesn't contain the sub module information that is separate with ':'
         * like:
         *
         *
         * ```
         *   SHORT_DESC=foo-im:bar-subim
         * ```
         *
         * @returns a string. this shouldn't be freed.
         */
        get_im_name(): string;
        /**
         * Obtains the language that `info` genereated by.
         * @returns a string. this shouldn't be freed.
         */
        get_language(): string;
        /**
         * Obtains the long description for Input Method.
         *
         * This gives you same value of %LONG_DESC parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_long_desc(): string;
        /**
         * Obtains non-targeted desktop session for the Input Method.
         *
         * This gives you same value of %NOT_RUN parameter in the xinput
         * configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_non_target(): string;
        /**
         * Obtains the arguments of the preference program.
         *
         * This gives you same value of %PREFERENCE_ARGS parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_prefs_args(): string;
        /**
         * Obtains the preference program name for the Input Method.
         *
         * This gives you same value of %PREFERENCE_PROGRAM parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_prefs_program(): string;
        /**
         * Obtains the Qt immodule name.
         *
         * This gives you same value of %QT_IM_MODULE parameter in the xinput
         * configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_qtimm(): string;
        /**
         * Obtains the short description for Input Method.
         *
         * This gives you same value of %SHORT_DESC parameter in the xinput
         * configuration file.  If it doesn't contain, the result would be same
         * to what imsettings_info_get_xim() returns.
         * @returns a string. this shouldn't be freed.
         */
        get_short_desc(): string;
        /**
         * Obtains the sub Input Method name.
         * @returns a string or %NULL if %SHORT_DESC doesn't contain any information          for sub Input Method.
         */
        get_sub_im_name(): string;
        /**
         * Obtains the XIM atom that is supposed to be used with XMODIFIERS=\`im=`.
         *
         * This gives you same value of %XIM parameter in the xinput
         * configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_xim(): string;
        /**
         * Obtains the arguments of XIM program.
         *
         * This gives you same value of %XIM_ARGS parameter in the xinput
         * configuration file.
         * @returns a string or %NULL if it's not specified. this shouldn't be freed.
         */
        get_xim_args(): string;
        /**
         * Obtains the XIM program name, which will be invoked by imsettings-daemon
         * with the arguments from imsettings_info_get_xim_args().
         *
         * This gives you same value of %XIM_PROGRAM parameter in the xinput
         * configuration file.
         * @returns a string. this shouldn't be freed.
         */
        get_xim_program(): string;
        /**
         * Checks whether the IMSettings need to be taken any actions for.
         * @returns %TRUE if it is, otherwise %FALSE.
         */
        is_action_needed(): boolean;
        /**
         * Checks whether the Input Method in `info` is supposed to work for
         * immodule only.
         * @returns %TRUE if it is. otherwise %FALSE.
         */
        is_immodule_only(): boolean;
        /**
         * Checks whether the xinput configuration file is the scripting language.
         *
         * This is useful to see if the result may be different when the condition
         * is changed.
         * @returns %TRUE if the xinput configuration file is the scripting language.          otherwise %FALSE.
         */
        is_script(): boolean;
        /**
         * Checks whether the Input Method in `info` is the system default.
         * @returns %TRUE if it is. otherwise %FALSE.
         */
        is_system_default(): boolean;
        /**
         * Checks whether the Input Method in `info` is the user default.
         * @returns %TRUE if it is. otherwise %FALSE.
         */
        is_user_default(): boolean;
        /**
         * Checks whether the Input Method is visible.
         *
         * The result would be same what the xinput configuration file specifies in
         * %IMSETTINGS_IGNORE_ME.
         * @returns %TRUE if it's visible, otherwise %FALSE.
         */
        is_visible(): boolean;
        /**
         * Checks whether the Input Method in `info` is supposed to work on XIM only.
         * @returns %TRUE if it is, otherwise %FALSE.
         */
        is_xim(): boolean;
    }

    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;

        // Constructors of IMSettings.ClientPrivate

        _init(...args: any[]): void;
    }

    type InfoClass = typeof Info;
    abstract class InfoPrivate {
        static $gtype: GObject.GType<InfoPrivate>;

        // Constructors of IMSettings.InfoPrivate

        _init(...args: any[]): void;
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

export default IMSettings;

// END
