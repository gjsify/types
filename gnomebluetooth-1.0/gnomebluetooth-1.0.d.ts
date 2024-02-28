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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
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
     * A convenience value used to select the first device regardless of its address.
     */
    const CHOOSER_COMBO_FIRST_DEVICE: string;
    /**
     * Use this value to select any Bluetooth audio device where a #BluetoothType enum is required.
     */
    const TYPE_AUDIO: number;
    /**
     * Use this value to select any Bluetooth input device where a #BluetoothType enum is required.
     */
    const TYPE_INPUT: number;
    const UUID_A2DP: number;
    const UUID_A2DP_SINK: number;
    const UUID_A2DP_SOURCE: number;
    const UUID_AVRCP_CONTROL: number;
    const UUID_AVRCP_TARGET: number;
    const UUID_DUN: number;
    const UUID_FTP: number;
    const UUID_GENERIC_AUDIO: number;
    const UUID_GENERIC_NET: number;
    const UUID_HFP_AG: number;
    const UUID_HFP_HF: number;
    const UUID_HID: number;
    const UUID_HSP: number;
    const UUID_HSP_AG: number;
    const UUID_IRMC: number;
    const UUID_OPP: number;
    const UUID_PAN_GN: number;
    const UUID_PAN_NAP: number;
    const UUID_PAN_PANU: number;
    const UUID_PBAP: number;
    const UUID_PNP: number;
    const UUID_SAP: number;
    const UUID_SDP: number;
    const UUID_SPP: number;
    const UUID_VDP_SOURCE: number;
    /**
     * Returns the type of device corresponding to the given `class` value.
     * @param _class a Bluetooth device class
     * @returns a #BluetoothType.
     */
    function class_to_type(_class: number): Type;
    /**
     * Start a GUI application for transfering files over Bluetooth.
     * @param address Remote device to use
     * @param alias Remote device's name
     */
    function send_to_address(address: string, alias: string): void;
    /**
     * Returns a human-readable string representation of `type` usable for display to users. Do not free the return value.
     * The returned string is already translated with gettext().
     * @param type a #BluetoothType
     * @returns a string.
     */
    function type_to_string(type: number): string;
    /**
     * Returns a string representing a human-readable (but not usable for display to users) version of the `uuid`. Do not free the return value.
     * @param uuid a string representing a Bluetooth UUID
     * @returns a string.
     */
    function uuid_to_string(uuid: string): string;
    /**
     * Returns whether the string is a valid Bluetooth address. This does not contact the device in any way.
     * @param bdaddr a string representing a Bluetooth address
     * @returns %TRUE if the address is valid, %FALSE if not.
     */
    function verify_address(bdaddr: string): boolean;
    /**
     * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and %BLUETOOTH_TYPE_AUDIO
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
    module Chooser {
        // Signal callback interfaces

        interface SelectedDeviceActivated {
            (address: string): void;
        }

        interface SelectedDeviceChanged {
            (address: string): void;
        }

        // Constructor properties interface
    }

    /**
     * The <structname>BluetoothChooser</structname> struct contains
     * only private fields and should not be directly accessed.
     */
    class Chooser extends Gtk.Box {
        // Own properties of GnomeBluetooth-1.0.Chooser

        device_selected: string;
        deviceSelected: string;
        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        has_internal_device_filter: boolean;
        hasInternalDeviceFilter: boolean;
        show_connected: boolean;
        showConnected: boolean;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;
        show_device_type_column: boolean;
        showDeviceTypeColumn: boolean;
        show_pairing: boolean;
        showPairing: boolean;
        show_searching: boolean;
        showSearching: boolean;

        // Constructors of GnomeBluetooth-1.0.Chooser

        static ['new'](): Chooser;

        // Owm methods of GnomeBluetooth-1.0.Chooser

        /**
         * Prints all the known attributes for the currently selected device
         * on the standard output. Useful for debugging.
         */
        dump_selected_device(): void;
        /**
         * Returns the #GtkScrolledWindow object for the #BluetoothChooser.
         * This is useful to set a minimum height to the chooser using
         * gtk_scrolled_window_set_min_content_height() or to join the
         * chooser with a toolbar.
         * @returns a #GtkScrolledWindow object.
         */
        get_scrolled_window(): Gtk.Widget;
        /**
         * Returns the Bluetooth address for the currently selected device.
         * @returns the Bluetooth address for the currently selected device, or %NULL.
         */
        get_selected_device(): string;
        /**
         * Returns the icon name to use to represent the currently selected device.
         * @returns the icon name to use to represent the currently selected device, or %NULL.
         */
        get_selected_device_icon(): string;
        /**
         * Returns whether the `value` has been set.
         * @param field The identifier for the field to get data for.
         * @param value An empty #GValue to set.
         * @returns %TRUE if the @value has been set.
         */
        get_selected_device_info(field: string, value: GObject.Value): boolean;
        /**
         * Returns whether the selected device is connected to this computer.
         * @returns whether the selected device is connected to this computer, will always be %FALSE if no devices are selected.
         */
        get_selected_device_is_connected(): boolean;
        /**
         * Returns the name for the currently selected device.
         * @returns the name for the currently selected device, or %NULL.
         */
        get_selected_device_name(): string;
        /**
         * Returns the #BluetoothType of the device selected.
         * @returns the #BluetoothType of the device selected, or '0' if unknown.
         */
        get_selected_device_type(): Type;
        /**
         * Starts a discovery on the default Bluetooth adapter. Note that this will
         * only work if the Search label is visible, as otherwise the user has no
         * visual feedback that the process is on-going.
         *
         * See also: #BluetoothChooser:show-searching
         */
        start_discovery(): void;
        /**
         * Stops a discovery started with #bluetooth_chooser_start_discovery.
         */
        stop_discovery(): void;
    }

    module ChooserButton {
        // Signal callback interfaces

        interface ChooserCreated {
            (chooser: GObject.Object): void;
        }

        // Constructor properties interface
    }

    /**
     * The <structname>BluetoothChooserButton</structname> struct contains
     * only private fields and should not be directly accessed.
     */
    class ChooserButton extends Gtk.Button {
        // Own properties of GnomeBluetooth-1.0.ChooserButton

        /**
         * The Bluetooth address of the selected device or %NULL.
         */
        device: string;
        /**
         * %TRUE if there is a powered Bluetooth adapter available.
         *
         * See also: bluetooth_chooser_button_available()
         */
        readonly is_available: boolean;
        /**
         * %TRUE if there is a powered Bluetooth adapter available.
         *
         * See also: bluetooth_chooser_button_available()
         */
        readonly isAvailable: boolean;

        // Constructors of GnomeBluetooth-1.0.ChooserButton

        static ['new'](): ChooserButton;

        // Owm methods of GnomeBluetooth-1.0.ChooserButton

        /**
         * Returns whether there is a powered Bluetooth adapter.
         * @returns %TRUE if there is a powered Bluetooth adapter available, and the button should be sensitive.
         */
        available(): boolean;
    }

    module ChooserCombo {
        // Signal callback interfaces

        interface ChooserCreated {
            (chooser: GObject.Object): void;
        }

        // Constructor properties interface
    }

    /**
     * The <structname>BluetoothChooserCombo</structname> struct contains
     * only private fields and should not be directly accessed.
     */
    class ChooserCombo extends Gtk.Box {
        // Own properties of GnomeBluetooth-1.0.ChooserCombo

        /**
         * The #BluetoothChooser used in the widget
         */
        readonly chooser: Chooser;
        /**
         * The Bluetooth address of the selected device or %NULL
         */
        device: string;

        // Constructors of GnomeBluetooth-1.0.ChooserCombo

        static ['new'](): ChooserCombo;
    }

    module Client {
        // Signal callback interfaces

        interface DeviceRemoved {
            (device: string): void;
        }

        // Constructor properties interface
    }

    /**
     * The <structname>BluetoothClient</structname> struct contains
     * only private fields and should not be directly accessed.
     */
    class Client extends GObject.Object {
        // Own properties of GnomeBluetooth-1.0.Client

        /**
         * The D-Bus path of the default Bluetooth adapter or %NULL.
         */
        readonly default_adapter: string;
        /**
         * The D-Bus path of the default Bluetooth adapter or %NULL.
         */
        readonly defaultAdapter: string;
        /**
         * %TRUE if the default Bluetooth adapter is discoverable.
         */
        default_adapter_discoverable: boolean;
        /**
         * %TRUE if the default Bluetooth adapter is discoverable.
         */
        defaultAdapterDiscoverable: boolean;
        /**
         * %TRUE if the default Bluetooth adapter is discovering.
         */
        default_adapter_discovering: boolean;
        /**
         * %TRUE if the default Bluetooth adapter is discovering.
         */
        defaultAdapterDiscovering: boolean;
        /**
         * The name of the default Bluetooth adapter or %NULL.
         */
        readonly default_adapter_name: string;
        /**
         * The name of the default Bluetooth adapter or %NULL.
         */
        readonly defaultAdapterName: string;
        /**
         * %TRUE if the default Bluetooth adapter is powered.
         */
        readonly default_adapter_powered: boolean;
        /**
         * %TRUE if the default Bluetooth adapter is powered.
         */
        readonly defaultAdapterPowered: boolean;

        // Constructors of GnomeBluetooth-1.0.Client

        static ['new'](): Client;

        // Owm methods of GnomeBluetooth-1.0.Client

        /**
         * When the connection operation is finished, `callback` will be called. You can
         * then call bluetooth_client_connect_service_finish() to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the connection is complete
         */
        connect_service(
            path: string,
            connect: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the connection operation. See bluetooth_client_connect_service().
         * @param res a #GAsyncResult
         * @returns %TRUE if the connection operation succeeded, %FALSE otherwise.
         */
        connect_service_finish(res: Gio.AsyncResult): boolean;
        /**
         * Returns a #GtkTreeModelFilter with only adapters present.
         * @returns a #GtkTreeModel object.
         */
        get_adapter_model(): Gtk.TreeModel;
        /**
         * Returns a #GtkTreeModelFilter with only devices belonging to the default adapter listed.
         * Note that the model will follow a specific adapter, and will not follow the default adapter.
         * Also note that due to the way #GtkTreeModelFilter works, you will probably want to
         * monitor signals on the "child-model" #GtkTreeModel to monitor for changes.
         * @returns a #GtkTreeModel object.
         */
        get_device_model(): Gtk.TreeModel;
        /**
         * Returns a #GtkTreeModelFilter of devices filtered using the `func,` `data` and `destroy` arguments to pass to gtk_tree_model_filter_set_visible_func().
         * @param func a #GtkTreeModelFilterVisibleFunc
         * @returns a #GtkTreeModel object.
         */
        get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel;
        /**
         * Returns an unfiltered #GtkTreeModel representing the adapter and devices available on the system.
         * @returns a #GtkTreeModel object.
         */
        get_model(): Gtk.TreeModel;
    }

    module FilterWidget {
        // Constructor properties interface
    }

    class FilterWidget extends Gtk.Box {
        // Own properties of GnomeBluetooth-1.0.FilterWidget

        device_service_filter: string;
        deviceServiceFilter: string;
        device_type_filter: number;
        deviceTypeFilter: number;
        show_device_category: boolean;
        showDeviceCategory: boolean;
        show_device_type: boolean;
        showDeviceType: boolean;

        // Constructors of GnomeBluetooth-1.0.FilterWidget

        static ['new'](): FilterWidget;

        // Owm methods of GnomeBluetooth-1.0.FilterWidget

        /**
         * Binds a #BluetoothFilterWidget to a #BluetoothChooser such that changing the
         * #BluetoothFilterWidget results in filters being applied on the #BluetoothChooser.
         * Any properties set on a bound #BluetoothChooser will also be set on the
         * #BluetoothFilterWidget.
         * @param chooser The #BluetoothChooser widget to bind the filter to.
         */
        bind_filter(chooser: Chooser): void;
        /**
         * Used to set a different title for the #BluetoothFilterWidget than the default.
         * @param title Title for the #BluetoothFilterWidget.
         */
        set_title(title: string): void;
    }

    module SettingsWidget {
        // Signal callback interfaces

        interface AdapterStatusChanged {
            (): void;
        }

        interface PanelChanged {
            (panel: string): void;
        }

        // Constructor properties interface
    }

    /**
     * The <structname>BluetoothSettingsWidget</structname> struct contains
     * only private fields and should not be directly accessed.
     */
    class SettingsWidget extends Gtk.Box {
        // Constructors of GnomeBluetooth-1.0.SettingsWidget

        static ['new'](): SettingsWidget;

        // Owm methods of GnomeBluetooth-1.0.SettingsWidget

        get_default_adapter_powered(): boolean;
    }

    class ChooserButtonClass {}

    class ChooserClass {}

    class ChooserComboClass {}

    class ChooserComboPrivate {}

    class ClientClass {}

    class FilterWidgetClass {}

    class SettingsWidgetClass {}

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

export default GnomeBluetooth;
// END
