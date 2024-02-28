/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nma-1.0-ambient.d.ts';
import './nma-1.0-import.d.ts';
/**
 * NMA-1.0
 */

import type NM from '@girs/nm-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace NMA {
    /**
     * Flags that controls what is the certificate chooser button able to pick.
     * Currently only local files are supported, but might be extended to use URIs,
     * such as PKCS\#11 certificate URIs in future as well.
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
    function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): boolean;
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
        initial_flags: NM.SettingSecretFlags,
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
        secret_flags: NM.SettingSecretFlags,
        setting: NM.Setting,
        password_flags_name: string,
    ): void;
    interface MobileWizardCallback {
        (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void;
    }
    module BarCode {
        // Constructor properties interface
    }

    class BarCode extends GObject.Object {
        // Own properties of NMA-1.0.BarCode

        readonly size: number;
        text: string;

        // Constructors of NMA-1.0.BarCode

        static ['new'](text: string): BarCode;

        // Owm methods of NMA-1.0.BarCode

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

    module BarCodeWidget {
        // Constructor properties interface
    }

    class BarCodeWidget extends Gtk.Box {
        // Own properties of NMA-1.0.BarCodeWidget

        connection: NM.Connection;
    }

    module CertChooser {
        // Signal callback interfaces

        interface CertPasswordValidate {
            (): GLib.Error;
        }

        interface CertValidate {
            (): GLib.Error;
        }

        interface Changed {
            (): void;
        }

        interface KeyPasswordValidate {
            (): GLib.Error;
        }

        interface KeyValidate {
            (): GLib.Error;
        }

        // Constructor properties interface
    }

    class CertChooser extends Gtk.Grid {
        // Own properties of NMA-1.0.CertChooser

        flags: number;
        title: string;

        // Constructors of NMA-1.0.CertChooser

        static ['new'](title: string, flags: CertChooserFlags): CertChooser;

        // Owm methods of NMA-1.0.CertChooser

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
        get_cert(): string | null;
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
        get_key(): string | null;
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
         * This method basically calls nma_utils_setup_password_storage()
         * on the certificate password entry, in case one is present.
         * @param initial_flags initial secret flags to setup password menu from
         * @param setting #NMSetting containing the password, or NULL
         * @param password_flags_name name of the secret flags (like psk-flags), or NULL
         * @param with_not_required whether to include "Not required" menu item
         * @param ask_mode %TRUE if the entry is shown in ASK mode
         */
        setup_cert_password_storage(
            initial_flags: NM.SettingSecretFlags,
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
            initial_flags: NM.SettingSecretFlags,
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
            secret_flags: NM.SettingSecretFlags,
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
            secret_flags: NM.SettingSecretFlags,
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
    }

    module MobileProvidersDatabase {
        // Constructor properties interface
    }

    class MobileProvidersDatabase extends GObject.Object {
        // Own properties of NMA-1.0.MobileProvidersDatabase

        country_codes: string;
        countryCodes: string;
        service_providers: string;
        serviceProviders: string;

        // Constructors of NMA-1.0.MobileProvidersDatabase

        static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;

        static new_sync(
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): MobileProvidersDatabase;

        // Owm methods of NMA-1.0.MobileProvidersDatabase

        static ['new'](
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null,
        ): void;

        // Owm methods of NMA-1.0.MobileProvidersDatabase

        dump(): void;
        get_countries(): GLib.HashTable<string, CountryInfo>;
        lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
        lookup_cdma_sid(sid: number): MobileProvider;
        lookup_country(country_code: string): CountryInfo;
    }

    module MobileWizard {
        // Constructor properties interface
    }

    class MobileWizard extends GObject.Object {
        // Owm methods of NMA-1.0.MobileWizard

        destroy(): void;
        present(): void;
    }

    module VpnPasswordDialog {
        // Constructor properties interface
    }

    class VpnPasswordDialog extends Gtk.Dialog {
        // Constructors of NMA-1.0.VpnPasswordDialog

        static ['new'](title: string, message: string, password: string): VpnPasswordDialog;

        // Owm methods of NMA-1.0.VpnPasswordDialog

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
    }

    module WifiDialog {
        // Constructor properties interface
    }

    class WifiDialog extends Gtk.Dialog {
        // Constructors of NMA-1.0.WifiDialog

        static ['new'](
            client: NM.Client,
            connection: NM.Connection,
            device: NM.Device,
            ap: NM.AccessPoint,
            secrets_only: boolean,
        ): WifiDialog;

        static new_for_create(client: NM.Client): WifiDialog;

        static new_for_hidden(client: NM.Client): WifiDialog;

        static new_for_other(client: NM.Client): WifiDialog;

        static new_for_secrets(
            client: NM.Client,
            connection: NM.Connection,
            secrets_setting_name: string,
            secrets_hints: string,
        ): WifiDialog;

        // Owm methods of NMA-1.0.WifiDialog

        get_connection(): NM.Connection;
        get_nag_ignored(): boolean;
        nag_user(): Gtk.Widget;
        set_nag_ignored(ignored: boolean): void;
    }

    class BarCodeClass {}

    class BarCodeWidgetClass {}

    class CertChooserClass {}

    class CountryInfo {
        // Owm methods of NMA-1.0.CountryInfo

        get_country_code(): string;
        get_country_name(): string;
        get_providers(): MobileProvider[];
        ref(): CountryInfo;
        unref(): void;
    }

    class MobileAccessMethod {
        // Owm methods of NMA-1.0.MobileAccessMethod

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

    class MobileProvider {
        // Owm methods of NMA-1.0.MobileProvider

        get_3gpp_mcc_mnc(): string[];
        get_cdma_sid(): number[];
        get_methods(): MobileAccessMethod[];
        get_name(): string;
        ref(): MobileProvider;
        unref(): void;
    }

    class MobileProvidersDatabaseClass {}

    class MobileProvidersDatabasePrivate {}

    /**
     * Network access method details.
     */
    class MobileWizardAccessMethod {
        // Own fields of NMA-1.0.MobileWizardAccessMethod

        provider_name: string;
        plan_name: string;
        devtype: NM.DeviceModemCapabilities;
        username: string;
        password: string;
        gsm_apn: string;
    }

    class MobileWizardClass {}

    class VpnPasswordDialogClass {}

    class WifiDialogClass {}

    class Ws {
        // Owm methods of NMA-1.0.Ws

        adhoc_compatible(): boolean;
        hotspot_compatible(): boolean;
        validate(): boolean;
    }

    class Ws8021x {}

    class Ws8021xClass {}

    class WsDynamicWep {}

    class WsDynamicWepClass {}

    class WsInterface {}

    class WsLeap {}

    class WsLeapClass {}

    class WsOwe {}

    class WsOweClass {}

    class WsSae {}

    class WsSaeClass {}

    class WsWepKey {}

    class WsWepKeyClass {}

    class WsWpaEap {}

    class WsWpaEapClass {}

    class WsWpaPsk {}

    class WsWpaPskClass {}

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
