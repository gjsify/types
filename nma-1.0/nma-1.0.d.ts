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
import type NM from '@girs/nm-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace NMA {
    /**
     * NMA-1.0
     */

    /**
     * Flags that controls what is the certificate chooser button able to pick.
     * Currently only local files are supported, but might be extended to use URIs,
     * such as PKCS\#11 certificate URIs in future as well.
     */

    /**
     * Flags that controls what is the certificate chooser button able to pick.
     * Currently only local files are supported, but might be extended to use URIs,
     * such as PKCS\#11 certificate URIs in future as well.
     */
    export namespace CertChooserFlags {
        export const $gtype: GObject.GType<CertChooserFlags>;
    }

    enum CertChooserFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Only pick a certificate, not a key
         */
        CERT,
        /**
         * Hide all controls but the secrets entries
         */
        PASSWORDS,
        /**
         * Ensure the chooser only selects regular PEM files
         */
        PEM,
        /**
         * Do not show password entries (Since: 1.8.34)
         */
        NO_PASSWORDS,
    }

    export namespace MobileFamily {
        export const $gtype: GObject.GType<MobileFamily>;
    }

    enum MobileFamily {
        /**
         * Unknown or invalid network access method
         */
        UNKNOWN,
        /**
         * 3rd Generation Partnership Project (3GPP) network
         */
        '3GPP',
        /**
         * A CDMA network
         */
        CDMA,
    }
    const BAR_CODE_SIZE: string;
    const BAR_CODE_TEXT: string;
    const BAR_CODE_WIDGET_CONNECTION: string;
    /**
     * Evaluates to the major version number of NetworkManager which this source
     * is compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version number of NetworkManager which this source
     * compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version number of NetworkManager which this source
     * is compiled against.
     */
    const MINOR_VERSION: number;
    /**
     * Splits the input MCCMNC string into separate MCC and MNC strings.
     * @param mccmnc input MCCMNC string.
     * @returns %TRUE if correctly split and @mcc and @mnc are set; %FALSE otherwise.
     */
    function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string, string];
    /**
     * Returns secret flags corresponding to the selected password storage menu
     * in the attached icon
     * @param passwd_entry password #GtkEntry which the password icon/menu is attached to
     * @returns secret flags corresponding to the active item in password menu
     */
    function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;
    /**
     * Adds a secondary icon and creates a popup menu for password entry.
     * The active menu item is set up according to initial_flags, or
     * from `setting/``password_flags_name` (if they are not NULL).
     * If the `setting/``password_flags_name` are not NULL, secret flags will
     * be automatically updated in the setting when menu is changed.
     * @param passwd_entry password #GtkEntry which the icon is attached to
     * @param initial_flags initial secret flags to setup password menu from
     * @param setting #NMSetting containing the password, or NULL
     * @param password_flags_name name of the secret flags (like psk-flags), or NULL
     * @param with_not_required whether to include "Not required" menu item
     * @param ask_mode %TRUE if the entry is shown in ASK mode. That means,   while prompting for a password, contrary to being inside the   editor mode.   If %TRUE, the entry should be sensivive on selected "always-ask"   icon (this is e.f. for nm-applet asking for password), otherwise   not.   If %FALSE, it shall not be possible to select a different storage,   because we only prompt for a password, we cannot change the password   location.
     */
    function utils_setup_password_storage(
        passwd_entry: Gtk.Widget,
        initial_flags: NM.SettingSecretFlags | null,
        setting: NM.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        ask_mode: boolean,
    ): void;
    /**
     * Updates secret flags in the password storage popup menu and also
     * in the `setting` (if `setting` and `password_flags_name` are not NULL).
     * @param passwd_entry #GtkEntry with the password
     * @param secret_flags secret flags to set
     * @param setting #NMSetting containing the password, or NULL
     * @param password_flags_name name of the secret flags (like psk-flags), or NULL
     */
    function utils_update_password_storage(
        passwd_entry: Gtk.Widget,
        secret_flags: NM.SettingSecretFlags | null,
        setting: NM.Setting,
        password_flags_name: string,
    ): void;
    interface MobileWizardCallback {
        (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void;
    }
    namespace BarCode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::size': GObject.Object.Notify;
            'notify::text': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            text: string;
        }
    }

    class BarCode extends GObject.Object {
        static $gtype: GObject.GType<BarCode>;

        // Properties

        get size(): number;
        set text(val: string);

        // Constructors

        constructor(properties?: Partial<BarCode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string): BarCode;

        // Signals

        connect<K extends keyof BarCode.SignalSignatures>(signal: K, callback: BarCode.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BarCode.SignalSignatures>(
            signal: K,
            callback: BarCode.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BarCode.SignalSignatures>(
            signal: K,
            ...args: BarCode.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Draws the QR code onto the given context.
         * @param cr cairo context
         */
        draw(cr: cairo.Context): void;
        get_size(): number;
        /**
         * Regenerates the QR code for a different text.
         * @param text new bar code text
         */
        set_text(text: string): void;
    }

    namespace BarCodeWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::connection': GObject.Object.Notify;
            'notify::baseline-position': GObject.Object.Notify;
            'notify::baseline-position': GObject.Object.Notify;
            'notify::homogeneous': GObject.Object.Notify;
            'notify::spacing': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
            'notify::orientation': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            connection: NM.Connection;
        }
    }

    class BarCodeWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BarCodeWidget>;

        // Properties

        get connection(): NM.Connection;
        set connection(val: NM.Connection);

        // Constructors

        constructor(properties?: Partial<BarCodeWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BarCodeWidget.SignalSignatures>(
            signal: K,
            callback: BarCodeWidget.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BarCodeWidget.SignalSignatures>(
            signal: K,
            callback: BarCodeWidget.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BarCodeWidget.SignalSignatures>(
            signal: K,
            ...args: BarCodeWidget.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CertChooser {
        // Signal callback interfaces

        interface CertPasswordValidate {
            (_source: CertChooser): GLib.Error;
        }

        interface CertValidate {
            (_source: CertChooser): GLib.Error;
        }

        interface Changed {
            (_source: CertChooser): void;
        }

        interface KeyPasswordValidate {
            (_source: CertChooser): GLib.Error;
        }

        interface KeyValidate {
            (_source: CertChooser): GLib.Error;
        }

        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'cert-password-validate': CertPasswordValidate;
            'cert-validate': CertValidate;
            changed: Changed;
            'key-password-validate': KeyPasswordValidate;
            'key-validate': KeyValidate;
            'notify::flags': GObject.Object.Notify;
            'notify::title': GObject.Object.Notify;
            'notify::baseline-row': GObject.Object.Notify;
            'notify::baseline-row': GObject.Object.Notify;
            'notify::column-homogeneous': GObject.Object.Notify;
            'notify::column-homogeneous': GObject.Object.Notify;
            'notify::column-spacing': GObject.Object.Notify;
            'notify::column-spacing': GObject.Object.Notify;
            'notify::row-homogeneous': GObject.Object.Notify;
            'notify::row-homogeneous': GObject.Object.Notify;
            'notify::row-spacing': GObject.Object.Notify;
            'notify::row-spacing': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
            'notify::orientation': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            flags: number;
            title: string;
        }
    }

    class CertChooser extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<CertChooser>;

        // Properties

        set flags(val: number);
        set title(val: string);

        // Constructors

        constructor(properties?: Partial<CertChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, flags: CertChooserFlags): CertChooser;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof CertChooser.SignalSignatures>(
            signal: K,
            callback: CertChooser.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertChooser.SignalSignatures>(
            signal: K,
            callback: CertChooser.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertChooser.SignalSignatures>(
            signal: K,
            ...args: CertChooser.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the labels to the specified size group so that they are aligned
         * nicely with other entries in a form.
         *
         * It is expected that the NMACertChooser is a GtkGrid with two columns
         * with the labels in the first one.
         * @param group a size group
         */
        add_to_size_group(group: Gtk.SizeGroup): void;
        /**
         * Gets the real certificate location from the chooser button along with the scheme.
         * @returns the certificate path
         */
        get_cert(): [string | null, NM.Setting8021xCKScheme];
        /**
         * Obtains the password or a PIN that was be required to access the certificate.
         * @returns the certificate PIN or password
         */
        get_cert_password(): string;
        /**
         * Returns secret flags corresponding to the certificate password
         * if one is present. The chooser would typically call into
         * nma_utils_menu_to_secret_flags() for the certificate password
         * entry.
         * @returns secret flags corresponding to the certificate password
         */
        get_cert_password_flags(): NM.SettingSecretFlags;
        /**
         * Gets the real certificate URI from the chooser button along with the scheme.
         * @returns the certificate URI
         */
        get_cert_uri(): string | null;
        /**
         * Gets the real key location from the chooser button along with the scheme.
         * @returns the key path
         */
        get_key(): [string | null, NM.Setting8021xCKScheme];
        /**
         * Obtains the password or a PIN that was be required to access the key.
         * @returns the key PIN or password
         */
        get_key_password(): string;
        /**
         * Returns secret flags corresponding to the key password
         * if one is present. The chooser would typically call into
         * nma_utils_menu_to_secret_flags() for the key password
         * entry.
         * @returns secret flags corresponding to the key password
         */
        get_key_password_flags(): NM.SettingSecretFlags;
        /**
         * Gets the real key URI from the chooser button along with the scheme.
         * @returns the key URI
         */
        get_key_uri(): string | null;
        /**
         * Sets the certificate location for the chooser button.
         * @param value the path or URI of a certificate
         * @param scheme the scheme of the certificate path
         */
        set_cert(value: string, scheme: NM.Setting8021xCKScheme | null): void;
        /**
         * Sets the password or a PIN that might be required to access the certificate.
         * @param password the certificate PIN or password
         */
        set_cert_password(password: string): void;
        /**
         * Sets the certificate URI for the chooser button.
         * @param uri the path or URI of a certificate
         */
        set_cert_uri(uri: string): void;
        /**
         * Sets the key location for the chooser button.
         * @param value the path or URI of a key
         * @param scheme the scheme of the key path
         */
        set_key(value: string, scheme: NM.Setting8021xCKScheme | null): void;
        /**
         * Sets the password or a PIN that might be required to access the key.
         * @param password the key PIN or password
         */
        set_key_password(password: string): void;
        /**
         * Sets the key URI for the chooser button.
         * @param uri the URI of a key
         */
        set_key_uri(uri: string): void;
        /**
         * This method basically calls nma_utils_setup_password_storage()
         * on the certificate password entry, in case one is present.
         * @param initial_flags initial secret flags to setup password menu from
         * @param setting #NMSetting containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         * @param with_not_required whether to include "Not required" menu item
         * @param ask_mode %TRUE if the entry is shown in ASK mode
         */
        setup_cert_password_storage(
            initial_flags: NM.SettingSecretFlags | null,
            setting: NM.Setting,
            password_flags_name: string,
            with_not_required: boolean,
            ask_mode: boolean,
        ): void;
        /**
         * This method basically calls nma_utils_setup_password_storage()
         * on the key password entry, in case one is present.
         * @param initial_flags initial secret flags to setup password menu from
         * @param setting #NMSetting containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         * @param with_not_required whether to include "Not required" menu item
         * @param ask_mode %TRUE if the entry is shown in ASK mode
         */
        setup_key_password_storage(
            initial_flags: NM.SettingSecretFlags | null,
            setting: NM.Setting,
            password_flags_name: string,
            with_not_required: boolean,
            ask_mode: boolean,
        ): void;
        /**
         * This method basically calls nma_utils_update_password_storage()
         * on the certificate password entry, in case one is present.
         * @param secret_flags secret flags to set
         * @param setting #NMSetting containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         */
        update_cert_password_storage(
            secret_flags: NM.SettingSecretFlags | null,
            setting: NM.Setting,
            password_flags_name: string,
        ): void;
        /**
         * This method basically calls nma_utils_update_password_storage()
         * on the key password entry, in case one is present.
         * @param secret_flags secret flags to set
         * @param setting #NMSetting containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         */
        update_key_password_storage(
            secret_flags: NM.SettingSecretFlags | null,
            setting: NM.Setting,
            password_flags_name: string,
        ): void;
        /**
         * Validates whether the chosen values make sense. The users can do further
         * validation by subscribing to the "*-changed" signals and returning an
         * error themselves.
         * @returns %TRUE if validation passes, %FALSE otherwise
         */
        validate(): boolean;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MobileProvidersDatabase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::country-codes': GObject.Object.Notify;
            'notify::country-codes': GObject.Object.Notify;
            'notify::service-providers': GObject.Object.Notify;
            'notify::service-providers': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            country_codes: string;
            countryCodes: string;
            service_providers: string;
            serviceProviders: string;
        }
    }

    class MobileProvidersDatabase
        extends GObject.Object
        implements Gio.AsyncInitable<MobileProvidersDatabase>, Gio.Initable
    {
        static $gtype: GObject.GType<MobileProvidersDatabase>;

        // Properties

        get country_codes(): string;
        get countryCodes(): string;
        get service_providers(): string;
        get serviceProviders(): string;

        // Constructors

        constructor(properties?: Partial<MobileProvidersDatabase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_sync(
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): MobileProvidersDatabase;

        // Signals

        connect<K extends keyof MobileProvidersDatabase.SignalSignatures>(
            signal: K,
            callback: MobileProvidersDatabase.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MobileProvidersDatabase.SignalSignatures>(
            signal: K,
            callback: MobileProvidersDatabase.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MobileProvidersDatabase.SignalSignatures>(
            signal: K,
            ...args: MobileProvidersDatabase.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static ['new'](
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null,
        ): void;

        // Methods

        dump(): void;
        get_countries(): GLib.HashTable<string, CountryInfo>;
        lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
        lookup_cdma_sid(sid: number): MobileProvider;
        lookup_country(country_code: string): CountryInfo;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MobileWizard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MobileWizard extends GObject.Object {
        static $gtype: GObject.GType<MobileWizard>;

        // Constructors

        constructor(properties?: Partial<MobileWizard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MobileWizard.SignalSignatures>(
            signal: K,
            callback: MobileWizard.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MobileWizard.SignalSignatures>(
            signal: K,
            callback: MobileWizard.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MobileWizard.SignalSignatures>(
            signal: K,
            ...args: MobileWizard.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        destroy(): void;
        present(): void;
    }

    namespace VpnPasswordDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': GObject.Object.Notify;
            'notify::use-header-bar': GObject.Object.Notify;
            'notify::accept-focus': GObject.Object.Notify;
            'notify::accept-focus': GObject.Object.Notify;
            'notify::application': GObject.Object.Notify;
            'notify::attached-to': GObject.Object.Notify;
            'notify::attached-to': GObject.Object.Notify;
            'notify::decorated': GObject.Object.Notify;
            'notify::default-height': GObject.Object.Notify;
            'notify::default-height': GObject.Object.Notify;
            'notify::default-width': GObject.Object.Notify;
            'notify::default-width': GObject.Object.Notify;
            'notify::deletable': GObject.Object.Notify;
            'notify::destroy-with-parent': GObject.Object.Notify;
            'notify::destroy-with-parent': GObject.Object.Notify;
            'notify::focus-on-map': GObject.Object.Notify;
            'notify::focus-on-map': GObject.Object.Notify;
            'notify::focus-visible': GObject.Object.Notify;
            'notify::focus-visible': GObject.Object.Notify;
            'notify::gravity': GObject.Object.Notify;
            'notify::has-resize-grip': GObject.Object.Notify;
            'notify::has-resize-grip': GObject.Object.Notify;
            'notify::has-toplevel-focus': GObject.Object.Notify;
            'notify::has-toplevel-focus': GObject.Object.Notify;
            'notify::hide-titlebar-when-maximized': GObject.Object.Notify;
            'notify::hide-titlebar-when-maximized': GObject.Object.Notify;
            'notify::icon': GObject.Object.Notify;
            'notify::icon-name': GObject.Object.Notify;
            'notify::icon-name': GObject.Object.Notify;
            'notify::is-active': GObject.Object.Notify;
            'notify::is-active': GObject.Object.Notify;
            'notify::is-maximized': GObject.Object.Notify;
            'notify::is-maximized': GObject.Object.Notify;
            'notify::mnemonics-visible': GObject.Object.Notify;
            'notify::mnemonics-visible': GObject.Object.Notify;
            'notify::modal': GObject.Object.Notify;
            'notify::resizable': GObject.Object.Notify;
            'notify::resize-grip-visible': GObject.Object.Notify;
            'notify::resize-grip-visible': GObject.Object.Notify;
            'notify::role': GObject.Object.Notify;
            'notify::screen': GObject.Object.Notify;
            'notify::skip-pager-hint': GObject.Object.Notify;
            'notify::skip-pager-hint': GObject.Object.Notify;
            'notify::skip-taskbar-hint': GObject.Object.Notify;
            'notify::skip-taskbar-hint': GObject.Object.Notify;
            'notify::startup-id': GObject.Object.Notify;
            'notify::startup-id': GObject.Object.Notify;
            'notify::title': GObject.Object.Notify;
            'notify::transient-for': GObject.Object.Notify;
            'notify::transient-for': GObject.Object.Notify;
            'notify::type': GObject.Object.Notify;
            'notify::type-hint': GObject.Object.Notify;
            'notify::type-hint': GObject.Object.Notify;
            'notify::urgency-hint': GObject.Object.Notify;
            'notify::urgency-hint': GObject.Object.Notify;
            'notify::window-position': GObject.Object.Notify;
            'notify::window-position': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class VpnPasswordDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<VpnPasswordDialog>;

        // Constructors

        constructor(properties?: Partial<VpnPasswordDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, message: string, password: string): VpnPasswordDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof VpnPasswordDialog.SignalSignatures>(
            signal: K,
            callback: VpnPasswordDialog.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VpnPasswordDialog.SignalSignatures>(
            signal: K,
            callback: VpnPasswordDialog.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VpnPasswordDialog.SignalSignatures>(
            signal: K,
            ...args: VpnPasswordDialog.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        focus_password(): void;
        focus_password_secondary(): void;
        focus_password_ternary(): void;
        get_password(): string;
        get_password_secondary(): string;
        get_password_ternary(): string;
        run_and_block(): boolean;
        set_password(password: string): void;
        set_password_label(label: string): void;
        set_password_secondary(password_secondary: string): void;
        set_password_secondary_label(label: string): void;
        set_password_ternary(password_ternary: string): void;
        set_password_ternary_label(label: string): void;
        set_show_password(show: boolean): void;
        set_show_password_secondary(show: boolean): void;
        set_show_password_ternary(show: boolean): void;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WifiDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': GObject.Object.Notify;
            'notify::use-header-bar': GObject.Object.Notify;
            'notify::accept-focus': GObject.Object.Notify;
            'notify::accept-focus': GObject.Object.Notify;
            'notify::application': GObject.Object.Notify;
            'notify::attached-to': GObject.Object.Notify;
            'notify::attached-to': GObject.Object.Notify;
            'notify::decorated': GObject.Object.Notify;
            'notify::default-height': GObject.Object.Notify;
            'notify::default-height': GObject.Object.Notify;
            'notify::default-width': GObject.Object.Notify;
            'notify::default-width': GObject.Object.Notify;
            'notify::deletable': GObject.Object.Notify;
            'notify::destroy-with-parent': GObject.Object.Notify;
            'notify::destroy-with-parent': GObject.Object.Notify;
            'notify::focus-on-map': GObject.Object.Notify;
            'notify::focus-on-map': GObject.Object.Notify;
            'notify::focus-visible': GObject.Object.Notify;
            'notify::focus-visible': GObject.Object.Notify;
            'notify::gravity': GObject.Object.Notify;
            'notify::has-resize-grip': GObject.Object.Notify;
            'notify::has-resize-grip': GObject.Object.Notify;
            'notify::has-toplevel-focus': GObject.Object.Notify;
            'notify::has-toplevel-focus': GObject.Object.Notify;
            'notify::hide-titlebar-when-maximized': GObject.Object.Notify;
            'notify::hide-titlebar-when-maximized': GObject.Object.Notify;
            'notify::icon': GObject.Object.Notify;
            'notify::icon-name': GObject.Object.Notify;
            'notify::icon-name': GObject.Object.Notify;
            'notify::is-active': GObject.Object.Notify;
            'notify::is-active': GObject.Object.Notify;
            'notify::is-maximized': GObject.Object.Notify;
            'notify::is-maximized': GObject.Object.Notify;
            'notify::mnemonics-visible': GObject.Object.Notify;
            'notify::mnemonics-visible': GObject.Object.Notify;
            'notify::modal': GObject.Object.Notify;
            'notify::resizable': GObject.Object.Notify;
            'notify::resize-grip-visible': GObject.Object.Notify;
            'notify::resize-grip-visible': GObject.Object.Notify;
            'notify::role': GObject.Object.Notify;
            'notify::screen': GObject.Object.Notify;
            'notify::skip-pager-hint': GObject.Object.Notify;
            'notify::skip-pager-hint': GObject.Object.Notify;
            'notify::skip-taskbar-hint': GObject.Object.Notify;
            'notify::skip-taskbar-hint': GObject.Object.Notify;
            'notify::startup-id': GObject.Object.Notify;
            'notify::startup-id': GObject.Object.Notify;
            'notify::title': GObject.Object.Notify;
            'notify::transient-for': GObject.Object.Notify;
            'notify::transient-for': GObject.Object.Notify;
            'notify::type': GObject.Object.Notify;
            'notify::type-hint': GObject.Object.Notify;
            'notify::type-hint': GObject.Object.Notify;
            'notify::urgency-hint': GObject.Object.Notify;
            'notify::urgency-hint': GObject.Object.Notify;
            'notify::window-position': GObject.Object.Notify;
            'notify::window-position': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Dialog.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class WifiDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WifiDialog>;

        // Constructors

        constructor(properties?: Partial<WifiDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            client: NM.Client,
            connection: NM.Connection,
            device: NM.Device,
            ap: NM.AccessPoint,
            secrets_only: boolean,
        ): WifiDialog;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        static new_for_create(client: NM.Client): WifiDialog;

        static new_for_hidden(client: NM.Client): WifiDialog;

        static new_for_other(client: NM.Client): WifiDialog;

        static new_for_secrets(
            client: NM.Client,
            connection: NM.Connection,
            secrets_setting_name: string,
            secrets_hints: string,
        ): WifiDialog;

        // Signals

        connect<K extends keyof WifiDialog.SignalSignatures>(
            signal: K,
            callback: WifiDialog.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WifiDialog.SignalSignatures>(
            signal: K,
            callback: WifiDialog.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WifiDialog.SignalSignatures>(
            signal: K,
            ...args: WifiDialog.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_connection(): [NM.Connection, NM.Device, NM.AccessPoint];
        get_nag_ignored(): boolean;
        nag_user(): Gtk.Widget;
        set_nag_ignored(ignored: boolean): void;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    type BarCodeClass = typeof BarCode;
    type BarCodeWidgetClass = typeof BarCodeWidget;
    type CertChooserClass = typeof CertChooser;
    abstract class CountryInfo {
        static $gtype: GObject.GType<CountryInfo>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_country_code(): string;
        get_country_name(): string;
        get_providers(): MobileProvider[];
        ref(): CountryInfo;
        unref(): void;
    }

    abstract class MobileAccessMethod {
        static $gtype: GObject.GType<MobileAccessMethod>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_3gpp_apn(): string;
        get_dns(): string[];
        get_family(): MobileFamily;
        get_gateway(): string;
        get_name(): string;
        get_password(): string;
        get_username(): string;
        ref(): MobileAccessMethod;
        unref(): void;
    }

    abstract class MobileProvider {
        static $gtype: GObject.GType<MobileProvider>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_3gpp_mcc_mnc(): string[];
        get_cdma_sid(): number[];
        get_methods(): MobileAccessMethod[];
        get_name(): string;
        ref(): MobileProvider;
        unref(): void;
    }

    type MobileProvidersDatabaseClass = typeof MobileProvidersDatabase;
    abstract class MobileProvidersDatabasePrivate {
        static $gtype: GObject.GType<MobileProvidersDatabasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Network access method details.
     */
    class MobileWizardAccessMethod {
        static $gtype: GObject.GType<MobileWizardAccessMethod>;

        // Fields

        provider_name: string;
        plan_name: string;
        devtype: NM.DeviceModemCapabilities;
        username: string;
        password: string;
        gsm_apn: string;

        // Constructors

        _init(...args: any[]): void;
    }

    type MobileWizardClass = typeof MobileWizard;
    type VpnPasswordDialogClass = typeof VpnPasswordDialog;
    type WifiDialogClass = typeof WifiDialog;
    abstract class Ws {
        static $gtype: GObject.GType<Ws>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        adhoc_compatible(): boolean;
        hotspot_compatible(): boolean;
        validate(): boolean;
    }

    abstract class Ws8021x {
        static $gtype: GObject.GType<Ws8021x>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class Ws8021xClass {
        static $gtype: GObject.GType<Ws8021xClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsDynamicWep {
        static $gtype: GObject.GType<WsDynamicWep>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsDynamicWepClass {
        static $gtype: GObject.GType<WsDynamicWepClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsInterface {
        static $gtype: GObject.GType<WsInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsLeap {
        static $gtype: GObject.GType<WsLeap>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsLeapClass {
        static $gtype: GObject.GType<WsLeapClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsOwe {
        static $gtype: GObject.GType<WsOwe>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsOweClass {
        static $gtype: GObject.GType<WsOweClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsSae {
        static $gtype: GObject.GType<WsSae>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsSaeClass {
        static $gtype: GObject.GType<WsSaeClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWepKey {
        static $gtype: GObject.GType<WsWepKey>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWepKeyClass {
        static $gtype: GObject.GType<WsWepKeyClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWpaEap {
        static $gtype: GObject.GType<WsWpaEap>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWpaEapClass {
        static $gtype: GObject.GType<WsWpaEapClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWpaPsk {
        static $gtype: GObject.GType<WsWpaPsk>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WsWpaPskClass {
        static $gtype: GObject.GType<WsWpaPskClass>;

        // Constructors

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

export default NMA;

// END
