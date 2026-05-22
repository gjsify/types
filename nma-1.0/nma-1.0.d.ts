
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
     * @gir-type Enum
     * @since 1.8.0
     */
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


    /**
     * @gir-type Enum
     */
    enum MobileFamily {
        /**
         * Unknown or invalid network access method
         */
        UNKNOWN,
        /**
         * 3rd Generation Partnership Project (3GPP) network
         */
        "3GPP",
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
     * @returns `true` if correctly split and `mcc` and `mnc` are set; `false` otherwise.
     */
    function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string, string];

    /**
     * Returns secret flags corresponding to the selected password storage menu
     * in the attached icon
     * @param passwd_entry password {@link Gtk.Entry} which the password icon/menu is attached to
     * @returns secret flags corresponding to the active item in password menu
     */
    function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;

    /**
     * Adds a secondary icon and creates a popup menu for password entry.
     * The active menu item is set up according to initial_flags, or
     * from `setting`/`password_flags_name` (if they are not NULL).
     * If the `setting`/`password_flags_name` are not NULL, secret flags will
     * be automatically updated in the setting when menu is changed.
     * @param passwd_entry password {@link Gtk.Entry} which the icon is attached to
     * @param initial_flags initial secret flags to setup password menu from
     * @param setting {@link NM.Setting} containing the password, or NULL
     * @param password_flags_name name of the secret flags (like psk-flags), or NULL
     * @param with_not_required whether to include "Not required" menu item
     * @param ask_mode `true` if the entry is shown in ASK mode. That means,   while prompting for a password, contrary to being inside the   editor mode.   If `true`, the entry should be sensivive on selected "always-ask"   icon (this is e.f. for nm-applet asking for password), otherwise   not.   If `false`, it shall not be possible to select a different storage,   because we only prompt for a password, we cannot change the password   location.
     */
    function utils_setup_password_storage(passwd_entry: Gtk.Widget, initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;

    /**
     * Updates secret flags in the password storage popup menu and also
     * in the `setting` (if `setting` and `password_flags_name` are not NULL).
     * @param passwd_entry {@link Gtk.Entry} with the password
     * @param secret_flags secret flags to set
     * @param setting {@link NM.Setting} containing the password, or NULL
     * @param password_flags_name name of the secret flags (like psk-flags), or NULL
     */
    function utils_update_password_storage(passwd_entry: Gtk.Widget, secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;

    /**
     * @gir-type Callback
     */
    interface MobileWizardCallback {
        (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void;
    }

    namespace BarCode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            text: string;
        }
    }

    /**
     * @gir-type Class
     */
    class BarCode extends GObject.Object {
        static $gtype: GObject.GType<BarCode>;

        // Properties
        /**
         * @read-only
         * @default 0
         */
        get size(): number;

        /**
         * @write-only
         */
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BarCode.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BarCode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string): BarCode;

        // Signals
        /** @signal */
        connect<K extends keyof BarCode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BarCode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BarCode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BarCode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Draws the QR code onto the given context.
         * @param cr cairo context
         */
        draw(cr: cairo.Context): void;

        /**
         * @returns the side of a QR code square.
         */
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
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            connection: NM.Connection;
        }
    }

    /**
     * @gir-type Class
     */
    class BarCodeWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BarCodeWidget>;

        // Properties
        get connection(): NM.Connection;
        set connection(val: NM.Connection);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BarCodeWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BarCodeWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCodeWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCodeWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BarCodeWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace CertChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            /**
             * Emitted when the certificate password needs validation. The handlers
             * can indicate that the password is invalid by returning an error, which blocks further
             * signal processing and causes a call to `nma_cert_chooser_validate()`
             * to fail.
             * @signal
             * @since 1.8.0
             * @run-last
             */
            "cert-password-validate": () => GLib.Error;
            /**
             * Emitted when the certificate needs validation. The handlers can indicate that
             * the certificate is invalid by returning an error, which blocks further
             * signal processing and causes a call to `nma_cert_chooser_validate()`
             * to fail.
             * @signal
             * @since 1.8.0
             * @run-last
             */
            "cert-validate": () => GLib.Error;
            /**
             * Emitted when anything changes in the certificate chooser, be it a certificate,
             * a key or associated passwords.
             * @signal
             * @since 1.8.0
             * @run-last
             */
            changed: () => void;
            /**
             * Emitted when the key password needs validation. The handlers can indicate
             * that the password is invalid by returning an error, which blocks further
             * signal processing and causes a call to `nma_cert_chooser_validate()`
             * to fail.
             * @signal
             * @since 1.8.0
             * @run-last
             */
            "key-password-validate": () => GLib.Error;
            /**
             * Emitted when the key needs validation. The handlers can indicate that
             * the key is invalid by returning an error, which blocks further
             * signal processing and causes a call to `nma_cert_chooser_validate()`
             * to fail.
             * @signal
             * @since 1.8.0
             * @run-last
             */
            "key-validate": () => GLib.Error;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            flags: number;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class CertChooser extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<CertChooser>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        set flags(val: number);

        /**
         * @construct-only
         * @default null
         */
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CertChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, flags: CertChooserFlags): CertChooser;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof CertChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CertChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CertChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * `nma_utils_menu_to_secret_flags()` for the certificate password
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
         * `nma_utils_menu_to_secret_flags()` for the key password
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
        set_cert(value: string, scheme: NM.Setting8021xCKScheme): void;

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
        set_key(value: string, scheme: NM.Setting8021xCKScheme): void;

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
         * This method basically calls `nma_utils_setup_password_storage()`
         * on the certificate password entry, in case one is present.
         * @param initial_flags initial secret flags to setup password menu from
         * @param setting {@link NM.Setting} containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         * @param with_not_required whether to include "Not required" menu item
         * @param ask_mode `true` if the entry is shown in ASK mode
         */
        setup_cert_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;

        /**
         * This method basically calls `nma_utils_setup_password_storage()`
         * on the key password entry, in case one is present.
         * @param initial_flags initial secret flags to setup password menu from
         * @param setting {@link NM.Setting} containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         * @param with_not_required whether to include "Not required" menu item
         * @param ask_mode `true` if the entry is shown in ASK mode
         */
        setup_key_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;

        /**
         * This method basically calls `nma_utils_update_password_storage()`
         * on the certificate password entry, in case one is present.
         * @param secret_flags secret flags to set
         * @param setting {@link NM.Setting} containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         */
        update_cert_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;

        /**
         * This method basically calls `nma_utils_update_password_storage()`
         * on the key password entry, in case one is present.
         * @param secret_flags secret flags to set
         * @param setting {@link NM.Setting} containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         */
        update_key_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;

        /**
         * Validates whether the chosen values make sense. The users can do further
         * validation by subscribing to the "*-changed" signals and returning an
         * error themselves.
         * @returns `true` if validation passes, `false` otherwise
         */
        validate(): boolean;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace MobileProvidersDatabase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::country-codes": (pspec: GObject.ParamSpec) => void;
            "notify::service-providers": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            country_codes: string;
            countryCodes: string;
            service_providers: string;
            serviceProviders: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MobileProvidersDatabase extends GObject.Object implements Gio.AsyncInitable<MobileProvidersDatabase>, Gio.Initable {
        static $gtype: GObject.GType<MobileProvidersDatabase>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get country_codes(): string;

        /**
         * @construct-only
         * @default null
         */
        get countryCodes(): string;

        /**
         * @construct-only
         * @default null
         */
        get service_providers(): string;

        /**
         * @construct-only
         * @default null
         */
        get serviceProviders(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MobileProvidersDatabase.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MobileProvidersDatabase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null): MobileProvidersDatabase;

        // Signals
        /** @signal */
        connect<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileProvidersDatabase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileProvidersDatabase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MobileProvidersDatabase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param country_codes Path to the country codes file.
         * @param service_providers Path to the service providers file.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null): void;

        // Methods
        dump(): void;

        /**
         * @returns a  hash table where keys are country names `gchar` and values are {@link NMA.CountryInfo}.
         */
        get_countries(): { [key: string]: CountryInfo };

        /**
         * @param mccmnc the MCC/MNC string to look for.
         * @returns a {@link NMA.MobileProvider} or `null` if not found.
         */
        lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;

        /**
         * @param sid the SID to look for.
         * @returns a {@link NMA.MobileProvider}, or `null` if not found.
         */
        lookup_cdma_sid(sid: number): MobileProvider;

        /**
         * @param country_code the country code string to look for.
         * @returns a {@link NMA.CountryInfo} or `null` if not found.
         */
        lookup_country(country_code: string): CountryInfo;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace MobileWizard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MobileWizard extends GObject.Object {
        static $gtype: GObject.GType<MobileWizard>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MobileWizard.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MobileWizard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MobileWizard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileWizard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MobileWizard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileWizard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MobileWizard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MobileWizard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        destroy(): void;

        present(): void;
    }


    namespace VpnPasswordDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class VpnPasswordDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<VpnPasswordDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VpnPasswordDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VpnPasswordDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, message: string, password: string): VpnPasswordDialog;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VpnPasswordDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VpnPasswordDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VpnPasswordDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        focus_password(): void;

        focus_password_secondary(): void;

        focus_password_ternary(): void;

        get_password(): string;

        get_password_secondary(): string;

        get_password_ternary(): string;

        run_and_block(): boolean;

        /**
         * @param password 
         */
        set_password(password: string): void;

        /**
         * @param label 
         */
        set_password_label(label: string): void;

        /**
         * @param password_secondary 
         */
        set_password_secondary(password_secondary: string): void;

        /**
         * @param label 
         */
        set_password_secondary_label(label: string): void;

        /**
         * @param password_ternary 
         */
        set_password_ternary(password_ternary: string): void;

        /**
         * @param label 
         */
        set_password_ternary_label(label: string): void;

        /**
         * @param show 
         */
        set_show_password(show: boolean): void;

        /**
         * @param show 
         */
        set_show_password_secondary(show: boolean): void;

        /**
         * @param show 
         */
        set_show_password_ternary(show: boolean): void;
    }


    namespace WifiDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WifiDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WifiDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WifiDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WifiDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](client: NM.Client, connection: NM.Connection, device: NM.Device, ap: NM.AccessPoint, secrets_only: boolean): WifiDialog;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        static new_for_create(client: NM.Client): WifiDialog;

        static new_for_hidden(client: NM.Client): WifiDialog;

        static new_for_other(client: NM.Client): WifiDialog;

        static new_for_secrets(client: NM.Client, connection: NM.Connection, secrets_setting_name: string, secrets_hints: string): WifiDialog;

        // Signals
        /** @signal */
        connect<K extends keyof WifiDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WifiDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WifiDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WifiDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WifiDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WifiDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_connection(): [NM.Connection, NM.Device, NM.AccessPoint];

        get_nag_ignored(): boolean;

        nag_user(): Gtk.Widget;

        /**
         * @param ignored 
         */
        set_nag_ignored(ignored: boolean): void;
    }


    /**
     * @gir-type Alias
     */
    type BarCodeClass = typeof BarCode;

    /**
     * @gir-type Alias
     */
    type BarCodeWidgetClass = typeof BarCodeWidget;

    /**
     * @gir-type Alias
     */
    type CertChooserClass = typeof CertChooser;

    /**
     * @gir-type Struct
     */
    abstract class CountryInfo {
        static $gtype: GObject.GType<CountryInfo>;

        // Methods
        /**
         * @returns the code of the country or `null` for "Unknown".
         */
        get_country_code(): string;

        /**
         * @returns the name of the country.
         */
        get_country_name(): string;

        /**
         * @returns the  list of {@link NMA.MobileProvider} this country exposes.
         */
        get_providers(): MobileProvider[];

        ref(): CountryInfo;

        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class MobileAccessMethod {
        static $gtype: GObject.GType<MobileAccessMethod>;

        // Methods
        /**
         * @returns the 3GPP APN.
         */
        get_3gpp_apn(): string;

        /**
         * @returns the list of DNS.
         */
        get_dns(): string[];

        /**
         * @returns a {@link NMA.MobileFamily}.
         */
        get_family(): MobileFamily;

        /**
         * @returns the gateway.
         */
        get_gateway(): string;

        /**
         * @returns the name of the method.
         */
        get_name(): string;

        /**
         * @returns the password.
         */
        get_password(): string;

        /**
         * @returns the username.
         */
        get_username(): string;

        ref(): MobileAccessMethod;

        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class MobileProvider {
        static $gtype: GObject.GType<MobileProvider>;

        // Methods
        /**
         * @returns a  list of strings with the MCC and MNC codes this provider exposes.
         */
        get_3gpp_mcc_mnc(): string[];

        /**
         * @returns the  list of CDMA SIDs this provider exposes
         */
        get_cdma_sid(): number[];

        /**
         * @returns the  list of {@link NMA.MobileAccessMethod} this provider exposes.
         */
        get_methods(): MobileAccessMethod[];

        /**
         * @returns the name of the provider.
         */
        get_name(): string;

        ref(): MobileProvider;

        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type MobileProvidersDatabaseClass = typeof MobileProvidersDatabase;

    /**
     * @gir-type Struct
     */
    abstract class MobileProvidersDatabasePrivate {
        static $gtype: GObject.GType<MobileProvidersDatabasePrivate>;
    }


    /**
     * Network access method details.
     * @gir-type Struct
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
    }


    /**
     * @gir-type Alias
     */
    type MobileWizardClass = typeof MobileWizard;

    /**
     * @gir-type Alias
     */
    type VpnPasswordDialogClass = typeof VpnPasswordDialog;

    /**
     * @gir-type Alias
     */
    type WifiDialogClass = typeof WifiDialog;

    /**
     * @gir-type Struct
     */
    abstract class Ws {
        static $gtype: GObject.GType<Ws>;

        // Methods
        adhoc_compatible(): boolean;

        hotspot_compatible(): boolean;

        validate(): boolean;
    }


    /**
     * @gir-type Struct
     */
    abstract class Ws8021x {
        static $gtype: GObject.GType<Ws8021x>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Ws8021xClass {
        static $gtype: GObject.GType<Ws8021xClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsDynamicWep {
        static $gtype: GObject.GType<WsDynamicWep>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsDynamicWepClass {
        static $gtype: GObject.GType<WsDynamicWepClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsInterface {
        static $gtype: GObject.GType<WsInterface>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsLeap {
        static $gtype: GObject.GType<WsLeap>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsLeapClass {
        static $gtype: GObject.GType<WsLeapClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsOwe {
        static $gtype: GObject.GType<WsOwe>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsOweClass {
        static $gtype: GObject.GType<WsOweClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsSae {
        static $gtype: GObject.GType<WsSae>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsSaeClass {
        static $gtype: GObject.GType<WsSaeClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWepKey {
        static $gtype: GObject.GType<WsWepKey>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWepKeyClass {
        static $gtype: GObject.GType<WsWepKeyClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWpaEap {
        static $gtype: GObject.GType<WsWpaEap>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWpaEapClass {
        static $gtype: GObject.GType<WsWpaEapClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWpaPsk {
        static $gtype: GObject.GType<WsWpaPsk>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WsWpaPskClass {
        static $gtype: GObject.GType<WsWpaPskClass>;
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
