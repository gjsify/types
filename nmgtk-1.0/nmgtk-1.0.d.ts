/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nmgtk-1.0-ambient.d.ts';
import './nmgtk-1.0-import.d.ts';
/**
 * NMGtk-1.0
 */

import type NetworkManager from '@girs/networkmanager-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type DBusGLib from '@girs/dbusglib-1.0';
import type NMClient from '@girs/nmclient-1.0';
import type Gio from '@girs/gio-2.0';
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

export namespace NMGtk {
    enum MobileFamily {
        UNKNOWN,
        '3GPP',
        CDMA,
    }
    /**
     * Splits the input MCCMNC string into separate MCC and MNC strings.
     * @param mccmnc input MCCMNC string.
     * @returns %TRUE if correctly split and @mcc and @mnc are set; %FALSE otherwise.
     */
    function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): boolean;
    /**
     * Generates a list of short-ish unique presentation names for the
     * devices in `devices`.
     * @param devices a set of #NMDevice
     * @returns the device names
     */
    function utils_disambiguate_device_names(devices: NMClient.Device[]): string[];
    /**
     * Returns the name that nma_utils_disambiguate_device_names() would
     * return for the virtual device that would be created for `connection`.
     * Eg, "VLAN (eth1.1)".
     * @param connection an #NMConnection for a virtual device type
     * @returns the name of @connection's device
     */
    function utils_get_connection_device_name(connection: NetworkManager.Connection): string;
    /**
     * Gets a description of `device,` incorporating the results of
     * nma_utils_get_device_vendor() and
     * nma_utils_get_device_product().
     * @param device an #NMDevice
     * @returns a description of @device. If either the vendor or the   product name is unknown, this returns the interface name.
     */
    function utils_get_device_description(device: NMClient.Device): string;
    /**
     * Gets a "generic" name for the type of `device`.
     * @param device an #NMDevice
     * @returns @device's generic type name
     */
    function utils_get_device_generic_type_name(device: NMClient.Device): string;
    /**
     * Gets a cleaned-up version of #NMDevice:product for `device`. This
     * removes strings like "Wireless LAN Adapter" that would just take up
     * unnecessary space in the UI.
     * @param device an #NMDevice
     * @returns a cleaned-up product string, or %NULL if the product name   is not known
     */
    function utils_get_device_product(device: NMClient.Device): string;
    /**
     * Gets a specific name for the type of `device`.
     * @param device an #NMDevice
     * @returns @device's generic type name
     */
    function utils_get_device_type_name(device: NMClient.Device): string;
    /**
     * Gets a cleaned-up version of #NMDevice:vendor for `device`. This
     * removes strings like "Inc." that would just take up unnecessary
     * space in the UI.
     * @param device an #NMDevice
     * @returns a cleaned-up vendor string, or %NULL if the vendor is   not known
     */
    function utils_get_device_vendor(device: NMClient.Device): string;
    /**
     * Returns secret flags corresponding to the selected password storage menu
     * in the attached icon
     * @param passwd_entry password #GtkEntry which the password icon/menu is attached to
     * @returns secret flags corresponding to the active item in password menu
     */
    function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NetworkManager.SettingSecretFlags;
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
     * @param sensitive_ask %TRUE if entry should be sensivive on selected "always-ask"   icon (this is e.f. for nm-applet asking for password)
     */
    function utils_setup_password_storage(
        passwd_entry: Gtk.Widget,
        initial_flags: NetworkManager.SettingSecretFlags,
        setting: NetworkManager.Setting,
        password_flags_name: string,
        with_not_required: boolean,
        sensitive_ask: boolean,
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
        secret_flags: NetworkManager.SettingSecretFlags,
        setting: NetworkManager.Setting,
        password_flags_name: string,
    ): void;
    interface MobileWizardCallback {
        (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void;
    }
    module MobileProvidersDatabase {
        // Constructor properties interface
    }

    class MobileProvidersDatabase extends GObject.Object {
        // Own properties of NMGtk-1.0.MobileProvidersDatabase

        country_codes: string;
        countryCodes: string;
        service_providers: string;
        serviceProviders: string;

        // Constructors of NMGtk-1.0.MobileProvidersDatabase

        static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;

        static new_sync(
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): MobileProvidersDatabase;

        // Owm methods of NMGtk-1.0.MobileProvidersDatabase

        static ['new'](
            country_codes?: string | null,
            service_providers?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null,
        ): void;

        // Owm methods of NMGtk-1.0.MobileProvidersDatabase

        dump(): void;
        get_countries(): GLib.HashTable<string, CountryInfo>;
        lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
        lookup_cdma_sid(sid: number): MobileProvider;
        lookup_country(country_code: string): CountryInfo;
    }

    module VpnPasswordDialog {
        // Constructor properties interface
    }

    class VpnPasswordDialog extends Gtk.Dialog {
        // Constructors of NMGtk-1.0.VpnPasswordDialog

        static ['new'](title: string, message: string, password: string): VpnPasswordDialog;

        // Owm methods of NMGtk-1.0.VpnPasswordDialog

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
        // Constructors of NMGtk-1.0.WifiDialog

        static ['new'](
            client: NMClient.Client,
            settings: NMClient.RemoteSettings,
            connection: NetworkManager.Connection,
            device: NMClient.Device,
            ap: NMClient.AccessPoint,
            secrets_only: boolean,
        ): WifiDialog;

        static new_for_create(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog;

        static new_for_hidden(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog;

        static new_for_other(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog;

        // Owm methods of NMGtk-1.0.WifiDialog

        get_connection(): NetworkManager.Connection;
        get_nag_ignored(): boolean;
        nag_user(): Gtk.Widget;
        set_nag_ignored(ignored: boolean): void;
    }

    class CountryInfo {
        // Owm methods of NMGtk-1.0.CountryInfo

        get_country_code(): string;
        get_country_name(): string;
        get_providers(): MobileProvider[];
        ref(): CountryInfo;
        unref(): void;
    }

    class MobileAccessMethod {
        // Owm methods of NMGtk-1.0.MobileAccessMethod

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
        // Owm methods of NMGtk-1.0.MobileProvider

        get_3gpp_mcc_mnc(): string[];
        get_cdma_sid(): number[];
        get_methods(): MobileAccessMethod[];
        get_name(): string;
        ref(): MobileProvider;
        unref(): void;
    }

    class MobileProvidersDatabaseClass {}

    class MobileProvidersDatabasePrivate {}

    class MobileWizard {
        // Owm methods of NMGtk-1.0.MobileWizard

        destroy(): void;
        present(): void;
    }

    class MobileWizardAccessMethod {
        // Own fields of NMGtk-1.0.MobileWizardAccessMethod

        provider_name: string;
        plan_name: string;
        devtype: NetworkManager.DeviceModemCapabilities;
        username: string;
        password: string;
        gsm_apn: string;
    }

    class VpnPasswordDialogClass {}

    class WifiDialogClass {}

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

export default NMGtk;
// END
