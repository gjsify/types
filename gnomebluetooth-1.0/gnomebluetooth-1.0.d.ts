
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomebluetooth-1.0-ambient.d.ts';
import './gnomebluetooth-1.0-import.d.ts';
/**
 * GnomeBluetooth-1.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace GnomeBluetooth {

/**
 * The category of a Bluetooth devices.
 */
enum Category {
    /**
     * all devices
     */
    ALL,
    /**
     * paired devices
     */
    PAIRED,
    /**
     * trusted devices
     */
    TRUSTED,
    /**
     * neither paired, nor trusted devices
     */
    NOT_PAIRED_OR_TRUSTED,
    /**
     * paired and/or trusted devices
     */
    PAIRED_OR_TRUSTED,
}
/**
 * A column identifier to pass to bluetooth_chooser_get_selected_device_info().
 */
enum Column {
    /**
     * a #GDBusProxy object
     */
    PROXY,
    /**
     * a #GDBusProxy object for DBus.Properties
     */
    PROPERTIES,
    /**
     * a string representing a Bluetooth address
     */
    ADDRESS,
    /**
     * a string to use for display (the name of the device, or its address if the name is not known). Only available for devices.
     */
    ALIAS,
    /**
     * a string representing the device or adapter's name
     */
    NAME,
    /**
     * the #BluetoothType of the device. Only available for devices.
     */
    TYPE,
    /**
     * a string representing the icon name for the device. Only available for devices.
     */
    ICON,
    /**
     * whether the adapter is the default one. Only available for adapters.
     */
    DEFAULT,
    /**
     * whether the device is paired to its parent adapter. Only available for devices.
     */
    PAIRED,
    /**
     * whether the device is trusted. Only available for devices.
     */
    TRUSTED,
    /**
     * whether the device is connected. Only available for devices.
     */
    CONNECTED,
    /**
     * whether the adapter is discoverable/visible. Only available for adapters.
     */
    DISCOVERABLE,
    /**
     * whether the adapter is discovering. Only available for adapters.
     */
    DISCOVERING,
    /**
     * whether the device does not support Bluetooth 2.1 Simple Secure Pairing. Only available for devices.
     */
    LEGACYPAIRING,
    /**
     * whether the adapter is powered. Only available for adapters.
     */
    POWERED,
    /**
     * an array of service names and #BluetoothStatus connection statuses.
     */
    SERVICES,
    /**
     * a string array of human-readable UUIDs.
     */
    UUIDS,
}
/**
 * The connection status of a service on a particular device. Note that `BLUETOOTH_STATUS_CONNECTING` and `BLUETOOTH_STATUS_PLAYING` might not be available for all services.
 */
enum Status {
    /**
     * whether the status has been set yet
     */
    INVALID,
    /**
     * whether the service is disconnected
     */
    DISCONNECTED,
    /**
     * whether the service is connected
     */
    CONNECTED,
    /**
     * whether the service is connecting
     */
    CONNECTING,
    /**
     * whether the service is playing (only used by the audio service)
     */
    PLAYING,
}
/**
 * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and %BLUETOOTH_TYPE_AUDIO
 * @bitfield 
 */
enum Type {
    /**
     * any device, or a device of an unknown type
     */
    ANY,
    /**
     * a telephone (usually a cell/mobile phone)
     */
    PHONE,
    /**
     * a modem
     */
    MODEM,
    /**
     * a computer, can be a laptop, a wearable computer, etc.
     */
    COMPUTER,
    /**
     * a network device, such as a router
     */
    NETWORK,
    /**
     * a headset (usually a hands-free device)
     */
    HEADSET,
    /**
     * headphones (covers two ears)
     */
    HEADPHONES,
    /**
     * another type of audio device
     */
    OTHER_AUDIO,
    /**
     * a keyboard
     */
    KEYBOARD,
    /**
     * a mouse
     */
    MOUSE,
    /**
     * a camera (still or moving)
     */
    CAMERA,
    /**
     * a printer
     */
    PRINTER,
    /**
     * a joypad, joystick, or other game controller
     */
    JOYPAD,
    /**
     * a drawing tablet
     */
    TABLET,
    /**
     * a video device, such as a webcam
     */
    VIDEO,
    /**
     * a remote control
     */
    REMOTE_CONTROL,
    /**
     * a scanner
     */
    SCANNER,
    /**
     * a display
     */
    DISPLAY,
    /**
     * a wearable computer
     */
    WEARABLE,
    /**
     * a toy or game
     */
    TOY,
}
/**
 * A convenience value used to select the first device regardless of its address.
 */
const CHOOSER_COMBO_FIRST_DEVICE: string | null
/**
 * Use this value to select any Bluetooth audio device where a #BluetoothType enum is required.
 */
const TYPE_AUDIO: number
/**
 * Use this value to select any Bluetooth input device where a #BluetoothType enum is required.
 */
const TYPE_INPUT: number
const UUID_A2DP: number
const UUID_A2DP_SINK: number
const UUID_A2DP_SOURCE: number
const UUID_AVRCP_CONTROL: number
const UUID_AVRCP_TARGET: number
const UUID_DUN: number
const UUID_FTP: number
const UUID_GENERIC_AUDIO: number
const UUID_GENERIC_NET: number
const UUID_HFP_AG: number
const UUID_HFP_HF: number
const UUID_HID: number
const UUID_HSP: number
const UUID_HSP_AG: number
const UUID_IRMC: number
const UUID_OPP: number
const UUID_PAN_GN: number
const UUID_PAN_NAP: number
const UUID_PAN_PANU: number
const UUID_PBAP: number
const UUID_PNP: number
const UUID_SAP: number
const UUID_SDP: number
const UUID_SPP: number
const UUID_VDP_SOURCE: number
/**
 * Returns the type of device corresponding to the given `class` value.
 * @param class_ a Bluetooth device class
 * @returns a #BluetoothType.
 */
function class_to_type(class_: number): Type
/**
 * Start a GUI application for transfering files over Bluetooth.
 * @param address Remote device to use
 * @param alias Remote device's name
 */
function send_to_address(address: string | null, alias: string | null): void
/**
 * Returns a human-readable string representation of `type` usable for display to users. Do not free the return value.
 * The returned string is already translated with gettext().
 * @param type a #BluetoothType
 * @returns a string.
 */
function type_to_string(type: number): string | null
/**
 * Returns a string representing a human-readable (but not usable for display to users) version of the `uuid`. Do not free the return value.
 * @param uuid a string representing a Bluetooth UUID
 * @returns a string.
 */
function uuid_to_string(uuid: string | null): string | null
/**
 * Returns whether the string is a valid Bluetooth address. This does not contact the device in any way.
 * @param bdaddr a string representing a Bluetooth address
 * @returns %TRUE if the address is valid, %FALSE if not.
 */
function verify_address(bdaddr: string | null): boolean
module Chooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selected-device-activated`
     */
    interface SelectedDeviceActivatedSignalCallback {
        ($obj: Chooser, address: string | null): void
    }

    /**
     * Signal callback interface for `selected-device-changed`
     */
    interface SelectedDeviceChangedSignalCallback {
        ($obj: Chooser, address: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

        device_selected?: string | null
        device_service_filter?: string | null
        device_type_filter?: number | null
        has_internal_device_filter?: boolean | null
        show_connected?: boolean | null
        show_device_category?: boolean | null
        show_device_type?: boolean | null
        show_device_type_column?: boolean | null
        show_pairing?: boolean | null
        show_searching?: boolean | null
    }

}

interface Chooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    device_selected: string | null
    device_service_filter: string | null
    device_type_filter: number
    readonly has_internal_device_filter: boolean
    show_connected: boolean
    show_device_category: boolean
    show_device_type: boolean
    show_device_type_column: boolean
    show_pairing: boolean
    show_searching: boolean

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    parent: Gtk.Box & Gtk.Container

    // Owm methods of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    /**
     * Prints all the known attributes for the currently selected device
     * on the standard output. Useful for debugging.
     */
    dump_selected_device(): void
    /**
     * Returns the #GtkScrolledWindow object for the #BluetoothChooser.
     * This is useful to set a minimum height to the chooser using
     * gtk_scrolled_window_set_min_content_height() or to join the
     * chooser with a toolbar.
     * @returns a #GtkScrolledWindow object.
     */
    get_scrolled_window(): Gtk.Widget
    /**
     * Returns the Bluetooth address for the currently selected device.
     * @returns the Bluetooth address for the currently selected device, or %NULL.
     */
    get_selected_device(): string | null
    /**
     * Returns the icon name to use to represent the currently selected device.
     * @returns the icon name to use to represent the currently selected device, or %NULL.
     */
    get_selected_device_icon(): string | null
    /**
     * Returns whether the `value` has been set.
     * @param field The identifier for the field to get data for.
     * @param value An empty #GValue to set.
     * @returns %TRUE if the @value has been set.
     */
    get_selected_device_info(field: string | null, value: any): boolean
    /**
     * Returns whether the selected device is connected to this computer.
     * @returns whether the selected device is connected to this computer, will always be %FALSE if no devices are selected.
     */
    get_selected_device_is_connected(): boolean
    /**
     * Returns the name for the currently selected device.
     * @returns the name for the currently selected device, or %NULL.
     */
    get_selected_device_name(): string | null
    /**
     * Returns the #BluetoothType of the device selected.
     * @returns the #BluetoothType of the device selected, or '0' if unknown.
     */
    get_selected_device_type(): Type
    /**
     * Starts a discovery on the default Bluetooth adapter. Note that this will
     * only work if the Search label is visible, as otherwise the user has no
     * visual feedback that the process is on-going.
     * 
     * See also: #BluetoothChooser:show-searching
     */
    start_discovery(): void
    /**
     * Stops a discovery started with #bluetooth_chooser_start_discovery.
     */
    stop_discovery(): void

    // Conflicting methods

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

    // Own virtual methods of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    vfunc_selected_device_activated(address: string | null): void
    vfunc_selected_device_changed(address: string | null): void

    // Own signals of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    connect(sigName: "selected-device-activated", callback: Chooser.SelectedDeviceActivatedSignalCallback): number
    connect_after(sigName: "selected-device-activated", callback: Chooser.SelectedDeviceActivatedSignalCallback): number
    emit(sigName: "selected-device-activated", address: string | null, ...args: any[]): void
    connect(sigName: "selected-device-changed", callback: Chooser.SelectedDeviceChangedSignalCallback): number
    connect_after(sigName: "selected-device-changed", callback: Chooser.SelectedDeviceChangedSignalCallback): number
    emit(sigName: "selected-device-changed", address: string | null, ...args: any[]): void

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    connect(sigName: "notify::device-selected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-selected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-selected", ...args: any[]): void
    connect(sigName: "notify::device-service-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-service-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-service-filter", ...args: any[]): void
    connect(sigName: "notify::device-type-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type-filter", ...args: any[]): void
    connect(sigName: "notify::has-internal-device-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-device-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-internal-device-filter", ...args: any[]): void
    connect(sigName: "notify::show-connected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-connected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-connected", ...args: any[]): void
    connect(sigName: "notify::show-device-category", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-category", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-device-category", ...args: any[]): void
    connect(sigName: "notify::show-device-type", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-device-type", ...args: any[]): void
    connect(sigName: "notify::show-device-type-column", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type-column", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-device-type-column", ...args: any[]): void
    connect(sigName: "notify::show-pairing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-pairing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-pairing", ...args: any[]): void
    connect(sigName: "notify::show-searching", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-searching", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-searching", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>BluetoothChooser</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Chooser extends Gtk.Box {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    static name: string
    static $gtype: GObject.GType<Chooser>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.Chooser

    constructor(config?: Chooser.ConstructorProperties) 
    /**
     * Returns a new #BluetoothChooser widget.
     * @constructor 
     * @returns A #BluetoothChooser widget
     */
    constructor() 
    /**
     * Returns a new #BluetoothChooser widget.
     * @constructor 
     * @returns A #BluetoothChooser widget
     */
    static new(): Chooser

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Chooser.ConstructorProperties): void
}

module ChooserButton {

    // Signal callback interfaces

    /**
     * Signal callback interface for `chooser-created`
     */
    interface ChooserCreatedSignalCallback {
        ($obj: ChooserButton, chooser: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

        /**
         * The Bluetooth address of the selected device or %NULL.
         */
        device?: string | null
    }

}

interface ChooserButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    /**
     * The Bluetooth address of the selected device or %NULL.
     */
    device: string | null
    /**
     * %TRUE if there is a powered Bluetooth adapter available.
     * 
     * See also: bluetooth_chooser_button_available()
     */
    readonly is_available: boolean

    // Owm methods of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    /**
     * Returns whether there is a powered Bluetooth adapter.
     * @returns %TRUE if there is a powered Bluetooth adapter available, and the button should be sensitive.
     */
    available(): boolean

    // Conflicting methods

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

    // Own virtual methods of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    vfunc_chooser_created(chooser: Gtk.Widget): void

    // Own signals of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    connect(sigName: "chooser-created", callback: ChooserButton.ChooserCreatedSignalCallback): number
    connect_after(sigName: "chooser-created", callback: ChooserButton.ChooserCreatedSignalCallback): number
    emit(sigName: "chooser-created", chooser: GObject.Object, ...args: any[]): void

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    connect(sigName: "notify::device", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::is-available", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-available", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-available", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>BluetoothChooserButton</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class ChooserButton extends Gtk.Button {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    static name: string
    static $gtype: GObject.GType<ChooserButton>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButton

    constructor(config?: ChooserButton.ConstructorProperties) 
    /**
     * Returns a new #BluetoothChooserButton widget.
     * @constructor 
     * @returns a #BluetoothChooserButton widget.
     */
    constructor() 
    /**
     * Returns a new #BluetoothChooserButton widget.
     * @constructor 
     * @returns a #BluetoothChooserButton widget.
     */
    static new(): ChooserButton
    _init(config?: ChooserButton.ConstructorProperties): void
}

module ChooserCombo {

    // Signal callback interfaces

    /**
     * Signal callback interface for `chooser-created`
     */
    interface ChooserCreatedSignalCallback {
        ($obj: ChooserCombo, chooser: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

        /**
         * The Bluetooth address of the selected device or %NULL
         */
        device?: string | null
    }

}

interface ChooserCombo extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    /**
     * The #BluetoothChooser used in the widget
     */
    readonly chooser: Chooser
    /**
     * The Bluetooth address of the selected device or %NULL
     */
    device: string | null

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    parent: Gtk.Box & Gtk.Container
    priv: ChooserComboPrivate

    // Conflicting methods

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

    // Own virtual methods of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    vfunc_chooser_created(chooser: Gtk.Widget): void

    // Own signals of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    connect(sigName: "chooser-created", callback: ChooserCombo.ChooserCreatedSignalCallback): number
    connect_after(sigName: "chooser-created", callback: ChooserCombo.ChooserCreatedSignalCallback): number
    emit(sigName: "chooser-created", chooser: GObject.Object, ...args: any[]): void

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    connect(sigName: "notify::chooser", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chooser", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chooser", ...args: any[]): void
    connect(sigName: "notify::device", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>BluetoothChooserCombo</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class ChooserCombo extends Gtk.Box {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    static name: string
    static $gtype: GObject.GType<ChooserCombo>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.ChooserCombo

    constructor(config?: ChooserCombo.ConstructorProperties) 
    /**
     * Returns a new #BluetoothChooserCombo widget.
     * @constructor 
     * @returns a #BluetoothChooserCombo widget.
     */
    constructor() 
    /**
     * Returns a new #BluetoothChooserCombo widget.
     * @constructor 
     * @returns a #BluetoothChooserCombo widget.
     */
    static new(): ChooserCombo

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ChooserCombo.ConstructorProperties): void
}

module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        ($obj: Client, device: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-1.0.GnomeBluetooth.Client

        /**
         * %TRUE if the default Bluetooth adapter is discoverable.
         */
        default_adapter_discoverable?: boolean | null
        /**
         * %TRUE if the default Bluetooth adapter is discovering.
         */
        default_adapter_discovering?: boolean | null
    }

}

interface Client {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.Client

    /**
     * The D-Bus path of the default Bluetooth adapter or %NULL.
     */
    readonly default_adapter: string | null
    /**
     * %TRUE if the default Bluetooth adapter is discoverable.
     */
    default_adapter_discoverable: boolean
    /**
     * %TRUE if the default Bluetooth adapter is discovering.
     */
    default_adapter_discovering: boolean
    /**
     * The name of the default Bluetooth adapter or %NULL.
     */
    readonly default_adapter_name: string | null
    /**
     * %TRUE if the default Bluetooth adapter is powered.
     */
    readonly default_adapter_powered: boolean

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.Client

    parent: GObject.Object

    // Owm methods of GnomeBluetooth-1.0.GnomeBluetooth.Client

    /**
     * When the connection operation is finished, `callback` will be called. You can
     * then call bluetooth_client_connect_service_finish() to get the result of the
     * operation.
     * @param path the object path on which to operate
     * @param connect Whether try to connect or disconnect from services on a device
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the connection is complete
     */
    connect_service(path: string | null, connect: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the connection operation. See bluetooth_client_connect_service().
     * @param res a #GAsyncResult
     * @returns %TRUE if the connection operation succeeded, %FALSE otherwise.
     */
    connect_service_finish(res: Gio.AsyncResult): boolean
    /**
     * Returns a #GtkTreeModelFilter with only adapters present.
     * @returns a #GtkTreeModel object.
     */
    get_adapter_model(): Gtk.TreeModel
    /**
     * Returns a #GtkTreeModelFilter with only devices belonging to the default adapter listed.
     * Note that the model will follow a specific adapter, and will not follow the default adapter.
     * Also note that due to the way #GtkTreeModelFilter works, you will probably want to
     * monitor signals on the "child-model" #GtkTreeModel to monitor for changes.
     * @returns a #GtkTreeModel object.
     */
    get_device_model(): Gtk.TreeModel
    /**
     * Returns a #GtkTreeModelFilter of devices filtered using the `func,` `data` and `destroy` arguments to pass to gtk_tree_model_filter_set_visible_func().
     * @param func a #GtkTreeModelFilterVisibleFunc
     * @returns a #GtkTreeModel object.
     */
    get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel
    /**
     * Returns an unfiltered #GtkTreeModel representing the adapter and devices available on the system.
     * @returns a #GtkTreeModel object.
     */
    get_model(): Gtk.TreeModel

    // Own signals of GnomeBluetooth-1.0.GnomeBluetooth.Client

    connect(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", device: string | null, ...args: any[]): void

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.Client

    connect(sigName: "notify::default-adapter", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-adapter", ...args: any[]): void
    connect(sigName: "notify::default-adapter-discoverable", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-discoverable", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-adapter-discoverable", ...args: any[]): void
    connect(sigName: "notify::default-adapter-discovering", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-discovering", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-adapter-discovering", ...args: any[]): void
    connect(sigName: "notify::default-adapter-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-adapter-name", ...args: any[]): void
    connect(sigName: "notify::default-adapter-powered", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-powered", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-adapter-powered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>BluetoothClient</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Returns a reference to the #BluetoothClient singleton. Use g_object_unref() when done with the object.
     * @constructor 
     * @returns a #BluetoothClient object.
     */
    constructor() 
    /**
     * Returns a reference to the #BluetoothClient singleton. Use g_object_unref() when done with the object.
     * @constructor 
     * @returns a #BluetoothClient object.
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

module FilterWidget {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

        device_service_filter?: string | null
        device_type_filter?: number | null
        show_device_category?: boolean | null
        show_device_type?: boolean | null
    }

}

interface FilterWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    device_service_filter: string | null
    device_type_filter: number
    show_device_category: boolean
    show_device_type: boolean

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    parent: Gtk.Box & Gtk.Container

    // Owm methods of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    /**
     * Binds a #BluetoothFilterWidget to a #BluetoothChooser such that changing the
     * #BluetoothFilterWidget results in filters being applied on the #BluetoothChooser.
     * Any properties set on a bound #BluetoothChooser will also be set on the
     * #BluetoothFilterWidget.
     * @param chooser The #BluetoothChooser widget to bind the filter to.
     */
    bind_filter(chooser: Chooser): void
    /**
     * Used to set a different title for the #BluetoothFilterWidget than the default.
     * @param title Title for the #BluetoothFilterWidget.
     */
    set_title(title: string | null): void

    // Conflicting methods

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

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    connect(sigName: "notify::device-service-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-service-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-service-filter", ...args: any[]): void
    connect(sigName: "notify::device-type-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type-filter", ...args: any[]): void
    connect(sigName: "notify::show-device-category", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-category", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-device-category", ...args: any[]): void
    connect(sigName: "notify::show-device-type", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-device-type", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterWidget extends Gtk.Box {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    static name: string
    static $gtype: GObject.GType<FilterWidget>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidget

    constructor(config?: FilterWidget.ConstructorProperties) 
    /**
     * Creates a new #BluetoothFilterWidget which can be bound to a #BluetoothChooser to
     * control filtering of that #BluetoothChooser.
     * Usually used in conjunction with a #BluetoothChooser which has the "has-internal-filter"
     * property set to FALSE.
     * @constructor 
     * @returns A #BluetoothFilterWidget widget Note: Must call bluetooth_filter_widget_bind_filter () to bind the #BluetoothFilterWidget to a #BluetoothChooser.
     */
    constructor() 
    /**
     * Creates a new #BluetoothFilterWidget which can be bound to a #BluetoothChooser to
     * control filtering of that #BluetoothChooser.
     * Usually used in conjunction with a #BluetoothChooser which has the "has-internal-filter"
     * property set to FALSE.
     * @constructor 
     * @returns A #BluetoothFilterWidget widget Note: Must call bluetooth_filter_widget_bind_filter () to bind the #BluetoothFilterWidget to a #BluetoothChooser.
     */
    static new(): FilterWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: FilterWidget.ConstructorProperties): void
}

module SettingsWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `adapter-status-changed`
     */
    interface AdapterStatusChangedSignalCallback {
        ($obj: SettingsWidget): void
    }

    /**
     * Signal callback interface for `panel-changed`
     */
    interface PanelChangedSignalCallback {
        ($obj: SettingsWidget, panel: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

interface SettingsWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    parent: Gtk.Box & Gtk.Container

    // Owm methods of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    get_default_adapter_powered(): boolean

    // Conflicting methods

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

    // Own signals of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    connect(sigName: "adapter-status-changed", callback: SettingsWidget.AdapterStatusChangedSignalCallback): number
    connect_after(sigName: "adapter-status-changed", callback: SettingsWidget.AdapterStatusChangedSignalCallback): number
    emit(sigName: "adapter-status-changed", ...args: any[]): void
    connect(sigName: "panel-changed", callback: SettingsWidget.PanelChangedSignalCallback): number
    connect_after(sigName: "panel-changed", callback: SettingsWidget.PanelChangedSignalCallback): number
    emit(sigName: "panel-changed", panel: string | null, ...args: any[]): void

    // Class property signals of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>BluetoothSettingsWidget</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
class SettingsWidget extends Gtk.Box {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    static name: string
    static $gtype: GObject.GType<SettingsWidget>

    // Constructors of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidget

    constructor(config?: SettingsWidget.ConstructorProperties) 
    /**
     * Returns a new #BluetoothSettingsWidget widget.
     * @constructor 
     * @returns A #BluetoothSettingsWidget widget
     */
    constructor() 
    /**
     * Returns a new #BluetoothSettingsWidget widget.
     * @constructor 
     * @returns A #BluetoothSettingsWidget widget
     */
    static new(): SettingsWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: SettingsWidget.ConstructorProperties): void
}

interface ChooserButtonClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButtonClass

    parent_class: Gtk.ButtonClass
    chooser_created: (self: ChooserButton, chooser: Gtk.Widget) => void
}

abstract class ChooserButtonClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserButtonClass

    static name: string
}

interface ChooserClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.ChooserClass

    parent_class: Gtk.BoxClass
    selected_device_changed: (chooser: Chooser, address: string | null) => void
    selected_device_activated: (chooser: Chooser, address: string | null) => void
}

abstract class ChooserClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserClass

    static name: string
}

interface ChooserComboClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.ChooserComboClass

    parent_class: Gtk.BoxClass
    chooser_created: (self: ChooserCombo, chooser: Gtk.Widget) => void
}

abstract class ChooserComboClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserComboClass

    static name: string
}

interface ChooserComboPrivate {
}

class ChooserComboPrivate {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ChooserComboPrivate

    static name: string
}

interface ClientClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.ClientClass

    static name: string
}

interface FilterWidgetClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidgetClass

    parent_class: Gtk.BoxClass
}

abstract class FilterWidgetClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.FilterWidgetClass

    static name: string
}

interface SettingsWidgetClass {

    // Own fields of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidgetClass

    parent_class: Gtk.BoxClass
}

abstract class SettingsWidgetClass {

    // Own properties of GnomeBluetooth-1.0.GnomeBluetooth.SettingsWidgetClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GnomeBluetooth;
// END