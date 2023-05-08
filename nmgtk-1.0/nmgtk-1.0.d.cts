
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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

export enum MobileFamily {
    UNKNOWN,
    TODO_3GPP,
    CDMA,
}
/**
 * Splits the input MCCMNC string into separate MCC and MNC strings.
 * @param mccmnc input MCCMNC string.
 * @returns %TRUE if correctly split and @mcc and @mnc are set; %FALSE otherwise.
 */
export function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string | null): [ /* returnType */ boolean, /* mcc */ string | null, /* mnc */ string | null ]
/**
 * Generates a list of short-ish unique presentation names for the
 * devices in `devices`.
 * @param devices a set of #NMDevice
 * @returns the device names
 */
export function utils_disambiguate_device_names(devices: NMClient.Device[]): string[]
/**
 * Returns the name that nma_utils_disambiguate_device_names() would
 * return for the virtual device that would be created for `connection`.
 * Eg, "VLAN (eth1.1)".
 * @param connection an #NMConnection for a virtual device type
 * @returns the name of @connection's device
 */
export function utils_get_connection_device_name(connection: NetworkManager.Connection): string | null
/**
 * Gets a description of `device,` incorporating the results of
 * nma_utils_get_device_vendor() and
 * nma_utils_get_device_product().
 * @param device an #NMDevice
 * @returns a description of @device. If either the vendor or the   product name is unknown, this returns the interface name.
 */
export function utils_get_device_description(device: NMClient.Device): string | null
/**
 * Gets a "generic" name for the type of `device`.
 * @param device an #NMDevice
 * @returns @device's generic type name
 */
export function utils_get_device_generic_type_name(device: NMClient.Device): string | null
/**
 * Gets a cleaned-up version of #NMDevice:product for `device`. This
 * removes strings like "Wireless LAN Adapter" that would just take up
 * unnecessary space in the UI.
 * @param device an #NMDevice
 * @returns a cleaned-up product string, or %NULL if the product name   is not known
 */
export function utils_get_device_product(device: NMClient.Device): string | null
/**
 * Gets a specific name for the type of `device`.
 * @param device an #NMDevice
 * @returns @device's generic type name
 */
export function utils_get_device_type_name(device: NMClient.Device): string | null
/**
 * Gets a cleaned-up version of #NMDevice:vendor for `device`. This
 * removes strings like "Inc." that would just take up unnecessary
 * space in the UI.
 * @param device an #NMDevice
 * @returns a cleaned-up vendor string, or %NULL if the vendor is   not known
 */
export function utils_get_device_vendor(device: NMClient.Device): string | null
/**
 * Returns secret flags corresponding to the selected password storage menu
 * in the attached icon
 * @param passwd_entry password #GtkEntry which the password icon/menu is attached to
 * @returns secret flags corresponding to the active item in password menu
 */
export function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NetworkManager.SettingSecretFlags
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
export function utils_setup_password_storage(passwd_entry: Gtk.Widget, initial_flags: NetworkManager.SettingSecretFlags, setting: NetworkManager.Setting, password_flags_name: string | null, with_not_required: boolean, sensitive_ask: boolean): void
/**
 * Updates secret flags in the password storage popup menu and also
 * in the `setting` (if `setting` and `password_flags_name` are not NULL).
 * @param passwd_entry #GtkEntry with the password
 * @param secret_flags secret flags to set
 * @param setting #NMSetting containing the password, or NULL
 * @param password_flags_name name of the secret flags (like psk-flags), or NULL
 */
export function utils_update_password_storage(passwd_entry: Gtk.Widget, secret_flags: NetworkManager.SettingSecretFlags, setting: NetworkManager.Setting, password_flags_name: string | null): void
export interface MobileWizardCallback {
    (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void
}
export module MobileProvidersDatabase {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of NMGtk-1.0.NMGtk.MobileProvidersDatabase

        country_codes?: string | null
        service_providers?: string | null
    }

}

export interface MobileProvidersDatabase extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    readonly country_codes: string | null
    readonly service_providers: string | null

    // Own fields of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    parent: GObject.Object
    priv: MobileProvidersDatabasePrivate

    // Owm methods of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    dump(): void
    get_countries(): GLib.HashTable
    lookup_3gpp_mcc_mnc(mccmnc: string | null): MobileProvider
    lookup_cdma_sid(sid: number): MobileProvider
    lookup_country(country_code: string | null): CountryInfo

    // Class property signals of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    connect(sigName: "notify::country-codes", callback: (($obj: MobileProvidersDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-codes", callback: (($obj: MobileProvidersDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country-codes", ...args: any[]): void
    connect(sigName: "notify::service-providers", callback: (($obj: MobileProvidersDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-providers", callback: (($obj: MobileProvidersDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-providers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MobileProvidersDatabase extends GObject.Object {

    // Own properties of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    static name: string
    static $gtype: GObject.GType<MobileProvidersDatabase>

    // Constructors of NMGtk-1.0.NMGtk.MobileProvidersDatabase

    constructor(config?: MobileProvidersDatabase.ConstructorProperties) 
    static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase
    static new_sync(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null): MobileProvidersDatabase
    _init(config?: MobileProvidersDatabase.ConstructorProperties): void
    static new(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null): void
}

export module VpnPasswordDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface VpnPasswordDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of NMGtk-1.0.NMGtk.VpnPasswordDialog

    parent: Gtk.Dialog & Gtk.Container

    // Owm methods of NMGtk-1.0.NMGtk.VpnPasswordDialog

    focus_password(): void
    focus_password_secondary(): void
    focus_password_ternary(): void
    get_password(): string | null
    get_password_secondary(): string | null
    get_password_ternary(): string | null
    run_and_block(): boolean
    set_password(password: string | null): void
    set_password_label(label: string | null): void
    set_password_secondary(password_secondary: string | null): void
    set_password_secondary_label(label: string | null): void
    set_password_ternary(password_ternary: string | null): void
    set_password_ternary_label(label: string | null): void
    set_show_password(show: boolean): void
    set_show_password_secondary(show: boolean): void
    set_show_password_ternary(show: boolean): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of NMGtk-1.0.NMGtk.VpnPasswordDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: VpnPasswordDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class VpnPasswordDialog extends Gtk.Dialog {

    // Own properties of NMGtk-1.0.NMGtk.VpnPasswordDialog

    static name: string
    static $gtype: GObject.GType<VpnPasswordDialog>

    // Constructors of NMGtk-1.0.NMGtk.VpnPasswordDialog

    constructor(config?: VpnPasswordDialog.ConstructorProperties) 
    constructor(title: string | null, message: string | null, password: string | null) 
    static new(title: string | null, message: string | null, password: string | null): VpnPasswordDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: VpnPasswordDialog.ConstructorProperties): void
}

export module WifiDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface WifiDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of NMGtk-1.0.NMGtk.WifiDialog

    parent: Gtk.Dialog & Gtk.Container

    // Owm methods of NMGtk-1.0.NMGtk.WifiDialog

    get_connection(): [ /* returnType */ NetworkManager.Connection, /* device */ NMClient.Device, /* ap */ NMClient.AccessPoint ]
    get_nag_ignored(): boolean
    nag_user(): Gtk.Widget
    set_nag_ignored(ignored: boolean): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Class property signals of NMGtk-1.0.NMGtk.WifiDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WifiDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WifiDialog extends Gtk.Dialog {

    // Own properties of NMGtk-1.0.NMGtk.WifiDialog

    static name: string
    static $gtype: GObject.GType<WifiDialog>

    // Constructors of NMGtk-1.0.NMGtk.WifiDialog

    constructor(config?: WifiDialog.ConstructorProperties) 
    constructor(client: NMClient.Client, settings: NMClient.RemoteSettings, connection: NetworkManager.Connection, device: NMClient.Device, ap: NMClient.AccessPoint, secrets_only: boolean) 
    static new(client: NMClient.Client, settings: NMClient.RemoteSettings, connection: NetworkManager.Connection, device: NMClient.Device, ap: NMClient.AccessPoint, secrets_only: boolean): WifiDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    static new_for_create(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog
    static new_for_hidden(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog
    static new_for_other(client: NMClient.Client, settings: NMClient.RemoteSettings): WifiDialog
    _init(config?: WifiDialog.ConstructorProperties): void
}

export interface CountryInfo {

    // Owm methods of NMGtk-1.0.NMGtk.CountryInfo

    get_country_code(): string | null
    get_country_name(): string | null
    get_providers(): MobileProvider[]
    ref(): CountryInfo
    unref(): void
}

export class CountryInfo {

    // Own properties of NMGtk-1.0.NMGtk.CountryInfo

    static name: string
}

export interface MobileAccessMethod {

    // Owm methods of NMGtk-1.0.NMGtk.MobileAccessMethod

    get_3gpp_apn(): string | null
    get_dns(): string[]
    get_family(): MobileFamily
    get_gateway(): string | null
    get_name(): string | null
    get_password(): string | null
    get_username(): string | null
    ref(): MobileAccessMethod
    unref(): void
}

export class MobileAccessMethod {

    // Own properties of NMGtk-1.0.NMGtk.MobileAccessMethod

    static name: string
}

export interface MobileProvider {

    // Owm methods of NMGtk-1.0.NMGtk.MobileProvider

    get_3gpp_mcc_mnc(): string[]
    get_cdma_sid(): number[]
    get_methods(): MobileAccessMethod[]
    get_name(): string | null
    ref(): MobileProvider
    unref(): void
}

export class MobileProvider {

    // Own properties of NMGtk-1.0.NMGtk.MobileProvider

    static name: string
}

export interface MobileProvidersDatabaseClass {

    // Own fields of NMGtk-1.0.NMGtk.MobileProvidersDatabaseClass

    parent: GObject.ObjectClass
}

export abstract class MobileProvidersDatabaseClass {

    // Own properties of NMGtk-1.0.NMGtk.MobileProvidersDatabaseClass

    static name: string
}

export interface MobileProvidersDatabasePrivate {
}

export class MobileProvidersDatabasePrivate {

    // Own properties of NMGtk-1.0.NMGtk.MobileProvidersDatabasePrivate

    static name: string
}

export interface MobileWizard {

    // Owm methods of NMGtk-1.0.NMGtk.MobileWizard

    destroy(): void
    present(): void
}

export class MobileWizard {

    // Own properties of NMGtk-1.0.NMGtk.MobileWizard

    static name: string
}

export interface MobileWizardAccessMethod {

    // Own fields of NMGtk-1.0.NMGtk.MobileWizardAccessMethod

    provider_name: string | null
    plan_name: string | null
    devtype: NetworkManager.DeviceModemCapabilities
    username: string | null
    password: string | null
    gsm_apn: string | null
}

export class MobileWizardAccessMethod {

    // Own properties of NMGtk-1.0.NMGtk.MobileWizardAccessMethod

    static name: string
}

export interface VpnPasswordDialogClass {

    // Own fields of NMGtk-1.0.NMGtk.VpnPasswordDialogClass

    parent_class: Gtk.DialogClass
}

export abstract class VpnPasswordDialogClass {

    // Own properties of NMGtk-1.0.NMGtk.VpnPasswordDialogClass

    static name: string
}

export interface WifiDialogClass {

    // Own fields of NMGtk-1.0.NMGtk.WifiDialogClass

    parent: Gtk.DialogClass
}

export abstract class WifiDialogClass {

    // Own properties of NMGtk-1.0.NMGtk.WifiDialogClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END