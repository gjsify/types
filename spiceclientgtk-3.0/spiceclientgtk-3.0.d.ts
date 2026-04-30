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
import type SpiceClientGLib from '@girs/spiceclientglib-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace SpiceClientGtk {
    /**
     * SpiceClientGtk-3.0
     */

    /**
     * @gir-type Enum
     */
    export namespace DisplayKeyEvent {
        export const $gtype: GObject.GType<DisplayKeyEvent>;
    }

    /**
     * Constants for key events.
     * @gir-type Enum
     */
    enum DisplayKeyEvent {
        /**
         * key press
         */
        PRESS,
        /**
         * key release
         */
        RELEASE,
        /**
         * key click (press and release)
         */
        CLICK,
    }

    namespace Display {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * Notify when the grab keys have been pressed
             * @signal
             * @run-first
             */
            'grab-keys-pressed': () => void;
            /**
             * Notify when the keyboard grab is active or not.
             * @signal
             * @run-first
             */
            'keyboard-grab': (arg0: number) => void;
            /**
             * Notify when the mouse grab is active or not.
             * @signal
             * @run-first
             */
            'mouse-grab': (arg0: number) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::disable-inputs': (pspec: GObject.ParamSpec) => void;
            'notify::grab-keyboard': (pspec: GObject.ParamSpec) => void;
            'notify::grab-mouse': (pspec: GObject.ParamSpec) => void;
            'notify::keypress-delay': (pspec: GObject.ParamSpec) => void;
            'notify::monitor-id': (pspec: GObject.ParamSpec) => void;
            'notify::only-downscale': (pspec: GObject.ParamSpec) => void;
            'notify::ready': (pspec: GObject.ParamSpec) => void;
            'notify::resize-guest': (pspec: GObject.ParamSpec) => void;
            'notify::scaling': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::zoom-level': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.EventBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            channel_id: number;
            channelId: number;
            disable_inputs: boolean;
            disableInputs: boolean;
            grab_keyboard: boolean;
            grabKeyboard: boolean;
            grab_mouse: boolean;
            grabMouse: boolean;
            keypress_delay: number;
            keypressDelay: number;
            monitor_id: number;
            monitorId: number;
            only_downscale: boolean;
            onlyDownscale: boolean;
            ready: boolean;
            resize_guest: boolean;
            resizeGuest: boolean;
            scaling: boolean;
            session: SpiceClientGLib.Session;
            zoom_level: number;
            zoomLevel: number;
        }
    }

    /**
     * The {@link SpiceClientGtk.Display} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class Display extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;

        // Properties

        /**
         * channel-id for this {@link SpiceClientGtk.Display}
         * @construct-only
         * @default 0
         */
        get channel_id(): number;
        /**
         * channel-id for this {@link SpiceClientGtk.Display}
         * @construct-only
         * @default 0
         */
        get channelId(): number;
        /**
         * Disable all keyboard & mouse inputs.
         * @since 0.8
         * @default false
         */
        get disable_inputs(): boolean;
        set disable_inputs(val: boolean);
        /**
         * Disable all keyboard & mouse inputs.
         * @since 0.8
         * @default false
         */
        get disableInputs(): boolean;
        set disableInputs(val: boolean);
        /**
         * @default true
         */
        get grab_keyboard(): boolean;
        set grab_keyboard(val: boolean);
        /**
         * @default true
         */
        get grabKeyboard(): boolean;
        set grabKeyboard(val: boolean);
        /**
         * @default true
         */
        get grab_mouse(): boolean;
        set grab_mouse(val: boolean);
        /**
         * @default true
         */
        get grabMouse(): boolean;
        set grabMouse(val: boolean);
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         * @since 0.13
         * @default 100
         */
        get keypress_delay(): number;
        set keypress_delay(val: number);
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         * @since 0.13
         * @default 100
         */
        get keypressDelay(): number;
        set keypressDelay(val: number);
        /**
         * Select monitor from {@link SpiceClientGtk.Display} to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         * @since 0.13
         * @default 0
         */
        get monitor_id(): number;
        set monitor_id(val: number);
        /**
         * Select monitor from {@link SpiceClientGtk.Display} to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         * @since 0.13
         * @default 0
         */
        get monitorId(): number;
        set monitorId(val: number);
        /**
         * If scaling, only scale down, never up.
         * @since 0.14
         * @default false
         */
        get only_downscale(): boolean;
        set only_downscale(val: boolean);
        /**
         * If scaling, only scale down, never up.
         * @since 0.14
         * @default false
         */
        get onlyDownscale(): boolean;
        set onlyDownscale(val: boolean);
        /**
         * Indicate whether the display is ready to be shown. It takes
         * into account several conditions, such as the channel display
         * "mark" state, whether the monitor area is visible..
         * @since 0.13
         * @read-only
         * @default false
         */
        get ready(): boolean;
        /**
         * @default false
         */
        get resize_guest(): boolean;
        set resize_guest(val: boolean);
        /**
         * @default false
         */
        get resizeGuest(): boolean;
        set resizeGuest(val: boolean);
        /**
         * @default true
         */
        get scaling(): boolean;
        set scaling(val: boolean);
        /**
         * {@link SpiceClientGLib.Session} for this {@link SpiceClientGtk.Display}
         * @construct-only
         */
        get session(): SpiceClientGLib.Session;
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         * @since 0.10
         * @default 100
         */
        get zoom_level(): number;
        set zoom_level(val: number);
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         * @since 0.10
         * @default 100
         */
        get zoomLevel(): number;
        set zoomLevel(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SpiceClientGLib.Session, channel_id: number): Display;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;

        // Signals

        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Finds the current grab key combination for the `display`.
         * @returns the current grab key combination.
         */
        get_grab_keys(): GrabSequence;
        /**
         * Take a screenshot of the display.
         * @returns a {@link GdkPixbuf.Pixbuf} with the screenshot image buffer
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Ungrab the keyboard.
         */
        keyboard_ungrab(): void;
        /**
         * Ungrab the mouse.
         */
        mouse_ungrab(): void;
        /**
         * Send keyval press/release events to the display.
         * @param keyvals Keyval array
         * @param kind {@link SpiceClientGtk.DisplayKeyEvent} action
         */
        send_keys(keyvals: number[], kind: DisplayKeyEvent): void;
        /**
         * Set the key combination to grab/ungrab the keyboard. The default is
         * "Control L + Alt L".
         * @param seq key sequence
         */
        set_grab_keys(seq: GrabSequence): void;
    }

    namespace GtkSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::auto-clipboard': (pspec: GObject.ParamSpec) => void;
            'notify::auto-usbredir': (pspec: GObject.ParamSpec) => void;
            'notify::pointer-grabbed': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::sync-modifiers': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auto_clipboard: boolean;
            autoClipboard: boolean;
            auto_usbredir: boolean;
            autoUsbredir: boolean;
            pointer_grabbed: boolean;
            pointerGrabbed: boolean;
            session: SpiceClientGLib.Session;
            sync_modifiers: boolean;
            syncModifiers: boolean;
        }
    }

    /**
     * The {@link SpiceClientGtk.GtkSession} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class GtkSession extends GObject.Object {
        static $gtype: GObject.GType<GtkSession>;

        // Properties

        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         * @since 0.8
         * @default true
         */
        get auto_clipboard(): boolean;
        set auto_clipboard(val: boolean);
        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         * @since 0.8
         * @default true
         */
        get autoClipboard(): boolean;
        set autoClipboard(val: boolean);
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a {@link SpiceClientGtk.Display} associated with the
         * session had keyboard focus.
         * @since 0.8
         * @default false
         */
        get auto_usbredir(): boolean;
        set auto_usbredir(val: boolean);
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a {@link SpiceClientGtk.Display} associated with the
         * session had keyboard focus.
         * @since 0.8
         * @default false
         */
        get autoUsbredir(): boolean;
        set autoUsbredir(val: boolean);
        /**
         * Returns `true` if the pointer is currently grabbed by this session.
         * @since 0.27
         * @read-only
         * @default false
         */
        get pointer_grabbed(): boolean;
        /**
         * Returns `true` if the pointer is currently grabbed by this session.
         * @since 0.27
         * @read-only
         * @default false
         */
        get pointerGrabbed(): boolean;
        /**
         * {@link SpiceClientGLib.Session} this {@link SpiceClientGtk.GtkSession} is associated with
         * @since 0.8
         * @construct-only
         */
        get session(): SpiceClientGLib.Session;
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         * @since 0.32
         * @default true
         */
        get sync_modifiers(): boolean;
        set sync_modifiers(val: boolean);
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         * @since 0.32
         * @default true
         */
        get syncModifiers(): boolean;
        set syncModifiers(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GtkSession.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GtkSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GtkSession.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GtkSession.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GtkSession.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GtkSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link SpiceClientGtk.GtkSession} associated with the passed in {@link SpiceClientGLib.Session}.
         * A new {@link SpiceClientGtk.GtkSession} instance will be created the first time this
         * function is called for a certain {@link SpiceClientGLib.Session}.
         *
         * Note that this function returns a weak reference, which should not be used
         * after the {@link SpiceClientGLib.Session} itself has been unref-ed by the caller.
         * @param session {@link SpiceClientGLib.Session} for which to get the {@link SpiceClientGtk.GtkSession}
         */
        static get(session: SpiceClientGLib.Session): GtkSession;

        // Methods

        /**
         * Copy client-side clipboard to guest clipboard.
         *
         * Since 0.8
         */
        copy_to_guest(): void;
        /**
         * Copy guest clipboard to client-side clipboard.
         *
         * Since 0.8
         */
        paste_from_guest(): void;
    }

    namespace UsbDeviceWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The {@link SpiceClientGtk.UsbDeviceWidget.SignalSignatures.connect_failed | SpiceClientGtk.UsbDeviceWidget::connect-failed} signal is emitted whenever
             * the user has requested for a device to be redirected and this has
             * failed.
             * @signal
             * @run-first
             */
            'connect-failed': (arg0: SpiceClientGLib.UsbDevice, arg1: GLib.Error) => void;
            'notify::device-format-string': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            device_format_string: string;
            deviceFormatString: string;
            session: SpiceClientGLib.Session;
        }
    }

    /**
     * The {@link SpiceClientGtk.UsbDeviceWidget} struct is opaque and should not be accessed directly.
     * @gir-type Class
     */
    class UsbDeviceWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<UsbDeviceWidget>;

        // Properties

        /**
         * Format string to pass to `spice_usb_device_get_description()` for getting
         * the device USB descriptions.
         * @construct-only
         * @default null
         */
        get device_format_string(): string;
        /**
         * Format string to pass to `spice_usb_device_get_description()` for getting
         * the device USB descriptions.
         * @construct-only
         * @default null
         */
        get deviceFormatString(): string;
        /**
         * {@link SpiceClientGLib.Session} this {@link SpiceClientGtk.UsbDeviceWidget} is associated with
         * @construct-only
         */
        get session(): SpiceClientGLib.Session;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UsbDeviceWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UsbDeviceWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](session: SpiceClientGLib.Session, device_format_string: string | null): UsbDeviceWidget;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UsbDeviceWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UsbDeviceWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UsbDeviceWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UsbDeviceWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;
    /**
     * An opaque type that represents a grab sequence.
     * @gir-type Struct
     */
    class GrabSequence {
        static $gtype: GObject.GType<GrabSequence>;

        // Constructors

        constructor(keysyms: number[]);

        static ['new'](keysyms: number[]): GrabSequence;

        static new_from_string(str: string): GrabSequence;

        // Methods

        /**
         * Creates a string representing the `sequence`.
         * @returns a newly allocated string representing the key sequence
         */
        as_string(): string;
        /**
         * Creates a copy of the `sequence`.
         * @returns a copy of `sequence`
         */
        copy(): GrabSequence;
        /**
         * Free `sequence`.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type GtkSessionClass = typeof GtkSession;
    /**
     * @gir-type Alias
     */
    type UsbDeviceWidgetClass = typeof UsbDeviceWidget;
    /**
     * @gir-type Struct
     */
    abstract class UsbDeviceWidgetPrivate {
        static $gtype: GObject.GType<UsbDeviceWidgetPrivate>;
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

export default SpiceClientGtk;

// END
