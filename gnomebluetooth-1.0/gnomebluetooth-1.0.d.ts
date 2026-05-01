
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace GnomeBluetooth {

    /**
     * GnomeBluetooth-1.0
     */


    /**
     * The category of a Bluetooth devices.
     * @gir-type Enum
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
     * A column identifier to pass to `bluetooth_chooser_get_selected_device_info()`.
     * @gir-type Enum
     */
    enum Column {
        /**
         * a {@link Gio.DBusProxy} object
         */
        PROXY,
        /**
         * a {@link Gio.DBusProxy} object for DBus.Properties
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
         * the {@link GnomeBluetooth.Type} of the device. Only available for devices.
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
         * an array of service names and {@link GnomeBluetooth.Status} connection statuses.
         */
        SERVICES,
        /**
         * a string array of human-readable UUIDs.
         */
        UUIDS,
    }


    /**
     * The connection status of a service on a particular device. Note that `BLUETOOTH_STATUS_CONNECTING` and `BLUETOOTH_STATUS_PLAYING` might not be available for all services.
     * @gir-type Enum
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
     * Use this value to select any Bluetooth audio device where a {@link GnomeBluetooth.Type} enum is required.
     */
    const TYPE_AUDIO: number;

    /**
     * Use this value to select any Bluetooth input device where a {@link GnomeBluetooth.Type} enum is required.
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
     * @returns a {@link GnomeBluetooth.Type}.
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
     * The returned string is already translated with `gettext()`.
     * @param type a {@link GnomeBluetooth.Type}
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
     * @returns `true` if the address is valid, `false` if not.
     */
    function verify_address(bdaddr: string): boolean;

    /**
     * The type of a Bluetooth device. See also `BLUETOOTH_TYPE_INPUT` and `BLUETOOTH_TYPE_AUDIO`
     * @gir-type Flags
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


    namespace Chooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The {@link GnomeBluetooth.Chooser.SignalSignatures.selected_device_activated | GnomeBluetooth.Chooser::selected-device-activated} signal is launched when a
             * device is double-clicked in the chooser.
             * @signal
             * @run-last
             */
            "selected-device-activated": (arg0: string) => void;
            /**
             * The {@link GnomeBluetooth.Chooser.SignalSignatures.selected_device_changed | GnomeBluetooth.Chooser::selected-device-changed} signal is launched when the
             * selected device is changed, it will be `null` if a device was unselected.
             * @signal
             * @run-last
             */
            "selected-device-changed": (arg0: string) => void;
            "notify::device-selected": (pspec: GObject.ParamSpec) => void;
            "notify::device-service-filter": (pspec: GObject.ParamSpec) => void;
            "notify::device-type-filter": (pspec: GObject.ParamSpec) => void;
            "notify::has-internal-device-filter": (pspec: GObject.ParamSpec) => void;
            "notify::show-connected": (pspec: GObject.ParamSpec) => void;
            "notify::show-device-category": (pspec: GObject.ParamSpec) => void;
            "notify::show-device-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-device-type-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-pairing": (pspec: GObject.ParamSpec) => void;
            "notify::show-searching": (pspec: GObject.ParamSpec) => void;
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
        }
    }

    /**
     * The <structname>BluetoothChooser</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class Chooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Chooser>;

        // Properties
        get device_selected(): string;
        set device_selected(val: string);

        get deviceSelected(): string;
        set deviceSelected(val: string);

        /**
         * @write-only
         */
        set device_service_filter(val: string);

        /**
         * @write-only
         */
        set deviceServiceFilter(val: string);

        get device_type_filter(): number;
        set device_type_filter(val: number);

        get deviceTypeFilter(): number;
        set deviceTypeFilter(val: number);

        /**
         * @construct-only
         */
        get has_internal_device_filter(): boolean;

        /**
         * @construct-only
         */
        get hasInternalDeviceFilter(): boolean;

        get show_connected(): boolean;
        set show_connected(val: boolean);

        get showConnected(): boolean;
        set showConnected(val: boolean);

        get show_device_category(): boolean;
        set show_device_category(val: boolean);

        get showDeviceCategory(): boolean;
        set showDeviceCategory(val: boolean);

        get show_device_type(): boolean;
        set show_device_type(val: boolean);

        get showDeviceType(): boolean;
        set showDeviceType(val: boolean);

        get show_device_type_column(): boolean;
        set show_device_type_column(val: boolean);

        get showDeviceTypeColumn(): boolean;
        set showDeviceTypeColumn(val: boolean);

        get show_pairing(): boolean;
        set show_pairing(val: boolean);

        get showPairing(): boolean;
        set showPairing(val: boolean);

        get show_searching(): boolean;
        set show_searching(val: boolean);

        get showSearching(): boolean;
        set showSearching(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Chooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Chooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Chooser;

        // Signals
        /** @signal */
        connect<K extends keyof Chooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Chooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Chooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Chooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Chooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Chooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param address 
         * @virtual
         */
        vfunc_selected_device_activated(address: string): void;

        /**
         * @param address 
         * @virtual
         */
        vfunc_selected_device_changed(address: string): void;

        // Methods
        /**
         * Prints all the known attributes for the currently selected device
         * on the standard output. Useful for debugging.
         */
        dump_selected_device(): void;

        /**
         * Returns the {@link Gtk.ScrolledWindow} object for the {@link GnomeBluetooth.Chooser}.
         * This is useful to set a minimum height to the chooser using
         * `gtk_scrolled_window_set_min_content_height()` or to join the
         * chooser with a toolbar.
         * @returns a {@link Gtk.ScrolledWindow} object.
         */
        get_scrolled_window(): Gtk.Widget;

        /**
         * Returns the Bluetooth address for the currently selected device.
         * @returns the Bluetooth address for the currently selected device, or `null`.
         */
        get_selected_device(): string;

        /**
         * Returns the icon name to use to represent the currently selected device.
         * @returns the icon name to use to represent the currently selected device, or `null`.
         */
        get_selected_device_icon(): string;

        /**
         * Returns whether the `value` has been set.
         * @param field The identifier for the field to get data for.
         * @param value An empty {@link GObject.Value} to set.
         * @returns `true` if the `value` has been set.
         */
        get_selected_device_info(field: string, value: (GObject.Value | any)): boolean;

        /**
         * Returns whether the selected device is connected to this computer.
         * @returns whether the selected device is connected to this computer, will always be `false` if no devices are selected.
         */
        get_selected_device_is_connected(): boolean;

        /**
         * Returns the name for the currently selected device.
         * @returns the name for the currently selected device, or `null`.
         */
        get_selected_device_name(): string;

        /**
         * Returns the {@link GnomeBluetooth.Type} of the device selected.
         * @returns the {@link GnomeBluetooth.Type} of the device selected, or '0' if unknown.
         */
        get_selected_device_type(): Type;

        /**
         * Starts a discovery on the default Bluetooth adapter. Note that this will
         * only work if the Search label is visible, as otherwise the user has no
         * visual feedback that the process is on-going.
         * 
         * See also: {@link GnomeBluetooth.Chooser.show_searching}
         */
        start_discovery(): void;

        /**
         * Stops a discovery started with `bluetooth_chooser_start_discovery`.
         */
        stop_discovery(): void;

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


    namespace ChooserButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            /**
             * The signal is sent when a popup dialogue is created for the user to select
             * a device. This signal allows you to change the configuration and filtering
             * of the tree from its defaults.
             * @signal
             * @run-last
             */
            "chooser-created": (arg0: GObject.Object) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::is-available": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            device: string;
            is_available: boolean;
            isAvailable: boolean;
        }
    }

    /**
     * The <structname>BluetoothChooserButton</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class ChooserButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ChooserButton>;

        // Properties
        /**
         * The Bluetooth address of the selected device or `null`.
         */
        get device(): string;
        set device(val: string);

        /**
         * `true` if there is a powered Bluetooth adapter available.
         * 
         * See also: `bluetooth_chooser_button_available()`
         * @read-only
         */
        get is_available(): boolean;

        /**
         * `true` if there is a powered Bluetooth adapter available.
         * 
         * See also: `bluetooth_chooser_button_available()`
         * @read-only
         */
        get isAvailable(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChooserButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChooserButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ChooserButton;

        // Signals
        /** @signal */
        connect<K extends keyof ChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChooserButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param chooser 
         * @virtual
         */
        vfunc_chooser_created(chooser: Gtk.Widget): void;

        // Methods
        /**
         * Returns whether there is a powered Bluetooth adapter.
         * @returns `true` if there is a powered Bluetooth adapter available, and the button should be sensitive.
         */
        available(): boolean;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace ChooserCombo {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The signal is sent when a popup dialogue is created for the user to select
             * a device. This signal allows you to change the configuration and filtering
             * of the tree from its defaults.
             * @signal
             * @run-last
             */
            "chooser-created": (arg0: GObject.Object) => void;
            "notify::chooser": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
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
            chooser: Chooser;
            device: string;
        }
    }

    /**
     * The <structname>BluetoothChooserCombo</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class ChooserCombo extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ChooserCombo>;

        // Properties
        /**
         * The {@link GnomeBluetooth.Chooser} used in the widget
         * @read-only
         */
        get chooser(): Chooser;

        /**
         * The Bluetooth address of the selected device or `null`
         */
        get device(): string;
        set device(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChooserCombo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChooserCombo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ChooserCombo;

        // Signals
        /** @signal */
        connect<K extends keyof ChooserCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserCombo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChooserCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserCombo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChooserCombo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChooserCombo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param chooser 
         * @virtual
         */
        vfunc_chooser_created(chooser: Gtk.Widget): void;

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


    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The {@link GnomeBluetooth.Client.SignalSignatures.device_removed | GnomeBluetooth.Client::device-removed} signal is launched when a
             * device gets removed from the model.
             * @signal
             * @run-last
             */
            "device-removed": (arg0: string) => void;
            "notify::default-adapter": (pspec: GObject.ParamSpec) => void;
            "notify::default-adapter-discoverable": (pspec: GObject.ParamSpec) => void;
            "notify::default-adapter-discovering": (pspec: GObject.ParamSpec) => void;
            "notify::default-adapter-name": (pspec: GObject.ParamSpec) => void;
            "notify::default-adapter-powered": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_adapter: string;
            defaultAdapter: string;
            default_adapter_discoverable: boolean;
            defaultAdapterDiscoverable: boolean;
            default_adapter_discovering: boolean;
            defaultAdapterDiscovering: boolean;
            default_adapter_name: string;
            defaultAdapterName: string;
            default_adapter_powered: boolean;
            defaultAdapterPowered: boolean;
        }
    }

    /**
     * The <structname>BluetoothClient</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties
        /**
         * The D-Bus path of the default Bluetooth adapter or `null`.
         * @read-only
         */
        get default_adapter(): string;

        /**
         * The D-Bus path of the default Bluetooth adapter or `null`.
         * @read-only
         */
        get defaultAdapter(): string;

        /**
         * `true` if the default Bluetooth adapter is discoverable.
         */
        get default_adapter_discoverable(): boolean;
        set default_adapter_discoverable(val: boolean);

        /**
         * `true` if the default Bluetooth adapter is discoverable.
         */
        get defaultAdapterDiscoverable(): boolean;
        set defaultAdapterDiscoverable(val: boolean);

        /**
         * `true` if the default Bluetooth adapter is discovering.
         */
        get default_adapter_discovering(): boolean;
        set default_adapter_discovering(val: boolean);

        /**
         * `true` if the default Bluetooth adapter is discovering.
         */
        get defaultAdapterDiscovering(): boolean;
        set defaultAdapterDiscovering(val: boolean);

        /**
         * The name of the default Bluetooth adapter or `null`.
         * @read-only
         */
        get default_adapter_name(): string;

        /**
         * The name of the default Bluetooth adapter or `null`.
         * @read-only
         */
        get defaultAdapterName(): string;

        /**
         * `true` if the default Bluetooth adapter is powered.
         * @read-only
         */
        get default_adapter_powered(): boolean;

        /**
         * `true` if the default Bluetooth adapter is powered.
         * @read-only
         */
        get defaultAdapterPowered(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * When the connection operation is finished, `callback` will be called. You can
         * then call `bluetooth_client_connect_service_finish()` to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        connect_service(path: string, connect: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * When the connection operation is finished, `callback` will be called. You can
         * then call `bluetooth_client_connect_service_finish()` to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the connection is complete
         */
        connect_service(path: string, connect: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * When the connection operation is finished, `callback` will be called. You can
         * then call `bluetooth_client_connect_service_finish()` to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the connection is complete
         */
        connect_service(path: string, connect: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes the connection operation. See `bluetooth_client_connect_service()`.
         * @param res a {@link Gio.AsyncResult}
         * @returns `true` if the connection operation succeeded, `false` otherwise.
         */
        connect_service_finish(res: Gio.AsyncResult): boolean;

        /**
         * Returns a {@link Gtk.TreeModelFilter} with only adapters present.
         * @returns a {@link Gtk.TreeModel} object.
         */
        get_adapter_model(): Gtk.TreeModel;

        /**
         * Returns a {@link Gtk.TreeModelFilter} with only devices belonging to the default adapter listed.
         * Note that the model will follow a specific adapter, and will not follow the default adapter.
         * Also note that due to the way {@link Gtk.TreeModelFilter} works, you will probably want to
         * monitor signals on the "child-model" {@link Gtk.TreeModel} to monitor for changes.
         * @returns a {@link Gtk.TreeModel} object.
         */
        get_device_model(): Gtk.TreeModel;

        /**
         * Returns a {@link Gtk.TreeModelFilter} of devices filtered using the `func`, `data` and `destroy` arguments to pass to `gtk_tree_model_filter_set_visible_func()`.
         * @param func a {@link Gtk.TreeModelFilterVisibleFunc}
         * @returns a {@link Gtk.TreeModel} object.
         */
        get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel;

        /**
         * Returns an unfiltered {@link Gtk.TreeModel} representing the adapter and devices available on the system.
         * @returns a {@link Gtk.TreeModel} object.
         */
        get_model(): Gtk.TreeModel;
    }


    namespace FilterWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::device-service-filter": (pspec: GObject.ParamSpec) => void;
            "notify::device-type-filter": (pspec: GObject.ParamSpec) => void;
            "notify::show-device-category": (pspec: GObject.ParamSpec) => void;
            "notify::show-device-type": (pspec: GObject.ParamSpec) => void;
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
            device_service_filter: string;
            deviceServiceFilter: string;
            device_type_filter: number;
            deviceTypeFilter: number;
            show_device_category: boolean;
            showDeviceCategory: boolean;
            show_device_type: boolean;
            showDeviceType: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class FilterWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<FilterWidget>;

        // Properties
        /**
         * @write-only
         */
        set device_service_filter(val: string);

        /**
         * @write-only
         */
        set deviceServiceFilter(val: string);

        get device_type_filter(): number;
        set device_type_filter(val: number);

        get deviceTypeFilter(): number;
        set deviceTypeFilter(val: number);

        get show_device_category(): boolean;
        set show_device_category(val: boolean);

        get showDeviceCategory(): boolean;
        set showDeviceCategory(val: boolean);

        get show_device_type(): boolean;
        set show_device_type(val: boolean);

        get showDeviceType(): boolean;
        set showDeviceType(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FilterWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FilterWidget;

        // Signals
        /** @signal */
        connect<K extends keyof FilterWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FilterWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FilterWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FilterWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Binds a {@link GnomeBluetooth.FilterWidget} to a {@link GnomeBluetooth.Chooser} such that changing the
         * {@link GnomeBluetooth.FilterWidget} results in filters being applied on the {@link GnomeBluetooth.Chooser}.
         * Any properties set on a bound {@link GnomeBluetooth.Chooser} will also be set on the
         * {@link GnomeBluetooth.FilterWidget}.
         * @param chooser The {@link GnomeBluetooth.Chooser} widget to bind the filter to.
         */
        bind_filter(chooser: Chooser): void;

        /**
         * Used to set a different title for the {@link GnomeBluetooth.FilterWidget} than the default.
         * @param title Title for the {@link GnomeBluetooth.FilterWidget}.
         */
        set_title(title: string): void;

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


    namespace SettingsWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The {@link GnomeBluetooth.Chooser.SignalSignatures.adapter_status_changed | GnomeBluetooth.Chooser::adapter-status-changed} signal is launched when the status
             * of the adapter changes (powered, available, etc.).
             * @signal
             * @run-last
             */
            "adapter-status-changed": () => void;
            /**
             * The {@link GnomeBluetooth.Chooser.SignalSignatures.panel_changed | GnomeBluetooth.Chooser::panel-changed} signal is launched when a
             * link to another settings panel is clicked.
             * @signal
             * @run-last
             */
            "panel-changed": (arg0: string) => void;
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

        }
    }

    /**
     * The <structname>BluetoothSettingsWidget</structname> struct contains
     * only private fields and should not be directly accessed.
     * @gir-type Class
     */
    class SettingsWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SettingsWidget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SettingsWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SettingsWidget;

        // Signals
        /** @signal */
        connect<K extends keyof SettingsWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SettingsWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SettingsWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SettingsWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns Whether the default Bluetooth adapter is powered.
         */
        get_default_adapter_powered(): boolean;

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


    /**
     * @gir-type Alias
     */
    type ChooserButtonClass = typeof ChooserButton;

    /**
     * @gir-type Alias
     */
    type ChooserClass = typeof Chooser;

    /**
     * @gir-type Alias
     */
    type ChooserComboClass = typeof ChooserCombo;

    /**
     * @gir-type Struct
     */
    abstract class ChooserComboPrivate {
        static $gtype: GObject.GType<ChooserComboPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Alias
     */
    type FilterWidgetClass = typeof FilterWidget;

    /**
     * @gir-type Alias
     */
    type SettingsWidgetClass = typeof SettingsWidget;

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
